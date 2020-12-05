

const DelButt = ({ onclick }) => {
    return(
        <div className="delButt">
            <button variant="danger" onClick={onclick}><strong>Mark as complete</strong></button>
        </div>
    )
}


export default DelButt;