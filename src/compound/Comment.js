import React, {Component} from 'react';
import {Input, Label} from "reactstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import '../App.css'

class Comment extends Component {




    render() {
        return (
            <div className="table-wrapper-scroll-y my-custom-scrollbar">

                <table className="table table-bordered table-striped mb-0">
                    <thead>
                    <tr>

                        <th scope="col">Comments</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td>Mark</td>

                    </tr>

                    </tbody>
                </table>

            </div>

        );
    }
}

export default Comment;
