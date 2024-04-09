import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';

export default function BlogSnapshot() {
    return (
        <section className="flex justify-center bg-gray-100 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The Latest From My Blog</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Insights, musings, and more.
                </p>
              </div>
              <div className="grid gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <Blog />
                <Blog />
                <Blog />
              </div>
              <div className="flex justify-center">
                <Link className="btn btn-primary md:w-auto translate-y-2" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
    )
}