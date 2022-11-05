let questions=[{
    "ques":"After how many years Pakistan got its first constitution?",
    "A": "5 years",
    "B":"7 years",
    "C":"9 years",
    "CorrectAnswer": "C"
},
{
    "ques":"Who was Mohammad Ali Bogra??",
    "A": "Prime Minister",
    "B":"Law Minister",
    "C":"President",
    "CorrectAnswer": "A"
},
{
    "ques":"When first constitution of Pakistan was enforced?",
    "A": "1955",
    "B":"1956",
    "C":"1957",
    "CorrectAnswer": "B"
}
]
var index=0;
while (index<questions.length){
        
        const data=questions[index]
        console.log(index+1,data.ques)
        console.log("A. ",data.A)
        console.log("B. ",data.B)
        console.log("C. ",data.C)

        let userAnswer=prompt("Questio No "+ (index+1) + "  Enter your answer A,B or C").toUpperCase()

        if (userAnswer==data.CorrectAnswer){
            console.log("Congratulations your answer is correct")
        }
        else{
            console.log("Wrong Answer")
        }
        index++

}
if(index==questions.length){
    console.log("Thank you for participating in the quiz")
}
