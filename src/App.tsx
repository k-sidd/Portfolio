import { useEffect, useRef, useState } from 'react';
import './App.css';
import { TechnologiesV2 } from './components/Technologies';
import { TopBar } from './components/TopBar';
import Typed from 'typed.js';

function App() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showElement, setShowElement] = useState(false)

    const backgroundUrl2 = 'https://images.pexels.com/photos/29112651/pexels-photo-29112651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    useEffect(() => {
        const img = new Image();
        img.src = backgroundUrl2;
        img.onload = () => setImageLoaded(true);
    }, []);

    const el = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (el.current) {
                const typed = new Typed(el.current, {
                    strings: ['Siddhant Kamble'],
                    typeSpeed: 25,
                    cursorChar: '',

                    // showCursor: false
                });

                return () => {
                    typed.destroy();
                };
            }
        }, 0);

        return () => {
            clearTimeout(timer);
        };
    }, [imageLoaded]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowElement(true);
        }, 600)

        return () => {
            clearTimeout(timer)
        }
    }, [imageLoaded])


    if (!imageLoaded) {
        return <div className='bg-[#0B1427] h-screen'>

        </div>; // Loading placeholder
    }

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url("${backgroundUrl2}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className='text-[#05B2DC] bg-gradient-to-b from-[#0f172ae9] from-50% to-[#0f172abc]'>
                    <div className={`${showElement ? 'animate-fadeIn' : 'opacity-0'}`}>
                        <TopBar />
                    </div>
                </div>
                <div className='bg-[#0f172abc] text-[#d5f4fc] h-full pb-16 -z-10'>
                    <div className='flex justify-center w-full font-main px-12 pt-16 rounded-xl'>
                        <div>
                            <div className='overflow-hidden whitespace-nowrap inline-block text-8xl font-semibold'>
                                <span ref={el} className='pr'></span>
                            </div>
                            <div className={`${showElement ? 'animate-fadeIn' : 'opacity-0'}`}>
                                <div className='flex justify-center mt-4 text-lg font-roboto font-semibold text-[#7aa0aa]'>
                                    I make functional and user-friendly websites and web applications
                                </div>
                                <div className='flex justify-center m-7 text-4xl text-[#7aa0aa] font-semibold uppercase font-roboto'>
                                    Familiar with:
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${showElement ? 'animate-fadeIn' : 'opacity-0'}`}>
                        <TechnologiesV2 />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
