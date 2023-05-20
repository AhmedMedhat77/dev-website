import React from "react";
import Header from "../../Layout/Header";
import MainTitle from "../../Components/MainTitle/MainTitle";
import TextCardWithIcon from "../../Components/TextCardWithIcon";
import Mobile from "../../Assets/Icons/Mobile.svg";
import emailOpen from "../../Assets/Icons/Email Open.svg";
import checkMark from "../../Assets/Icons/checkmark.svg";
import img1 from "../../Assets/Rectangle 145.png";

import img3 from "../../Assets/Rectangle 148.png";
import img4 from "../../Assets/Right.png";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <MainTitle
        top="Our Features"
        center="Our key benefits"
        bottom="Our services are designed to cater to your specific needs and goals"
      />
      <section className="home-features container">
        <div className="home-feature__left">
          <TextCardWithIcon
            icon={checkMark}
            title="Project Structure"
            text="Check out our proven methods, guides, and exercises that help make work better, and people happier."
          />
          <TextCardWithIcon
            icon={Mobile}
            title="Responsive"
            text="This Design System and UI kit is coming with full-responsive screens for tablet and mobile devices."
          />
          <TextCardWithIcon
            icon={emailOpen}
            title="Messaging"
            text="On mobile, customers can send text, or audio messages to agents, like using any messaging app"
          />
        </div>
        <div className="home-features__right">
          <div className="home-features__right-item">
            <img src={img1} alt="img" />
            <img src={img3} alt="img" />
          </div>
          <div className="home-features__right-item">
            <img src={img4} alt="img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
