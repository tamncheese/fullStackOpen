const Notification = ({message}) => {
    const notificationStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16,
        background: 'lightgrey',
        borderStyle: 'solid',
    }
    
    
    if (message === null) {
        return null
    }
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification