import React from 'react'
import Quiz from "./components/Quiz";
import { UserProvider, UserConsumer } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <UserConsumer>
        {
          ({user})=> <div className="App">
            <h2>{user.name}</h2>
          <Quiz/>
        </div>
        }
      </UserConsumer>
    </UserProvider>
    
  );
}

export default App;
