'use strict'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt (value) { return value instanceof P ? value : new P(function (resolve) { resolve(value) }) }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled (value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
    function rejected (value) { try { step(generator.throw(value)) } catch (e) { reject(e) } }
    function step (result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}
var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1] }, trys: [], ops: [] }; var f; var y; var t; var g
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () { return this }), g
  function verb (n) { return function (v) { return step([n, v]) } }
  function step (op) {
    if (f) throw new TypeError('Generator is already executing.')
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t
        if (y = 0, t) op = [op[0] & 2, t.value]
        switch (op[0]) {
          case 0: case 1: t = op; break
          case 4: _.label++; return { value: op[1], done: false }
          case 5: _.label++; y = op[1]; op = [0]; continue
          case 7: op = _.ops.pop(); _.trys.pop(); continue
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break }
            if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break }
            if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break }
            if (t[2]) _.ops.pop()
            _.trys.pop(); continue
        }
        op = body.call(thisArg, _)
      } catch (e) { op = [6, e]; y = 0 } finally { f = t = 0 }
    }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true }
  }
}
exports.__esModule = true
// let声明变量 const声明常量
var a = 12
var b = 13
// 数字
var c = 15
c = 19
// 布尔值
var isSelected = false
// 字符串
var color = 'red'
// 数组
var scores = [100, 100, 100] // Array<number>
// 元祖
var x = ['xiaohong', 80]
// 枚举
var Direction;
(function (Direction) {
  Direction[Direction.Up = 0] = 'Up'
  Direction[Direction.Down = 1] = 'Down'
  Direction[Direction.Left = 2] = 'Left'
  Direction[Direction.Right = 3] = 'Right'
})(Direction || (Direction = {}))
var direction = Direction.Up
// Any, null, undefined, never
// 泛型
var test11 = function (s) {
  return s
}
// 解构赋值
// 对象对应key
var _a = { studentName: 'xiaoming', age: 18, sex: 'male' }; var studentName = _a.studentName; var age = _a.age; var sex = _a.sex; var _b = _a.address; var address = _b === void 0 ? '1006号' : _b
console.log('name:' + studentName + ',age:' + age + ',sex:' + sex + ',address:' + address)
// 数组对应下标
var _c = [93, 97, 91]; var cn = _c[0]; var math = _c[1]; var es = _c[2]
console.log('cn:' + cn + ',math:' + math + ',es:' + es)
// 箭头函数
var add = function (a, b) {
  return a + b
}
console.log('total is', add(a, b))
var params = { theme: 'dark', icons: 100 }
var show = function (_a) {
  var theme = _a.theme; var icons = _a.icons
  console.log('current theme is ' + theme + ', icons is ' + icons)
}
// Promise
var promise = new Promise(function (resolve, reject) {
  try {
    resolve(add(a, b))
  } catch (error) {
    reject(error)
  }
})
promise.then(function (value) {
  console.log('resolve--->', value)
}).catch(function (error) {
  console.log('reject--->', error)
})
var mult = function (a, b) {
  return a * b
}
// async-await
var calc = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var total
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0: return [4 /* yield */, mult(3, 5)]
        case 1:
          total = _a.sent()
          console.log('calc result:', total)
          return [2]
      }
    })
  })
}
calc()
console.log('紧跟async func之后')
