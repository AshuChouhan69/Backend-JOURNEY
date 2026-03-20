console.log("starting my backend journey")


let catMe = require("cat-me") // require kar lo fir

console.log(catMe()) // call kar do  fir console me print kar do 

const express  = require("express") 

const app = express() // server create kr chuka ho 

app.listen(3000) // server start kerna ke liya 



// Day - 1  notes - 

// 1. how to run script outside the brwser - Normally JavaScript browser ke andar run hoti hai, lekin Node.js ki help se hum JavaScript ko browser ke bahar bhi run kar sakte hain. Node.js JavaScript engine (V8) use karta hai aur isse hum server-side applications, APIs aur scripts run kar sakte hain.

// 2. what is pacakages - Package ek reusable code ka collection hota hai jo kisi developer ne banaya hota hai aur use publicly share kar diya jata hai taaki dusre developers bhi use kar saken.

// 3.  how to install packges - Package ko use karne ke liye pehle npm se install karte hain, phir usko import ya require karke project me use karte hain.
// command like -  npm install karo ess-package ke 
// npm i package name 
// npm i cat-me

// 4. how to use packages - Packages ko use karne ke liye pehle require karte hain aur require ke andar jis package ko use karna hota hai uska naam likhte hain.
// require("cat-me")

// 5. packages.json - package.json ek configuration file hoti hai jo project ki information aur dependencies ko store karti hai.
// Detail Explanation
// Jab hum Node.js project banate hain, to package.json file me project ka naam, version, scripts aur kaun-kaun se packages use ho rahe hain wo sab likha hota hai. Ye file project ko manage karne me help karti hai.
// Example cheeze jo isme hoti hain
// project name
// version
// dependencies
// scripts (start, test etc.)
// Example:
// {
//   "name": "my-project",
//   "version": "1.0.0",
//   "dependencies": {
//     "express": "^4.18.0"
//   }
// }

// 6. node_modules - Short Interview Answer
// node_modules ek folder hota hai jisme project ke saare installed packages store hote hain.
// Detail Explanation
// Jab hum npm se koi package install karte hain, to wo automatically node_modules folder ke andar save ho jata hai. Is folder me main package ke saath uski dependencies bhi hoti hain.
// Example:
// Agar hum Express.js install karein:
// npm install express
// To Express aur uske related packages node_modules folder me aa jayenge.

// 7. packages lock.json - package-lock.json packages ke exact version ko lock karke rakhti hai. and Matlab package jis dependencies par depend karta hai, package-lock.json un sab dependencies ke exact versions ko store karke rakhti hai.
// Agar package-lock.json file nahi hogi to kya hoga?
// Agar package-lock.json nahi hogi to exact dependency versions maintain nahi honge aur har system par different versions install ho sakte hain.

// 8. what is server - Server ek aisi machine ya system hota hai jise program kiya jata hai taaki jab bhi user request bheje, to server us request ko process karke proper response de.





// 9. starting a server but first we do - 
// npm init -y command automatically package.json file create kar deti hai default settings ke saath.”
// Detail Explanation
// “Normally jab hum npm me npm init likhte hain to wo project ke baare me questions puchta hai (name, version, description, etc.).
// Lekin jab hum npm init -y likhte hain to ye sab questions skip ho jate hain aur directly default values ke saath package.json file ban jati hai.”
// Ye command Node.js project start karte time use hoti hai.
// Example
// npm init -y  mtlb hum ek node.js application start kerna wale h  ,,,, ess comand ko jab run kertta h tab packages.json file create hoti h mtlb ki aage chal ke esma  ek node.js ki application aage jkar bana gi 
// Is command se project me automatically package.json create ho jayegi.
// npm init -y command ek new Node.js project initialize karne ke liye use hoti hai. Is command ko run karne par project me automatically package.json file create ho jati hai, jisme project ki basic information aur future me install hone wale packages ki details store hoti hain.


// 10. how to create a server with express - first we install express npm i express 
// Jab hum Node.js me server banana chahte hain to hume Express.js framework ki zarurat hoti hai.
// Isliye hum npm ki help se  npm install express command run karke Express ko project me install karte hain.
// Iske baad Express node_modules folder me install ho jata hai aur package.json me dependency add ho jati hai.

// 11. Install karne ke baad hume code me Express ko require/import karna padta hai.
// require("express") fir usko ek ek variable ke ander save bhi kerna padhta  h 


// 12. const express = require("express")
// Kya ho raha hai
// Is line me hum Express.js package ko apne project me import kar rahe hain.
// Simple words me
// require() Node.js ka function hai
// Ye installed package ko code me use karne deta hai
// Interview me bolne wali line
// Is line me hum require function ki help se Express package ko import kar rahe hain taaki uski functionalities use kar saken



// 13. const app = express()
// Kya ho raha hai
// Yaha hum Express ka application object create kar rahe hain.
// Simple words me
// express() ek function hai
// Isko run karne par ek app object milta hai
// Ye app object server ko handle karta hai
// Isi object se hum:
// routes banate hain
// middleware use karte hain
// server control karte hain
// Interview line
// express() function call karne par ek application object milta hai jo server ko manage karne ke liye use hota hai.

// 14. app.listen(3000)
// Kya ho raha hai
// Is line se server start ho jata hai.
// Simple words me
// listen() server ko specific port par run karta hai
// Yaha port 3000 hai
// Ab server user requests ko accept kar sakta hai
// Example
// Agar browser me likho:
// localhost:3000
// To request server tak jayegi.
// Interview line
// listen method server ko start karta hai aur usko ek specific port par requests listen karne ke liye ready karta hai.”
// Complete Flow (Interview me bolne ke liye)
// Sabse pehle hum Express package ko require karte hain. Uske baad express() function call karke app object create karte hain jo server ko represent karta hai.
// Phir app.listen() method se server ko specific port par start kar dete hain.” 


