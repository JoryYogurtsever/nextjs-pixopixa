import React, { Component } from "react";
//import Layout from "../components/layout"

class FAQ extends Component {
  render() {
    return (
      <>
        {/*<Layout>*/}
        <div itemscope itemtype="https://schema.org/FAQPage">
          <div
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h3 itemprop="name">Is pixopixa available on mobile devices?</h3>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <div itemprop="text">
                Our website is accessable on mobile, but we do not yet have a
                mobile app. We are working hard to maximize customer experience
                on mobile with our new app to come out soon.
              </div>
            </div>
          </div>
          <div
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h3 itemprop="name">
              Is there a limit to how many games I can send?
            </h3>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <div itemprop="text">
                With our annual membership, you will be able to send and share
                as many games as you like.
              </div>
            </div>
          </div>
          <div
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h3 itemprop="name">Can I customize the storyline of the game?</h3>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <div itemprop="text">
                Our games are designed to be built quickly and customized by
                you. You are able to fill in values that will be inserted into
                the game narrative, as well as using images to customize the
                character.
              </div>
            </div>
          </div>
          <div
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h3 itemprop="name">
              Will the games I share be protected, or available to everyone with
              the url?
            </h3>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <div itemprop="text">
                If you would like to protect the content of a game you have
                shared, then you have the option to protect it with a
                passphrase. This way someone will need not only the correct url,
                but the passphrase as well to access your custom game.
              </div>
            </div>
          </div>
        </div>
        {/*</Layout>*/}
      </>
    );
  }
}
export default FAQ;
