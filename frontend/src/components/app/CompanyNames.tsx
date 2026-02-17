

import React from 'react'

export const CompanyNames = () => {
    return (
        <div className="flex flex-col items-center mt-6 md:mt-10 mb-8 md:mb-16 px-4 w-full">
            {/* Mobile Layout */}
            <div className="flex flex-col md:hidden w-full max-w-sm">
                {/* Heading */}
                <p className="text-green-950 text-sm font-medium mb-8 text-center">
                    More than 100+ <br /> companies partner
                </p>
                
                {/* Logos Grid - Mobile */}
                <div className="grid grid-cols-2 gap-6 justify-items-center">
                    {/* HubSpot */}
                    <div className="flex w-20 opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <img src="/src/assets/HubSpot.png" alt="HubSpot" className="w-full h-auto" />
                    </div>
                    
                    {/* Dropbox */}
                    <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <img className="w-5 h-5" src="/src/assets/Dropbox.png" alt="Dropbox" />
                        <span className="ml-2 text-base font-bold text-gray-800">Dropbox</span>
                    </div>
                    
                    {/* Square */}
                    <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <img className="w-5 h-5" src="/src/assets/Square1.png" alt="Square" />
                        <span className="ml-2 text-base font-bold text-gray-800">Square</span>
                    </div>
                    
                    {/* Intercom */}
                    <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <img
                            className="w-5 h-5"
                            src="https://www.intercom.com/intercom-marketing-site/favicons/favicon-16x16.png"
                            alt="Intercom"
                        />
                        <span className="ml-2 text-base font-bold text-gray-800">INTERCOM</span>
                    </div>
                    
                    {/* Grammarly - spans 2 columns */}
                    <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300 col-span-2 justify-center">
                        <img className="w-6 h-6" src="/src/assets/grammarly11.png" alt="Grammarly" />
                        <span className="ml-2 text-base font-bold text-gray-800">Grammarly</span>
                    </div>
                </div>
            </div>

            {/* Desktop/Tablet Layout */}
            <div className="hidden md:flex flex-col md:flex-row items-center w-full max-w-7xl">
                {/* Heading */}
                <div className="flex-shrink-0 md:mr-12">
                    <p className="text-[#2c4a3f] text-sm lg:text-base font-medium mb-6 md:mb-0 text-left">
                        More than 100+ <br /> companies partner
                    </p>
                </div>
                
                {/* Logos Row - equally spaced */}
                <div className="flex flex-1 justify-between items-center w-full">
                    {/* HubSpot */}
                    <div className="flex w-20 md:w-24 opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <img src="/src/assets/HubSpot.png" alt="HubSpot" className="w-full h-auto" />
                    </div>
                    
                    {/* Dropbox */}
                    <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <img className="w-5 h-5 md:w-6 md:h-6" src="/src/assets/Dropbox11.png" alt="Dropbox" />
                        <span className="ml-2 text-base md:text-lg font-bold text-gray-800">Dropbox</span>
                    </div>
                    
                    {/* Square */}
                    <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <img className="w-5 h-5 md:w-6 md:h-6" src="/src/assets/Square1.png" alt="Square" />
                        <span className="ml-2 text-base md:text-lg font-bold text-gray-800">Square</span>
                    </div>
                    
                    {/* Intercom */}
                    <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <img
                            className="w-5 h-5 md:w-6 md:h-6"
                            src="https://www.intercom.com/intercom-marketing-site/favicons/favicon-16x16.png"
                            alt="Intercom"
                        />
                        <span className="ml-2 text-base md:text-lg font-bold text-gray-800">INTERCOM</span>
                    </div>
                    
                    {/* Grammarly */}
                    <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <img className="w-6 h-6 md:w-7 md:h-7" src="/src/assets/grammarly11.png" alt="Grammarly" />
                        <span className="ml-2 text-base md:text-lg font-bold text-gray-800">Grammarly</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyNames;
