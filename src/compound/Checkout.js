import React, {Component} from 'react';
import axios from 'axios';




class Checkout extends Component {

    constructor(props) {
        super();

        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            address: '',
            phone: '',
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/checkout/add')
            .then(response =>{
                if(response.data.length>0){
                    this.setState({

                        address:'null'

                    })
                }

            })
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const checkout = {
            address: this.state.address,
            phone: this.state.phone,


        };
        console.log(checkout);

        axios.post('http://localhost:5000/checkout/add',checkout)
            .then(res=>console.log(res.data));

        // window.location = '/';
    }

    render() {


        return(
            <div>

                <form onSubmit={this.onSubmit}>
                    <div className='Arrange'>
                        <div className="row">
                            <div className="col-md-5">

                                <br/>

                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Address</label>
                                    <div className="col-sm-10">
                                        <input

                                            type="text"
                                            required
                                            onChange={this.onChangeAddress}
                                            value={this.state.address}
                                            className="form-control"
                                        />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Contact Number</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            required
                                            onChange={this.onChangePhone}
                                            value={this.state.phone}
                                            className="form-control"
                                        />
                                    </div>
                                </div>



                                <div className="form-group row">
                                    <div className="col-sm-10">
                                        <button  type="submit" className="btn btn-dark  float-center ">
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>







            </div>





        )
    }


}


export default Checkout;
