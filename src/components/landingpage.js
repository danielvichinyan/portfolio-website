import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '../assets/images/prof-pic.jpg';
class Landing extends Component {

    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={profilePic}
                            alt="profilePicture"
                            className="profile-pic"
                        />

                        <div className="banner-text">
                            <h1>Software Developer</h1>

                            <hr />

                            <p>Java | Spring | Maven | AWS | Swing | jUnit | Oracle | HTML/CSS/PHP | Ruby on Rails | Bootstrap | JavaScript | React.js | REST | jQuery | Git | GitHub | Linux</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/danielvichinyan/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/danielvichinyan" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* FreeCodeCamp */}
                                <a href="https://www.facebook.com/profile.php?id=100000774556170" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/* YouTube */}
                                <a href="https://www.instagram.com/danielvichinyan" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram" aria-hidden="true" />
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