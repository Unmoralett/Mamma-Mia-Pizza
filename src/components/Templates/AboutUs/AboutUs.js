import { Component } from '../../../core/Component';
import '../../Organisms/AboutUsCards';
import '../../Organisms/AboutUsDesc';
import '../../Atoms/Image';
import './AboutUs.scss';

class AboutUs extends Component {
  render() {
    return `
        <div class='AboutUs'>
            <div class='container'>
                <it-aboutusdesc></it-aboutusdesc>
                <it-aboutuscards></it-aboutuscards>
            </div>
            <it-image
                class='AboutUs__image'
                src='../../assets/images/Pizza_phone.png'>
            </it-image>
        </div>
        `;
  }
}

customElements.define('it-aboutus', AboutUs);
