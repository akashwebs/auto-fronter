import { Button, Container, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import React from "react";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenNavMenu = () => {
    setDrawer(true);
  };

  const handleCloseNavMenu = () => {
    setDrawer(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Product",
      link: "/product",
    },
    {
      title: "Fish Treatment",
      link: "/fish-treatment",
    },
    {
      title: "Photo Gallery",
      link: "/photo-gallery",
    },
    {
      title: "Video Gallery",
      link: "/video-gallery",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
  ];

  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href={"/"}>
            <div className="flex items-center gap-3">
              <h2 className=" text-[25px] font-semibold">M-M agrovet</h2>
            </div>
          </Link>
          <div>
            <div className="hidden lg2:flex items-center gap-8">
              <div>
                <ul className="flex text-black justify-start items-center text-lg font-normal gap-[20px]">
                  {navData.map((nav, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer text-[13px] text-[#555] font-medium hover:text-primary duration-300${
                        router.pathname === nav.link
                          ? " text-primary"
                          : " hover:text-primary"
                      }`}
                    >
                      <Link href={nav.link}>{nav.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="block lg2:hidden">
              <div>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Icon
                    className="text-primary md:text-2xl text-xl"
                    icon="material-symbols:menu"
                  />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  {navData.map((nav, index) => (
                    <MenuItem key={index} onClick={() => handleClose()}>
                      <Link className="md:text-normal text-xs" href={nav.link}>
                        {nav.title}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
