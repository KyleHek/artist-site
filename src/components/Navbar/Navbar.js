import { Link } from 'react-router-dom';

export default function Navbar({ isScrolled }) {
  return (
    <nav className={`fixed top-0 z-10 bg-white border-b shadow-md gap-4 text-sm font-medium px-4 w-full transition-all duration-500 ease-in-out ${isScrolled ? 'py-4' : 'py-8'}`}> 
      <div className="flex items-center">
        <div className="flex items-center space-x-2 hover:text-blue-900" href="#">
            <PaletteIcon className="h-8 w-8 cursor-pointer opacity-90" />
            <span className="font-serif italic cursor-pointer text-3xl lg:text-2xl opacity-90">Molly Lester</span>
        </div>
        <nav className="flex-1 gap-20 justify-center hidden lg:flex flex-row list-none">
            <li className="mx-1 cursor-pointer opacity-90 hover:text-blue-900" href="#">
            <Link to="/">Home</Link>
            </li>
            <li className="mx-1 cursor-pointer opacity-90 hover:text-blue-900" href="#">
            <Link to="/gallery">Gallery</Link>
            </li>
            <li className="mx-1 cursor-pointer opacity-90 hover:text-blue-900" href="#">
            Blog
            </li>
            <li className="mx-1 cursor-pointer opacity-90 hover:text-blue-900" href="#">
            About
            </li>
            <li className="mx-1 cursor-pointer opacity-90 hover:text-blue-900" href="#">
            Contact
            </li>
        </nav>
        <div className="ml-auto space-x-2 flex items-center opacity-60">
            <div className="text-[20px] cursor-pointer" href="https://www.instagram.com/mollys_creative_corner">
                <InstagramIcon className="h-6 w-6 hover:text-blue-900" />
                <span className="sr-only">Instagram</span>
            </div>
            <div className="text-[20px] cursor-pointer" href="www.facebook.com/profile.php?id=61551289988414">
                <FacebookIcon className="h-6 w-6 hover:text-blue-900" />
                <span className="sr-only">Facebook</span>
            </div>
        </div>
      </div>
    </nav>
  )
}
  
function FacebookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
}
  
  
function InstagramIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
}
  
function PaletteIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    )
}