ed Stripe Trivia Quiz Game (proper name to be determined) 

*Meant to be portrait-only 

//// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
Basic requirements
1. Displays questions which will be answered by tapping or clicking on the right answer.
2. Scoreboard and progress bar at the top 
3. “Back” button at top left
4. On answering right answer, the selected answer stays highlighted and a “Next” button appears after a timeout, which simulates the program processing the answer for UX purposes.
5. Else, after a timeout, an alert displays telling the user to try again. 
6. When all questions are completed, a results page is displayed. This has yet to be completed along with the introductory splash screen. 

//// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
questions.js

1. Insert JSON or CSV to be Transferred to JSON. This is currently represented by questions.js.
    a. There is a directory called csv_2_json which contains the front-end for a conversion script if   needed. 


//// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
quiz.js

1. Appends randomized set of 4 questions from questions.js onto div#quiz in a (void) function renderQuiz which is a function for readability. (Each question is given display:none on initialization).

    a.This blocks reuse of any questions by use of collections with index check in for-loop; further    elaboration of current implementation within the (String) function getRandomOrder in the    comments of this Repl: https://repl.it/GZVR/1.

    b. Choices rendered are also randomized using the same function.

2. Contains click handlers which includes blocking for multiple simultaneous choices; it looks sloppy if multiple choices are highlighted concurrently. 

3. Public void move() which controls the progress bar. 
    
