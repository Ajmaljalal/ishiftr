import React, { Component } from 'react';
import '../Landing.css';
import { Button } from 'reactstrap';
class Landing extends Component {


    render() {
        return (
            <div>
                <div className="signUp">
                    <Button classname="signUp" color="primary">Sign Up</Button>
                    <Button classname="signUp" color="primary">Sign In</Button>
                </div>
                <div className="landing-img">
                    <img src = {require('../assets/imgLanding.jpg')}/>
                </div>
                <div className="landing-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.                       
                    </p>
                    <div>
                        <Button className="scheduleButton" color="primary">Schedule Now</Button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Landing;
