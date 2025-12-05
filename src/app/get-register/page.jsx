import Register from "@/components/landingPage/Register";
import SpecialClasses from "@/components/landingPage/SpecialClasses";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";


const GetRegister = () => {
  return (
    <>

 <head>
  <title>Register for Free Trial Classes | ilmulQuran Online</title>
  <meta
    name="description"
    content="Sign up for a free trial class at ilmulQuran Online Academy. Experience our high-quality Quranic and Islamic education with no obligation. Register now!"
  />
  <meta
    name="keywords"
    content="Free Trial Classes, Quran Classes Online, Register for Free Quran Trial, Online Quran Classes, Free Trial ilmulQuran"
  />
  <link rel="canonical" href="https://ilmulQuran.com/get-register" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Register for Free Trial Classes | ilmulQuran Online Academy"
  />
  <meta
    property="og:description"
    content="Sign up for a free trial class at ilmulQuran Online Academy. Experience our high-quality Quranic and Islamic education with no obligation. Register now!"
  />
  <meta property="og:url" content="https://ilmulQuran.com/get-register" />
  <meta property="og:site_name" content="ilmulQuran" />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Student registering for free trial Quran class online"
  />
  <meta property="og:image:type" content="image/png" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Register for Free Trial Classes | ilmulQuran Online Academy"
  />
  <meta
    name="twitter:description"
    content="Sign up for a free trial class at ilmulQuran Online Academy. Experience our high-quality Quranic and Islamic education with no obligation. Register now!"
  />
 

  {/* JSON-LD Structured Data */}
  <Script
    id="jsonld-free-trial-register"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Free Trial Quran Classes Registration",
        "description":
          "Sign up for a free trial class at ilmulQuran Online Academy to experience high-quality Quranic and Islamic education with certified teachers.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "ilmulQuran",
          "sameAs": "https://ilmulQuran.com",
        },
        "url": "https://ilmulQuran.com/get-register",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "offers": {
            "@type": "Offer",
            "category": "free trial",
            "url": "https://ilmulQuran.com/get-register",
          },
        },
      }),
    }}
  />
</head>


      <div className="flex flex-col lg:flex-row mt-10 gap-6 lg:gap-9 mx-4 xl:mx-32 2xl:mx-56">
        <div className="w-full lg:w-[40%] px-5 ">
          <SpecialClasses />
        </div>
        <div className="w-full lg:w-[60%] px-6 md:px-9 lg:px-[56px] py-2 lg:py-12">
          <Register />

          
        </div>
      </div>

           <h3 className="text-xl text-center md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>



    </>
  );
};

export default GetRegister;
