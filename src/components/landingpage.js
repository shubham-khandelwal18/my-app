import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Landing extends Component{
	render(){
		return(
         <div style={{width:'100%',margin:'auto'}}>
          <Grid className="landing-grid">
           <Cell col={12}>
           <img
           src="https://instagram.fjai2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/39665455_257166374912530_2166561377332756480_n.jpg?_nc_ht=instagram.fjai2-1.fna.fbcdn.net&_nc_ohc=8YASSPKxuTAAX8-T8sP&oh=b86c8c7c187489433da013420bff2241&oe=5F26CF21"
           alt="avatar"
           className="avatar-img"
            />
            <div className="banner-text">
            <h1>Full Stack Web Developer </h1>
            <hr/>
            <p>HTML |CSS | BootStrap | Javascript | React | Postgree SQL | NodeJS | Express</p>
            <div className="social-links">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/shubham-khandelwal-7a8a63195/" rel="noopener norefferer" target="_blank">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            {/* Github */}
            <a href="https://github.com/shubham-khandelwal18" rel="noopener norefferer" target="_blank">
            <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/codebuddy1903/" rel="noopener norefferer" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/shubhamkhandelwal.losal/" rel="noopener norefferer" target="_blank">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            </div>
            </div> 
           </Cell>
          </Grid> 
         </div>
		)
	}
}
export default Landing;