import React, {Component} from "react";
import classes from './TaxPayerEstablishment.module.css'
import {Container, Form, Row, Col, InputGroup, Button} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormRegistration } from "../../components/FormRegistration/FormRegistration"
import {useNavigate} from "react-router-dom";

export function TaxPayerEstablishment() {
    const navigate = useNavigate();
    const notify = () => toast("Успешно!");

    const submitData = (e) => {
        e.preventDefault()
        success()
        // try {
        //     const token = '';
        //     const login = document.getElementById('login').value;
        //     const password = document.getElementById('password').value;
        //
        //     const url = `http://10.244.10.72:8080/api/v1/client/gnsTinValidation?login=${login}&password=${password}`;
        //
        //     await fetch(url, {
        //             method: 'GET',
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "token": `${token}`
        //             }
        //         }
        //     )
        //         .then(response => {
        //             if (response.ok) {
        //                 notify();
        //                 return response.json();
        //             } else {
        //                 alert("Oops ! Что-то произошло..");
        //             }
        //         })
        //
        //         .then(data => success(data))
        //
        // } catch (e) {
        //     console.log(e)
        // }
    }

    const success = () => {
        navigate('/tscRegistration/formRegistration')
    }

    const forgotPassword = () => {
        console.log("Hello world!")
    }

    return (
        <Container className={classes.Container}>

            <Form id="form-data" style={{width: '25%'}}>
                <Row>

                    <h2>Вход</h2>

                    <Form.Group as={Col} md="12">

                        <Form.Label htmlFor="login">Логин (email)</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="login"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите корректный
                            логин</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row>

                    <Form.Group as={Col} md="12">

                        <Form.Label htmlFor="password">Пароль</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="password"
                            type="password"
                            autoComplete="on"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите корректный
                            пароль</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <div className={classes.ForgotPassword}>
                    <span onClick={forgotPassword}>Забыли пароль ?</span>
                </div>

                <Button as={Col} md="12"
                        className={classes.Button}
                        type="submit"
                        onClick={success}
                >Войти
                </Button>
                <ToastContainer/>
            </Form>

        </Container>
    )
}

