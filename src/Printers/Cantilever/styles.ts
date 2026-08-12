const styles = {

    Cantilever: {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    Scalable: {
        position: 'relative'
    },

    ZAxis: {
        top: 0,
        left: 0,
        borderRadius: 8,
        boxSizing: 'border-box',
        backgroundColor: '#777777',
        position: 'absolute'
    },

    Bottom: {
        borderRadius: 8,
        boxSizing: 'border-box',
        backgroundColor: '#777777',
        position: 'absolute'
    },

    XAxis: {
        position: 'absolute',
        borderRadius: 8,
        backgroundColor: '#999999'
    },

    BuildPlate: {
        boxSizing: 'border-box',
        borderRadius: 8,
        position: 'absolute',
        backgroundColor: '#999999',
        height: 8,
    },

    Gantry: {
        backgroundColor: "#cccccc",
        borderRadius: 4,
        boxSizing: 'border-box',
        position: 'absolute'
    },
    Nozzle: {
        backgroundColor: '#aaaaaa',
        position: 'absolute',
        width: 12,
        height: 12,
        clipPath: 'polygon(100% 0, 100% 50%, 50% 75%, 0 50%, 0 0)'
    },
    BuildArea: {
        backgroundColor: "rgba(0,0,0,0.075)",
        boxSizing: 'border-box',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden'
    },

    Print: {
        backgroundColor: 'var(--primary-text-color)',
        width: '100%'
    },

    ThumbnailBackdrop: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.2,
        filter: 'grayscale(0.45) brightness(0.7)'
    },

    ThumbnailReveal: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderTop: '1px solid rgba(255,255,255,0.25)',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.25)'
    },

};

export default styles;
