import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap"
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
                    values={values}
                    handleChange={handleChange}
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

export default LisaaHairio;