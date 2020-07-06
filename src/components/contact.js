import React,{Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class Contact extends Component{
	render(){
		return(
         <div className="contact-body">
	         <Grid className="contact-grid">
	         <Cell col={6}>
	          <h2>Shubham Khandelwal</h2>
	          <img
                src="https://instagram.fjai2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/39665455_257166374912530_2166561377332756480_n.jpg?_nc_ht=instagram.fjai2-1.fna.fbcdn.net&_nc_ohc=8YASSPKxuTAAX8-T8sP&oh=b86c8c7c187489433da013420bff2241&oe=5F26CF21"
                alt="avatar"
                style={{height:'250px'}}
	          />
	          <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
              Hi everyone!
              I am a student at MNIT Jaipur pursuing my B.Tech
              in Electronics and Communication Engineering(ECE).

	          </p>
	          <h1><i class="fa fa-thumbs-up" aria-hidden="true"></i></h1>
	         </Cell>
	         <Cell col={6}>
                 <h2> Contact Me </h2>
                 <hr/>
                 <div className="contact-list">
                   <List>
					  <ListItem>
					    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
					    <i class="fa fa-phone-square" aria-hidden="true"></i>
					        +91 8740954311
					    </ListItemContent>
					  </ListItem>
					  <ListItem>
					    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
					    <i class="fa fa-instagram" aria-hidden="true"></i>
					        codebuddy1903
					    </ListItemContent>
					  </ListItem>
					  <ListItem>
					    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
					    <i class="fa fa-envelope" aria-hidden="true"></i>
					        codebuddy1903@gmail.com
					    </ListItemContent>
					  </ListItem>
					  <ListItem>
					    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
					    <i class="fa fa-envelope" aria-hidden="true"></i>
					        2018uec1396@mnit.ac.in
					    </ListItemContent>
					  </ListItem>
					</List>
                 </div>
	         </Cell>
	         </Grid>
         </div>
		)
	}
}
export default Contact;