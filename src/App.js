import React, { Component } from "react";
import "./App.css";

// First make a new context
const MyContext = React.createContext();

// then create a provider component
class MyProvider extends Component {
  state = {
    name: "mickey",
    age: 100,
    cool: true
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,

          growAyearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <h1>ContextAPI Test</h1>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

const Family = props => {
  return (
    <div className="family">
      <Person />
    </div>
  );
};

class Person extends React.Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <div>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <p>Cool: {context.state.cool}</p>
              <button onClick={context.growAyearOlder}>Update Age!</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default App;
