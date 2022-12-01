// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// module.exports = {
//   reactStrictMode: true, // was there by default
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.module.rules.push({
//       test: /\.my-file$/i,
//       loader: "raw-loader",
//     });

//     // Important: return the modified config
//     return config;
//   },
// };

module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['18-candleriggs.fra1.digitaloceanspaces.com'],
  },
}