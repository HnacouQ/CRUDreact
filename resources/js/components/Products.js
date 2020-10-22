import Axios from "axios";
import { toPlainObject } from "lodash";
import React, { Component } from "react";
import {
    Container,
    Row,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardSubtitle,
    Button,
    Col
} from "reactstrap";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            count: 0
        };
    }

    

    // handleCount() {
    //     setInterval(() => {
    //         this.setState({
    //             count: this.state.count + 1
    //         });
    //     }, 1000);
    // }

    
    componentDidMount() {
        const url = "http://127.0.0.1:8000/api/products";
        Axios.get(url).then(res => {
            this.setState({
                products: res.data
            });
        });
    }
    
    componentWillUnmount() {
      console.log('Quốc Anh');
      
    }

    render() {
        console.log("rendering.....");
        const { products } = this.state;
        const handleDelete = id => {
            const url = 'http://127.0.0.1:8000/api/products';
            Axios.delete(url + '/' + id)
              .then(res => {
                if(res.statusText === 'OK'){
                  this.setState({
                    products: this.state.products.filter(pro => pro.id !== id)

                  });
                }
              })
            // this.setState({
            //     products: this.state.products.filter(pro => pro.id !== id)
            // });
        };

        return (
            <div>
               
                
                <Container>
                    <h2 className="mt-2">Products ({this.state.products.length})</h2>

                    <Row>
                        {products.map(function(pro) {
                            return (
                                <Col key={pro.id} md="3">
                                    <Card className="mt-4">
                                        <CardImg
                                            top
                                            width="100%"
                                            src={pro.image}
                                            alt="Card image cap"
                                        />
                                        <CardBody>
                                            <CardSubtitle>
                                                {pro.name}
                                            </CardSubtitle>
                                            <CardText>
                                                {pro.description}
                                            </CardText>
                                            <Button
                                            size="sm"
                                            color="success"
                                            >Add to Cart</Button>
                                            <Button 
                                            color="primary"
                                            size="sm ml-2">edit</Button>
                                            <Button
                                            size="sm"
                                                onClick={() =>
                                                    handleDelete(pro.id)
                                                }
                                                color="danger ml-2"
                                            >
                                                Delete
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col> 
                            );
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Products;
