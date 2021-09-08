export function Opinions(props) {
    return (

        <div className="op-content"{...props}>
            <div className="opinions-content" >
                <img className="opinionsImage" src={props.image} alt="user" />
                <div className="opinionsText">{props.text}</div>
            </div>
            <h2 className="opinionsName">{props.name}</h2>
            
        </div>

    )
}