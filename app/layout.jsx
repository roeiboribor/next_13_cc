import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Next Crash Course',
	description: 'This is the Next JS Crash Course with traversy media',
	keywords: 'Web Developments, Next JS, Javascript, React JS, Tailwind',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				<main className="container">{children}</main>
			</body>
		</html>
	);
}
