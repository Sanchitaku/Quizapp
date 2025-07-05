import { FaBrain } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import {useNavigate} from "react-router-dom";
import App from "../App";

function Front(){
const [domain,setDomain]=useState('');
const navigate=useNavigate();

const handlestart=()=>{
  if(domain){
navigate(`/quiz/${domain}`)
  }else{
    alert(`Please select a domain`)
  }
}
  return(
    <>
<h1 className="head">QUIZ APP</h1>
<div className="brain">
<FaBrain /></div>
<h2 className="head2">Select Domain</h2>
<div class="options">
  
 <button type="button" class="btn btn-primary btn-lg a" onClick={()=>setDomain('Webdev')}>WEB DEV</button>
 <button type="button" class="btn btn-primary btn-lg b"onClick={()=>setDomain('Aiml')}>AI & ML</button>
 <button type="button" class="btn btn-primary btn-lg c" onClick={()=>setDomain('Os')}>OS</button>
</div>
<button type="button" className="btn btn-info next"onClick={handlestart}>Start</button>
</>

  );
}
export default Front;