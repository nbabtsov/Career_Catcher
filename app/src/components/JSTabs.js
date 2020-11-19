import React from 'react';
import './CSSTabs.css';
import styled from 'styled-components'

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
    render(){
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

const Text = styled.p`
  font-size: 1.2em;
  color: #9400D3;
  text-align: center;
  margin-right: 500px;
  margin-left: 500px;
`

const JSTabs = props => {
  return(
    <div>
     <Tabs>
       <Tab label="About Us">
         <Text>
         <div>
           <p>In essence, we are a just a small group of Computer Science 319 students
             teamed up to complete a web scraping application. However, the cohesiveness
             and tact this group portrays is not done justice by that simple definition.
             The team is comprised of the brilliant and talented minds of Logan Anderson,
             Ryan Patterson, Nika Babtsov, and Kyle Riggs. Together we have toiled and
             strained to bring you the best job finidng program a school project can give!
           </p>
         </div>
         </Text>
       </Tab>
       <Tab label="Mission Statement">
         <Text>
         <div>
           <p>We have made it our goal to produce an efficient and easy-to-use job
             searching website that users will benefit from immensly. Extreme care has 
             been taken to present you with a sleek and attractive website that will aid 
             you in finding a phenonmenal job fit to your very own parameters. We have
             allowed you, the user, to search for jobs by Title, Employer, Location, or
             even Description! We not only gaurantee you will find a great job fitting your
             ideal wants, but also we gaurantee you will greatly enjoy doing so. So, we thank
             you for your use of our website and we congratulate you on the perfect job you
             are about to find yourself working for!
           </p>
         </div>
         </Text>
       </Tab>
       <Tab label="Contact Us">
         <Text>
         <div>
           <p>Please feel free to contact us with any questions or concerns at 
             shibbir@iastate.edu and we look foward to hearing from you!
           </p>
         </div>
         </Text>
       </Tab>
     </Tabs>
    </div>
  )
}

export default JSTabs;