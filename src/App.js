import React, {useContext, createContext, useState, Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./hoc/Layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css'
import {MainPage} from "./containers/MainPage/MainPage";
import {AdminPanel} from "./containers/AdminPanel/AdminPanel";
import {TaxPayerRegistration} from "./containers/TaxPayerRegistration/TaxPayerRegistration";
import {ReceivingFiscalModule} from "./components/ReceivingFiscalModule/ReceivingFiscalModule";
import {KkmRegistration} from "./containers/KkmRegistration/KkmRegistration";
import {TaxPayerEstablishment} from "./containers/TaxPayerEstablishment/TaxPayerEstablishment";

export const TransitionContext = createContext();

export default function App() {
    const [load, setLoad] = useState(1);
    return (
        <TransitionContext.Provider value={[load, setLoad]}>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/adminPanel" element={<AdminPanel />}/>
                    <Route path="/gnsRegistration" element={<TaxPayerRegistration/>}/>
                    <Route path="/gnsRegistration/fiscalModule" element={<ReceivingFiscalModule/>}/>
                    <Route path="/gnsRegistration/fiscalModule/kkmRegistration" element={<KkmRegistration/>}/>
                    <Route path="/tscRegistration" element={<TaxPayerEstablishment/>}/>
                    <Route path="/tscRegistration/formRegistration" element={<TaxPayerRegistration/>}/>
                </Routes>
            </Layout>
        </TransitionContext.Provider>
    )
}


export function PageTransition() {

    // const value = useContext(TransitionContext);
    const [load, setLoad] = useContext(TransitionContext)

    return (
        <>

            {load === 1 ?
                <div>

                </div> :
                load === 2 ?
                    <div>

                    </div> :
                    <div>
                        false
                    </div>
            }

            <h1>{load}</h1>
            {/*<div onClick={()=> setLoad(2)}>смена</div>*/}
        </>
    )
}

