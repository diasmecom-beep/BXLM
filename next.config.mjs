/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ne pas générer AGENTS.md / CLAUDE.md automatiquement.
  agentRules: false,
};

export default nextConfig;
