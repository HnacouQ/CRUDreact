import React, { Component } from "react";
import Axios from "axios";

// import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            proid: 0,
            dataEdit: {
                id: "",
                name: "",
                desc: "",
                img: ""
            },
            dataView: {
                name: "",
                des: "",
                img: ""
            }
        };
        this.handlUpdate = this.handlUpdate.bind(this);
        this.handleUp = this.handleUp.bind(this);
        this.handleView = this.handleView.bind(this);

        // this.his = this.his.bind(this);
    }

    componentDidMount() {
        const url = "http://127.0.0.1:8000/api/products";
        Axios.get(url).then(res => {
            this.setState({
                products: res.data
            });
        });
    }

    //lấy dữ liệu đổ vào form
    handleUp(id) {
        const url = "http://127.0.0.1:8000/api/products";

        axios.get(url + "/" + id).then(res => {
            this.setState({
                dataEdit: {
                    id: res.data.id,
                    name: res.data.name,
                    desc: res.data.description,
                    img: res.data.image
                }
            });
            // console.log(this.state.dataEdit);
        });
    }

    //update
    handlUpdate(id) {
        const url = "http://127.0.0.1:8000/api/products";
        const name = document.getElementById("name").value;
        const des = document.getElementById("des").value;
        const img = document.getElementById("img").value;

        const data = {
            name: name,
            description: des,
            image: img
        };

        axios.put(url + "/" + id, data).then(res => {
            this.setState({
                dataEdit: {
                    name: name,
                    desc: des,
                    img: img
                }
            });
            this.props.history.push("/products");
        });
    }

    //xem chi tiết
    handleView(id) {
        const url = "http://127.0.0.1:8000/api/products";
        Axios.get(url+'/'+id)
            .then(res => {
               this.setState({
                   dataView: {
                       name: res.data.name,
                       des: res.data.description,
                       img: res.data.image,
                   }
               })
            })
    }

    //xóa
    handleDelete(id) {
        const url = "http://127.0.0.1:8000/api/products";
        Axios.delete(url + "/" + id).then(res => {
            this.setState({
                products: this.state.products.filter(pro => pro.id !== id)
            });
        });
    }
    // his(){
    //     this.props.history.push('/products');
    // }
    render() {
        // let history = useHistory();
        const { dataEdit } = this.state;

        const { dataView } = this.state;

        const { products } = this.state;
        return (
            <div>
                <table className="table table-dark container mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">image</th>
                            <th scope="col">Description</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(pro => {
                            return (
                                <tr key={pro.id}>
                                    <th scope="col">{pro.name}</th>
                                    <th scope="col">
                                        <img
                                            style={{ width: 50 }}
                                            src={pro.image}
                                        />{" "}
                                    </th>
                                    <th scope="col">{pro.description}</th>
                                    <th scope="col">
                                        <a  
                                            onClick={() => {this.handleView(pro.id)}}
                                            className="btn btn-sm btn-outline-warning mr-2"
                                            data-target="#staticBackdrop2"
                                            data-toggle="modal"
                                        >
                                            View
                                        </a>
                                        <a
                                            onClick={() => {
                                                this.handleUp(pro.id);
                                            }}
                                            data-target="#exampleModal"
                                            data-toggle="modal"
                                            className="btn btn-outline-primary btn-sm mr-2 "
                                        >
                                            Edit
                                        </a>
                                        <a
                                            onClick={() => {
                                                this.handleDelete(pro.id);
                                            }}
                                            className="btn btn-outline-danger btn-sm"
                                        >
                                            Delete
                                        </a>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Update
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label>Name</label>
                                <input
                                    className="form-control"
                                    id="name"
                                    defaultValue={dataEdit.name}
                                />
                                <label>Description</label>
                                <input
                                    className="form-control"
                                    defaultValue={dataEdit.desc}
                                    id="des"
                                />
                                <label>image</label>
                                <input
                                    className="form-control"
                                    defaultValue={dataEdit.img}
                                    id="img"
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => {
                                        this.handlUpdate(dataEdit.id);
                                    }}
                                    type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="modal fade"
                        id="staticBackdrop2"
                        data-backdrop="static"
                        data-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                    >
                                        View detail
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <img src={dataView.img} />
                                        </div>
                                        <div className="col--md-4">
                                            <h3>{dataView.name}</h3>
                                            <p>{dataView.des}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        Understood
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(List);
