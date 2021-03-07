import React from 'react'

const styles = {
    footerStyle: {
        color: "red",
        fontFamily: ['RocknRoll One', "sans-serif"]
    }
}

const Footer = () => {
    return (
        <footer className="footer">
            <p className="text-center">Vincent <span style={styles.footerStyle}>BREH</span> Gines 2021</p>
        </footer>
    )
}

export default Footer