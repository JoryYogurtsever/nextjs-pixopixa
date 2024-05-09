import React, { Component } from "react";
//import Layout from "../components/layout"
//import Optin from "../components/optinPopup"

class ProductsPage extends Component {
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
        {/*<Layout>*/}
        <div>
          <h1>Coming Very Soon</h1>
          <p>We are Polishing the last pixels for our big launch!</p>
          <p>
            Because of your early interest in our company we would like to offer
            you a special grand opening promotion
          </p>
          <p>
            Please fill in your email below and we will send you a coupon code
            good for %50 off when we launch!
          </p>
          <p>
            {" "}
            You will also receive notifications about the launch and our newest
            products
          </p>
          <p> All the Best!</p>
          <p>-The PixoPixa Team</p>
          {/*<Optin show={this.state.show} handleClose={this.hideModal}/>*/}
          <button
            type="button"
            className="btn-main-optin"
            onClick={this.showModal}
          >
            Get Your Coupon Code!
          </button>
          <br />
          <br />
        </div>
        {/*</Layout>*/}
      </>
    );
  }
}

export default ProductsPage;
