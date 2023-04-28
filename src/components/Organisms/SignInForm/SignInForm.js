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
      <form enctype='multipart/form-data'>
        <div class="login slide-up">
          <div class="center">
            <h2 class="form-title" id="login"><span>or</span>Войти</h2>
            <div class="form-holder">
              <input name='email' type="email" class="input form-control" placeholder="Email" />
              <input name='password' type="password" class="input form-control" placeholder="Password" />
            </div>
            <button type='submit' class="btn submit-btn">Log in</button>
          </div>
        </div>
      </form>
    `;
  }
}

customElements.define('sign-in-form', SignInForm);
