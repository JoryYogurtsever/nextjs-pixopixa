import React, { Component } from 'react'
// import Layout from "../components/layout"

class SignUp extends Component {
    render() {
      return(
        <>
      {/*<Layout>*/}
        <form style={{ minHeight: '600px' }}>
          <div style={{padding: "10% 20%", backgroundColor: "#EAB700", border: "15px ridge #ce1417"}}>
            <label className="signup-label-element" for="name">Name</label><br />
            <input className="signup-input-element" type="text" name="name" />
            <br />
            <br />
            <label className="signup-label-element" for="email">Email</label><br />
            <input className="signup-input-element" type="email" name="email" />
            <br />
            <br />
            <label className="signup-label-element" for="Password">Password</label><br />
            <input className="signup-input-element" type="password" name="password" />
            <br />
            <br />
            <label className="signup-label-element" for="confirm password">Confirm Password</label><br />
            <input className="signup-input-element" type="password" name="confirm password" />
            <br />
            <br />
            <button type="submit" className="btn-sign-up-optin">Sign Up</button>
          </div>
        </form>
      {/*</Layout>*/}
      </>
    )
  }
}
export default SignUp
