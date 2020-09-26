const sgMail = require("@sendgrid/mail")


//const sendgridAPIKey="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"
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//sendgridAPIKey)

// sgMail.send({
//     to: "gbolahan.afuwape@gmail.com",
//     from:"gbolahan.afuwape@gmail.com",
//     subject: "Good luck charm",
//     text: "Thanks myself"


// })

const sendWelcomeEmail = (email,name)=>{

    sgMail.send({
        to: email,
        from:"gbolahan.afuwape@gmail.com",
        subject: "Thanks for joining us",
        text: `Welcome to the app,${name}. Let me know how I can help.`
    })

}


const sendGoodbyeEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from:"gbolahan.afuwape@gmail.com",
        subject: "Sad to say goodbye",
        text: `Could we have done better? ${name}, you can share your opinion`

    })


}

module.exports={
    sendWelcomeEmail,
    sendGoodbyeEmail
}



