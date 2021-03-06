import React from 'react'

// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         backgroundColor: "#eceff1",
// //        padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.primary,
//       },
      
//     symbols: {
//         backgroundColor: '#D12C4D',
//   //      padding: theme.spacing(1),
//         textAlign: 'center',
//         color: '#FFFFFF',
//     }
//   }));

function Button(props) {

    // const classes = useStyles();

    const handleClick = () => {
        props.clickHandler(props.name);
      };
    
    return (
        <>
            <Grid item xs={props.size} onClick={handleClick} >
            <Paper className={props.buttonClass}>
                <Typography  component="h4" variant="h6"   gutterBottom>
                    {props.name}
                </Typography>
            </Paper>
          </Grid>
          
            
        </>
    )
}

export default Button
