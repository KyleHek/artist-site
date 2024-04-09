export default function AboutSection() {
    return (
        <section className="flex justify-center w-full py-12 lg:py-24">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 xl:gap-12">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Artist</h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Award-winning artist Jane Doe creates vibrant, expressive paintings that capture the beauty of the natural
                        world. Her masterful use of color and texture brings her landscapes to life, evoking a sense of wonder and
                        tranquility in the viewer.
                        </p>
                    </div>
                    <div className="grid gap-1 text-sm sm:grid-cols-2">
                    <div className="font-medium">Name</div>
                    <div>Jane Doe</div>
                    <div className="font-medium">Location</div>
                    <div>New York, NY</div>
                    <div className="font-medium">Style</div>
                    <div>Impressionism</div>
                    <div className="font-medium">Influences</div>
                    <div>Monet, Turner, O'Keeffe</div>
                </div>
            </div>
            <div className="flex justify-center">
                <img
                alt="Jane Doe"
                className="rounded-full border"
                height="400"
                src="/placeholder.svg"
                style={{
                aspectRatio: "400/400",
                objectFit: "cover",
                }}
                width="400"
                />
            </div>
        </div>
      </section>
    )
}