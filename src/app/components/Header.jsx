import React from "react";
import Nav from "./Nav";


function Header () {

    return (
        <header className="header">
            <h1>Nostalgic Video Game Tarot</h1>
            <p> A master of gift-giving, my brother created a custom series of major arcana cards featuring highlights from games we played growing up. They were too good to keep to myself. For a fairly simple tarot reading, <i>select five cards</i> from the deck below and<i> press Start</i>.</p>
            <Nav />
        </header>
    )
}

export default Header;