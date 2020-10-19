import React from 'react';
import Joblist from "./Joblist";

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
				"description" : "wash and dry, latter not included"
			},

			{
				"jobTitle" : "Deliverer",
				"jobGiver" : "Quick Deliveries.com",
				"location" : "Ames, IA",
				"payment" : 11,
				"description" : "late fee comes out of you check"
			},

			
			]
		};
	}
	
	render(){
	return(
		<div>
			<p> Job List </p>
			<Joblist jobs={this.state.jobs}/>
		</div>
	);
	}
}

export default Joblistpage;