import React from 'react';
import './Job.css'
import styled from 'styled-components'
import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils';

const Job = (props) => {
	const jobTitle = props.jobTitle;
	const location = props.location;
	const payment = props.payment;
	const description = props.description;
	const jobGiver = props.jobGiver;
	const user = props.user
	
	if(props.isSaved != null) var saved = props.isSaved;
	else var saved = false;
	 async function saveJob() {
		 console.log(user);
		if(user !=undefined && !saved) {
			let saveRequest = {"username": user , "jobID": 1}
			let response = await fetch('http://localhost:9000/users/addSavedJob', {method: 'POST', body: JSON.stringify(saveRequest), headers: {'content-type': 'application/json'}});
			if(response.ok) saved = true;
		}

	  }
	return(
		<div key={props.index} className="Job_Div">
			<div className="Job_Container">
			<div className="Job_Section">
	<div className="job_Title"><p>{jobTitle} </p></div> 
		<div className="job_Giver"><span className="material-icons">
business_center
</span><span>{jobGiver}</span></div> 
		<div className="job_Location"><span className="material-icons">
place
</span><span>{location}</span></div>
		<div className="job_Payment"><p>${payment}</p></div> 
		<div className="job_Description"><p>{description}</p></div>
		 <Button  className="save_Job" type="button" onClick={()=>saveJob()}><span>Save Job</span></Button>

				</div>
		
			</div>
			<br/>
			
		</div>
	)
}
const Button = styled.button`
  display: block;
  width: 60%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
	margin-left:20%;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -2px);
  }
`


export default Job;