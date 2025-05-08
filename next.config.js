// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
