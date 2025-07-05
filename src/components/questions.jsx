import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { RiTimerFill } from "react-icons/ri";
import { MdCelebration } from "react-icons/md";
import { PiSmileySadBold } from "react-icons/pi";
import Front from "./frontpage";
import { useNavigate } from "react-router-dom";
const allquestions={

 Webdev : [
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<link>"],
    answer: "<style>"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "background-color", "bgcolor", "background"],
    answer: "background-color"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "styles", "font"],
    answer: "style"
  },
  {
    question: "Which HTTP method is used to update a resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "PUT"
  },
  {
    question: "Which JavaScript method is used to select an element by ID?",
    options: [
      "getElementByClassName()",
      "getElementByTagName()",
      "getElementById()",
      "querySelectorAll()"
    ],
    answer: "getElementById()"
  },
  {
    question: "What does the 'flex' in CSS Flexbox stand for?",
    options: [
      "Flexible layout",
      "Flexible grid",
      "Flex direction",
      "Flexible box"
    ],
    answer: "Flexible box"
  },
  {
    question: "Which of the following is NOT a valid CSS position property value?",
    options: ["relative", "fixed", "absolute", "centered"],
    answer: "centered"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "What is the default method used by forms to send data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "GET"
  }
],
Aiml : [
  
  {
    question: "What is the output of a sigmoid function?",
    options: ["Any real number", "0 or 1", "0 to 1", "-1 to 1"],
    answer: "0 to 1"
  },
  {
    question: "Which of the following is a dimensionality reduction technique?",
    options: ["SVM", "PCA", "CNN", "   Naive Bayes"],
    answer: "PCA"
  },
  {
    question: "Which of these is not a type of neural network?",
    options: ["RNN", "CNN", "GAN", "SVM"],
    answer: "SVM"
  },
  {
    question: "What is the purpose of an activation function in a neural network?",
    options: [
      "To reduce overfitting",
      "To introduce non-linearity",
      "To initialize weights",
      "To standardize the input"
    ],
    answer: "To introduce non-linearity"
  },
  {
    question: "Which evaluation metric is most appropriate for imbalanced classification problems?",
    options: ["Accuracy", "Precision", "Recall", "F1 Score"],
    answer: "F1 Score"
  }
],
Os : [
  {
    question: "What is the primary purpose of an operating system?",
    options: [
      "To provide entertainment",
      "To compile code",
      "To manage computer hardware and software resources",
      "To browse the internet"
    ],
    answer: "To manage computer hardware and software resources"
  },
  {
    question: "Which of the following is NOT a type of operating system?",
 options: ["Real-time OS", "Distributed OS", "Network OS", "Web OS"],
    answer: "Web OS"
  },
  {
    question: "What is a process in an operating system?",
    options: [
      "A hardware unit",
      "A thread",
      "An instance of a program in execution",
      "A program that is stored on disk"
    ],
    answer: "An instance of a program in execution"
  },
  {
    question: "Which of these is responsible for managing memory in an OS?",
    options: ["Compiler", "Assembler", "Linker", "Memory Manager"],
     answer: "Memory Manager"
  },
  {
    question: "Which scheduling algorithm gives the shortest job first?",
    options: [
      "Round Robin",
      "Shortest Job Next (SJN)",
      "First Come First Serve (FCFS)",
      "Priority Scheduling"
    ],
    answer: "Shortest Job Next (SJN)"
  },
]

};
function Quiz(){
  const {domain}=useParams();
  const questions=allquestions[domain]||[];
  const [current,setCurrent]=useState(0);
  const [selected,setSelected]=useState('');
  const[score,setScore]=useState(0);
  const[finished,setFinished]=useState(false);
  const[timeLeft,setTimeleft]=useState(10);
  
useEffect(() => {
    if (timeLeft===0){
      if(current+1<questions.length){
      setCurrent(current+1);
      setTimeleft(10);
      } else{
        setFinished(true)
      }
      return;
    }
    const timer=setInterval(() => {
      setTimeleft((prevTime)=> prevTime-1);
    }, 1000);
    return ()=>clearInterval(timer);
},[timeLeft,current]);

  const handlenext=()=>{
  if(selected===questions[current].answer){
    setScore(score+1);
  }

  
 
  if(!questions[current]){
    return <div>No question found</div>
  }
  if(current<questions.length){
    setCurrent(current+1);
    setTimeleft(10);
    setSelected('');
  }
  

  else {
    setFinished(true);
  }
};
const handleback=()=>{
  
    setCurrent(current-1);
    setSelected('');
  

}
const navigate=useNavigate()
const handlehome=()=>{
if(finished){
navigate(`/`)
}
}
 const handleFinish=()=>{
  if(selected===questions[current].answer){
    setScore(score+1);
  }
  setFinished(true);
}
if(finished){
  return(
    <div className="result">
      { score===5 || score===4 ?(
       [ <h1 className="result">Congrats! <MdCelebration /></h1>,
      <h2 className="result"> You score {score} out of {questions.length}</h2>,
    <button onClick={handlehome} className="Homebtn">Go To Home<MdNavigateNext /></button>
    ]
      ):( [<h2 className="result">Better Luck ! Next Time <PiSmileySadBold /></h2>,<h2 className="result"> You score {score} out of {questions.length}</h2>,    <button onClick={handlehome} className="homebtn">Go To Home<MdNavigateNext /></button>]

      )
}
    </div>
  )
}
return(
  <div className="page">

  
  <h2 className="ques">Q{current+1}.{questions[current].question}</h2>
  <RiTimerFill /><p className="timer">Time left:{timeLeft}</p>
  
  

  {questions[current].options.map((opt,idx)=>(
  <div key={idx} className={`option-label ${selected===opt?"selected":""}`}>
    
      <input
      key={idx}
      type="radio"
      name="option"
      value={opt}
      checked={selected===opt}
      onChange={()=>setSelected(opt)}
      
      />
      
      {opt}
 
    
    
  </div>
  
  ))}
  {current===questions.length-1?(
   [<div>
    <button onClick={handleFinish} disabled={!selected} className="submitbtn">Submit</button>,<button onClick={handleback} disabled={current===0}  className="backbtn">Back</button>
    </div>]
  ):(
    [ <div className="btns" key={Date}><button onClick={handleback} disabled={current===0}  className="backbtn">Back</button>,
  
  <button onClick={handlenext} disabled={!selected } className="nextbtn">Next<MdNavigateNext /></button> </div>]
 

)}
  
  </div>

);
}
export default Quiz;