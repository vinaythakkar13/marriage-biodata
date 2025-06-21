"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Users, Coffee, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SparkleEffect } from './components/SparkleEffect';
import ProfilePicture from '@/assets/images/vinay_thakkar_profile.jpg';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);
import dynamic from 'next/dynamic';
import Card from './components/ExpandableCard';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const personalDetailsRef = useRef<HTMLElement>(null);

  const hobbies = [
    { animation: "https://lottie.host/a27ddeb4-4bd0-470b-8084-2061bc4859f3/jRVXrsWOIc.lottie", text: "Coding" },
    { animation: "https://lottie.host/52e00e5a-eae3-4f34-b520-9db1e9a6b1ef/EBjBXyImf1.lottie", text: "Music" },
    { animation: "https://lottie.host/bd190003-1ff4-4ea2-9a50-cea5f0cd560a/xVLA7rW7SX.lottie", text: "Singing" },
    { animation: "https://lottie.host/48425eb6-dfed-4a52-a933-6678806298e6/8U64nTXiHR.lottie", text: "Drawing" }
  ];

  useEffect(() => {
    if (!mainRef.current) return;

    const sections = gsap.utils.toArray<HTMLElement>('.animate-section');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Parallax effect for hero section
    gsap.to(".hero-pattern", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Animate progress bars
    gsap.utils.toArray<HTMLElement>('.progress-bar').forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: bar.dataset.progress || '100%',
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%',
          }
        }
      );
    });
  }, []);

  const DotLottieReact = dynamic(
    () => import('@lottiefiles/dotlottie-react').then(mod => mod.DotLottieReact),
    { ssr: false }
  );

  // Smooth scroll function
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <main ref={mainRef} className="min-h-screen bg-gradient-to-b from-background via-background to-accent overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-blue-100/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-transparent to-purple-200/20"></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-full blur-xl"></div>
        </div>

        <div className="hero-pattern absolute inset-0 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
        <SparkleEffect />

        <div className="container px-4 text-center relative animate-section z-10 mx-auto">
          {/* Enhanced profile card with better styling */}
          <div className="gradient-border-dark rounded-2xl mx-auto mb-12 md:p-2 glow h-[480px] md:h-72 flex justify-center items-center align-middle backdrop-blur-sm bg-gradient-to-br from-[rgb(0,0,102)] to-[rgb(102,153,255)]">
            <div className='flex flex-col-reverse md:flex-row items-center gap-8 p-6'>
              <div className='flex flex-col gap-6'>
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  VINAY THAKKAR
                </h1>
                <div className='flex flex-col gap-2 md:gap-0'>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 drop-shadow-sm" />
                    <p className="text-xl text-white font-medium">Software Engineer</p>
                    <Star className="w-5 h-5 text-yellow-500 drop-shadow-sm" />
                  </div>
                  <p className="text-white text-left text-lg max-w-md">
                    Passionate developer crafting digital experiences with modern technologies
                  </p>
                </div>
              </div>
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden transition-transform duration-500 hover:scale-105 animate-float shadow-2xl border-4 border-white">
                <img
                  src={ProfilePicture.src}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Profile image glow effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full"></div> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection(personalDetailsRef)}
              className="bg-gradient-to-r animate-bounce from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 glow text-white shadow-xl px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Scroll To View My Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 16a1 1 0 0 1-.71-.29l-5-5a1 1 0 1 1 1.42-1.42L12 13.59l4.29-4.3a1 1 0 1 1 1.42 1.42l-5 5A1 1 0 0 1 12 16Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>

        </div>
      </section>

      {/* Personal Details */}
      <section ref={personalDetailsRef} className="md:py-32 py-16 animate-section relative smooth-scroll-target">
        <div className="absolute inset-0 animated-bg opacity-10"></div>
        <div className="container px-4 relative mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Personal Details</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="glass-card glass-card-elegant p-8 rounded-3xl card-hover-effect">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Date of Birth</dt>
                    <dd className="text-lg font-semibold text-gray-800">February 06, 1998 </dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Birth Time</dt>
                    <dd className="text-lg font-semibold text-gray-800">10:45 PM</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Place of Birth</dt>
                    <dd className="text-lg font-semibold text-gray-800">Bhavnagar (Gujarat)</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Manglik</dt>
                    <dd className="text-lg font-semibold text-gray-800">No</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Complexion</dt>
                    <dd className="text-lg font-semibold text-gray-800">Fair</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Height</dt>
                    <dd className="text-lg font-semibold text-gray-800">5'2"</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Weight</dt>
                    <dd className="text-lg font-semibold text-gray-800">68 Kg</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Religion & Caste</dt>
                    <dd className="text-lg font-semibold text-gray-800">Sindhi Hindu, Lohana</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Education</dt>
                    <dd className="text-lg font-semibold text-gray-800">Master of Computer Application</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Profession</dt>
                    <dd className="text-lg font-semibold text-gray-800">Software Engineer</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500 font-medium">Company</dt>
                    <dd className="text-lg font-semibold text-gray-800">Bytes Technolabs, Ahmedabad</dd>
                    <div className="progress-bar mt-2" data-progress="100%"></div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Details */}
      <section className="md:py-32 py-16 animate-section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent"></div>
        <div className="container px-4 relative mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Family Details</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="glass-card glass-card-primary p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-gray-800">
                  <Users className="h-8 w-8 text-blue-500" />
                  Family Background
                </h3>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-sm">
                    <p className="font-semibold text-xl mb-2 text-gray-800">Grand Father</p>
                    <p className="text-gray-600">Late. Shri MohanLal Golaram Thakkar</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-sm">
                    <p className="font-semibold text-xl mb-2 text-gray-800">Grand Mother</p>
                    <p className="text-gray-600">Late Smt. Bhagwatiben Mohanlal Thakkar</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-sm">
                    <p className="font-semibold text-xl mb-2 text-gray-800">Father</p>
                    <p className="text-gray-600">Late. Shri Rajkumar MohanLal Thakkar</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-sm">
                    <p className="font-semibold text-xl mb-2 text-gray-800">Mother</p>
                    <p className="text-gray-600">Smt. Bhartiben Rajkumar Thakkar</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-sm">
                    <p className="font-semibold text-xl mb-2 text-gray-800">Mother's Contact No</p>
                    <Link href="tel:+919375293636" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">{`+91 93752 93636`}</Link>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-sm">
                    <p className="font-semibold text-xl mb-2 text-gray-800">Siblings</p>
                    <p className="text-gray-600">1 Elder Sister (not Married)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="md:py-32 py-16 animate-section">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Hobbies & Interests</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="glass-card glass-card-elegant p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-gray-800">
                  <Coffee className="h-8 w-8 text-purple-500" />
                  What I Love
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {hobbies.map((hobby, index) => {
                    return (
                      <div
                        key={index}
                        className="p-6 text-center rounded-2xl bg-white/70 border border-white/80 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white/90"
                      >
                        <div className="flex justify-center items-center w-20 h-20 mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-md border border-white/60">
                          <DotLottieReact
                            src={hobby.animation}
                            loop
                            autoplay
                            playOnHover={false}
                            className="w-16 h-16"
                          />
                        </div>
                        <p className="font-semibold mt-4 text-gray-800">{hobby.text}</p>
                      </div>
                    );
                  })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="md:py-32 py-16 animate-section relative">
        <div className="absolute inset-0 animated-bg opacity-10"></div>
        <SparkleEffect />
        <div className="container px-4 relative mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Get in Touch</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="glass-card glass-card-primary p-8 rounded-3xl card-hover-effect">
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-sm flex items-center gap-4 hover:scale-105 transition-transform">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-md">
                      <Mail className="h-7 w-7 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <Link href={'mailto:thakkarvinay6293@gmail.com'} className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">thakkarvinay6293@gmail.com</Link>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-sm flex items-center gap-4 hover:scale-105 transition-transform">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shadow-md">
                      <Phone className="h-7 w-7 text-purple-600" />
                    </div>
                    <div >
                      <p className="text-sm text-gray-500 font-medium">Phone</p>
                      <Link href='tel:+919737050180' className="font-semibold text-gray-800 hover:text-purple-600 transition-colors">+91 97370 50180</Link>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/60 border border-white/80 backdrop-blur-sm flex items-start gap-4 hover:scale-105 transition-transform">
                    <div className="h-14 w-14 min-w-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-md">
                      <MapPin className="h-7 w-7 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Location</p>
                      <p className="font-semibold text-gray-800 whitespace-pre-wrap">{`"Laxmi Niwas", 103/4,\nRasala Camp, Uper Coat,\nBhavnagar - 364 001`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}