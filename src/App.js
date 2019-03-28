import React, { Component } from "react";
import store from "./Reducers";
import Form from "./Components/Form";
import Todos from "./Components/Todos";
import { deleteTodo } from "./Actions/actions";

class App extends Component {
  state = {
    d: ""
  };

  componentDidMount() {
    store.subscribe(() => {
      //console.log(store.getState());
      this.setState({ dummy: "" });
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="mainhead"> Todos</h1>
        <Form />
        <Todos />
      </div>
    );
  }
}

export default App;
