/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '', // Optional: specify if needed, e.g., '8080'
              pathname: '/**', // Adjust the pathname as needed
            },
        ],
    }
};

export default nextConfig;
