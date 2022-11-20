import React from "react";
import { Carousel } from "react-responsive-carousel";
import Yanto from "../../asset/image/yanto.png";

const HomeCarousel = () => {
  return (
    <>
      <div className="testi py-1 ">
        <div className="judul--testi">
          <h1>Testimoni Mitra</h1>
          <p>Sekilas hasil Testimoi mereka yang sudah bergabung dengan PusaTani</p>
        </div>
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={6100}>
          <div>
            <img src={Yanto} alt="foto" />
            <div className="myCarousel">
              <h3>Yanto</h3>
              <h4>Petani, Zimbabwe</h4>
              <p>It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site</p>
            </div>
          </div>

          <div>
            <img src={Yanto} alt="foto" />
            <div className="myCarousel">
              <h3>Yanti</h3>
              <h4>Petani, Nigeria</h4>
              <p>The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.</p>
            </div>
          </div>

          <div>
            <img src={Yanto} alt="foto" />
            <div className="myCarousel">
              <h3>Yatno</h3>
              <h4>Peani, Oman</h4>
              <p>I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!</p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HomeCarousel;
