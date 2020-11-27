import React from 'react';
import Page from "../component/Page";
import {Container, Typography, withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {addBilling, addCategory} from "../store/actionCreator";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


class Billings extends React.Component {
    render() {
        const {classes, billings} = this.props;
        return (
            <Page title="Счета" className={classes.root}>
                <Container lg>
                    <Box>
                        {billings.map(b => (
                            <Grid item xs={8} className={classes.card}>
                                <Typography variant="h2">
                                    {b.name.toUpperCase()}
                                </Typography>
                                <Typography variant="h3" className={classes.amount}>
                                    {'Текущий счет: '}{b.amount}
                                </Typography>
                                <Typography variant="h3" className={classes.blocked}>
                                    {'Заблокировано: '}{b.blocked}
                                </Typography>
                            </Grid>
                        ))}
                    </Box>
                </Container>
            </Page>
        )
    }
}

const style = () => ({
    root: {
        backgroundColor: '#000000',
        minHeight: '100%',
        paddingTop: 30
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginTop: 30
    },
    amount: {
        color: '#75ff00',
        marginTop: 30,
        marginLeft: 20
    },
    blocked: {
        color: '#ff0000',
        marginLeft: 20
    }
});

const mapStateToProps = (store) => {
    return {
        billings: store.billings,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pushBill: bill => dispatch(addBilling(bill))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Billings));