import React from 'react';
import Joblist from "./Joblist";
import './Joblist.css'

class Joblistpage extends React.Component {
	constructor(props){
		super(props);
		
		this.state ={
			jobs: [
			{
				"jobTitle" : "Sweeper",
				"jobGiver" : "Profesional Sweepers inc.",
				"location" : "Ames, IA",
				"payment" : 10,
				"description" : "Sweep floors and stuff"
			},

			{
				"jobTitle" : "Busher",
				"jobGiver" : "Better Bushers inc.",
				"location" : "Ames, IA",
				"payment" : 12,
				"description" : "Better Than Sweeping"
			},

			{
				"jobTitle" : "Wiper",
				"jobGiver" : "Window Wiper Co.",
				"location" : "Ames, IA",
				"payment" : 9,
				"description" : "wash and dry, ladder not included"
			},

			{
				"jobTitle" : "Deliverer",
				"jobGiver" : "Quick Deliveries.com",
				"location" : "Ames, IA",
				"payment" : 11,
				"description" : "late fee comes out of you check"
			},
			{
				"jobTitle" : "Temp",
				"jobGiver" : "Temp Co 6",
				"location" : "Ames, IA",
				"payment" : 18,
				"description" : "Temp Desc"
			},
			{
				"jobTitle" : "Temp",
				"jobGiver" : "Temp Co",
				"location" : "Ames, IA",
				"payment" : 14,
				"description" : "Temp Desc 2"
			},
			{
				"jobTitle" : "Temp",
				"jobGiver" : "Temp Co 2",
				"location" : "Ames, IA",
				"payment" : 9,
				"description" : "Temp Desc 3"
			},
			{
				"jobTitle" : "Temp",
				"jobGiver" : "Temp Co 3",
				"location" : "Ames, IA",
				"payment" : 20,
				"description" : "Temp Desc 4"
			},
			{
				"jobTitle" : "Temp",
				"jobGiver" : "Temp Co 4",
				"location" : "Ames, IA",
				"payment" : 17,
				"description" : "Temp Desc 5"
			},

			
			]
		};
	}
	
	render(){
	return(
		<div className='Joblist_div'>
			<header className='Joblist_header'> Job List </header>
			<Joblist jobs={this.state.jobs}/>
		</div>
	);
	}
}

export default Joblistpage;