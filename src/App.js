import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Adam', age: 25},
      {name: 'Pops', age: 24}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Adam', age: 25},
        {name: 'Pops', age: 24}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 25},
        {name: 'Pops', age: 24}
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maxxxxxxyyyyy')}>Switch Name
        </button>
        <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}/>
        <Person
          click={() => this.switchNameHandler('Max!!!!')}
          changed={this.nameChangedHandler}
          name={this.state.persons[1].name}
          age= {this.state.persons[1].age} >Childrennnnn
        </Person>
        <Person name={this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
