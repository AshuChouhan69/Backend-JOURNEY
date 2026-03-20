const express = require("express")

const app = express() // server instance create krna

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get("/about", function (req, res) {
    res.send("This is about page")
})

app.get("/home", (req, res) => {
    res.send("This is Home page")
})

app.listen(3000) // server start krna


// Day-2 

// 1. const app = express()   // server instance create karna
// Jab hum express() function ko call karte hain to ek server instance create hota hai jise hum app variable me store kar lete hain. Ye app object server ko control karne ke liye use hota hai.”
// Is app object se hum kya kar sakte hain
// routes bana sakte hain → app.get()
// middleware use kar sakte hain
// server start kar sakte hain → app.listen()
// Ye sab Node.js application me server handle karne ke liye use hota hai.

// 2. npx nodemon script.js kya karta hai - 
// npx nodemon script.js command Node.js file ko run karti hai aur agar code me change ho to server automatically restart ho jata hai.
// Detail Explanation
// Nodemon ek tool hai jo development ke time use hota hai
// Ye file changes ko detect karta hai
// Jaise hi code change hota hai server automatically restart ho jata hai
// Ye command Node.js application run karte waqt developer ka kaam easy bana deti hai.
// script.js run hoga
// code change hote hi server restart ho jayega

// 3. npx and npm differance -
// npm (Node Package Manager)
// Ye use hota hai packages install karne ke liye
// Example:
// npm install express
// kya karega:
// express install karega
// node_modules me save karega
// package.json me entry add karega
// Matlab: permanent install 

// npx (Node Package Execute)
// Ye use hota hai direct run karne ke liye bina install kiye
// Example:
// npx create-react-app myApp
// kya karega:
// temporary package download karega
// run karega
// baad me delete bhi ho sakta hai
// Matlab: temporary use 
