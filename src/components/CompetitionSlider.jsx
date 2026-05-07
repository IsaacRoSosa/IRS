import React from 'react';
import Slider from 'react-slick';
import CompetitionCard from '@/components/CompetitionCard';
import competitionsData from '@/data/competitions.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompetitionSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full h-full flex items-center justify-center py-4 px-4">
      <style jsx>{`
        section :global(.slick-list) {
          padding: 30px 0 !important;
        }
      `}</style>
      <div className="w-full max-w-[1400px]">
        <Slider {...settings} className="relative">
          {competitionsData.map((competition) => (
            <div key={competition.id} className="px-6">
              <CompetitionCard {...competition} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 -translate-y-1/2 z-[2] bg-black/50 rounded-full p-2.5 cursor-pointer right-2.5`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 -translate-y-1/2 z-[2] bg-black/50 rounded-full p-2.5 cursor-pointer left-2.5`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default CompetitionSlider;
 