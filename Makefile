all:
	go get github.com/pocke/tsconfig-updater
	shopt -s globstar && tsconfig-updater src/**/*.ts
	go get github.com/pocke/js-file2string
	js-file2string < src/index.html > dist/index.html.js
	tsc
