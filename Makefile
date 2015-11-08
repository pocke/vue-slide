all: dist/index.html.js
	go get github.com/pocke/tsconfig-updater
	shopt -s globstar && tsconfig-updater src/**/*.ts
	tsc

dist/index.html.js: src/index.html src/index.html.d.ts
	go get github.com/pocke/js-file2string
	js-file2string < src/index.html > dist/index.html.js
