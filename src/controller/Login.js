import React from 'react';
import Page from "../component/Page";
import {Container, Typography, withStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Link as RouterLink} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {connect} from "react-redux";
import {setUser} from "../store/actionCreator";
import {Navigate} from "react-router";

class Login extends React.Component {

    login(email) {
        this.props.loginUser({
            name: 'User',
            email: email
        });
    }

    render() {
        const {classes, user} = this.props;

        return !user ? (<Page className={classes.root} title="Вход">
                        <Box display="flex" flexDirection="column" height="100%" justifyContent="center">
                            <Container maxWidth="sm" className={classes.form}>
                                <Formik initialValues={{
                                    email: '',
                                    password: ''
                                }} validationSchema={Yup.object().shape({
                                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                    password: Yup.string().max(255).required('Password is required')
                                })} onSubmit={(values) => {
                                    this.login(values.email);
                                }}
                                >
                                    {({
                                          errors,
                                          handleBlur,
                                          handleChange,
                                          handleSubmit,
                                          isSubmitting,
                                          touched,
                                          values
                                      }) => (
                                        <form onSubmit={handleSubmit}>
                                            <Box mb={3}>
                                                <Typography color="textPrimary" variant="h2" className={classes.font}>
                                                    ВОЙТИ
                                                </Typography>
                                            </Box>
                                            <TextField
                                                error={Boolean(touched.email && errors.email)}
                                                fullWidth
                                                helperText={touched.email && errors.email}
                                                label="Почта"
                                                margin="normal"
                                                name="email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="email"
                                                value={values.email}
                                                variant="outlined"
                                            />
                                            <TextField
                                                error={Boolean(touched.password && errors.password)}
                                                fullWidth
                                                helperText={touched.password && errors.password}
                                                label="Пароль"
                                                margin="normal"
                                                name="password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="password"
                                                value={values.password}
                                                variant="outlined"
                                            />
                                            <Box my={2}>
                                                <Button
                                                    color="primary"
                                                    disabled={isSubmitting}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                >
                                                    Sign in now
                                                </Button>
                                            </Box>
                                            <Typography color="textSecondary" variant="body1">
                                                Нет аккаунта?{' '}
                                                <Link component={RouterLink} to="/register" variant="h6">
                                                    ЗАРЕГИСТРИРУЙТЕСЬ
                                                </Link>
                                            </Typography>
                                        </form>
                                    )}
                                </Formik>
                            </Container>
                        </Box>
            </Page>) : (<Navigate to="/"/>);
    }
}

const styles = (theme) => ({
    root: {
        backgroundColor: '#000000',
        minHeight: '100%',
        paddingBottom: theme.spacing(3)
    },
    form: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 100,
        padding: 20
    },
    alignItemsAndJustifyContent: {
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    font: {
        fontFamily: "'IBM Plex Sans', san-serif",
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

const mapStateToProps = (store) => {
    return {
        user: store.user,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(setUser(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login))