import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <section className="container candid-faq-conatainer">
        <p>
          To know more about the founders we invite you to read our Candid FAQ,
          where we discuss all of the important stuff!
        </p>
        <button className="common-btn">
          <div className="btn-style">Candid Faq</div>
        </button>
      </section>
      <section className="container questions-container">
        <div className="accordion acordion-container" id="questionAccordion">
          <div className="accordion-item custom-accordion-item">
            <h2
              className="accordion-header accordion-header-bg"
              id="headingOne"
            >
              <button
                className="accordion-button accordion-header-bg"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Q. How did this project come to be?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#questionAccordion"
            >
              <div className="accordion-body">
                <p>
                  A. @Bdz was looking for a good local tattoo artist and a
                  friend recommended @PaleBlueDot - the rest is history!
                  Conversation quickly moved to NFTs as both had a keen interest
                  and during the second tattoo session conversations turned
                  towards what their own project might look like.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item custom-accordion-item ">
            <h2
              className="accordion-header accordion-header-bg "
              id="headingTwo"
            >
              <button
                className="accordion-button accordion-header-bg collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Q. What will you do with the money raised at mint?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#questionAccordion"
            >
              <div className="accordion-body">
                <p>
                  A. At the time of writing this statement; ETH currently sits
                  at around $2500. Should we sell all 10,000 Heroes at 0.075ETH
                  each then revenue from primary sales would be around $1.875MM.
                  We will be splitting these funds as follows:
                </p>
                <div className="mint-text">
                  <p>
                    - 50% to remain in the project for development. Without
                    revealing too much of the roadmap at this stage, we are
                    going to need a large amount of funds for the development of
                    key aspects of this project. We have made rough,
                    conservative estimates for each aspect - this also played a
                    factor into the decision regarding mint price.
                  </p>
                  <p>
                    - 50% will be split among the artists, founders & team. The
                    artist has been working full time as a tattooist and
                    spending every hour he can keep his eyes open in the
                    evenings to bring this idea to life. The other 2 founders
                    have also worked tirelessly at great personal expense,
                    financially and mentally, and taken long periods away from
                    their respective businesses to focus on Degen Heroes. This
                    payout for each member will mean several things. It serves
                    as a reward for their efforts as well as the freedom to
                    leave their day jobs behind and dedicate 100% of their time
                    into this project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item custom-accordion-item ">
            <h2
              className="accordion-header accordion-header-bg"
              id="headingThree"
            >
              <button
                className="accordion-button accordion-header-bg collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Q. Will the founders / artist be doxxed?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse accordion-text"
              aria-labelledby="headingThree"
              data-bs-parent="#questionAccordion"
            >
              <div className="accordion-body">
                <p>
                  A. It can be considered a red flag for those involved in a
                  project not to reveal their personal identities. We’re aware
                  of this. We will be hosting a live-streamed AMA where the
                  artist will be tattooing a Degen Hero onto another one of the
                  founders. We want you to meet us, see our faces and feel that
                  connection with us! Our personal belief is that our full names
                  & addresses aren’t necessary to show that we are to be
                  accountable, focused, obsessed with our project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
