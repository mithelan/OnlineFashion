import React, { Component } from 'react';
import axios from 'axios'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert,
    Col

} from 'reactstrap';




export class RegisterModal extends Component {

    state = {
        users:[],
       newUserData:{

            name:'',
            email:'',
            password:'',  }

    };
    addUser(){
        axios.post('http://localhost:5000/api/users',this.state.newUserData).then((response)=>{
          let { users } = this.state;
          users.push(response.data);
          alert("User registered sucesfully")
          this.setState({users , newUserModel: false, newUserData:{


            name:'',
            email:'',
            password:''


          }});
       

        })
        // window.location='/login'
      }render() {
        return (

            <div>
           <FormGroup>
                   <Label for="username">UserName</Label>
                               <Input username="username" value={this.state.newUserData.name} onChange={(e) => {
                                 let { newUserData } = this.state;

                                 newUserData.name = e.target.value;

                                 this.setState({ newUserData });
                               }} />
                             </FormGroup>

                              <FormGroup>
                  <Label for="email"> Email</Label>
                              <Input type="email" id="email" value={this.state.newUserData.email} onChange={(e) => {
                                let { newUserData } = this.state;

                                newUserData.email = e.target.value;

                                this.setState({ newUserData });
                              }} />
                            </FormGroup>
                            <FormGroup>
                              <Label for="password"> Password</Label>
                              <Input type="password" id="password" value={this.state.newUserData.password} onChange={(e) => {
                                let { newUserData } = this.state;

                                newUserData.password = e.target.value;

                                this.setState({ newUserData });
                              }} />

                            </FormGroup>
                            {/* <FormGroup>
                              <Label for="user_status"> Status </Label>
                              <Input type="text" id="user_status" defaultValue="active"
                              readOnly onChange={(e) => {
                                let { newUserData } = this.state;

                                newUserData.user_status = e.target.value;

                                this.setState({ newUserData });     </div>
                              }} />

                </FormGroup>   */}
                  <div className="later">
                              <FormGroup>
                                <Col smOffset={1} sm={12}>
             <Button color="primary" align="center" onClick={this.addUser.bind(this)}>Register</Button>{' '}
                                </Col> </FormGroup> </div> </div>
                  );
    }
}
                                    

export default RegisterModal;
