import React from 'react';

const Footer = ()=>{
    return (
        <footer className="footer-component">
            <h2>footer</h2>
            <p>© {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;