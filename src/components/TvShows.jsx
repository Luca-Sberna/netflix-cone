import { Container, Row, Col, Carousel, Spinner } from "react-bootstrap";
import { useState } from "react";
import MyMain from "./MyMain";
import FirstGallery from "./FirstGallery";
import SecondGallery from "./SecondGallery";
import ThirdGallery from "./ThirdGallery";
import MyFooter from "./MyFooter";

const TvShows = () => {
  return (
    <>
      <MyMain />
      <FirstGallery />
      <SecondGallery />
      <ThirdGallery />
      <MyFooter />
    </>
  );
};

export default TvShows;
