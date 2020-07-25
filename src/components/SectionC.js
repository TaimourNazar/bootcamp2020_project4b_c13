import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import pie from '../images/pie-chart-2.svg';
import useWebAnimations, {pulse} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        background: "linear-gradient(to right, rgb(23, 25, 48), rgb(23, 25, 48))",
        height: "100%",
    },
    heading:{
        color:'white',
        padding: "10px",
        marginRight: "30px",
        textAlign:'center'
    },
    pie_img: {
        margin: "25px",
        width: "250px",
        marginLeft:'15rem'
    }
  }));

export default function SectionC() {
    const classes = useStyles();
    const { keyframes, timing } = pulse;
    const pieanim=useWebAnimations({
        keyframes,
        timing:{
            ...timing,
            delay: 250,
            duration: 2000,
            iterations: Infinity,
           }
        });

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1 className={classes.heading}>Upcoming Web Design Trends</h1>
                </Grid>
                <Grid item xs={6}>
                    <h3 className={classes.heading}>
                    This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you! 
                    </h3>                    
                </Grid>
                <Grid item xs={6}>
                    <img src={pie} ref={pieanim.ref} alt="tech" className={classes.pie_img} />
                </Grid>
            </Grid>
            
        </div>
    )
}
