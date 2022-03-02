import Head from 'next/head'
import Link from "next/link";

export default function Home() {
	return (<>
		<Head>
			<title>Welcome to MOOVE!</title>
		</Head>
		<div className="bg-red-400 min-h-screen flex flex-col">
			<div className="container py-8">
				<Link href="/"><a className="group"><img src="/sitelogo.svg" alt="MOOVE logo" className="h-16 group-hover:opacity-60 std-transition" /></a></Link>
			</div>
			<div className="flex flex-grow items-center">
				<div className="w-full">
					<div className="container">
						<div className="flex flex-col md:flex-row">
							<div className="w-sm">
								<h1 className="text-5xl md:text-6xl font-semibold font-prompt">The health & fitness app<br />people <span className="std-underline">try</span> to copy.</h1>
								<p className="text-xl font-medium mt-6 md:mt-12">Make your journy towards fitness and health a shareable & fun experience!<br />Coming April 2022.</p>
								<div className="flex items-center gap-4 pt-6 md:pt-12">
									<a href="#"><img src="/badges/google-play.svg" alt="Download on Google Play" className="h-12" /></a>
									<a href="#"><img src="/badges/app-store.svg" alt="Download on the App Store" className="h-12" /></a>
								</div>
							</div>
							<div className="hidden md:flex flex-grow justify-center md:justify-end">
								<div>
									<img src="/mascot.svg" alt="It's time to MOOVE" className="h-80" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container py-6 flex flex-col sm:flex-row sm:items-center gap-2">
				<p className="text-black font-medium">&copy; 2022 MOOVE.</p>
				<div className="flex flex-grow sm:justify-end gap-3">
					<a href="#" className="text-black font-medium text-sm hover:underline">Terms</a>
					<a href="#" className="text-black font-medium text-sm hover:underline">Privacy</a>
					<a href="#" className="text-black font-medium text-sm hover:underline">Company</a>
				</div>
			</div>
		</div>
	</>);
}
