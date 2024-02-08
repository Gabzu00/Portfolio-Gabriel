import styles from "./Contact.module.css"
import React from "react"
import { getImageUrl } from "../../utils"

export const Contact = () =>{
  return(
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:gabriel@littleland.se">gabriel@littleland.se</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/gabriel-petersson-0592b3262/">linkedin.com/gabriel-petersson</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Gabzu00">github.com/Gabzu00</a>
        </li>
      </ul>
    </footer>
  )
}