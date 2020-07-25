import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import worker from '../images/gamer.png';
import useWebAnimations, {bounce} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        //background: "linear-gradient(to bottom, white, grey, silver)",
        height: "100%",
    },
    heading:{
        color:'',
        padding: "10px",
        textAlign:'center'
    },
    worker_img: {
        margin: "5px",
    }
  }));

export default function SectionB() {
    const classes = useStyles();
    const { keyframes, timing } = bounce;
    const workeranim=useWebAnimations({
        keyframes,
        timing:{
            ...timing,
            delay: 250,
            duration: 4000,
            iterations: Infinity,
           }
        });

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1 className={classes.heading}>Latest Web Design Trends</h1>
                </Grid>
                <Grid item xs={6}>
                    <img src={worker} ref={workeranim.ref} alt="tech" className={classes.worker_img} />
                </Grid>
                <Grid item xs={6}>
                    <h3 className={classes.heading}>
                    This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you! 
                    </h3>                    
                </Grid>
            </Grid>
            
        </div>
    )
}
