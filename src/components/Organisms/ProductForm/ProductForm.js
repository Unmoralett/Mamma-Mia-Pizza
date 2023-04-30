import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { readerFile } from '../../../utils/readFile';

class ProductForm extends Component {
  static get observedAttributes() {
    return ['categories'];
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const preview = document.querySelector('.preview-image');
    const formData = new FormData(evt.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    const isValid = Object.keys(data).every((key) => data[key] !== '');
    if (isValid) {
      eventEmmiter.emit(APP_EVENTS.createProduct, { data });
      evt.target.reset();
      preview.innerHTML = '';
    }
  };

  onChange = (evt) => {
    if (evt.target.closest('.preview-input')) {
      const file = evt.target.files[0];
      readerFile(file)
        .then((result) => {
          const image = new Image();
          image.src = result;
          image.width = 200;
          image.height = 200;
          const previewBlock = this.querySelector('.preview-image');
          previewBlock.append(image);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
    this.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
    this.removeEventListener('change', this.onChange);
  }

  render() {
    const categories = JSON.parse(this.props.categories);
    console.log(categories);
    return `
        <form enctype='multipart/form-data'>
            <div class='mb-3'> 
                <label class='form-label w-100'>
                    <p>Title</p>
                    <input name='title' type='text' class='form-control'>
                </label>
            </div>
            <div class='mb-3'> 
                <label class='form-label w-100'>
                  <p>Categories</p>
                  <select name='category' class="form-select" aria-label="Default select example">
                    ${categories
                      .map((item) => {
                        return `<option value="${item.name}">${item.name}</option>`;
                      })
                      .join('')}
                  </select>
                </label>
            </div>
            <div class="mb-3">
                <label class="form-label w-100">
                    <p>Download a file</p>
                    <input name='preview' class="form-control preview-input" type="file" accept='image/png, image/jpeg, image/jpg'>
                    <div class='preview-image'></div>
                </label>
            </div>
            <div class='mb-3'> 
                <label class='form-label w-100'>
                    <p>Price</p>
                    <input name='price' type='number' class='form-control'>
                </label>
            </div>
            <div class="mb-3">
                <label class="form-label w-100">
                    <p>Product description</p>
                    <textarea name='description' class="form-control" rows="3"></textarea>
                </label>
            </div>
            <button type='submit' class='btn rtn-primary'>Save</button>
        </form>
    `;
  }
}

customElements.define('product-form', ProductForm);
