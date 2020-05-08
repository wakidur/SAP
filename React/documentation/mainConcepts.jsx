// https://reactjs.org/docs/introducing-jsx.html
// 1
const element = <h1> Hello, world!</h1>;
// 2
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById('root'));
// 3
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById('root'));

//4
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

// 5
const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>;