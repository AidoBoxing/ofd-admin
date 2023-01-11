import React, {useState, useEffect} from "react";
import classes from './KkmRegistration.module.css'
import {Container, Form, Row, Col, InputGroup, Button} from "react-bootstrap";
import {Map} from '../../components/Map/Map'
import {useJsApiLoader} from "@react-google-maps/api";
import {PageTransition} from "../../App";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
    lat: 51.509865,
    lng: -0.118092
};

const libraries = ['places'];

export function KkmRegistration() {

    const [data, setData] = useState(
        {
            "businessTypeCode": 0,
            "calcItemTypeCode": 0,
            "cashBoxAddress": {
                "city": "",
                "homeNumber": "",
                "id": 0,
                "index": "",
                "lat": "",
                "lon": "",
                "name": "",
                "region": "",
                "street": ""
            },
            "clientId": 0,
            "entrepreneurshipObjectCode": 0,
            "fm": "",
            "sellPlace": {
                "code": "",
                "id": 0,
                "name": ""
            },
            "shopName": "",
            "taxAuthorityDepartmentCode": 0,
            "taxSystemCode": 0,
            "taxSystemId": 0
        })

    const [activity, setActivity] = useState([]);
    const [taxAuthorityDepartments, setTaxAuthorityDepartments] = useState([]);
    const [businessObjectType, setBusinessObjectType] = useState([]);
    const [taxRegime, setTaxRegime] = useState([]);
    const [shopName, setShopName] = useState([]);
    const [calcOptions, setCalcOptions] = useState([]);

    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhc3V5dW1iYWV2YUBtZWdhY29tLmtnIiwidHlwZSI6IkNVU1RPTUVSIiwiaWQiOjEzMSwibHBJZCI6MTcwLCJtb2RlbCI6IkNsb3VkQ1IiLCJ2ZXJzaW9uIjoiMSIsInNjb3BlcyI6WyJST0xFX0NVU1RPTUVSIl0sImlzcyI6ImNmcnMiLCJpYXQiOjE2NzIwNTE3OTQsImV4cCI6MTY3MjA1MzU5NH0.jjXyxAuMc-J6cJ44vN-f1Py8O2kDwr9Khr_byB_7pzfJhy1Y8xOquV8GMFAoqUd0DenDzXNu7DOOHdg9STX9Sw';

    useEffect(() => {
        getKindOfActivity()
        getTaxAuthorityDepartments()
        getBusinessObjectType()
        getSetTaxRegime()
        getShopName()
        getCalcOptions()
    }, [])


    const getKindOfActivity = async () => {

        try {
            const url = 'http://10.244.10.72:8080/api/v1/catalog/getBusinessActivities';

            await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "token": `${token}`
                    }
                }
            )
                .then(response => response.json())
                .then(data => setActivity(data))

        } catch (e) {
            console.log(e)
        }
    }

    const getTaxAuthorityDepartments = async () => {

        try {

            const url = 'http://10.244.10.72:8080/api/v1/catalog/getTaxAuthorityDepartments';

            await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "token": `${token}`
                    }
                }
            )
                .then(response => response.json())
                .then(data => setTaxAuthorityDepartments(data))

        } catch (e) {
            console.log(e)
        }
    }

    const getBusinessObjectType = async () => {

        try {

            const url = 'http://10.244.10.72:8080/api/v1/catalog/getEntrepreneurshipObjects';

            await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "token": `${token}`
                    }
                }
            )
                .then(response => response.json())
                .then(data => setBusinessObjectType(data))

        } catch (e) {
            console.log(e)
        }
    }

    const getSetTaxRegime = async () => {

        try {

            const url = 'http://10.244.10.72:8080/api/v1/catalog/getBusinessActivities';

            await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "token": `${token}`
                    }
                }
            )
                .then(response => response.json())
                .then(data => setTaxRegime(data))

        } catch (e) {
            console.log(e)
        }
    }

    const getShopName = async () => {

        try {
            const url = 'http://10.244.10.72:8080/api/v1/catalog/getBusinessActivities';

            await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "token": `${token}`
                    }
                }
            )
                .then(response => response.json())
                .then(data => setShopName(data))

        } catch (e) {
            console.log(e)
        }
    }

    const getCalcOptions = async () => {

        try {
            const url = 'http://10.244.10.72:8080/api/v1/catalog/getBusinessActivities';

            await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "token": `${token}`
                    }
                }
            )
                .then(response => response.json())
                .then(data => setCalcOptions(data))

        } catch (e) {
            console.log(e)
        }
    }

    const submitData = (e) => {

        e.preventDefault()
        //
        // const data = {...setData}
        // data[e.target.id] = e.target.value
        // setData(data)

    }

    // const { isLoaded } = useJsApiLoader({
    //        id: 'google-map-script',
    //        googleMapsApiKey: API_KEY
    //    })
    //
    //    return (
    //        <div className="Map">
    //            {isLoaded ? <Map center={defaultCenter} /> : <h2>Loading</h2> }
    //        </div>
    //    )


    const MapIcon = () => {
        return (
            <svg width="15" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.00016 0C2.805 0 0.205566 2.59944 0.205566 5.79456C0.205566 9.75981 5.39116 15.581 5.61194 15.8269C5.81932 16.0579 6.18138 16.0575 6.38838 15.8269C6.60916 15.581 11.7948 9.75981 11.7948 5.79456C11.7947 2.59944 9.19529 0 6.00016 0ZM6.00016 8.70997C4.3926 8.70997 3.08478 7.40213 3.08478 5.79456C3.08478 4.187 4.39263 2.87919 6.00016 2.87919C7.60769 2.87919 8.9155 4.18703 8.9155 5.79459C8.9155 7.40216 7.60769 8.70997 6.00016 8.70997Z"
                    fill="white"/>
            </svg>
        )
    }

    return (

        <Container style={{
            margin: 0,
        }}>
            <PageTransition />
            <Form id="form-data">

                <Row>

                    <Form.Group as={Col} md="4">

                        <h6>Объекты предпринимательства</h6>
                    </Form.Group>


                    <Form.Group as={Col} md="4">

                        <h6>Адрес объекта</h6>

                    </Form.Group>


                    <Form.Group as={Col} md="4" className={classes.AddKkm}>
                        <h6>ККМ 1</h6>
                    </Form.Group>

                </Row>


                <Row>

                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="ndsPayer">Плательщик НДС</Form.Label><br/>
                        <input
                            type='checkbox'
                            className={classes['ios8-switch']}
                            id='ndsPayer'
                            onChange={(e) => submitData(e)}/>
                    </Form.Group>


                    <Form.Group as={Col} md="4">

                        <Form.Label htmlFor="selectOnMap">Выбрать на карте</Form.Label>
                        <button
                            className={classes.button}
                            type="button"
                            // onClick={MapSearch}
                        >
                            <MapIcon/> <span style={{marginLeft: '10px'}}>Выбрать на карте</span>
                        </button>
                    </Form.Group>


                    <Form.Group as={Col} md="4">

                        <Form.Label htmlFor="modelKkm">Модель (Версия ПККМ)</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="modelKkm"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите модель ККМ</Form.Control.Feedback>
                    </Form.Group>

                </Row>


                <Row>

                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="kindOfActivity">Вид деятельности</Form.Label>
                        <Form.Select
                            onChange={(e) => submitData(e)}
                            id="kindOfActivity"
                        >
                            {
                                activity &&
                                activity.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))


                            }</Form.Select>
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите вид
                            деятельности</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="index">Индекс</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="index"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите индекс</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row>

                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="taxAuthorityDepartment">Код и наимен. налог. органа</Form.Label>
                        <Form.Select
                            onChange={(e) => submitData(e)}
                            id="taxAuthorityDepartmentCode"
                        >
                            {
                                taxAuthorityDepartments &&
                                taxAuthorityDepartments.map((item, index) => (
                                    <option key={index}>{item.code} {item.name}</option>
                                ))

                            }
                        </Form.Select>

                        <Form.Control.Feedback type="invalid">Пожалуйста, выберите код нал.
                            органа</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="region">Регион</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="region"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, выберите регион</Form.Control.Feedback>
                    </Form.Group>


                </Row>

                <Row>

                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="taxRegime">Налоговый режим</Form.Label>
                        <Form.Select
                            onChange={(e) => submitData(e)}
                            id="taxRegime"
                        >
                            {
                                taxRegime &&
                                taxRegime.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))

                            }
                        </Form.Select>

                        <Form.Control.Feedback type="invalid">Пожалуйста, выберите налог. режим</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="city">Населенный пункт</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="city"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, выберите насел. пункт</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row>

                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="entrepreneurshipObjectCode">Тип объекта предпринимательства</Form.Label>
                        <Form.Select
                            onChange={(e) => submitData(e)}
                            id="entrepreneurshipObjectCode"
                        >
                            {
                                businessObjectType &&
                                businessObjectType.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))

                            }
                        </Form.Select>

                        <Form.Control.Feedback type="invalid">Пожалуйста, выберите объект предп.</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="street">Улица</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="street"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите улицу</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row>

                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="shopName">Наименование торговой точки</Form.Label>
                        <Form.Select
                            onChange={(e) => submitData(e)}
                            id="shopName"
                        >
                            {
                                shopName &&
                                shopName.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))

                            }
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Пожалуйста, выберите наимен. торг.
                            точки</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="houseNumber">Номер дома</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="homeNumber"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите номер дома</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row>

                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="addCalculationOptions">Доп. параметры расчетов</Form.Label>
                        <Form.Select
                            onChange={(e) => submitData(e)}
                            id="addCalculationOptions"
                        >
                            {
                                calcOptions &&
                                calcOptions.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))

                            }
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Пожалуйста, выберите доп. параметры
                            расчетов</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="2">
                        <Form.Label htmlFor="latitude">Широта</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="lat"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите широту</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="2">
                        <Form.Label htmlFor="longitude">Долгота</Form.Label>
                        <Form.Control
                            onChange={(e) => submitData(e)}
                            id="lon"
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите долготу</Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="fm">Фискальный модуль</Form.Label>
                        <Form.Control
                            id="fm"
                            type="text"
                            disabled
                            defaultValue={'12345'}
                        />
                    </Form.Group>
                </Row>

                <Row>

                    <Form.Group as={Col} md="4">
                        {['radio'].map((type) => (
                            <div style={{color: 'black'}} key={type}>
                                <Form.Label>Место расчетов</Form.Label>
                                <Form.Check type={type}>
                                    <Form.Check.Input onChange={(e) => submitData(e)} type={type} isValid name="radio"/>
                                    <Form.Check.Label style={{color: 'black'}}>Стационарная точка</Form.Check.Label>
                                </Form.Check>
                                <Form.Check type={type}>
                                    <Form.Check.Input onChange={(e) => submitData(e)} type={type} isValid name="radio"/>
                                    <Form.Check.Label style={{color: 'black'}}>Выездная торговля</Form.Check.Label>
                                </Form.Check>
                                <Form.Check type={type}>
                                    <Form.Check.Input onChange={(e) => submitData(e)} type={type} isValid name="radio"/>
                                    <Form.Check.Label style={{color: 'black'}}>Онлайн-торговля</Form.Check.Label>
                                </Form.Check>
                            </div>
                        ))}
                    </Form.Group>

                </Row>

            </Form>


            <div className={classes.nextButton}>
                <Button as={Col} md="2"
                        variant="success"
                        type="submit"
                >Далее
                </Button>
            </div>

        </Container>

    )
}

