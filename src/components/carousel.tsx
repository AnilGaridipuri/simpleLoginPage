import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";

const MyCarousel = () => {
  const carouselItems = [
    {
      firstLine: "100% Uptime😎",
      secondLine: " Zero Infrastructure Management",
    },
    {
      firstLine: "100% Uptime😎",
      secondLine: " Zero Infrastructure Management",
    },
    {
      firstLine: "100% Uptime😎",
      secondLine: " Zero Infrastructure Management",
    },
  ];

  const carouselOptions = {
    isRTL: false,
    renderPagination: ({ pages, activePage, onClick }: any) => {
      return (
        <div className="pagination">
          {pages.map((index: any) => (
            <button
              key={index}
              onClick={() => onClick(index)}
              className={`pagination-button ${
                activePage === index ? "active" : ""
              }`}
            ></button>
          ))}
        </div>
      );
    },
    enableAutoPlay: true,
    autoPlaySpeed: 2000,
    showArrows: false,
    isInfinite: true,
  };

  return (
    <ReactElasticCarousel {...carouselOptions}>
      {carouselItems.map((item, index) => (
        <div className="curouselText" key={index}>
          <p>{item.firstLine}</p>
          <span>{item.secondLine}</span>
        </div>
      ))}
    </ReactElasticCarousel>
  );
};

export default MyCarousel;
