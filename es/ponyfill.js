export default function symbolObservablePonyfill(root) {
	var result;
	// 声明Symbol
	var Symbol = root.Symbol;

	// 判断环境是否自带Symbol数据类型
	if (typeof Symbol === 'function') {
		// 判断Symbol是否具有observable，如果没有则自主声明
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	// 返回Symbol
	return result;
};
