import React,{Component} from 'react';
import {Grid,Cell,ProgressBar} from 'react-mdl';
import Codechef from './codechef.jpg';
import Codeforces from './codeforces.png';
class Left extends Component{
	render(){
		return(
			<div> 
			     <h4 style={{fontWeight:'strong',color:'grey',textAlign:'center'}}>Competitive Programming Profiles:</h4>
			     <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>
	                <div style={{textAlign:'center'}}>
		              <a href="https://www.codechef.com/users/dean_student" target="_blank">
		              <img
		                  src={Codechef}
		                  alt="avatar"
		                  style={{height:'100px',paddingRight:'50px'}}
		              />
		              Codechef
		              </a>
		              <h6>
		              Rating:2040,
		              Rank:5*
		              </h6>
                    </div>
		               <hr style={{borderTop:'3px dotted black',width:'100%'}}/>
		            <div style={{textAlign:'center'}}>   
		               <a href="https://codeforces.com/profile/Codebuddy1903" target="_blank">
		              <img
		                  src={Codeforces}
		                  alt="avatar"
		                  style={{height:'100px',paddingRight:'50px'}}
		              />
		              CodeForces
		               </a>
		               <h6>
		               Rating:1796,
                       Rank:Expert
                       </h6>
                       <hr style={{borderTop:'3px dotted black',width:'100%'}}/>
	              </div>
			</div>
	   )
	}
}
export default Left;