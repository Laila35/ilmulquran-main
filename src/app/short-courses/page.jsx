import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import CoursesComp from "@/components/landingPage/OnlineCourses";
import {
  shortCourses,
} from "@/lib/Data";





const ShortCourses = () => {
  const breadcrumbData = {
    id: 1,
    name: "Short Islamic Courses - ilmulQuran Online Academy",
    link: "/",
  };

  return (
    <>
       
<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/courses/short-courses-banner.png"
    fetchPriority="high"
  />

  <title>ilmulQuran Short Islamic Courses Online with Certification</title>
  <meta
    name="description"
    content="Explore focused short Islamic courses at ilmulQuran Academy. Learn Tafsir, Fiqh, Seerah, and more with certified teachers. Flexible timings, one-on-one sessions, and certificate upon completion."
  />
  <meta
    name="keywords"
    content="Short Islamic Courses, Islamic Studies Online, Tafsir, Fiqh, Seerah, Learn Islam Online, Online Islamic Classes, ilmulQuran Short Courses"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/short-courses" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Online Short Islamic Courses – Tafsir, Fiqh & Seerah | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Learn Islam online with our expert-led short courses. Topics include Tafsir, Fiqh, Seerah, and more. Suitable for kids, teens, and adults. Try a free trial class today!"
  />
  <meta property="og:url" content="/short-courses" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="/Images/Courses/short-courses-banner.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Illustration of Quran, books, and Islamic studies symbols"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Short Islamic Courses Online – Flexible & Certified | ilmulQuran"
  />
  <meta
    name="twitter:description"
    content="Join ilmulQuran’s short Islamic courses on Tafsir, Fiqh, and Seerah. Online, flexible, one-on-one learning with free trial and certificate."
  />
  <meta
    name="twitter:image"
    content="/Images/Courses/short-courses-banner.png"
  />

  {/* JSON-LD Schema Markup */}
  <script
    id="jsonld-short-courses"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "ilmulQuran Short Islamic Courses",
        description:
          "Focused online Islamic courses in Tafsir, Fiqh, Seerah and other essential topics. Learn at your own pace with qualified instructors and receive certification.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          description:
            "An online Quran and Islamic studies platform offering one-on-one tutoring with certified teachers for all ages.",
        },
        url: "https://ilmulquran.com/short-courses",
        image: "/Images/Courses/short-courses-banner.png",
        educationalLevel: "beginner, intermediate",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "self-paced", "1-on-1"],
          duration: "P1M",
          audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            ageRange: "10-50",
          },
          offers: {
            "@type": "Offer",
            category: "free trial",
            url: "https://ilmulquran.com/get-register",
          },
        },
        coursePrerequisites: "Basic understanding of Islam",
        educationalCredentialAwarded: "Certificate of Completion",
      }),
    }}
  />
</head>




      {/* <Banner breadcrumbData={breadcrumbData} /> */}
      <div className="max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto px-3 md:px-0 py-3">

        <h2 className="text-center text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl pt-6">
          Discover Our Focused Short Courses
        </h2>

        <p className="text-base font-medium pt-3">
          Our short Islamic courses are designed for those who want to focus on specific topics within a shorter timeframe. These courses cover various aspects of Islamic studies, providing a thorough understanding of each topic. With experienced tutors and flexible learning options, you can gain in-depth knowledge of specific areas of Islam.
        </p>

        <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
          Why Choose Our Short Courses?
        </h2>
        <ul className="list-disc ml-8 space-y-1 pt-3">
          <li>
            <span className="font-bold">Expert Tutors:</span> Learn from qualified and experienced instructors.
          </li>
          <li>
            <span className="font-bold">Flexible Learning:</span> Online classes that fit your schedule.
          </li>
          <li>
            <span className="font-bold">Focused Curriculum:</span> Courses focusing on specific topics of Islamic studies.
          </li>
          <li>
            <span className="font-bold">Interactive Learning:</span> Engaging lessons with multimedia resources, quizzes, and live sessions.
          </li>
          <li>
            <span className="font-bold">Community Support:</span> Join a supportive community of learners and educators.
          </li>
        </ul>

        <div className="flex flex-wrap gap-6 lg:gap-4 xl:gap-8 2xl:gap-3 justify-center">
          <CoursesComp courses={shortCourses} />
        </div>



      
        <p className="text-base font-medium pt-3">
          Ready to focus on specific topics in Islamic studies? <Link href="/get-register" className="text-blue-600 hover:text-blue-700">Explore our short courses</Link> and enroll today!
        </p>
  <h3 className="text-xl pr-4 md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
      </div>
    <div className="pt-3">
      <BonusIslamicLearning />
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>

    </>
  );
};

export default ShortCourses;
