import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap"
import TextField from "material-ui/TextField"
import Hairio from "./Hairio"


class LisaaHairio extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Lisää häiriö
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Hairio
                            style={hairio}
                            values={values}
                            handleChange={handleChange}
                        />
                        <TextField
                            style={kesto}
                            type="number"
                            min="0"
                            step="0.5"
                            required
                            hintText="Häiriön kesto (0,5 = 30min)"
                            onChange={handleChange("häiriönKesto")}
                            defaultValue={values.häiriönKesto}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button primary={true} onClick={this.props.onHide}>Tallenna ja Sulje</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const hairio = {
    opacity: "50%"
}

const kesto = {
    marginLeft: "8px"
}

export default LisaaHairio;