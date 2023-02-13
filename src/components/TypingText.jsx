import React, { useState, useEffect } from 'react';

const TypingText = ({text, speed, fontSize, color}) => {
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    let typingText = text ? text : "";//기본값
    let typingSpeed = speed ? speed : 120;//기본값
    const interval = setInterval(() => {
        setText((Text)=>{
          let updated = Text;
          updated = Text + typingText[Count];
          return updated;
        });
        setCount(Count + 1); 
    }, typingSpeed);
    Count === typingText.length && clearInterval(interval);
    return () => clearInterval(interval);
})
  return (
    <h1 style={{fontSize:`${fontSize}`, color:`${color}`}} >{ Text }</h1>
  )
};

export default TypingText;