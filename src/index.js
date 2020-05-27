import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import * as serviceWorker from "./serviceWorker";
import { useState, useEffect } from 'react';

console.log("./src/index.js");

// ------------------------------------
// POST with fetch method 
// & use React useEffect Hook
// to get data full object from 
// http://localhost:4000/author/login
// 21may20 1709
// -------------------------------------

// function PostRequestHooks() {
//   const [data, setData] = useState(null);

//   useEffect(
//     () => {
//       // POST request using fetch inside useEffect React hook
//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           "username": "jackyjones2",
//           "password": "jones67P2"
//         })
//       };

//       fetch('http://localhost:4000/author/login', requestOptions)
//       .then(response => response.json())
//       .then(data => setData(data));

//       // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []
//   );

//   return (
//     <div >
//       <h5 >POST Request with React Hooks</h5>
//       <div>
//           Returned Id: {JSON.stringify(data)}
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <PostRequestHooks />,
//   document.getElementById('root')
// )


// & use React useEffect Hook
// to get data full object from 
// http://localhost:4000/
// 27may20 1804
// -------------------------------------

function PostRequestHooks() {
  const [data, setData] = useState(null);

  useEffect(
    () => {
      // POST request using fetch inside useEffect React hook
      const requestOptions = {
        method: 'GET',
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({
        //   "username": "jackyjones2",
        //   "password": "jones67P2"
        // })
      };

      fetch('http://localhost:4000', requestOptions)
      .then(response => response.json())
      .then(data => setData(data));

      // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []
  );

  return (
    <div >
      <h5 >POST Request with React Hooks</h5>
      <div>
          Returned Id: {JSON.stringify(data)}
      </div>
    </div>
  );
}

ReactDOM.render(
  <PostRequestHooks />,
  document.getElementById('root')
)



// ------------------------------------
// EXAMPLE 4
// Learning Hooks to React
// useEffect hook function
// 24may20 1452
// -------------------------------------

//const ProfileContext = React.createContext();

// function FriendStatus(props) {
//   const [isOnline, setIsOnline] = useState(true);

//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }

//   useEffect(() => {
//     console.log("CHAT API SUBSCRIBE")
//     //ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     // Specify how to clean up after this effect:
//     return function cleanup() {
//       console.log("CHAT API UNSUBSCRIBE")
//       //ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });

//   if (isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }

// ReactDOM.render(
//   <FriendStatus />,
//   document.getElementById('root')
// );

// ------------------------------------
// EXAMPLE 3
// Learning Hooks to React
// Mutiple state variables
// 24may20 1452
// -------------------------------------
// function Example() {
//   const [count, setCount] = useState(0);
 
//  // Similar to componentDidMount and componentDidUpdate:
//  useEffect(() => {
//    // Update the document title using the browser API
//    document.title = `You clicked ${count} times`;
//  });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Example />,
//   document.getElementById('root')
// );


// ------------------------------------
// EXAMPLE 2
// Learning Hooks to React
// Mutiple state variables
// 24may20 1317
// -------------------------------------
// function ExampleWithManyStates() {
//   // Declare multiple state variables!
//   const [age, setAge] = useState(42);
//   const [fruit, setFruit] = useState('banana');
//   const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
//   // ...
//   return (
//     <div>
//       <h4>Age: {age}</h4>
//       <p>Fruit: {fruit}  </p>
//       <p>To Dos: {todos[0].text}  </p>
//     </div>
//   )
// }

// ReactDOM.render(
//   <ExampleWithManyStates />,
//   document.getElementById('root')
// )

// ------------------------------------
// EXAMPLE 1
// Learning Hooks to React
// Singe state variable
// 23may20 1208
// -------------------------------------
// function Example() {
 
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
//    return (
//      <div>
//        <p>You clicked {count} times</p>
//        <button onClick={() => setCount(count + 1)}>
//          Click me
//        </button>
//      </div>
//    );
//  }

//  ReactDOM.render(
//    <Example />,
//    document.getElementById('root')
//  )

// ------------------------------------
// POST with fetch method 
// with set of Headers
// to get data full object from 
// http://localhost:4000/author/
// 23may20 1208
// -------------------------------------

// class PostRequestSetHeaders extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//     };
//   }

//   componentDidMount() {
//     // POST request using fetch with set headers
//     const requestOptions = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3IiOnsiX2lkIjoiNWVhMzA1ZDgzZTZjYzgxOTg4YzZjYjI4IiwiZmlyc3ROYW1lIjoiSmFja3kyIiwibGFzdE5hbWUiOiJKb25lczIiLCJpbnRyb2R1Y3Rpb24iOiJBIFNjaWVudGlzdDIiLCJ1c2VybmFtZSI6ImphY2t5am9uZXMyIiwicGFzc3dvcmQiOiIkMmEkMTAkL0ZIdHpybC50Y0FyNmsya0dacC81ZTByNWNRSXMxd3lFeTRFQ3RUZ1dIS2VVQ21xcXB1akMiLCJfX3YiOjB9LCJpYXQiOjE1ODg1MDgwMDV9.BiB-Iq8tG9L7sXtAyMLgL8ADxnXATZE22rHKJUXh0U8",
//         "My-Custom-Header": "foobar",
//       },
//       //body: JSON.stringify({ title: "React POST Request Example" }),
//     };

//     fetch("http://localhost:4000/author", requestOptions)
//       .then((response) => response.json())
//       .then((data) => this.setState({ data: data }));
//   }

//   render() {
//     const { data } = this.state;
//     return (
//       <div>
//         <h5>POST Request with Set Headers</h5>
//         <div>Returned Id: {JSON.stringify(data)}</div>
//       </div>
//     );
//   }
// }

// //let data = {};
// ReactDOM.render(
//   <PostRequestSetHeaders  />,
//   document.getElementById('root')
// );


// ------------------------------------
// POST with fetch method 
// with set of Headers
// to get data full object from 
// http://localhost:4000/author/login
// 22may20 1208
// -------------------------------------

// class PostRequestSetHeaders extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postId: null,
//     };
//   }

//   componentDidMount() {
//     // POST request using fetch with set headers
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer my-token",
//         "My-Custom-Header": "foobar",
//       },
//       body: JSON.stringify({ title: "React POST Request Example" }),
//     };

//     fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//       .then((response) => response.json())
//       .then((data) => this.setState({ postId: data.id }));
//   }

//   render() {
//     const { postId } = this.state;
//     return (
//       <div>
//         <h5>POST Request with Set Headers</h5>
//         <div>Returned Id: {postId}</div>
//       </div>
//     );
//   }
// }

// //let data = {};
// ReactDOM.render(
//   <PostRequestSetHeaders  />,
//   document.getElementById('root')
// );

// ------------------------------------
// POST with fetch method 
// and use network & http error handling
// to get data full object from 
// http://localhost:4000/author/login
// 22may20 1208
// -------------------------------------

// class PostRequestErrorHandling extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       errorMessage: null
//     };
//   }

//   componentDidMount() {
//     // POST request using fetch with error handling
//     let requestOptions = {
//       method: 'POST',
//       url: "http://localhost:4000/author/login",
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         "username": "jackyjones2",
//         "password": "jones67P2"
//       }
//       )
//     };

//     let {method,url,headers,body} = requestOptions;

//     fetch(url, {method,headers,body})
//     .then(async response => {
//       const data = await response.json();

//       // check for error response
//       if (!response.ok) {
//         // get error message from body 
//         // or default to response status
//         const error = (data && data.message) || response.status;
//         return Promise.reject(error);
//       }

//       this.setState({ data: data })
//     })
//     .catch(error => {
//       this.setState({ errorMessage: error.message });
//       console.error('Network/Http error: ', error.message);
//     });
//   }

//   render() {
//     //const { errorMessage } = this.state;
//     return (
//       <div >
//         <h5 >POST Request with Error Handling</h5>
//         <p>{JSON.stringify(this.state.data)}</p>
//         <div >
//           Error: {this.state.errorMessage}
//         </div>
//       </div>
//     );
//   }
// }

//let data = {};
// ReactDOM.render(
//   <PostRequestErrorHandling  />,
//   document.getElementById('root')
// );

// ------------------------------------
// POST with fetch method 
// Also, use js async/await to replace .then
// to get data full object from 
// http://localhost:4000/author/login
// 21may20 1709
// -------------------------------------
// class PostRequestAsyncAwait extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         data: this.props.data
//     };
//   }

//   async componentDidMount() {
//     // POST request using fetch with async/await
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         "username": "jackyjones2",
//         "password": "jones67P2"
//       })
//     };
//     const response = await fetch('http://localhost:4000/author/login', requestOptions);
//     const data = await response.json();
//     this.setState({ data: data });
//   }

//   render() {
//     //const { postId } = this.state;
//     return (
//       <div >
//         <h5>POST Request with Async/Await</h5>
//         <div >
//             Returned Id: {JSON.stringify(this.state.data)}
//         </div>
//       </div>
//     );
//   }
// }

// let data = {};

// ReactDOM.render(
//   <PostRequestAsyncAwait data ={data} />,
//   document.getElementById('root')
// );

// ------------------------------------
// POST with fetch method 
// & use React useEffect Hook
// to get data full object from 
// http://localhost:4000/author/login
// 21may20 1709
// -------------------------------------

// function PostRequestHooks() {
//   const [data, setData] = useState(null);

//   useEffect(
//     () => {
//       // POST request using fetch inside useEffect React hook
//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           "username": "jackyjones2",
//           "password": "jones67P2"
//         })
//       };

//       fetch('http://localhost:4000/author/login', requestOptions)
//       .then(response => response.json())
//       .then(data => setData(data));

//       // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []
//   );

//   return (
//     <div >
//       <h5 >POST Request with React Hooks</h5>
//       <div>
//           Returned Id: {JSON.stringify(data)}
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <PostRequestHooks />,
//   document.getElementById('root')
// )

// ------------------------------------
// POST with fetch method 
// & use React useEffect Hook
// to get data from 
// http://localhost:4000/author/login
// 21may20 1704
// -------------------------------------

// function PostRequestHooks() {
//   const [token, setToken] = useState(null);

//   useEffect(
//     () => {
//       // POST request using fetch inside useEffect React hook
//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           "username": "jackyjones2",
//           "password": "jones67P2"
//         })
//       };

//       fetch('http://localhost:4000/author/login', requestOptions)
//       .then(response => response.json())
//       .then(data => setToken(data.token));

//       // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []
//   );

//   return (
//     <div >
//       <h5 >POST Request with React Hooks</h5>
//       <div>
//           Returned Id: {token}
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <PostRequestHooks />,
//   document.getElementById('root')
// )

// ------------------------------------
// POST with fetch method to get data from 
// http://localhost:4000/author/login 20may20 1449
// -------------------------------------

// class ClientToApi1150 extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           postUserGetJwt: this.props.postUserGetJwt
//       };
//   }

//   componentDidMount() {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: "jackyjones2",
//         password: "jones67P2"
//       })
//     };
    
//     fetch('http://localhost:4000/author/login', requestOptions)
//     .then(response => response.json())
//     .then( data => this.setState({ postUserGetJwt: data })
//     );
//   }

//   render() {
//     //const { postId } = this.state;
//     return (
//       <div >
//         <h5 >POST username and password get JSON Web Token</h5>
//         <div >
//           Returned JSON Web Token: {this.state.postUserGetJwt.token}
//         </div>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
  
//   render () {
//     // post user data and get JSON web Token
//     let postUserGetJwt ={};
//     return (    
//       <ClientToApi1150 postUserGetJwt={postUserGetJwt} />
//     );
//   }
// }

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// ------------------------------------
// POST with fetch method to get data from 
// http://localhost:4000/ 20may20 1449
// -------------------------------------

// class ClientToApi1150 extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           getIntro: this.props.getIntro
//       };
//   }

//   componentDidMount() {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//       method: 'GET',
//       // headers: { 'Content-Type': 'application/json' },
//       // body: JSON.stringify({
//       //   username: "jackyjones2",
//       //   password: "jones67P2"
//       // })
//     };
    
//     fetch('http://localhost:4000/', requestOptions)
//     .then(response => response.json())
//     .then( data => this.setState({ getIntro: data })
//     );
//   }

//   render() {
//     //const { postId } = this.state;
//     return (
//       <div >
//         <h5 >POST username and password get JSON Web Token</h5>
//         <div >
//           Returned introduction : {this.state.getIntro.message}
//         </div>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
  
//   render () {
//     // post user data and get JSON web Token
//     let getIntro ={};
//     return (    
//       <ClientToApi1150 getIntro ={getIntro} />
//     );
//   }
// }

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );


// ------------------------------------
// POST with fetch method get get data from 
// https://jsonplaceholder 19may20 2349
// -------------------------------------

// class ClientToApi1150 extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           postId: null
//       };
//   }

//   componentDidMount() {
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: 'React POST Request Example' })
//     };
    
//     fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
//     .then(response => response.json())
//     .then( data => this.setState({ postId: data.id })
//     );
//   }

//   render() {
//     const { postId } = this.state;
//     return (
//       <div >
//         <h5 >Simple POST Request</h5>
//         <div >
//           Returned Id: {postId}
//         </div>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
  
//   render () {
//     let postId ="";
//     return (    
//       <ClientToApi1150 postId={postId} />
//     );
//   }
// }

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );


// ------------------------------------
// Get or fetch data from 
// project-blog-1150 19may20 2349
// -------------------------------------

// class ClientToApi1150 extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {response: this.props.response}
//   }

//   componentDidMount() {
//     fetch('http://localhost:4000')
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ response: data })
//     })
//     .catch(console.log)
//   }

//   render() {
//     //let contacts = this.state.contacts;
//     this.state.response.message = 'Hello World'
//     return (
//       <div>
//         <center><h1>project-blog-1150 data</h1></center>
//         <div class="card-body">
            
//             <h4 class="card-subtitle mb-2 text-muted">{this.state.response.message}</h4>
           
//         </div>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
  
//   render () {
//     let response ={};
//     return (    
//       <ClientToApi1150 response={response} />
//     );
//   }
// }

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );


// ------------------------------------
// Get or fetch data 14may20 1613
// -------------------------------------

// class Contacts extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {contacts: this.props.contacts}
    
//   }

//   componentDidMount() {
//     fetch('http://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ contacts: data })
//     })
//     .catch(console.log)
//   }

//   render() {
//     //let contacts = this.state.contacts;
//     return (
//       <div>
//         <center><h1>motr Contact List</h1></center>
//         { this.state.contacts.map( (contact) => (
//           <div class="card-body">
//             <h5 class="card-title">{contact.name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
//             <p class="card-text">{contact.company.catchPhrase}</p>
//           </div>
//         )) }
//       </div>
//     )

//   }

// }

// class App extends React.Component {
  
//   render () {
//     return (
//       // JSX to render goes here...
//       // <Contacts contacts={this.state.contacts} />
//       <Contacts contacts={Array(0)} />
//     );
//   }
// }

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// // ------------------------------------
// // Get or fetch data 14may20 1613
// // -------------------------------------


// const Contacts = ({ contacts }) => {
//   return (
//     <div>
//       <center><h1>motr Contact List</h1></center>
//       { contacts.map( (contact) => (
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title">{contact.name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
//             <p class="card-text">{contact.company.catchPhrase}</p>
//           </div>
//         </div>
//       )) }
//     </div>
//   )
// };

// class App extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       contacts: []
//     };
    
//   }

//   componentDidMount() {
//     fetch('http://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ contacts: data })
//     })
//     .catch(console.log)
//   }
  
//   render () {
//     return (
//       // JSX to render goes here...
      
//       // 
//       <Contacts contacts={this.state.contacts} />
//     );
//   }
// }

// ReactDOM.render(
 
//     <App />,
 
//   document.getElementById('root')
// );

// ------------------------------------
// Tic-Tac-Toe (O's and X's) game
// Thinking in React 14may20 1613
// -------------------------------------

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return (
//       <Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [
//         {
//           squares: Array(9).fill(null)
//         }
//       ],
//       stepNumber: 0,
//       xIsNext: true
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({
//       history: history.concat([
//         {
//           squares: squares
//         }
//       ]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ?
//         'Go to move #' + move :
//         'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });

//     let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else {
//       status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={i => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


// ------------------------------------
// example 3
// Thinking in React 14may20 1613
// -------------------------------------

// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">{category}</th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ? (
//       product.name
//     ) : (
//       <span style={{ color: "red" }}>{product.name}</span>
//     );

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category}
//           />
//         );
//       }
//       rows.push(<ProductRow product={product} key={product.name} />);
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.sbcHandleTextChange = this.sbcHandleTextChange.bind(this);
//     this.sbcHandleInStockChange = this.sbcHandleInStockChange.bind(this);
//   }

//   sbcHandleTextChange(e) {
//     this.props.sbOnTextChange(e.target.value);
//   }

//   sbcHandleInStockChange(e) {
//     this.props.sbOnInStockChange(e.target.checked);
//   }

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.sbcHandleTextChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.InStockOnly}
//             onChange={this.sbcHandleInStockChange}
//           />{" "}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: "",
//       inStockOnly: false,
//     };

//     this.fptcHandleTextChange = this.fptcHandleTextChange.bind(this);
//     this.fptcHandleInStockChange = this.fptcHandleInStockChange.bind(this);
//   }

//   fptcHandleTextChange(filterText) {
//     this.setState({
//       fptcFilterText: filterText,
//     });
//   }

//   fptcHandleInStockChange(inStockOnly) {
//     this.setState({
//       fptcInStockOnly: inStockOnly,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//           sbOnTextChange={this.fptcHandleTextChange}
//           sbOnInStockChange={this.fptcHandleInStockChange}
//         />
//         <ProductTable
//           products={this.props.products}
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }

// const PRODUCTS = [
//   {
//     category: "Sporting Goods",
//     price: "$49.99",
//     stocked: true,
//     name: "Football",
//   },
//   {
//     category: "Sporting Goods",
//     price: "$9.99",
//     stocked: true,
//     name: "Baseball",
//   },
//   {
//     category: "Sporting Goods",
//     price: "$29.99",
//     stocked: false,
//     name: "Basketball",
//   },
//   {
//     category: "Electronics",
//     price: "$99.99",
//     stocked: true,
//     name: "iPod Touch",
//   },
//   {
//     category: "Electronics",
//     price: "$399.99",
//     stocked: false,
//     name: "iPhone 5",
//   },
//   { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
// ];

// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById("root")
// );

// ------------------------------------
// example 2
// Thinking in React 14may20 1613
// -------------------------------------

// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name}
//         />
//       );
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }

//   handleFilterTextChange(e) {
//     this.props.onFilterTextChange(e.target.value);
//   }

//   handleInStockChange(e) {
//     this.props.onInStockChange(e.target.checked);
//   }

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.handleFilterTextChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockChange}
//           />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: '',
//       inStockOnly: false
//     };

//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }

//   handleFilterTextChange(filterText) {
//     this.setState({
//       filterText: filterText
//     });
//   }

//   handleInStockChange(inStockOnly) {
//     this.setState({
//       inStockOnly: inStockOnly
//     })
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//           onFilterTextChange={this.handleFilterTextChange}
//           onInStockChange={this.handleInStockChange}
//         />
//         <ProductTable
//           products={this.props.products}
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }

// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('root')
// );

// ------------------------------------
// example 1
// Thinking in React 13may20 1706
// -------------------------------------

// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name} />
//       );
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   render() {
//     return (
//       <form>
//         <input type="text" placeholder="Search..." title="enter product info to search" />
//         <p>
//           <input type="checkbox" />
//           {'- - -'}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// class FilterableProductTable extends React.Component {
//   render() {
//     return (
//       <div>
//         <SearchBar />
//         <ProductTable products={this.props.products} />
//       </div>
//     );
//   }
// }

// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('root')
// );

// ------------------------------------
// example 3 Composition verse
//           Inheritance 13may20 1519
// -------------------------------------

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//       {props.children}
//     </FancyBorder>
//   );
// }

// class SignUpDialog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSignUp = this.handleSignUp.bind(this);
//     this.state = {login: ''};
//   }

//   render() {
//     return (
//       <Dialog title="Mars Exploration Program"
//               message="How should we refer to you?">
//         <input value={this.state.login}
//                onChange={this.handleChange} />
//         <button onClick={this.handleSignUp}>
//           Sign Me Up!
//         </button>
//       </Dialog>
//     );
//   }

//   handleChange(e) {
//     this.setState({login: e.target.value});
//   }

//   handleSignUp() {
//     alert(`Welcome aboard, ${this.state.login}!`);
//   }
// }

// ReactDOM.render(
//   <SignUpDialog />,
//   document.getElementById('root')
// );

// ------------------------------------
// example 3 Composition verse
//           Inheritance 13may20 1519
// -------------------------------------

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//     </FancyBorder>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <Dialog
//       title="Welcome"
//       message="Thank you for visiting our spacecraft!" />
//   );
// }

// ReactDOM.render(
//   <WelcomeDialog />,
//   document.getElementById('root')
// );

// ------------------------------------
// example 2 Composition verse
//           Inheritance 13may20 1500
// --------------------------------------

// function Contacts() {
//   return <div className="Contacts" />;
// }

// function Chat() {
//   return <div className="Chat" />;
// }

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <SplitPane
//       left={
//         <Contacts />
//       }
//       right={
//         <Chat />
//       } />
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 1 Composition verse
//           Inheritance 13may20 0135
// --------------------------------------

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }

// ReactDOM.render(
//   <WelcomeDialog />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 4 Lifting State UP 12may20 1230
// --------------------------------------

// class CelciusFahrenheitAndH2Ophase extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {oC: this.props.oC, oF: this.props.oF, h2O: this.props.h2O};
//     this.handelsCelcius = this.handelsCelcius.bind(this);
//     this.handelsFahrenheit = this.handelsFahrenheit.bind(this);
//   }

//   handelsCelcius(event) {
//     // calculate both Celcius & Fahrenheit
//     let celcius = event.target.value;
//     let oC = celcius
//     if (celcius === '-') {
//       return  this.setState({oC: '-', oF: ''});
//     }
//     // if (celcius.charAt(celcius.length-1) === '.'){
//     //   let oC=Celcius;
//     // }
//     celcius = parseFloat(celcius);
//     if (Number.isNaN(celcius)) {
//       return this.setState({oC: '', oF: ''});
//     }
//     // Round up to 2 decimal places
//     let fahrenheit = Math.round(((celcius*9/5)+32)*100)/100;
//     // Look up the H20/water phase
//     if (celcius <= 0){
//       this.setState({oC: oC, oF: fahrenheit.toString(), h2O: 'Solid'});
//     } else if (celcius > 0 && celcius < 100) {
//       this.setState({oC: oC, oF: fahrenheit.toString(), h2O: 'Liquid'});
//     } else if (celcius >= 100) {
//       this.setState({oC: oC, oF: fahrenheit.toString(), h2O: 'Gas'});
//     }
//   }

//   handelsFahrenheit(event) {
//     // calculate both Celcius & Fahrenheit
//     let fahrenheit = event.target.value;
//     let oF = fahrenheit;
//     if (fahrenheit === '-') {
//       return  this.setState({oC: '', oF: '-'});
//     }
//     fahrenheit = parseFloat(event.target.value);
//     if (Number.isNaN(fahrenheit)) {
//       return this.setState({oC: '', oF: ''});
//     }
//     // Round up to 2 decimal places ;
//     let celcius = Math.round(((fahrenheit-32)*5/9)*100)/100;
//     // Water phase
//     if (celcius <= 0){
//       this.setState({oC: celcius.toString(), oF, h2O: 'Solid'});
//     } else if (celcius > 0 && celcius < 100) {
//       this.setState({oC: celcius.toString(), oF, h2O: 'Liquid'});
//     } else if (celcius >= 100) {
//       this.setState({oC: celcius.toString(), oF, h2O: 'Gas'});
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <input value={this.state.oC} onChange={this.handelsCelcius} />
//         </div>
//         <div>
//           <input value={this.state.oF} onChange={this.handelsFahrenheit} />
//         </div>
//         <div>
//           <h3>
//             Water/H2O Phase: {this.state.h2O}
//           </h3>
//         </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <CelciusFahrenheitAndH2Ophase oC='0' oF='-32' h2O='Solid' />,
//   document.getElementById('root')
// );

// // --------------------------------------
// // example 3 Lifting State UP 12may20 1230
// // --------------------------------------

// class CelciusInput extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {oC: this.props.oC};
//     this.handelCelcius = this.handelCelcius.bind(this);
//   }

//   handelCelcius(event) {
//     this.setState({oC: event.target.value});

//   }

//   render() {
//     return (
//       <div>
//         <input value={this.state.oC} onChange={this.handelCelcius} />
//       </div>
//     )
//   }
// }

// class FahrenheitInput extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {oF: this.props.oF};
//     this.handelFahrenheit = this.handelFahrenheit.bind(this);
//   }

//   handelFahrenheit(event) {
//     this.setState({oF: event.target.value});

//   }

//   render() {
//     return (
//       <div>
//         <input value={this.state.oF} onChange={this.handelFahrenheit} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <div>
//     <CelciusInput oC='0' />
//     <FahrenheitInput oF='-32' />
//   </div>,
//   document.getElementById('root')
// )

// --------------------------------------
// example 3 Lifting State UP 11may20 1833
// --------------------------------------

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '212', scale: 'f'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 2 Lifting State UP 11may20 1711
// --------------------------------------

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   render() {
//     return (
//       <div>
//         <TemperatureInput scale="c" />
//         <TemperatureInput scale="f" />
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 1 Lifting State UP 11may20 1622
// --------------------------------------

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <fieldset>
//         <legend>Enter temperature in Celsius:</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange} />
//         <BoilingVerdict
//           celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 3 Forms 11may20 1540
// --------------------------------------

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 2 Forms 10may20 1523
// --------------------------------------

// class FileInput extends React.Component {
//   constructor(props) {
//     // highlight-range{3}
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.fileInput = React.createRef();
//   }

//   handleSubmit(event) {
//     // highlight-range{3}
//     event.preventDefault();
//     alert(
//       `Selected file - ${this.fileInput.current.files[0].name}`
//     );
//   }

//   render() {
//     // highlight-range{5}
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Upload file:
//           <input type="file" ref={this.fileInput} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FileInput />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 1 Forms 10may20 1259
// --------------------------------------

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 1 Forms 10may20 1205
// --------------------------------------

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();// prevents reload/refresh of web page
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 4 Lists and Keys 10may20 2354
// --------------------------------------

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];

// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 3 Lists and Keys 10may20 1807
// --------------------------------------

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 3 Lists and Keys 10may20 1807
// --------------------------------------

// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];

// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 2 Lists and Keys 10may20 1734
// --------------------------------------

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];

// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 1 Lists and Keys 10may20 1720
// --------------------------------------

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) =>
//   <li>{numbers}</li>
// );

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );

// --------------------------------------
// example 3 Conditional Rendering 10may20 1644
// --------------------------------------

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true}
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(prevState => ({
//       showWarning: !prevState.showWarning
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 2 Conditional Rendering 10may20 1437
// --------------------------------------

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];

// messages.length =0;
// console.log(messages);

// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 1 Conditional Rendering 10may20 1437
// --------------------------------------

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 1 Conditional Rendering 10may20 1412
// --------------------------------------

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// ReactDOM.render(
//   // Try changing to isLoggedIn={true}:
//   <Greeting isLoggedIn={true} />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 1 Handling events 8may20 2053
// --------------------------------------

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 6 State + LifeCycle 8may20 2010
// --------------------------------------

// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// --------------------------------------
// example 5 State + LifeCycle 8may20 1956
// --------------------------------------
// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       5000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 4 State + LifeCycle 7may20 1759
// --------------------------------------
// class Clock extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       5000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 3 State + LifeCycle 7may20 1605
// --------------------------------------
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// --------------------------------------
// example 2 State + LifeCycle 7may20 1443
// --------------------------------------

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 5000); // Every 5 secs

// example 1 State + LifeCycle 7may20 1443
// function Clock(props) {
//   return (

//    <div>
//      <h1>Hello, world!</h1>
//      <h2>It is {props.date.toLocaleTimeString()}.</h2>
//    </div>
//  );
// }

// function tick() {
//   ReactDOM.render(
//    <Clock date={new Date()} />,
//    document.getElementById('root')
//   );
// }

// setInterval(tick, 5000); // Every 5 secs

// ---------------------------------------
// <Comment props
// />

// const props =
// {
//   author: {
//     avatarUrl: 'logo513.png',
//     name: 'Jack'
//   },
//   text: 'It is Jackie!',
//   date: new Date()
// }

// ------------- Example test 7may20 1138
// ------------- DID NOT WORK
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {props.date}
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(
// <Comment
//   authorAvatarUrl ='logo512.png'
//   authorName= 'Jackie'
//   text= 'I am Jackie'
//   date= {new Date}

// />,

// document.getElementById('root')
// );

// --------------- Test 7may20 0022

// function Welcome(props) {
//   return <h1>Hello, {props.fname}</h1>;
// }

// ReactDOM.render(
//   <Welcome fname="Jackie" />,
//   document.getElementById('root')
// );

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>

//      <Welcome name="Sara" />
//      <Welcome name="Cahal" />
//      <Welcome name="Edite" />
//    </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// old test 7may20 0021

// React component = js function
// function Welcome(props) {
//   return <h1>Hello, {props.fname+ ' '+props.lname}</h1>;
//  }

//  const element = <Welcome fname="Sara" lname="Jones" />;

//  // React Dom element renders/transforms to html DOM in the root div
//  ReactDOM.render(
//    element,
//    document.getElementById('root')
//  );

// old test 6may20 2331

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//  ReactDOM.render(element, document.getElementById('root'));
// }

// //const element = <Welcome name="Sara" />;

// setInterval(tick, 3000);

// old tests::::::::::::::

// function formatName(user){
//   return user.firstName+' '+user.secondName
// }

// let user=
// {
//   firstName: 'Jackie2',
//   secondName:'Jones2'
// };

// //let name = 'Jackie Jones'
// let helloWorld = (
// <h1>
//   {formatName(user)} say: Hello, world!
// </h1>
// );

// function getGreeting(user) {
//   if (user) {

//    return <h1>Hello, {formatName(user)}!</h1>;
//  }
//  return <h1>Hello, Stranger.</h1>;
// }

// let logo = './logo512.png'

// const element = <img src={logo}></img>;

// const element2 = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//     <img src={logo} ></img>
//   </div>

// );

// const element3 = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );

// const element4 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// ReactDOM.render(

//   element2,
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   document.getElementById('root')

// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log("./src/index.js DONE");
