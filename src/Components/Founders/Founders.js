import React from "react";
import "./Founders.css";

const Founders = () => {
  return (
    <section className="container founders-container">
      <h2 className="title-text">Founders</h2>
      <div className="row">
        <div className="col">
          <img src="https://i.ibb.co/0hMdvf4/founder-img-1.png" alt="" />
          <h2>BDZ</h2>
          <p>
            Father of 2, workaholic DeFi enthusiast turned NFT Degen. Once
            swapped a BAYC for a URS which eventually sold for 3ETH.
          </p>
        </div>
        <div className="col">
          <img src="https://i.ibb.co/9hzsZxz/founder-img-2.png" alt="" />
          <h2>PALEBLUEDOT</h2>
          <p>
            Also a father of 2. Tattoo artist with a Bachelor of Fine Arts
            degree. Once had to tattoo a moron that swapped a BAYC for a URS.
          </p>
        </div>
        <div className="col">
          <img src="https://i.ibb.co/kXKztCV/founder-img-3.png" alt="" />
          <h2>BONDOR0X</h2>
          <p>
            Okay, we all have 2 children. Has worked in many facets of
            traditional finance. ETH maxi, through and through. Once bought the
            exact top of OHM before losing 80%+. Still hodls.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founders;
