// channels.js - Yahan sirf channels ki list rahegi

const CHANNELS = [
  // 🎬 ENGLISH Moviw Trailers
  { id: 'UCwjVIG1PAky261H355lU36g', category: 'trailer', language: 'english' }, // Marvel
  { id: 'UCiifkYAs_bq1pt_zbNAzYGg', category: 'trailer', language: 'english' }, // DC
  { id: 'UCF9imwPMSGz4Vq1NiTWCC7g', category: 'trailer', language: 'english' }, // Paramount Pictures
  { id: 'UC8IHAQMuiJdY6ALuhG7iU8Q', category: 'trailer', language: 'english' }, // FilmRise Movies
  { id: 'UCjmJDM5pRKbUlVIzDYYWb6g', category: 'trailer', language: 'english' }, // Warner Bros.
  { id: 'UC_5niPa-d35gg88HaS7RrIw', category: 'trailer', language: 'english' }, // Disney
  { id: 'UCq0OueAsdxH6b8nyAspwViw', category: 'trailer', language: 'english' }, // Universal Pictures
  { id: 'UCz97F7dMxBNOfGYu3rx8aCw', category: 'trailer', language: 'english' }, // Sony Pictures Entertainment
  { id: 'UCJ6nMHaJPZvsJ-HmUmj1SeA', category: 'trailer', language: 'english' }, // Lionsgate Movies
  { id: 'UCuPivVjnfNo4mb3Oog_frZg', category: 'trailer', language: 'english' }, // A24
  { id: 'UCQJWtTnAHhEG5w4uN0udnUQ', category: 'trailer', language: 'english' }, // Prime Video
  { id: 'UCWOA1ZGywLbqmigxE4Qlvuw', category: 'trailer', language: 'english' }, // Netflix


  // 🎬 Hindi Movie Trailers
  { id: 'UCjJKg01HAP01xCLVhDmnLhw', category: 'trailer', language: 'hindi' }, // Red Chillis Entertainment 
  { id: 'UCbTLwN10NoCU4WDzLf1JMOA', category: 'trailer', language: 'hindi' }, // YRF
  { id: 'UC3jMepkLKF8y4iiwWmAB3RA', category: 'trailer', language: 'hindi' }, // Zee Studios
  { id: 'UCKQKIY2YlI4L5QVg7hhfjrQ', category: 'trailer', language: 'hindi' }, // Dharma Productions
  { id: 'UCs56ffejFhWlCvlvRIdpb9Q', category: 'trailer', language: 'hindi' }, // Viacom 18
  { id: 'UCn9BuiRZGR_tPM2GGT4jN-w', category: 'trailer', language: 'hindi' }, // Excel Movies
  { id: 'UCSHLoG-bXj1aVA2T5y8t84A', category: 'trailer', language: 'hindi' }, // Balaji Motion Pictures
  { id: 'UCqjQu9qgL_eDXPwRnq45ZDQ', category: 'trailer', language: 'hindi' }, // Aamir Khan Talkies
  { id: 'UC7bd9i-yWpUOhvC72fATxrQ', category: 'trailer', language: 'hindi' }, // NadiadwalaGrandson
  { id: 'UC5goygOSqGm1-T3ats0it2w', category: 'trailer', language: 'hindi' }, // Sunshine Pictures
  { id: 'UC-LOdiPoxninevJ0DkleCLg', category: 'trailer', language: 'hindi' }, // Maddock Films


  // 🎵 HINDI Music
  { id: 'UCq-Fj5jknLsUf-MWSy4_brA', category: 'music', language: 'hindi' },   // T-Series
  { id: 'UCFFbwnve3yF62-tVXkTyHqg', category: 'music', language: 'hindi' },   // Zee Music Company
  { id: 'UC56gTxNs4f9xZ7Pa2i5xNzg', category: 'music', language: 'hindi' },   // Sony Music India
  { id: 'UC_A7K2dXFsTMAciGmnNxy-Q', category: 'music', language: 'hindi' },   // SaReGaMa Music
  { id: 'UCJrDMFOdv1I2k8n9oK_V21w', category: 'music', language: 'hindi' },   // Tips Official
  { id: 'UCOQZiBbxmbPo3euu6ECwFUA', category: 'music', language: 'hindi' },   // Universal Music India
  { id: 'UCo07fumrTn1w4AxcU4j_uDw', category: 'music', language: 'hindi' },   // SaReGaMa Music
  { id: 'UCdNZZ9znjaiOXNi004mHxSg', category: 'music', language: 'hindi' },   // Indie Music Label
  { id: 'UC3MLnJtqc_phABBriLRhtgQ', category: 'music', language: 'hindi' },   // SonyMusicIndiaVEVO
  { id: 'UCLtNvbkqea8wN_kGtfgx_Mw', category: 'music', language: 'hindi' },   // Desi Music Factory
  { id: 'UCP6uH_XlsxrXwZQ4DlqbqPg', category: 'music', language: 'hindi' },   // Shemaroo Filmi Gaane


  // Hindi OTT
  { id: 'UCZSNzBgFub_WWil6TOTYwAg', category: 'trailer', language: 'hindi' }, // Netflix india
  { id: 'UC4zWG9LccdWGUlF77LZ8toA', category: 'trailer', language: 'hindi' }, // Amazon India
  { id: 'UCXOgAl4w-FQero1ERbGHpXQ', category: 'trailer', language: 'hindi' }, // Zee5
  { id: 'UCOQNJjhXwvAScuELTT_i7cQ', category: 'trailer', language: 'hindi' }, // SonyLiv
  { id: 'UC0PTktRYpZXb6On0_zFKWIg', category: 'trailer', language: 'hindi' }, // JioHotstar

  // Hindi OTT
  { id: 'UCNJcSUSzUeFm8W9P7UUlSeQ', category: 'drama', language: 'hindi' }, // The Viral Fever
  { id: 'UCCKjHsAIxvjtWG8KOcLuG8Q', category: 'drama', language: 'hindi' }, // Alright!
  { id: 'UCNyeSfUfffmJXwA2_tmNG9A', category: 'drama', language: 'hindi' }, // The Screen Patti
  { id: 'UCdxbhKxr8pyWTx1ExCSmJRw', category: 'drama', language: 'hindi' }, // Girliyapa
  { id: 'UC_m9amgaxYJaNcOJfbQf-EA', category: 'drama', language: 'hindi' }, // Satish Ray


   // Travel
  { id: 'UChoyAdkZQVa4V7AbZshiLDg', category: 'drama', language: 'hindi' }, // Traveling Desi
  { id: 'UCYUq_wB2ieVws9K4kmjWcaQ', category: 'drama', language: 'hindi' }, // Indian Backpacker
  { id: 'UCRR2SN54K5WeQraIhPVxfwA', category: 'drama', language: 'hindi' }, // PRATIK JAIN vlogs
  { id: 'UCpunRuCSHQSKpyDRspHLEZQ', category: 'drama', language: 'hindi' }, // Ishan Goyal


  // 🌾 CHHATTISGARHI
  { id: 'UCYOUR_CG_CHANNEL_ID', category: 'music', language: 'chhattisgarhi' }, // Example CG Channel

  
  // 🥁 PUNJABI Music
  { id: 'UC9mqZ0c-N3351v5lXp8x58g', category: 'music', language: 'punjabi' }, // Speed Records
  { id: 'UCFX8go5jeQ_9_Pk9WFl5tmA', category: 'music', language: 'punjabi' }, // Divine
  { id: 'UCqG7Pok01R5zHhPT-UFBY1g', category: 'music', language: 'punjabi' }, // Gully Gang
  
  // 🍿 TELUGU
  { id: 'UC5WKImZnSjwYSEZO4XQOXmA', category: 'music', language: 'telugu' },  // Aditya Music
  
  // 🚩 MARATHI
  { id: 'UC8v55h6J4J5r2-qP2f94Pkw', category: 'music', language: 'marathi' }, // Zee Music Marathi
  { id: 'UCe7UKRSJM6ITMfXX-CbET0w', category: 'music', language: 'marathi' }, // Everest Marathi
  { id: 'UCF_DDGDf4mysRZ9yB-AyL9Q', category: 'music', language: 'marathi' }, // Ultra Music Marathi
  { id: 'UC_HY4sdpCo57Qyy5dyJA-8g', category: 'drama', language: 'marathi' }, // Mirchi Marathi
  { id: 'UCUw8vQF-X7CJqdVpxBYcavQ', category: 'drama', language: 'marathi' }, // Bharatiya Digital Party
  { id: 'UCUw8vQF-X7CJqdVpxBYcavQ', category: 'drama', language: 'marathi' }, // Bharatiya Digital Party


  // 🚩 Sports
  { id: 'UCmqfX0S3x0I3uwLkPdpX03w', category: 'sports', language: 'hindi' }, // Star Sports
  { id: 'UCt2JXOLNxqry7B_4rRZME3Q', category: 'sports', language: 'hindi' }, // ICC

  // 🏛️ ARCHITECTURE & TEMPLES (Mandiron ke rahasya)
  { id: 'UC_PRAVEEN_MOHAN_ID', category: 'architecture', language: 'hindi' }, // Praveen Mohan (Hindi/English)
  { id: 'UC_PROJECT_SHIVOHAM_ID', category: 'architecture', language: 'hindi' }, // Project Shivoham

  // 🕵️‍♂️ MYSTERIES & UNKNOWN FACTS (Rahasya)
  { id: 'UC_RAHASYA_TALK_SHOW_ID', category: 'mystery', language: 'hindi' }, // Rahasya Talk Show
  { id: 'UC_GETSETFLY_ID', category: 'mystery', language: 'hindi' },         // GetsetflyFACT / Gaurav Thakur

  // 📜 HISTORY & CULTURE (Asli Itihas)
  { id: 'UC_KEERTHI_HISTORY_ID', category: 'history', language: 'english' }, // Keerthi History
  { id: 'UC_ABHIJIT_CHAVDA_ID', category: 'history', language: 'hindi' },    // Abhijit Chavda


  // Yahan aap aage jitne chahein utne channels add karte jayiye...
];

// NAYA: Is list ko doosri files ke liye open karna
module.exports = CHANNELS;