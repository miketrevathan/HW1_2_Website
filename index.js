function mitQuiz(){
    
var questions = [
    {
        prompt: "Where is MIT?\n(a) Texas \n(b) California \n(c) Massachusetts",
        answers: "c"
    },
    {
        prompt: "What is MIT's mascot?\n(a) Pilgrim \n(b) Beaver \n(c) Tiger",
        answers: 'b'
    },
    {
        prompt: "Who is the founder of MIT?\n(a) William Barton Rogers \n(b) Thomas Jeffereson \n(c) Charles Darwin",
        answers: 'a'
    }
];

var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt)
    if(response == questions[i].answers){
        score++;
        alert("Correct!");
    } else{
        alert("WRONG!");
    }
}

alert(" You Got" + score + " / " + questions.length);
}

function selVal(){
   var selV = document.getElementById("selectid").value;
    console.log(selV);
    switch(selV){
        case "MIT Classes":
        document.getElementById("x").src="mitclass.JPG";
        break;
        case "Program":
        document.getElementById("x").src="sdm.JPG";
        break;
        case "Company":
        document.getElementById("x").src="chevron.JPG";
        break;
        case "Job":
        document.getElementById("x").src="drillship.JPG";
    }
    }

function mform(){
    var FN = document.getElementById("fname").value;
    var LN = document.getElementById("lname").value;
    var EM = document.getElementById("email").value;
    console.log(FN + LN+ EM);
   }