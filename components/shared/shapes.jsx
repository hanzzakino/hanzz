import styles from '../../styles/shared/Shapes.module.css'
import Image from 'next/image'

export function Curl2Circle({ transformStyle }) {
    return (
        <div className={styles.shapeContainer + ' ' + transformStyle}>
            <Image
                height={54}
                width={54}
                src={'/assets/background/shapes/circle-ccd5d7.svg'}
                alt="shape"
                className={styles.Curl2Circle_circleShape}
            />
            <Image
                height={16}
                width={160}
                src={'/assets/background/shapes/curly-line.svg'}
                alt="shape"
                className={styles.Curl2Circle_curlyLine}
            />
        </div>
    )
}

export function DotMatrixAndBox({ transformStyle }) {
    return (
        <div className={styles.shapeContainer + ' ' + transformStyle}>
            <Image
                height={100}
                width={100}
                src={'/assets/background/shapes/box-d5e4e8.svg'}
                alt="dot matrix"
                className={styles.DotMatrixAndBox_boxShape}
            />
            <Image
                height={86}
                width={86}
                src={'/assets/background/shapes/4-dot-matrix.svg'}
                alt="dot matrix"
                className={styles.DotMatrixAndBox_dotMatrix}
            />
        </div>
    )
}

export function Curl2CircleBox({ transformStyle }) {
    return (
        <div className={styles.shapeContainer + ' ' + transformStyle}>
            <Image
                height={16}
                width={160}
                src={'/assets/background/shapes/curly-line.svg'}
                alt="dot matrix"
                className={styles.Curl2CircleBox_curlyLine}
            />
            <Image
                height={68}
                width={68}
                src={'/assets/background/shapes/box-ccd5d7.svg'}
                alt="dot matrix"
                className={styles.Curl2CircleBox_boxShape}
            />
            <Image
                height={76}
                width={76}
                src={'/assets/background/shapes/circle-d5e4e8.svg'}
                alt="dot matrix"
                className={styles.Curl2CircleBox_circleShape}
            />
        </div>
    )
}

export function Circle({ transformStyle, scale = 1 }) {
    return (
        <div className={styles.shapeContainer + ' ' + transformStyle}>
            <Image
                height={130 * scale}
                width={130 * scale}
                src={'/assets/background/shapes/circle-d5e4e8.svg'}
                className={styles.circleShape}
                alt="dot matrix"
            />
        </div>
    )
}
