import React from 'react'

// import '../../assets/css/Student/SideStudent.css'



const Aside = () => {


    return (

            <aside className='StudentAside'>
                <div className="profile">
                    <div className="top">
                        <div className="profile-photo">
                            <img src="./images/profile-1.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <p>Hey, <b>Alex</b> </p>
                            <small className="text-muted">12102030</small>
                        </div>
                    </div>
                    <div className="about">
                        <h5>Course</h5>
                        <p>BTech. Computer Science & Engineering</p>
                        <h5>DOB</h5>
                        <p>29-Feb-2020</p>
                        <h5>Contact</h5>
                        <p>1234567890</p>
                        <h5>Email</h5>
                        <p>unknown@gmail.com</p>
                        <h5>Address</h5>
                        <p>Ghost town Road, New York, America</p>
                    </div>
                </div>
            </aside>


    )
}

export default Aside