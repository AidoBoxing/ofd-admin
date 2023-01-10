import React, {Component} from "react";
import classes from './TaxPayerRegistration.module.css'
import { FormRegistration } from "../../components/FormRegistration/FormRegistration";
import {PageTransition} from "../../App";


export const TaxPayerRegistration =()=> {

    return (
        <div className={classes.TaxPayerRegistration}>
            <PageTransition />
            <FormRegistration />
        </div>
    )
}

// class TaxPayerRegistration extends Component {
//     render() {
//         return (
//             <div className={classes.TaxPayerRegistration}>
//                 <FormRegistration />
//             </div>
//         )
//     }
// }
//
// export default TaxPayerRegistration