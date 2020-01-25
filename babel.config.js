module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
      sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
    }
  },
  loader: 'sass-resources-loader',
  options: {
    resources: path.resolve(__dirname, '../src/scss/_variables.scss')
  }
};
