import { Component } from '../../../core/Component';
import './AboutUsCards.scss';
import '../../Molecules/AboutUsCard';

class AboutUsCards extends Component {
  static get observedAttributes() {
    return ['cards'];
  }

  render() {
    const cards = JSON.parse(this.props.cards);
    return `
        <div class='AboutUs__section'>
            ${cards
              .map((item) => {
                return `
                <it-aboutuscard
                    class="AboutUs__section-card"
                    title="${item.title}"
                    text="${item.text}">
                </it-aboutuscard>
            `;
              })
              .join(' ')}
        </div> 
        `;
  }
}

customElements.define('it-aboutuscards', AboutUsCards);
