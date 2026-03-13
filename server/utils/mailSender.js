const nodemailer = require("nodemailer");
require('dotenv').config()


const mailSender = async (email, title, body) => {
<<<<<<< HEAD
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });


        let info = await transporter.sendMail({
            from: `"Study Notion" <${process.env.MAIL_USER}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log(info);
        return info;
=======
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                port: 465,
                secure: true,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })

            let info = await transporter.sendMail({
                from: `"Study Notion" <${process.env.MAIL_USER}>`,
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
>>>>>>> 6dedbab9212d570d538d2c158f15220dafe9728f
    }
    catch (error) {
        console.log(error.message);
        throw error;
    }
}


module.exports = mailSender;
