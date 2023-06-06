"use client"

import { Button, Container, Input, TextField } from "@mui/material";
import { use, useState } from "react";
import ChatBubble from "../../components/chatbubble";
import PrimarySearchAppBar from "../../components/PrimarySearchAppBar";

export default function Home() {
  const [messages, setMessages] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const[timeValue,setTimeValue]=useState("");
  
  const[messagePosition,setMessagePosition]=useState(false);
 
 
 


  return (
    <>
      <PrimarySearchAppBar />
      
       <Container style={{
        height: "100vh", width: "100vw", backgroundColor: '	#ffffff',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        <div style={{ backgroundColor: "	#eecbff", margin: "5px", width: '100%', flex: 1 }}>
          {messages.map((value) =>{
           return <ChatBubble  chatText={value} timeValue={timeValue}  isPositionedRight ={messagePosition}/>
          })}
          
        </div>

        <div
          style={{
            padding: "5px",
            width: "100vw", position: "absolute", bottom: "0",
            left: "0", backgroundColor: '#feffa3', display: "flex",
            flexDirection: "row"
          }}>


          <TextField label="message" variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              backgroundColor: 'white', width: '100%'
            }}
          />
          <Button
            onClick={() => {
              setMessages([...messages, inputValue]);
              setTimeValue(new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
              }));
              setInputValue("");
              setMessagePosition(!messagePosition);
            }}
            variant="contained" href="#contained-buttons" style={{ marginLeft: "4px" }}>
            send
          </Button>
        </div>

      </Container>

    </>
  )

}
