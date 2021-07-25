function Message(props) {
    const dateTime = new Date(props.time);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();

    const borderColor = props.mine ? "1px solid #ecb602" : "1px solid #55185d";
    
    return (
        <div style={{ padding: "12px" }}>
            <h6 className="m-1">
                @{props.username} - {date} {time}
            </h6>
            <p style={{ width: "fit-content", border: borderColor }} className="bg-light m-1 p-2 rounded-pill">
                {props.content}
            </p>
        </div>
    );
}

export default Message;