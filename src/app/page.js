"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

export default function Page() {
  const [sendMsg, setSendMsg] = useState("");
  const [receiveMsg, setReceiveMsg] = useState([]);


  const send = () => {
    socket.emit("msg", sendMsg);
    setSendMsg("");
  };

  useEffect(() => {
    socket.on("msg", (msg) => {
      setReceiveMsg((prev) => [...prev, msg].reverse());
    });
    return () => {
      socket.off("msg");
    };
  }, []);

  return (
    <div>
      <h1>Chat app</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="messege"
          value={sendMsg}
          onChange={(e) => setSendMsg(e.target.value)}
        ></input>
        <button type="submite" onClick={() => send()}>
          Send
        </button>
      </form>
      <h2>Messeges</h2>
      {receiveMsg.map((msg, idx) => {
        return (
          <div key={idx}>
            <h3>{msg}</h3>
          </div>
        );
      })}
    </div>
  );
}
