import React from 'react';
import '../signup.css';
const Signup = () => {
    return (
        <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>Register YourSelf</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" id="name" className="form-control" placeholder="Your Name *"/>
                            </div>
                            <div className="form-group">
                                <input type="number" id="phone" className="form-control" placeholder="Phone Number *"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="password" id="pass" className="form-control" placeholder="Your Password *"/>
                            </div>
                            <div className="form-group">
                                <input type="number" id="no" className="form-control" placeholder="Your Age"/>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btnSubmit">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;