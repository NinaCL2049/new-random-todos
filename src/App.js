import React, { useState, useEffect } from "react";
import UserCard from "./UserCard.js";
import "./App.css";

function App() {
  const [randoUsers, updateUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((response) => response.json())
      .then((data) => {
        updateUsers(data.results);
      });
  }, []);

  return (
    <div className="App">
      <ol>
        {randoUsers.map((aUser, index) => (
          <UserCard key={index} aUser={aUser} />
        ))}
      </ol>
    </div>
  );
}

export default App;

// useEffect(() => {
//   fetch('https://randomuser.me/api?results=25')
//     .then(response => {
//       return response.json()
//     })

//     .then(todos => setArrayOfTodos(todos))

// div a: pic, name, show? button

// div b: more data, hide? button

// div is empty a always shows, div b renders based on state

// if my state says don't show state b, then render empty div (c) and when it's clicked then show populated div (b)

// you'll only have one button in div a; the text inside changes depending on state.

// to make each componenet do individual thing,

// the state i'll have in app parent is user's array, the state with switching divs will be in child componenet.  so app.js fetches and gives index/props, but a child app switches the state.
