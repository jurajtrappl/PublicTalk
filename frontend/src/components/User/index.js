const User = props => {
    return(
        <div className="row">
            <div className="col-2">
                <i class="bi bi-person-fill"></i>
            </div>
            <div className="col-10">
                <h5>
                    {props.name}
                </h5>
            </div>
        </div>
    )
}

export default User;