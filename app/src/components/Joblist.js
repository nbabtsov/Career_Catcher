import React from "react";
import Job from "./Job";

class Joblist extends React.Component {
    render(){
        return(
            <div>
                {this.props.jobs.map(Job)}
            </div>
        )
    }
}

export default Joblist;