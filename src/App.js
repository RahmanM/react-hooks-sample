import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  // userState enables to use state inside functional component
  [todo, setTodo] = useState({});
  [id, setId] = useState(1);

  // This is equivalent of componentDidMount, componentUpdated, and componentWillUnmount
  // UseEffect is called everytime render happens, so its equivalent of componentDidMount
  useEffect(
    () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(response => {
          // Set the state using reqct hook
          setTodo(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    [id] // This is equivalent of componentUpdated, passes the dependency to call the userEffect when needed
  );

  return (
    <div>
      Todo Id:{" "}
      <input type="textbox" value={id} onChange={e => setId(e.target.value)} />
      <hr />
      <br />
      <div>ID: {todo.id}</div>
      <div>Description: {todo.title}</div>
    </div>
  );
}
