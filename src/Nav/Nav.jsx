import React, {Component} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
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
                <div style={{ }}>
                <h1 style={{paddingLeft: '10px', fontWeight: '100', paddingTop: '10px', marginBottom: '0px' }}>B E L N A P</h1>
                <h1 style={{paddingLeft: '10px', fontWeight: '100', paddingBottom: '10px'}}>P H O T O G R A P H Y</h1>
                </div>

                </Paper>
            </div>
        )
    }
}

export default connect()(withRouter(Nav));