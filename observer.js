class Observer {
  notify(phoneNumber) {
    throw new Error('Observer.notify() must be implemented by subclasses');
  }
}

class PrintPhoneNumberObserver extends Observer {
  notify(phoneNumber) {
    console.log(phoneNumber);
  }
}

class NowDiallingObserver extends Observer {
  notify(phoneNumber) {
    console.log(`Now Dialling ${phoneNumber}`);
  }
}

module.exports = {
  Observer,
  PrintPhoneNumberObserver,
  NowDiallingObserver,
};