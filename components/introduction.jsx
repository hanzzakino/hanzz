import styles from '../styles/Introduction.module.css';

export default function Introduction() {
  return (
    <div className={styles.intro_container}>
        <div className={styles.intro_group1}>
            <div className={styles.intro_group1_img}>
              <img className={styles.intro_img_me} src="/assets/intro/hanz.png"/>
              <img className={styles.intro_img_gray} src="/assets/intro/gray-bg.svg"/>
              <img className={styles.intro_img_blue} src="/assets/intro/blue-gradient-bg.svg"/>
            </div>
            <div className={styles.intro_group1_msg}>
                <h1 className={styles.intro_group1_msg1}>Hi! I'm</h1>
                <h1 className={styles.intro_group1_msg2}>Hanz Aquino<i>.</i></h1>
                <p className={styles.intro_group1_msg3}>
                I'm a <b>Computer Engineer / Programmer</b> and I love <br />
                converting <i>ideas</i> and <i>creativity</i> into a piece of technology.
                </p>

            

                <div className={styles.intro_group1_social}>
                    <a href="https://github.com/hanzzakino" target="_blank" className={styles.social_gt}><i id="gt" className="bi bi-github"></i></a>
                    <a href="https://facebook.com/hanzzakino" target="_blank" className={styles.social_fb}><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com/hanzzakino" target="_blank" className={styles.social_tw}><i className="bi bi-twitter"></i></a>
                    <a href="mailto:hanzzakino@gmail.coom" className={styles.social_ml}><i className="bi bi-envelope-fill"></i></a>
                </div>
            </div>
        </div>
        
    </div>
  )
}