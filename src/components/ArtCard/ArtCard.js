export default function ArtCard() {
    return (
        <div className="relative group rounded-lg overflow-hidden aspect-square cursor-pointer">
            <img
                alt="Artwork thumbnail"
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                height={400}
                src="/placeholder.svg"
                style={{
                aspectRatio: "400/400",
                objectFit: "cover",
                }}
                width={400}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-gray-900/50 transition-all opacity-0 group-hover:opacity-100 dark:bg-gray-200/50 dark:opacity-100">
                <h3 className="font-semibold text-sm tracking-wide uppercase text-gray-50 dark:text-gray-950">
                    The Masterpiece
                </h3>
                <span className="text-xs text-gray-300 dark:text-gray-600">by</span>
                <span className="font-medium text-sm text-gray-300 dark:text-gray-600">Jane Doe</span>
            </div>
        </div>
    )
}