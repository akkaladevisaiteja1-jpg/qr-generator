import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function App() {

  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const generateQR = () => {
    setQr(text);
  };

  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>

      <h1>QR Code Generator</h1>
      <label>date of birth : </label>
      <input type = "datetime-local"/>
<br></br>
<br></br>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />

      <br/><br/>

      <button onClick={generateQR}>Generate QR</button>

      <br/><br/>

      {qr && <QRCodeCanvas value={qr} size={200} />}

    </div>
  );
}

export default App;