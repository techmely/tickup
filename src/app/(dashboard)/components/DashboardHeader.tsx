import ButtonActionNew from "./ButtonActionNew";
import SearchCommandPalette from "./SearchCommandPallete";

const DashboardHeader: React.FC = (props) => {
  return (
    <header id="header" className="w-full py-4 shadow-sm bg-[#3c414a]">
      <div className="w-full flex text-xs">
        <div className="w-10 h-10">
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
        <div>
          <SearchCommandPalette />
        </div>
        <div>
          <Button asChild>
            <Link href="/settings/billing">Upgrade</Link>
          </Button>
        </div>
        <ButtonActionNew />
        <div>Quick Actions Menu Button</div>
        <div>User Menu</div>
      </div>
    </header>
  );
};

export default DashboardHeader;
