import React, {Component} from "react";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: '20px',
      marginBottom: '20px',
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    }
  });

class MainPage extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div >
               <section className="logo">
                
                </section>
                <section className={classes.root}>
                <GridList cellHeight={1050}  className={classes.gridList} cols={1.1}>
          <GridListTile >
            <img src={'https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/c300_0001.png'}  />
          </GridListTile>
          <GridListTile >
            <img src={'https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/c300_0001.png'}  />
          </GridListTile>
          <GridListTile >
            <img src={'https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/c300_0001.png'}  />
          </GridListTile>
          <GridListTile >
            <img src={'https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/c300_0001.png'}  />
          </GridListTile>
          <GridListTile >
            <img src={'https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/c300_0001.png'}  />
          </GridListTile>
          <GridListTile >
            <img src={'https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/c300_0001.png'}  />
          </GridListTile>
      </GridList>
                </section >
                <section style={{backgroundColor: 'Black', textAlign: 'center'}}>
                  <a href="https://www.instagram.com/belnapphotography"><img src="https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/instagram-logo-png.png" style={{height: '100px'}}/> </a>
                  <h1 style={{ fontWeight: '100', color: 'white', margin: '10px', paddingBottom: '10px'}}>belnapphotography@gmail.com</h1>
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(MainPage);