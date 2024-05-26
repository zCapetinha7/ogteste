export function Qualities(props){
    return (
        <div className = "qualities"{...props}>
            <img src= {props.image} alt="qualities" />
            <div className = "qualitiesTitle">{props.title}</div>
            <div className = "qualitiesText">{props.text}</div>
        </div>
    )
}