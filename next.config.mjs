/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static site for GitHub Pages: `next build` writes plain HTML to out/
	output: 'export',
	images: { unoptimized: true },
	eslint: { ignoreDuringBuilds: true },
	poweredByHeader: false,
}

export default nextConfig
