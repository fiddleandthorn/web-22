import React, { useState, useRef, useEffect } from "react";

const SubscribeModal = () => {

  const [setVisible, setVisibleState] = useState("");

  function toggleModal() {
    setVisibleState(setVisible === "" ? "open" : "");

    if (setVisible === "open") {
      window.gtag('event', 'Email Popup Open', {
        'event_category': 'Email Popup Open',
        'event_label': 'Email Popup Open'
      });
    }

  }

  useEffect(() => {
    const timer = setTimeout(() => toggleModal (), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (

    <div className={`subscribe-modal ${setVisible}`} id="subscribe-modal">
      <div className="container">
        <div className="half">
          <div className="close-modal" onClick={toggleModal}/>
          <div className="card">
            <div className="card-body">
              <p className="h3">Want to take better care of your houseplants?</p>
              <p className="text-muted">Join thousands of plant parents who get our latest plant care tips directly to their inbox.</p>
              <div id="mc_embed_signup">
                <form action="https://gmail.us17.list-manage.com/subscribe/post?u=075dae5ebd3f1e67e441d373a&amp;id=76b120be04" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                    <input type="email" placeholder="Enter your email" autocomplete="off" value="" name="EMAIL" className="form-control" id="mce-EMAIL" />
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style={{"display":"none"}}></div>
                      <div class="response" id="mce-success-response" style={{"display":"none"}}></div>
                    </div>
                    <div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true">
                      <input type="text" name="b_075dae5ebd3f1e67e441d373a_76b120be04" tabindex="-1" value="" />
                    </div>
                    <div class="clear">
                      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                    </div>
                  </div>
                </form>
              </div>
              <p className="text-muted close-text" aria-label="Close Modal" onClick={toggleModal}>No thanks...</p>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}



export default SubscribeModal
