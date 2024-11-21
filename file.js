const fs = require("fs");
const os =require('os');

console.log(os.cpus().length)
    
// Sync... blocking....
// fs.writeFileSync('./test.txt', 'hello');

// // Async...non blocking....
// fs.writeFile("./test.txt", "hello",(err) => {});

// console.log("1");

fs.readFile("contact.txt","utf-8",(err,result)=>{
// console.log(result);
});
// console.log("2");
// console.log("2");

// default thread pool size=4
// max? -8core cpu-8








// const res=fs.readFile("./contact.txt", "utf-8")
// console.log(res);

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt", `${Date.now()} hey there\n`);

// // fs.cpSync('./test.txt',"./copy.txt");

// // fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt"))

// fs.mkdirSync('my-docs/a/b',{recursive:true});