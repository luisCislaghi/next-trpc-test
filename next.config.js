module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/events",
        permanent: true,
      },
    ];
  },
};
