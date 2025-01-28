"use client";
import React, { useState } from "react";
import {
  Cable,
  Check,
  ArrowRight,
  Zap,
  Shield,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Player as LottiePlayer } from "@lottiefiles/react-lottie-player";

import confettiAnimation from "@/data/confetti.json";
import Image from "next/image";
import Link from "next/link";

// Dynamically import the Lottie Player to avoid SSR issues
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ firstName: "", lastName: "", email: "" });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500); // Hide confetti after animation
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Global confetti overlay */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <LottiePlayer
            autoplay
            loop={false}
            src={confettiAnimation}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      )}

      {/* Header - Add mobile menu */}
      <header className="fixed w-full top-0 bg-white/80 backdrop-blur-md shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center space-x-2"
              onClick={handleNavClick}
            >
              <div className="relative">
                <Cable className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 relative" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Cony
              </span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600 transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <nav className="hidden md:flex space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={handleNavClick}
              >
                Features
              </Link>
              <Link
                href="#products"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={handleNavClick}
              >
                Products
              </Link>
              <Link
                href="#signup"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={handleNavClick}
              >
                Join Waitlist
              </Link>
            </nav>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg p-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 transition"
                  onClick={handleNavClick}
                >
                  Features
                </Link>
                <Link
                  href="#products"
                  className="text-gray-600 hover:text-blue-600 transition"
                  onClick={handleNavClick}
                >
                  Products
                </Link>
                <Link
                  href="#signup"
                  className="text-gray-600 hover:text-blue-600 transition"
                  onClick={handleNavClick}
                >
                  Join Waitlist
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Update responsive classes */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Power Your World with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Premium Cables
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the next generation of device connectivity. Our
                premium cables are engineered for performance, durability, and
                style.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Fast Charging</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Universal Compatibility</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Lifetime Warranty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
                alt="Premium Cables"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cony?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the perfect blend of technology and design
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                <Zap className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Experience rapid charging speeds that keep your devices powered
                up when you need them most.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition">
                <Shield className="h-8 w-8 text-purple-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Built to Last
              </h3>
              <p className="text-gray-600">
                Premium materials and rigorous testing ensure our cables
                withstand daily wear and tear.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition">
                <Award className="h-8 w-8 text-indigo-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Certified Quality
              </h3>
              <p className="text-gray-600">
                All our products meet international safety and performance
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Product Line
            </h2>
            <p className="text-xl text-gray-600">
              Discover our range of premium connectivity solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1619459072761-496c0812331b"
                alt="USB-C Cable"
                width={800}
                height={600}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  USB-C to USB-C
                </h3>
                <p className="text-gray-200">
                  Next-gen connectivity for modern devices
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1524226108234-3cccbbbfa86d"
                alt="Lightning Cable"
                width={800}
                height={600}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Lightning to USB-C
                </h3>
                <p className="text-gray-200">Perfect for Apple devices</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1616578781650-cd818fa41e57"
                alt="Universal Adapter"
                width={800}
                height={600}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Universal Adapters
                </h3>
                <p className="text-gray-200">
                  One solution for all your devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section with local confetti */}
      <section
        id="signup"
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
              {/* Local confetti overlay */}
              {showConfetti && (
                <div className="absolute inset-0 z-50 pointer-events-none">
                  <LottiePlayer
                    autoplay
                    loop={false}
                    src={confettiAnimation}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              )}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Join the Waiting List
                </h2>
                <p className="text-gray-600">
                  Be the first to experience our revolutionary cables
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50"
                    placeholder="john@example.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Join Waiting List</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-6 text-center">
                By joining, you'll be the first to know about our launch and
                exclusive offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Update responsive layout */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Cable className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">Cony</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing device connectivity with premium quality cables
                and adapters.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    USB-C Cables
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Lightning Cables
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Adapters
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 Cony. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
