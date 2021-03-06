import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

  }));
  

function CalculatorWrapper() {

    const classes = useStyles();

    const [calcState, setCalcState] = useState({
        answer: '0',
        memory: '0',
        activeOperation: "",
        opActive : false,
        isPrevEventOperator : false,
  
    })
    
    const handleClick = buttonName => {
        //console.log(`Button ${buttonName} Clicked`)
        setCalcState((prevState) => ({...calcState , ...calculate(calcState, buttonName) }) );
      };

    return (
        <div className={classes.root}>
          <Container maxWidth="xs">
          
            <Typography  component="h4" variant="h4"  color="textSecondary" gutterBottom>
              Calculator
            </Typography>

            <Grid container spacing={0}>
              <Display value={calcState.answer} />
              <ButtonPanel clickHandler={handleClick} />
            </Grid>
            
         </Container>
        </div>
    )
}

export default CalculatorWrapper
