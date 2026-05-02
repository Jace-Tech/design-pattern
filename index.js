const Telephone = require('./telephone');
const { NowDiallingObserver, PrintPhoneNumberObserver } = require('./observer');


const phone = new Telephone();
phone.addPhoneNumber('2347023232');

phone.addObserver(new PrintPhoneNumberObserver());
phone.addObserver(new NowDiallingObserver());

phone.dialPhoneNumber('2347023232');
