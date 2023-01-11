import React, {Component} from "react";
import classes from './Layout.module.css';
import Header from "../../components/Header/Header";
import Menu from "../../components/Navigation/Menu/Menu";

class Layout extends Component {

    state = {
        hide: false
    }

    render() {

        return (
            <div className={classes.Layout}>

                {/*<Header/>*/}

                {/*<div className={classes.container}>*/}

                <Menu/>

                <main>
                    {this.props.children}
                </main>
                {/*</div>*/}


            </div>
        )
    }
}

export default Layout