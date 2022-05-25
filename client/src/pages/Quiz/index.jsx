import React from "react";
import { useState } from "react";
import Header from "../../layout/Header";
import little_cat from './little_cat.png'
import "./style.css";

function Quiz() {

const questions = [
  {question:'What kind of animal are you looking for?', answers: ['cat', 'dog', 'I don\'t mind!']},
  {question:'Big or small?', answers: ['small', 'medium', 'big', 'size doesn\'t matter!' ]},
  {question:'Are you an active person?', answers: ['couch potato', 'reasonably', 'very']},
  {question:'Do you have children at home?', answers: ['yes - young children', 'yes - teenagers', 'no-thank god']},
  {question:'Do you have other pets?', answers: ['yes - a cat', 'yes - a dog', 'nope']},
  {question:'Do you have a fenced-in garden?', answers: ['yes', 'no - but there\'s green space close-by', 'no - I live in the city']},
  {question:'What kind of maintenance can you provide for grooming?', answers: ['ew hair', 'some', 'so fluffy!']},
  {question:'How much time will your pet have to spend alone', answers: ['none - wfh', 'some - but I can arrange care', 'reasonable - I work a lot']},
  {question:'Would you be able to take a pet with some behavioural issues that needs extra training?', answers: ['nope', 'minor', 'some', 'I like a challenge']
}]

const [currentQuestion, setCurrentQuestion] = useState(0)
const [response, setResponse] = useState([])
const [selectAnswer, setSelectAnswer] = useState("")
let responseItem = ''

const handleResponse = (e) => {
responseItem = e.target.value
setResponse((state) => {
  const newValue = [...state,responseItem]
  console.log(newValue)
  return newValue
})
setSelectAnswer(responseItem)

}

const nextQuestion = () => {
 
  if (!selectAnswer) {
    alert(" You must choose one answer to continue!")
  } else{
    setCurrentQuestion(currentQuestion + 1)
    setSelectAnswer("")
    // alert(response)

  }
}

// if (currentQuestion === "") {

  return (

<>

{/* <Header/> */}
<section className="questions-grid">


<h1 className="questions"> {questions[currentQuestion].question}</h1>

<div className="answers-grid">
         
          <select className="category"  value={selectAnswer} onChange={handleResponse}>
            
          <option className="single-opt">select one answer</option>

          {questions[currentQuestion].answers && questions[currentQuestion].answers.map((answer) => (
          <option className="single-opt" value={answer} key={answer}> {answer} </option> ))}

          </select>
 </div>

<div className="answers-show"> 
 
{currentQuestion === questions.length  ? ( <h1 className="questions"> Questions answered! Link to the matching pets now</h1>) : (<button className="next-question" onClick={() => nextQuestion()}> Next Question</button> )}
{currentQuestion === questions.length  &&  <ul>{response.map((r) => <li>{r}</li>)}</ul>}    

</div>

<div className="img-container">

<img src={little_cat} alt="little_cat" className="little-cat-img"/>
</div>

</section>

</>
);

}

export default Quiz;
