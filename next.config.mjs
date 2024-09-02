/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	experimental: {
	  outputStandalone: true,
	},
	webpack: (config, { isServer }) => {
	  if (!isServer) {
		config.cache = {
		  type: 'filesystem',
		  buildDependencies: {
			config: [__filename],
		  },
		};
	  }
	  return config;
	},
  };
  
  export default nextConfig;
  