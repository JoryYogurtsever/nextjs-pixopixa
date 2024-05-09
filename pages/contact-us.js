import React, { Component } from 'react'
// import Layout from "../components/layout"

class ContactUs extends Component {
    render() {
      return(
        <>
      {/*<Layout>*/}
      <div style={{minHeight: "300px"}}>
        <p>We're always happy to help with any questions comments of concerns you might have, hit us up below and we'll get back to you as soon as humanly possible :)</p>
        <a href="mailto:info@pixopixa.com">Send us an email!</a>
        <br />
        <br />
        <a href="https://www.facebook.com/PixoPixaGames/">Or hit us up on Facebook</a>
        <form action="https://formsubmit.co/jory@joryhagen.com" method="POST" style={{padding: "10% 20%", backgroundColor: "#EAB700", border: "15px ridge #ce1417"}}>
        <label for="name-input" className="signup-label-element">Your Lovely First Name:</label>
        <br />
        <br />
        <input className="signup-input-element" id="name-input" type="text" name="name"/>
        <br />
        <br />
        <label for="email-input" className="signup-label-element">Your lovely email:</label>
        <br />
        <br />
        <input className="signup-input-element" type="email" id="email-input" name="email"/>
        <br />
        <br />
        <label for="comment-textarea" className="signup-label-element">Your Wonderful comment:</label>
        <br />
        <textarea className="signup-input-element" id="comment-textarea" name="message" rows="6"/>
        <br />
        <br />
        <button className="btn-sign-up-optin" type="submit">Send!</button>
        </form>
        </div>
      {/*</Layout>*/}
      </>
    )
  }
}
export default ContactUs
