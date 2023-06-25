import styles from '../../styles/shared/SectionIndicator.module.css'
import { useSettingsContext } from '../../context/SettingsContext'
import { BsDiamondFill, BsDiamond } from 'react-icons/bs'

export default function SectionIndicator() {
    const { theme, sections } = useSettingsContext()

    return (
        <div className={styles.container + ' animation_slowShow'}>
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
                                    className={
                                        styles.icon +
                                        ' ' +
                                        styles.selectedIndicator
                                    }
                                    key={sectionTitle + '002'}
                                />
                            ) : (
                                <BsDiamondFill
                                    className={
                                        styles.icon +
                                        ' ' +
                                        styles.unselectedIndicator
                                    }
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
