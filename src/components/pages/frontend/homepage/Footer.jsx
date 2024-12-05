import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16">
      <div className="container">
        <div className="grid grid-cols-[1fr_2fr] mb-16">
          <div className="footer-info flex flex-col min-h-[300px] justify-between">
            <div>
              <img
                src="https://cdn.prod.website-files.com/63661389dd2417f19a0d89d3/636a2cb5715eea61d64a3119_logo.svg"
                alt=""
                className="mb-8"
              />
              <ul className="space-y-5">
                <li>Fylla Digital Agency</li>
                <li>Main Street 16</li>
                <li>Lisbon</li>
              </ul>
            </div>
            <ul className="flex gap-5">
              <li className="size-[30px] center-all rounded-full border border-black text-xs hover:bg-black hover:text-white">
                TW
              </li>
              <li className="size-[30px] center-all rounded-full border border-black text-xs hover:bg-black hover:text-white">
                IN
              </li>
              <li className="size-[30px] center-all rounded-full border border-black text-xs hover:bg-black hover:text-white">
                BE
              </li>
            </ul>
          </div>

          <div className="footer-links grid grid-cols-3 gap-5 pl-5 border-l border-light">
            <div>
              <h4 className="font-[syne] mb-10 text-2xl font-normal">Pages</h4>
              <ul className="mb-5 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Service
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Contact
                  </Link>
                </li>
              </ul>

              <Link className="btn-animate" data-text="More Templates">
                More Templates
              </Link>
            </div>
            <div>
              <h4 className="font-[syne] mb-10 text-2xl font-normal">CMS</h4>
              <ul className="mb-5 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Work Single
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Blog Post
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Shop Single
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-[syne] mb-10 text-2xl font-normal">
                Utility Pages
              </h4>
              <ul className="mb-5 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    404 Error Page
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Password Protected
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Styleguide
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center uppercase py-10 border-t border-light  text-[15px]">
          <p>© Made by Pawel Gola - Powered by Webflow</p>
          <ul className="flex gap-5">
            <li>Privacy</li>
            <li>Imprint</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
