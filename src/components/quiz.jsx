import React, { useState,useEffect } from "react";
import { quizdata } from "./question";

export default function Quiz() {
  let [indexNumber, setIndexNumber] = useState(0);
  const data = quizdata;

  useEffect(()=>{
    console.log(
      "this is me im a function from useEffect."

      )
      alert("its is true")
    })

  function changeIndex(opt) {
    setIndexNumber(indexNumber + 1);
    console.log(opt === data[indexNumber]?.answer);


  
  }



  return (
    <>
      <p>
        Q: {data[indexNumber]?.question}
        {data[indexNumber]?.options?.map((option, index) => (
          <div>
            <button 

             onClick={() => changeIndex(option)} key={index
          
             }>
              {option}
            </button>
          </div>
        ))}
      </p>
    </>
  );
}





