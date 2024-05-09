import React from 'react'
import Head from 'next/head';

const Optin = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <Head>
      {/*<script type="text/javascript">
        function ml_webform_success_14674340() {
          var $ = ml_jQuery || jQuery;
          $('.ml-subscribe-form-14674340 .row-success').show();
          $('.ml-subscribe-form-14674340 .row-form').hide();
        }
      </script>*/}
    <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127" type="text/javascript"></script>
      <script async>
          fetch("https://assets.mailerlite.com/jsonp/940263/forms/120852634459441112/takel")
      </script>
      </Head>
      <section className="modal-main">
       <button onClick={handleClose} className="btn-optin-close">x</button>
    <div id="mlb2-14674340" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-14674340">
      <div className="ml-form-align-center ">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <div className="ml-form-embedContent">    
                <h4>Newsletter</h4>
                <p>Signup for news and special offers, and receive your discount code!</p>
            </div>
            <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/940263/forms/120852634459441112/subscribe" data-code="" method="post" target="_blank">
              <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ">
                    <div className="ml-field-group ml-field-name">
                      <input aria-label="name" type="text" className="form-control" data-inputmask="" name="fields[name]" placeholder="Name" autocomplete="given-name"/>
                    </div>
                  </div><div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email"/>
                    </div>
                  </div>
                
              </div>
              <input type="hidden" name="ml-submit" value="1"/>

              <div className="ml-form-embedSubmit">
                
                  <button type="submit" className="primary">Subscribe</button>
                
                <button disabled="disabled" style={{display: 'none'}} type="button" className="loading">
                  <div className="ml-form-embedSubmitLoad"></div>
                  <span className="sr-only">Loading...</span>
                </button>
              </div>
              <input type="hidden" name="anticsrf" value="true"/>
            </form>
          </div>
          <div className="ml-form-successBody row-success" style={{display: "none"}}>
            <div className="ml-form-successContent">      
                <h4>Thank you!</h4>
                
                  <p>You have successfully joined our subscriber list.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
     </section>
   </div>
 )
}

export default Optin