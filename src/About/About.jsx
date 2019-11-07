import React, {Component} from "react";


class About extends Component{
    render(){
        return(
            <div>
               <h1>About</h1>
               
               <section style={{backgroundColor: 'Black', textAlign: 'center'}}>
                  <a href="https://www.instagram.com/belnapphotography"><img src="https://raw.githubusercontent.com/DeclanBernardin/Belnap-Photography/master/car%20pics/instagram-logo-png.png" style={{height: '100px'}}/> </a>
                  <h1 style={{ fontWeight: '100', color: 'white', margin: '10px', paddingBottom: '10px'}}>belnapphotography@gmail.com</h1>
                </section>
            </div>
        )
    }
}

export default About;