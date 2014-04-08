STYLUS = ./node_modules/.bin/stylus

build: index.js index.css
	@component build --dev
	@touch build

node_modules: package.json
	@npm install

components: component.json
	@component install --dev

index.css: index.styl
	@$(STYLUS) -I node_modules < $< > $@

example: build example/main.css

example/main.css: example/main.styl
	@$(STYLUS) -I node_modules < $< > $@

clean:
	@rm -rf build example/main.css

clean-all:
	@rm -rf node_modules components build example/main.css

.PHONY: \
	all \
	clean \
	clean-all
