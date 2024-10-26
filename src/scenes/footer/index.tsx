const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-12 pt-20 text-gray-100">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {/* About Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="text-sm leading-relaxed text-[#FFE3D0]">
              I’m Daniel Du, a passionate front-end developer with a love for
              learning and growth. Explore my journey, projects, and skills to
              see how I continuously strive for excellence.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span>🔗</span>
                <a
                  href="#career"
                  className="text-[#FFE3D0] transition duration-200 hover:text-primary-500"
                >
                  My Experience
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>💼</span>
                <a
                  href="#portfolio"
                  className="text-[#FFE3D0] transition duration-200 hover:text-primary-500"
                >
                  Portfolio
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>⚙️</span>
                <a
                  href="#skills"
                  className="text-[#FFE3D0] transition duration-200 hover:text-primary-500"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="text-sm leading-relaxed text-[#FFE3D0]">
              Feel free to get in touch if you'd like to discuss potential
              opportunities or just to say hello!
            </p>
            <ul className="flex space-x-5">
              <li>
                <a
                  href="https://github.com/DanielDu95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition duration-200 hover:scale-110"
                >
                  <img
                    className="w-7"
                    src="assets/icons/github.png"
                    alt="GitHub"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/danieldu1131/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition duration-200 hover:scale-110"
                >
                  <img
                    className="w-7"
                    src="/assets/icons/instagram.png"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition duration-200 hover:scale-110"
                >
                  <img
                    className="w-7"
                    src="/assets/icons/facebook.png"
                    alt="Facebook"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-[#FFE3D0]">
          © 2024 Daniel Du. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
