import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';


  
class Counter extends Component {
  constructor(props)
  {
    super(props);
    console.log(this.props);

  }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }



render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bloody counter</h1>
        </header>
        <div className="App-intro">
          <p>You've already clicked me {this.props.count} times </p>
          <button onClick={this.increment}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );

  }


}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
