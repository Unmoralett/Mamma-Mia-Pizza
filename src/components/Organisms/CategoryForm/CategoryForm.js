import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

class CategoryForm extends Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    eventEmmiter.emit(APP_EVENTS.createCategory, { data });
    evt.target.reset();
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
  }

  render() {
    return `
        <form>
            <label class="form-label">Создать категорию</label>
            <input name='name' type="text" class="form-control mb-3" placeholder="Введите имя новой категории" required>
            <input name='img' type="text" class="form-control mb-3" placeholder="Смайлик новой категории 🍔" required>
            <button type='submit' class='btn btn-dark py-2 btn-block bg-warning list-group-item-warning'>Создать</button>
        </form>
    `;
  }
}

customElements.define('category-form', CategoryForm);
