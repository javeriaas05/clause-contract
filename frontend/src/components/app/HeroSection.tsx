
// import React from 'react';

import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FloatingAvatar from '../FloatingAvatar';
import CompanyNames from './CompanyNames';
import { Badge } from '@/components/ui/badge';
import QRCode from "@/assets/QR.png";

const HeroSection = () => {
    const navigate = useNavigate(); // Initialize navigate hook
    navigate('/dashboard');
    // Handle Get a Demo button click
    const handleGetDemo = () => {
        navigate('/signup');
    };

    return (
        <div className="bg-gray-100">
            {/* HERO SECTION */}
            <section
                className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            >
                {/* Floating Avatars - Hidden on mobile, visible on larger screens */}
                <div className="hidden lg:block absolute top-24 left-35">
                    <FloatingAvatar
                        imgSrc="/src/assets/professional.png"
                        alt=""
                        gradient="from-purple-300 to-purple-400"
                        sendPosition="bottom-right"
                        sendRotation={93}
                    />
                </div>

                <div className="hidden lg:block absolute top-24 right-50 md:right  transform-rotate-12">
                    <FloatingAvatar
                        imgSrc="/src/assets/images (1).jfif"
                        gradient="from-purple-300 to-purple-400"
                        sendPosition="bottom-left"
                        sendRotation={180}
                    />
                </div>

                <div className="hidden md:block absolute bottom-20 left-75 transform-translate-y-1/2 rotate-6">
                    <FloatingAvatar
                        imgSrc="/src/assets/professionalimg.png"
                        gradient="from-purple-300 to-purple-400"
                        sendPosition="top-right"
                        sendRotation={0}
                    />
                </div>

                <div className="hidden md:block absolute  bottom-17 right-75 transform rotate-12">
                    <FloatingAvatar
                        imgSrc="/src/assets/images.jfif"
                        gradient="from-purple-300 to-purple-400"
                        sendPosition="top-left"
                        sendRotation={250}
                    />
                </div>

                {/* Badge */}
                <div className="flex justify-center items-center">
                    <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white text-green-900 text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-gray-200">
                        <span className="mr-2 text-green-900">⚡</span>
                        CREATE FOR FAST
                    </div>
                </div>

                {/* Heading */}
                <div className="flex justify-center items-center font-semibold text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#13392c] mb-6 sm:mb-8 leading-tight max-w-5xl">
                        One tool to{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">manage</span>
                            <span className="absolute inset-x-0 bottom-0 h-1 sm:h-2 bg-lime-300 z-0"></span>
                        </span>
                        <br />
                        contracts and your team
                    </h1>
                </div>

                {/* Subtitle */}
                <div className="px-4 sm:px-6">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#13392c] mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto leading-relaxed text-center">
                        Clause helps legal teams work faster, smarter and more efficiently, delivering the{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">visibility</span>
                        </span>{" "}
                        and data-driven insights to mitigate risk and ensure compliance.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
                    <Button
                        size="lg"
                        onClick={handleGetDemo} // Add onClick handler for Start for Free
                        className="w-full sm:w-auto bg-[#13392c] hover:bg-green-800 text-lime-300 px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-xl hover:shadow-2xl transition-all"
                    >
                        Start for Free
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={handleGetDemo} // Add onClick handler
                        className="w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg text-emerald-800 border-2 border-gray-100 bg-white hover:bg-gray-50 rounded-xl shadow-2xl transition-all"
                    >
                        Get a Demo
                    </Button>
                </div>
            </section>

            {/* Company Names */}
            <div className="py-8 sm:py-10 px-4 sm:px-6">
                <CompanyNames />
            </div>

            {/* FEATURES SECTION */}
            <section className="bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6 sm:mb-8">
                        <Badge
                            variant="outline"
                            className="bg-white/50 backdrop-blur-sm border-slate-200 text-green-900 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium"
                        >
                            <img className='w-3 h-3 mr-2'
                                src={QRCode} alt="" />
                            FEATURES
                        </Badge>
                    </div>

                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#13392c] leading-tight mb-6 sm:mb-8 px-4">
                        Latest advanced technologies to{" "}
                        <span className="bg-clip-text bg-gradient-to-r text-[#13392c] to-teal-600">
                            ensure everything you need
                        </span>
                    </h4>

                    <p className="text-base sm:text-lg md:text-xl text-[#13392c] max-w-3xl mx-auto leading-relaxed px-4">
                        Maximize your team's productivity and security with our affordable, user-friendly contract management system.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;