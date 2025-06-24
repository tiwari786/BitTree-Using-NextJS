'use client';

import Image from "next/image";
import TypedText from './TypedText/page';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import HoverImage from "./homehover";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from '../components/SlickSlider';
import Accordion from '../components/Accordion';
import Footer from "@/components/Footer";


export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // below 1024px width
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // below 768px width
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // below 480px width (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <main>
      {/* Section 1 */}
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-20 py-16 gap-10">
        {/* Text Left Section */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <h1 className="text-[#d2e823] text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-extrabold leading-tight">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="text-white text-base sm:text-lg mt-4 mb-8">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <input
              className="w-full sm:min-w-[290px] bg-white text-[#757575] rounded px-4 py-3 focus:outline-green-300 text-[16px]"
              placeholder="bittr.ee/"
              type="text"
            />
            <button className="px-6 py-3 text-[16px] text-black font-semibold rounded-full bg-[#e9c0e9]">
              Claim your Bittree
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <Image
            src="/home.png"
            className="w-full max-w-md sm:max-w-lg lg:max-w-[70%] h-auto object-contain"
            alt="Linktree preview"
          />
        </div>
      </section>


      {/* Section 2 */}
      <section className="bg-[#e9c0e9] min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-20 py-16 gap-10">
        {/* Left Image Section */}
        <div className="order-1 flex justify-center items-center">
          <Image
            src="/home2.png"
            alt="Customize Linktree"
            className="w-full max-w-md sm:max-w-lg lg:max-w-[70%] h-auto object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="order-2 flex justify-center flex-col text-center lg:text-left">
          <h1 className="text-[#502274] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight">
            Create and customize your Linktree in minutes
          </h1>
          <p className="text-[#1e2330] text-base sm:text-lg md:text-xl mt-4 mb-8">
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <div>
            <button className="px-6 py-4 text-white text-base font-semibold rounded-full bg-[#502274] hover:bg-[#3f1b5d] transition-all duration-300">
              Get Started for free
            </button>
          </div>
        </div>
      </section>


      {/* Section 3 */}
      <section className="bg-[#780016] min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-20 py-16 gap-10">
        {/* Left Text Section */}
        <div className="order-2 lg:order-1 flex justify-center flex-col text-center lg:text-left">
          <h1 className="text-[#e9c0e9] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight">
            Share your Linktree from your Instagram, TikTok, Twitter and other bios
          </h1>
          <p className="text-white text-base sm:text-lg mt-4 mb-8">
            Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="px-6 py-4 text-black text-base font-semibold rounded-full bg-[#e9c0e9] hover:bg-[#dbaedb] transition-all duration-300">
              Get Started for free
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <Image
            src="/home3.png"
            alt="Linktree QR and bio usage"
            className="w-full max-w-md sm:max-w-lg lg:max-w-[80%] h-auto object-contain"
          />
        </div>
      </section>


      {/* Section 4 */}
      <section className="bg-[#e8efd6] min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-20 py-16 gap-10">
        {/* Left Image Section */}
        <div className="order-2 lg:order-1 flex justify-center items-center">
          <Image
            src="/home4.png"
            alt="Audience analytics"
            className="w-full max-w-md sm:max-w-lg lg:max-w-[80%] h-auto object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="order-1 lg:order-2 flex justify-center flex-col text-center lg:text-left">
          <h1 className="text-[#1e2330] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-tight">
            Analyze your audience and keep your followers engaged
          </h1>
          <p className="text-[#1e2330] text-base sm:text-lg mt-4 mb-8">
            Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="px-6 py-4 text-black text-base font-semibold rounded-full bg-[#e9c0e9] hover:bg-[#dbaedb] transition-all duration-300">
              Get Started for free
            </button>
          </div>
        </div>
      </section>


      {/* Section 5 */}
      <section className="bg-[#f3f3f1] min-h-screen flex flex-col justify-center px-4 md:px-10 lg:px-20 py-16 gap-16">
        {/* Heading & Typed Text */}
        <div className="text-center">
          <h1 className="text-[#1e2330] text-3xl sm:text-4xl md:text-[56px] font-extrabold">The only link in bio trusted by 70M+</h1>
          <TypedText />
        </div>

        {/* Slider Section */}
        <div className="mt-10 w-full">
          <Slider {...settings} className="overflow-hidden">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="px-2 w-[316px] min-h-[400px]">
                <Image
                  src={`/slide${i + 1}.webp`}
                  alt={`Slide ${i + 1}`}
                  className={`w-full h-full object-cover ${i === 0 ? 'rounded-[40px]' : i === 1 ? 'rounded-full' : ''}`}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Boxes */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-[#e9c0e9] rounded-2xl px-6 py-10 gap-6">
              <Image src="/imgi_39_680c13b834d3994a796896bd_all your things.png" alt="Feature 1" />
              <h3 className="text-[20px] md:text-[24px] font-bold">Share your content in limitless ways on your Linktree.</h3>
            </div>
            <div className="flex flex-col bg-[#d2e823] rounded-2xl px-6 py-10 gap-6">
              <Image src="/imgi_40_680c16a391a7e027f3fbda59_products.png" alt="Feature 2" />
              <h3 className="text-[20px] md:text-[24px] font-bold">Sell products and collect payments. It’s monetization made simple.</h3>
            </div>
          </div>

          {/* Right Box */}
          <div className="flex justify-center items-center bg-[#2665d6] rounded-2xl px-6 py-10 text-center">
            <div className="flex flex-col items-center gap-6">
              <Image src="/imgi_41_680c13b83b832c35450e92d6_Group 48096668.png" className="max-w-full w-[90%] sm:w-[400px] lg:w-[499px]" alt="Grow audience" />
              <h3 className="text-[22px] md:text-[28px] text-white font-bold">
                Grow, own and engage your audience by unifying them in one place.
              </h3>
            </div>
          </div>
        </div>

        {/* Call to Action Title */}
        <div className="text-center mt-20">
          <h3 className="text-[30px] sm:text-[38px] md:text-[45px] font-extrabold leading-snug">
            The fast, friendly and<br className="block sm:hidden" />
            powerful link in bio tool.
          </h3>
        </div>

        {/* Explore Plans Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#e9c0e9] hover:bg-[#d8add8] rounded-full px-9 py-4 font-bold transition-all duration-300">
            Explore all plans
          </button>
        </div>

        {/* As Featured In */}
        <div className="flex justify-center mt-28 text-center">
          <h1 className="text-[32px] sm:text-[38px] md:text-[45px] leading-none font-extrabold">
            As featured in...
          </h1>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6 px-4">

          <div
            className="rounded-[32px] bg-white px-6 py-3 w-[140px] sm:w-[180px] md:w-[200px] flex justify-center items-center shadow-sm"
          >
            <Image
              src="/imgi_42_66956c24b06a30e2abd303c1_Logo-TechCrunch-Large2.avif.svg"
              className="h-6 sm:h-8 object-contain"
              alt="img"
            />
          </div>
          <div
            className="rounded-[32px] bg-white px-6 py-3 w-[140px] sm:w-[180px] md:w-[200px] flex justify-center items-center shadow-sm"
          >
            <Image
              src="/imgi_43_66956c240c7252f99a711862_Logo-Insider-Large.avif.svg"
              className="h-6 sm:h-8 object-contain"
              alt="img"
            />
          </div>
          <div
            className="rounded-[32px] bg-white px-6 py-3 w-[140px] sm:w-[180px] md:w-[200px] flex justify-center items-center shadow-sm"
          >
            <Image
              src="/imgi_44_66956c243edb28a09bb80185_Logo-Mashable-Large.avif.svg"
              className="h-6 sm:h-8 object-contain"
              alt="img"
            />
          </div>
          <div
            className="rounded-[32px] bg-white px-6 py-3 w-[140px] sm:w-[180px] md:w-[200px] flex justify-center items-center shadow-sm"
          >
            <Image
              src="/imgi_45_66956c24fcbadb976185fa13_Logo-Fortune-Large.avif.svg"
              className="h-6 sm:h-8 object-contain"
              alt="img"
            />
          </div>
          <div
            className="rounded-[32px] bg-white px-6 py-3 w-[140px] sm:w-[180px] md:w-[200px] flex justify-center items-center shadow-sm"
          >
            <Image
              src="/imgi_46_66956c247ae4d73b70397940_Logo-Forbes-Large.avif.svg"
              className="h-6 sm:h-8 object-contain"
              alt="img"
            />
          </div>

        </div>

      </section>


      {/* Section 6 */}
      <section className="bg-[#f3f3f1] min-h-[100vh] flex flex-col">
        <main className="flex items-center justify-center">
          <SlickSlider />
        </main>
      </section>

      {/* Section 7 */}
      <section className="bg-[#780016] min-h-[100vh] flex flex-col justify-center">
        <Accordion />
      </section>

    </main>
  );
}
