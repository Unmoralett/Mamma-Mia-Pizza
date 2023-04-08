import { Component } from '../../../core/Component';
import './Pagination.scss';

class Pagination extends Component {
  static get observedAttributes() {
    return ['total', 'limit', 'current'];
  }
  render() {
    return `
        <div class="mt-5">
            <nav aria-label="Page navigation example ">
                <ul class="pagination justify-content-center ">
                    <li class="page-item"><a class="page-link text-success" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link text-success active" href="#">1</a></li>
                    <li class="page-item"><a class="page-link text-success" href="#">2</a></li>
                    <li class="page-item"><a class="page-link text-success" href="#">3</a></li>
                    <li class="page-item"><a class="page-link text-success" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
        `;
  }
}

customElements.define('it-pagination', Pagination);
