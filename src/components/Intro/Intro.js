import banner from '../../assets/banner-img.jpeg'; // Import the image file

export default function Intro() {
    return (
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid max-w-5xl mx-auto items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        The Art of Molly Lester
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Gallery is dedicated to showcasing the finest contemporary art from emerging and established artists.
                        </p>
                    </div>
                    <div className="mx-auto w-full max-w-md overflow-hidden">
                        <img
                            alt="Banner"
                            className="rounded-xl object-cover object-center"
                            src={banner}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}