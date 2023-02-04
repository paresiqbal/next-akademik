import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li tabIndex={0}>
              <a className="justify-between">
                Informasi Kami
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-primary">
                <li>
                  <a>Sambutan</a>
                </li>
                <li>
                  <a>Visi & Misi</a>
                </li>
                <li>
                  <a>Guru & Tenaga Kependidikan</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Program Studi
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-primary">
                <li>
                  <a>Teknik Komputer Jaringan</a>
                </li>
                <li>
                  <a>Multimedia</a>
                </li>
                <li>
                  <a>Tataboga</a>
                </li>
                <li>
                  <a>Perkantoran</a>
                </li>
                <li>
                  <a>Akutansi</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Media & Informasi
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-primary">
                <li>
                  <a>Berita</a>
                </li>
                <li>
                  <a>Gallery</a>
                </li>
                <li>
                  <a>Agenda</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>
              <AiFillHome />
            </Link>
          </li>
          <li tabIndex={0}>
            <a>
              Informasi Kami
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Sambutan</a>
              </li>
              <li>
                <a>Visi & Misi</a>
              </li>
              <li>
                <a>Guru & Tenaga Kependidikan</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>
              Program Studi
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Teknik Komputer Jaringan</a>
              </li>
              <li>
                <a>Multimedia</a>
              </li>
              <li>
                <a>Tataboga</a>
              </li>
              <li>
                <a>Perkantoran</a>
              </li>
              <li>
                <a>Akutansi</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a>
              Media & Informasi
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Berita</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>Agenda</a>
              </li>
              <li>
                <a>Download</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}
