import ChatBubble  from "./chatBubble"


export default function ReciverMessage({chatText,timeValue,messagePosition,color}){
    return(
<div style={{display:"flex" , justifyContent:"flex-start" , width:"100%"}}>

<ChatBubble chatText={chatText} timeValue={timeValue}  isPositionedRight ={messagePosition} color={color}/>

</div>
    );
}
