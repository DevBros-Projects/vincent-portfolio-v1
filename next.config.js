/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 20/08/2022 - 23:46:54
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 20/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.fstoppers.com"],
  },
};

module.exports = nextConfig;
