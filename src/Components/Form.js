import React, { Component } from "react";
import store from "../Reducers";
import { addTodo } from "../Actions/actions";

class Form extends Component {
  
  handleSubmit = e => {
    e.preventDefault();
    store.dispatch(addTodo(e.target[0].value));
    e.target[0].value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="What needs to be added?"
            className="task"
            type="text"
            id="todocaption"
          />
          <button className="submitbutton">Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
