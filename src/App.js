import React from 'react';
import {connect} from 'react-redux';
import {setUser} from "./store/actionCreator";
import PropTypes from 'prop-types';
import NavigationBar from "./controller/NavigationBar";
import {ThemeProvider} from "@material-ui/core";
import theme from "./theme";
import GlobalStyles from "./component/GlobalStyles";
import Home from "./controller/Home";
import {Navigate, Route, Routes} from "react-router";
import './App.css'
import Login from "./controller/Login";
import Finance from "./controller/Finance";
import Category from "./controller/Category";
import Billings from "./controller/Billings";

class App extends React.Component {

    setNewUser = (e) => {
        this.props.setUser({name: 'Gachi', email: 'g@g.net'});
    }

    render() {
        const {user} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Navigate to="/"/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/finance">
                        {!user ? (<Navigate to="/login"/>) : (<Finance/>)}
                    </Route>
                    <Route path="/category">
                        {!user ? (<Navigate to="/login"/>) : (<Category/>)}
                    </Route>
                    <Route path="/billings">
                        {!user ? (<Navigate to="/login"/>) : (<Billings/>)}
                    </Route>
                </Routes>
            </ThemeProvider>
        );
    }
}

App.propTypes = {
    user: PropTypes.object,
    setUser: PropTypes.func.isRequired
}

const mapStateToProps = (store) => {
    return {
        user: store.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);