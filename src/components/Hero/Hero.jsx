import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () =>{
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi!
        <br /> My name is Gabriel
        </h1>
        <p className={styles.description}>I recently graduated from Kristianstad Högskola studying Software 
          Development
        </p>
        <a href="mailto:gabriel@littleland.se" 
        className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img className={styles.heroImg} 
      src={getImageUrl("hero/ProfilBildGabrielCirkel.jpg")}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}