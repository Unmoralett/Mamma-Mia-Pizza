import { Component } from '../../../core/Component';
import { ABOUT_US_CARDS } from '../../../constants/AboutUsCards';
import { ABOUT_US_DESC } from '../../../constants/AboutUsDescriptions';
import '../../Organisms/AboutUsCards';
import '../../Organisms/AboutUsDesc';
import '../../Atoms/Image';
import './AboutUs.scss';

class AboutUs extends Component {
  render() {
    return `
        <div class='AboutUs'>
            <div class='container'>
                <it-aboutusdesc desc='${JSON.stringify(ABOUT_US_DESC)}'></it-aboutusdesc>
                <it-aboutuscards cards='${JSON.stringify(ABOUT_US_CARDS)}'></it-aboutuscards>
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
