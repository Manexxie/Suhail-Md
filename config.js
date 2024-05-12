const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="malukula006@gmail.comgmail.com"
global.location="Africa,zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/zimbabwe";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HfDrgRKpcWMHf0rJmWY4DL";
global.website=process.env.GURL || "https://chat.whatsapp.com/HfDrgRKpcWMHf0rJmWY4DL" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "263781512420" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263782512420";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  ".SUHAIL_06_16_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDcxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU1LFxuICAgICAgICAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDcxLFxuICAgICAgICA5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXUFBzd1lUdzllRG9tbXZKREU0c1pSbnBlSm5mRU1uUldxSWU0dTFRNzdjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjA2ODQ2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzYyRTU0NEFDQTc1NUYzQTE5RUYzRjhFMzU0ODMwRUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NDk0NTkyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE2MDY4NDYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOTA0MUZFNzA2MzA4MzBGMjM1Q0E2QTU3MzJFODgwMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU0OTQ1OTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTYwNjg0NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYzRDRFQThCNzAyNzMzRkUyQTgzREFENTk0NzRCRjMwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTQ5NDU5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjA2ODQ2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0JCOTJFMTZCMjA4REU2ODY0MzJCREI1QzgyOTMzREVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NDk0NTk2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpCVmQ3Y1pGUzlLalFuelozOUV0bHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDA4ODJkNTEtNTdhOC00M2NmLWIxMjYtM2ZjZWEwMzc5MjMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICA0MCxcbiAgICAgIDE2LFxuICAgICAgMjMxLFxuICAgICAgMjMzLFxuICAgICAgMTQwLFxuICAgICAgMzYsXG4gICAgICA3OSxcbiAgICAgIDIwNSxcbiAgICAgIDE1NCxcbiAgICAgIDEwMixcbiAgICAgIDMsXG4gICAgICAxNzgsXG4gICAgICAxNTYsXG4gICAgICA0OSxcbiAgICAgIDc5LFxuICAgICAgMTA5LFxuICAgICAgMjAwLFxuICAgICAgMjcsXG4gICAgICA0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgOTUsXG4gICAgICAyMTAsXG4gICAgICAxNDcsXG4gICAgICAxMjYsXG4gICAgICA2MyxcbiAgICAgIDExMixcbiAgICAgIDc3LFxuICAgICAgNTQsXG4gICAgICAxNjQsXG4gICAgICAyMDgsXG4gICAgICAzMSxcbiAgICAgIDE0NixcbiAgICAgIDM1LFxuICAgICAgMjE0LFxuICAgICAgMjIsXG4gICAgICAxODIsXG4gICAgICAyNDQsXG4gICAgICAyNyxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKVEpXU0czUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE2MDY4NDYwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MzMxNzYyNDE0NDA4MToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkdvam8gc2F0b3J18J+SrlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00rMHRwMEdFTHE5Z2JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMllndVY4aE1FQWRaWm1VaDg5d3lEYm9hMXJqVUVwenMxcjllNG9memtrQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLTHN5d2RYYXR5bVBnOGJKNWVoUmdwbVIrM1FTOUp4eklUREYxQm95MCswNzFOK0J6Zi9nZG1RNDFPelFGNWtVeDNQcHBSbkpNZkdweGlzVDc0NHdCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMWkZ0R0pUbUxIMEJHRDRobzNZSjgxRTNPazFyK2VPVEpUb1RhL2pRNitaZ3dvSFVtVWg1R1h6cGduc3ZyT0Z5M2JLRDRaRFZHa0d4QVFMM2QrbzRCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTYwNjg0NjA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU0OTQ1OTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJNmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUk2ay5qc29uIjogIntcImtleURhdGFcIjpcIkwvSWk4TEZ5MEt6NnJXTmFJYUpNMDA0bllWT3BaV1ZHeWcxV09SdDl2TU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY3MjMyMTYxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
