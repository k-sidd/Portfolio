import { useEffect, useState } from 'react'
import './App.css'
import { Technologies } from './components/Technologies'
import { TopBar } from './components/TopBar'

function App() {
    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowElement(true);
        }, 1500)

        return () => {
            clearTimeout(timer)
        }
    })


    return <div >
        <div style={{ backgroundImage: 'url("https://ibb.co/cQp9N8R")', backgroundSize: "", backgroundPosition: "center", backgroundRepeat: "repeat" }}>
          <div className='text-[#05B2DC] bg-gradient-to-b from-[#0f172ae9] from-50% to-[#0f172abc]'>
        <div className={`${showElement ? 'animate-fadeIn' : 'opacity-0'}`}>
                <TopBar />
            </div>
        </div>
            <div className='bg-[#0f172abc] text-[#d5f4fc] h-full pb-16 -z-10' >
                <div className='flex justify-center w-full font-main px-12 pt-16 rounded-xl'>
                    <div>
                        <div className='overflow-hidden whitespace-nowrap inline-block border-r-[32px] border-lBlue text-8xl font-semibold animate-typing'>
                            Siddhant Kamble
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
                    <Technologies />
                </div>
            </div>
        </div>
    </div>
}

export default App
