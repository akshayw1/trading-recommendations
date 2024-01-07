"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import Button1 from "../buttons/button1";
import Button2 from "../buttons/button2";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useOnboardingContext } from "@/context/MyContext";
import pagesWithTable from "./pagesWithTable";

export default function Aside() {
  const { session, status } = useOnboardingContext();
  const pathname = usePathname();
  const hideAside = pagesWithTable.includes(pathname) ? true : false;
  const [menuOption, setMenuOption] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Image
        onClick={() => setMenuOpen(true)}
        className={`${styles.mobile} ${styles.menuIcon}`}
        alt="menu"
        width={256}
        height={256}
        src="/images/nav/menu-svgrepo-com.png"
      />
      <div
        id="asideMenu"
        className={`${menuOpen ? "menuIsOpen" : ""} ${styles.overlay} ${
          styles.mobile
        }`}
      ></div>
      <aside
        id="asideMenu"
        className={`${menuOpen ? "menuIsOpen" : ""} ${
          hideAside ? styles.onTable : ""
        } ${styles.aside} `}
      >
        <Link className={styles.desktop} href="/home">
          <Image
            alt="logo"
            width={198}
            height={122}
            src="/images/Logo.png"
          ></Image>
        </Link>
        <Image
          onClick={() => setMenuOpen(false)}
          className={styles.mobile}
          alt="close"
          width={256}
          height={256}
          src="/images/nav/close-svgrepo-com.png"
        />
        <div className={`${styles.menuOptions} ${styles.mobile}`}>
          <Button1
            onClick={() => toggleMenuOption(0)}
            style2={{
              fontWeight: 600,
              fontSize: "1.5rem",
              height: 46,
            }}
            width="187.5px"
            borderSize="3px 2px 3px 3px"
            borderRadius="0"
          >
            Crypto
          </Button1>
          <Button1
            onClick={() => toggleMenuOption(1)}
            style2={{
              fontWeight: 600,
              fontSize: "1.5rem",
              height: 46,
            }}
            width="187.5px"
            borderRadius="0"
            borderSize="3px 3px 3px 2px"
          >
            Menu
          </Button1>
        </div>
        <ul
          className={`${styles.mobile} ${styles.navMenu} ${
            menuOption === 1 ? styles.menuSelected : ""
          }`}
        >
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/home">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/guide">
              Guide
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/about">
              About us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/contactus">
              Contact us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/donate">
              Donate
            </Link>
          </li>
        </ul>
        <ul className={`${menuOption === 0 ? styles.menuSelected : ""}`}>
          <li className={styles.blue}>Futures & Options OI</li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className={styles.white}
              href="/bitcoin"
            >
              <div>
                <svg
                  className={styles.fill}
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8938 12.4343C21.1825 10.5049 19.7133 9.46767 17.7044 8.77576L18.3561 6.16215L16.765 5.76567L16.1305 8.3104C15.7123 8.20618 15.2826 8.10786 14.8557 8.01044L15.4947 5.44894L13.9045 5.05246L13.2524 7.66515C12.9062 7.58631 12.5663 7.50838 12.2364 7.42636L12.2382 7.41821L10.044 6.87038L9.6207 8.56958C9.6207 8.56958 10.8012 8.84009 10.7763 8.85686C11.4207 9.01772 11.5372 9.4441 11.5177 9.78213L10.7754 12.7596C10.8198 12.7709 10.8773 12.7872 10.9408 12.8126C10.8878 12.7995 10.8311 12.785 10.7727 12.7709L9.73217 16.9419C9.65332 17.1376 9.45348 17.4313 9.00302 17.3198C9.01889 17.3429 7.84653 17.0312 7.84653 17.0312L7.05664 18.8523L9.12719 19.3683C9.51239 19.4649 9.88987 19.5659 10.2615 19.6611L9.60303 22.3046L11.1923 22.7011L11.8444 20.0856C12.2786 20.2035 12.7 20.3122 13.1124 20.4146L12.4625 23.0178L14.0536 23.4143L14.7121 20.7757C17.4252 21.2891 19.4654 21.082 20.3242 18.6284C21.0162 16.6528 20.2897 15.5132 18.8622 14.7701C19.9018 14.5304 20.6849 13.8466 20.8938 12.4343ZM17.2585 17.5314C16.7668 19.507 13.44 18.439 12.3615 18.1712L13.2352 14.669C14.3138 14.9382 17.7724 15.4711 17.2585 17.5314ZM17.7506 12.4057C17.302 14.2028 14.5331 13.2897 13.6349 13.0659L14.4271 9.88953C15.3252 10.1134 18.2178 10.5311 17.7506 12.4057Z"
                    fill="white"
                  />
                </svg>
              </div>
              Bitcoin
            </Link>
          </li>
          <li className={styles.white}>
            <Link
              onClick={() => setMenuOpen(false)}
              className={styles.white}
              href="/ethereum"
            >
              <div>
                <svg
                  className={styles.fill}
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4993 5.17856L14.3711 5.60341V17.9305L14.4993 18.0553L20.3658 14.673L14.4993 5.17856Z"
                    fill="white"
                  />
                  <path
                    d="M14.4975 5.17856L8.63086 14.673L14.4975 18.0553V12.072V5.17856Z"
                    fill="white"
                  />
                  <path
                    d="M14.499 19.1386L14.4268 19.2245V23.6156L14.499 23.8214L20.3691 15.758L14.499 19.1386Z"
                    fill="#E8E8E8"
                  />
                  <path
                    d="M14.4975 23.8214V19.1386L8.63086 15.758L14.4975 23.8214Z"
                    fill="white"
                  />
                  <path
                    d="M14.4971 18.0551L20.3635 14.6728L14.4971 12.0718V18.0551Z"
                    fill="#E8E8E8"
                  />
                  <path
                    d="M8.63086 14.6728L14.4975 18.0551V12.0718L8.63086 14.6728Z"
                    fill="#E8E8E8"
                  />
                </svg>
              </div>
              Ethereum
            </Link>
          </li>
          <li className={styles.blue}>Futures OI</li>
          <li className={styles.white}>
            <div>
              <svg
                className={styles.fill}
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6625 5.88166L5.96334 11.5732C5.88988 11.4308 5.82354 11.2824 5.76414 11.1285C5.56513 10.6114 5.46558 10.0627 5.46558 9.48322C5.46558 8.90329 5.56513 8.35486 5.76414 7.83772C5.96334 7.32036 6.23937 6.87154 6.59223 6.49059C6.94519 6.10986 7.3693 5.80874 7.86427 5.58698C8.35963 5.36544 8.90302 5.25457 9.49485 5.25457C10.0869 5.25457 10.6333 5.3682 11.1338 5.59572C11.32 5.68014 11.4962 5.77538 11.6625 5.88166ZM11.1596 13.4133C10.6644 13.635 10.121 13.7457 9.52913 13.7457C8.93711 13.7457 8.39072 13.632 7.88988 13.4048C7.70397 13.3201 7.52778 13.2249 7.36169 13.1184L13.0605 7.42731C13.1341 7.56948 13.2004 7.71763 13.2598 7.87176C13.4588 8.3889 13.5584 8.93755 13.5584 9.51726C13.5584 10.0969 13.4588 10.6453 13.2598 11.1628C13.0605 11.6799 12.7846 12.1287 12.4316 12.5094C12.0788 12.8902 11.6549 13.1915 11.1596 13.4133ZM12.0219 15.178C12.7846 14.8483 13.4448 14.4023 14.0025 13.8393C14.5602 13.2768 14.9926 12.6203 15.2999 11.8701C15.6074 11.12 15.7611 10.3243 15.7611 9.48322C15.7611 8.64195 15.6074 7.84623 15.2999 7.09583C15.1177 6.65093 14.8933 6.24007 14.627 5.86302L18.3337 2.16139L16.8609 0.690491L13.1429 4.40339C12.8091 4.17612 12.4467 3.97966 12.056 3.8138C11.2932 3.4899 10.451 3.32772 9.52913 3.32772C8.60697 3.32772 7.76481 3.49265 7.00209 3.82231C6.23937 4.15196 5.57909 4.59801 5.02144 5.1607C4.4637 5.72339 4.03112 6.37993 3.7238 7.13011C3.41647 7.88028 3.26281 8.676 3.26281 9.51727C3.26281 10.3583 3.41647 11.1538 3.7238 11.9042C3.90624 12.3493 4.13057 12.7602 4.39688 13.1374L0.69043 16.8387L2.16331 18.3095L5.88112 14.5968C6.21492 14.8241 6.57731 15.0207 6.96801 15.1864C7.73073 15.5103 8.57288 15.6724 9.49485 15.6724C10.4169 15.6724 11.2592 15.5073 12.0219 15.178Z"
                  fill="white"
                />
              </svg>
            </div>
            Cosmos
          </li>
          <li className={styles.white}>
            <div>
              <svg
                className={styles.fill2}
                width="29"
                height="27"
                viewBox="0 0 29 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_28_1438)">
                  <path
                    d="M23.4278 4.63165H5.53418V19.7832H23.4278V4.63165Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.9712 13.5C28.9712 20.946 22.488 26.982 14.4905 26.982C6.493 26.982 0.00976562 20.946 0.00976562 13.5C0.00976562 6.05406 6.493 0.0179443 14.4905 0.0179443C22.488 0.0179443 28.9712 6.05406 28.9712 13.5ZM10.3871 18.8652H7.57676C6.98623 18.8652 6.69454 18.8652 6.51668 18.7592C6.32457 18.6433 6.20719 18.4512 6.19296 18.2392C6.18227 18.0439 6.32814 17.8053 6.61984 17.3284L13.5588 5.94098C13.8541 5.45742 14.0035 5.21564 14.192 5.12622C14.3948 5.03018 14.6367 5.03018 14.8395 5.12622C15.028 5.21564 15.1774 5.45742 15.4727 5.94098L16.8992 8.25939L16.9064 8.27122C17.2254 8.78998 17.3871 9.05305 17.4577 9.32916C17.5359 9.63055 17.5359 9.9485 17.4577 10.2499C17.3865 10.5281 17.2265 10.7931 16.9027 11.3197L13.2578 17.3184L13.2484 17.3338C12.9274 17.8568 12.7647 18.1219 12.5393 18.3219C12.2938 18.5406 11.9985 18.6995 11.6748 18.789C11.3796 18.8652 11.0487 18.8652 10.3871 18.8652ZM17.484 18.8652H21.5108C22.1049 18.8652 22.4038 18.8652 22.5818 18.756C22.7738 18.64 22.8947 18.4445 22.9055 18.2327C22.9157 18.0437 22.773 17.8144 22.4934 17.3652C22.4838 17.3499 22.4742 17.3344 22.4643 17.3185L20.4472 14.1059L20.4243 14.0697C20.1409 13.6234 19.9978 13.3981 19.814 13.311C19.6114 13.2149 19.3729 13.2149 19.1702 13.311C18.9852 13.4004 18.8358 13.6356 18.5405 14.1092L16.5306 17.3218L16.5237 17.3329C16.2295 17.8058 16.0825 18.0421 16.0931 18.2359C16.1073 18.448 16.2247 18.6433 16.4168 18.7592C16.5911 18.8652 16.8899 18.8652 17.484 18.8652Z"
                    fill="#131633"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_1438">
                    <rect width="28.9807" height="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            Avalaunch
          </li>
          <li className={styles.white}>
            <div>
              <svg
                className={styles.fill}
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_9_1066)">
                  <path
                    d="M21.6753 18.3569L19.2817 20.8855C19.2296 20.9405 19.1667 20.9843 19.0967 21.0142C19.0268 21.0441 18.9513 21.0596 18.875 21.0595H7.52789C7.47374 21.0595 7.42078 21.0439 7.3755 21.0147C7.33023 20.9854 7.29461 20.9438 7.27303 20.8949C7.25145 20.846 7.24484 20.7919 7.25403 20.7394C7.26321 20.6868 7.28778 20.638 7.32471 20.599L9.72018 18.0704C9.77208 18.0157 9.83483 17.972 9.90456 17.942C9.97431 17.9121 10.0495 17.8966 10.1256 17.8965H21.4721C21.5263 17.8965 21.5792 17.9121 21.6245 17.9413C21.6697 17.9705 21.7054 18.0122 21.727 18.0611C21.7486 18.11 21.7552 18.1641 21.746 18.2166C21.7368 18.2692 21.7122 18.318 21.6753 18.3569ZM19.2817 13.2651C19.2296 13.2101 19.1667 13.1663 19.0967 13.1364C19.0268 13.1065 18.9513 13.0911 18.875 13.0911H7.52789C7.47374 13.0911 7.42078 13.1067 7.3755 13.1359C7.33023 13.1652 7.29461 13.2068 7.27303 13.2557C7.25145 13.3046 7.24484 13.3587 7.25403 13.4112C7.26321 13.4638 7.28778 13.5126 7.32471 13.5516L9.72018 16.0802C9.77208 16.135 9.83483 16.1786 9.90456 16.2086C9.97431 16.2385 10.0495 16.254 10.1256 16.2541H21.4721C21.5263 16.2541 21.5792 16.2385 21.6245 16.2093C21.6697 16.1801 21.7054 16.1384 21.727 16.0895C21.7486 16.0406 21.7552 15.9865 21.746 15.934C21.7368 15.8814 21.7122 15.8327 21.6753 15.7937L19.2817 13.2651ZM7.52789 11.4487H18.875C18.9513 11.4488 19.0268 11.4334 19.0967 11.4034C19.1667 11.3735 19.2296 11.3297 19.2817 11.2748L21.6753 8.74617C21.7122 8.70718 21.7368 8.65841 21.746 8.60585C21.7552 8.55329 21.7486 8.49924 21.727 8.45033C21.7054 8.40141 21.6697 8.35978 21.6245 8.33053C21.5792 8.30129 21.5263 8.28571 21.4721 8.28571H10.1256C10.0495 8.28583 9.97431 8.30134 9.90456 8.33126C9.83483 8.36119 9.77208 8.40489 9.72018 8.45967L7.32533 10.9883C7.28843 11.0272 7.26387 11.076 7.25467 11.1284C7.24547 11.1809 7.25202 11.235 7.27352 11.2838C7.29503 11.3327 7.33055 11.3744 7.37573 11.4037C7.42092 11.433 7.4738 11.4486 7.52789 11.4487Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_1066">
                    <rect
                      width="14.5"
                      height="12.7738"
                      fill="white"
                      transform="translate(7.25 8.28571)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            Solana
          </li>
          <li className={styles.white}>
            <div>
              <svg
                className={styles.fill}
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.5" cy="14.5" r="14.5" fill="#131633" />
                <path
                  d="M17.3912 24.0036C17.34 23.9524 17.2888 23.9012 17.2376 23.9012C16.0598 23.6452 14.882 23.2357 13.8578 22.6213C11.707 21.3414 10.2731 19.4471 10.2219 17.2456C10.2219 16.4265 10.3755 15.6073 10.734 14.8394C10.9388 14.3274 12.1679 12.5867 12.3215 12.2795C13.1408 10.9996 12.8848 11.102 11.707 9.51486L10.0683 7.1086L8.99287 5.47029C8.37835 5.87987 7.76383 6.39184 7.20053 6.90381C6.07391 8.03014 5.20335 9.46366 4.69125 10.9996C4.17916 12.5355 4.02553 14.1738 4.23037 15.7609C4.4352 17.348 5.04972 18.8839 5.97149 20.215C6.89327 21.5462 8.1223 22.6725 9.50496 23.4405C5.86908 20.7782 4.17916 16.7336 5.56182 12.6891C5.92028 11.6139 6.48359 10.59 7.20053 9.66845L8.37835 11.4092C8.42956 11.5115 8.48077 11.6139 8.48077 11.7675C8.48077 11.8699 8.42956 12.0235 8.37835 12.1259C7.81504 12.8427 7.35416 13.6106 7.0469 14.481C5.51061 18.9351 9.65859 23.5429 14.0114 24.3108C14.8308 24.4644 16.3671 24.618 17.1864 24.4132C17.2376 24.4132 17.2888 24.362 17.2888 24.362C17.34 24.3108 17.34 24.3108 17.34 24.2596C17.34 24.2084 17.34 24.1572 17.34 24.106C17.4425 24.106 17.4425 24.0548 17.3912 24.0036Z"
                  fill="white"
                />
                <path
                  d="M11.8608 4.65113C11.912 4.70233 11.9632 4.75353 12.0144 4.75353C13.1922 5.00951 14.3701 5.41909 15.3942 6.03345C17.5451 7.31338 18.9789 9.20767 19.0301 11.4091C19.0301 12.2283 18.8765 13.0475 18.518 13.8154C18.3132 14.3274 17.0842 16.0681 16.9305 16.3753C16.1112 17.6552 16.3672 17.5528 17.5451 19.1399L19.1838 21.5462L20.3104 23.1845C20.9249 22.7749 21.5394 22.2629 22.1027 21.751C23.2293 20.6246 24.0999 19.1911 24.612 17.6552C25.1241 16.1193 25.2777 14.481 25.0729 12.8939C24.868 11.3068 24.2535 9.77084 23.3317 8.43972C22.41 7.10859 21.1809 5.98226 19.7983 5.2143C23.4342 7.87655 25.1241 11.9211 23.6902 15.9657C23.3317 17.0408 22.7684 18.0648 22.0515 18.9863L20.8737 17.2456C20.8225 17.1432 20.7713 17.0408 20.7713 16.8872C20.7713 16.7848 20.8225 16.6312 20.8737 16.5289C21.437 15.8121 21.8979 15.0441 22.2051 14.1738C23.7414 9.71964 19.5934 5.11191 15.2406 4.34395C14.4213 4.19036 12.885 4.03677 12.0656 4.24156C12.0144 4.24156 11.9632 4.29275 11.9632 4.29275C11.8608 4.29275 11.8096 4.34395 11.8096 4.39515C11.8096 4.44635 11.8096 4.49754 11.8096 4.54874C11.8096 4.54874 11.8096 4.59994 11.8608 4.65113Z"
                  fill="white"
                />
              </svg>
            </div>
            Injective
          </li>
          <li className={styles.white}>
            <div>
              <svg
                className={styles.fill}
                width="29"
                height="26"
                viewBox="0 0 29 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="29" height="29" fill="#131633" />
                <g clipPath="url(#clip0_9_625)">
                  <path
                    d="M6.6875 3.18706L11.7673 9.13877L15.1771 7.13304C15.1771 7.13304 11.0633 1.6316 9.96626 2.02046C8.93474 2.41342 6.6875 3.18706 6.6875 3.18706Z"
                    fill="white"
                  />
                  <path
                    d="M15.3037 7.13303C15.3037 7.13303 16.0773 5.77405 16.4621 3.96071C16.4621 3.96071 20.3221 5.51208 18.8403 9.39664L15.3037 7.13303Z"
                    fill="white"
                  />
                  <path
                    d="M18.8408 9.40074L19.1642 13.4777L20.6419 13.2853C20.6419 13.2853 21.0266 13.1543 20.9652 12.4462C20.8998 11.6684 20.7729 10.0516 20.7729 10.0516C20.7729 10.0516 20.8384 9.66271 19.9378 9.53582C18.8408 9.33525 18.8408 9.40074 18.8408 9.40074Z"
                    fill="white"
                  />
                  <path
                    d="M19.1597 13.4777L16.2002 15.8723L17.551 18.5248C17.551 18.5248 17.8744 19.5604 18.8363 18.3938C19.7368 17.2272 20.1216 17.0348 20.0561 16.3226C19.9988 15.6103 19.8023 13.928 19.1597 13.4777Z"
                    fill="white"
                  />
                  <path
                    d="M16.1389 15.8682L12.0865 14.0549L8.54982 21.2387C8.54982 21.2387 8.29194 21.7544 9.19248 21.8199C10.093 21.9509 11.5707 22.2743 12.3443 21.4965C13.118 20.7884 16.1389 15.8682 16.1389 15.8682Z"
                    fill="white"
                  />
                  <path
                    d="M12.0863 13.9935L11.7015 9.20425L2.95406 9.7896C2.95406 9.7896 2.4383 9.8551 2.5038 10.8252C2.56929 12.1187 2.69618 13.5432 2.69618 13.5432C2.69618 13.5432 2.63069 14.1244 3.7891 14.1899C4.94751 14.2513 11.9594 14.2513 12.0863 13.9935Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_625">
                    <rect
                      width="18.4732"
                      height="20"
                      fill="white"
                      transform="translate(2.5 2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            Quant
          </li>
          {session && session.user.admin ? (
            <li>
              <Link
                onClick={() => setMenuOpen(false)}
                className={styles.white}
                href="/admin/allusers "
              >
                <div>
                  <svg
                    className={styles.fill}
                    fill="white"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M276.941 440.584v565.722c0 422.4 374.174 625.468 674.71 788.668l8.02 4.292 8.131-4.292c300.537-163.2 674.71-366.268 674.71-788.668V440.584l-682.84-321.657L276.94 440.584Zm682.73 1479.529c-9.262 0-18.523-2.372-26.993-6.89l-34.9-18.974C588.095 1726.08 164 1495.906 164 1006.306V404.78c0-21.91 12.65-41.788 32.414-51.162L935.727 5.42c15.134-7.228 32.866-7.228 48 0l739.313 348.2c19.765 9.374 32.414 29.252 32.414 51.162v601.525c0 489.6-424.207 719.774-733.779 887.943l-34.899 18.975c-8.47 4.517-17.731 6.889-27.105 6.889Zm467.158-547.652h-313.412l-91.595-91.482v-83.803H905.041v-116.78h-83.69l-58.503-58.504c-1.92.113-3.84.113-5.76.113-176.075 0-319.285-143.21-319.285-319.285 0-176.075 143.21-319.398 319.285-319.398 176.075 0 319.285 143.323 319.285 319.398 0 1.92 0 3.84-.113 5.647l350.57 350.682v313.412Zm-266.654-112.941h153.713v-153.713L958.462 750.155l3.953-37.27c1.017-123.897-91.595-216.621-205.327-216.621S550.744 588.988 550.744 702.72c0 113.845 92.612 206.344 206.344 206.344l47.21-5.309 63.811 63.7h149.873v116.78h116.781v149.986l25.412 25.299Zm-313.4-553.57c0 46.758-37.949 84.706-84.706 84.706-46.758 0-84.706-37.948-84.706-84.706s37.948-84.706 84.706-84.706c46.757 0 84.706 37.948 84.706 84.706"
                        fillRule="white"
                      ></path>
                    </g>
                  </svg>
                </div>
                Verify user
              </Link>
            </li>
          ) : null}
        </ul>
        <div className={`${styles.authBox} ${styles.mobile}`}>
          <Link onClick={() => setMenuOpen(false)} href="/auth/login">
            <Button1
              style2={{
                fontWeight: 600,
                fontSize: "1.5rem",
                height: 46,
              }}
              borderSize={3}
            >
              Log in
            </Button1>
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="/auth/signup">
            <Button2
              style2={{
                fontWeight: 600,
                fontSize: "1.5rem",
                height: 46,
              }}
            >
              Sign up
            </Button2>
          </Link>
        </div>
      </aside>
    </>
  );
}
