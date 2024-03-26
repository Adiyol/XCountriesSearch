import styles from "./Card.module.css"


const Card = (props) => {
  return (
    <div className={styles.card}>
        <img src={props.imgLink} alt={props.imgName}/>
        <p>{props.imgName}</p>
    </div>
  )
}

export default Card