const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcript = require("bcryptjs");

const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 70 + 1); //1'den 70'e kadar random avatar üretmek için
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

//Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email }); //email i bul
    const defaultAvatar = generateRandomAvatar(); //bunu yapmadan direkt generateRandomAvatar'ı çağırsaydık fonksiyonun içindeki tüm yazı gelecekti.
    //bu sayede fonksiyonu çalıştırıp değişkene tatayarak bizim işimize yarayan kısmı almış olduk
    if (existingUser) {//eğer kullanıcı var ise
      return res
        .status(400)
        .json({ error: "Bu email adresi ile daha önce kayıt yapıldı" });
    }

    const hashedPassword = await bcript.hash(password, 10); //güvenli şifreleme için

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      avatar: defaultAvatar,
    });
    await newUser.save(); //veritabanına kaydediyor

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
});

//Login
router.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email})
        
        if(!user){
            return res.status(401).json({error:"Kullanici Bulunamadi!"})
        }

        const isPasswordValid=await bcript.compare(password,user.password)//burada user şifresi ile girilen şifre karşılaştırılması yapılıyor
        if(!isPasswordValid){//girilen şifre ile kayıtlı şifre eşleşmiyorsa
            return res.status(401).json({error:"Girilen şifre kayıtlı şifre ile eşleşmiyor"})
        }
        res.status(200).json({
            id:user._id,
            email:user.email,
            password:user.password,
            role:user.role,
            avatar:user.avatar
        })
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error" });
    }
})

module.exports = router;
