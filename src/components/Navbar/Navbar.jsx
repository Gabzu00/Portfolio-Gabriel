import React from "react"
import styles from "./Navbar.module.css"
import {useState} from "react";
import {getImageUrl} from "../../utils"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const CVFile = "https://melodic-churros-ee29ea.netlify.app/assets/PDFDocuments/CVGabrielPetersson.pdf";

  const downloadFile = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.downloads}>
        <button className={styles.buttonCV} onClick={() => downloadFile(CVFile)}>Resumé <img className={styles.download} src={getImageUrl("nav/Download.png")} alt="Download Icon" /></button>
        {/* <button className={styles.buttonCL} onClick={() => downloadFile(CVFile)}>Cover Letter <img className={styles.download} src={getImageUrl("nav/Download.png")} alt="Download Icon" /></button> */}
      </div>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={menuOpen 
          ? getImageUrl("nav/closeIcon.png")
          : getImageUrl("nav/menuIcon.png")}
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        /> 
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>   
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    ); 
};