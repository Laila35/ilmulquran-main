
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Banner from "@/components/Banner";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";



import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm"; // ✅ Import added

const HelpSupport = () => {
  const breadcrumbData = {
    id: 1,
    name: "Help & Support | ilmulQuran Online Academy",
    link: "/",
  };

  return (
    <>
    
       <head>
     <title>Help & Support | ilmulQuran Online Academy</title>
     <meta
       name="description"
       content="Get assistance and find answers to your questions at ilmulQuran Online Academy. Our Help & Support section provides guidance on enrollment, courses, and technical issues. Reach out to us for any inquiries and learn how we can assist you!"
     />
     <meta
       name="keywords"
       content="Help and Support, ilmulQuran Assistance, Online Quran Support, Enrollment Help, Technical Support ilmulQuran, Quran Course FAQs"
     />
     <link rel="canonical" href="https://ilmulQuran.com/help-support" />
    
     {/* Open Graph Meta Tags */}
     <meta property="og:locale" content="en_US" />
     <meta property="og:type" content="website" />
     <meta property="og:title" content="Help & Support | ilmulQuran Online Academy" />
     <meta
       property="og:description"
       content="Get assistance and find answers to your questions at ilmulQuran Online Academy. Our Help & Support section provides guidance on enrollment, courses, and technical issues. Reach out to us for any inquiries and learn how we can assist you!"
     />
     <meta property="og:url" content="https://ilmulQuran.com/help-support" />
     <meta property="og:site_name" content="ilmulQuran" />
    
     <meta property="og:image:width" content="1200" />
     <meta property="og:image:height" content="630" />
     <meta
       property="og:image:alt"
       content="Customer support helping a student online"
     />
     <meta property="og:image:type" content="image/png" />
    
     {/* Twitter Meta Tags */}
     <meta name="twitter:card" content="summary_large_image" />
     <meta name="twitter:title" content="Help & Support | ilmulQuran Online Academy" />
     <meta
       name="twitter:description"
       content="Get assistance and find answers to your questions at ilmulQuran Online Academy. Our Help & Support section provides guidance on enrollment, courses, and technical issues."
     />
     
    
     {/* JSON-LD Structured Data */}
     <Script
       id="jsonld-help-support"
       type="application/ld+json"
       strategy="afterInteractive"
       dangerouslySetInnerHTML={{
         __html: JSON.stringify({
           "@context": "https://schema.org",
           "@type": "WebPage",
           "name": "Help & Support",
           "description":
             "Find answers to your questions about enrollment, courses, and technical issues at ilmulQuran Online Academy's Help & Support page.",
           "url": "https://ilmulQuran.com/help-support",
           "mainEntity": {
             "@type": "FAQPage",
             "mainEntity": [
               {
                 "@type": "Question",
                 "name": "How can I enroll in a course?",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "You can enroll by registering on our website and selecting your desired course."
                 }
               },
               {
                 "@type": "Question",
                 "name": "What payment options are available?",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "We accept multiple payment methods including credit card, PayPal, and bank transfer."
                 }
               },
               {
                 "@type": "Question",
                 "name": "Who do I contact for technical support?",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "You can reach our support team via the contact form or email admin@ilmulquran.com."
                 }
               }
             ]
           }
         }),
       }}
     />
    </head>
      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT: Main Content */}
          <div className="w-full lg:w-3/4">
            
            {/* StickyForm for mobile */}
            <div className="block lg:hidden mb-10">
              <StickyForm courseName="Help & Support" />
            </div>

            <div className="bg-gray-100 rounded-lg  p-8">
              <h2 className="text-4xl font-extrabold text-center text-[#003366]">
                Help & Support
              </h2>
              <p className="mt-8 text-lg text-center text-gray-700 leading-relaxed">
                Welcome to ilmulQuran Online Academy's Help & Support page.
                We are here to assist you with any questions or issues you may have.
                Our team is dedicated to providing excellent customer service to ensure
                your learning experience is smooth and enjoyable.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
  <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Form (Desktop only) */}
          <div className="hidden lg:block w-full lg:w-1/4">
            <div className="sticky top-6">
              <StickyForm courseName="Help & Support" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpSupport;
