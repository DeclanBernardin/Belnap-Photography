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
                <GridList cellHeight={600}  className={classes.gridList} cols={2}>
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
            </div>
        )
    }
}

export default withStyles(styles)(MainPage);