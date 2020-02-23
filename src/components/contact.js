import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profilePic from '../assets/images/profilePic.jpg';
class Contact extends Component {

    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style={{fontFamily: 'Anton'}}>Daniel Vichinyan</h2>
                        <img 
                            src={profilePic}
                            alt="profilePicture"
                            className="contact-pic"
                        />

                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            I am a Computer Science student at the University of Surrey. Currently, I am in my penultimate year of studies. In my free time, I enjoy developing web applications.
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2 style={{fontFamily: 'Anton'}}>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +447402069122
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        vichinyan.daniel@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-facebook" aria-hidden="true"/>
                                        Daniel Vichinyan
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