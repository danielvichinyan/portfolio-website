import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1
                    </CardTitle>
                    <CardText>
                        A React portfolio website.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #2
                    </CardTitle>
                    <CardText>
                        A React portfolio website.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #3
                    </CardTitle>
                    <CardText>
                        A React portfolio website.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.connectinternetsolutions.com/wp-content/uploads/2016/02/Java.png) center / cover'}}>Java Project #1
                    </CardTitle>
                    <CardText>
                        Java project description.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.connectinternetsolutions.com/wp-content/uploads/2016/02/Java.png) center / cover'}}>Java Project #2
                    </CardTitle>
                    <CardText>
                        Java project description.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.connectinternetsolutions.com/wp-content/uploads/2016/02/Java.png) center / cover'}}>Java Project #3
                    </CardTitle>
                    <CardText>
                        Java project description.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            ) 
        } else if (this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/06/TNW-C-796x398.jpg) center / cover'}}>C++ Project #1
                    </CardTitle>
                    <CardText>
                        C++ project description.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/06/TNW-C-796x398.jpg) center / cover'}}>C++ Project #2
                    </CardTitle>
                    <CardText>
                        C++ project description.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/06/TNW-C-796x398.jpg) center / cover'}}>C++ Project #3
                    </CardTitle>
                    <CardText>
                        C++ project description.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://wallpapercave.com/wp/wp4850110.png) center / cover'}}>Python Project #1
                    </CardTitle>
                    <CardText>
                        Python project description.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://wallpapercave.com/wp/wp4850110.png) center / cover'}}>Python Project #2
                    </CardTitle>
                    <CardText>
                        Python project description.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://wallpapercave.com/wp/wp4850110.png) center / cover'}}>Python Project #3
                    </CardTitle>
                    <CardText>
                        Python project description.
                    </CardText>
                    <CardActions border>
                        <Button coloured>GitHub</Button>
                        <Button coloured>CodePen</Button>
                        <Button coloured>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }
    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>C++</Tab>
                    <Tab>Python</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                         <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;