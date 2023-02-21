import gsap, { Power3, TweenLite } from "gsap";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import { ProductCard, ProductCardProps } from "../../../components";
import { propertyData } from "../utils/propertyData";
import "./styles.css";
gsap.registerPlugin(TweenLite);
const data = propertyData;

const Box = ({ data }: ProductCardProps) => (
  <div className="box">
    <ProductCard data={data} />
  </div>
);

export const Slider = () => {
  const [count, setCount] = useState(3);
  const [multiplier, setMultiplier] = useState(1);

  const boxContainerRef: any = useRef();
  const boxWidth = 360;

  const prev = () => {
    setCount((p) => p - 1);
    setMultiplier((p) => p - 1);
    Array.from(Array(10).keys()).forEach((i) => slideRight(i, multiplier - 1));
  };

  const next = () => {
    setCount((p) => p + 1);
    setMultiplier((p) => p + 1);
    Array.from(Array(10).keys()).forEach((i) => slideLeft(i, multiplier));
  };

  const slideLeft = (index: number, multiplied: number) => {
    TweenLite.to(boxContainerRef.current.children[index], 1, {
      x: -boxWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index: string | number, multiplied: number) => {
    TweenLite.to(boxContainerRef.current.children[index], 1, {
      x: -boxWidth * multiplied + boxWidth,
      ease: Power3.easeOut,
    });
  };

  const renderBox = () => (
    <>
      {data.map((property, i) => (
        <Box data={property} key={i} />
      ))}
    </>
  );

  return (
    <div className="container">
      <div className="sidebutton">
        <button
          className="prev-button"
          disabled={count - 3 === 0}
          onClick={prev}
        >
          <ChevronLeft />
        </button>
      </div>

      <div className="box-container" ref={boxContainerRef}>
        {renderBox()}
      </div>
      <div className="sidebutton">
        <button
          className="next-button"
          disabled={count === data.length}
          onClick={next}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
