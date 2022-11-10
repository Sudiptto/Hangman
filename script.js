//List of words that can be edited by the programmer
let words=["bear","tennis","fruit","tiger","banana","peach"];
//chosenword is a randomly picked word from the array above
let chosenword=words[Math.floor(Math.random()*words.length)]
//chosenword_arr is the corresponding array to loop through
let chosenword_arr=chosenword.split("") //converts string to an array
let userinput=null

//Array of lowercase letters to check if user guess is a letter or not
let letters="abcdefghijklmnopqrstuvwxyz"

//word2 comprises the word guessed by the user so far
//word2_arr is an array from word2
let word2_arr=[], word2="";


//Loop to create a copy of the chosen word and array in word2 and word2_arr
for (let index=0;index<chosenword_arr.length;index++){
  word2_arr[index]="_";
}
word2=word2_arr.join("")

//Loop to repeatedly prompt the user for guess as long as the word is not completely guessed

function start(){
  let number_tries = 0;
while (chosenword!=word2){

  
  userinput=prompt("Guess a letter (in lowercase) for this word or click Cancel to end the game:\n"+ word2_arr)
  //document.getElementById('starttt').innerHTML = "Guess a letter (in lowercase) for this word or click Cancel to end the game:\n" + word2_arr + '<br> <input id="userinput"> ';
    //If the user clicks Cancel the userinput has a value of null which would evaluate the condition to a False
  if (userinput){
    //User input is not null. User wants to continue playing.
    if (userinput.length==1){
      //User input is 1 character and validation can proceed
      userinput=userinput.toLowerCase()
      if (letters.indexOf(userinput)>=0){
        //User input is a letter and validation can proceed
      number_tries += 1;
        if (chosenword_arr.indexOf(userinput)>=0){
          //user input is part of the chosen word
          //Loop through the chosen word and mirror the positions onto word2
          for (let index=0;index<chosenword_arr.length;index++){
            if (chosenword_arr[index]==userinput){
              word2_arr[index]=userinput;
              
            }
          }
        }
        
      }
      else{
        //User input is not a letter
        alert("Please enter only letters in lowercase:")
      }
    }
    else{
      //User input is more than 1 character. User needs to reenter.
      alert("Please enter only 1 letter at a time:")
    }

    //Keeping the corresponding arrays in sync
    chosenword=chosenword_arr.join("")
    word2=word2_arr.join("")
  }
  else{
    //User chose to end the game:
    alert("Great job on the tries! The word was: \n" + chosenword + "\nYour guess was: \n" + word2 + "Number of Tries: " + number_tries )

    break;
  }
} // end of while loop

if (chosenword==word2){
  document.getElementById("startt").innerHTML= "Congrats you got that word!  <u> <a href='index.html'>REFRESH TO START AGAIN!</a> </u>";
  document.getElementById("stats").innerHTML = "Number of Tries: " + (number_tries);
  if (number_tries==word2.length){
    document.getElementById("won").innerHTML = "<h1 style='color: white; background-color: green;'>CLEAN WIN</h1>"
  }
  //alert("Great job! You guessed the word!");
}
}