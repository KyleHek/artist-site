export default function Footer({ isScrolled }) {
  return (
    <footer className={`bg-gray-700 text-white py-4 px-4 w-full ${isScrolled ? 'h-20' : 'h-16'} transition-all duration-300 ease-in-out bottom-0 z-10`}>
        <div className="flex justify-around items-center">
          <div className="text-sm">© 2024 Molly Lester</div>
            <div className="flex space-x-4">
              <div className="text-[20px] cursor-pointer" href="https://www.instagram.com/mollys_creative_corner">
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </div>
              <div className="text-[20px] cursor-pointer" href="www.facebook.com/profile.php?id=61551289988414">
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </div>
            </div>
        </div>
    </footer>
  );
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