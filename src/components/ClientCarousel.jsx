import React, { useRef, useEffect } from "react";

const clients = [
    "Indo-Mim Ltd",
    "Chakradhara Aerospace and Cargo Private Limited",
    "Roots Industries",
    "Aeropact Precision Machining Private Limited",
    "Hampson Industries Private Limited",
    "Amphenol Interconnect India Private ltd",
    "RK POLYMER Industries PVT LTD",
    "GOULD ALLOYS LTD - UK",
    "SAN AEROSPACE INDIA PRIVATE LIMITED",
    "JRVD Defspace Technologies Pvt Ltd"
];

export default function ClientCarousel() {
    const scrollRef = useRef(null);
    // Duplicate the clients for seamless looping
    const carouselClients = [...clients, ...clients];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let animationFrame;
        let speed = 1; // px per frame

        function animate() {
            if (!scrollContainer) return;
            // If scrolled to the end of the first set, reset to start
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            } else {
                scrollContainer.scrollLeft += speed;
            }
            animationFrame = requestAnimationFrame(animate);
        }
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    // Custom CSS for hiding scrollbar
    const hideScrollbar = {
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE 10+
    };

    return (
        <div
            ref={scrollRef}
            className="client-carousel flex space-x-4 overflow-x-auto pb-2"
            style={{
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'auto',
                ...hideScrollbar,
            }}
        >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <style>{`
                .client-carousel::-webkit-scrollbar { display: none; }
            `}</style>
            {carouselClients.map((client, idx) => (
                <div
                    key={idx}
                    className="min-w-[220px] max-w-xs h-32 bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center mx-1 transition-colors duration-200 hover:bg-violet-50 hover:border-violet-400"
                    style={{ overflow: 'hidden', wordBreak: 'break-word', display: 'flex' }}
                >
                    <span className="text-sm text-gray-700 break-words w-full block" style={{whiteSpace: 'normal'}}>{client}</span>
                </div>
            ))}
        </div>
    );
}
