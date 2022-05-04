import React,{Component} from "react";
import {Modal,Button, Row,Col,Form, ModalTitle, ModalHeader, ModalBody, FormGroup, FormLabel, FormControl, ModalFooter} from 'react-bootstrap';

export class AddPersonel extends Component{

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'personeli',{
            method:'POST',
            headers:{
                'Accept': 'appliaction/json',
                'Content-Type': 'appliaction/json'
            },

            body:JSON.stringify({
                Personeli_ID: null,
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
                             Shto Punetore
                         </ModalTitle>
                     </ModalHeader>
                     <ModalBody>
                         <Row>
                             <Col sm={6}>
                             <Form onSubmit={this.handleSubmit}>
                                 <FormGroup controlId="Personeli_Emri">
                                     <FormLabel>Emri</FormLabel>
                                     <FormControl type="text" name="Personeli_Emri"
                                     required placeholder="Emri"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_Mbiemri">
                                     <FormLabel>Mbiemri</FormLabel>
                                     <FormControl type="text" name="Personeli_Mbiemri"
                                     required placeholder="Mbiemri"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_DataeLindjes">
                                     <FormLabel>DataeLindjes</FormLabel>
                                     <FormControl type="text" name="Personeli_DataeLindjes"
                                     required placeholder="DataeLindjes"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_Roli">
                                     <FormLabel>Roli</FormLabel>
                                     <FormControl type="text" name="Personeli_Roli"
                                     required placeholder="Roli"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_Username">
                                     <FormLabel>Username</FormLabel>
                                     <FormControl type="text" name="Personeli_Username"
                                     required placeholder="Username"/>
                                 </FormGroup>
                                 <FormGroup controlId="Personeli_Email">
                                     <FormLabel>Email</FormLabel>
                                     <FormControl type="text" name="Personeli_Email"
                                     required placeholder="Email"/>
                                 </FormGroup>
                                 <FormGroup>
                                     <Button variant="primary" type="submit">
                                         Shto 
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