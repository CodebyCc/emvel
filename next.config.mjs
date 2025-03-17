/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tlpbgsuugbzahwtvpijd.supabase.co",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
