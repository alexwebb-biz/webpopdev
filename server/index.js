import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import fetch from 'node-fetch';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());
app.use(cors());

const emailTemplate = (title,body) => `<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <style>
      ...
    </style>
  </head>
  <body>
    <h1>${title}</h1>
    <p>${body}</p>
  </body>
</html>`;

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "alexwebb.biz@gmail.com",
        pass: "nzinoecpufooqama",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("-------EMAIL CLIENT-------");
        console.log("Ready to send");
    }
})

app.post("/api/requestQuote", (req,res) =>{
    const full_name = req.body.full_name;
    const email_address = req.body.email_address;
    const phone_number = req.body.phone_number;
    const business_info = req.body.business_info;
    
    console.log([full_name, email_address, phone_number, business_info]);

    const mail = {
        from: full_name,
        to: "alexwebb.biz@gmail.com",
        subject: "Enquiry form submission",
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            ...
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');
              .header{
                background:#03a9f4;
                width:100%;
                height:200px;
                padding-top:50px;
                color:white;
              }
              h1{
                color:white;
                font-size:2rem;
                font-weight:600;
                font-family:'Roboto', sans-serif;
                color:white;
                text-align:center;
              }
              .container{
                background:#07a59d;
                height:80vh;
                width:100%;
                padding-top:10vh;
                padding-bottom:10vh;
                color:white;
              }
              p{
                font-family:'Roboto', sans-serif;
                font-size:1.3rem;
                font-weight:500;
                text-align:center;
                padding-top:2vh;
                color:white;
              }
            </style>
          </head>
          <body>
          <div class="header">
              <h1>Webpopdev response</h1>
          </div>
          <div class="container">
          <p>Name: ${full_name}</p>
          <p>Email: ${email_address}</p>
          <p>Phone Number: ${phone_number}</p>
          <p>Business Information: ${business_info}</p>
          </div>
          </body>
        </html>`
    };

    contactEmail.sendMail(mail, (error) => {
        if(error) {
            res.json({status: "error"});
            console.log(error);
        } else{
            res.json({status: "Message sent"});
            console.log("Message received");
        }
    })
});



app.post("/api/contact", (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const company_info = req.body.company_info;
    const message = req.body.message;

    console.log([name, email, phone, company_info, message]);

    const mail = {
        from: name,
        to: "alexwebb7@gmail.com",
        cc:  email,
        subject: "Contact Form Submission",
        html: 
            `<div class="container" style="background-color:pink; height;100vh; width:100%; text-align:center">
               <p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Number: ${phone}</p>
               <p>Company Info: ${company_info}</p>
               <p>Message: ${message}</p>
             </div>`,
};

    contactEmail.sendMail(mail, (error) => {
        if(error) {
            res.json({status: "ERROR"});
        } else {
            res.json({status: "Message Sent"});
            console.log("Message received");
        }
    });
});

const pool = mysql.createPool({
    user:"bbdd34f69a1611",
    host: "eu-cdbr-west-03.cleardb.net",
    password: "24e2cb62",
    database: "heroku_d8a55eab3ddf99e",
});

pool.query('select 1 + 1', (err, rows) => { /* */ });

app.post("/api/register", (req,res) => {

    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    pool.query("INSERT INTO login_page (id, username, password, email) VALUES (FLOOR(RAND() * 40000) + 100000, ?,?,?)", 
    [username, password, email],
    (err, result) => {
    if (err){
        res.send({message: err});
    }
    if (res.length>0) {
        res.send({message: "Logged in successfully"});
    } else {
        res.send({message: "Wrong username/password combination"})
    }
})});

app.post("/api/login", (req,res) => {
    
    const username = req.body.username
    const password = req.body.password
    db.query("SELECT * FROM login_page WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
        if (err) {
            res.send({message: err})
        }  
        if (result.length>0) {
            res.send({message: "Logged in Successfully"});
        } else {
            res.send({message: "Wrong username/password combination"});
            
        }
    }
  );
})

app.listen(process.env.PORT || 8000, () => {
    console.log("-------SERVER-------");
    console.log("Running Server");
})




