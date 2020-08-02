import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Left from './left'
class Resume extends Component{
	render(){
		return(
         <div>
           <Grid>
           <Cell col={4}>
             <div style={{textAlign:'center'}}>
             <img
                src="https://instagram.fjai2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/39665455_257166374912530_2166561377332756480_n.jpg?_nc_ht=instagram.fjai2-2.fna.fbcdn.net&_nc_ohc=uDXz4m8uMkUAX94QxUd&oh=2f5ca3d5786b52fbffd4b3c12e971919&oe=5F5250A1"
                alt="avatar"
                style={{height:'200px',paddingTop:'50px'}}
	          />
             </div>
             <h2 style={{paddingTop:'.2em',textAlign:'center',paddingBottom:'1em'}} className="fex">Shubham Khandelwal</h2>
             <h4 style={{color:'grey'}}>Programmer</h4>
             <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
             <h5 className="fex">
             I am a entusiast in competitive programming and compete on codechef and codeforces
             and a full stack devloper with ReactJS as a framework.
             </h5>
             <hr/>
             <Left/>
           </Cell>
           <Cell className="resume-right-col" col={8}>
            <h2 style={{textAlign:'center'}}>Education</h2>
            <Education
             startYear={2014}
             endYear ={2015}
             schoolName="Shekhawati International Academy,Losal"
             schoolDescription="Class-X,CGPA:10"
             />
             <Education
             startYear={2016}
             endYear ={2017}
             schoolName="Shekhawati International Academy,Losal"
             schoolDescription="Class-XII,Percentage:89%"
             />
             <Education
             startYear={2018}
             endYear ="Persent"
             schoolName="Malaviya National Institute of Technology,Jaipur"
             schoolDescription="B.Tech,Current CGPA:8.58"
             />
             <hr style={{borderTop: '3px solid #e22947'}}/>
             <h2 style={{textAlign:'center'}}>Work Experience</h2>
             <Experience
             startYear="2020 Feb"
             endYear ="Persent"
             Role="Submentor at CodeShows"
             RoleDescription="Codeshows is an coding society in Institute"
             />
             <Experience
             startYear="2020 April"
             endYear ="Persent"
             Role="Problem setter at Codechef and Hackerearth"
             RoleDescription="I have been a problem setter at these coding platforms."
             />
             <hr style={{borderTop: '3px solid #e22947'}}/>
             <h2 style={{textAlign:'center'}}>Skills</h2>
             <Skills
              skill="C"
              progress={80}
             />
             <Skills
              skill="C++"
              progress={90}
             />
             <Skills
              skill="HTML"
              progress={90}
             />
             <Skills
              skill="CSS"
              progress={80}
             />
             <Skills
              skill="Javascript"
              progress={70}
             />
             <Skills
              skill="React"
              progress={80}
               />
             <Skills
              skill="Node&Express"
              progress={60}
             />
             <Skills
              skill="SQL"
              progress={50}
             />
           </Cell>
           </Grid>
         </div>
		)
	}
}
export default Resume; 