import React from 'react';
import './CSSTabs.css';

const JSTabs = props => {
    return(
      <div>
       <Tabs>
         <Tab label="About Us">
           <div>
             <p>We just tryna get that A honestly</p>
           </div>
         </Tab>
         <Tab label="Mission Statement">
           <div>
             <p>Tab 2 content</p>
           </div>
         </Tab>
         <Tab label="Contact Us">
           <div>
             <p>Tab 3 content</p>
           </div>
         </Tab>
         <Tab label="Tab 4">
           <div>
             <p>Tab 4 content</p>
           </div>
         </Tab>
         <Tab label="Tab 5">
           <div>
             <p>Tab 5 content</p>
           </div>
         </Tab>
       </Tabs>
      </div>
      
    )
  }

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

export default JSTabs;