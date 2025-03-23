"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Mail, Phone, MapPin, Heart, GraduationCap, Users, Coffee, Star, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AnimatedCharacter } from './components/AnimatedCharacter';
import { SparkleEffect } from './components/SparkleEffect';
import ProfilePicture from '@/assets/images/vinay_thakkar_profile.jpg';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

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

  return (
    <main ref={mainRef} className="min-h-screen bg-gradient-to-b from-background via-background to-accent overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <SparkleEffect />
        <div className="container px-4 text-center relative animate-section z-10">
          <div className="gradient-border rounded-sm mx-auto mb-12 md:p-1 glow h-[440px] md:h-60 flex justify-center items-center align-middle">
            <div className='flex flex-col-reverse md:flex-row items-center gap-8'>
              <div className='flex flex-col gap-6'>

                <h1 className="text-5xl md:text-7xl font-bold white-text">VINAY THAKKAR</h1>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <p className="text-xl text-primary/80">Software Engineer</p>
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden transition-transform duration-500 hover:scale-105 animate-float">
                <img
                  src={ProfilePicture.src}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>


          <div className="flex flex-col items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 animate-bounce glow text-white"
            >
              Scroll To View My Profile
            </Button>

            {/* Down Arrow with Animation */}
            <div className="mt-2 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 16a1 1 0 0 1-.71-.29l-5-5a1 1 0 1 1 1.42-1.42L12 13.59l4.29-4.3a1 1 0 1 1 1.42 1.42l-5 5A1 1 0 0 1 12 16Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

        </div>
        {/* <AnimatedCharacter
          imageUrl="https://assets8.lottiefiles.com/private_files/lf30_WdTEui.json"
          position="left"
        />
        <AnimatedCharacter
          imageUrl="https://assets5.lottiefiles.com/packages/lf20_v1yudlrx.json"
          position="right"
          offset={300}
        /> */}
      </section>

      {/* Personal Details */}
      <section className="md:py-32 py-16 animate-section relative">
        <div className="absolute inset-0 animated-bg opacity-10"></div>
        <div className="container px-4 relative">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Personal Details</h2>
          <div className="grid gap-8 max-w-xl mx-auto">
            <div className="glass-card p-8 rounded-2xl card-hover-effect">
              <dl className="space-y-6">
                <div>
                  <dt className="text-sm text-primary/60">Date of Birth</dt>
                  <dd className="text-lg font-medium">February 06, 1998 </dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Birth Time</dt>
                  <dd className="text-lg font-medium">10:45 PM</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Place of Birth</dt>
                  <dd className="text-lg font-medium">Bhavnagar (Gujarat)</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Manglik</dt>
                  <dd className="text-lg font-medium">No</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Complexion</dt>
                  <dd className="text-lg font-medium">Fair</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Height</dt>
                  <dd className="text-lg font-medium">5'2"</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Weight</dt>
                  <dd className="text-lg font-medium">68 Kg</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Religion & Caste</dt>
                  <dd className="text-lg font-medium">Sindhi Hindu, Lohana</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Education</dt>
                  <dd className="text-lg font-medium">Master of Computer Application</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Profession</dt>
                  <dd className="text-lg font-medium">Software Engineer</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>

                <div>
                  <dt className="text-sm text-primary/60">Company</dt>
                  <dd className="text-lg font-medium">Bytes Technolabs, Ahmedabad</dd>
                  <div className="progress-bar mt-2" data-progress="100%"></div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Academic & Professional */}
      {/* <section className="md:py-32 py-16 animate-section">
        <div className="container px-4">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Academic & Professional</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                Education Journey
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 pb-8 border-l-2 border-blue-400/30">
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <p className="font-semibold text-xl mb-2">Master of Computer Application</p>
                  <p className="text-primary/60">Gujarat University (2018-2021)</p>
                </div>
                <div className="relative pl-8 border-l-2 border-blue-400/30">
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <p className="font-semibold text-xl mb-2">Bachelor of Computer Application</p>
                  <p className="text-primary/60">Maharaja Krishnakumarsinhji Bhavnagar University (2015-2018)</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-purple-400" />
                Professional Journey
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 pb-8 border-l-2 border-purple-400/30">
                  <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px] top-0"></div>
                  <p className="font-semibold text-xl mb-2">Software Enginer</p>
                  <p className="text-primary/60">2022 - Present</p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-purple-400/20 text-sm">Team Lead</span>
                    <span className="px-3 py-1 rounded-full bg-purple-400/20 text-sm">Full Stack</span>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-purple-400/30">
                  <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[9px] top-0"></div>
                  <p className="font-semibold text-xl mb-2">Software Engineer at Microsoft</p>
                  <p className="text-primary/60">2018 - 2020</p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-purple-400/20 text-sm">Backend</span>
                    <span className="px-3 py-1 rounded-full bg-purple-400/20 text-sm">Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Family Details */}
      <section className="md:py-32 py-16 animate-section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent"></div>
        <div className="container px-4 relative">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Family Details</h2>
          <div className="max-w-xl mx-auto">
            <div className="glass-card p-4 md:p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-400" />
                Family Background
              </h3>
              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-white/5">
                  <p className="font-semibold text-xl mb-2">Grand Father</p>
                  <p className="text-primary/60">Late. Shri MohanLal Golaram Thakkar</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5">
                  <p className="font-semibold text-xl mb-2">Grand Mother</p>
                  <p className="text-primary/60">Late Smt. Bhagwatiben Mohanlal Thakkar</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5">
                  <p className="font-semibold text-xl mb-2">Father</p>
                  <p className="text-primary/60">Late. Shri Rajkumar MohanLal Thakkar</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5">
                  <p className="font-semibold text-xl mb-2">Mother</p>
                  <p className="text-primary/60">Smt. Bhartiben Rajkumar Thakkar</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5">
                  <p className="font-semibold text-xl mb-2">Mother's Contact No</p>
                  <Link href="tel:+919375293636" className="text-primary/60">+9193752 93636</Link>
                </div>
                <div className="p-6 rounded-xl bg-white/5">
                  <p className="font-semibold text-xl mb-2">Siblings</p>
                  <p className="text-primary/60">1 Elder Sister (not Married)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="md:py-32 py-16 animate-section">
        <div className="container px-4">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Hobbies & Interests</h2>
          <div className="max-w-xl mx-auto">
            <div className="glass-card p-4 md:p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Coffee className="h-8 w-8 text-purple-400" />
                What I Love
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {hobbies.map((hobby, index) => {
                  return (
                    <div
                      key={index}
                      className="p-6 text-center rounded-xl bg-white/5 transition-transform duration-300 shadow-lg"
                    >
                      <div className="flex justify-center items-center w-24 h-24 mx-auto bg-white/10 rounded-lg overflow-hidden">
                        <DotLottieReact
                          src={hobby.animation}
                          loop
                          autoplay
                          playOnHover={false}
                          className="w-20 h-20"
                        />
                      </div>
                      <p className="font-medium mt-3 text-white">{hobby.text}</p>
                    </div>
                  );
                })
                }

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="md:py-32 py-16 animate-section relative">
        <div className="absolute inset-0 animated-bg opacity-10"></div>
        <SparkleEffect />
        <div className="container px-4 relative">
          <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="glass-card p-4 md:p-8 rounded-2xl card-hover-effect">
              <div className="grid gap-12">
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-white/5 flex items-center gap-4 hover:scale-105 transition-transform">
                    <div className="h-12 w-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60">Email</p>
                      <Link href={'mailto:thakkarvinay6293@gmail.com'} className="font-medium">thakkarvinay6293@gmail.com</Link>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 flex items-center gap-4 hover:scale-105 transition-transform">
                    <div className="h-12 w-12 rounded-full bg-purple-400/20 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-purple-400" />
                    </div>
                    <div >
                      <p className="text-sm text-primary/60">Phone</p>
                      <Link href='tel:+919737050180' className="font-medium">+91 97370 50180</Link>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 flex items-start gap-4 hover:scale-105 transition-transform">
                    <div className="h-12 w-12 min-w-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60">Location</p>
                      <p className="font-medium whitespace-pre-wrap">{`"Laxmi Niwas", 103/4,\nRasala Camp, Uper Coat,\nBhavnagar - 364 001`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <AnimatedCharacter
          imageUrl="https://assets5.lottiefiles.com/packages/lf20_v1yudlrx.json"
          position="left"
        /> */}


      </section>

      {/* <section className="md:py-32 py-16 animate-section relative">
          <div className="absolute inset-0 animated-bg opacity-10"></div>
          <SparkleEffect />
          <div className="container px-4 relative">
            <div className="flex justify-center items-center w-80 h-80 mx-auto bg-white/10 rounded-lg overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/882b6b48-3930-4ab1-9529-ef597482132a/JmV8Bqf6lV.lottie"
                loop
                autoplay
                className="w-64 h-64"
              />
            </div>
          </div>
        </section> */}
    </main>
  );
}