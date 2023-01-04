import styles from '../styles/Introduction.module.css';

export default function Introduction() {
  console.log(styles)
  return (
    <div className={styles.introContainer}>
        <div className={styles.introGroup1}>
            <div className={styles.introGroup1_img}>
              <img className={styles.introGroup1_me} src="/assets/intro/hanz.png"/>
              <img className={styles.introGroup1_gray} src="/assets/intro/gray-bg.svg"/>
              <img className={styles.introGroup1_blue} src="/assets/intro/blue-gradient-bg.svg"/>
            </div>
            <div className={styles.introGroup1_msg}>
                <h1 className={styles.introGroup1_msg1}>Hi! I'm</h1>
                <h1 className={styles.introGroup1_msg2}>Hanz Aquino<i>.</i></h1>
                <p className={styles.introGroup1_msg3}>I'm a <b>Computer Engineer / Programmer</b> and I love converting <i>ideas</i> and <i>creativity</i> into a piece of technology.</p>

            

                <div className={styles.introGroup1_social}>
                    <a href="https://github.com/hanzzakino" target="_blank" className={styles.socialGT}><i id="gt" className="bi bi-github"></i></a>
                    <a href="https://facebook.com/hanzzakino" target="_blank" className={styles.socialFB}><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com/hanzzakino" target="_blank" className={styles.socialTW}><i className="bi bi-twitter"></i></a>
                    <a href="mailto:hanzzakino@gmail.coom" className={styles.socialML}><i className="bi bi-envelope-fill"></i></a>
                </div>
            </div>
        </div>
        
    </div>
  )
}