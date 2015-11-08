all:
	go get github.com/pocke/tsconfig-updater
	shopt -s globstar && tsconfig-updater src/**/*.ts
	tsc
