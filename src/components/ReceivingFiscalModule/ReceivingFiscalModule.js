import React, {useState, useEffect, useContext} from "react";
import './ReceivingFiscalModule.module.css';
import styles from './ReceivingFiscalModule.module.css';
import {useNavigate} from "react-router-dom";
import {PageTransition, TransitionContext} from "../../App";

export const ReceivingFiscalModule = () => {

    const [load,setLoad] = useContext(TransitionContext)

    const navigate = useNavigate();

    const IconDown = () => {
        return (
            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.3293 5.87341L11.8643 0.734858C12.0455 0.566499 12.0452 0.293923 11.8634 0.125846C11.6815 -0.0421 11.3869 -0.041666 11.2055 0.126714L5.99998 4.9594L0.794435 0.126541C0.613029 -0.041818 0.318632 -0.0422519 0.136757 0.125673C0.0455856 0.209928 0 0.320308 0 0.430689C0 0.540787 0.0452805 0.650733 0.135819 0.734837L5.67068 5.87341C5.75782 5.9545 5.87642 6 5.99998 6C6.12354 6 6.24199 5.95437 6.3293 5.87341Z"
                    fill="#666E7E"/>
            </svg>
        )
    }

    const IconUp = () => {
        return (
            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.6707 0.126589L0.1357 5.26514C-0.0455414 5.4335 -0.0452367 5.70608 0.136638 5.87415C0.318488 6.0421 0.613073 6.04167 0.794456 5.87329L6.00002 1.0406L11.2056 5.87346C11.387 6.04182 11.6814 6.04225 11.8632 5.87433C11.9544 5.79007 12 5.67969 12 5.56931C12 5.45921 11.9547 5.34927 11.8642 5.26516L6.32932 0.126589C6.24218 0.0455017 6.12358 0 6.00002 0C5.87646 0 5.75801 0.0456319 5.6707 0.126589Z"
                    fill="#666E7E"/>
            </svg>

        )
    }

    const handleSubmit = () => {
        sendModule();
        navigate('/gnsRegistration/fiscalModule/kkmRegistration')
        setLoad(3)
    }

    const sendModule = () => {

    }

    const [data, setData] = useState([]);
    const [sel, setSel] = useState({
        number: "Выберите значение",
        status: null
    });

    const [open, setOpen] = useState(false)

    useEffect( () => {
         getData()
    }, [])

    const getData = async () => {

        // try {
        //     const url = 'http://10.244.10.72:8080/api/v1/cashBox/getListFm';
        //     const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc3V5dW1iYWV2YUBtZWdhY29tLmtnIiwidHlwZSI6IkNVU1RPTUVSIiwiaWQiOjEzMSwibHBJZCI6MTcwLCJtb2RlbCI6IkNsb3VkQ1IiLCJ2ZXJzaW9uIjoiMSIsInNjb3BlcyI6WyJST0xFX0NVU1RPTUVSIl0sImlzcyI6ImNmcnMiLCJpYXQiOjE2NzIwNTE3OTQsImV4cCI6MTY3MjA1MzU5NH0.jjXyxAuMc-J6cJ44vN-f1Py8O2kDwr9Khr_byB_7pzfJhy1Y8xOquV8GMFAoqUd0DenDzXNu7DOOHdg9STX9Sw';
        //
        //     await fetch(url, {
        //             method: 'GET',
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "token": `${token}`
        //             }
        //         }
        //     )
        //         .then(response => response.json())
        //         .then(data => setData(data))
        // } catch (e) {
        //     console.log(e)
        // }

    }

    function handleChange() {
        setOpen(!open)
    }

    function selectedOptionHandler(number, status) {

        setSel({number: number, status: status})
        setOpen(false);
    }

    return (

        <div className={styles.container}>
            <PageTransition />
            <div>
                <label htmlFor="selectFM">Выбрать ФМ</label>
                {/*toggleState === 2 ? "content  active-content" : "content"*/}

                <div onClick={handleChange} className={styles.selectedValue} id="selectFM"> {sel.number}
                    <span
                        className={sel.status === "INUSE" ? styles.spanStatusFalse : sel.status === null ? "" : styles.spanStatusTrue}>
                    {sel.status === "INUSE" ? 'занят' : sel.status === null ? "" : 'не занят'}</span>
                    {open ? <IconUp/> : <IconDown/>}
                </div>
                {
                    open &&
                    <div className={styles.mainBlock}>
                        {
                            data.body &&
                            data.body.map((item, key) => (
                                <div key={key} className={styles.singleOption}
                                     onClick={() => selectedOptionHandler(item.number, item.status)}>
                                    {item.number}
                                    <span
                                        className={item.status === "INUSE" ? styles.spanStatusFalse : styles.spanStatusTrue}> {item.status === "INUSE" ? 'занят' : 'не занят'}</span>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
            <button
                className={styles.button}
                type="button"
                onClick={handleSubmit}
            >
                Получить ФМ
            </button>

        </div>

    )
}


