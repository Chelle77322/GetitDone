import React, {Component} from 'react';
import { Link } from 'react-router';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../../style/main-style.scss";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="article">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}