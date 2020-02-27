import React, { useState } from 'react';
// import logo from './logo.svg';
// import Data from './Data';
import './App.css';

import Member from "./Member"
import MemberList from "./MemberList";

function App() {
  const [member, setMember] = useState([])

  const addNewMember = memberInfo => {
    const newMember = {
      id: Date.now(),
      name: memberInfo.name,
      email: memberInfo.email,
      role: memberInfo.role
    };
    setMember([...member, newMember]);
  };

  return (
    <div>
      <MemberList addNewMember={addNewMember} />
      <Member member={member} />
    </div>
  );
}

export default App;  