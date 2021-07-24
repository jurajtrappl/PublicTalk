import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Message = props => {
    return (
        <div class="m-2">
            <h6 class="m-1">
                {props.username}
            </h6>
            <p class="bg-light m-1 p-2 border border-2 rounded-pill w-fit">
                {props.content}
            </p>
        </div>
    );
}

export default Message;