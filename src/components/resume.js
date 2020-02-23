import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '../assets/images/prof-pic.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {

    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={profilePic}
                                alt="profilePicture"
                                className="profile-pic"
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Daniel Vichinyan</h2>
                        <h4 style={{color: 'grey'}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>
                            I am a Computer Science student at the University of Surrey. Currently, I am in my penultimate year of studies.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>25 The Oval</p>
                        <h5>Phone</h5>
                        <p>+447402069122</p>
                        <h5>Email</h5>
                        <p>vichinyan.daniel@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2013}
                            endYear={2018}
                            schoolName="GPAE Geo Milev"
                            schoolDescription="I graduated from high school with an overall of 5.54/6.00."
                        />

                        <Education 
                            startYear={2018}
                            endYear={2022}
                            schoolName="University of Surrey"
                            schoolDescription="I am currently studying at the University of Surrey. My course is BSc Computer Science on a 4-year Sandwich Programme. I am in my penultimate year of studies."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                            startMonth="February"
                            startYear={2019}

                            endMonth="May"
                            endYear={2019}

                            jobName="Assistant"
                            jobDescription="This is a company which provides personnel for various kinds of events and also it provides various kinds of roles. I have worked as bar staff, waiter, cashier, cleaner, runner and I have also done marquee set up. This was my first work experience in the UK. It was really useful for me, because I socialized with various students, worked under pressure. I have experience in various fields and I right now I have the confidence to say that I can do any job that the manager wants me to do. I managed to balance my university timetable and shifts."
                        />

                        <Experience 
                            startMonth="June"
                            startYear={2019}

                            endMonth="July"
                            endYear={2019}

                            jobName="Assistant"
                            jobDescription="I worked as an assistant for the University of Surrey. I worked in the library, and on Stag Hill reception, assisting students and customers, accepting deliveries and managing keys."
                        />

                        <Experience 
                            startMonth="February"
                            startYear={2020}

                            endMonth="Current"

                            jobName="Lab Helper"
                            jobDescription="Currently, I am working as a computer science lab helper. I am assisting first-year students in their studies. I am sharing my knowledge with them and I help them solve problems. We gather feedback from students and then we discuss the feedback with our lecturers. We are having regular team meetings and discuss what we should improve."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="Java"
                            progress={100}
                        />

                        <Skills 
                            skill="JavaScript"
                            progress={80}
                        />

                        <Skills 
                            skill="React"
                            progress={100}
                        />

                        <Skills 
                            skill="C++"
                            progress={70}
                        />

                        <Skills 
                            skill="Python"
                            progress={70}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;