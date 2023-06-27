import styles from '../../../styles/sections/Introduction.module.css'
import { useSettingsContext } from '../../../context/SettingsContext'
import {
    BsGithub,
    BsFacebook,
    BsTwitter,
    BsLinkedin,
    BsEnvelopeFill,
} from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import ScrollTrigger from '../../shared/scrollTrigger'

export default function Introduction() {
    const { theme, setCurrentSection } = useSettingsContext()
    return (
        <div className={styles.container}>
            <div className={styles.group1}>
                <ScrollTrigger
                    thresholdValue={0}
                    initialThresholdValue={0}
                    animationName="animation_slideUp100s1"
                    section={0}
                    defaultClassname={styles.group1_img}
                ></ScrollTrigger>

                <div className={styles.group1_msg}>
                    <ScrollTrigger
                        animationName="animation_slideLeft100s15"
                        section={0}
                    >
                        <h1 className={styles.group1_msg1}>Hi! I'm</h1>
                    </ScrollTrigger>

                    <ScrollTrigger
                        animationName="animation_slideLeft100s17"
                        section={0}
                    >
                        <h1
                            className={
                                styles.accent1 + ' ' + styles.group1_msg2
                            }
                        >
                            Hanz Aquino
                        </h1>
                    </ScrollTrigger>
                    <ScrollTrigger
                        animationName="animation_slideLeft100s20"
                        section={0}
                    >
                        <p className={styles.group1_msg3}>
                            I'm a <b>Computer Engineer / Programmer </b>
                            and I convert{' '}
                            <span className={styles.accent2}>
                                ideas
                            </span> and{' '}
                            <span className={styles.accent2}>creativity</span>{' '}
                            into a piece of technology.
                        </p>
                        <p className={styles.group1_msg4}>
                            Also, a&nbsp;
                            <nobr className={styles.multiTalent}></nobr>
                        </p>
                    </ScrollTrigger>
                    <ScrollTrigger
                        animationName="animation_popUps2"
                        section={0}
                        defaultClassname={styles.group1_social}
                    >
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
                            className={styles.socialLI + ' ' + styles.tooltip}
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
                    </ScrollTrigger>
                </div>
            </div>
        </div>
    )
}
