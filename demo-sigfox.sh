echo '{"posts": []}' > db.json; json-server db.json --middlewares ./convert.js;
