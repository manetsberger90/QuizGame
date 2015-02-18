var correctAnswers = 0;


alert ("Test your knowledge!");;
var question1 = prompt('What restaurant is famous for the following "Where dinner IS the show"?');
if (question1 === 'Benihanas') {
    correctAnswers += 1;
    }

var question2 = prompt('Socrates was a what?');
if (question2 === 'Philosopher') {
    correctAnswers += 1;
}

var question3 = prompt('The term "Pale Blue Dot is referring to what?');
if (question3 === 'Earth') {
    correctAnswers += 1;
}

var question4 = prompt('What coding language is this being written in?');
if (question4 === 'JavaScript') {
    correctAnswers += 1;
}

var question5 = prompt('If Sally has 3 apples, and Dan takes 1 apple, but then Henry gives 12 apples to Sally, how many apples does Sally have?');
if (question5 === '14') {
    correctAnswers++;
}

alert ("You completed the quiz! You got " + correctAnswers + " Answers Correct!");

if (correctAnswers === 5) { 
    alert('Congratulations! You earned a Gold Medal!');
}
else if (correctAnswers >= 3 && correctAnswers < 5) {
    alert('Well Done! You earned a Silver Medal!');
}
else if (correctAnswers <= 2 && correctAnswers >= 1){
    alert('You could do better! But at least you earned a Bronze Medal!');
}
else    {
    alert('You got none of the answers right! Try Again!');
}





