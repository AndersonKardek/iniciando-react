import {FaGithub, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return(
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://github.com/AndersonKardek" target="_blank" rel="noreferrer"> {<FaGithub />}</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anderson-kardek-6357b6176/" target="_blank" rel="noreferrer"> {<FaLinkedin />}</a>
        </li>
      </ul>
      <p className={styles.copy_right}><span>Costs</span> &copy; 2022</p>
    </footer>
  ) 
        
}

export default Footer