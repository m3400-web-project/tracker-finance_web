import React from 'react';
import {Container, Typography, withStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Page from "../component/Page";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {addCategory} from "../store/actionCreator";
import {connect} from 'react-redux';
import Input from "@material-ui/core/Input";

const scheme = [
    "#ff6821",
    "#5339d2",
    "#fff025",
    "#ff6821",
    "#816e81"
]

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.categoryInputRef = React.createRef();
    }

    addCategory = () => {
        this.props.pushCategory({
            name: document.getElementById('c_input').value,
            color: scheme[Math.floor(Math.random() * scheme.length)],
            amount: 2000
        })
        this.forceUpdate();
    }


    render() {
        const {classes, categories} = this.props;
        return (
            <Page className={classes.root}>
                <Container maxWidth="lg">
                    <Box>
                        <Grid container className={classes.input}>
                            <Grid item xs={11}>
                                <Input fullWidth="true" id="c_input"/>
                            </Grid>
                            <Grid item xs={1}>
                                <Button onClick={this.addCategory}>
                                    ДОБАВИТЬ
                                </Button>
                            </Grid>
                        </Grid>
                        <Box>
                        {categories && (
                            <Grid container justify="center" spacing={3}>
                                {categories.map(c => (
                                    <Grid item xs={3} className={classes.category} style={{backgroundColor: c.color}}>
                                        <Typography variant="h3" className={classes.categoryName}>
                                            {(c.name.slice(0,14) + (c.name.length > 14 ? '...' : '')).toUpperCase()}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                        </Box>
                    </Box>
                </Container>
            </Page>
        )
    }
}

const styles = (theme) => ({
    root: {
        backgroundColor: '#000000',
        minHeight: '100%',
        paddingTop: 30
    },
    input: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10
    },
    category: {
        margin: 10,
        borderRadius: 20
    },
    categoryName: {
        fontFamily: "'IBM Plex Sans', san-serif"
    }

});

const mapStateToProps = (store) => {
    return {
        categories: store.categories,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        pushCategory: category => dispatch(addCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Category));