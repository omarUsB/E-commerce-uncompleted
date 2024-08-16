/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com','localhost']
    },
    experimental: {
        appDir: true,
}
}
export default nextConfig;
