import React, {Component, createContext} from 'react';

const {Provider, Consumer} = createContext();

class UserProvider extends Component{
  state = { 
    currentUser: {
      name: 'Eduar'
    }
  }

  handleLogin = user => {
    this.setState({
      currentUser: user
    })
  }

  render(){
    return (
      <Provider value={{
        user: this.state.currentUser,
        onLogin: this.onLogin
      }}>
        {this.props.children}
      </Provider>
    )
  }

}

export {UserProvider, Consumer as UserConsumer}