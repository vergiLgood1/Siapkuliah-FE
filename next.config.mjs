/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,    
  },
  images: {
    domains: [
      "ui.aceternity.com",
      "kinde.com",
      "nextui.org",
      "images.pexels.com",
      "res.cloudinary.com"
    ], // Tambahkan hostname di sini
  },
};

export default nextConfig;
