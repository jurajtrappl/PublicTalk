import React from 'react';
import User from '../User';

export default class UserList extends React.Component {
    constructor() {
        super();
        this.state = {users: [ { username: "user1" } ]};
    }

    render() {
        return(
            <div className="userList">
                {
                    this.state.users.map(
                        u => <User name={u.username}/>
                    )
                }
            </div>
        );
    }
}