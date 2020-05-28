# General React dev notes and examples

## Function and variables for use in components

You can declare functions inside the class scope like so:

```js
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
```

But you cant just throw variables and crap in there or it'll raise a syntax error.
Below is BAD:

```js
class MyClass extends React.Component {
  const someGarbage = 'I raise syntax errors'

  render() {
    return (
      <div>
      {someGarbage}
      </div>
    );
  }
```

## Passing props from stateful to stateless example

> Parent.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child'


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name} />;
  }
}

ReactDOM.render(  
  <Parent />,
    document.getElementById('app')
);
```

Child.js

```js
import React from 'react';
import ReactDOM from 'react-dom';

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}
```

## General Code Academy Notes

- Rendering is the only way for a component to pass props to another component.

- A React component should use props to store information that can be changed, but can only be changed by a different component.
- A React component should use state to store information that the component itself can change.

## Imports
### Importing a named export

```js
import { thingBeingExported } from './dir/to/module'
```

### Importing a default export

```js
import thingBeingExported from './dir/to/module'
```