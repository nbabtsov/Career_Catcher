import React, {useState} from 'react';
import './Joblist.css'
import {jobs} from "./JobData";
import KeyWordSearch from "./KeyWordSearch";
import Job from "./Job";
import styled from 'styled-components'
import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils';

const Joblistpage = (props) => {
	
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
				<Header className='Joblist_header'> Job List</Header>
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
					}).map((job ) => (
						<Job  key={job.jobTitleKey}  description={job.description} jobTitle={job.jobTitle}  jobGiver={job.jobGiver} location={job.location} payment={job.payment} isSaved={false} user={props.username}/>
					))}
				</div>
			</div>
		);
	}
	if(keyword.localeCompare("jobGiverKey") === 0) {
		return (
			<div>
				<Header className='Joblist_header'> Job List</Header>
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
						<Job user={props.username} isSaved={false} key={job.jobGiverKey} {...job} />
					))}
				</div>
			</div>
		);
	}
	if(keyword.localeCompare("locationKey") === 0) {
		return (
			<div>
				<Header className='Joblist_header'> Job List</Header>
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
						<Job user={props.username} key={job.locationKey} {...job} />
					))}
				</div>
			</div>
		);
	}
	if(keyword.localeCompare("descriptionKey") === 0) {
		return (
			<div>
				<Header className='Joblist_header'> Job List</Header>
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
						<Job user={props.username} key={job.descriptionKey} {...job} />
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

const Header = styled.header`
	color: #4169E1;
`

export default Joblistpage;