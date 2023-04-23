import { Component } from '../../../core/Component';
import '../../Organisms/RegisterForm';
import '../../Molecules/Preloader';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { authService } from '../../../services/Auth';
import { APP_ROUTES } from '../../../constants/appRoutes';

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      errorMessage: '',
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
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

  register = async ({ detail }) => {
    const { data } = detail;
    this.setIsLoading(true);
    try {
      const user = await authService.signUp(data.email, data.password);
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.main });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.signUp, this.register);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.signUp, this.register);
  }

  render() {
    const message = this.state.errorMessage;

    return `
    <it-preloader is-loading='${this.state.isLoading}'>
        <div class='container mt-5'>
            <h2 class='text-center mt-5'>Sign Up</h2>
            <div class='row justify-content-center'>
                <div class='col-6'>
                    <div class='border p-5'>
                      <div class="invalid-feedback d-block">${message}</div>
                      <register-form></register-form>
                    </div>
                </div>
            </div>
        </div>
    </it-preloader>
    `;
  }
}

customElements.define('sign-up-page', SignUpPage);
