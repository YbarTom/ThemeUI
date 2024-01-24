/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    { resolve: 'gatsby-plugin-theme-ui' },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Nombre del Sitio",
        short_name: "Nombre Corto",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/images/icon.png", // Ruta a tu icono (debe estar dentro de la carpeta "src")
        sizes: "196x196",
        icon_options: {
          purpose: `maskable , any`,

        },

      },
    },
    {
      resolve: "gatsby-plugin-offline",

    },
  ],
}
