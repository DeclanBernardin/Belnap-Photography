import React, {Component} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
class Nav extends Component{


    handleHome = () => {
        this.props.history.push('/')
    }

    handleGallery = () => {
        this.props.history.push('/Gallery')
    }

    handleAbout = () => {
        this.props.history.push('/About')
    }

    handleContact = () => {
        this.props.history.push('/Contact')
    }

    render(){
        return(
            <div>
                <Paper square>
                 <Tabs style={{float:'right', marginRight: '20px'}} 
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example">
                    <Tab label="home" onClick={this.handleHome}/>
                    <Tab label="Gallery" onClick={this.handleGallery}/>
                    <Tab label="About" onClick={this.handleAbout}/>
                    <Tab label="Contact" onClick={this.handleContact}/>
                </Tabs>
                <h1 style={{padding: '10px'}}>Belnap Photography</h1> 
                </Paper>
            </div>
        )
    }
}

export default connect()(withRouter(Nav));