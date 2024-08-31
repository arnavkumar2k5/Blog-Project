import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus, 
    },
  ];

  return (
    <header className="py-3 shadow bg-[#f4f0ec] text-[#3B2F2F] font-bold">
      <Container>
        <div className="md:flex">
        <nav className="flex">
          <div className="w-full mr-4 flex justify-between items-center">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
            </button>
          </div>
          </div>
            </nav>
          <ul className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:ml-auto mt-3 md:mt-0`}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setMenuOpen(false);
                    }}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-[#DCC7AA] rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
                <li>
                    <LogoutBtn/>
                </li>
            )}
          </ul>
          </div>
      </Container>
    </header>
  );
}

export default Header;
