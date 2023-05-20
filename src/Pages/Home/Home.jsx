import React from "react";
import Header from "../../Layout/Header";
import MainTitle from "../../Components/MainTitle/MainTitle";
import TextCardWithIcon from "../../Components/TextCardWithIcon";
import Mobile from "../../Assets/Icons/Mobile.svg";
import emailOpen from "../../Assets/Icons/Email Open.svg";
import checkMark from "../../Assets/Icons/checkmark.svg";
import img1 from "../../Assets/Rectangle 145.png";
import play from "../../Assets/Icons/Play.svg";
import img3 from "../../Assets/Rectangle 148.png";
import img4 from "../../Assets/Right.png";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import Button from "../../Components/Button/Button";
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
      <section className="home-add">
        <SectionTitle
          title="Streamline your workflow with SaaS: Get started now"
          description="Stay up to date with the most relevant information"
        />

        <div className="home-add__top">
          <div className="home-add__top-item">
            <img
              className="home-add__top-item-img"
              src={checkMark}
              alt="checkmark"
            />
            <p className="home-add__top-item-text">Unlimited pages</p>
          </div>
          <div className="home-add__top-item">
            <img
              className="home-add__top-item-img"
              src={checkMark}
              alt="checkmark"
            />
            <p className="home-add__top-item-text">Easy Access</p>
          </div>
          <div className="home-add__top-item">
            <img
              className="home-add__top-item-img"
              src={checkMark}
              alt="checkmark"
            />
            <p className="home-add__top-item-text"> 14-days free trial</p>
          </div>
        </div>

        <div className="home-add__bottom">
          <div className="home-add__bottom-item">
            <Button text="Get Started" styles={"btn btn--l btn--primary"} />
          </div>
          <div className="home-add__bottom-item">
            <Button
              text="Watch demo"
              styles={"btn btn--l btn--secondary btn-icon"}
              icon={play}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
