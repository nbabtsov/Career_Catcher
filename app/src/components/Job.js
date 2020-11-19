import React from 'react';
import './Job.css'
import styled from 'styled-components'

const Job = (job, index) => {
	return(
		<div key={index} className="Job_Div">
			<div className="Job_Container">
			<div className="Job_Section">
				<div className="job_Title"><p>{job.jobTitle}</p></div> 
		<div className="job_Giver"><span class="material-icons">
business_center
</span><span>{job.jobGiver}</span></div> 
		<div className="job_Location"><span class="material-icons">
place
</span><span>{job.location}</span></div>
		<div className="job_Payment"><p>${job.payment}</p></div> 
		<div className="job_Description"><p>{job.description}</p></div>
		 <Button  className="save_Job" type="button"><span>Save Job</span></Button>

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