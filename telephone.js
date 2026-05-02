const { Observer } = require('./observer');

class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    if (!this.phoneNumbers.includes(phoneNumber)) {
      this.phoneNumbers.push(phoneNumber);
    }
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers = this.phoneNumbers.filter((item) => item !== phoneNumber);
  }

  dialPhoneNumber(phoneNumber) {
    if (!this.phoneNumbers.includes(phoneNumber)) {
      throw new Error(`Phone number ${phoneNumber} was not added and cannot be dialled.`);
    }
    this.notifyObservers(phoneNumber);
  }

  addObserver(observer) {
    if (!(observer instanceof Observer)) {
      throw new TypeError('Observer must extend the Observer base class');
    }
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }
}


module.exports = Telephone;