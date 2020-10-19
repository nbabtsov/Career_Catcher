import React from 'react';
import './Job.css'

const Job = (job, index) => {
	return(
		<div key={index}>
			<section  className="Job">
		 <p>{job.jobTitle}</p>
		 <p>{job.jobGiver}</p>
		 <p>{job.location}</p>
		 <p>${job.payment}</p>
		 <p>{job.description}</p>
			</section>
			<br/>
		</div>
	)
}

export default Job;