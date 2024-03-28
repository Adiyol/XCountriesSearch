import styles from "./Card.css"


const Card = (props) => {
  return (
    <div className={"countryCard"}>
        <img src={props.imgLink} alt={props.imgName}/>
        <p>{props.imgName}</p>
    </div>
  )
}

export default Card