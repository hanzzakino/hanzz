import styles from '../styles/Introduction.module.css'
import { useSettingsContext } from '../context/SettingsContext'
import { BsGithub, BsFacebook, BsTwitter, BsEnvelopeFill } from 'react-icons/bs'
export default function Introduction() {
    const { theme } = useSettingsContext()

    return (
        <div className={styles.introContainer}>
            <div className={styles.introGroup1}>
                <div className={styles.introGroup1_img}>
                    <img
                        className={styles.introGroup1_me}
                        src="/assets/intro/hanz.png"
                    />
                    <img
                        className={styles.introGroup1_gray}
                        style={{
                            opacity: theme == 'dark' ? 0.1 : 0.7,
                        }}
                        src="/assets/intro/gray-bg.svg"
                    />
                    <img
                        className={styles.introGroup1_blue}
                        src="/assets/intro/blue-gradient-bg.svg"
                    />
                </div>
                <div className={styles.introGroup1_msg}>
                    <h1
                        className={
                            styles.introGroup1_msg1 + ' ' + styles.typewriter
                        }
                    >
                        Hi! I'm
                    </h1>

                    <h1 className={styles.introGroup1_msg2}>
                        Hanz Aquino<i>.</i>
                    </h1>
                    <p className={styles.introGroup1_msg3}>
                        I'm a <b>Computer Engineer / Programmer</b> and I
                        convert <i>ideas</i> and <i>creativity</i> into a piece
                        of technology.
                    </p>
                    <p className={styles.introGroup1_msg4}>
                        Also, a&nbsp;
                        <nobr className={styles.multiTalent}></nobr>
                    </p>
                    <div className={styles.introGroup1_social}>
                        <a
                            href="https://github.com/hanzzakino"
                            target="_blank"
                            className={styles.socialGT + ' ' + styles.tooltip}
                        >
                            <BsGithub style={{ fontSize: '1.5rem' }} />
                            {/* <span className={styles.tooltiptext}>GitHub</span> */}
                        </a>
                        <a
                            href="https://facebook.com/hanzzakino"
                            target="_blank"
                            className={styles.socialFB + ' ' + styles.tooltip}
                        >
                            <BsFacebook style={{ fontSize: '1.5rem' }} />
                            {/* <i className="bi bi-facebook"></i> */}
                            {/* <span className={styles.tooltiptext}>Facebook</span> */}
                        </a>
                        <a
                            href="https://twitter.com/hanzzakino"
                            target="_blank"
                            className={styles.socialTW + ' ' + styles.tooltip}
                        >
                            <BsTwitter style={{ fontSize: '1.5rem' }} />
                            {/* <span className={styles.tooltiptext}>Twitter</span> */}
                        </a>
                        <a
                            href="mailto:hanzzakino@gmail.coom"
                            className={styles.socialML + ' ' + styles.tooltip}
                        >
                            <BsEnvelopeFill style={{ fontSize: '1.5rem' }} />
                            {/* <span className={styles.tooltiptext}>Email</span> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
