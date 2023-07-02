import React from "react";

export default function ContactCard({ val }) {
  return (
    <div>
      <div className="userChat">
        <i className="fa-solid fa-user" style={{ color: "black", background:"yellow"}}></i>
        <div className="userChatInfo">
          <span style={{color:"green"}}>{val.name}</span>
          <p style={{color:"red"}}>{val.lastmessage}</p>
        </div>
      </div>
    </div>
  );
}
