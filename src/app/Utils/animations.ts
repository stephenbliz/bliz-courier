export const headerVariant = {
    hidden: {
        height: '5rem',
        transition: {
            duratiion: 0.5,
            ease: 'easeInOut'
        }
    },
    visible: {
        height: '60vh',
        transition: {
            duratiion: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const slideInTopVariant = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 120
        }
    }
}

export const slideInRightVariant = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            delay: 0.7,
            type: 'spring',
            stiffness: 120
        }
    }
}

export const slideInLeftVariant = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            type: 'spring',
            stiffness: 120
        }
    }
}

export const leftRotateVariant = {
    hidden: {
        opacity: 0,
        rotate: 90
    },
    visible: {
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 0.7,
            delay: 0.3,
            ease: 'easeInOut'
        }
    }
}

