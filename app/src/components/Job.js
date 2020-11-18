import React from 'react';
import './Job.css'

const Job = (job, index) => {
	return(
		<div key={index} className="Job_Div">
			<section   className="Job_Section">
		 <p>{job.jobTitle}</p>
		 <p>{job.jobGiver}</p>
		 <p>{job.location}</p>
		 <p>${job.payment}</p>
		 <p>{job.description}</p>
		 <button className={"./Job.css.Save_Job"}>Save Job</button>
			</section>
			<br/>
			
		</div>
	)
}

export default Job;