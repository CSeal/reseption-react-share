define(['exports', 'react'], function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Housekeeping = function Housekeeping(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
      'div',
      null,
      'React housekeeping ',
      children
    );
  };

  exports.default = Housekeeping;
});