import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getData} from "./Service"

const useStyles = makeStyles(theme => ({
    formControl: {
      opacity: "65%",
      margin: theme.spacing(1),
      minWidth: 256,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  export default function SimpleSelect(props) {    
    const classes = useStyles();
    const [vuoro, setVuoro] = useState({tyovuoro:[]})

    useEffect(()=>{
      importTopics();
    },[]);

    var importTopics= ()=>{
       getData().then(res => {
           console.log(res.data)
           setVuoro({tyovuoro: res.data})
           });
    }
    
    var hello = vuoro.tyovuoro.map( b => {
      return ( <MenuItem key={b.id} value={b.tyovuoro}>{b.tyovuoro}</MenuItem>) ;
      })

    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="vuoro">Vuoro</InputLabel>
          <Select
            labelId="vuoro"
            id="vuoro"
            onChange={props.handleChange("vuoro")}
            defaultValue={props.values.vuoro}
          >
            {hello}
            {/* <MenuItem value={"A"}>A</MenuItem>
            <MenuItem value={"B"}>B</MenuItem>
            <MenuItem value={"C"}>C</MenuItem> */}
          </Select>
        </FormControl><br></br>
        <FormControl className={classes.formControl}>
          <InputLabel id="tuote">Tuote</InputLabel>
          <Select
            labelId="tuote"
            id="tuote"
            onChange={props.handleChange("tuote")}
            defaultValue={props.values.tuote}
          >
            <MenuItem value={"tuote1"}>tuote 1</MenuItem>
            <MenuItem value={"tuote2"}>tuote 2</MenuItem>
            <MenuItem value={"tuote3"}>tuote 3</MenuItem>
          </Select>
        </FormControl><br></br>
        {/* <FormControl className={classes.formControl}>
          <InputLabel id="häiriö">Häiriö</InputLabel>
          <Select
            labelId="häiriö"
            id="häiriö"
            onChange={props.handleChange("lisääHäiriö")}
            defaultValue={props.values.lisääHäiriö}
          >
            <MenuItem value={"häiriö1"}>häiriö 1</MenuItem>
            <MenuItem value={"häiriö2"}>häiriö 2</MenuItem>
            <MenuItem value={"häiriö3"}>häiriö 3</MenuItem>
          </Select>
        </FormControl> */}
        </div>
  );
}