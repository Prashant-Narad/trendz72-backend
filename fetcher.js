// fetcher.js - The Ultra Clean Robot 🤖 (No Shorts Allowed)

const { google } = require('googleapis');
const mongoose = require('mongoose');
const CHANNELS = require('./channels');

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const YOUTUBE_API_KEY = "AIzaSyAZwJXWitBM9ylxOuxlb9D-ImRedDM2gmw"; 
const MONGO_URI = "mongodb+srv://trend:Trend9522@trend-db.aarrtju.mongodb.net/?appName=trend-db"; 

// SCHEMA SETUP (Type hata diya kyunki ab sirf videos hi honge)
const videoSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  thumbnail: String,
  channelName: String,
  category: String,  
  language: String,
  createdAt: { type: Date, default: Date.now, index: { expires: '72h' } }
});

const Video = mongoose.model('Video', videoSchema);

const youtube = google.youtube({
  version: 'v3',
  auth: YOUTUBE_API_KEY
});

// 🛡️ THE SECURITY GUARD: Check karega ki video Short toh nahi hai
async function checkIsShort(videoId) {
  try {
    const response = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      method: 'HEAD' 
    });
    
    if (response.url.includes('/shorts/')) {
      return 'short';
    } else {
      return 'video'; 
    }
  } catch (error) {
    return 'video'; 
  }
}

// 🤖 MAIN ROBOT FUNCTION
async function fetchNewVideos() {
  console.log("🔍 Ultra Smart Robot naye videos dhoondh raha hu...");

  for (const channel of CHANNELS) { 
    try {
      const response = await youtube.search.list({
        part: 'snippet',
        channelId: channel.id, 
        order: 'date', 
        maxResults: 1, 
        type: 'video'
      });

      const videoData = response.data.items[0];

      if (videoData) {
        const title = videoData.snippet.title;
        const videoId = videoData.id.videoId;
        const channelName = videoData.snippet.channelTitle;
        const thumbnail = videoData.snippet.thumbnails.high.url;

        // 🚫 CHECK 1: Embed allowed hai ya nahi?
        const statusCheck = await youtube.videos.list({ part: 'status', id: videoId });
        const isEmbeddable = statusCheck.data.items[0]?.status?.embeddable;

        if (!isEmbeddable) {
            console.log(`🚫 Skipped: ${title} (Owner ne dusre app me chalana band kiya hai)`);
            continue; 
        }

        // 🛡️ CHECK 2: THE ANTI-SHORT SHIELD
        const videoFormat = await checkIsShort(videoId);
        if (videoFormat === 'short') {
            console.log(`⏭️ Skipped: ${title} (Yeh ek Short video hai, V1 me hum ise nahi lenge)`);
            continue; // Isko chhod do aur agle video par jao
        }

        // Agar dono check pass ho gaye, tabhi database mein aage badho
        const exists = await Video.findOne({ videoUrl: videoId });

        if (!exists) {
          await Video.create({
            title: title,
            videoUrl: videoId,
            thumbnail: thumbnail,
            channelName: channelName,
            category: channel.category,
            language: channel.language || 'hindi' 
          });
          console.log(`✅ Saved: [${channel.category.toUpperCase()}] ${title}`);

          // 🔥 FIREBASE AUTOMATION 
          if(channel.language) {
             const message = {
                notification: {
                  title: `🔥 Naya ${channel.language.toUpperCase()} Video Aaya Hai!`,
                  body: `${title} - Sirf 72 ghante ke liye. Jaldi dekh bhai!`,
                },
                topic: channel.language 
              };

              try {
                await admin.messaging().send(message);
                console.log(`🔔 Notification Bhej Diya gaya -> Topic: ${channel.language}`);
              } catch (error) {
                console.log("❌ Notification Error:", error.message);
              }
          }
          
        } else {
          console.log(`⚠️ Pehle se hai: ${title}`);
        }
      }
    } catch (error) {
      console.log(`❌ YouTube Error for Channel [${channel.id}]:`, error.message);
    }
  }
}

// 🚀 THE MASTER CONTROLLER
async function runRobot() {
  try {
    console.log("⏳ Database se jud rahe hain...");
    await mongoose.connect(MONGO_URI);
    console.log("✅ Robot Database se jud gaya!");

    await fetchNewVideos();

    console.log("🎉 Saare naye aur PERFECT videos aa gaye! Robot aaram karne ja raha hai.");
    mongoose.connection.close();
    process.exit(0); 

  } catch (error) {
    console.log("❌ Fatal Error:", error);
    mongoose.connection.close();
    process.exit(1);
  }
}

// System ko Start Karo
runRobot();