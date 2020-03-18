module.exports = {
    module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  "plugins": [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')(),
  ]
}