import {useState, useEffect} from 'react';

const IconModeNav = () => {
	// Cek tema awal dari localStorage atau sistem
	const getInitialTheme = () => {
		if (localStorage.theme === 'dark') return true;
		if (localStorage.theme === 'light') return false;
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	};

	const [modeDark, setModeDark] = useState(getInitialTheme());

	useEffect(() => {
		if (modeDark) {
			document.documentElement.dataset.theme = 'dark';
			localStorage.theme = 'dark';
		} else {
			document.documentElement.dataset.theme = 'light';
			localStorage.theme = 'light';
		}
	}, [modeDark]);

	return (
		<button aria-label="Toggle dark mode" onClick={() => setModeDark(!modeDark)}>
			{modeDark ? (
				<svg
					className=" bg-[var(--pinkBackground)] !p-1 rounded-full shadow-custom hover:scale-105 transition-all hover:bg-[var(--blackCustom)] active:bg-[var(--pink)] active:scale-95 hover:text-[var(--pink)] group cursor-pointer text-[var(--blackCustom)] group-hover:text-[var(--pink)] group-active:text-[var(--blackCustom)]"
					xmlns="http://www.w3.org/2000/svg"
					width={33}
					height={33}
					viewBox="0 0 24 24"
					aria-label='svg mode'
					aria-hidden="true"
				>
					<g fill="currentColor" fillOpacity={0}>
						<path d="M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z">
							<animate
								fill="freeze"
								attributeName="fill-opacity"
								begin="0.7s"
								dur="0.4s"
								values="0;1"
							></animate>
						</path>
						<path d="M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z">
							<animate
								fill="freeze"
								attributeName="fill-opacity"
								begin="1.1s"
								dur="0.4s"
								values="0;1"
							></animate>
						</path>
					</g>
					<path
						fill="currentColor"
						fillOpacity={0}
						stroke="currentColor"
						strokeDasharray={56}
						strokeDashoffset={56}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"
					>
						<animate
							fill="freeze"
							attributeName="fill-opacity"
							begin="1.5s"
							dur="0.15s"
							values="0;0.3"
						></animate>
						<animate
							fill="freeze"
							attributeName="stroke-dashoffset"
							dur="0.6s"
							values="56;0"
						></animate>
					</path>
				</svg>
			) : (
				<svg
  className="cursor-pointer text-[var(--blackCustom)] group-hover:text-[var(--pink)] group-active:text-[var(--blackCustom)]"
  xmlns="http://www.w3.org/2000/svg"
  width="33"
  height="33"
  viewBox="0 0 24 24"
>
  <g fill="currentColor" fillOpacity={0}>
    <path d="M5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1m7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1M5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5m0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5">
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="0.7s"
        dur="0.4s"
        values="0;1"
      ></animate>
    </path>
  </g>
  <path
    fill="currentColor"
    fillOpacity={0}
    stroke="currentColor"
    strokeDasharray={56}
    strokeDashoffset={56}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5m0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5"
  >
    <animate
      fill="freeze"
      attributeName="fill-opacity"
      begin="1.5s"
      dur="0.15s"
      values="0;0.3"
    ></animate>
    <animate
      fill="freeze"
      attributeName="stroke-dashoffset"
      dur="0.6s"
      values="56;0"
    ></animate>
  </path>
</svg>

			)}
		</button>
	);
};

export default IconModeNav;
