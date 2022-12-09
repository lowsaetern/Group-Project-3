import React from "react";
import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";
import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";

const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />

      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Our New Inventory</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
  
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
