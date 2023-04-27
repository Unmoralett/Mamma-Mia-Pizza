import { Component } from '../../../core/Component';
import '../../Organisms/RegisterForm';
import '../../Organisms/SignInForm';
import '../../Molecules/Preloader';
import './SignInPage.scss';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { authService } from '../../../services/Auth';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { storageService } from '../../../services/StorageService';

class SignInPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      signIn: 'connexion',
      signUp: 'enregistrer active-section',
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
      storageService.setItem('user', user);
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.main });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  toggleEnter(evt) {
    // const signIn = document.querySelector('.connexion');
    // const signUp = document.querySelector('.enregistrer');
    // const btnSignUp = document.querySelector('.btn-enregistrer');
    // const btnSignIn = document.querySelector('.btn-connexion');

    if (evt.target.closest('.btn-enregistrer')) {
      this.setState((state) => {
        return {
          ...state,
          signIn: 'connexion remove-section',
          signUp: 'enregistrer',
        };
      });
    }
    if (evt.target.closest('.btn-connexion')) {
      this.setState((state) => {
        return {
          ...state,
          signIn: 'connexion',
          signUp: 'enregistrer active-section',
        };
      });
    }
  }

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.signIn, this.signIn);
    this.addEventListener('click', this.toggleEnter);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.signIn, this.signIn);
    this.addEventListener('click', this.toggleEnter);
  }

  render() {
    const message = this.state.errorMessage;
    console.log(this.state.signIn, '////', this.state.signUp);
    return `
    <it-preloader is-loading='${this.state.isLoading}'>
    <div class="content">
      <div class="content_container">
        <div class="menu">
          <a href="#connexion" class="a-toggle btn-connexion"><h2 class='h2'>SIGN IN</h2></a>
          <a href="#enregistrer" class="a-toggle btn-enregistrer"><h2 class='h2'>SIGN UP</h2></a>
        </div>

        <div class="${this.state.signIn}">
          <div class="contact-form">
            <label class='label'>USERNAME</label>
            <input class='input' placeholder="" type="text">
            
            <label class='label'>PASSWORD</label>
            <input class='input' placeholder="" type="text">
  
            <input class="input submit" value="SIGN IN" type="submit">
          </div>
        </div>
        
        <div class="${this.state.signUp}">
          <div class="contact-form">
            <label class='label'>USERNAME</label>
            <input class='input' placeholder="" type="text">
            
            <label class='label'>E-MAIL</label>
            <input class='input' placeholder="" type="text">	
            
            <label class='label'>PASSWORD</label>
            <input class='input' placeholder="" type="text">
            
            <label class='label'>CONFIRM PASSWORD</label>
            <input class='input' placeholder="" type="text">
            
            <input class="submit input" value="SIGN UP" type="submit">	
              
          </div>
        </div>
      </div>
    </div>
  
    </it-preloader>
    `;
  }
}

customElements.define('sign-in-page', SignInPage);

/* <div class='container mt-5'>
<h2 class='text-center mt-5'>Sign In</h2>
<div class='row justify-content-center'>
    <div class='col-6'>
        <div class='border p-5'>
          <div class="invalid-feedback d-block">${message}</div>
          <sign-in-form></sign-in-form>
        </div>
    </div>
</div>
</div> */
