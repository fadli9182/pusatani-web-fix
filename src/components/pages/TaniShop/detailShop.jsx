import React from "react";
import Footer from "../../partials/footer/Footer";
import Header from "../../partials/header/Header";

const DetailShop = () => {
  return (
    <>
      <Header />
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img className="singlePostImg py-3" alt="sa" />
          <h1 className="singlePostTitle">Lorem ipsum dolor</h1>
          <div className="singlePostInfo">
            <span>Author:</span>
            <span>1 day ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
          </p>
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailShop;
