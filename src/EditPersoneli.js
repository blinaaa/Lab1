import React,{Component} from "react";
import {Modal,Button, Row,Col,Form, ModalTitle, ModalHeader, ModalBody, FormGroup, FormLabel, FormControl, ModalFooter} from 'react-bootstrap';

export class EditPersoneli extends Component{

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'personeli',{
            method:'PUT',
            headers:{
                'Accept': 'appliaction/json',
                'Content-Type': 'appliaction/json'
            },

            body:JSON.stringify({
                Personeli_ID: event.target.Personeli_ID.value,
                Personeli_Emri: event.target.Personeli_Emri.value,
                Personeli_Mbiemri: event.target.Personeli_Mbiemri.value,
                Personeli_DataeLindjes: event.target.Personeli_DataeLindjes.value,
                Personeli_Roli: event.target.Personeli_Roli.value,
                Personeli_Username: event.target.Personeli_Username.value,
                Personeli_Email: event.target.Personeli_Emri.value
            })

        })

        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })

    }

    render(){
        return(
            <div className="container">
                <Modal
                 {...this.props}
                 size='lg'
                 aria-labelledby='contained-modal-title-vcenter'
                 centered
                 >
                     <ModalHeader clooseButton>
                         <ModalTitle id='contained-modal-title-vcenter'>
                             Edito Punetorin
                         </ModalTitle>
                     </ModalHeader>
                     <ModalBody>
                         <Row>
                             <Col sm={6}>
                             <Form onSubmit={this.handleSubmit}>
                             <FormGroup controlId="Personeli_ID">
                                     <FormLabel>ID</FormLabel>
                                     <FormControl type="text" name="Personeli_ID"
                                     required disabled defaultValue={this.props.persid} placeholder="ID"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_Emri">
                                     <FormLabel>Emri</FormLabel>
                                     <FormControl type="text" name="Personeli_Emri"
                                     required defaultValue={this.props.persemri}placeholder="Emri"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_Mbiemri">
                                     <FormLabel>Mbiemri</FormLabel>
                                     <FormControl type="text" name="Personeli_Mbiemri"
                                     required defaultValue={this.props.persmbiemri} placeholder="Mbiemri"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_DataeLindjes">
                                     <FormLabel>DataeLindjes</FormLabel>
                                     <FormControl type="text" name="Personeli_DataeLindjes"
                                     required defaultValue={this.props.persdata} placeholder="DataeLindjes"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_Roli">
                                     <FormLabel>Roli</FormLabel>
                                     <FormControl type="text" name="Personeli_Roli"
                                     required defaultValue={this.props.persroli} placeholder="Roli"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_Username">
                                     <FormLabel>Username</FormLabel>
                                     <FormControl type="text" name="Personeli_Username"
                                     required defaultValue={this.props.persusername} placeholder="Username"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_Email">
                                     <FormLabel>Email</FormLabel>
                                     <FormControl type="text" name="Personeli_Email"
                                     required defaultValue={this.props.persemail} placeholder="Email"/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Button variant="primary" type="submit">
                                         Edito Punetorin 
                                     </Button>
                                 </FormGroup>

                             </Form>
                             </Col>
                         </Row>

                     </ModalBody>

                <ModalFooter>
                    <Button variant="danger" onClick={this.props.onHide}>
                        Close
                    </Button>
                </ModalFooter>
                    
                </Modal>
            </div>
        )
    }

}