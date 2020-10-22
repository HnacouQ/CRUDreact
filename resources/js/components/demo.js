import { Anchor } from 'antd';
import React,{Component} from 'react';

class Demo extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
        }
    }

    handleSomething(){
        this.setState({
            name: 'Quốc Anh',
        })
    }

    render() { 
        return ( 
            <h1 onClick={this.handleSomething.bind(this)}>
            </h1>
         );
    }
}
 
export default Demo;