import React from 'react';
import Page from "../component/Page";
import {Grid, Typography, withStyles} from '@material-ui/core'
import ScrollUpButton from "react-scroll-up-button";
import {Chart, Tooltip} from "@devexpress/dx-react-chart-material-ui";
import {EventTracker, HoverState, Palette, PieSeries} from "@devexpress/dx-react-chart";
import Image from '../img/hough_transform.png'
import AOS from 'aos'
import "aos/dist/aos.css";


class HomeView extends React.Component {

    componentDidMount() {
        AOS.init({
            duration: 1000
        });
    }

    render() {
        const {classes} = this.props;

        const data = [
            {argument: "Еда", value: 20000.00},
            {argument: "Жилье", value: 9000.00},
            {argument: "Машина", value: 4500.00},
            {argument: "Интернет", value: 1500},
            {argument: "Пиво", value: 5000},
        ];

        const scheme = [
            "#ff6821",
            "#5339d2",
            "#fff025",
            "#ff6821",
            "#816e81"
        ]

        return (
            <Page className={classes.root} title="Главная">
                <ScrollUpButton/>
                <Grid style={{
                    backgroundImage: `url(${Image})`,
                    height: 500,
                    backgroundSize: 'cover',
                    overflow: 'hidden'
                }}>
                    <Grid container spacing={3} className={classes.alignItemsAndJustifyContent}
                          style={{paddingTop: 70}} data-aos="fade-up" data-aos-anchor-placement="center-center">
                        <Typography color="inherit" className={classes.logo_1}>
                            FINANCE
                        </Typography>
                    </Grid>
                    <Grid container className={classes.alignItemsAndJustifyContent} data-aos="fade-up"
                          data-aos-anchor-placement="center-center">
                        <Typography color="inherit" className={classes.logo_2}>
                            TRACKER
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{height: 300}} className={classes.alignItemsAndJustifyContent} data-aos="flip-left">
                    <Typography variant="h1" style={{color: '#ffffff', fontSize: 50}}>
                        PERSONAL ACCOUNTER
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid container xs={12} justify="flex-end" data-aos="fade-left">
                        <Grid container className={classes.card_right} xs={8}>
                            <Grid item spacing={3} xs={12}>
                                <Typography variant="h3" className={classes.header}>
                                    БУДЬТЕ В КУРСЕ ВАШИХ ТРАТ
                                </Typography>
                            </Grid>
                            <Grid item spacing={3} xs={6}>
                                <Chart data={data}>
                                    <Palette scheme={scheme}/>
                                    <PieSeries valueField="value" argumentField="argument" innerRadius={0.5}/>
                                    {/*<Animation/>*/}
                                    <EventTracker/>
                                    <HoverState/>
                                    <Tooltip/>
                                </Chart>
                            </Grid>
                            <Grid item spacing={3} xs={6} className={classes.vertically}>
                                {
                                    data.map((k) => (
                                        <Grid item spacing={2} xs={12} justify="space-between">
                                            <Typography variant="h3"
                                                        style={{backgroundColor: scheme[data.indexOf(k)], padding: 7}}>
                                                {k.argument}
                                            </Typography>
                                            <Typography variant="h3" align='right'>
                                                {k.value}
                                            </Typography>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.card_left} xs={8} data-aos="fade-right">
                        <Grid item spacing={3} xs={12}>
                            <Typography variant="h3" className={classes.header}>
                                БУДЬТЕ В КУРСЕ ВАШИХ ТРАТ
                            </Typography>
                        </Grid>
                        <Grid item spacing={3} xs={6}>
                            <Chart data={data}>
                                <Palette scheme={scheme}/>
                                <PieSeries valueField="value" argumentField="argument" innerRadius={0.5}/>
                                {/*<Animation/>*/}
                                <EventTracker/>
                                <HoverState/>
                                <Tooltip/>
                            </Chart>
                        </Grid>
                        <Grid item spacing={3} xs={6} className={classes.vertically}>
                            {
                                data.map((k) => (
                                    <Grid item spacing={2} xs={12} justify="space-between">
                                        <Typography variant="h3"
                                                    style={{backgroundColor: scheme[data.indexOf(k)], padding: 7}}>
                                            {k.argument}
                                        </Typography>
                                        <Typography variant="h3" align='right'>
                                            {k.value}
                                        </Typography>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid container xs={12} justify="flex-end" data-aos="fade-left">
                        <Grid container className={classes.card_right} xs={8}>
                            <Grid item spacing={3} xs={12}>
                                <Typography variant="h3" className={classes.header}>
                                    БУДЬТЕ В КУРСЕ ВАШИХ ТРАТ
                                </Typography>
                            </Grid>
                            <Grid item spacing={3} xs={6}>
                                <Chart data={data}>
                                    <Palette scheme={scheme}/>
                                    <PieSeries valueField="value" argumentField="argument" innerRadius={0.5}/>
                                    {/*<Animation/>*/}
                                    <EventTracker/>
                                    <HoverState/>
                                    <Tooltip/>
                                </Chart>
                            </Grid>
                            <Grid item spacing={3} xs={6} className={classes.vertically}>
                                {
                                    data.map((k) => (
                                        <Grid item spacing={2} xs={12} justify="space-between">
                                            <Typography variant="h3"
                                                        style={{backgroundColor: scheme[data.indexOf(k)], padding: 7}}>
                                                {k.argument}
                                            </Typography>
                                            <Typography variant="h3" align='right'>
                                                {k.value}
                                            </Typography>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Page>
        )
    }
}

const styles = (theme) => ({
    root: {
        backgroundColor: '#000000',
        minHeight: '100%',
        paddingBottom: theme.spacing(3)
    },
    alignItemsAndJustifyContent: {
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo_1: {
        fontFamily: "'Alegreya Sans', sans-serif",
        fontSize: 70,
        fontWeight: 'bold',
        color: '#35880b'
    },
    logo_2: {
        fontFamily: "'Alegreya Sans', sans-serif",
        fontSize: 58,
        color: '#98978b'
    },
    header: {
        marginLeft: 50,
        marginBottom: 50,
        fontFamily: "'IBM Plex Sans', san-serif"
    },
    card_right: {
        padding: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 0,
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20
    },
    card_left: {
        padding: 20,
        marginLeft: 0,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
    vertically: {
        display: 'flex',
        flexDirection: 'column'
    }
});

export default withStyles(styles)(HomeView);