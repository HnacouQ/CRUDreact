import Axios from "axios";
import React, { Component } from "react";

import {withRouter} from 'react-router-dom';

class Add extends Component {
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.histo = this.histo.bind(this);
    }

    histo(){
        this.props.history.push('/products')
    }

    handleAdd() {
        
        const name = document.getElementById('name').value;
        const des = document.getElementById('des').value;
        const img = document.getElementById('img').value;
        const url = 'http://127.0.0.1:8000/api/products';
        const data = {
            name: name,
            description: des,
            image: img,
            
        }
        
        //axios gọi api để thêm mới
        Axios.post(url,data)
            .then(res => {
                this.props.history.push('/products');
            })
            .catch(erro => {
                alert('Có Lỗi...');
            })

            
        
            
    }

    render() {
        return (
            <div className="container col-md-offset-6">
                <label>Name</label>
                <input className="form-control" id="name" />
                <label>Description</label>
                <input className="form-control" id="des" />
                <label>image</label>
                <input className="form-control" id="img" />
                <button
                    className="btn btn-outline-success mt-4"
                    onClick={this.handleAdd}
                >
                    thêm mới
                </button>
            </div>
        );
    }
}

export default withRouter(Add);
