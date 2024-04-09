import { Link } from 'react-router-dom';
export default function Blog() {
    return (
        <div className="w-full max-w-sm border rounded-md">
          <Link className="block w-full aspect-[16/9] border rounded-md" href="#">
            <img alt="Thumbnail" className="aspect-[16/9]" height={225} src="/placeholder.svg" width={400} />
          </Link>
          <div className="p-6">
            <div className="pb-4">
              <div className="text-2xl font-semibold line-clamp-2">Introducing Vercel Analytics</div>
              <div>
                by
                <Link className="font-medium underline" href="#">
                  @leerob
                </Link>
                {" \n                    "}on
                <time datetime="2023-09-12">September 12, 2023</time>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-sm/relaxed line-clamp-3">
                Announcing Vercel Analytics: Real-time insights into your deployment pipeline, traffic, and performance.
              </p>
            </div>
          </div>
        </div>
    )
}