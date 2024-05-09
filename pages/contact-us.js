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
        {/*<form onSubmit={(e) => this.handleSubmit(e)}>
        <label for="name-input">Your Lovely First Name:</label>
        <br />
        <input id="name-input" type="text"/>
        <br />
        <label for="email-input">Your lovely email:</label>
        <br />
        <input type="email" id="email-input"/>
        <br />
        <label for="comment-textarea">Your Wonderful comment:</label>
        <br />
        <textarea id="comment-textarea" />
        <br />
        <br />
        <button type="submit">Send!</button>
        </form>*/}
        </div>
      {/*</Layout>*/}
      </>
    )
  }
}
export default ContactUs
