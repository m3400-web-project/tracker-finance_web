import React from 'react';
import {connect} from 'react-redux';
import {AppBar, Grid, Toolbar, Typography, withStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import Logo from "../../component/Logo";
import Button from "@material-ui/core/Button";

class NavigationBar extends React.Component {
    render() {
        const {classes, user} = this.props
        return (
            <AppBar elevation={0} position="sticky">
                <Toolbar className={classes.toolbar}>
                    <Link to="/">
                        <Logo width="25" height="25" fill="#ffffff"/>
                    </Link>
                    <Typography className={classes.name} variant="h3" color="inherit" component={Link} to="/">
                        FINANCE TRACKER
                    </Typography>
                    {user ? (
                        <div className={classes.menu}>
                            <Button color="inherit" component={Link} to="/finance">
                                МОИ ФИНАНСЫ
                            </Button>
                            <Button color="inherit" component={Link} to="/category">
                                КАТЕГОРИИ
                            </Button>
                            <Button color="inherit" component={Link} to="/billings">
                                СЧЕТА
                            </Button>
                        </div>
                    ) : (
                        <div className={classes.menu}/>
                    )}
                    {user ? (
                        <Button color="inherit">ВЫЙТИ</Button>
                    ) : (
                        <Grid className={classes.auth}>
                            <Button color="inherit" component={Link} to="/login">Войти</Button>
                            <Typography>
                                |
                            </Typography>
                            <Button color="inherit" component={Link} to="/signup">Зарегистрироваться</Button>
                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}

const styles = (theme) => ({
    toolbar: {
        height: 64
    },
    menu: {
        flexGrow: 1
    },
    name: {
        fontFamily: "'Alegreya Sans', sans-serif",
        color: 'white',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(10),
    },
    auth: {
        display: 'flex',
        alignItems: 'center'
    }
})

const mapStateToProps = (store) => {
    return {
        user: store.user,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(NavigationBar));