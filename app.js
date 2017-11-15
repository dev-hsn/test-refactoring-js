"use strict";
import express from 'express';
import path from 'path';
import logger       from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import http         from 'http'

import routeProducts       from './app/routes/products';
import routeIndex       from './app/routes/index';

const app = express();
const server = http.createServer(app);
let port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine","twig");
app.use(express.static('views'));
app.set('views', __dirname + '/app/views');

app.use(express.static(path.join(__dirname, 'app/public')));

app.get('/', routeIndex);
app.use('/products', routeProducts);

app.close = function() {
    server.close();
}

app.listen(() => {
    server.listen(port, () => {
        console.log("Express server listening on port " + port + " in " + app.settings.env + " mode");
    });
});

export default app;