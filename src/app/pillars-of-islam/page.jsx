import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const PillarsOfIslam = () => {
  const breadcrumbData = {
    id: 1,
    name: "Learn Pillars of Islam - Understand the Foundations",
    link: "/",
  };
  return (
    <>

<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <link rel="canonical" href="https://ilmulQuran.com/pillars-of-islam" />

  {/* Preload critical image asset */}
  <link 
    rel="preload" 
    as="image" 
    href="/Images/Courses/five-pillars-of-islam.webp"
    fetchPriority="high"
    imagesrcset="
      /Images/Courses/five-pillars-of-islam.webp 480w,
      /Images/Courses/five-pillars-of-islam.webp 800w
    "
    imagesizes="(max-width: 600px) 480px, 800px"
  />

  {/* Optimized Page Title */}
  <title>Pillars of Islam Course | Learn Islam’s Foundations Online</title>

  {/* Enhanced Meta Description */}
  <meta 
    name="description" 
    content="Learn the 5 Pillars of Islam in depth with ilmulQuran's online course. Certified teachers, flexible schedule & interactive one-on-one sessions. Enroll now!" 
  />

  {/* Expanded Keywords */}
  <meta 
    name="keywords" 
    content="Learn Pillars of Islam, Online Islam Course, Five Pillars of Islam, Islamic Beliefs, Shahada, Salah, Zakat, Sawm, Hajj, Beginner Islam Course" 
  />

  {/* Open Graph Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulQuran.com/pillars-of-islam" />
  <meta property="og:title" content="🕌 Learn Pillars of Islam Online | Certified Islamic Course" />
  <meta property="og:description" content="Explore the Five Pillars of Islam with expert tutors. Online classes designed for all ages. Start your Islamic journey today with ilmulQuran." />
  <meta property="og:image" content="/Images/Courses/five-pillars-of-islam.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Illustration of the five pillars of Islam with educational content" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ilmulquran" />
  <meta name="twitter:title" content="📚 Pillars of Islam Course – Learn Faith, Prayer, Zakat & More" />
  <meta name="twitter:description" content="Interactive course on Islam’s 5 Pillars. Trusted by 10,000+ students. Live sessions, recorded lessons, and free trial!" />
  <meta name="twitter:image" content="/Images/Courses/five-pillars-of-islam.webp" />

  {/* Structured Data */}
  <Script
    id="pillars-islam-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Pillars of Islam – Online Course",
        description: "An in-depth online course covering the Five Pillars of Islam including Shahada, Salah, Zakat, Sawm, and Hajj. Delivered by certified Islamic tutors.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulQuran.com"
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "self-paced", "live"],
          duration: "P2M",
          offers: {
            "@type": "Offer",
            url: "https://ilmulQuran.com/get-register",
            category: "free trial"
          }
        },
        educationalCredentialAwarded: "Certificate of Completion",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1800",
          bestRating: "5"
        }
      })
    }}
  />

  {/* SEO & Mobile Enhancements */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="ilmulQuran Academy" />
  <meta name="geo.region" content="Global" />
  <meta name="copyright" content="ilmulQuran" />
  <meta name="apple-mobile-web-app-title" content="Pillars of Islam Course" />
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
    <h2 className="text-[#003366] mb-10 text-center font-bold text-4xl">
      Comprehensive Course on the Pillars of Islam
    </h2>

    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2">
        <p className="text-base text-gray-700 leading-relaxed">
          Our Learn Pillars of Islam course is designed to help you
          understand the foundational principles of Islam. This course
          covers the five pillars of Islam, providing a solid understanding
          of each pillar and its significance. With the guidance of
          experienced tutors, you will learn how to practice these pillars
          in your daily life.
        </p>
        <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
          Why Choose Our Learn Pillars of Islam Course?
        </h2>
        <p className="text-base text-gray-700 leading-relaxed pt-2">
          Our course offers several benefits:
        </p>
        <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
          <li>
            <span className="font-semibold text-[#1a73e8]">Personal Guidance:</span> One-on-one sessions with expert tutors.
          </li>
          <li>
            <span className="font-semibold text-[#1a73e8]">Flexible Learning:</span> Online classes that fit your schedule.
          </li>
          <li>
            <span className="font-semibold text-[#1a73e8]">Complete Curriculum:</span> Covers all five pillars of Islam in detail.
          </li>
        </ul>
      </div>

      <div className="w-full lg:w-1/2 order-first lg:order-last">
        <Image
          width={600}
          height={600}
          src="/Images/Courses/five-pillars-of-islam.webp"
          alt="Pillar of Islam"
          style={{ borderRadius: "25px" }}
        />
      </div>
    </div>

    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
      Course Objectives
    </h2>
    <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
      <li>
        <span className="font-semibold text-[#1a73e8]">Understand the Five Pillars:</span> Learn the significance of each pillar of Islam.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Practice Rituals:</span> Gain practical knowledge on performing each pillar.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Develop Understanding:</span> Understand the spiritual and practical aspects of the pillars.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Improve Application:</span> Learn how to incorporate the pillars into your daily life.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Gain Insight:</span> Understand the historical and cultural context of the pillars.
      </li>
    </ul>

    <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Course Syllabus
    </h3>
    <p className="text-base text-gray-700 leading-relaxed pt-3">
      The Learn Pillars of Islam course includes:
    </p>
    <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
      <li>
        <span className="font-semibold text-[#1a73e8]">Introduction to the Five Pillars:</span> Overview of the pillars of Islam.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Shahada (Faith):</span> Understanding the declaration of faith.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Salah (Prayer):</span> Learning how to perform the five daily prayers.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Zakat (Charity):</span> Understanding the importance and calculation of Zakat.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Sawm (Fasting):</span> Learning the rules and benefits of fasting during Ramadan.
      </li>
      <li>
        <span className="font-semibold text-[#1a73e8]">Hajj (Pilgrimage):</span> Preparing for and understanding the pilgrimage to Mecca.
      </li>
    </ul>

    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
      Call to Action
    </h2>
    <p className="text-base text-gray-700 leading-relaxed pt-3">
      Ready to understand the foundations of Islam? Enroll in our Learn
      Pillars of Islam course today!
    </p>

    <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
                      <BonusIslamicLearning />
      
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>

    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
      Call to Action
    </h2>
    <p className="text-base text-gray-700 leading-relaxed pt-4">
      Ready to memorize key Quranic Surahs?{" "}
      <Link href="/get-register" className="text-blue-600 no-underline">
        Enroll in our Memorization of Selected Surahs course today!
      </Link>
    </p>


  </div>
</div>
</div>
</div>


    </>
  );
};

export default PillarsOfIslam;
