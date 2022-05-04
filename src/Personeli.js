import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddPersonel } from './AddPersonel';
import { EditPersoneli } from './EditPersoneli';



export class Personeli extends Component{

    constructor(props){
        super(props);
        this.state={pers: [], AddPersonelShow: false , EditPersoneliShow: false }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'personeli')
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                pers:data
            });
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }


    render(){
        const{pers,persid,persemri, persmbiemri, persdata, persroli, persusername,persemail}= this.state;
        let AddPersonelShow=()=>this.setState({AddPersonelShow: false});
        let EditPersoneliShow=()=>this.setState({EditPersoneliShow: false});
        return(
            <div>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>
                        <th>Personeli_ID</th>
                        <th>Personeli_Emri</th>
                        <th>Personeli_Mbiemri</th>
                        <th>Personeli_DataeLindjes</th>
                        <th>Personeli_Roli</th>
                        <th>Personeli_Username</th>
                        <th>Personeli_Email</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>

                        {pers.map(pers=>
                        <tr key={pers.Personeli_ID}>
                            <td>{pers.Personeli_Emri}</td>
                            <td>{pers.Personeli_Mbiemri}</td>
                            <td>{pers.Personeli_DataeLindjes}</td>
                            <td>{pers.Personeli_Roli}</td>
                            <td>{pers.Personeli_Username}</td>
                            <td>{pers.Personeli_Email}</td>
                            <ButtonToolbar>
                                <Button className='mr-2' variant='info'
                                onClick={()=>this.setState({
                                    EditPersoneliShow:true,
                                     persid:pers.Personeli_ID, persemri:pers.Personeli_Emri,
                                     persmbiemri:pers.Personeli_Mbiemri, persdata:pers.Personeli_DataeLindjes,
                                     persroli:pers.Personeli_Roli, persusername:pers.Personeli_Username,
                                     persemail:pers.Personeli_Email
                                })}>Edito</Button>

                                <EditPersoneli show={this.state.EditPersoneliShow} 
                                onHide={EditPersoneliClose}
                                persid={persid}
                                persemri={persemri}
                                persmbiemri={persmbiemri}
                                persdata={persdata}
                                persroli={persroli}
                                persusername={persusername}
                                persemail={persemail}
                                />
                            </ButtonToolbar>

                        </tr>
                            
                        
                        )}

                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({AddPersonelShow:true})}>
                        Shto Punonjes
                    </Button>

                    <AddPersonel show={
                        this.state.AddPersonelShow}
                        onHide={AddPersonelClose}/>
                </ButtonToolbar>
            </div>
            
        );
    }
}