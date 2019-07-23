APP=node_ui_test
NAME=node_modules-ui-test
VERSION=latest
NODE_ENV=qa

test:
	nightwatch tests --env $(NODE_ENV)

install:
	@rm -rf ./node_modules
	npm install

docker-build:
	@docker build -t $(NAME) -f docker/Dockerfile .

run: docker-build
	@docker-compose -f docker/docker-compose.yml run -e NODE_ENV=$(NODE_ENV) --rm pluginDev
