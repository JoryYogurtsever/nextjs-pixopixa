import { Component } from "react";
import Optin from './optinPopup'

class Home extends Component {
  state = {
    show: false,
  };
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        {/*<Layout>
          <SEO title="PixoPixa" />*/}
        <h1>Welcome To Pixo Pixa</h1>
        <p>
          A One of a Kind opportunity to give the gift of being a Video Game
          Hero and Seeing Your own story spelled out in retro 8-bit glory.
        </p>
        <h2> What is PixoPixa</h2>
        <p>
          {" "}
          Pixo Pixa started out as a birthday gift for my girlfriend and now has
          transformed into a company like no other. Here at Pixo Pixa we offer
          you the opportunity to take your own story and turn it into a Video
          game staring you. How does it work? Using cutting-edge pixopixa
          technology as well as mad-libesque procuedures, we use the images,
          information and customizations you give us and turn it all into a
          desktop or online game.
        </p>
        {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
             <Image />
           </div>*/}
        <p>
          {" "}
          We're are polishing off our first line of custom games, and getting
          ready for our big launch.
        </p>
        <p>
          Because of your early interest in our game we would like to give you a
          50% off coupon for when our product launches, Just sign up for our
          Newsletter below to get your code and stay informed when our company
          is launched!
        </p>
        <Optin show={this.state.show} handleClose={this.hideModal}/>
        <button type="button" className="btn-main-optin" onClick={this.showModal}>
              Get Your Coupon Code!
          </button>
        <br />
        <br />
        <p>And don't forget to join our Group on Facebook as well!</p>
        <center>
          <a href="https://www.facebook.com/PixoPixaGames/">
            Pixo Pixa - FaceBook
          </a>
        </center>
        <br />
        <br />
        {/*</Layout>*/}
      </>
    );
  }
}

export default Home;
