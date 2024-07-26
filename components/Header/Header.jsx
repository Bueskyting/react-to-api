import styles from './Header.module.css'

const Header = ({ links }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navLinks}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.link} className={styles.navLink}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header