// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Axios from "axios";
import UserData from "./components/UserData";
import Friends from "./components/Friends";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      card: "tajahouse",
      users: [],
      friends: [],
      input: "",
    };
  }
  handleUpdate = e => {
    Axios.get(`https://api.github.com/users/${this.state.input}`)
      .then((profile) => this.setState({ users: profile.data }))
      .catch((err) => console.log("Naw girl", err));

    // fetch('https://api.github.com/users/tajahouse/followers')
   Axios.get(`https://api.github.com/users/${this.state.input}/followers`)
    // .then(res=>console.log(res))
    .then(profile => this.setState({friends: profile.data}))
    .catch(err=> console.log("Naw girl", err));

    this.setState({
      input:""
    })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
   };

  componentDidMount() {
    Axios.get(`https://api.github.com/users/${this.state.card}`)
      .then((profile) => this.setState({ users: profile.data }))
      .catch((err) => console.log("Naw girl", err));

    Axios.get(`https://api.github.com/users/${this.state.card}/followers`)
      .then((profile) => this.setState({ friends: profile.data }))
      .catch((err) => console.log("Naw girl", err));
  }

  render() {
    console.log(this.state.users);
    console.log(this.state.friends);

    return (
      <div className="App">
        <div className="container">
                <Header
          onChange={this.handleChange}
          update={this.handleUpdate}
          input={this.state.input}
        />
         <UserData className="user" users={this.state.users} />
        <div className="friends">
          {this.state.friends.map((data) => {
            return <Friends friends={data} />;
          })}{" "}
        </div>  
        </div>

      </div>
    );
  }
}

export default App;