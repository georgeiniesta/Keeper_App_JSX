import React from "react";
const currentYear=new Date().getFullYear();

function Footer(){
    return <footer><p>
        Copyright © {currentYear}  George Iniesta
    </p></footer>
}

export default Footer