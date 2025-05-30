import { useEffect, useRef, useState } from 'react';
import MysticalCard from './mysticalCard';
// import MobileProjectsSection from './comicCArd';

const cards = [
  {
    id: 1,
    title: 'KlipB',
    description: 'A simple clipboard for Linux',
    tech: ['C++', 'Wayland'],
    color: 'from-gray-700 via-gray-500 to-gray-400',
    icon: '📋',
    status: 'Live',
    link: "https://github.com/Dwukn/KlipB"

  },
  {
    id: 2,
    title: 'HalalDroid',
    description: 'Blocks all NSFW content from user device',
    tech: ['Kotlin', 'Tensorflow'],
    color: 'from-green-600 via-lime-500 to-yellow-400',
    icon: '🛡️',
    status: 'Beta',
    link: 'https://github.com/Dwukn/HalalDroid'
  },
  {
    id: 3,
    title: 'L-Edger',
    description: 'A simple link managing app for Android',
    tech: ['Flutter'],
    color: 'from-blue-500 via-cyan-500 to-teal-400',
    icon: '🔗',
    status: 'Live',
    link: 'https://github.com/Dwukn/l-edger'

  },
  {
    id: 4,
    title: 'dough',
    description: 'A C library for UI.',
    tech: ['C'],
    color: 'from-orange-600 via-red-500 to-pink-500',
    icon: '🍞',
    status: 'Coming Soon',
    link: 'https://github.com/Dwukn'
  },
  {
    id: 5,
    title: 'Kondo',
    description: 'File organizing tool',
    tech: ['Rust'],
    color: 'from-red-700 via-rose-600 to-pink-500',
    icon: '🗂️',
    status: 'Live',
    link: 'https://github.com/Dwukn/kondo'
  },
  {
    id: 6,
    title: 'Portfolio',
    description: 'A manga-styled portfolio',
    tech: ['Tailwind', 'Next.js'],
    color: 'from-purple-600 via-pink-600 to-red-500',
    icon: '🎨',
    status: 'Coming Soon',
    link: 'https://github.com/skfareeduddin'
  },
];


const Work = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen overflow-hidden text-center transition-all duration-1000 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
          <div className="text-center m-6">
    <h2 className="text-4xl font-hand bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      FEATURED PROJECTS
    </h2>
    {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
    <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
      Innovative solutions pushing the boundaries of technology
    </p> */}
  </div>
      <div className="relative z-20">

        {/* DESKTOP */}
        <div className="hidden md:block w-full h-screen">

          <div
            className="absolute w-[200px] h-[300px] top-[10%] left-1/2 -translate-x-1/2 animate-rotate3d z-30 [transform-style:preserve-3d] [transform:perspective(1000px)]"
            style={{ '--quantity': String(cards.length) } as React.CSSProperties}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="absolute w-full h-full"
                style={{
                  transform: `rotateY(${(360 / cards.length) * index}deg) translateZ(500px)`,
                }}
              >
                <MysticalCard project={card} />
              </div>
            ))}
          </div>

          {/* Statue */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] px-4 pb-24 flex flex-wrap justify-between items-center z-20">
            <div className="relative w-full h-[75vh]">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[30%] h-10 bg-white/10 opacity-30 rounded-full blur-md z-0" />
              <div
                className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-top bg-contain z-10"
                style={{ backgroundImage: "url('/Images/Athena-Statue.png')" }}
              />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div>
{/* <MobileProjectsSection projects={cards} /> */}
<div
  className="relative w-full overflow-hidden whitespace-nowrap z-30 md:hidden flex justify-center items-center bg-opacity-95"
>
  <div className="inline-flex animate-marquee space-x-4 min-w-max">
    {/* Duplicate the card list twice to allow infinite scroll */}
    {[...cards, ...cards].map((card, index) => (
      <div
        key={index}
        className="w-[200px] h-[450px] flex-shrink-0"
      >
        <MysticalCard project={card} />
      </div>
    ))}
  </div>
</div>

       </div>

      </div>
            {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#caa56e]/40 to-transparent opacity-60 sm:h-1 sm:via-[#caa56e]/50 sm:opacity-70"></div> */}

    </div>
  );
};

export default Work;
