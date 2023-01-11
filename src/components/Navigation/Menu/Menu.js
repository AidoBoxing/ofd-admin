import React, {Component} from "react";
import classes from './Menu.module.css';
import {NavLink} from "react-router-dom";
import {BiSearch} from "react-icons/bi";
import {RiHomeLine} from "react-icons/ri"
import {BsFillPersonFill} from "react-icons/bs"
import logo from "../img/logo.png"

const mainLink = [
    {to: '/', label: 'ГлавнаяСтраница', icon: <RiHomeLine/>},
    {to: '/adminPanel', label: 'ПанельАдминистратора', icon: < BiSearch/>}]

const registrationLink = [
    {to: '/gnsRegistration', label: 'РегистрацияГНС', icon: <BsFillPersonFill/>},
    {to: '/tscRegistration', label: 'РегистрацияЦТО', icon: <BsFillPersonFill/>}
]

class Menu extends Component {


    mainLink() {
        return mainLink.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                    >
                        {link.icon}
                        <span className={classes.label}>{link.label}</span>
                    </NavLink>
                </li>
            )


        })
    }

    registrationLink() {
        return registrationLink.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                    >
                        {link.icon}
                        <span className={classes.label}>{link.label}</span>
                    </NavLink>
                </li>
            )


        })
    }

    render() {

        const divEl = document.querySelector('.Menu');
        if (divEl) {
            divEl.addEventListener('mouseenter', () => console.log('Event: mouseenter'));
            divEl.addEventListener('mouseover', () => console.log('Event: mouseover'));
        }


        return (
            <>
                <nav className={classes.Menu}>
                    <div className={classes.logo}>
                        <img src={logo} alt="logo"/>
                        <span className={classes.Megakassa}>MegaKassa</span>
                    </div>
                    <ul>
                        <span className={classes.homeText}>Главная</span>
                        {this.mainLink()}
                        <div>
                            <hr style={{color: "white", paddingBottom: '10px'}}/>
                        </div>
                        <span className={classes.homeText}>Регистр.</span>
                        {this.registrationLink()}
                    </ul>
                </nav>
            </>
        )
    }
}

export default Menu