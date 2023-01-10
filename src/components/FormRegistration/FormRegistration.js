import React, {useContext, useState} from "react";
import './FormRegistration.css';
import {ReceivingFiscalModule} from "../ReceivingFiscalModule/ReceivingFiscalModule";
import Layout from "../../hoc/Layout/Layout";
import {Container, Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {Route, Routes, useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {TransitionContext} from "../../App";


export function FormRegistration() {
    const [load, setLoad] = useContext(TransitionContext)
    const navigate = useNavigate()

    const [innData, setInnData] = useState({
        "address": "",
        "bik": "",
        "checkingAccount": "",
        "firstName": "",
        "lastName": "",
        "activityCode": "",
        "tin": "",
        "legalAddress": "",
        "taxAuthorityDepartment": "",
        "type": "",
        "companyName": "",
        "vatPayer": "",
        "login": "",
        "middleName": "",
        "password": "",
        "userName": "",
        "contractStartDate": "",
        "msisdn": "",
        "okpo": "",
        "registrationCertificateNumber": "",
        "responsiblePerson": "",
        "userId": ""
    });

    // const [validated, setValidated] = useState(false);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };
    // };

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //
    //     setValidated(true);
    //
    // }

    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc3V5dW1iYWV2YUBtZWdhY29tLmtnIiwidHlwZSI6IkNVU1RPTUVSIiwiaWQiOjEzMSwibHBJZCI6MTcwLCJtb2RlbCI6IkNsb3VkQ1IiLCJ2ZXJzaW9uIjoiMSIsInNjb3BlcyI6WyJST0xFX0NVU1RPTUVSIl0sImlzcyI6ImNmcnMiLCJpYXQiOjE2NzIxNDExMzIsImV4cCI6MTY3MjE0MjkzMn0.BuUMVOFUwJNjgCN9wjiL6pED84IofNdypAPeOApVxQezHYXfZOwfAMYzNDf89Ih9Ji1ME93FGVMDRmwN4zTUlw";

    function getDateEdit(date) {
        let dateX = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
        let getMonthX = date.getMonth().toString().length === 1 ? `0${date.getMonth()}` : date.getMonth();
        let getFullYearX = date.getFullYear().toString().length === 1 ? `0${date.getFullYear()}` : date.getFullYear();
        let getDate = `${dateX}.${getMonthX}.${getFullYearX}`
        return getDate

    };

    const getDataByInn = async () => {
        try {
            const tin = document.getElementById('tin').value;
            const url = `http://10.244.10.72:8080/api/v1/client/gnsTinValidation?tin=${tin}`;

            await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "token": `${token}`
                    }
                }
            )
                .then(response => response.json())
                .then(data => setInnData(data))


        } catch (e) {
            console.log(e)
        }

    }

    const submitFormData = (e) => {
        if (e.target.id === 'contractStartDate') {
            let date = Date.parse(e.target.value);
            date = new Date(date)
            let getDate = getDateEdit(date)
            const data = {...innData}
            data[e.target.id] = getDate
            setInnData(data)
        } else {
            const data = {...innData}
            data[e.target.id] = e.target.value
            setInnData(data)
        }


    }

    const sendData = async e => {
        e.preventDefault()
        const REGISTRATION_URL = "http://10.244.10.72:8080/api/v1/client/create";

        const data = {
            "address": innData.address,
            "bik": innData.bik,
            "checkingAccount": innData.checkingAccount,
            "clientGnsRegistrationRequest": {
                "firstName": innData.firstName,
                "lastName": innData.lastName,
                "legalPerson": {
                    "activityCode": innData.activityCode,
                    "companyName": innData.companyName,
                    "tin": innData.tin,
                    "legalAddress": innData.legalAddress,
                    "taxAuthorityDepartment": innData.taxAuthorityDepartment,
                    "type": innData.type,
                    "vatPayer": innData.vatPayer
                },
                "login": innData.login,
                "middleName": innData.middleName,
                "password": innData.password,
                "userName": "test"
            },
            "contractStartDate": innData.contractStartDate,
            "msisdn": innData.msisdn,
            "okpo": innData.okpo,
            "registrationCertificateNumber": innData.registrationCertificateNumber,
            "responsiblePerson": innData.responsiblePerson,
            "userId": "1"
        }
        console.log(data)

        try {
            await fetch(REGISTRATION_URL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    "token": `${token}`
                }
            })

                .then(response => response.json())
                .then(data => setInnData(data))
        } catch (e) {
            console.log(e)
        }
    }

    function handleSubmit(e) {
        sendData(e);
        navigate('/gnsRegistration/fiscalModule');
        setLoad(2);
    }


    return (

        <Container style={{
            backgroundColor: '#FFFFFF',
            border: 'none',
            margin: 0,
            display: 'flex',
            flexGrow: 1
        }}>


            {/*<div className="bloc-tabs">*/}
            {/*    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}></div>*/}
            {/*    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}></div>*/}
            {/*    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}></div>*/}
            {/*</div>*/}

            {/*onSubmit={(e) => sendData(e)}*/}
            <Form id="form-data">
                {/*className={toggleState === 1 ? "content  active-content" : "content"}*/}

                <Row>

                    <h6>Налогоплательщик</h6>
                    <Form.Group as={Col} md="4">
                        <Form.Label>ИНН</Form.Label>
                        <InputGroup>
                            <Form.Control
                                onChange={(e) => submitFormData(e)}
                                type="text"
                                defaultValue={innData.tin}
                                id="tin"

                            />
                            <Button
                                className="innBtn"
                                onClick={getDataByInn}
                            >
                                Запрос из ГНС
                            </Button>
                            <Form.Control.Feedback type="invalid">Пожалуйста, введите ИНН</Form.Control.Feedback>
                        </InputGroup>

                    </Form.Group>
                    {
                        innData.type === 'ENTITY' && (

                            <Form.Group as={Col} md="4">
                                <Form.Label>Код и наименование налог. органа</Form.Label>
                                <Form.Select
                                    onChange={(e) => submitFormData(e)}
                                    id="taxAuthorityDepartment"

                                >
                                    <option>{innData.taxAuthorityDepartment}</option>
                                    {/*<option value="1">015 Аксуйский район</option>*/}
                                    {/*<option value="2">015 Аксуйский район</option>*/}
                                    {/*<option value="3">043 Аксыйский район</option>*/}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Пожалуйста, выберите код нал.
                                    органа</Form.Control.Feedback>
                            </Form.Group>
                        )
                    }

                    {
                        innData.type === 'INDIVIDUAL' && (
                            <Form.Group as={Col} md="4">
                                <Form.Label>Наименование налогоплательщика</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => submitFormData(e)}
                                    id="companyName"
                                    defaultValue={innData.companyName}
                                />
                                <Form.Control.Feedback type="invalid">Пожалуйста, введите наименован.
                                    налогоплат.</Form.Control.Feedback>
                            </Form.Group>
                        )
                    }
                    {
                        innData.type === 'ENTITY' && (
                            <Form.Group as={Col} md="4">
                                <Form.Label>№ свидетельства о гос.регистрации</Form.Label>
                                <Form.Control
                                    onChange={(e) => submitFormData(e)}
                                    id="registrationCertificateNumber"
                                    type="text"
                                />
                                <Form.Control.Feedback type="invalid">Пожалуйста, введите данные
                                    свидетельства</Form.Control.Feedback>
                            </Form.Group>
                        )
                    }

                    {
                        innData.type === 'INDIVIDUAL' && (
                            <Form.Group as={Col} md="4">
                                <Form.Label>Решение ГНС о регистрации / № патента</Form.Label>
                                <Form.Control
                                    onChange={(e) => submitFormData(e)}
                                    id="registrationCertificateNumber"
                                    type="text"
                                />
                                <Form.Control.Feedback type="invalid">Пожалуйста, введите данные
                                    регистр/патента</Form.Control.Feedback>
                            </Form.Group>
                        )
                    }

                </Row>
                <Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                            onChange={(e) => submitFormData(e)}
                            id="lastName"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите фамилию</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>ОКПО</Form.Label>
                        <Form.Control onChange={(e) => submitFormData(e)}
                                      id="okpo"
                                      type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите данные ОКПО</Form.Control.Feedback>
                    </Form.Group>
                    {
                        innData.type === 'ENTITY' && (
                            <Form.Group as={Col} md="4">
                                <Form.Label>ФИО ответственного лица</Form.Label>
                                <Form.Control onChange={(e) => submitFormData(e)}
                                              id="responsiblePerson"
                                              type="text"
                                />
                                <Form.Control.Feedback type="invalid">Пожалуйста, введите ФИО ответственного
                                    лица</Form.Control.Feedback>
                            </Form.Group>
                        )
                    }

                    {
                        innData.type === 'INDIVIDUAL' && (
                            <Form.Group as={Col} md="4">
                                <Form.Label>Фактический адрес</Form.Label>
                                <Form.Control onChange={(e) => submitFormData(e)} id="address"
                                              type="text"
                                />
                                <Form.Control.Feedback type="invalid">Пожалуйста, введите фактический
                                    адрес</Form.Control.Feedback>
                            </Form.Group>
                        )
                    }

                </Row>
                <Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            onChange={(e) => submitFormData(e)}
                            id="firstName"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите имя</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Дата начала договора</Form.Label>
                        <Form.Control onChange={(e) => submitFormData(e)}
                                      id="contractStartDate"
                                      type="date"
                                      required
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите дату начала
                            договора</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Юридический адрес</Form.Label>
                        <Form.Control onChange={(e) => submitFormData(e)}
                                      id="legalAddress"
                                      type="text"
                                      defaultValue={innData.legalAddress}
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите юридический
                            адрес</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control
                            onChange={(e) => submitFormData(e)}
                            id="middleName"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите отчество</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>БИК (необязательно)</Form.Label>
                        <Form.Control onChange={(e) => submitFormData(e)}
                                      id="bik"
                                      type="text"
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Контактный телефон</Form.Label>
                        <Form.Control onChange={(e) => submitFormData(e)}
                                      id="msisdn"
                                      type="text"
                                      defaultValue="996"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите телефон</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Логин (email)</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                onChange={(e) => submitFormData(e)}
                                id="login"
                                type="text"
                            />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста, введите адрес эл. почты
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>Расчетный счет (необязательно)</Form.Label>
                        <Form.Control onChange={(e) => submitFormData(e)}
                                      id="checkingAccount"
                                      type="text"
                        />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control onChange={(e) => submitFormData(e)}
                                      id="password"
                                      type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите корректный
                            пароль</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {
                    innData.type === 'ENTITY' && (
                        <Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Наименование юридического лица</Form.Label>
                                <Form.Control onChange={(e) => submitFormData(e)}
                                              id="companyName"
                                              type="text"
                                              defaultValue={innData.companyName}
                                />
                                <Form.Control.Feedback type="invalid">Пожалуйста, введите наименование юр.
                                    лица</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    )
                }

                {
                    innData.type === 'INDIVIDUAL' && (
                        <Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Код и наименование налог. органа</Form.Label>
                                <Form.Select
                                    onChange={(e) => submitFormData(e)}
                                    id="taxAuthorityDepartment"
                                >
                                    <option>{innData.taxAuthorityDepartment}</option>
                                    {/*<option value="1">015 Аксуйский район</option>*/}
                                    {/*<option value="2">015 Аксуйский район</option>*/}
                                    {/*<option value="3">043 Аксыйский район</option>*/}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Пожалуйста, выберите код нал.
                                    органа</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    )
                }
                <Button
                    variant="success"
                    type="button"
                    //onClick={() => navigate('/gnsRegistration/fiscalModule')}
                    onClick={handleSubmit}
                >Далее</Button>

                {/*<Routes>*/}
                {/*    <Route path="/fiscalModule" element={<ReceivingFiscalModule/>} />*/}
                {/*</Routes>*/}

            </Form>

            {/*<br/><br/>*/}

            {/*<div className={toggleState === 3 ? "content  active-content" : "content"}>*/}

            {/*    <Form>*/}
            {/*        <fieldset>*/}
            {/*            <Form.Group className="mb-3">*/}
            {/*                <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>*/}
            {/*                <Form.Control id="disabledTextInput" placeholder="Disabled input"/>*/}
            {/*            </Form.Group>*/}
            {/*            <Form.Group className="mb-3">*/}
            {/*                <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>*/}
            {/*                <Form.Select id="disabledSelect">*/}
            {/*                    <option>Disabled select</option>*/}
            {/*                </Form.Select>*/}
            {/*            </Form.Group>*/}
            {/*            <Form.Group className="mb-3">*/}
            {/*                <Form.Check*/}
            {/*                    type="checkbox"*/}
            {/*                    id="disabledFieldsetCheck"*/}
            {/*                    label="Can't check this"*/}
            {/*                />*/}
            {/*            </Form.Group>*/}

            {/*            <Button*/}
            {/*                variant="primary"*/}
            {/*                type="button"*/}
            {/*                onClick={() => toggleTab(2)}*/}
            {/*            >*/}
            {/*                Назад*/}
            {/*            </Button>*/}

            {/*            <Button*/}
            {/*                variant="primary"*/}
            {/*                type="button"*/}
            {/*            >*/}
            {/*                Сохранить*/}
            {/*            </Button>*/}
            {/*        </fieldset>*/}
            {/*    </Form>*/}
            {/*</div>*/}

        </Container>

    )
}

