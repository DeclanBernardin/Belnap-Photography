import React, {Component} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Nav extends Component{
    render(){
        return(
            <div>
                 <Tabs style={{float:'right'}}>
                    <Tab label="home"/>
                    <Tab label="Gallery"/>
                    <Tab label="About"/>
                    <Tab label="Contact"/>
                </Tabs>
                <h1 style={{padding: '10px'}}>Belnap Photography</h1> 
            </div>
        )
    }
}

export default Nav;