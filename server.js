// server.js - Ye aapke app ka dimaag hai

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// App shuru karte hain
const app = express();
app.use(express.json());
app.use(cors());

// ----------------------------------------------------
// 1. DATABASE CONNECTION (Yahan apna MongoDB Link dalna hoga)
// ----------------------------------------------------
// Abhi ke liye ye local link hai, baad me hum Cloud wala dalenge
const MONGO_URI = "mongodb+srv://trend:Trend9522@trend-db.aarrtju.mongodb.net/?appName=trend-db"; 

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected! Database taiyar hai."))
  .catch(err => console.log("❌ Database Error:", err));

// ----------------------------------------------------
// 2. SCHEMA (DATA MODEL) - THE TIME BOMB 💣
const videoSchema = new mongoose.Schema({
  title: String,       
  videoUrl: String,    
  thumbnail: String,   
  channelName: String, 
  type: String,        // Ye batayega ki ye 'video' hai ya 'short'
  category: String,    // Ye batayega ki ye 'trailer', 'music', ya 'sports' hai
  language: String,
  createdAt: { 
    type: Date, 
    default: Date.now, 
    index: { expires: '72h' } 
  }
});

const Video = mongoose.model('Video', videoSchema);

// ----------------------------------------------------
// 3. API ROUTES (App is raste se data lega)
// ----------------------------------------------------

// Test Route: Check karne ke liye ki server chal raha hai
app.get('/', (req, res) => {
  res.send('Trend48 Server is Running! 🚀');
});

// Naya Video Save karne ke liye (Create)
app.post('/add-video', async (req, res) => {
  try {
    const newVideo = new Video(req.body);
    await newVideo.save();
    res.status(201).json({ message: "Video Added! 48 Hours starts now ⏳", data: newVideo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Saare Videos dekhne ke liye (Read)
app.get('/videos', async (req, res) => {
  try {
    // Sirf wahi videos milenge jo delete nahi huye hain
    const videos = await Video.find().sort({ createdAt: -1 }); 
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ⏰ THE ALARM CLOCK FOR ROBOT (Naye videos aur notifications ke liye)
const { exec } = require('child_process');

function wakeUpRobot() {
  console.log("⏰ Alarm bacha! Robot ko naye videos dhoondhne bhej raha hu...");
  
  // Yeh line cloud ke andar background mein 'fetcher.js' ko run karegi
  exec('node fetcher.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Robot Error: ${error.message}`);
      return;
    }
    console.log(`🤖 Robot Report:\n${stdout}`);
  });
}

// Har 1 Ghante (1 Hour) mein Robot apne aap chalega (1000ms * 60s * 60m)
const ONE_HOUR = 1 * 60 * 60 * 1000;
setInterval(wakeUpRobot, ONE_HOUR);

// Optional: Agar aap chahte hain ki server start hote hi ek baar turant check kare
wakeUpRobot();

// ----------------------------------------------------
// 4. SERVER START
// ----------------------------------------------------
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server chalu ho gaya! Port: ${PORT}`);
});

