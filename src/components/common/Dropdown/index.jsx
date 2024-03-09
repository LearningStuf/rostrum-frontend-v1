"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NestedDropDown = ({ routes }) => {
  return (
    <div className="hidden md:block absolute top-0 left-full z-10 min-w-[300px] max-h-[300px] overflow-y-scroll bg-light-yellow rounded-md">
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.link || "/"}
          className="block py-2 px-5 text-[16px] font-semibold text-primary-light transition-all delay-100 hover:text-secondary"
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};

const NestedDropDownMob = ({routes})=>{
  return(
    <div className="block md:hidden  z-10 min-w-[300px] max-h-[300px] overflow-y-scroll bg-light-yellow rounded-md">
    {routes.map((route, index) => (
      <Link
        key={index}
        href={route.link || "/"}
        className="block py-2 px-5 text-[16px] font-semibold text-primary-light transition-all delay-100 hover:text-secondary"
      >
        {route.title}
      </Link>
    ))}
  </div>
  )
}

const DropDown = ({ name, items }) => {
  const pathname = usePathname();
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.document &&
      document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onClickNestedItem = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="relative" ref={ref}>
      <p
        className="py-2 px-3 text-[20px] font-semibold text-primary-dark uppercase flex items-center transition-all duration-300 hover:text-secondary cursor-pointer"
        onClick={() => setOpen(!open)} // Toggle the dropdown
      >
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="9"
          viewBox="0 0 13 9"
          className={`ml-2 ${open ? "rotate-180" : ""}`}
        >
          <path
            fill="#17234F"
            transform="translate(13 9) rotate(180)"
            d="M5.689,1.122a1,1,0,0,1,1.621,0l4.544,6.292A1,1,0,0,1,11.044,9H1.956a1,1,0,0,1-.811-1.585Z"
          />
        </svg>
      </p>
      {open && (
        <div className="absolute top-full left-0 z-10">
          <div className="min-w-[96vw] md:min-w-[200px] bg-light-yellow rounded-md ">
            {items.map((item, i) => {
              if (item.routes) {
                return (
                  <div
                    key={i}
                    className="relative"
                    onMouseEnter={() => onClickNestedItem(item.title)}
                  >
                    <p className="py-2 px-5 text-[16px] font-semibold text-primary-light transition-all delay-100 hover:text-secondary cursor-pointer">
                      {item.title}
                    </p>
                    {activeMenu === item.title && (
                    <NestedDropDownMob routes={item.routes || []} />
                    )}
                    {activeMenu === item.title && (
                      <NestedDropDown routes={item.routes || []} />
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={i}
                  href={item?.link ? item.link : "/"}
                  className="block py-2 ps-5 pe-3 text-[16px] font-semibold text-primary-light transition-all delay-100 hover:text-secondary"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
