import React, { useState } from "react";
import './QrCode.css';
import QRCode from "react-qr-code";

export default ()=>{
    const [link, setLink] = useState('')

    function randownQrCode(e){
        setLink(e.target.value)
    }
    return(
        <div className="QrCode">
            <QRCode value={link}/>
            
            <input
                className="input"
                placeholder="digite url"
                value={link}
                onChange={(e) => randownQrCode(e)}
            />
            
        </div>
    )
} 