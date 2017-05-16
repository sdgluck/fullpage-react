const changeSlide = (state = { activeSlide: 0 }, action, difference) => {
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
}
module.exports = changeSlide;
