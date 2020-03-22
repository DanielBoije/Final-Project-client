import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from "react-bootstrap";


class LomakeTiedot extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values, handleChange, handleDateChange } = this.props;
        return (
            <Form>
            
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Vuoro</Form.Label>
                <Form.Control as="select" custom>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                </Form.Control>
            </Form.Group>
            </Form>
            // <form style={styling}>
                
            //     <h2>Lomake</h2>

            //     <b>Päivämäärä</b> <br></br><input value={values.pvm} 
            //     onChange={handleChange("pvm")} type="date"/><br/><br></br>

            //     <b>Vuoro</b> <br></br><textarea value={this.state.description} onChange={this.descriptionMuuttui}/><br/><br></br>
                
            //     <b>Hours to master</b> <br></br><input style={timeStyle} value={this.state.timetomaster} 
            //     onChange={this.hoursToMasterMuuttui} type="number"/><br></br><br></br>
                
            //     <b>Starting Date</b> <br></br><input value={this.state.startlearningdate} 
            //     onChange={this.startlearningdateMuuttui} type="date"/><br></br><br></br>
                
            //     <b>In progress?</b> <br></br>
            //     <label><input type="radio" name="radio" value="Yes" checked={this.state.inprogress === "Yes"} 
            //     onChange={this.inprogressMuuttui}/>Yes</label>
            //     <label><input type="radio" name="radio" value="No" checked={this.state.inprogress === "No"} 
            //     onChange={this.inprogressMuuttui} />No</label>

            //     <br></br><br></br>
            //     <input style={buttonstyle} value="Add Topic" type="submit" onClick={this.valmis}/> 
            // </form>
            
        );
    }
}

export default LomakeTiedot;
