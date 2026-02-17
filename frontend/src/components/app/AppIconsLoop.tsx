





import React, { useState, useEffect } from 'react';

const AppIconsLoop = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const [screenSize, setScreenSize] = useState('lg');

  // Detect screen size for responsive behavior
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('sm');
      else if (width < 768) setScreenSize('md');
      else if (width < 1024) setScreenSize('lg');
      else setScreenSize('xl');
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // App icons data with names for keys & tooltips
  const apps = [
    {
      name: "Dots",
      bg: 'bg-white',
      content: (
        <div className="w-full h-full relative">
          <div className="absolute inset-0">
            <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 left-1.5"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full absolute top-1 right-1.5"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full absolute bottom-1.5 left-0.5"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full absolute bottom-1.5 right-0.5"></div>
          </div>
        </div>
      )
    },
    {
      name: "N App",
      bg: 'bg-white',
      content: <div className="text-black text-lg sm:text-xl font-bold">N</div>
    },
    {
      name: "Grid Colors",
      bg: 'bg-white',
      content: (
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4 sm:w-5 sm:h-5">
          <div className="bg-red-500 rounded-sm"></div>
          <div className="bg-green-500 rounded-sm"></div>
          <div className="bg-blue-500 rounded-sm"></div>
          <div className="bg-yellow-400 rounded-sm"></div>
        </div>
      )
    },
    {
      name: "P App",
      bg: 'bg-white',
      content: <div className="text-blue-600 text-lg sm:text-xl font-bold">P</div>
    },
    {
      name: "Diamond",
      bg: 'bg-white',
      content: <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded transform rotate-45"></div>
    },
    {
      name: "A Gradient",
      bg: 'bg-white',
      content: <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">A</div>
    },
    {
      name: "Green Circle",
      bg: 'bg-white',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
        </div>
      )
    },
    {
      name: "Tilted Colors",
      bg: 'bg-white',
      content: <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-400 via-purple-500 to-yellow-400 rounded-lg transform rotate-12"></div>
    },
    {
      name: "Yellow Square",
      bg: 'bg-white',
      content: <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-lg border border-yellow-500"></div>
    },
    {
      name: "Red Dot",
      bg: 'bg-white',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded"></div>
        </div>
      )
    },
    {
      name: "Monkey",
      bg: 'bg-white',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full flex items-center justify-center">
          <div className="text-yellow-400 text-xs sm:text-sm">🐵</div>
        </div>
      )
    },
    {
      name: "Star",
      bg: 'bg-white',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-red-500 to-orange-400 rounded-lg flex items-center justify-center">
          <div className="text-white text-xs">*</div>
        </div>
      )
    },
    {
      name: "Clock",
      bg: 'bg-white',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
          <div className="text-white text-xs sm:text-sm">⏰</div>
        </div>
      )
    },
    {
      name: "Pink Purple",
      bg: 'bg-white',
      content: <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg"></div>
    },
    {
      name: "Tilted Purple",
      bg: 'bg-white',
      content: <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg transform rotate-45"></div>
    },
    {
      name: "S Box",
      bg: 'bg-white',
      content: (
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 rounded-lg flex items-center justify-center">
          <div className="text-white text-xs sm:text-sm font-bold">S</div>
        </div>
      )
    }
  ];

  // Responsive configuration
  const getResponsiveConfig = () => {
    switch (screenSize) {
      case 'sm':
        return {
          iconSize: 'w-12 h-12',
          iconPadding: 'p-2',
          gap: 'gap-3',
          containerHeight: 'h-16',
          marginBottom: 'mb-2',
          iconSpacing: 60,
          animationDuration: { top: '20s', bottom: '25s' }
        };
      case 'md':
        return {
          iconSize: 'w-14 h-14',
          iconPadding: 'p-2.5',
          gap: 'gap-4',
          containerHeight: 'h-18',
          marginBottom: 'mb-3',
          iconSpacing: 70,
          animationDuration: { top: '22s', bottom: '27s' }
        };
      case 'lg':
        return {
          iconSize: 'w-15 h-15',
          iconPadding: 'p-3',
          gap: 'gap-6',
          containerHeight: 'h-20',
          marginBottom: 'mb-4',
          iconSpacing: 80,
          animationDuration: { top: '25s', bottom: '30s' }
        };
      default: // xl
        return {
          iconSize: 'w-16 h-16',
          iconPadding: 'p-3',
          gap: 'gap-8',
          containerHeight: 'h-20',
          marginBottom: 'mb-4',
          iconSpacing: 90,
          animationDuration: { top: '25s', bottom: '30s' }
        };
    }
  };

  const config = getResponsiveConfig();

  // Split icons into two rows
  const midpoint = Math.ceil(apps.length / 2);
  const topRowApps = apps.slice(0, midpoint);
  const bottomRowApps = apps.slice(midpoint);

  // Duplicate for infinite scroll
  const duplicatedTopRow = [...topRowApps, ...topRowApps, ...topRowApps];
  const duplicatedBottomRow = [...bottomRowApps, ...bottomRowApps, ...bottomRowApps];

  return (
    // <div className="w-full bg-transparent overflow-hidden mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
    //   <div className="w-full max-w-7xl mx-auto">

    <div className=" bg-transparent from-slate-700 via-slate-600 to-slate-700 flex  justify-between  overflow-hidden mt-20">
//       <div className="w-full max-w-[1440px] mx-auto">
        {/* Main loop */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIndex(null);
          }}
        >
          {/* Top Row */}
          <div className={`relative ${config.containerHeight} overflow-hidden ${config.marginBottom}`}>
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full  to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full  to-transparent z-10 pointer-events-none"></div>

            <div
              className={`flex items-center ${config.gap} h-full animate-scroll-right`}
              style={{
                width: `${duplicatedTopRow.length * config.iconSpacing}px`,
                animationDuration: config.animationDuration.top,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear',
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {duplicatedTopRow.map((app, index) => (
                <div
                  key={`top-${app.name}-${index}`}
                  className="flex-shrink-0 relative group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(`top-${index}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`${config.iconSize} rounded-xl sm:rounded-2xl ${app.bg} flex items-center justify-center shadow-md hover:shadow-xl transform transition-all duration-300 ease-out ${hoveredIndex === `top-${index}` ? 'scale-110' : 'scale-100'} border border-gray-200/50`}
                  >
                    {app.content}
                  </div>
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-30 bg-blue-400 blur-lg transition-opacity duration-300 -z-10" />
                  {app.name && (
                    <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                      {app.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className={`relative ${config.containerHeight} overflow-hidden`}>
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full  to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full  to-transparent z-10 pointer-events-none"></div>

            <div
              className={`flex items-center ${config.gap} h-full animate-scroll-left`}
              style={{
                width: `${duplicatedBottomRow.length * config.iconSpacing}px`,
                animationDuration: config.animationDuration.bottom,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear',
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {duplicatedBottomRow.map((app, index) => (
                <div
                  key={`bottom-${app.name}-${index}`}
                  className="flex-shrink-0 relative group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(`bottom-${index}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`${config.iconSize} rounded-xl sm:rounded-2xl ${app.bg} flex items-center justify-center shadow-md hover:shadow-xl transform transition-all duration-300 ease-out ${hoveredIndex === `bottom-${index}` ? 'scale-110' : 'scale-100'} border border-gray-200/50`}
                  >
                    {app.content}
                  </div>
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-30 bg-blue-400 blur-lg transition-opacity duration-300 -z-10" />
                  {app.name && (
                    <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                      {app.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${topRowApps.length * config.iconSpacing}px); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(-${bottomRowApps.length * config.iconSpacing}px); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right { 
          animation: scroll-right ${config.animationDuration.top} linear infinite; 
        }
        .animate-scroll-left { 
          animation: scroll-left ${config.animationDuration.bottom} linear infinite; 
        }
      `}</style>
    </div>
  );
};

export default AppIconsLoop;