class EventEmmiter {
  constructor() {
    this.eventTarget = document.appendChild(document.createComment('event-emitter'));
  }
  //подписка на события
  on(type, listener) {
    this.eventTarget.addEventListener(type, listener);
  }
  //отписка на события
  off(type, listener) {
    this.eventTarget.removeEventListener(type, listener);
  }
  //публикуем событие и оповещаем подписчиков
  emit(type, detail) {
    const customEvent = new CustomEvent(type, { detail });
    return this.eventTarget.dispatchEvent(customEvent);
  }
}

export const eventEmmiter = new EventEmmiter();
