import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
	const { data: session } = useSession()

	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>Learn Next Auth</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
				{session ? (
					<>
						<h2 className="text-3xl font-medium">
							Signed in as {session.user?.email}
						</h2>
						<button
							className="bg-blue-500 hover:bg-blue-600 shadow hover:shadow-lg hover:scale-105 active:scale-95  duration-200 flex space-x-4 items-center px-8 py-4 rounded-full text-white font-semibold text-xl outline-none"
							onClick={() => signOut()}
						>
							Sign out
						</button>
					</>
				) : (
					<button
						onClick={() => signIn()}
						className="bg-blue-500 hover:bg-blue-600 shadow hover:shadow-lg hover:scale-105 active:scale-95  duration-200 flex space-x-4 items-center px-8 py-4 rounded-full text-white font-semibold text-xl outline-none"
					>
						<Image
							src="/google.svg"
							alt="google icon"
							objectFit="contain"
							width={40}
							height={40}
						/>
						<span>Login With Google</span>
					</button>
				)}
			</main>

			<footer className="flex h-24 w-full items-center justify-center border-t text-lg space-x-2">
				<span>Built by</span>
				<a
					className="flex items-center justify-center gap-2 font-semibold"
					href="https://shubhamku044.hashnode.dev/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Shubham Sharma
				</a>
			</footer>
		</div>
	)
}

export default Home
