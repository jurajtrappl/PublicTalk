import React from 'react';

import MessageForm from '../Messages/MessageForm';
import MessageList from '../Messages/MessageList';

function Dashboard() {
    return (
        <div style={{ height: "calc(100vh - 60px)" }}>
            <MessageList />
            <MessageForm />
        </div>
    );
}

export default Dashboard;