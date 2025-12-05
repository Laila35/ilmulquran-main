// components/MobileMenu.jsx
"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faPinterest,
  faLinkedin,
  faInstagram,
  faYoutube,
  faThreads
} from "@fortawesome/free-brands-svg-icons";

import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import {
  HomeIcon,
  BookOpenIcon,
  ClipboardListIcon,
  UserGroupIcon,
  InformationCircleIcon,
  SupportIcon,
  DocumentTextIcon,
  ChevronRightIcon,
  
} from "@heroicons/react/solid";

export default function MobileMenu({
  isOpen,
  onClose,
  activeDropdown,
  toggleDropdown,
  regularCourses,
  shortCourses,
  helpSupportLinks,
}) {
  if (!isOpen) return null;

  const socialLinks = [
    { href: "https://twitter.com/imqonline/", icon: faXTwitter, label: "Twitter" },
    { href: "https://www.facebook.com/imqonline/", icon: faFacebook, label: "Facebook" },
    { href: "https://www.pinterest.co.uk/imqonline/", icon: faPinterest, label: "Pinterest" },
    { href: "https://www.linkedin.com/company/imqonline/", icon: faLinkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/imqonline/", icon: faInstagram, label: "Instagram" },
    { href: "https://www.youtube.com/@imqonline", icon: faYoutube, label: "YouTube" },
    { href: "https://www.threads.net/@imqonline", icon: faThreads, label: "Threads" },
  ];


  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Compact Mobile Menu */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl z-50 lg:hidden overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Compact Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-teal-50">
            <Link href="/" onClick={onClose} className="flex items-center">
              <img
                src="/Images/Logo/updated-logo.webp"
                alt="Ilmulquran"
                className="w-16 h-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-500 hover:bg-teal-100 transition-colors"
              aria-label="Close menu"
            >
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6 text-gray-700"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>            </button>
          </div>

          {/* Compact Main Menu */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5">
            {/* Home */}
            <Link
              href="/"
              className="block py-2.5 px-3 text-gray-700 hover:bg-teal-50 rounded-md flex items-center text-sm"
              onClick={onClose}
            >
              <HomeIcon className="w-4 h-4 mr-2.5 text-teal-600" />
              Home
            </Link>

            {/* Regular Courses */}
            <div>
              <button
                onClick={() => toggleDropdown("regular")}
                className="w-full py-2.5 px-3 flex justify-between items-center text-gray-700 hover:bg-teal-50 rounded-md text-sm"
              >
                <span className="flex items-center">
                  <BookOpenIcon className="w-4 h-4 mr-2.5 text-teal-600" />
                  Regular Courses
                </span>
                <ChevronRightIcon
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === "regular" ? "rotate-90" : ""
                  } text-gray-400`}
                />
              </button>
              {activeDropdown === "regular" && (
                <div className="pl-9 py-1 space-y-0.5">
                  {regularCourses.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="block py-2 px-3 text-gray-600 hover:bg-teal-50 rounded-md text-sm"
                      onClick={onClose}
                    >
                      {item.courseName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Short Courses */}
            <div>
              <button
                onClick={() => toggleDropdown("short")}
                className="w-full py-2.5 px-3 flex justify-between items-center text-gray-700 hover:bg-teal-50 rounded-md text-sm"
              >
                <span className="flex items-center">
                  <ClipboardListIcon className="w-4 h-4 mr-2.5 text-teal-600" />
                  Short Courses
                </span>
                <ChevronRightIcon
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === "short" ? "rotate-90" : ""
                  } text-gray-400`}
                />
              </button>
              {activeDropdown === "short" && (
                <div className="pl-9 py-1 space-y-0.5">
                  {shortCourses.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="block py-2 px-3 text-gray-600 hover:bg-teal-50 rounded-md text-sm"
                      onClick={onClose}
                    >
                      {item.courseName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Teachers */}
            <div>
              <button
                onClick={() => toggleDropdown("teachers")}
                className="w-full py-2.5 px-3 flex justify-between items-center text-gray-700 hover:bg-teal-50 rounded-md text-sm"
              >
                <span className="flex items-center">
                  <UserGroupIcon className="w-4 h-4 mr-2.5 text-teal-600" />
                  Teachers
                </span>
                <ChevronRightIcon
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === "teachers" ? "rotate-90" : ""
                  } text-gray-400`}
                />
              </button>
              {activeDropdown === "teachers" && (
                <div className="pl-9 py-1 space-y-0.5">
                  <Link
                    href="/male-quran-teacher"
                    className="block py-2 px-3 text-gray-600 hover:bg-teal-50 rounded-md text-sm"
                    onClick={onClose}
                  >
                    Male Quran Teacher
                  </Link>
                  <Link
                    href="/female-quran-teacher"
                    className="block py-2 px-3 text-gray-600 hover:bg-teal-50 rounded-md text-sm"
                    onClick={onClose}
                  >
                    Female Quran Teacher
                  </Link>
                </div>
              )}
            </div>

            {/* Register Now */}
            <Link
              href="/get-register"
              className="block py-2.5 px-3 text-gray-700 hover:bg-teal-50 rounded-md flex items-center text-sm"
              onClick={onClose}
            >
              <ClipboardListIcon className="w-4 h-4 mr-2.5 text-teal-600" />
              Register Now
            </Link>

            {/* Help & Support */}
            <div>
              <button
                onClick={() => toggleDropdown("help")}
                className="w-full py-2.5 px-3 flex justify-between items-center text-gray-700 hover:bg-teal-50 rounded-md text-sm"
              >
                <span className="flex items-center">
                  <SupportIcon className="w-4 h-4 mr-2.5 text-teal-600" />
                  Help & Support
                </span>
                <ChevronRightIcon
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeDropdown === "help" ? "rotate-90" : ""
                  } text-gray-400`}
                />
              </button>
              {activeDropdown === "help" && (
                <div className="pl-9 py-1 space-y-0.5">
                  {helpSupportLinks.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="block py-2 px-3 text-gray-600 hover:bg-teal-50 rounded-md text-sm"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog & About */}
            <Link
              href="/blog"
              className="block py-2.5 px-3 text-gray-700 hover:bg-teal-50 rounded-md flex items-center text-sm"
              onClick={onClose}
            >
              <DocumentTextIcon className="w-4 h-4 mr-2.5 text-teal-600" />
              Blog
            </Link>
            <Link
              href="/about-us"
              className="block py-2.5 px-3 text-gray-700 hover:bg-teal-50 rounded-md flex items-center text-sm"
              onClick={onClose}
            >
              <InformationCircleIcon className="w-4 h-4 mr-2.5 text-teal-600" />
              About Us
            </Link>

            {/* Compact Auth Buttons */}
            <div className="flex gap-2 px-3 py-3">
              <Link
                href="/get-register"
                className="flex-1 flex items-center justify-center py-2 text-xs font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md"
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faUserPlus} className="w-3 h-3 mr-1.5" />
                Register
              </Link>
              <Link
                href="https://cp.ilmulQuran.com/"
                className="flex-1 flex items-center justify-center py-2 text-xs font-medium text-teal-600 border border-teal-600 hover:bg-teal-50 rounded-md"
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faSignInAlt} className="w-3 h-3 mr-1.5" />
                Login
              </Link>
            </div>

            {/* Compact Social Links */}
            <div className="px-3 py-2 border-t border-gray-100">
              <div className="flex justify-center space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-gray-500 hover:text-teal-600 transition-colors"
                    aria-label={link.label}
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}