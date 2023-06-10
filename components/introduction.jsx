import styles from '../styles/Introduction.module.css'
import { useSettingsContext } from '../context/SettingsContext'
import {
    BsGithub,
    BsFacebook,
    BsTwitter,
    BsLinkedin,
    BsEnvelopeFill,
} from 'react-icons/bs'
export default function Introduction() {
    const { theme } = useSettingsContext()

    return (
        <div className={styles.container}>
            <div className={styles.group1}>
                <div className={styles.group1_img}>
                    <img
                        className={styles.group1_me}
                        src="/assets/intro/hanz.png"
                    />
                    <img
                        className={styles.group1_gray}
                        style={{
                            opacity: theme == 'dark' ? 0.1 : 0.7,
                        }}
                        src="/assets/intro/gray-bg.svg"
                    />
                    <img
                        className={styles.group1_blue}
                        src="/assets/intro/blue-gradient-bg.svg"
                    />
                </div>
                <div className={styles.group1_msg}>
                    <h1 className={styles.group1_msg1}>Hi! I'm</h1>

                    <h1 className={styles.group1_msg2}>
                        Hanz Aquino<i>.</i>
                    </h1>
                    <p className={styles.group1_msg3}>
                        <b>Computer Engineer | Programmer</b>
                        <br />I convert <i>ideas</i> and <i>creativity</i> into
                        a piece of technology.
                    </p>
                    <p className={styles.group1_msg4}>
                        Also, a&nbsp;
                        <nobr className={styles.multiTalent}></nobr>
                    </p>
                    <div className={styles.group1_social}>
                        <a
                            href="https://github.com/hanzzakino"
                            target="_blank"
                            className={styles.socialGT + ' ' + styles.tooltip}
                        >
                            <BsGithub className={styles.icon} />
                            {/* <span className={styles.tooltiptext}>GitHub</span> */}
                        </a>
                        <a
                            href="https://linkedin.com/in/hanzzakino"
                            target="_blank"
                            className={styles.socialGT + ' ' + styles.tooltip}
                        >
                            <BsLinkedin className={styles.icon} />
                            {/* <span className={styles.tooltiptext}>GitHub</span> */}
                        </a>
                        <a
                            href="https://facebook.com/hanzzakino"
                            target="_blank"
                            className={styles.socialFB + ' ' + styles.tooltip}
                        >
                            <BsFacebook className={styles.icon} />
                            {/* <i className="bi bi-facebook"></i> */}
                            {/* <span className={styles.tooltiptext}>Facebook</span> */}
                        </a>
                        <a
                            href="https://twitter.com/hanzzakino"
                            target="_blank"
                            className={styles.socialTW + ' ' + styles.tooltip}
                        >
                            <BsTwitter className={styles.icon} />
                            {/* <span className={styles.tooltiptext}>Twitter</span> */}
                        </a>
                        <a
                            href="mailto:hanzzakino@gmail.coom"
                            className={styles.socialML + ' ' + styles.tooltip}
                        >
                            <BsEnvelopeFill className={styles.icon} />
                            {/* <span className={styles.tooltiptext}>Email</span> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
