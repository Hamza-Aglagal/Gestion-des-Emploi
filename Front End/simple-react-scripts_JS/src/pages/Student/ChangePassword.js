import React from 'react'

// import '../../assets/css/Student/ChangePassword.css'



const ChangePassword = () => {





    return (


        <div style={{marginLeft:'7rem'}} className="change-password-container">
            <form action="">
                <h2>Create new password</h2>
                <p className="text-muted">Your new password must be different from previous used passwords.</p>
                <div className="box">
                    <p className="text-muted">Current Password</p>
                    <input type="password" id="currentpass"/>
                </div>
                <div className="box">
                    <p className="text-muted">New Password</p>
                    <input type="password" id="newpass"/>
                </div>
                <div className="box">
                    <p className="text-muted">Confirm Password</p>
                    <input type="password" id="confirmpass"/>
                </div>
                <div className="button">
                    <input type="submit" value="Save" className="btn"/>
                        <a href="index.html" className="text-muted">Cancel</a>
                </div>
                <a href="#"><p>Forget password?</p></a>
            </form>
        </div>


    )
}

export default ChangePassword

