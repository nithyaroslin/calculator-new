import React from 'react'
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    answer: {
      backgroundColor: "#433437",
      padding: theme.spacing(1),
      textAlign: 'right',
      color: '#FFFFFF',
    },
  }));
  

function Display(props) {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} >
            <Paper className={classes.answer}>
                <Typography  component="h4" variant="h4"   gutterBottom>
                {props.value} 
                </Typography>
            </Paper>
          </Grid>
          
            
        </>
    )
}

Display.propTypes = {
    value: PropTypes.string,
  }

export default Display
