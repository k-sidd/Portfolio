export const TopBar = () => {
    return <div className="font-main grid grid-cols-2 pt-10 pb-8 px-24  ">
        <div className="justify-start	flex items-center text-lg ">
            <div className="px-4 transition duration-300 ease-in-out hover:text-white cursor-pointer">
                Home
            </div>
            <div className="px-4 transition duration-300 ease-in-out hover:text-white cursor-pointer">
                About me
            </div>
            <div className="px-4 transition duration-300 ease-in-out hover:text-white cursor-pointer">
                Projects
            </div>
            <div className="px-4 transition duration-300 ease-in-out hover:text-white cursor-pointer">
                Contact me
            </div>
        </div>
        <div className="justify-end flex" >

        </div>

    </div>
}