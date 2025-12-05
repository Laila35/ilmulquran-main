"use client";
import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";
import Image from "next/image";
import StickyForm from "@/components/StickyForm";
import Script from "next/script";

const LearnArabicOnline = () => {
  const breadcrumbData = {
    id: 1,
    name: "Learn Arabic Online - Master the Language with ilmulQuran",
    link: "/",
  };

  return (
    <>
<head>
  <title>Online Arabic Classes | Quranic & Modern Arabic Fluency</title>
  <meta 
    name="description" 
    content="Master Arabic online with certified teachers. Learn Quranic Arabic & modern communication skills. 98% success rate with personalized 1-on-1 classes. Free trial available!" 
  />
  <meta
    name="keywords"
    content="Quranic Arabic course, Modern Standard Arabic, Arabic grammar online, Learn Arabic alphabet, Arabic speaking classes, Arabic writing course, Online Arabic tutor, Arabic for Quran understanding"
  />
  <link rel="canonical" href="https://ilmulquran.com/learn-arabic-online/" />
  
  {/* Open Graph Tags */}
  <meta property="og:title" content="Professional Arabic Course Online | Quranic & Conversational Skills" />
  <meta property="og:description" content="Comprehensive Arabic program covering reading, writing, and speaking. Certified native teachers with 10+ years experience. Start learning today!" />
  <meta property="og:image" content="https://ilmulquran.com/Images/Courses/Learn-Arabic-online.webp" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Master Arabic Online - Read Quran & Speak Fluently" />
  <meta name="twitter:description" content="Interactive Arabic classes with cultural immersion. Flexible schedules & progress tracking. Enroll now!" />
  
  {/* Schema Markup */}
  <Script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Comprehensive Arabic Language Program",
        "description": "600+ hour curriculum covering Modern Standard Arabic and Quranic Arabic",
        "provider": {
          "@type": "Organization",
          "name": "ilmulQuran",
          "sameAs": "https://ilmulquran.com"
        },
        "educationalLevel": "Beginner to Advanced",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["online", "one-on-one"],
          "duration": "P9M"
        }
      })
    }}
  />
</head>
      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="w-full md:w-4/5 xl:w-full mx-auto px-3 mt-10 py-3">
        <div className="max-w-6xl xl:max-w-7xl w-full px-4 py-8 bg-gray-100 rounded-lg border border-gray-200 shadow-lg">
          {/* Mobile: show form at top */}
          <div className="block lg:hidden mb-8">
            <StickyForm courseName="Learn Arabic Online" />
          </div>


          <h2 className="text-center text-[#003366] mb-12 font-bold text-2xl md:text-3xl lg:text-4xl">
            Master Arabic: From Alphabet to Quranic Fluency
          </h2>

          {/* Layout with main content left and sticky form right on desktop */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-3/4">

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                  <p className="text-base font-medium mb-6 text-center lg:text-left">
                    Our{" "}
                    <Link href="/quranic-arabic-course" className="text-blue-600">
                      Quranic Arabic program
                    </Link>{" "}
                    combines modern teaching methods with traditional learning.
                    Perfect for:
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 text-center lg:text-left">
                    Why Learn Arabic with Us?
                  </h2>
                  <ul className="list-disc ml-6 space-y-2 text-center lg:text-left">
                    <li>
                      <span className="font-semibold">Dual Focus:</span> Master both{" "}
                      <Link href="/quran-with-translation" className="text-blue-600">
                        Quranic texts
                      </Link>{" "}
                      and modern conversation
                    </li>
                    <li>
                      <span className="font-semibold">Cultural Immersion:</span> Learn
                      through{" "}
                      <Link href="/islamic-history" className="text-blue-600">
                        Islamic history
                      </Link>{" "}
                      and Arab traditions
                    </li>
                    <li>
                      <span className="font-semibold">Structured Progress:</span> From{" "}
                      <Link href="/learn-noorani-qaida-online" className="text-blue-600">
                        Noorani Qaida
                      </Link>{" "}
                      to advanced literature
                    </li>
                  </ul>
                </div>

                <div className="w-full lg:w-1/2">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/Learn-Arabic-online.webp"
                    alt="Student learning Arabic online with native teacher"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mt-8 mb-4 text-center">
                Curriculum Highlights
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-center lg:text-left">
                <li>
                  <span className="font-semibold">Quranic Foundations:</span> Understand{" "}
                  <Link href="/learn-tafsir-online" className="text-blue-600">
                    Tafsir
                  </Link>{" "}
                  through original Arabic
                </li>
                <li>
                  <span className="font-semibold">Grammar Mastery:</span> Comprehensive{" "}
                  <Link href="/arabic-grammar-course" className="text-blue-600">
                    Sarf & Nahw
                  </Link>{" "}
                  studies
                </li>
                <li>
                  <span className="font-semibold">Practical Skills:</span> Business Arabic
                  and media comprehension
                </li>
              </ul>

              <h3 className="text-lg md:text-xl font-bold text-[#003366] mt-8 mb-4 text-center">
                Learning Path
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-center lg:text-left">
                <li>Beginner: Alphabet → Basic phrases</li>
                <li>Intermediate: Grammar → Quranic reading</li>
                <li>Advanced: Literature analysis → Professional Arabic</li>
              </ul>

              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#003366]">
                  Complementary Courses
                </h3>
                <ul className="list-disc ml-8 space-y-2 pt-3">
                  <li>
                    <Link href="/quranic-arabic-for-beginners" className="text-blue-600">
                      Quranic Arabic Starter Course
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-islamic-studies" className="text-blue-600">
                      Islamic Studies Program
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-ten-qirat-online" className="text-blue-600">
                      Qirat Learning
                    </Link>
                  </li>
                </ul>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mt-8 mb-4 text-center">
                Course Objectives
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-center lg:text-left">
                <li>
                  <span className="font-semibold">Learn Basic Arabic Grammar:</span>{" "}
                  Understand the fundamental rules of Arabic grammar.
                </li>
                <li>
                  <span className="font-semibold">Develop Vocabulary:</span> Build a
                  strong vocabulary for everyday use and specific contexts.
                </li>
                <li>
                  <span className="font-semibold">Practice Reading and Writing:</span>{" "}
                  Learn to read and write Arabic script correctly.
                </li>
                <li>
                  <span className="font-semibold">Improve Speaking Skills:</span>{" "}
                  Practice speaking Arabic with proper pronunciation and fluency.
                </li>
                <li>
                  <span className="font-semibold">Understand Arabic Culture:</span> Gain
                  insights into Arabic culture and its influence on the language.
                </li>
              </ul>

              <h3 className="text-lg text-left md:text-xl font-bold text-[#003366] mt-8 mb-4 ">
                Course Syllabus
              </h3>
              <p className="text-base font-medium mb-4 text-center">
                The Learn Arabic Online course includes:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-center lg:text-left">
                <li>
                  <span className="font-semibold">Introduction to Arabic:</span> Basics
                  of the Arabic alphabet and pronunciation.
                </li>
                <li>
                  <span className="font-semibold">Basic Grammar:</span> Understanding
                  nouns, verbs, and sentence structure.
                </li>
                <li>
                  <span className="font-semibold">Building Vocabulary:</span> Common
                  words and phrases for daily conversation.
                </li>
                <li>
                  <span className="font-semibold">Reading and Writing:</span> Practice
                  reading and writing Arabic script.
                </li>
                <li>
                  <span className="font-semibold">Speaking Practice:</span> Conversational
                  Arabic for real-life situations.
                </li>
                <li>
                  <span className="font-semibold">Intermediate Grammar:</span> Advanced
                  grammar rules and sentence construction.
                </li>
                <li>
                  <span className="font-semibold">Cultural Insights:</span> Understanding
                  Arabic customs and traditions.
                </li>
                <li>
                  <span className="font-semibold">Advanced Practice:</span> Complex texts
                  and advanced conversation skills.
                </li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mt-12 mb-4 text-center">
                Call to Action
              </h2>
              <p className="text-base font-medium text-center">
                Ready to learn Arabic and explore a new culture?{" "}
                <Link href="/get-register" className="text-blue-600 hover:underline">
                  Enroll in our Learn Arabic Online course today!
                </Link>
              </p>

              <div className="pt-6 text-center">
                <button
                  aria-label="enroll now"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full"
                >
                  Enroll Now
                </button>

                <h3 className="text-lg md:text-xl font-bold text-[#003366] mt-8 mb-4 text-center">
                  Student Testimonials
                </h3>
                <div className="pt-4 text-center">
    <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />                </div>
              </div>
            </div>
            {/* Sticky form sidebar on desktop */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="sticky top-24">
                <StickyForm courseName="Learn Arabic Online" />
              </div>
            </div>




          </div>
        </div>
      </div>
    </>
  );
};

export default LearnArabicOnline;
