import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import tech from '../images/tech.jpg';
import network from '../images/Networking.png';
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        backgroundColor: "rgb(23, 25, 48)",
        //background: "linear-gradient(to right, rgb(23, 25, 48), rgb(23, 25, 48))",
        height: "100%",
    },
    heading:{
        marginTop:"60px",
        marginLeft: "20px",
        color:'white',
    },
    tech_img: {
        marginTop: "-5rem",
    },
    network_img: {
        width: "76px",
        marginLeft: "29.5rem"
    }
  }));

export default function SectionA() {
    const classes = useStyles();

    const netanim = useWebAnimations({
        keyframes: {
          transform: "translateY(160px)",
        },
        timing: {
          duration: 2500, 
          iterations: Infinity,
          direction: "alternate",
          easing: "linear"
        },
    });

    const textanim = useWebAnimations({
        keyframes: {
          transform: "translateX(60px)",
        },
        timing: {
          duration: 3500, 
          iterations: Infinity,
          direction: "alternate",
          easing: "linear"
        },
    });

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <h1 className={classes.heading}>Web Animation Api</h1>
                    <h3 className={classes.heading} ref={textanim.ref}>React Animation Demo</h3>
                </Grid>
                <Grid item xs={6}>
                    <img src={network} ref={netanim.ref} className={classes.network_img} alt="network"/>
                    <img src={tech} alt="tech" width="100%" className={classes.tech_img} />
                </Grid>
            </Grid>
            
        </div>
    )
}
