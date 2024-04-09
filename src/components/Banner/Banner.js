import banner from './banner-img.jpeg'; // Import the image file

export default function Banner() {
    return (
        <div className="relative w-full">
            <img src={banner} alt="Banner" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-shadow-md">Welcome to my Art Gallery</h1>
                </div>
            </div>
        </div>
    )
}