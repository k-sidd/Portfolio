import { firstFour, secondFour } from "../Technologies"

export const Technologies = () => {
    return <div>
        <FourIcons setOfFour={firstFour} />
        <FourIcons setOfFour={secondFour} />
    </div >
}

function FourIcons({setOfFour}: {setOfFour: object}) {
    return <div className="w-full">
        <div className="flex justify-center">
            <div className="grid grid-cols-4">
                {Object.entries(setOfFour).map(([key, url]) => (
                    <TechLogo key={key} url={url} />
                ))}
            </div>
        </div>
    </div>
}

function TechLogo({ url }: { url: string }) {
    return <div className="flex items-center my-4 px-4">
        <img className="object-contain w-32 h-32 flex items-center bg-[#ffffff75] p-4 rounded-lg hover:scale-110 transition transform duration-300" src={url} alt="" />
    </div>
}