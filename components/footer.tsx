export function Footer() {
  return (
    <footer className="bg-[#282828] px-10 py-10 text-center text-[#B3B3B3] border-t border-[#404040]">
      <p className="mb-2.5">
        © 2024 PlaylistPlus+. All rights reserved. Powered by advanced Spotify advertising technology.
      </p>
      <p className="mb-2.5">
        Spotify is a registered trademark of Spotify AB. PlaylistPlus+ is not affiliated with Spotify.
      </p>
      <div className="flex gap-5 justify-center flex-wrap text-sm mt-5">
        <a href="#" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
          Privacy Policy
        </a>
        <a href="#" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
          Terms of Service
        </a>
        <a href="#" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
          Contact Us
        </a>
        <a href="#" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
          Blog
        </a>
        <a href="https://wa.me/918140774326?text=how%20can%20help%20you" target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] no-underline transition-colors duration-300 hover:text-[#1DB954]">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
