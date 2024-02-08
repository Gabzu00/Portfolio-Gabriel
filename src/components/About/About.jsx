import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () =>{
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>ABOUT</h1>
      <div className={styles.content}>
        <img src={getImageUrl("about/Alva&GabrielMindre.jpg")} 
        className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3 >Frontend Developer</h3>
              <p>I have experience developing 
                frontend styling and functionality</p>
            </div> 
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
            <div className={styles.aboutItemText}> 
              <h3 >Backend Developer</h3>
              <p>I have experience developing fast
                and optimised back-end systems and APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"/>
            <div className={styles.aboutItemText}>
              <h3>Integrations using Mapforce and Azure</h3>
              <p>I have experience working with integrations
                using Mapforce and Azure</p>
            </div>          
          </li>
        </ul>
      </div>
    </section>
  )
}