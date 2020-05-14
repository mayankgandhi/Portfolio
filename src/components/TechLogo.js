import React from 'react';
import '../styles/TechLogo.css';

class TechLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="TechLogo">
                <img src={this.props.imgURL} />
                <p>{this.props.title}</p>
            </div>
         );
    }
}
 
export default TechLogo;