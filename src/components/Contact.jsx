import React, { useState } from "react";
import "./css/contact.css";

export default function Contact(e) {
  const [showMessege, setShowMessege] = useState();
  const subMitHundler = (e) => {
    e.preventDefault();
    console.log("submited");
    setShowMessege("The information has been sent");
    console.log(e.preventDefault());
  };
  return (
    <div className="Contact-container">
      <div className="first-Para">
        <h1>CONTACT</h1>
        <p>___________________________</p>
        <br /> <br /> <h4>Have a question or want to work together ?</h4>
      </div>
      <div className="form">
        <form className="form-item" onSubmit={ subMitHundler}>
          <input id="inputName" type="text" placeholder="Name" />
          <input id="inputText" type="email" placeholder="Enter email" />
          <textarea
            id="inputTextera"
            rows="18"
            cols="100"
            placeholder="Your massage"
          />
          <div className="inputBtndiv">
            <input id="inputBtnId" type="submit" value="SUBMIT" />
          </div>
        </form>
        <h4 style={{color:'white',fontSize:'15px'}}>{showMessege}</h4>
        
      </div>
    </div>
  );
}
