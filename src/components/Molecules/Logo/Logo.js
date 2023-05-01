import { Component } from '../../../core/Component';
import '../../Atoms/Link';
import '../../Atoms/Image';
import './Logo.scss';

class Logo extends Component {
  render() {
    return `
        <div class='header__logo'>
          <it-link 
            class=' '
            href='/'
            content=" <it-image 
                        class='header__logo-img'
                        src='../../assets/images/logoR.png'>
                      </it-image>"
          ></it-link>
        </div>
        `;
  }
}

customElements.define('it-logo', Logo);
