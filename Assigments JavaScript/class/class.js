class division{
    constructor(){
    }
    div() {
        const prompt = require('prompt-sync')();
        let firstNo=Number(prompt("enter first no. you want to divide : "))
        let SecondNo=Number(prompt("enter Second no. you want to divide : "))

        return "Answer of division is:" +firstNo/SecondNo
    }
}
let mydiv= new division()
console.log(mydiv.div())