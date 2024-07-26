import styles from './Card.module.css'

const Card = ({ game }) => {
  return (
    <div className={styles.card}>
      <h2>{game.title}</h2>
      <p>{game.genre}</p>
      <p>{game.platform}</p>
      <p>{game.developer}</p>
      {/* Cia galima prideti daugiau objekto detaliu */}
    </div>
  )
}

export default Card