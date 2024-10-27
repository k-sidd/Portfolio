import { technologies } from "../Technologies"

export const TechnologiesV2 = () => {
    return <div className="w-full">
        <div className="flex justify-center">
            <div className="grid grid-cols-4">
                {technologies.map((technology, index) => (
                    <div className="flex items-center my-4 px-4">
                        <img
                            key={index}
                            className="object-contain w-32 h-32 flex items-center bg-[#ffffff75] p-4 rounded-lg hover:scale-110 transition transform duration-300"
                            src={technology.url}
                            alt={technology.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
}