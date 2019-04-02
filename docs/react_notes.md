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