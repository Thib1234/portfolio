/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	experimental: {
	  // outputStandalone: true, // Supprimer cette ligne
	},
	output: 'standalone', // Ajouter cette ligne
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
  