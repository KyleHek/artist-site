import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <div className="flex flex-col space-y-2">
            <Link className="font-semibold line-clamp-2 sm:line-clamp-3 hover:underline" to="#">
            The Art of Remote Work: How to Stay Productive and Connected
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            In the age of remote work, staying productive and connected is more important than ever. Here are some
            tips to help you master the art of remote work.
            </p>
        <div className="flex items-center space-x-2 text-sm">
          <div className="flex items-center space-x-2">
            <img
              alt="Author"
              className="rounded-full"
              height={32}
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width={32}
            />
            <span className="font-medium">Emma Johnson</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">June 10, 2023</span>
        </div>
      </div>
    )
}