

export const headerVariant = {
    hidden: {
        height: '5rem',
        transition: {
            duratiion: 3,
            ease: 'easeIn'
        }
    },
    visible: {
        height: '60vh',
        transition: {
            duratiion: 3,
            ease: 'easeIn'
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
            ease: 'linear'
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
            ease: 'easeIn'
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
            ease: 'linear'
        }
    }
}

