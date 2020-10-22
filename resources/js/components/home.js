import React,{Component} from "react";
import ReactDOM from 'react-dom'





class Home extends Component {

    constructor(props){
        super(props);
        this.inputElement = React.createRef();
        this.handlI.bind(this);
        
        
    }

    handlI(e){
        e.prevenDefault();
        this.inputElement.value = '!@3213';
    }

    render() { 
        return ( 
            <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
            </p>
            <a onClick={this.handleI} className="btn btn-primary btn-lg" role="button">
                Learn more
            </a>
            <input className="form-control mt-4" ref={this.inputElement} />
        </div>
         );
    }
}
 
export default Home;


