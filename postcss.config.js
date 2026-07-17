/* Build pipeline for dist/pluto.min.css.
 *
 * postcss-import inlines the local @import chain in pluto.css and leaves the
 * remote fontsource @imports untouched at the top of the output. autoprefixer
 * and cssnano then prefix and minify against the browserslist in package.json.
 */
module.exports = {
    plugins: {
        "postcss-import": {},
        autoprefixer: {},
        cssnano: { preset: "default" },
    },
}
