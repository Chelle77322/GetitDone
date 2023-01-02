import {Provider} from "react-redux";
import {match,RouterContext} from 'react-router'
import {renderToString} from 'react-dom/server'

import allReducers from '../shared/Reducers/AllReducers.js'
import {store, configureStore} from 'redux'

var routes = require('../shared/routes.jsx');

var path = require('path');
var bodyparser = require('body-parser');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*',  (req, res) =>  {

    match({ routes: routes, location: req.url },  (err, redirectLocation, renderProps) => {

        // in case of error display the error message
        if (err) {
            return res.status(500).send(err.message);
        }

        // in case of redirect propagate the redirect to the browser
        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        var markup,
            store,
            initialState = {todoReducer:
                               {
                                   items: [{id:0,text:"Things to Do",editItem:false,completed:false}]
                               }
                           }
            
            store = configureStore(allReducers,initialState)
            initialState = store.getState() //JSON.stringify(store.getState())

        if (renderProps) {
            markup = renderToString(
                <Provider store={store}>
                   { <RouterContext {...renderProps} />}
                </Provider>
            )
        }

        return res.render('index', { markup: markup, initialState: initialState });
    });
});

// start the server
var port = process.env.PORT || 8080;
var env = process.env.NODE_ENV || 'development';
app.listen(port,  (err) => {
    if (err) {
        return console.error(err);
    }
    console.info('+++Server running on http://localhost:' + port + ' [' + env + ']');
});