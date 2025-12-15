"use client";

import Link from "next/link";

export default function Footer() {
	return (
		<footer dir="rtl" className="border-t border-neutral-800 bg-[#1B2546] text-neutral-300">
			<div className="mx-auto max-w-7xl px-6 py-12 text-right">
				<div className="grid gap-8 md:grid-cols-4">
					<div className="space-y-4 md:col-span-2">
						<div className="flex items-center gap-3">
							<div className="h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/20" />
							<span className="text-lg font-semibold text-white">Creative Vision</span>
						</div>
						<p className="max-w-md text-sm text-neutral-400">
							ما با ترکیب طراحی خلاقانه و توسعه مدرن، به برند شما جان
							می‌دهیم. از ایده تا اجرا کنار شما هستیم.
						</p>
					</div>

					<div>
						<h3 className="mb-3 text-sm font-semibold text-white">لینک‌ها</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/" className="transition hover:text-white">
									صفحه اصلی
								</Link>
							</li>
							<li>
								<Link href="/creative-vision-page" className="transition hover:text-white">
									خدمات
								</Link>
							</li>
							<li>
								<Link href="#blog" className="transition hover:text-white">
									بلاگ
								</Link>
							</li>
							<li>
								<Link href="#contact" className="transition hover:text-white">
									تماس با ما
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-3 text-sm font-semibold text-white">تماس</h3>
						<ul className="space-y-2 text-sm">
							<li className="text-neutral-400">تهران، ایران</li>
							<li>
								<a href="mailto:hello@creativevision.dev" className="transition hover:text-white">
									hello@creativevision.dev
								</a>
							</li>
							<li>
								<a href="tel:+989000000000" className="transition hover:text-white">
									+98 900 000 0000
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 md:flex-row">
					<p className="text-xs text-neutral-500">© {new Date().getFullYear()} Creative Vision. تمامی حقوق محفوظ است.</p>
					<div className="flex items-center gap-4">
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
							className="rounded-md p-2 text-neutral-400 transition hover:bg-white/5 hover:text-white"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
							</svg>
						</a>
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="rounded-md p-2 text-neutral-400 transition hover:bg-white/5 hover:text-white"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.09 2.93.83.09-.66.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.07c.85 0 1.71.11 2.51.32 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.84-2.35 4.69-4.59 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
							</svg>
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="rounded-md p-2 text-neutral-400 transition hover:bg-white/5 hover:text-white"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.1c.5-1 1.7-2.1 3.5-2.1 3.8 0 4.5 2.5 4.5 5.8V23h-4v-6.5c0-1.6 0-3.6-2.2-3.6-2.3 0-2.7 1.8-2.7 3.5V23h-4V8.5z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

