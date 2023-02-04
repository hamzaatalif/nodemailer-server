const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("hello world!")
})

app.post("/",(req,res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "fizaatalif@gmail.com",
            pass: "hamzalovesfizza"
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: "fizaatalif@gmail.com",
        subject: `Message from ${req.body.email}`
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if (error){
            console.log(error)
            res.send(error)
        }
        else {
            console.log("email sent")
            res.send("success")
        }
    })
})

app.listen(PORT,()=>{
    console.log(`app is listening on port: ${PORT}`)
})