import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import profile from '../../../assets/hero/pic.jpg'
import profile1 from '../../../assets/hero/soQBmgWt.png'

export const Hero = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:your-jakirhossainmunir79@gmail.com?subject=Contact&body=Hello!";
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm  Jakir Hossain </h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
       <button  onClick={handleContactClick} className={styles.contactBtn}>
        
          Contact Me
       
       </button>
      </div>
      <img 
      
        src={profile1}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
