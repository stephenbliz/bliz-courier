import { delay, easeIn } from "motion"

export const headerVariant = {
    hidden: {
        height: '5rem',
        transition: {
            duratiion: 3
        }
    },
    visible: {
        height: '60vh',
        transition: {
            duratiion: 3
        }
    }
}

export const slideInTopVariant = {
    hidden: {
        opacity: 0,
        y: '2rem'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export const slideInRightVariant = {
    hidden: {
        opacity: 0,
        x: '-3rem'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: 0.7
        }
    }
}
