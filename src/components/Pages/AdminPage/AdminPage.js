import { Component } from '../../../core/Component';
import './AdminPage.scss';

class AdminPage extends Component {
  render() {
    return `
        <div class='container'>
            <div class="mt-5">
                <form class='mb-3 border p-3'>
                    <label class="form-label">Создать категорию</label>
                    <input type="text" class="form-control" placeholder="Введите имя категории">
                </form>
            </div>
        </div>
        `;
  }
}

customElements.define('admin-page', AdminPage);
