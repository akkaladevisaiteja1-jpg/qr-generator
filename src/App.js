import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function App() {

const [name,setName] = useState("");
const [dob,setDob] = useState("");
const [phone,setPhone] = useState("");
const [email,setEmail] = useState("");

const memberURL = `https://akkaladevisaiteja1-jpg.github.io/qr-generator/?name=${name}&dob=${dob}&phone=${phone}&email=${email}`;

return (

<div style={{textAlign:"center"}}>

<h1>Member Registration</h1>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
type="date"
onChange={(e)=>setDob(e.target.value)}
/>

<br/><br/>

<input
placeholder="Phone"
onChange={(e)=>setPhone(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<QRCodeCanvas value={memberURL} size={200}/>

<br/><br/>

<button onClick={()=>window.print()}>
Print QR
</button>

</div>

)

}

export default App;