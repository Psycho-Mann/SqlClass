let [computer_score, user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock': {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' :{
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' :{
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }
}
function checker(input){
    var choices = ["rock", "scissor", "paper"];
    var num = Math.floor(Math.random()*3);
    
    document.getElementById("comp_choice").innerHTML =
    `Computer choice <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML =
    `You choose <span> ${input.toUpperCase()} <span>`;
    
    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText ="background-color: #cefdce; color: #689f38"
            result_ref.innerHTML ="you win";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText ="background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML ="you lose";
            computer_score++;
            break;
            default:
                result_ref.style.cssText ="background-color: #e5e5e5; color:#808080";
                result_ref.innerHTML ="draw";
                break;

        }
        document.getElementById("computer_score").innerHTML = computer_score;
        document.getElementById("user_score").innerHTML = user_score;

        let buttons = document.querySelectorAll(".weapons button");
let options = ["rock", "paper", "scissor"];

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        checker(options[index]);
    });
});

}