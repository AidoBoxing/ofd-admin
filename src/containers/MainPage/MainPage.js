import React, {useContext} from "react";
import {useNavigate} from "react-router-dom"
import classes from "./MainPage.module.scss"
import Particles from "./Particles"
import registrationImg from "./img/img.svg"
import {FooComponent} from "../../components/Footer/Footer";
import {TransitionContext} from "../../App";

export const MainPage = () => {

    const [load, setLoad] = useContext(TransitionContext)

    const navigate = useNavigate()

    const GnsRegistrationBtn = () => {
        navigate('/gnsRegistration')
        setLoad(1)
    }

    const ZtoRegistrationBtn = () => {
        navigate('/tscRegistration')
    }

    const AdminPanelBtn = () => {
        navigate('/adminPanel')
    }

    return (

        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    <div className={classes.text1}>MegaKassa</div>
                    <div className={classes.text2}>программная <br/></div>
                </div>
                <div className={classes.title}>
                    <div className={classes.text2}>контрольно-кассовая машина</div>
                </div>

                <div id={classes.btns}>
                    <button onClick={GnsRegistrationBtn} className={classes.btn}>Регистрация клиента в ГНС</button>
                    <button onClick={ZtoRegistrationBtn} className={classes.btn}>Регистрация клиента в ЦТО</button>
                    <button onClick={AdminPanelBtn} className={classes.btn}>Панель администратора ЦТО</button>
                </div>

            </div>
            <img src={registrationImg} width="100%" height="100%" alt="registrationImg"/>

            <Particles id="tsparticles"/>

            <FooComponent />

        </div>

    )
}
