import React from "react";
import Header from "../../Layout/Header";
import MainTitle from "../../Components/MainTitle/MainTitle";
import TextCardWithIcon from "../../Components/TextCardWithIcon";
import Mobile from "../../Assets/Icons/Mobile.svg";
import emailOpen from "../../Assets/Icons/Email Open.svg";
import checkMark from "../../Assets/Icons/checkmark.svg";
import email from "../../Assets/Icons/Email.svg";
import img1 from "../../Assets/Rectangle 145.png";
import play from "../../Assets/Icons/Play.svg";
import img3 from "../../Assets/Rectangle 148.png";
import img4 from "../../Assets/Right.png";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Button from "../../Components/Button/Button";
import Accordion from "../../Components/Accordion/Accordion";
import { FAQ } from "../../Data/FAQ";
import ImageCard from "../../Components/ImageCard/ImageCard";
import { ProductData } from "../../Data/Products";
import { Clients } from "../../Data/Clients";
import FreeTrial from "../../Components/FreeTrial/FreeTrial";
import OurClientItem from "../../Components/OurClientsItem/OurClientItem";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Header />
      <MainTitle
        top={t("FeaturesSection.MainTitle.top")}
        center={t("FeaturesSection.MainTitle.center")}
        bottom={t("FeaturesSection.MainTitle.bottom")}
      />
      <section className="home-features container">
        <div className="home-feature__left">
          <TextCardWithIcon
            icon={checkMark}
            title={t("FeaturesSection.TextCard.title1")}
            text={t("FeaturesSection.TextCard.text1")}
          />
          <TextCardWithIcon
            icon={Mobile}
            title={t("FeaturesSection.TextCard.title2")}
            text={t("FeaturesSection.TextCard.text2")}
          />
          <TextCardWithIcon
            icon={emailOpen}
            title={t("FeaturesSection.TextCard.title3")}
            text={t("FeaturesSection.TextCard.text3")}
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
          title={t("homeadd.title")}
          description={t("homeadd.subtitle")}
        />

        <div className="home-add__top">
          <div className="home-add__top-item">
            <img
              className="home-add__top-item-img"
              src={checkMark}
              alt="checkmark"
            />
            <p className="home-add__top-item-text">{t("homeadd.adds.one")}</p>
          </div>
          <div className="home-add__top-item">
            <img
              className="home-add__top-item-img"
              src={checkMark}
              alt="checkmark"
            />
            <p className="home-add__top-item-text">{t("homeadd.adds.two")}</p>
          </div>
          <div className="home-add__top-item">
            <img
              className="home-add__top-item-img"
              src={checkMark}
              alt="checkmark"
            />
            <p className="home-add__top-item-text">{t("homeadd.adds.three")}</p>
          </div>
        </div>

        <div className="home-add__bottom">
          <div className="home-add__bottom-item">
            <Button
              text={t("Header.btnPrimary")}
              styles={"btn btn--l btn--primary"}
            />
          </div>
          <div className="home-add__bottom-item">
            <Button
              text={t("Header.btnSecondary")}
              styles={"btn btn--l btn--secondary btn-icon"}
              icon={play}
            />
          </div>
        </div>
      </section>
      <section className="homa-faq">
        <SectionTitle
          title={t("FAQ.MainTitle.title")}
          description={t("FAQ.MainTitle.text")}
        />
        <div className="home-faq__top">
          {FAQ?.map((item, i) => {
            return (
              <Accordion
                count={i + 1}
                key={item.id}
                question={t(item.title)}
                answer={t(item.answer)}
              />
            );
          })}
        </div>
        <div className="home-faq__bottom">
          <div className="home-faq__bottom__content">
            <h4 className="home-faq__bottom__content-title">
              {t("FAQ.Contact.title")}
            </h4>
            <p className="home-faq__bottom__content-text">
              {t("FAQ.Contact.text")}
            </p>
            <Button
              icon={email}
              text={t("FAQ.Contact.btn")}
              styles="btn btn--primary btn--l btn-icon"
            />
          </div>
        </div>
      </section>
      <section className="home-blog">
        <MainTitle
          top={t("Blog.MainTitle.top")}
          center={t("Blog.MainTitle.center")}
          bottom={t("Blog.MainTitle.bottom")}
        />
        <div className="home-blog__top">
          {ProductData?.map((card) => {
            return (
              <ImageCard
                img={card.img}
                key={card.id}
                title={t(card.title)}
                text={t(card.text)}
                categories={card.categories}
              />
            );
          })}
        </div>
        <div className="home-blog__bottom">
          <Button
            text={t("Blog.Button")}
            styles="btn btn--primary btn--l btn-icon"
          />
        </div>
      </section>
      <section className="home-freetrial">
        <FreeTrial />
      </section>
      <section className="home-ourclients">
        <MainTitle center={t("OurClients.title")} />
        <div className="home-ourclients__clientscontainer">
          {Clients?.map((client) => {
            return (
              <OurClientItem
                key={client.id}
                img={client.img}
                title={client.title}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
