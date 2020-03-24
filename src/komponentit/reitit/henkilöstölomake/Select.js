import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function SimpleSelect(props) {
    const classes = useStyles();
          
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
            <MenuItem value={"A"}>A</MenuItem>
            <MenuItem value={"B"}>B</MenuItem>
            <MenuItem value={"C"}>C</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
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
        </FormControl>
        </div>
  );
}