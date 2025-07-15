"use client";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-[100dvh] w-full flex items-center flex-col text-center justify-center p-6">
			<div className="flex flex-col gap-2 w-[90vw] sm:w-auto mb-6">
				<h1 className="text-8xl font-bold">404</h1>
				<h4 className="text-2xl font-semibold">Page Not Found ⚠️</h4>
				<p className="text-gray-500">
					we couldn't find the page you are looking for.
				</p>
			</div>

			<Link
				href="/"
				className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
			>
				Back To Home
			</Link>

			<Image
				src="/13.png"
				alt="error-404-illustration"
				width={500}
				height={500}
				className="object-cover h-[327px] sm:h-[400px] md:h-[450px] lg:h-[500px] mt-6"
				priority
			/>
		</div>
	);
}
