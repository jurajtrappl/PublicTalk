import axios from 'axios';
import Message from '../Message';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default class Messages extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    async handleSubmit(event) {
        this.insertMessage();
        this.setState({ value: '' });
        this.fetchMessages();
        event.preventDefault();
    }

    fetchMessages() {
        axios.get('/index')
            .then(res => {
                const messages = res.data;
                this.setState({ messages });
            })
    }

    insertMessage() {
        axios({
            method: 'post',
            url: '/index',
            data: {
                message: { username: "user1", content: this.state.value }
            } 
         })
         .then(function(response) {
             console.log(response);
         });
    }

    componentDidMount() {
        this.fetchMessages(); 
    }

    render() {
        return(
            <div>
                <div className="messageList">
                    {
                        this.state.messages.map(
                            m => <Message username={m.username} content={m.content}></Message>
                        )
                    }
                </div>
                <div className="messageBox">
                    <form onSubmit={this.handleSubmit}>
                        <input className="newMessage rounded-pill m-3 p-2" type="text" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Send" />
                    </form>
                </div>
        </div>
        );
    }
}