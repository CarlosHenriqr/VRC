import { r as __exportAll } from "../_runtime.mjs";
import { a as DEFAULT_ENTRY_NAME, c as _components, d as _serverApps, f as getApps, i as setUserProperties, l as _getProvider, m as registerVersion, n as isSupported, o as _addComponent, p as initializeApp, r as logEvent, s as _apps, t as initializeAnalytics, u as _registerComponent } from "./@firebase/analytics+[...].mjs";
//#region node_modules/firebase/analytics/dist/index.mjs
var dist_exports$1 = /* @__PURE__ */ __exportAll({
	initializeAnalytics: () => initializeAnalytics,
	isSupported: () => isSupported,
	logEvent: () => logEvent,
	setUserProperties: () => setUserProperties
});
//#endregion
//#region node_modules/firebase/app/dist/index.mjs
var dist_exports = /* @__PURE__ */ __exportAll({
	SDK_VERSION: () => SDK_VERSION,
	_DEFAULT_ENTRY_NAME: () => DEFAULT_ENTRY_NAME,
	_addComponent: () => _addComponent,
	_apps: () => _apps,
	_components: () => _components,
	_getProvider: () => _getProvider,
	_registerComponent: () => _registerComponent,
	_serverApps: () => _serverApps,
	getApps: () => getApps,
	initializeApp: () => initializeApp,
	registerVersion: () => registerVersion
});
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
registerVersion("firebase", "12.15.0", "app");
//#endregion
export { dist_exports$1 as n, dist_exports as t };
