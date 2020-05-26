import React from 'react';
import '../styles/ResourcePage.css';

class ResourcePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {
        return ( 
        <div className="ResourcePage">
            <h1>Resources</h1>
            <h3>Here are a list of SaaS resources that can be helpful in building softwares</h3>
        </div>
        );
    }
}
 
export default ResourcePage;

