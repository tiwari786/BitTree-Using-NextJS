'use client';
import Slider from 'react-slick';
import Image from 'next/image';

const slides = [
  {
    image: '/imgi_47_66864533e85838c661396b01_Testimonial-David-Coleman.webp',
    title: '“Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”',
    testimonial: 'Riley Lemon,',
    testimonial2: "Youtuber, Content Creator",
  },
  {
    image: '/imgi_48_66864533566fcb42ef955aad_Testimonial-Riley-Lemon.webp',
    title: '“Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”',
    testimonial: 'Patti Chimkire,',
    testimonial2: "Founder and Pastry Chef, Mali Bakes",
  },
  {
    image: '/imgi_49_66864534504211c47030e6cb_Testimonial-Patti-Chimkire-New.webp',
    title: '“Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”',
    testimonial: 'Luke Kidgell,',
    testimonial2: "Comedian",
  },
  {
    image: '/imgi_50_668645339d6bfad6723a29c2_Testimonial-Luke-Kidgell2.webp',
    title: '“Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”',
    testimonial: 'Rise Utama,',
    testimonial2: "TV Reporter and Producer",
  },
  {
    image: '/imgi_51_668645334e5d2a5fe786925d_Testimonial-Risa-Utama.webp',
    title: '“Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”',
    testimonial: 'David Coleman,',
    testimonial2: "Founder, Mechanicallyincleyend",
  }
];

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="max-w-3xl bg-[#f3f3f1] mt-[128px] mx-auto rounded overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col items-center justify-between  text-white">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={800}
                height={200}
                className="w-full h-1/2 object-cover"
              />
              <h2 className="text-xl w-full justify-center text-black md:text-2xl font-bold mt-4">{slide.title}</h2>
              {/* <button className="mb-6 mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded">
                {slide.buttonText}
              </button> */}
              <div className="w-full">
                <div className="text-[#676b5f] font-[20px]">{slide.testimonial}</div>
                <div className="text-[#676b5f] font-[20px]">{slide.testimonial2}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
