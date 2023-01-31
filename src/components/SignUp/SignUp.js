import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h1>SignUp to Awsomeness</h1>
            <div style={{margin:'20px'}}>
                <button>SignUp with Google</button>
            </div>
            <form>
                <input type="text" placeholder='Enter Your Name'/><br />
                <input type="email" placeholder='Enter Your Email' /><br />
                <input type="password" name="" id=""  placeholder='Enter New Password'/><br /><br />
                <input type="submit" value="SignUp" />
            </form>
        </div>
    );
};

export default SignUp;