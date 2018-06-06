# react-basic-practice
A basic React practice program
<hr />

## Summary
This small piece of code focuses on the basics of React features : state, props, functional component, inline stylesheet and external stylesheet

### Prerequisites
Using create-react-app to generate a boilerplate version of the React application
* Installing create-react-app CLI globally (-g) -> npm install -g create-react-app
* Creating project -> create-react-app <name_of_app>

## Running the application
* cd <name_of_app>
* npm start (This will start the development server and output the project)

###  Switch Name button

  &rightarrow; **WHAT?**
  * Clicking the "Switch Name" button will change the name of 'Max' to 'Maxxxxxxyyyyy'
  
  &rightarrow; **HOW?**
  * The button "Switch Name" has an onClick event which is assigned a switchNameHandler using an arrow function and it passes the string 'Maxxxxxxyyyyy'
  * switchNameHandler takes newValue as an argument which in this case is 'Maxxxxxxyyyyy' and updates the state.
  * Similary clicking on the second paragraph will change the name to 'Max!!!!!'
  
### Two way binding

  &rightarrow; **WHAT?**
  * With every keystroke for the second input element, the name gets updated in the sentence. 
  
  &rightarrow; **HOW?**
  * The input tag in Person.js has an onChange property that expects a method passed from the App.js -> {props.changed}
  * nameChangedHandler method in App.js updates the state with event.target.value
  * The method nameChangedHandler is then passed to the <Person> component by defining a 'changed' property
  * To see the current state right from the start we also add 'value={props.name}' to our input tag
  * Two-Way binding - We listen to changes and call the nameChangedHandler which updates the state and we also output the name as the value of the input
  

### External Stylesheet

  &rightarrow; **WHAT?**
  * The Person.css is an external stylesheet that is used to display each Person component as cards.
  
  &rightarrow; **HOW?**
  * Add a new file in Person folder -> Person.css
  * After adding the styles to the stylesheet, import it into Person.js -> import './Person.css';
  * Add it to the div tag -> div className="Person"
  
  
### Inline Stylesheet

  &rightarrow; **WHAT?**
  * In App.js we define a const style and add the styles for the button 'Switch Name'.
  
  &rightarrow; **HOW?**
  * After adding the styles, assing it to the button tag -> button style={style}
  
## Acknowledgments
* Maximilian Schwarzmüller
