import React from "react";
import { Carousel } from "react-responsive-carousel";
import Yanto from "../../asset/image/yanto.png";
import Yanti from "../../asset/image/test.png";
import Yatno from "../../asset/image/test2.png";
import Yatna from "../../asset/image/test3.png";
import Yantuy from "../../asset/image/test4.png";

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
              <p>PusaTani sangat memudahkan kita sebagai petani</p>
            </div>
          </div>

          <div>
            <img src={Yanti} alt="foto" />
            <div className="myCarousel">
              <h3>Yanti</h3>
              <h4>Petani, Turki</h4>
              <p>PusaTani Maha Enjoyy</p>
            </div>
          </div>

          <div>
            <img src={Yatno} alt="foto" />
            <div className="myCarousel">
              <h3>Yatno</h3>
              <h4>Petani, China</h4>
              <p>Fitu-fitur yang ada di PusaTani sangat membantu kita sebagai petani</p>
            </div>
          </div>

          <div>
            <img src={Yatna} alt="foto" />
            <div className="myCarousel">
              <h3>Yatna</h3>
              <h4>Pemilik Pabrik, India</h4>
              <p>PusaTani memberi kita ruang untuk saling menguntungkan</p>
            </div>
          </div>

          <div>
            <img src={Yantuy} alt="foto" />
            <div className="myCarousel">
              <h3>Yantuy</h3>
              <h4>Pemilik Toko, Nigeria</h4>
              <p>Dengan PusaTani saya yakin pertanian di daerah kita bisa merata</p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HomeCarousel;
