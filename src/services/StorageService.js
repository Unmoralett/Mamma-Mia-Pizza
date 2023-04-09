import { APP_EVENTS } from '../constants/appEvents';
import { eventEmmiter } from '../core/EventEmmiter';

class StorageService {
  constructor() {
    this.storage = window.localStorage;
  }
  //Добавить данные
  setItem(key, value) {
    try {
      this.storage.setItem(key, JSON.stringify(value));
      eventEmmiter.emit(APP_EVENTS.storage, { data: this.getItem(key) });
    } catch (error) {
      console.error(error);
    }
  }
  //Получить данные
  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  }
  //Удалить данные по ключу
  removeItem(key) {
    this.storage.removeItem(key);
    eventEmmiter.emit(APP_EVENTS.storage, { data: this.getItem(key) });
  }
  //Очистить ЛС
  clear() {
    this.storage.clear();
    eventEmmiter.emit(APP_EVENTS.storage, { data: null });
  }
}

export const storageService = new StorageService();
