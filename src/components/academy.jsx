import React from "react";
import '../styles/academy.css';
import Academytext from './compText/academy-text';
import Academylesson from './internalComp/academy-lesson';

function Academy(){
    return <div className="academy">
        <div className="content-div">
            <Academytext/>
            <Academylesson name="Opposition" length="50min" progress="4/6"/>
        </div>
    </div>
}

export default Academy; 
