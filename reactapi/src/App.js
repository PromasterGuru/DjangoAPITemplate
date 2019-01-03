import React, { Component } from 'react';

class App extends Component {
    state = {
      items: [],
      isLoaded: false,
    }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => {
            this.setState({
              isLoaded:true,
              items: json,
            })
          });
  }
  render() {
    var {isLoaded, items} = this.state;
    if(!isLoaded){
      return(
        <div><h3>Loading...</h3></div>
      )
    }
    else{
      return (
        <div className="App">
        <table>
          <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
            {items.map(item => (
            <tr>
              <td key={item.id}>
                {item.name}
              </td>
              <td>
                {item.username}
              </td>
              <td>
                {item.email}
              </td>
          </tr>))}
        </table>
          <ul>
          </ul>
        </div>
      );

    }
  }
}

export default App;
