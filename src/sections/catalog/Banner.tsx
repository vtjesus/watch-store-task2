import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CatalogSlider: React.FC = () => {
  const slides = Array(5).fill({
    title: `Сезонные скидки в фирменном<br />магазине Michael Kors`,
    subtitle: `Только сейчас скидки на оригинальные аксессуары MICHAEL <br /> KORS до 40%! Успей купить наручные часы, браслеты, сумки, <br /> рюкзаки и кошельки по лучшей цене!`,
    footnote: "* Акция действительна до 31.03.2024 года включительно.",
    background: "/Rectangle.png",
    overlay: "/Rectangle2.png",
  });

  const [activeSlide, setActiveSlide] = React.useState(0);

  const sliderSettings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
        {dots}
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className="w-6 h-6 flex justify-center items-center cursor-pointer"
        onClick={() => setActiveSlide(i)}
      >
        <div
          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            i === activeSlide
              ? "bg-transparent border-white"
              : "bg-white border-white"
          }`}
        ></div>
      </div>
    ),
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  return (
    <div className="flex flex-col items-center">
      
      <div className="relative w-[1200px] h-[520px] mt-8">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.background}
                alt="Background"
                className="w-full h-[470px] object-cover"
              />
              <img
                src={slide.overlay}
                alt="Overlay"
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-10 pl-20 text-white">
                <h2
                  className="text-4xl font-bold mb-4"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                ></h2>
                <p
                  className="text-lg mb-2"
                  dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                ></p>
                <p className="text-sm">{slide.footnote}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="w-full flex justify-start pl-7 mt-0">
        <nav className="text-sm text-gray-500">
          <a href="/" className="hover:text-black underline">
            Главная
          </a>{" "}
          / Часы Michael Kors
        </nav>
      </div>
    </div>
  );
};

type CustomArrowProps = {
  direction: "left" | "right";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const CustomArrow: React.FC<CustomArrowProps> = ({ direction, onClick }) => {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 cursor-pointer z-10 ${
        direction === "right" ? "right-4" : "left-4"
      }`}
      onClick={onClick}
    >
      <img
        src={
          direction === "right"
            ? "/src/assets/arrow_right.png"
            : "/src/assets/arrow.png"
        }
        alt="Arrow"
        className={`w-6 h-6 ${direction === "right" ? "rotate-180" : ""}`}
      />
    </div>
  );
};

export default CatalogSlider;
