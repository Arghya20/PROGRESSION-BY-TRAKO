"use client";

import { Apple, Play, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle APK download
  const handleDownload = () => {
    // TODO: Replace with your actual APK file URL
    const apkUrl = "../public/app-release.apk"; // You'll replace this with your APK file path

    // Create a temporary link element and trigger download
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "Progression-by-Trako.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white overflow-hidden">
      {/* Header */}
      <header className="relative z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-black">
                <span className="hidden sm:inline">PROGRESSION BY TRAKO</span>
                <span className="sm:hidden">PROGRESSION</span>
              </span>
            </div>

            {/* Download Button */}
            <div className="hidden md:block">
              <button
                onClick={handleDownload}
                className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Download App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="px-4 py-4">
                <button
                  onClick={handleDownload}
                  className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Download App
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Content - Centered */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 animate-fade-in-up">
              Track your progress
              <br />
              <span className="italic text-blue-600">with Progression</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Progress tracking made interactive, fast and full of motivation!
              Build better habits, achieve your goals, and stay consistent with
              our powerful tracking tools.
            </p>
          </div>

          {/* Phone Mockups Container */}
          <div className="relative flex justify-center items-end space-x-4 lg:space-x-8 max-w-6xl mx-auto">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent rounded-3xl animate-pulse-slow"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -top-10 -right-20 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-40 bg-blue-100/40 rounded-full blur-3xl animate-pulse-slow"></div>

            {/* Phone 1 - Left (Smaller, Background) */}
            <div className="relative transform rotate-12 -translate-y-8 scale-75 lg:scale-90 opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-95 lg:hover:scale-100 animate-slide-in-left animation-delay-600 hover:rotate-6">
              <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-gentle-bounce animation-delay-1000">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  {/* Replace with your first app screenshot */}
                  <Image
                    src="/app-screenshot-1.PNG"
                    alt="Progression App Screenshot 1"
                    width={256}
                    height={520}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Phone 2 - Center (Main, Largest) */}
            <div className="relative z-10 transform hover:scale-105 transition-all duration-700 animate-slide-in-up animation-delay-800 hover:-translate-y-2">
              <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-gentle-bounce animation-delay-1200">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Replace with your main app screenshot */}
                  <Image
                    src="/app-screenshot-2.PNG"
                    alt="Progression App Screenshot 2"
                    width={288}
                    height={580}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Phone 3 - Right (Smaller, Background) */}
            <div className="relative transform -rotate-12 -translate-y-8 scale-75 lg:scale-90 opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-95 lg:hover:scale-100 animate-slide-in-right animation-delay-1000 hover:-rotate-6">
              <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-gentle-bounce animation-delay-1400">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  {/* Replace with your third app screenshot */}
                  <Image
                    src="/app-screenshot-3.PNG"
                    alt="Progression App Screenshot 3"
                    width={256}
                    height={520}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Why choose Progression?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build lasting habits and track meaningful
              progress
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Smart Tracking
              </h3>
              <p className="text-gray-600">
                Advanced analytics to visualize your progress and identify
                patterns
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow animation-delay-200">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Goal Setting
              </h3>
              <p className="text-gray-600">
                Set meaningful goals and break them down into achievable
                milestones
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow animation-delay-400">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Smart Reminders
              </h3>
              <p className="text-gray-600">
                Intelligent notifications that adapt to your schedule and
                preferences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your journey toward better goals with Progression.
          </p>
          <button
            onClick={handleDownload}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Download Now - It's Free
          </button>
        </div>
      </section>
    </div>
  );
}
