
const quizData = [
    {
        question: 'How old is He ? ',
        a:'12',
        b:'20',
        c:'26',
        d:'33',
        correct: 'c'
    },
    { 
     question: 'What is the most used programing language in 2023? ',
    a:'java',
    b:'javaScript',
    c:'C',
    d:'Python',
    correct: 'b'

    },

    { 
    question: 'Who is the president of Finland ? ',
   a:'Joko Widodo',
   b:'Leo Varadkar',
   c:'Sauli Niinistö',
   d:'Petr Pavel',
   correct: 'c',

   },
   {
   question: 'What does CSS stand for ? ',
   a:'HyperText Markup Language',
   b:'Cascading Style Sheet',
   c:'Cascading Style',
   d:'HyperText',
   correct: 'b',

   },
   {
    question: 'What year was React Launched ? ',
    a:'29 May 2013',
    b:'1 jan 2000',
    c:'15 july 2008',
    d:'20 apr 2020',
    correct: 'a',
 
    },
    
];

const answersEls = document.querySelectorAll(".answer") // all li 
const questionEl = document.getElementById("question") //h2
const quiz = document.getElementById("quiz")

const atext=document.getElementById("a_text") // label id a
const btext=document.getElementById("b_text") // label id b  
const ctext=document.getElementById("c_text") // label id c
const dtext=document.getElementById("d_text") // label id d  

     // submit Buttton is added.
    const submitBtn = document.getElementById("submit")
    let currentQuiz = 0; //starting from zero means start at first point.
    let score = 0; // to get true result(conclusion)

        loadQuiz(); // to actively load new questions

        function loadQuiz(){
            deSelectAnswer()
           const currentQuizData = quizData[currentQuiz]; // 0 -> [{0},{1},,] start first question...
            //innerHtml even works...
           questionEl.innerText = currentQuizData.question;// [{quesiton,a,b,c,d}]
                //innerHtml even works...
                //bring to screen all options which involves
           atext.innerText = currentQuizData.a;
           btext.innerText = currentQuizData.b;
           ctext.innerText = currentQuizData.c;
           dtext.innerText = currentQuizData.d;
        }


                function getSelected() {
                let answer = undefined
                    answersEls.forEach((answerEl) => {
                        if(answerEl.checked){
                            answer =  answerEl.id
                        }// console.log(answer.value)
                    });
                     return answer
                   }
               
                function deSelectAnswer(){
                    answersEls.forEach((answerEl) => {
                      answerEl.checked = false
                    });
                };

                            // start clicking and next other questions
                            submitBtn.addEventListener('click',()=>{
                            const answer = getSelected();
                            // console.log(answer)
                                if(answer) {
                                    if(answer === quizData[currentQuiz].correct){
                                        score++
                                    }
                                currentQuiz++;
                                if(currentQuiz < quizData.length){
                                    loadQuiz();
                                    }else {
                                        quiz.innerHTML=  ` <h2>Congratulations!</h2> <p>You Finished...Get Relaxed  <br> You answered correctly at ${score} / ${quizData.length} questions.</p> 
                                    <button onClick="location.reload()">Reload</button>`
                                    // alert("You Finished! Get Relaxed.")
                                     }  
                                }

                            });