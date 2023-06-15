import ChatBubble  from "./chatBubble"


export default function SenderMessage({chatText,timeValue,messagePosition,color}){
    return(
<div style={{display:"flex" , justifyContent:"flex-end" , width:"100%"}}>

<ChatBubble chatText={chatText} timeValue={timeValue}  isPositionedRight ={messagePosition} color={color}/>

</div>
    );
}