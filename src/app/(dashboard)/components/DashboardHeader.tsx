import ButtonAI from "./ButtonAI";
import ButtonActionNew from "./ButtonActionNew";
import ButtonQuickActionMenu from "./ButtonQuickActionMenu";
import ButtonUserMenu from "./ButtonUserMenu";
import SearchCommandPalette from "./SearchCommandPalette";

const DashboardHeader: React.FC = () => {
  return (
    <header
      id="header"
      className="flex items-center w-full h-actions-bar px-4 shadow-sm bg-[#3c414a]"
    >
      <div className="flex items-center w-full text-xs">
        <div className="flex items-center w-10 h-10">
          <Link href="/dashboard">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_3)">
                <path
                  d="M2.6839 24.7659L7.59951 21.0003C10.2111 24.4088 12.9858 25.9799 16.0744 25.9799C19.1464 25.9799 21.8426 24.4274 24.3365 21.0457L29.3223 24.7205C25.7239 29.5969 21.2522 32.1734 16.0744 32.1734C10.9131 32.1734 6.39796 29.6134 2.6839 24.7659Z"
                  fill="url(#paint0_linear_1_3)"
                />
                <path
                  d="M16.0578 8.39845L7.30843 15.9381L3.26404 11.2475L16.0764 0.206451L28.7877 11.2557L24.7247 15.9298L16.0578 8.39845Z"
                  fill="url(#paint1_linear_1_3)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1_3"
                  x1="2.6839"
                  y1="780.887"
                  x2="29.3223"
                  y2="780.887"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8930FD" />
                  <stop offset="1" stopColor="#49CCF9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_3"
                  x1="3.26404"
                  y1="1070.11"
                  x2="28.7877"
                  y2="1070.11"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF02F0" />
                  <stop offset="1" stopColor="#FFC800" />
                </linearGradient>
                <clipPath id="clip0_1_3">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="grow text-end md:flex md:items-center md:justify-center space-x-2 mr-8">
          <SearchCommandPalette />
          <ButtonAI />
        </div>
        <div className="inline-flex items-center gap-3">
          <Button
            asChild
            className="text-xl text-white"
            style={{ background: "linear-gradient(-45deg,#ffc800,#ff02f0,#8930fd,#49ccf9)" }}
          >
            <Link href="/settings/billing">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
                className="mr-2"
              >
                <path
                  fill="currentColor"
                  d="m256 29.816l-231 154v106.368l231-154l231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925l151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58l87 58v-67.6zm0 89.957l-87 58v64.368l87-58l87 58v-64.368z"
                />
              </svg>
              Upgrade
            </Link>
          </Button>
          <ButtonActionNew />
          <ButtonQuickActionMenu />
          <ButtonUserMenu />
        </div>
      </div>
    </header>
  );
};
export default DashboardHeader;
