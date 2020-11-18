import React, {useState} from 'react';
import './Joblist.css'
import {jobs} from "./JobData";
import KeyWordSearch from "./KeyWordSearch";
import Job from "./Job";



const Joblistpage = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [keyword, setkeyword] = useState("jobTitleKey");

	function handleChange(newValue){
		setSearchQuery(newValue);
	}

	function handleKeywordChange(event){
		setkeyword(event.target.value);
		//console.log(event.target.value);
	}

	if(keyword.localeCompare("jobTitleKey") === 0) {
		return (
			<div>
				<header className='Joblist_header'> Job List</header>
				<KeyWordSearch searchQuery={searchQuery} onChange={handleChange} classname='Joblist_seachbar'/>
				<br/>
				<label className='Joblist_select'> Select Keyword To Search:
					<select value={keyword} onChange={handleKeywordChange}>
						<option value="jobTitleKey">Job Title</option>
						<option value="jobGiverKey">Job Giver</option>
						<option value="locationKey">Job Location</option>
						<option value="descriptionKey">Job Description</option>
					</select>
				</label>
				<br/>
				<div className='Joblist_div'>
					{jobs.filter((rec) => {
						const targetString = `${rec.jobTitleKey}`.toLowerCase();
						return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
					}).map((job) => (
						<Job key={job.jobTitleKey} {...job} />
					))}
				</div>
			</div>
		);
	}
	if(keyword.localeCompare("jobGiverKey") === 0) {
		return (
			<div>
				<header className='Joblist_header'> Job List</header>
				<KeyWordSearch searchQuery={searchQuery} onChange={handleChange} classname='Joblist_seachbar'/>
				<br/>
				<label className='Joblist_select'> Select Keyword To Search:
					<select value={keyword} onChange={handleKeywordChange}>
						<option value="jobTitleKey">Job Title</option>
						<option value="jobGiverKey">Job Giver</option>
						<option value="locationKey">Job Location</option>
						<option value="descriptionKey">Job Description</option>
					</select>
				</label>
				<br/>
				<div className='Joblist_div'>
					{jobs.filter((rec) => {
						const targetString = `${rec.jobGiverKey}`.toLowerCase();
						return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
					}).map((job) => (
						<Job key={job.jobGiverKey} {...job} />
					))}
				</div>
			</div>
		);
	}
	if(keyword.localeCompare("locationKey") === 0) {
		return (
			<div>
				<header className='Joblist_header'> Job List</header>
				<KeyWordSearch searchQuery={searchQuery} onChange={handleChange} classname='Joblist_seachbar'/>
				<br/>
				<label className='Joblist_select'> Select Keyword To Search:
					<select value={keyword} onChange={handleKeywordChange}>
						<option value="jobTitleKey">Job Title</option>
						<option value="jobGiverKey">Job Giver</option>
						<option value="locationKey">Job Location</option>
						<option value="descriptionKey">Job Description</option>
					</select>
				</label>
				<br/>
				<div className='Joblist_div'>
					{jobs.filter((rec) => {
						const targetString = `${rec.locationKey}`.toLowerCase();
						return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
					}).map((job) => (
						<Job key={job.locationKey} {...job} />
					))}
				</div>
			</div>
		);
	}
	if(keyword.localeCompare("descriptionKey") === 0) {
		return (
			<div>
				<header className='Joblist_header'> Job List</header>
				<KeyWordSearch searchQuery={searchQuery} onChange={handleChange} classname='Joblist_seachbar'/>
				<br/>
				<label className='Joblist_select'> Select Keyword To Search:
					<select value={keyword} onChange={handleKeywordChange}>
						<option value="jobTitleKey">Job Title</option>
						<option value="jobGiverKey">Job Giver</option>
						<option value="locationKey">Job Location</option>
						<option value="descriptionKey">Job Description</option>
					</select>
				</label>
				<br/>
				<div className='Joblist_div'>
					{jobs.filter((rec) => {
						const targetString = `${rec.descriptionKey}`.toLowerCase();
						return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
					}).map((job) => (
						<Job key={job.descriptionKey} {...job} />
					))}
				</div>
			</div>
		);
	}
	return(
		<div>

		</div>
	)
}

export default Joblistpage;