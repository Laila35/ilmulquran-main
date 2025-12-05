
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";


import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm";

export default function DownloadsPage() {
  return (
    <>
<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />



  <title>Download Quran Class Software – Zoom, Teams, Skype & More</title>
  <meta
    name="description"
    content="Download essential software for ilmulQuran online Quran classes, including Zoom, Microsoft Teams, Skype, and other tools. Get step-by-step download links for desktop and mobile devices."
  />
  <meta
    name="keywords"
    content="Download Quran software, Zoom for Quran class, Microsoft Teams download, Skype download, Online Quran class tools, ilmulQuran software download"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/downloads" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Download Quran Class Software – Zoom, Teams, Skype & More | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Easily download Zoom, Microsoft Teams, Skype, and other software for a smooth online Quran learning experience with ilmulQuran."
  />
  <meta property="og:url" content="https://ilmulquran.com/downloads" />
  <meta property="og:site_name" content="ilmulQuran" />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Download Quran Class Software including Zoom and Microsoft Teams"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Download Quran Class Software – Zoom, Teams, Skype & More | ilmulQuran"
  />
  <meta
    name="twitter:description"
    content="Download essential apps for online Quran classes with ilmulQuran, including Zoom and Teams for both desktop and mobile."
  />


  {/* JSON-LD Structured Data for WebPage */}
  <Script
    id="jsonld-downloads-page"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Download Quran Class Software – Zoom, Teams, Skype & More",
        "url": "https://ilmulquran.com/downloads",
        "description":
          "Download essential software like Zoom, Microsoft Teams, and Skype to join ilmulQuran's online Quran classes seamlessly on desktop and mobile devices.",
        "publisher": {
          "@type": "Organization",
          "name": "ilmulQuran",
        }
      }),
    }}
  />
</head>
      {/* Mobile Form - Top of page (non-sticky) */}
      <div className="block lg:hidden">
        <StickyForm 
          courseName="Companions of Prophet Muhammad (PBUH) Course" 
        />
      </div>

      {/* Main Content Container */}
      <div className="min-h-screen  py-10 px-4 max-w-6xl mx-auto lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Content Area */}
        <div className="lg:col-span-3">
          <h1 className="text-4xl font-bold text-center text-emerald-800 mb-10">
            Download Quran Class Software – Zoom, Teams, Skype & More
          </h1>

          <section className="mb-12 text-center">
            <p className="text-lg text-gray-700">
              Welcome to the ilmulQuran.com Download Center – your one-stop hub for all the essential tools you need to join our online Quran classes smoothly and securely.
            </p>
          </section>

          <section className="space-y-16">
            {/* Zoom Section */}
            <div className="bg-white p-8 rounded-2xl shadow-xl transition duration-300">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-emerald-800 text-center mb-6">
                  Zoom – For One-on-One and Group Quran Classes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Desktop Downloads */}
                  <div className=" p-6 rounded-xl border border-emerald-200 shadow-md">
                    <img src="/Images/Logo/zoom-desktop.jpg" alt="Zoom Desktop" className="w-full h-40 object-contain mb-4" />
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">Zoom for Desktop</h3>
                    <a
                      href="https://zoom.us/download"
                      className="block bg-emerald-700 text-white px-4 py-2 rounded-lg text-center hover:bg-emerald-600"
                    >
                      Download for Windows / Mac
                    </a>
                  </div>

                  {/* Mobile Downloads */}
                  <div className=" p-6 rounded-xl border border-emerald-200 shadow-md">
                    <img src="/Images/Logo/zoom-mobile.jpg" alt="Teams Desktop" className="w-full h-40 object-contain mb-4" />
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">Zoom for Mobile</h3>
                    <div className="space-y-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings"
                        className="block bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-500"
                      >
                        Download for Android
                      </a>
                      <a
                        href="https://apps.apple.com/us/app/id546505307"
                        className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-500"
                      >
                        Download for iPhone/iPad
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Microsoft Teams Section */}
            <div className="bg-white p-8 rounded-2xl shadow-xl transition duration-300">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-blue-800 text-center mb-6">
                  Microsoft Teams – For Secure Scheduled Quran Sessions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Desktop Downloads */}
                  <div className=" p-6 rounded-xl border border-blue-200 shadow-md">
                    <img src="/Images/Logo/team-desktop.jpg" alt="Zoom Mobile" className="w-full h-40 object-contain mb-4" />
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Teams for Desktop</h3>
                    <a
                      href="https://www.microsoft.com/en-us/microsoft-teams/download-app"
                      className="block bg-blue-700 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600"
                    >
                      Download for Windows / Mac
                    </a>
                  </div>

                  {/* Mobile Downloads */}
                  <div className="p-6 rounded-xl border border-blue-200 shadow-md">
                    <img src="/Images/Logo/team-mobile.jpg" alt="Teams Mobile" className="w-full h-40 object-contain mb-4" />
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Teams for Mobile</h3>
                    <div className="space-y-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.microsoft.teams"
                        className="block bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-500"
                      >
                        Download for Android
                      </a>
                      <a
                        href="https://apps.apple.com/us/app/microsoft-teams/id1113153706"
                        className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-500"
                      >
                        Download for iPhone/iPad
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Tips for Smooth Quran Class Experience</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use a headset or headphones to improve sound quality</li>
                <li>Ensure your camera and mic are working before class</li>
                <li>Always update the app to the latest version</li>
                <li>Join class 2–3 minutes early to avoid delay</li>
                <li>Use Wi-Fi or 4G+ connection for stability</li>
              </ul>
            </div>

            {/* Security Section */}
            <div className="bg-emerald-100 p-6 rounded-2xl border border-emerald-300 shadow-md">
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">🔒 Safe & Private Learning</h3>
              <p className="text-gray-700">
                All apps used by ilmulQuran.com are end-to-end encrypted with strict privacy settings. Your child's learning environment is fully secured and monitored.
              </p>
            </div>
          </section>

          <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
            Student Testimonials
          </h3>
          <div className="pt-3">
            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>
        </div>

        {/* Desktop Form Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-8">
            <StickyForm 
              courseName="Companions of Prophet Muhammad (PBUH) Course" 
            />
          </div>
        </div>
      </div>
    </>
  );
}