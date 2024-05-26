export function Foundersname(props){
  return (
      <div id = "founder-text"{...props}>
          <h1>{props.name}</h1>
          <div>{props.text}</div>
          <img src = {props.image} alt = "founderImage"/>
      </div>
  )
}