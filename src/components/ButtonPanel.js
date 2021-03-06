import React from 'react'
import Button from "./Button";
// import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#eceff1",
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
      },
      
    symbols: {
        backgroundColor: '#D12C4D',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: '#FFFFFF',
    }
  }));

function ButtonPanel(props) {

    const classes = useStyles();

    const buttonArr = [{name : "Clr",   class : "symbols",  size:6},
                       {name : "%",     class : "symbols",  size:3},
                       {name : "/",     class : "symbols",  size:3}, 
                       {name : "7",     class : "paper",    size:3}, 
                       {name : "8",     class : "paper",    size:3},
                       {name : "9",     class : "paper",    size:3},
                       {name : "*",     class : "symbols",  size:3},
                       {name : "4",     class : "paper",    size:3},
                       {name : "5",     class : "paper",    size:3},
                       {name : "6",     class : "paper",    size:3},
                       {name : "-",     class : "symbols",  size:3},
                       {name : "1",     class : "paper",    size:3},
                       {name : "2",     class : "paper",    size:3},
                       {name : "3",     class : "paper",    size:3},
                       {name : "+",     class : "symbols",  size:3},
                       {name : "0",     class : "paper",    size:6},
                       {name : ".",     class : "paper",    size:3},
                       {name : "=",     class : "symbols",  size:3},
                    ];

    let buttonList = [];
    let buttonClass;
    
    const handleClick = buttonName => {
        props.clickHandler(buttonName);
      };

    buttonArr.map( (el)  => { 
        buttonClass = classes[`${el.class}`]                
        //buttonList.push(<Grid item xs={el.size} onClick={handleClick} key={el.name} ><Paper className={buttonClass}><Typography  component="h4" variant="h6"   gutterBottom>{el.name}</Typography></Paper></Grid>)
        buttonList.push(<Button key={el.name} name={el.name} size={el.size} buttonClass={buttonClass} clickHandler={handleClick}/>)
    })

    
    return (
        <>
            
            { 
                buttonList.map(el => el)
            }        
        </>
    )
}

export default ButtonPanel
