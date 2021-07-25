import Message from '../Message';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMessages } from '../../../actions/messageActions';

class MessageList extends React.Component {
    componentWillMount() {
        this.props.fetchMessages();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newMessage) {
            this.props.messages.push(nextProps.newMessage);
        }
    }

    render() {
        return (
            <div style={{ height: "calc(90vh - 60px)", overflowY: "auto", borderBottom: "1px solid #290849" }}>
                {
                    this.props.messages.map(
                        m => <Message
                                key={m._id}
                                username={m.username}
                                content={m.content}
                                time={m.time}
                                mine={m.username === this.props.username} />
                    )
                }
            </div>
        );
    }
}

MessageList.propTypes = {
    fetchMessages: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    newMessage: PropTypes.object,
    username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    messages: state.messages.items,
    newMessage: state.messages.item,
    username: state.auth.user.name
});

export default connect(
    mapStateToProps,
    { fetchMessages }
)(MessageList);