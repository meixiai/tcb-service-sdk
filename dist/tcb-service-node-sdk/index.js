'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

var Base = (function () {
    function Base(cloud, version, action, data, options) {
        if (options === void 0) { options = {}; }
        this.cloud = cloud;
        this.action = action;
        this.version = version;
        this.data = data;
        this.options = options;
    }
    return Base;
}());

var ImageClient = require('image-node-sdk').ImageClient;
var AI = (function (_super) {
    __extends(AI, _super);
    function AI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AI.prototype.init = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _a, SecretID, SecretKey, imgClient, result, data, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, SecretID = _a.SecretID, SecretKey = _a.SecretKey;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        imgClient = new ImageClient({ SecretID: SecretID, SecretKey: SecretKey });
                        return [4, imgClient.init({
                                action: this.action,
                                data: this.data
                            })];
                    case 2:
                        result = _b.sent();
                        data = JSON.parse(result);
                        return [2, {
                                code: 0,
                                message: 'success',
                                data: data,
                            }];
                    case 3:
                        e_1 = _b.sent();
                        return [2, {
                                code: e_1.code,
                                message: e_1.message
                            }];
                    case 4: return [2];
                }
            });
        });
    };
    return AI;
}(Base));

var SmsClient = require('sms-node-sdk').SmsClient;
var SMS = (function (_super) {
    __extends(SMS, _super);
    function SMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMS.prototype.init = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _a, SecretID, SecretKey, smsClient, data, resData, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, SecretID = _a.SecretID, SecretKey = _a.SecretKey;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        smsClient = new SmsClient({ AppID: SecretID, AppKey: SecretKey });
                        return [4, smsClient.init({
                                action: this.action,
                                data: this.data
                            })];
                    case 2:
                        data = _b.sent();
                        resData = data.resData;
                        return [2, {
                                code: resData.result,
                                message: !resData.result ? 'success' : resData.errmsg,
                                data: resData,
                            }];
                    case 3:
                        e_1 = _b.sent();
                        return [2, {
                                code: e_1.code || 1000,
                                message: e_1.message
                            }];
                    case 4: return [2];
                }
            });
        });
    };
    return SMS;
}(Base));

var cloud = require('tcb-admin-node');
var TcbService = (function () {
    function TcbService(_a) {
        var _b = _a.SecretID, SecretID = _b === void 0 ? null : _b, _c = _a.SecretKey, SecretKey = _c === void 0 ? null : _c;
        this.cloud = cloud;
        this.SecretID = SecretID || process.env.TENCENTCLOUD_SECRETID;
        this.SecretKey = SecretKey || process.env.TENCENTCLOUD_SECRETKEY;
    }
    TcbService.prototype.callService = function (_a) {
        var service = _a.service, _b = _a.version, version = _b === void 0 ? 'v1.0.0' : _b, action = _a.action, data = _a.data;
        switch (service) {
            case 'ai': {
                var ai = new AI(this.cloud, version, action, data, {
                    SecretID: this.SecretID,
                    SecretKey: this.SecretKey
                });
                return ai.init();
            }
            case 'sms': {
                var sms = new SMS(this.cloud, version, action, data, {
                    SecretID: this.SecretID,
                    SecretKey: this.SecretKey
                });
                return sms.init();
            }
        }
    };
    return TcbService;
}());

module.exports = TcbService;
