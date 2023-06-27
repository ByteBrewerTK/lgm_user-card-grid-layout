import Users_card from "./Components/users";
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      users_data: [],
      loading: false
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // Set loading state to true
    this.setState({ loading: true });

    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then(response => response.json())
      .then((users) => {
        // Simulate loading time of 0.3 seconds
        setTimeout(() => {
          this.setState({
            users_data: users.data,
            loading: false
          });
        }, 300);
        
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav>
          <div className="box">
            <h2>Ethos</h2>
            <button onClick={this.updateState} id="getBtn">Get Users</button>
          </div>
        </nav>        
        <div className="box2">
          <Users_card loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}

export default App;
