import Link from "next/link";
// export function Footer() {
//   return (
//     <footer className="bg-[#282828] px-10 py-10 text-center text-[#B3B3B3] border-t border-[#404040]">
//       <p className="mb-2.5">
//         © 2024 PlaylistPlus+. All rights reserved. Powered by advanced Spotify advertising technology.
//       </p>
//       <p className="mb-2.5">
//         Spotify is a registered trademark of Spotify AB. PlaylistPlus+ is not affiliated with Spotify.
//       </p>
//       <div className="flex gap-5 justify-center flex-wrap text-sm mt-5">
//         <a href="/privacy" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
//           Privacy Policy
//         </a>
//         <a href="/terms" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
//           Terms of Service
//         </a>
//         <a href="#" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
//           Contact Us
//         </a>
//         <a href="#" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
//           Blog
//         </a>
//         <a href="https://wa.me/918140774326?text=how%20can%20help%20you" target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
//           WhatsApp
//         </a>
//       </div>
//     </footer>
//   );
// }


export function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-[#B3B3B3] md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Top row: Logo + Social Icons */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Logo - replace with your actual image or SVG */}
          {/* <div className="text-2xl font-bold tracking-tight text-white">
            playlist<span className="text-[#1DB954]">plus</span>
          </div> */}
          <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
  {/* Logo from public folder */}
  <Link href="/">
  <img
    src="/logo.png"
    alt="PlaylistPlus"
    className="h-10 w-auto"
  />
  </Link>

  {/* Social Icons (unchanged) */}
  <div className="flex gap-4">
    {/* ... your social icons ... */}
  </div>
</div>

          {/* Social Icons - replace with your preferred icon library */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/p/Playlistplus-61553682123262/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] transition-colors hover:bg-[#3E3E3E]"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/playlistplus_/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] transition-colors hover:bg-[#3E3E3E]"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Two‑column layout: Advertising & Useful Links */}
        <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">
          {/* Advertising column */}
          {/* <div>
            <h3 className="mb-3 text-base font-semibold text-white">Advertising</h3>
          
          </div> */}

          {/* Useful Links column */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-white">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#markets" className="transition-colors duration-200 hover:text-white">
                  Markets
                </a>
              </li>
              <li>
                <a href="/#pricing" className="transition-colors duration-200 hover:text-white">
                Pricing
                </a>
              </li>
               <li>
                <a href="/#features" className="transition-colors duration-200 hover:text-white">
                Features
                </a>
              </li>
               <li>
                <a href="/#case-studies" className="transition-colors duration-200 hover:text-white">
                Case Studies
                </a>
              </li>
              <li>
                <a href="/blog" className="transition-colors duration-200 hover:text-white">
                Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Policy links row */}
        <div className="mt-12 border-t border-[#282828] pt-8">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="/privacy" className="transition-colors duration-200 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors duration-200 hover:text-white">
              Terms & Condition
            </a>
            <a href="/refund" className="transition-colors duration-200 hover:text-white">
              Refund Policy
            </a>
            <a href="https://wa.me/918140774326" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-white">
              Chat Us on Whatsapp Please
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm">© 2026 playlistplus</div>
      </div>
    </footer>
  )
}