"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var test_utils_1 = require("@vue/test-utils");
var Calculator_vue_1 = require("@components/Calculator.vue");
var helpers_1 = require("../../utils/helpers");
var calculator = [
    ['A', 'C', '%', '!'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
];
(0, vitest_1.describe)('Calculator', function () {
    (0, vitest_1.it)('renders the component', function () {
        var wrapper = (0, test_utils_1.mount)(Calculator_vue_1.default);
        (0, vitest_1.expect)(wrapper.exists()).toBe(true);
    });
    (0, vitest_1.it)('renders the title', function () {
        var wrapper = (0, test_utils_1.mount)(Calculator_vue_1.default);
        (0, vitest_1.expect)(wrapper.find('h1').text()).toBe('Calculator');
    });
    (0, vitest_1.it)('renders the display', function () {
        var wrapper = (0, test_utils_1.mount)(Calculator_vue_1.default);
        (0, vitest_1.expect)(wrapper.find('input').exists()).toBe(false);
        (0, vitest_1.expect)(wrapper.find('.display').text()).toBe('0');
    });
    (0, vitest_1.it)('renders the buttons', function () {
        var wrapper = (0, test_utils_1.mount)(Calculator_vue_1.default);
        (0, vitest_1.expect)(wrapper.findAll('button').length).toBe(20);
    });
    (0, vitest_1.it)('renders the buttons with the correct text and order', function () {
        var wrapper = (0, test_utils_1.mount)(Calculator_vue_1.default);
        var buttons = wrapper.findAll('button');
        for (var i = 0; i < buttons.length; i++) {
            (0, vitest_1.expect)(calculator.flat()[i]).toBe(buttons.at(i).text());
        }
    });
    (0, vitest_1.it)('should display a number when a click a number button', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, button;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = (0, test_utils_1.mount)(Calculator_vue_1.default);
                    button = wrapper.findAll('button').at(5);
                    return [4 /*yield*/, button.trigger('click')];
                case 1:
                    _a.sent();
                    (0, vitest_1.expect)(wrapper.find('.display').text()).toBe(button.text());
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('when I click in number and !, should be shown n!', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, allButtons, button, exclamation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = (0, test_utils_1.mount)(Calculator_vue_1.default);
                    allButtons = wrapper.findAll('button');
                    button = allButtons.at(5);
                    return [4 /*yield*/, button.trigger('click')];
                case 1:
                    _a.sent();
                    exclamation = allButtons.at(3);
                    return [4 /*yield*/, exclamation.trigger('click')];
                case 2:
                    _a.sent();
                    (0, vitest_1.expect)(wrapper.find('.display').text()).toBe(button.text() + exclamation.text());
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('when I click in number and !, should be shown n! and the =, get result', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, allButtons, button, exclamation, equal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = (0, test_utils_1.mount)(Calculator_vue_1.default);
                    allButtons = wrapper.findAll('button');
                    button = allButtons.at((0, helpers_1.findCharacterIndex)(allButtons, '5'));
                    return [4 /*yield*/, button.trigger('click')];
                case 1:
                    _a.sent();
                    exclamation = allButtons.at((0, helpers_1.findCharacterIndex)(allButtons, '!'));
                    return [4 /*yield*/, exclamation.trigger('click')];
                case 2:
                    _a.sent();
                    equal = allButtons.at((0, helpers_1.findCharacterIndex)(allButtons, '='));
                    return [4 /*yield*/, equal.trigger('click')];
                case 3:
                    _a.sent();
                    (0, vitest_1.expect)(wrapper.find('.display').text()).toBe('120');
                    return [2 /*return*/];
            }
        });
    }); });
});
