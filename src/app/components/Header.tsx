export default function Header() {
    return (
      <header className="bg-black text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            MIXitUP
          </h1>
  
          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/about"
                  className="hover:text-accent transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/ranking"
                  className="hover:text-accent transition duration-200"
                >
                  Ranking
                </a>
              </li>
            </ul>
          </nav>
  
          {/* Login Button */}
          <a
            href="/signin"
            className="bg-gradient-to-r from-primary to-accent text-black font-semibold py-2 px-6 rounded-full hover:scale-105 transition transform"
          >
            Login
          </a>
        </div>
      </header>
    );
  }
  