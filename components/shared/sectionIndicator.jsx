import styles from '../../styles/shared/SectionIndicator.module.css'
import { useSettingsContext } from '../../context/SettingsContext'
import { BsDiamondFill, BsDiamond } from 'react-icons/bs'

export default function SectionIndicator({ sections }) {
    const { theme } = useSettingsContext()

    return (
        <div className={styles.sectionIndicatorContainer}>
            {/* <div className={styles.leftLine2}></div> */}
            <div>
                {sections.sectionList &&
                    sections.sectionList.map((sectionTitle, index) => (
                        <div
                            className={styles.indicatorContainer}
                            key={sectionTitle + '001'}
                        >
                            {index === sections.currentSection ? (
                                <BsDiamondFill
                                    className={styles.icon}
                                    key={sectionTitle + '002'}
                                />
                            ) : (
                                <BsDiamond
                                    className={styles.icon}
                                    key={sectionTitle + '002'}
                                />
                            )}
                        </div>
                    ))}
            </div>
            {/* <div className={styles.leftLine}></div> */}
        </div>
    )
}
