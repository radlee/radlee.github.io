import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
    
                <section id="resume">
                    {/* Education
                ----------------------------------------------- */}
                    <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>University of the Western Cape</h3>
                            <p className="info">Computer Science <span>•</span> <em className="date">2011 - 2013</em></p>
                            <p>
                            I studied Computer Science, Mathematics and Statistics at UWC for 3 years learning the basics of Java and Python for two years.
                            The course included theory and practicals which were all done in groups.
                            </p>
                        </div>
                        </div> {/* item end */}
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>Project codeX</h3>
                            <p className="info">Agile Full-Stack JavaScript Developer <span>•</span> <em className="date">February 2016</em></p>
                            <p>
                            In 2016 I attend codeX where I got my first experience of apprenticeship as a full stack developer. I learned JavaScript and NodeJs
                            and Agile methodologies such as daily stand ups, Retrospectives and Demos. I would also apply the skills of Design Thinking in 
                            Hackerthons.
                            </p>
                        </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
                ----------------------------------------------- */}
                    <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>mLab - Southern Africa</h3>
                            <p className="info">Co-Facilitator <span>•</span> <em className="date">January 2017 - August 2017</em></p>
                            <p>
                            After graduating fromcodeX I stared my internship at mLab where I worked as a co-facilitator with Lebohang Madise. My duties
                            were mainly organise mLab events like Hackerthons and conducting classes with the Desmond Tutu Foundation Youth @ Work students.
                            </p>
                        </div>
                        </div> {/* item end */}
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>Ole! Connect</h3>
                            <p className="info">Full-Stack AdonisJs Developer <span>•</span> <em className="date">August 2018 - September 2019</em></p>
                            <p>
                            I was hired by a company that was named Mobimedia but changed the name to Ole! Connect in 2019. I was hired as a full-stack developer 
                            I was responsible for video-portal updates. I worked with mySql database, redis, adonisjs and later on I would learn reactjs and implement 
                            it on the new video-portal.
                            </p>
                        </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
                ----------------------------------------------- */}
                    <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>Besides development, I also like graphic design which I came to noticed that I am good at it since 2012 while I was at UWC. Ever since 
                            I have been prcaticing graphic and audio design. But the core focus when it comes to design for me lies between Photoshop, Gimp
                             and After Effects.
                        </p>
                        <div className="bars">
                        <ul className="skills">
                            <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                            <li><span className="bar-expand illustrator" /><em>After Effects</em></li>
                            <li><span className="bar-expand wordpress" /><em>Gimp</em></li>
                            <li><span className="bar-expand css" /><em>CSS</em></li>
                            <li><span className="bar-expand html5" /><em>HTML5</em></li>
                            <li><span className="bar-expand jquery" /><em>JavaScript</em></li>
                        </ul>
                        </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>
          </React.Fragment>
        );
      }
};