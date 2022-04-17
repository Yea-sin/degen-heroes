import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  return (
    <section className="container roadmap-container">
      <div className="row">
        <div className="col">
          <img src="https://i.ibb.co/bXxzbRK/roadmap-img-3.png" alt="" />
        </div>
        <div className="col">
          <h2 className="col-title">A VALUE DRIVEN ROADMAP</h2>
          <p>
            Our roadmap has been meticulously designed to provide value to Degen
            Hero holders at every turn in all aspects of sales, drops,
            collaborations and story building.
          </p>
          <p className="col-text">
            Each project within the brand has been researched for feasibility
            and likelihood of providing revenue streams against the use of
            funds. Our value propositions have been designed to reward holders
            directly in ETH which can be accumulated and claimed at any
            interval. Why not simply a native $DEGEN token? We’re degens... ETH
            is our native currency and we’d bet it’s yours too!
          </p>
          <p>
            Chapter 1 of our roadmap will continue to slowly reveal, more fog
            will disappear and the picture will become much clearer. Make sure
            you check every road sign, every building, even the graffiti on the
            walls. While some things may appear quite obvious, others will be
            less conspicuous and we can’t wait to see what the eagle-eyed might
            pick up on!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
