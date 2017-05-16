'use strict';

var changeSlide = function changeSlide() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { activeSlide: 0 };
  var action = arguments[1];
  var difference = arguments[2];

  switch (action.type) {
    case 'INCREMENT':
      return {
        intent: action.intent,
        activeSlide: state.activeSlide + difference,
        lastActive: state.activeSlide
      };
    case 'DECREMENT':
      return {
        intent: action.intent,
        activeSlide: state.activeSlide - difference,
        lastActive: state.activeSlide
      };
    case 'HEAD':
      return {
        intent: action.intent,
        lastActive: state.activeSlide,
        activeSlide: 0
      };
    case 'TAIL':
      return {
        intent: action.intent,
        lastActive: state.activeSlide,
        activeSlide: state.slideComponentsConst.length - 1
      };
    default:
      return state;
  }
};
module.exports = changeSlide;