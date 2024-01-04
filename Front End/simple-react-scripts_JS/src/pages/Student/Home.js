import { Box } from '@mui/material'
import React from 'react'

// import '../../assets/css/Student/HomePage.css'

const Home = () => {


    return (

        <div className='HomeStudent'>
            <main >
                <h1>Attendance</h1>
                <div className="subjects swiper">
                    <div className="eg swiper-slide">
                        <span className="material-icons-sharp">architecture</span>
                        <h3>Engineering Graphics</h3>
                        <h2>12/14</h2>
                        <div className="progress">
                            <svg> <circle cx="38" cy="38" r="36"> .</circle> </svg>
                            <div className="number"><p>86%</p></div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>

                    <div className="mth">
                        <span className="material-icons-sharp">functions</span>
                        <h3>Mathematical Engineering</h3>
                        <h2>27/29</h2>
                        <div className="progress">
                            <svg><circle cx="38" cy="38" r="36">.</circle></svg>
                            <div className="number"><p>93%</p></div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>

                    <div className="cs">
                        <span className="material-icons-sharp">computer</span>
                        <h3>Computer Architecture</h3>
                        <h2>27/30</h2>
                        <div className="progress">
                            <svg><circle cx="38" cy="38" r="36">.</circle></svg>
                            <div className="number"><p>81%</p></div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>

                    <div className="cg">
                        <span className="material-icons-sharp">dns</span>
                        <h3>Database Management</h3>
                        <h2>24/25</h2>
                        <div className="progress">
                            <svg><circle cx="38" cy="38" r="36">.</circle></svg>
                            <div className="number"><p>96%</p></div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>


                    <div className="net">
                        <span className="material-icons-sharp">router</span>
                        <h3>Network Security</h3>
                        <h2>25/27</h2>
                        <div className="progress">
                            <svg><circle cx="38" cy="38" r="36">.</circle></svg>
                            <div className="number"><p>92%</p></div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>

                </div>

                <div className="timetable" id="timetable">

                    <div id='title'>
                        <span id="prevDay">&lt;</span>
                        <h2>Today's Timetable</h2>
                        <span id="nextDay">&gt;</span>
                    </div>

                    {/* <div className="closeBtn" >.ttt</div> */}
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Room No.</th>
                                <th>Subject</th>
                                <th>.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10:30</td>
                                <td> Salle 202</td>
                                <td>Merise</td>
                            </tr>
                            <tr>
                                <td>10:30</td>
                                <td> Salle 202</td>
                                <td>Merise</td>
                            </tr>
                            <tr>
                                <td>10:30</td>
                                <td> Salle 202</td>
                                <td>Merise</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="right">
                <div className="announcements">
                    <h2>Announcements</h2>
                    <div className="updates">
                        <div className="message">
                            <p> <b>Academic</b> Summer training internship with Live Projects.</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                        <div className="message">
                            <p> <b>Co-curricular</b> Global internship oportunity by Student organization.</p>
                            <small className="text-muted">10 Minutes Ago</small>
                        </div>
                        <div className="message">
                            <p> <b>Examination</b> Instructions for Mid Term Examination.</p>
                            <small className="text-muted">Yesterday</small>
                        </div>
                    </div>
                </div>

                <div className="leaves">
                    <h2>Teachers on leave</h2>
                    <div className="teacher">
                        <div className="profile-photo"><img src="./images/profile-2.jpeg" alt="" /></div>
                        <div className="info">
                            <h3>The Professor</h3>
                            <small className="text-muted">Full Day</small>
                        </div>
                    </div>
                    <div className="teacher">
                        <div className="profile-photo"><img src="./images/profile-3.jpg" alt="" /></div>
                        <div className="info">
                            <h3>Lisa Manobal</h3>
                            <small className="text-muted">Half Day</small>
                        </div>
                    </div>
                    
                    <div className="teacher">
                        <div className="profile-photo"><img src="./images/profile-4.jpg" alt="" /></div>
                        <div className="info">
                            <h3>Himanshu Jindal</h3>
                            <small className="text-muted">Full Day</small>
                        </div>
                    </div>
                </div>

            </div>

            </main>

          

        </div>
    )
}

export default Home

