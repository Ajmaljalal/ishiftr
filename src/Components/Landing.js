import React, { Component } from 'react';
import '../Landing.css';
import { Button } from 'reactstrap';
class Landing extends Component {


    render() {
        return (
            <div>
                <div className="signUp">
                    <Button color="primary">Sign Up</Button>
                    <Button color="primary">Sign In</Button>
                </div>
                <div className="landing-img">
                    <img src = {require('../assets/imgLanding.jpg')}/>
                </div>
                <div className="landing-text">
                    <p>
                        <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </h4>
                    </p>
                </div>

            </div>
        );
    }
}

export default Landing;
