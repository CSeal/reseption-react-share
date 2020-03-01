'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex\n'], ['\n  display: flex\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border: 1px solid lightgray;\n  border-radius: 2px;\n  margin: 8px;\n  width: 220px;\n  display: flex;\n  flex-direction: column;\n'], ['\n  border: 1px solid lightgray;\n  border-radius: 2px;\n  margin: 8px;\n  width: 220px;\n  display: flex;\n  flex-direction: column;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 8px;\n'], ['\n  padding: 8px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  min-height: 100 px;\n  flex-grow: 1;\n  padding: 8px;\n  background-color: ', '\n'], ['\n  min-height: 100 px;\n  flex-grow: 1;\n  padding: 8px;\n  background-color: ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border: 1px solid lightgray;\n  border-radius: 2px;\n  margin-bottom: 8px;\n  padding: 8px;\n  background-color: ', ';\n'], ['\n  border: 1px solid lightgray;\n  border-radius: 2px;\n  margin-bottom: 8px;\n  padding: 8px;\n  background-color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBeautifulDnd = require('react-beautiful-dnd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Housekeeping = function Housekeeping(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(initialData),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onDragEnd = function onDragEnd(rezult) {
    console.log(rezult);
    var draggableId = rezult.draggableId,
        source = rezult.source,
        destination = rezult.destination;

    if (!destination || source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      var newTaskIds = [].concat(_toConsumableArray(state.columns[destination.droppableId].taskIds));
      if (source.index < destination.index) {
        newTaskIds.splice(destination.index + 1, 0, draggableId);
        newTaskIds.splice(source.index, 1);
      } else {
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
      }
      setState(function (prevState) {
        var newState = _extends({}, prevState);
        newState.columns[destination.droppableId].taskIds = newTaskIds;
        return newState;
      });
    } else {
      var newStartTaskIds = [].concat(_toConsumableArray(state.columns[source.droppableId].taskIds));
      var newEndTaskIds = [].concat(_toConsumableArray(state.columns[destination.droppableId].taskIds));
      newStartTaskIds.splice(source.index, 1);
      if (destination.index === newEndTaskIds.length) {
        newEndTaskIds.push(draggableId);
      } else {
        newEndTaskIds.splice(destination.index, 0, draggableId);
      }

      setState(function (prevState) {
        var newState = _extends({}, prevState);
        newState.columns[source.droppableId].taskIds = newStartTaskIds;
        newState.columns[destination.droppableId].taskIds = newEndTaskIds;
        return newState;
      });
    }
  };

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      null,
      'React housekeeping ',
      children
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactBeautifulDnd.DragDropContext,
        {
          onDragEnd: onDragEnd
        },
        _react2.default.createElement(
          Container,
          null,
          state.columnOrder.map(function (columnID) {
            var column = state.columns[columnID];
            var tasks = column.taskIds.map(function (taskId) {
              return state.tasks[taskId];
            });
            return _react2.default.createElement(Column, { key: column.id, tasks: tasks, column: column });
          })
        )
      )
    )
  );
};

exports.default = Housekeeping;


var initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'content-1' },
    'task-2': { id: 'task-2', content: 'content-2' },
    'task-3': { id: 'task-3', content: 'content-3' },
    'task-4': { id: 'task-4', content: 'content-4' },
    'task-5': { id: 'task-5', content: 'content-5' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Column1',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
    },
    'column-2': {
      id: 'column-2',
      title: 'Column2',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Column3',
      taskIds: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};

var ColumnContainer = _styledComponents2.default.div(_templateObject2);
var Title = _styledComponents2.default.h3(_templateObject3);
var TaskList = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.isDraggingOver ? 'lightblue' : 'white';
});

var Column = function Column(_ref2) {
  var column = _ref2.column,
      tasks = _ref2.tasks;
  var title = column.title,
      id = column.id;

  return _react2.default.createElement(
    ColumnContainer,
    null,
    _react2.default.createElement(
      Title,
      null,
      title
    ),
    _react2.default.createElement(
      _reactBeautifulDnd.Droppable,
      { droppableId: id },
      function (provided, snapshot) {
        return _react2.default.createElement(
          TaskList,
          _extends({ ref: provided.innerRef }, provided.droppableProps, { isDraggingOver: snapshot.isDraggingOver }),
          tasks.map(function (task, i) {
            return _react2.default.createElement(Task, { key: task.id, task: task, index: i });
          }),
          provided.placeholder
        );
      }
    )
  );
};

var TaskContainer = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.isDragging ? 'lightGreen' : 'white';
});

var Task = exports.Task = function Task(_ref3) {
  var task = _ref3.task,
      index = _ref3.index;
  var content = task.content,
      id = task.id;

  return _react2.default.createElement(
    _reactBeautifulDnd.Draggable,
    { draggableId: id, index: index },
    function (provided, snapshot) {
      return _react2.default.createElement(
        TaskContainer,
        _extends({}, provided.draggableProps, provided.dragHandleProps, {
          ref: provided.innerRef,
          isDragging: snapshot.isDragging
        }),
        content
      );
    }
  );
};