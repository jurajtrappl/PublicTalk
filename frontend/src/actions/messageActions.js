import axios from 'axios';
import { GET_ERRORS, FETCH_MESSAGES, NEW_MESSAGE } from './types';

// Get all messages.
export const fetchMessages = () => dispatch => {
    axios.get('/messages')
        .then(res => {
            dispatch({
                type: FETCH_MESSAGES,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Insert a new message.
export const newMessage = message => dispatch => {
    axios({
        method: 'post',
        url: '/messages/add',
        data: message
    })
        .then(res => {
            dispatch({
                type: NEW_MESSAGE,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}