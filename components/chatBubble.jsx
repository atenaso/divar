import { Container } from "@mui/material";

const ChatBubble = ({chatText , timeValue, color })=>{
    return(
        <Container 
        style={{
          backgroundColor: color,
          margin:"5px" ,
          width: "fit-content",
          blockSize: "fit-content",
          borderRadius:"10px",
          padding:"5px 10px",
          fontSize:"18px"
        }}
        > 
        
           <p style={{fontSize:"20px",marginBottom:"15px"}}>{chatText}</p>
           <span style={{fontSize:"13px" ,fontWeight:"100 ",display:"flex" ,justifyContent:"flex-end"  }}>{timeValue}</span>
          
         </Container>
  )
  }
export default  ChatBubble;