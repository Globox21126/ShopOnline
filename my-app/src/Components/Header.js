import React from 'react'

function Header() {
    return (
        <section className="header">
            <div className="header_left">
                <h3>Logo</h3>
            </div>
            <div className="header_right">
                <p>Produkty</p>
                <a href="www.google.pl">Koszyk</a>
            </div>
        </section>
    )
}

export default Header
