//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
      let question = /^(?![A-Z]{2,}).*\?$/g;
      let yell = /^(?![a-zäöü]+)([ÄÖÜA-Z])(?![a-zäöü]+).*!?$/g;
      let empty = /^\s+$/g;
      if (question.test(message)) return 'Sure.';
      if (yell.test(message)) return 'Whoa, chill out!';
      if (empty.test(message)) return 'Fine. Be that way!';
      return 'Whatever.';
  }
}

export default Bob;

