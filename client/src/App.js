//import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  state = {
    data: []
  }

  componenentDidMount = () => {
    fetch("http://localhost:5000/")
    .then((res) => res.json())
    .then ((data) => {
      this.setState({data:data.value});
      console.log(data);
    })
  };
  componentDidUpdate(){
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> All users: {this.state.data} </p>

        </header>
      </div>
    );
  }
};

export default App;
