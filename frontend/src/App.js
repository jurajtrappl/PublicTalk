import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from './components/Messages';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <div className="row w-100">
        <div className="col-9">
          <Messages />
        </div>
        <div className="col-3">
          <UserList />
        </div>
      </div>
    </div>
  )
}

export default App;
