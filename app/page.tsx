import Image from 'next/image';

export default function Home() {
  const svgs = [
   '/1.svg', '/2.svg', '/3.svg', '/4.svg',
    '/5.svg', '/6.svg', '/7.svg', '/8.svg'
  ];

  return (
    // 'bg-white' or whatever your SVG background color is to prevent flickering
    <main className="flex flex-col items-center bg-white min-h-screen">
      {/* 1. max-w-[1440px]: Caps the width for desktop.
          2. w-full: Ensures it fills the screen on mobile.
          3. leading-[0]: Removes tiny 1-2px gaps caused by inline element spacing.
      */}
      <div className="w-full max-w-[1440px] flex flex-col leading-[0]">
        {svgs.map((src, index) => (
          <div 
            key={index} 
            className="w-full relative block"
          >
            <Image
              src={src}
              alt={`Section ${index + 1}`}
              width={1440} 
              height={900} // This is a reference ratio, not a forced height
              layout="responsive" // Ensures the image scales its height with its width
              className="w-full h-auto"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

