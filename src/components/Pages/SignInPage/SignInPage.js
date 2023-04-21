import { Component } from '../../../core/Component';
import '../../Organisms/RegisterForm';
import '../../Organisms/SignInForm';
import '../../Molecules/Preloader';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { authService } from '../../../services/Auth';

class SignInPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
        errorMessage: '',
      };
    });
  };

  setError = (error) => {
    this.setState((state) => {
      return {
        ...state,
        errorMessage: error,
      };
    });
  };

  signIn = async ({ detail }) => {
    const { data } = detail;
    this.setIsLoading(true);
    try {
      const user = await authService.signIn(data.email, data.password);
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.signIn, this.signIn);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.signIn, this.signIn);
  }

  render() {
    const message = this.state.errorMessage;

    return `
    <it-preloader is-loading='${this.state.isLoading}'>
        <div class='container mt-5'>
            <h2 class='text-center mt-5'>Sign In</h2>
            <div class='row justify-content-center'>
                <div class='col-6'>
                    <div class='border p-5'>
                      <div class="invalid-feedback d-block">${message}</div>
                      <sign-in-form></sign-in-form>
                    </div>
                </div>
            </div>
        </div>
    </it-preloader>
    `;
  }
}

customElements.define('sign-in-page', SignInPage);
