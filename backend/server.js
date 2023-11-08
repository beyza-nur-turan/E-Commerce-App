const express = require("express");
const mongoose = require("mongoose");// mongoose js kütüphanesini içe aktarmak için kullanıldı bir nevi import
const dotenv = require("dotenv");
const logger =require("morgan"); //morgan uygulamanın çalışma durumunu performansını izlemek için güzel bir kütüphanedir
//özellikle canlı çalışan uygulamalarda geliştiriciye önemli geri dönüşler sağlar.
const app = express();
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error;
  }
};
//!middlewares
app.use(logger("dev"))//development modunda morgan kullanımı
app.use(express.json())//gelen tüm datalar json'a çevriliyor
//!middlewares finish

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});