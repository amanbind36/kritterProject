

function chatboat(question){
    let obj={
        "What is your name?":"My name is Chatbot",
        "your name ":"My name is Chatbot",
        "name":"My name is Chatbot",
        "How can I help you?":"I can assist you with your queries",
        "how can help":"I can assist you with your queries",
        "help":"I can assist you with your queries",
        "please help":"I can help you with your queries",
        "What is the weather today?":"The weather is sunny",
        "weather today":"The weather is sunny",
        "weather":"The weather is sunny",
        

    };

    let ans=question.toLowerCase();
    for(let key in obj){
        if(ans.includes(key)){
            return obj[key];
        }
    }
    return "please Enter valid Question"



}
//enter your input
let question="weather today"

console.log(chatboat(question))