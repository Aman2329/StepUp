"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";


const Page = () => {
  return (
    <div>
      {/* Head Section for metadata */}
      <Head>
        <title>AI Mock Interview</title>
        <meta name="description" content="Ace your next interview with AI-powered mock interviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Header Section */}
        <header className="w-full py-8 bg-gray-100 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <h1 className="text-3xl font-bold text-primary">AI Mock Interview</h1>
            <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-between mt-4 md:mt-0 space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Sponsor Button */}
              <div>
                <iframe
                  src="https://github.com/Aman2329"
                  title="Sponsor StepUp on GitHub"
                  height="32"
                  width="114"
                  className="border-0 rounded-lg"
                ></iframe>
              </div>
              {/* GitHub Link */}
              <div>
                <a
                  target="_blank"
                  rel="StepUp"
                  href="https://github.com/Aman2329"
                >
                  <FaGithub className="w-10 h-8" />
                </a>
              </div>
              {/* Navigation Links */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0">
                <a href="#features" className="text-lg text-gray-800 mx-2 md:mx-4">Features</a>
                <a href="#testimonials" className="text-lg text-gray-800 mx-2 md:mx-4">Testimonials</a>
                <a href="#contact" className="text-lg text-gray-800 mx-2 md:mx-4">Contact</a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-gray-900 to-gray-400 px-6 md:px-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ace Your Next Interview</h2>
          <p className="mt-4 text-lg md:text-xl text-white">Practice with AI-powered mock interviews and get personalized feedback</p>
          <div className="mt-6 flex flex-col md:flex-row">
            <a
              href="/dashboard"
              className="px-6 py-3 mb-4 md:mb-0 md:mr-4 text-lg font-semibold bg-white text-primary-600 rounded-lg shadow-lg hover:bg-gray-100"
            >
              Get Started
            </a>
            <a
              href="dashboardCourse"
              className="px-6 py-3 text-lg font-semibold border border-white rounded-lg hover:bg-white hover:text-black-600"
            >
              Explore Course
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white px-6 md:px-0">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Features</h2>
            <p className="mt-4 text-lg text-gray-800">Our AI Mock Interview platform offers a range of powerful features:</p>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-1/3 px-4 py-8">
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-black-600">AI Mock Interviews</h3>
                  <p className="mt-2 text-gray-600">Experience realistic interview scenarios with our advanced AI.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 py-8">
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-black-600">Instant Feedback</h3>
                  <p className="mt-2 text-gray-600">Get instant, personalized feedback to improve your performance.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 py-8">
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-black-600">Comprehensive Reports</h3>
                  <p className="mt-2 text-gray-600">Receive detailed reports highlighting your strengths and weaknesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section id="testimonials" className="py-16 bg-gray-50 px-6 md:px-0">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">What Our Users Say</h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-1/2 px-4 py-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-gray-600">
                    "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview."
                  </p>
                  <h4 className="mt-4 text-lg font-semibold text-blue-600">- Alex</h4>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 py-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-gray-600">
                    "The feedback was spot on and helped me improve my answers. Highly recommend this service!"
                  </p>
                  <h4 className="mt-4 text-lg font-semibold text-blue-600">- Aman</h4>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50 px-6 md:px-0">
          <div className="container mx-auto text-center overflow-hidden relative">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Users Say</h2>
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-scroll gap-8">
                {/* Testimonial 1 */}
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-left">
                    <img
                      src="aman.jpeg"
                      alt="Alex"
                      className="rounded-full w-20 h-20 mx-auto border-2 border-blue-600"
                    />
                    <p className="text-gray-600 mt-4 italic">
                      "The is incredibly helpful. I felt much more confident going into my real interview."
                    </p>
                    <h4 className="mt-4 text-lg font-semibold text-blue-600">- Alex</h4>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-left">
                    <img
                      src="aman.jpeg"
                      alt="Aman"
                      className="rounded-full w-20 h-20 mx-auto border-2 border-blue-600"
                    />
                    <p className="text-gray-600 mt-4 italic">
                      "The feedback was spot on and helped me improve my answers. Highly recommend this service!"
                    </p>
                    <h4 className="mt-4 text-lg font-semibold text-blue-600">- Aman</h4>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-left">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="John"
                      className="rounded-full w-20 h-20 mx-auto border-2 border-blue-600"
                    />
                    <p className="text-gray-600 mt-4 italic">
                      "This platform transformed the way I prepare for interviews. Amazing experience!"
                    </p>
                    <h4 className="mt-4 text-lg font-semibold text-blue-600">- John</h4>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-left">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="Sophia"
                      className="rounded-full w-20 h-20 mx-auto border-2 border-blue-600"
                    />
                    <p className="text-gray-600 mt-4 italic">
                      "Loved the user-friendly interface and insightful feedback. Highly recommended!"
                    </p>
                    <h4 className="mt-4 text-lg font-semibold text-blue-600">- Sophia</h4>
                  </div>
                </div>

                {/* Testimonial 5 */}
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-left">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="Emma"
                      className="rounded-full w-20 h-20 mx-auto border-2 border-blue-600"
                    />
                    <p className="text-gray-600 mt-4 italic">
                      "The best platform to boost your interview skills. A game-changer for job seekers!"
                    </p>
                    <h4 className="mt-4 text-lg font-semibold text-blue-600">- Emma</h4>
                  </div>
                </div>

                {/* Duplicate first 3 testimonials for seamless scrolling */}
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-left">
                    <img
                      src="person.jpeg"
                      alt="Alex"
                      className="rounded-full w-20 h-20 mx-auto border-2 border-blue-600"
                    />
                    <p className="text-gray-600 mt-4 italic">
                      "The is incredibly helpful. I felt much more confident going into my real interview."
                    </p>
                    <h4 className="mt-4 text-lg font-semibold text-blue-600">- Alex</h4>
                  </div>
                </div>

                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-left">
                    <img
                      src="aman.jpeg"
                      alt="Aman"
                      className="rounded-full w-20 h-20 mx-auto border-2 border-blue-600"
                    />
                    <p className="text-gray-600 mt-4 italic">
                      "The feedback was spot on and helped me improve my answers. Highly recommend this service!"
                    </p>
                    <h4 className="mt-4 text-lg font-semibold text-blue-600">- Aman</h4>
                  </div>
                </div>

                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-left">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="John"
                      className="rounded-full w-20 h-20 mx-auto border-2 border-blue-600"
                    />
                    <p className="text-gray-600 mt-4 italic">
                      "This platform transformed the way I prepare for interviews. Amazing experience!"
                    </p>
                    <h4 className="mt-4 text-lg font-semibold text-blue-600">- John</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CSS Styling */}
          <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .animate-scroll {
      display: flex;
      will-change: transform;
      animation: scroll 20s linear infinite;
    }
  `}</style>
        </section>




        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white px-6 md:px-0">
          <Contect />
        </section>


      </main>

      <footer className="py-8 bg-black text-white text-center">
        <p>© 2024 AI Mock Interview. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default Page;
