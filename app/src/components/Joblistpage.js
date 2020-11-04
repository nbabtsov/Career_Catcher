import React, {useState} from 'react';
import './Joblist.css'
import {jobs} from "./JobData";
import KeyWordSearch from "./KeyWordSearch";
import Job from "./Job";



const Joblistpage = () => {
	const [searchQuery, setSearchQuery] = useState("");

	function handleChange(newValue){
		setSearchQuery(newValue);
	}

	return (
		<div>
			<header className='Joblist_header'> Job List</header>
			<KeyWordSearch searchQuery={searchQuery} onChange={handleChange}/>
			<div className='Joblist_div'>
				{jobs.filter((rec) => {
						const targetString = `${rec.jobTitle}`.toLowerCase();
						return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
					}).map((job) => (
						<Job key={job.jobTitle} {...job} />
					))}
			</div>
		</div>
	);
}

export default Joblistpage;