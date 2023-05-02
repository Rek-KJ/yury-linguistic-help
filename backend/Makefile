
run_db:
	docker run --name mysqldb -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=words mysql

format:
	black .
	isort .
	flake8
