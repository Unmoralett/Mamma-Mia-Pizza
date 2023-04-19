import { initializeApp } from 'firebase/app';

export class CloudService {
  constructor() {
    this._config = {
      apiKey: process.env.API_KEY,
      authDomain: 'pizzeria-ff431.firebaseapp.com',
      projectId: 'pizzeria-ff431',
      storageBucket: 'pizzeria-ff431.appspot.com',
      messagingSenderId: '37807639408',
      appId: '1:37807639408:web:c38559b54a72394ae4ddb5',
    };
    this._app = initializeApp(this._config);
  }
}

export const cloudService = new CloudService();
