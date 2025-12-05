import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";


  


const ReadingWithTajweed = () => {
  const breadcrumbData = {
    id: 1,
    name: "Quran Reading with Tajweed: Perfect Your Recitation Online",
    link: "/",
  };


  return (
    <>
<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <link rel="canonical" href="https://ilmulquran.com/quran-reading-with-tajweed" />
  
  {/* Preload critical assets */}
  <link 
    rel="preload" 
    as="image" 
    href="/Images/Courses/Quran-reading-tajweed.webp"
    fetchPriority="high"
    imagesrcset="
     /Images/Courses/Quran-reading-tajweed.webp 480w,
      /Images/Courses/Quran-reading-tajweed.webp 800w
    "
    imagesizes="(max-width: 600px) 480px, 800px"
  />

  {/* Optimized Title (60 characters) */}
  <title>Certified Tajweed Course: Master Quran Recitation Online </title>

  {/* Enhanced Meta Description (150 characters) */}
  <meta 
    name="description" 
    content="Master Quran recitation with certified Tajweed scholars. 98% accuracy rate, 10,000+ students trained. Start with free assessment!" 
  />

  {/* Expanded Keywords */}
  <meta 
    name="keywords" 
    content="Tajweed Certification Course, Quran Phonetics Training, Arabic Pronunciation Rules, Online Tajweed Classes, Quran Recitation Correction, Certified Tajweed Teachers, Quran Reading Mastery" 
  />

  {/* Open Graph Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulquran.com/quran-reading-with-tajweed" />
  <meta property="og:title" content="📖 Quran Tajweed Mastery Course | Certified Online Program" />
  <meta property="og:description" content="3-Level Tajweed Certification: From basic rules to professional recitation. 97% Student Success Rate | Free Trial Lesson Available" />
  <meta property="og:image" content="/Images/Courses/Quran-reading-tajweed.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Student practicing Quran recitation with tajweed teacher" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ilmulquran" />
  <meta name="twitter:title" content="🔊 Master Tajweed Rules Online: Perfect Your Quran Recitation!" />
  <meta name="twitter:description" content="Join 12,500+ students in our structured Tajweed program. Satisfaction guarantee & certification included!" />
  <meta name="twitter:image" content="/Images/Courses/Quran-reading-tajweed.webp" />

  {/* Structured Data */}
  <Script
    id="tajweed-course-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Professional Tajweed Certification Program",
        description: "Comprehensive 6-month course covering articulation points, pronunciation rules, and Quranic recitation techniques",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com"
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "one-on-one"],
          duration: "P6M",
          offers: {
            "@type": "Offer",
            category: "free trial",
            url: "https://ilmulquran.com/get-register"
          }
        },
        educationalCredentialAwarded: "Tajweed Mastery Certification",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.95",
          ratingCount: "2345",
          bestRating: "5"
        }
      })
    }}
  />

  {/* Additional SEO Enhancements */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="ilmulQuran Tajweed Academy" />
  <meta name="geo.region" content="Global" />
  <meta name="copyright" content="ilmulQuran" />

  {/* Mobile Optimization */}
  <meta name="apple-mobile-web-app-title" content="Tajweed Mastery" />
  <meta name="theme-color" content="#2A593F" />
</head>

             {/* <Banner breadcrumbData={breadcrumbData} /> */}

  {/* Main Content */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

{/* Form Column */}
<div className="w-full lg:w-1/3 order-1 lg:order-2">
  <StickyForm 
    courseName={breadcrumbData.name.split("–")[0].trim()} 
  />
</div>



<div className="w-full lg:w-2/3 order-2 lg:order-1">
  <div className="bg-gray-100 rounded-lg shadow-lg p-8">
    <h2 className="text-[#003366] mb-5 text-center font-bold text-4xl">
      Master the Art of Quranic Recitation with Tajweed
    </h2>

    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-1/2">
        <p className="text-base font-medium">
          Enhance your Quranic recitation with our "Quran Reading with Tajweed" course, designed for all ages. This course focuses on perfecting your pronunciation and applying Tajweed rules accurately through interactive and flexible online sessions.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
          Key Benefit
        </h3>

        <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
          <li>
            <span className="font-bold text-[#1a73e8]">Personalized 1 on 1 Sessions:</span> Learn with dedicated male or female instructors tailored to your learning style.
          </li>
          <li>
            <span className="font-bold text-[#1a73e8]">24/7 Availability:</span> Flexible scheduling to accommodate any time zone and busy lifestyle.
          </li>
          <li>
            <span className="font-bold text-[#1a73e8]">Experienced Instructors:</span> Benefit from instructors who have successfully guided over 300 students.
          </li>
        </ul>
      </div>

      <div className="w-full lg:w-1/2 order-first lg:order-last">
        <Image
          width={600}
          height={600}
          src="/Images/Courses/Quran-reading-tajweed.webp"
          alt="Quran Reading With Tajweed"
          style={{ borderRadius: '25px' }} // This rounds the image
        />
      </div>
    </div>

    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
      What is Tajweed?
    </h2>
    <p className="text-base font-medium pt-4">
      Tajweed refers to the set of rules governing the way in which the words of the Quran should be pronounced during recitation. Learning Tajweed ensures that the recitation of the Quran is done with proper articulation and respect.
    </p>

    <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Why Learn Quran Reading with Tajweed Online?
    </h3>
    <p className="text-base font-medium pt-3">
      Our online platform offers several advantages:
    </p>
    <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
      <li>
        <span className="font-bold text-[#1a73e8]">Convenience:</span> Access lessons from home or on the go.
      </li>
      <li>
        <span className="font-bold text-[#1a73e8]">Interactive Learning:</span> Utilize multimedia resources, live sessions, and immediate feedback.
      </li>
      <li>
        <span className="font-bold text-[#1a73e8]">Cost-Effectiveness:</span> Save on travel and materials with our online resources.
      </li>
    </ul>

    <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      How Our Course Works
    </h3>
    <p className="text-base font-medium pt-3">
      Our "Quran Reading with Tajweed" course is structured to gradually improve your recitation skills:
    </p>
    <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
      <li>
        <span className="font-bold text-[#1a73e8]">Weeks 1-4:</span> Introduction to basic Tajweed rules and pronunciation practice.
      </li>
      <li>
        <span className="font-bold text-[#1a73e8]">Weeks 5-10:</span> Advanced Tajweed techniques and application in Quranic verses.
      </li>
      <li>
        <span className="font-bold text-[#1a73e8]">Regular Reviews:</span> Oral tests and quizzes to reinforce learning and track progress.
      </li>
    </ul>

          <BonusIslamicLearning />

     <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>


  </div>
</div>
</div>
</div>

    </>
  );
};

export default ReadingWithTajweed;
