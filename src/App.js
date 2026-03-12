import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if(username === "gowthika" && password === "1234"){
      alert("Login Successful");
    }
    else{
      alert("Invalid Username or Password");
    }

  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>

      <h1>Personal Finance Tracker</h1>

      <input
        type="text"
        placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}
      />

      <br/><br/>

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleLogin}>Login</button>

    </div>
  );
}

export default App;
