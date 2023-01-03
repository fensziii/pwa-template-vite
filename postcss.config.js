const postcssNested     = require('postcss-nested');
const tailwindcss       = require('tailwindcss');
//const cssnano           = require('cssnano');
const autoprefixer      = require('autoprefixer');



module.exports = {
    plugins: [
        autoprefixer,
        postcssNested,
        tailwindcss('./tailwind.config.js'),
        //cssnano({ preset : 'default', })
    ]
}