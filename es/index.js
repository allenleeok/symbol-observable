/* global window */
import ponyfill from './ponyfill.js';

var root;

//判断全局环境来源
if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = ponyfill(root);
export default result;
