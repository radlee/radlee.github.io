import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="https://avatars3.githubusercontent.com/u/17250994?s=460&u=72eba231471f99059beac9d163f771aa066e6b96&v=4" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I am a Nodejs Full-Stack Developer and ReactJs online Student at Udemy seeking fulltime or partime employment to further
                improve my skills in JavaScript and React Development. 
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Mafanga Lolito</span><br />
                    <span>1A Assegaai Street Delft South 7100<br />
                      Cape Town, WC SA
                    </span><br />
                    <span>0641073592</span><br />
                    <span>prof.lolito@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="/files/myfile.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
};