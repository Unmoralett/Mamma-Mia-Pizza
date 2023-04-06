import { Component } from '../../../core/Component';
import '../../Molecules/AboutUsDescBody';
import './AboutUsDesc.scss';

class AboutUsDesc extends Component {
  static get observedAttributes() {
    return ['desc'];
  }

  render() {
    const desc = JSON.parse(this.props.desc);
    console.log(desc);
    return `
        <div class='AboutUs_desc'>
          ${desc
            .map((item) => {
              return `
              <it-aboutusdescbody
                class='${item.class}'
                title='${item.title}'
                text='${item.text}'>
              </it-aboutusdescbody>
            `;
            })
            .join(' ')}
        </div>
        `;
  }
}

customElements.define('it-aboutusdesc', AboutUsDesc);
