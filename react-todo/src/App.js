import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {todos: []};
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/todos').then(response => {
      return response.json();
    }).then(todos => {
      this.setState({todos});
    }).catch(ex => {
      console.log('parsing failed', ex);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.todos.map(todo => <li key={todo._id}>{todo.body}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
