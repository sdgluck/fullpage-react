var _localfp = null;

function onScrollAction(comp, data) {
  if (!_localfp) {
    const Fullpage = require('../components/fullpage');
    var { _fp } = Fullpage;
    _localfp = _fp;
  }

  if (comp.state.scrollPending) {
    return;
  }

  const { direction } = data;
  const VERTICAL = 'VERTICAL';

  if (direction === VERTICAL) {
    _localfp.onSlideChangeStart(comp.name, Object.assign(comp.state, {intent: data.intent}));
    return _localfp.onVerticalScroll(data, direction);
  }

  //tricky, here comp.onHorizontalScroll is referring to the horizontal slider function, so we escape for fullpage
  if (comp.name === 'Fullpage') {
    return comp.ss.listen();
  }

  //name references the props name for each horizontal slider
  _localfp.onSlideChangeStart(comp.props.name, comp.state);
  comp.onHorizontalScroll(data, direction);
}

module.exports = {
  onScrollAction,
  isCompActive
}


function isCompActive(comp) {
  if (!_localfp) {
    const Fullpage = require('../components/fullpage');
    var { _fp } = Fullpage;
    _localfp = _fp;
  }

  var name = comp.props.name || null;
  var active = _localfp.state.activeSlide;

  var activeComp = (_localfp.state.slideComponentsConst || [])[active] || {props: {}};
  return activeComp.props.name === name;
}
