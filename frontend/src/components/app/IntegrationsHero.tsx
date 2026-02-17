

import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import AppIconsLoop from './AppIconsLoop';

const IntegrationsHero = () => {
    return (
        <div className='relative'>
            <div className="min-h-screen bg-[#273e3d] flex items-center flex-col justify-center p-4 sm:p-6 lg:p-8 rounded-xl relative overflow-hidden"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-slate-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-slate-600/10 rounded-full blur-3xl"></div>
                </div>

                <div className='mt-6 sm:mt-10 relative z-10 w-full'>
                    <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#394d4d] backdrop-blur-sm border border-slate-500/20 text-slate-200 text-xs sm:text-sm font-medium">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                            INTEGRATIONS
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight px-2">
                            Don't replace.{' '}
                            <span className="block sm:inline">Integrate.</span>
                        </h1>

                        {/* Subtitle */}
                        <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4 px-2">
                            <p className="text-[#ddedec] text-base sm:text-lg md:text-xl leading-relaxed">
                                We understand the hussle of replacing the long used tools in your process.
                            </p>
                            <p className="text-[#ddedec] text-base sm:text-lg md:text-xl leading-relaxed">
                                That's why we integrate tools you use in your day-to-day work.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6 sm:pt-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent text-[#ddedec] hover:bg-slate-600/20 transition-all duration-300 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium backdrop-blur-sm border-slate-500/30 hover:border-slate-400/40"
                            >
                                All Integrations
                                <svg
                                    className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* App Icons Loop - Positioned at bottom */}
                <div className="mt-auto mb-6 sm:mb-8 lg:mb-12 relative z-10">
                    <AppIconsLoop />
                </div>
            </div>
        </div>
    );
};

export default IntegrationsHero;