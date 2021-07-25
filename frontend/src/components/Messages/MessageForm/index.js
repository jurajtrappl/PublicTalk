import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newMessage } from '../../../actions/messageActions';

import './index.css';

class MessageBox extends React.Component {
    constructor() {
        super();
        this.state = {
            content: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        e.preventDefault();
        this.setState({ content: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const message = {
            username: this.props.auth.user.name,
            content: this.state.content,
            time: Date.now()
        }

        this.props.newMessage(message);
    }

    render() {
        return (
            <div style={{ height: "calc(10vh)" }}>
                <form onSubmit={this.onSubmit}>
                    <input style={{ width: "300px" }} className="bg-light rounded-pill m-3 p-2" type="text" value={this.state.content} onChange={this.onChange} />
                    <input className="btn button" type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

MessageBox.propTypes = {
    newMessage: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { newMessage }
)(MessageBox);