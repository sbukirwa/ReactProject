import React from "react";

const Register = () => (
    <div className="personForm">
        <h3 className="regForm">Sign Up Form</h3>
        <form>
            <label>First Name: </label>
            <input type="text" className="fname" name="fname" />

            <label>Last Name: </label>
            <input type="text" className="lname" name="lname" />

            <button className="btn-submit">Submit</button>
        </form>
    </div>
);

export default Register