import React from 'react';

const Job = (job, index) => {
	return(
		<div key={index}>
		 <p>{job.jobTitle}</p>
		 <p>{job.jobGiver}</p>
		 <p>{job.location}</p>
		 <p>${job.payment}</p>
		 <p>{job.description}</p>
		</div>
	)
}

export default Job;