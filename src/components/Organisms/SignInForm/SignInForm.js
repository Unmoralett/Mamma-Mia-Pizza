import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { getFormData } from '../../../utils/form';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  setError = (key, message) => {
    this.setState((state) => {
      return {
        ...state,
        errors: {
          ...state.errors,
          [key]: message,
        },
      };
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = getFormData(evt.target);
    if (!email) {
      this.setError('email', 'The field is required');
      return;
    }

    eventEmmiter.emit(APP_EVENTS.signIn, {
      data: {
        email,
        password,
      },
    });
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
  }

  render() {
    return `
    ${
      this.state.errors.email
        ? `
        <div class="invalid-feedback">${this.state.errors.email.message}</div>`
        : ''
    }
      <form enctype='multipart/form-data'>
        <div class="login slide-up">
          <div class="center">
            <h2 class="form-title" id="login"><span>или</span>Войти</h2>
            <div class="form-holder">
              <input name='email' type="email" class="input form-control" placeholder="Почта" />
              <input name='password' type="password" class="input form-control" placeholder="Пароль" />
            </div>
            <button type='submit' class="btn submit-btn">Войти</button>
          </div>
        </div>
      </form>
    `;
  }
}

customElements.define('sign-in-form', SignInForm);
