import React from 'react';
import Page from "../component/Page";
import {Container, Grid, Typography, withStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {EventTracker, HoverState, Palette, PieSeries} from "@devexpress/dx-react-chart";
import {Chart, Tooltip} from "@devexpress/dx-react-chart-material-ui";
import {connect} from 'react-redux';

class Finance extends React.Component {
    render() {
        const {categories, classes} = this.props;
        const schema = [];
        categories.map(c => schema.push(c.color))
        return (
            <Page title="Finance">
                <Container maxWidth="lg">
                    <Box>
                        <Chart data={categories}>
                            <Palette scheme={schema}/>
                            <PieSeries valueField="amount" argumentField="name" innerRadius={0.5}/>
                            {/*<Animation/>*/}
                            <EventTracker/>
                            <HoverState/>
                            <Tooltip/>
                        </Chart>
                        <Grid container spacing={3} className={classes.vertically} justify="center">
                            {
                                categories.map((k) => (
                                    <Grid item xs={6} justify="space-between">
                                        <Typography variant="h3"
                                                    style={{backgroundColor: k.color, padding: 7}}>
                                            {k.name}
                                        </Typography>
                                        <Typography variant="h3" align='right'>
                                            {k.amount}
                                        </Typography>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Container>
            </Page>
        )
    }
}

const style = () => ({
    vertically: {
        // display: 'flex',
        // flexDirection: 'column'
    }
});

const mapStateToProps = (store) => {
    return {
        categories: store.categories,
    }
}

export default connect(mapStateToProps)(withStyles(style)(Finance));