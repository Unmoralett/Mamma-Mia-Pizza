import { Component } from '../../../core/Component';
import './ErrorPage.scss';

class ErrorPage extends Component {
  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return `
        <div id="error">
            <div class="fof">
                    <h1>Error 404</h1>
            </div>
        </div>
    `;
  }
}

customElements.define('error-page', ErrorPage);
