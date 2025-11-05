import React from "react";
import heroImage from "../assets/hero-bg.jpg"; // hero background
import travelBlog from "../assets/travel-blog.jpg"; // 3 cards
import destinations from "../assets/destinations.jpg";
import aboutImg from "../assets/about.jpg";
import usaToday from "../assets/usa-today.png";
import nbc from "../assets/nbc-news.png";
import time from "../assets/time.png";
import bbc from "../assets/bbc-travel.png";
import travelLeisure from "../assets/travel-leisure.png";
import aboutImage from "../assets/about-me.jpg"; // update with your image
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTwitter } from "react-icons/fa";
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import ContactSection from "./ContactSection";
import BannerCarousel from "./BannerCarousel";

export default function Home() {
    return (
        <div className="w-full overflow-hidden">
            {/* ===== HERO SECTION ===== */}
            <section id="home"
                className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
                        EXPLORE. DREAM. DISCOVER.
                    </h1>
                    <p className="text-gray-200 text-sm md:text-base mb-6">
                        This is a world travel blog featuring beautiful destinations, new
                        experiences, and hidden places around the globe. <br />
                        Please tag along!
                    </p>
                    <button className="px-6 py-3 border border-white text-white text-sm md:text-base rounded hover:bg-white hover:text-black transition font-semibold">
                        START EXPLORING
                    </button>
                </div>

                {/* Bottom white torn effect */}
                <div className="absolute bottom-0 w-full overflow-hidden z-10 
                // Keep the strong shadow for the attractive depth:
                shadow-2xl shadow-gray-500/60">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"

                        className="w-full h-[150px] block"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            // More aggressive path data for a deep, dramatic tear
                            // This path has higher peaks and deeper valleys than the previous one
                            d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,160C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64V320H0Z"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* ===== FEATURED SECTION ===== */}
            <section id="destinations" className="bg-white text-center py-10 px-6">
                <h2 className="text-2xl font-semibold mb-6">Featured</h2>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    <img src={usaToday} alt="USA Today" className="h-10 opacity-70" />
                    <img src={nbc} alt="NBC" className="h-10 opacity-70" />
                    <img src={time} alt="Time" className="h-10 opacity-70" />
                    <img src={bbc} alt="BBC Travel" className="h-10 opacity-70" />
                    <img src={travelLeisure} alt="Travel Leisure" className="h-20 opacity-70" />
                </div>
            </section>

            {/* ===== CARD SECTION ===== */}
            <section id="about" className="bg-white py-10 px-6 flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="text-center">
                    <img
                        src={travelBlog}
                        alt="Travel Blog"
                        className="w-[280px] h-[180px] object-cover rounded-md shadow-md hover:scale-105 transition"
                    />
                    <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider">
                        Travel Blog
                    </h3>
                </div>

                <div className="text-center">
                    <img
                        src={destinations}
                        alt="Destinations"
                        className="w-[280px] h-[180px] object-cover rounded-md shadow-md hover:scale-105 transition"
                    />
                    <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider">
                        Destinations
                    </h3>
                </div>

                <div className="text-center">
                    <img
                        src={aboutImg}
                        alt="About"
                        className="w-[280px] h-[180px] object-cover rounded-md shadow-md hover:scale-105 transition"
                    />
                    <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider">
                        Gallery
                    </h3>
                </div>
            </section>



            {/*======Blogs=====*/}
            <section id="blog" className="bg-white py-16 px-6 md:px-20 lg:px-32">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT - IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src={aboutImage}
                            alt="David Leiter - Travel Blogger"
                            className="w-[320px] md:w-[400px] lg:w-[420px] rounded-lg shadow-lg"
                        />
                    </div>

                    {/* RIGHT - TEXT */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                            Thanks For Looking!
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            I'm <span className="font-semibold text-black">Eliza Moreau</span>,
                            the brain behind this website. I'm a French/Italian dual citizen who’s been living and traveling across Europe and beyond for <span className="font-semibold">9 years now</span>.
                        </p>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            I started this travel blog in 2019 to document my own international
                            trips, share my photos, and help others learn how to travel the
                            world and find some really good spots off the beaten path.
                        </p>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            All of the writing and pictures on this site come from my own
                            personal experience.
                        </p>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            My second home is{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                Bali, Indonesia
                            </a>
                            , where I met my friend Intan, who’s a Bali local. Now she joins me on
                            these adventures too.
                        </p>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            Together, we’ve done some{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                bucket list hikes
                            </a>
                            , climbed active{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                volcanoes
                            </a>
                            , seen exotic{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                wildlife
                            </a>
                            , and visited some spectacular{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                castles
                            </a>
                            ,{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                temples
                            </a>
                            , and{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                monuments
                            </a>{" "}
                            around the world.
                        </p>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            I’ve worked with and been featured by{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                BBC Travel
                            </a>
                            ,{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                NBC News
                            </a>
                            ,{" "}
                            <a href="#" className="text-orange-500 hover:underline">
                                Time
                            </a>
                            , and other companies.
                        </p>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                            I haven’t been everywhere, but it’s on my list. I hope this world
                            travel blog can help and inspire you in your own journeys as well!
                        </p>

                        {/* Button */}
                        <button className="border border-black rounded-full px-6 py-2 text-xs md:text-sm font-semibold hover:bg-black hover:text-white transition">
                            MORE ABOUT ME →
                        </button>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6 text-gray-600 text-lg justify-start">
                            <a href="#" className="hover:text-black">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="hover:text-black">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-black">
                                <FaYoutube />
                            </a>
                            <a href="#" className="hover:text-black">
                                <FaPinterestP />
                            </a>
                            <a href="#" className="hover:text-black">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
                <section id="gallery">
                    {/* <h2 className="text-2xl font-semibold mb-6">Gallery</h2> */}
                    <BannerCarousel />
                </section>
                <Blogs />
                <Pagination />
            </section>



            {/*======Contact=====*/}
            <section id="contact">
                <ContactSection />
            </section>

        </div>
    );
}
