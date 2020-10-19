import React from "react";
import Job from "./Job";
import './Joblist.css'

class Joblist extends React.Component {
    render(){
        return(
            <div className='Joblist_body'>
                {this.props.jobs.map(Job)}
            </div>
        )
    }
}

export default Joblist;