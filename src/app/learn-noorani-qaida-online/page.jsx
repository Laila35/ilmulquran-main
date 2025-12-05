import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";




const LearnNooraniQaida = () => {
  const breadcrumbData = {
    id: 1,
    image: "/Images/Courses/learn-noorani-qaidah.webp",
    name: "Learn Noorani Qaida Online - Master Quranic Basics",
    link: "/learn-noorani-qaida-online",
  };

  return (
    <>
      <head>
        <title>Noorani Qaida Online Course | Quran Reading Basics</title>
        <meta 
          name="description" 
          content="Master Quranic Arabic fundamentals with our Noorani Qaida program. 98% success rate in 3 months. Start with certified tutors & free trial class." 
        />
        <meta 
          name="keywords" 
          content="Noorani Qaida online course, Quranic Arabic basics, Tajweed for beginners, Learn Quran reading, Arabic alphabet for Quran, Quran foundation course, Online Qaida classes" 
        />
        <link rel="canonical" href="https://ilmulquran.com/learn-noorani-qaida-online/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Professional Noorani Qaida Course Online | Quran Basics" />
        <meta property="og:description" content="Complete Noorani Qaida program with Tajweed fundamentals. 1-on-1 classes with certified tutors. Start free trial today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ilmulquran.com/learn-noorani-qaida-online/" />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/learn-noorani-qaidah.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn Noorani Qaida Online - Quran Reading Foundation" />
        <meta name="twitter:description" content="Master Arabic letters & basic Tajweed rules through interactive online classes. Certified teachers & flexible scheduling." />
        <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/learn-noorani-qaidah.webp" />
      </head>

      {/* Structured Data */}
      <Script
        id="noorani-qaida-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Noorani Qaida Mastery Program",
            "description": "Comprehensive foundation course for Quranic Arabic reading with Tajweed basics",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ilmulQuran",
              "sameAs": "https://ilmulquran.com"
            },
            "image": "https://ilmulquran.com/Images/Courses/learn-noorani-qaidah.webp",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": ["online", "one-on-one"],
              "duration": "P3M",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student",
                "ageRange": "5-65"
              },
              "offers": {
                "@type": "Offer",
                "category": "free trial",
                "url": "https://ilmulquran.com/get-register"
              }
            }
          })
        }}
      />

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
          <h1 className="text-[#003366] mb-5 text-center font-bold text-3xl md:text-4xl">
            Master Quranic Arabic with Noorani Qaida
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium">
                Begin your Quranic journey with our structured <Link href="/quran-classes-for-beginners" className="text-blue-600">Quran foundation course</Link>. Perfect for:
              </p>
              <ul className="list-disc ml-8 space-y-2 mt-4">
                <li>Complete beginners (ages 5+)</li>
                <li>Those wanting to improve <Link href="/learn-tajweed-online" className="text-blue-600">Tajweed basics</Link></li>
                <li>Parents teaching children Quran</li>
                <li>Reverts learning Arabic reading</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
                Course Highlights
              </h3>
              <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
                <li>17 structured modules progressing from letters to words</li>
                <li>Interactive <Link href="/online-quran-classes" className="text-blue-600">live classes</Link> with native Arab tutors</li>
                <li>Daily practice exercises & progress tracking</li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={400}
                src="/Images/Courses/learn-noorani-qaidah.webp"
                alt="Child learning Noorani Qaida with online tutor"
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#003366]">Curriculum Overview</h3>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Arabic letter recognition & pronunciation</li>
                <li>Harakat (vowels) & Tanween rules</li>
                <li>Letter combinations & word formation</li>
                <li>Basic <Link href="/learn-tajweed-online" className="text-blue-600">Tajweed rules</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#003366]">Learning Tools</h3>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Digital Qaida workbook</li>
                <li>Pronunciation audio guides</li>
                <li>Interactive quizzes</li>
                <li>Progress certificate</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-2xl font-bold text-[#003366]">Related Courses</h3>
            <ul className="list-disc ml-8 space-y-2 mt-4">
              <li>
                <Link href="/quran-reading-with-tajweed" className="text-blue-600">
                  Quran Reading with Tajweed
                </Link>
              </li>
              <li>
                <Link href="/memorize-quran-online" className="text-blue-600">
                  Quran Memorization (Hifz)
                </Link>
              </li>
              <li>
                <Link href="/quranic-arabic-course" className="text-blue-600">
                  Quranic Arabic Program
                </Link>
              </li>
            </ul>
        
    </div>

    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
      What is Noorani Qaida?
    </h2>
    <p className="text-base font-medium pt-4">
      Noorani Qaida is an essential primer for anyone aiming to read the Quran accurately. It introduces learners to the Arabic alphabet and fundamental Tajweed rules, ensuring a strong base for future Quranic studies.
    </p>

    <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Why Learn Noorani Qaida Online?
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
      Our online platform offers several advantages:
    </p>
    <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
      <li>
        <span className="font-bold text-[#1a73e8]">Weeks 1-4:</span> Basic Arabic letters and pronunciation.
      </li>
      <li>
        <span className="font-bold text-[#1a73e8]">Weeks 5-10:</span> Combining letters and applying basic Tajweed rules.
      </li>
      <li>
        <span className="font-bold text-[#1a73e8]">Regular Reviews:</span> Oral tests and quizzes to reinforce learning and track progress.
      </li>
    </ul>

   

    <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
      Call to Action
    </h2>
    <p className="text-base font-medium pt-4">
      Are you ready to lay a solid foundation in your Quranic studies? <Link href="/get-register" className="text-blue-600 no-underline">Enroll in our Noorani Qaida course today!</Link>
    </p>


     <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
      <BonusIslamicLearning />
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>
 </div>
      </div>
      </div>
      </div>

    </>
  );
};

export default LearnNooraniQaida;
