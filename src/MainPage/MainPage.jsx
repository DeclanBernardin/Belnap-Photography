import React, {Component} from "react";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';

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
                <img src={'https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/belnapphotographylogofinalWrevised2019.png'} />
                </section>
                <section className={classes.root}>
                <GridList cellHeight={600}  className={classes.gridList} cols={2.3}>
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
                <section style={{backgroundColor: 'grey'}}>
                  <a href="https://www.instagram.com/belnapphotography"><img src="https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/instagram-logo-png.png" style={{height: '100px'}}/> </a>
                  <h1>belnapphotography@gmail.com</h1>
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(MainPage);