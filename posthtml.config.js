module.exports = {
  plugins: {
		"posthtml-extend": {
			root: "./site/layouts",
			strict: true
		},
		"posthtml-modules": {
      root: "./site/modules"
    },
    "posthtml-expressions": {
      locals: {
        test: "variaableeee"
      }
    },
  }
};
