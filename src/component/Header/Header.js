import React from "react";
import classes from "./Header.module.css";
import {BsArrowUpRight} from "react-icons/bs";
import {MdLanguage} from"react-icons/md";


const Header=()=>{
    return(
        <div className={classes.container}>
        <div className={classes["box-logo"]}>
            <h4>My Coin</h4>
        </div>
        <div className={classes.boxList}>
            <ul >
                <li>Product</li>
                <li>Pricing</li>
                <li>Developer</li>
            </ul>
        </div>

        <div className={classes.boxSigin}>
            <button>{
                <BsArrowUpRight className={classes.signinIcon}/>}
            <p>Signin</p>
            </button>
            <div className={classes.cash}>
                {<MdLanguage className={classes.icon}/>}
                <p>USA</p>
            </div>
        </div>

        </div>
    )

}

export default Header;
