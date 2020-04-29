import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            //  <
            // div className = "App" >
            // <
            // header className = "App-header" >
            // <
            // img src = {
            //     logo
            // }
            // className = "App-logo"
            // alt = "logo" / >
            // <
            // h1 >
            // Hello React <
            // /h1> <
            // a href = "https://reactjs.org" >
            // Learn React <
            // /a> <
            // /header>  <
            // /div>
        )
    }
}

// REACT AND JAVASCRIPT CLASSES
class Developer {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName() {
        return this.firstname + ' ' + this.lastname;
    }
}
var me = new Developer('Robin', 'Wieruch');


class Developer {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName() {
        return this.firstname + ' ' + this.lastname;
    }
}
class ReactDeveloper extends Developer {
    getJob() {
        return 'React Developer';
    }
}
var me = new ReactDeveloper('Robin', 'Wieruch');
console.log(me.getName());
console.log(me.getJob());


import React, {
    Component
} from 'react';
class App extends Component {
    render() {
        return ( 
            // <
            // div >
            // <
            // h1 > Welcome to React < /h1> <
            // /div>
        );
    }
}
export default App;


// ARROW FUNCTIONS IN REACT
// JavaScript ES5 function
function getGreeting() {
    return 'Welcome to JavaScript';
}
// JavaScript ES6 arrow function with body
const getGreeting = () => {
    return 'Welcome to JavaScript';
}
// JavaScript ES6 arrow function without body and implicit return
const getGreeting = () =>
    'Welcome to JavaScript';

// FUNCTIONS AS COMPONENTS IN REACT
function (props) {
    return view;
}

function Greeting(props) {
    return <h1> { props.greeting } </h1>;
}

// JavaScript ES5 function
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}
// JavaScript ES6 arrow function
const Greeting = (props) => {
  return <h1>{props.greeting}</h1>;
}
// JavaScript ES6 arrow function
// without body and implicit return
const Greeting = (props) =>
  <h1>{props.greeting}</h1>;


//   REACT CLASS COMPONENT SYNTAX

// 
/**
 * One way of defining a React class component, with state and class methods, is the following
 * when implementing lots of React class components,
 * the binding of class methods in the constructor -- and having a constructor in the first place -- becomes a tedious implementation detail. 
 */
class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
      this.onIncrement = this.onIncrement.bind(this);
      this.onDecrement = this.onDecrement.bind(this);
    }
    onIncrement() {
      this.setState(state => ({ counter: state.counter + 1 }));
    }
    onDecrement() {
      this.setState(state => ({ counter: state.counter - 1 }));
    }
    render() {
      return (
        <div>
          <p>{this.state.counter}</p>
          <button onClick={this.onIncrement} type="button">
            Increment
          </button>
          <button onClick={this.onDecrement} type="button">
            Decrement
          </button>
        </div>
      );
    }
  }

// 
/**
 * Fortunately, there is a shorthand syntax for getting rid of both:
 * By using JavaScript arrow functions, you can auto-bind class methods without having to bind them in the constructor.
 */

class Counter extends Component {
  state = {
    counter: 0,
  }

  onIncrement = () => {
    this.setState(state => ({counter: state.counter + 1}));
  }

  onDecrement = () => {
    this.setState(state => ({counter: state.counter -1 }))
  }

  render() {
    return(
      <div>
      <p>{this.state.counter}</p>
      <button
        onClick={this.onIncrement}
        type="button"
      >
        Increment
      </button>
      <button
        onClick={this.onDecrement}
        type="button"
      >
        Decrement
      </button>
    </div>
    )
  }
}


// MAP, REDUCE AND FILTER IN REACT
import React from 'react';

const App = () => {
   let users = [
    { name: 'Robin' },
    { name: 'Markus' },
   ];

   return (
     <ul>
       {users.map(user => <li>{user.name}</li>)}
     </ul>
   )
}

export default App;


import React from 'react';

const App = () => {
  let users = [
    { name: 'Robin', isDeveloper: true },
    { name: 'Markus', isDeveloper: false },
  ];

  return (
    <ul>
      {users.filter(user => user.isDeveloper).map(user => <li>{user.name}</li>)}
    </ul>
  )
}

export default App;


// VAR, LET, AND CONST IN REACT
/**
 * (1) don't use var anymore, because let and const are more specific
 * (2) default to const, because it cannot be re-assigned or re-declared
 * (3) use let when re-assigning the variable
 */

import React from 'react';
const App = () => {
  const users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];
  return (
    <ul>
      {users.map(user => <li>{user.name}</li>)}
    </ul>
  );
};
export default App;

// TERNARY OPERATOR IN REACT
import React from 'react';
const App = () => {
  const users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];
  const showUsers = false;
  return (
    <div>
      {showUsers ? (
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default App;

import React from 'react';
const App = () => {
  const users = [
    { name: 'Robin' },
    { name: 'Markus' },
  ];
  const showUsers = false;
  return (
    <div>
      {showUsers && (
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default App;


// LIBRARIES IN REAC
import React , {Component} from 'react';

class App extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    fetch('https://api.mydomain.com').then( response => response.json()).then(data => this.setState({data}));
  }

  render() {
    return() ;
  }
}


// ASYNC/AWAIT IN REACT
// In a React Function Component, fetching data looks slightly different with React Hooks:

import React from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.mydomain.com')
        .then(response => setData(response.data));
    };
    fetchData();
  }, []);

  return ();
}

export default App;

// Anyway, you can also use async/await which got introduced to JavaScript not long ago:

import React from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.mydomain.com');
      setData(response.data);
    }
    fetchData();
  }, []);

  return();
}

export default App;

// HIGHER-ORDER FUNCTIONS IN REACT

import React from 'react';

const App = () => {
  const users = [{name: 'Robin'}, {name: 'Markus'}];
  const [query, setQuery] = React.useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  }

  return(
    <div>
      <ul>
        {users
          .filter(user => user.name.includes(query))
          .map(user => (
            <li>{user.name}</li>
          ))}
      </ul>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

import React from 'react';

function doFilter(query) {
  return function(user) {
    return user.name.includes(query);
  };
}

const doFilter = query => user => user.name.includes(query);

const App = () => {
  const users = [{ name: 'Robin' }, { name: 'Markus' }];
  // React Hooks 
  const [query, setQuery] = React.useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  }

  return(
    <div>
      <ul>
          {users.filter(doFilter(query)).map(user=> (<li>{user.name}</li>))}
      </ul>
      <input type="text" onChange={handleChange}/>
    </div>
  )

}

// SHORTHAND OBJECT ASSIGNMENT
const name = 'Robin';
const user = {
  name,
};

// shorthand method names
const userService = {
  getUserName(user) {
    return user.firstname + ' ' + user.lastname;
  },
};

// Finally, you are allowed to use computed property names in JavaScript ES6
// normal usage of key property in an object
var user = {
  name: 'Robin',
};
// computed key property for dynamic naming
const key = 'name';
const user = {
  [key]: 'Robin',
};


// DESTRUCTURING IN REACT
const state = { counter: 1, list: ['a', 'b'] };
// no object destructuring
const list = state.list;
const counter = state.counter;
// object destructuring
const { list, counter } = state;

// no destructuring
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}
// destructuring
function Greeting({ greeting }) {
  return <h1>{greeting}</h1>;
}

// The destructuring works for JavaScript arrays too:
const list = ['a', 'b'];
// no array destructuring
const itemOne = list[0];
const itemTwo = list[1];
// array destructuring
const [itemOne, itemTwo] = list;


// React Hooks are using the array destructuring to access state and state updater function.

import React from 'react';
const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
export default Counter;

// Another great feature is the rest destructuring. It is often used for splitting out a part of an object, but keeping the remaining properties in another object.

const state = { counter: 1, list: ['a', 'b']};
// rest destructuring
const { list, ...rest} = state;
console.log(rest);

// SPREAD OPERATOR IN REACT
const userCredentials = { firstname: 'Robin' };
const userDetails = { nationality: 'German' };
 
const user = {
  ...userCredentials,
  ...userDetails,
};
 
console.log(user);
// output: { firstname: 'Robin', nationality: 'German' }

onst App = () => {
  const users = [
    { name: 'Robin', nationality: 'German' },
    { name: 'Markus', nationality: 'American' },
  ];
 
  return (
    <ul>
      {users.map(user => <li>
        <User
          name={user.name}
          nationality={user.nationality}
        />
      </li>)}
    </ul>
  );
};
 
const User = ({ name, nationality }) =>
  <span>{name} from {nationality}</span>;
 
export default App;

import React from 'react';
 
const App = () => {
  const users = [
    { name: 'Robin', nationality: 'German' },
    { name: 'Markus', nationality: 'American' },
  ];
 
  return (
    <ul>
      {users.map(user => <li>
        <User {...user} />
      </li>)}
    </ul>
  );
};
 
const User = ({ name, nationality }) =>
  <span>{name} from {nationality}</span>;
 
export default App;

// THERE IS MORE JAVASCRIPT THAN REACT

function withLoading(Component) {
  return class withLoading extends React.Component {
    render() {
      const { isLoading, ...rest} = this.props;
      if (isLoading) {
        return <p>Loading</p>
      }
      return <Component {...rest}/>;
    }
  }
}

// React Class Component to a Function Component:
function withLoading (Component) {
  return function ({isLoading, ...rest}) {
    if (isLoading) {
     return <p>Loading</p> 
    }
    return <Component {...rest}/>
  }
}

// higher-order component

const withLoading = Component => ({isLoading, ...rest}) => isLoading ? <p>Loading</p> : <Component {...rest}/>