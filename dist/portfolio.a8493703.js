// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1UrCN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c169f50ea8493703";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"lamKG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _marked = require("marked");
var _markedCustomHeadingId = require("marked-custom-heading-id");
var _markedCustomHeadingIdDefault = parcelHelpers.interopDefault(_markedCustomHeadingId);
// markdown content
var _dashboardMd = require("../content/dashboard.md");
var _dashboardMdDefault = parcelHelpers.interopDefault(_dashboardMd);
var _skillsMd = require("../content/skills.md");
var _skillsMdDefault = parcelHelpers.interopDefault(_skillsMd);
var _testimonialsMd = require("../content/testimonials.md");
var _testimonialsMdDefault = parcelHelpers.interopDefault(_testimonialsMd);
//yeeeaaaaahhh im gonna change that later.
var _fluentSCSSMd = require("../content/projects/FluentSCSS.md");
var _fluentSCSSMdDefault = parcelHelpers.interopDefault(_fluentSCSSMd);
//ya know, I really love marked.
(0, _marked.marked).use({
    gfm: true
}, (0, _markedCustomHeadingIdDefault.default)());
const projectsMD = [
    (0, _fluentSCSSMdDefault.default)
];
const dashboard = document.getElementById("dashboard");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const testimonials = document.getElementById("testimonials");
const content = document.getElementById("content");
// default
content.innerHTML = (0, _marked.marked)((0, _fluentSCSSMdDefault.default));
dashboard.addEventListener("click", ()=>{
    content.innerHTML = (0, _marked.marked)((0, _dashboardMdDefault.default));
});
skills.addEventListener("click", ()=>{
    content.innerHTML = (0, _marked.marked)(`${(0, _skillsMdDefault.default)} {#work-in-progress}`);
});
projects.addEventListener("click", ()=>{
    const projectsList = document.getElementById("projects-list");
    projectsList.classList.toggle("active");
});
testimonials.addEventListener("click", ()=>{
    content.innerHTML = (0, _marked.marked)(`${(0, _testimonialsMdDefault.default)} {#work-in-progress}`);
});

},{"../content/dashboard.md":"4JXus","../content/skills.md":"k7VNW","../content/testimonials.md":"2fTqt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../content/projects/FluentSCSS.md":"86Y4e","marked":"4duqf","marked-custom-heading-id":"8DyFf"}],"4JXus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "![Code Activity](https://wakatime.com/share/@018ba21d-1073-4759-958b-3d1dc68c6943/21526099-2aaf-4756-925a-a669a315b2bd.png)\r\n\r\n![Languages](https://wakatime.com/share/@018ba21d-1073-4759-958b-3d1dc68c6943/138fa28a-b2f3-43d7-9dd6-bb8cf996b398.png)\r\n";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"k7VNW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "# Work in progress";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fTqt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "# Work in progress";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"86Y4e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "---\r\nTitle: FluentSCSS\r\nDate: Nov-28th-2023\r\n---\r\n# Work in progress\r\n";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4duqf":[function(require,module,exports) {
/**
 * marked v10.0.0 - a markdown parser
 * Copyright (c) 2011-2023, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */ /**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */ (function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    /**
     * Gets the original marked default options.
     */ function _getDefaults() {
        return {
            async: false,
            breaks: false,
            extensions: null,
            gfm: true,
            hooks: null,
            pedantic: false,
            renderer: null,
            silent: false,
            tokenizer: null,
            walkTokens: null
        };
    }
    exports1.defaults = _getDefaults();
    function changeDefaults(newDefaults) {
        exports1.defaults = newDefaults;
    }
    /**
     * Helpers
     */ const escapeTest = /[&<>"']/;
    const escapeReplace = new RegExp(escapeTest.source, "g");
    const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
    const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
    const escapeReplacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };
    const getEscapeReplacement = (ch)=>escapeReplacements[ch];
    function escape(html, encode) {
        if (encode) {
            if (escapeTest.test(html)) return html.replace(escapeReplace, getEscapeReplacement);
        } else {
            if (escapeTestNoEncode.test(html)) return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
        return html;
    }
    const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    function unescape(html) {
        // explicitly match decimal, hex, and named HTML entities
        return html.replace(unescapeTest, (_, n)=>{
            n = n.toLowerCase();
            if (n === "colon") return ":";
            if (n.charAt(0) === "#") return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
            return "";
        });
    }
    const caret = /(^|[^\[])\^/g;
    function edit(regex, opt) {
        regex = typeof regex === "string" ? regex : regex.source;
        opt = opt || "";
        const obj = {
            replace: (name, val)=>{
                val = typeof val === "object" && "source" in val ? val.source : val;
                val = val.replace(caret, "$1");
                regex = regex.replace(name, val);
                return obj;
            },
            getRegex: ()=>{
                return new RegExp(regex, opt);
            }
        };
        return obj;
    }
    function cleanUrl(href) {
        try {
            href = encodeURI(href).replace(/%25/g, "%");
        } catch (e) {
            return null;
        }
        return href;
    }
    const noopTest = {
        exec: ()=>null
    };
    function splitCells(tableRow, count) {
        // ensure that every cell-delimiting pipe has a space
        // before it to distinguish it from an escaped pipe
        const row = tableRow.replace(/\|/g, (match, offset, str)=>{
            let escaped = false;
            let curr = offset;
            while(--curr >= 0 && str[curr] === "\\")escaped = !escaped;
            if (escaped) // odd number of slashes means | is escaped
            // so we leave it alone
            return "|";
            else // add space before unescaped |
            return " |";
        }), cells = row.split(/ \|/);
        let i = 0;
        // First/last cell in a row cannot be empty if it has no leading/trailing pipe
        if (!cells[0].trim()) cells.shift();
        if (cells.length > 0 && !cells[cells.length - 1].trim()) cells.pop();
        if (count) {
            if (cells.length > count) cells.splice(count);
            else while(cells.length < count)cells.push("");
        }
        for(; i < cells.length; i++)// leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, "|");
        return cells;
    }
    /**
     * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
     * /c*$/ is vulnerable to REDOS.
     *
     * @param str
     * @param c
     * @param invert Remove suffix of non-c chars instead. Default falsey.
     */ function rtrim(str, c, invert) {
        const l = str.length;
        if (l === 0) return "";
        // Length of suffix matching the invert condition.
        let suffLen = 0;
        // Step left until we fail to match the invert condition.
        while(suffLen < l){
            const currChar = str.charAt(l - suffLen - 1);
            if (currChar === c && !invert) suffLen++;
            else if (currChar !== c && invert) suffLen++;
            else break;
        }
        return str.slice(0, l - suffLen);
    }
    function findClosingBracket(str, b) {
        if (str.indexOf(b[1]) === -1) return -1;
        let level = 0;
        for(let i = 0; i < str.length; i++){
            if (str[i] === "\\") i++;
            else if (str[i] === b[0]) level++;
            else if (str[i] === b[1]) {
                level--;
                if (level < 0) return i;
            }
        }
        return -1;
    }
    function outputLink(cap, link, raw, lexer) {
        const href = link.href;
        const title = link.title ? escape(link.title) : null;
        const text = cap[1].replace(/\\([\[\]])/g, "$1");
        if (cap[0].charAt(0) !== "!") {
            lexer.state.inLink = true;
            const token = {
                type: "link",
                raw,
                href,
                title,
                text,
                tokens: lexer.inlineTokens(text)
            };
            lexer.state.inLink = false;
            return token;
        }
        return {
            type: "image",
            raw,
            href,
            title,
            text: escape(text)
        };
    }
    function indentCodeCompensation(raw, text) {
        const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
        if (matchIndentToCode === null) return text;
        const indentToCode = matchIndentToCode[1];
        return text.split("\n").map((node)=>{
            const matchIndentInNode = node.match(/^\s+/);
            if (matchIndentInNode === null) return node;
            const [indentInNode] = matchIndentInNode;
            if (indentInNode.length >= indentToCode.length) return node.slice(indentToCode.length);
            return node;
        }).join("\n");
    }
    /**
     * Tokenizer
     */ class _Tokenizer {
        options;
        // TODO: Fix this rules type
        rules;
        lexer;
        constructor(options){
            this.options = options || exports1.defaults;
        }
        space(src) {
            const cap = this.rules.block.newline.exec(src);
            if (cap && cap[0].length > 0) return {
                type: "space",
                raw: cap[0]
            };
        }
        code(src) {
            const cap = this.rules.block.code.exec(src);
            if (cap) {
                const text = cap[0].replace(/^ {1,4}/gm, "");
                return {
                    type: "code",
                    raw: cap[0],
                    codeBlockStyle: "indented",
                    text: !this.options.pedantic ? rtrim(text, "\n") : text
                };
            }
        }
        fences(src) {
            const cap = this.rules.block.fences.exec(src);
            if (cap) {
                const raw = cap[0];
                const text = indentCodeCompensation(raw, cap[3] || "");
                return {
                    type: "code",
                    raw,
                    lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
                    text
                };
            }
        }
        heading(src) {
            const cap = this.rules.block.heading.exec(src);
            if (cap) {
                let text = cap[2].trim();
                // remove trailing #s
                if (/#$/.test(text)) {
                    const trimmed = rtrim(text, "#");
                    if (this.options.pedantic) text = trimmed.trim();
                    else if (!trimmed || / $/.test(trimmed)) // CommonMark requires space before trailing #s
                    text = trimmed.trim();
                }
                return {
                    type: "heading",
                    raw: cap[0],
                    depth: cap[1].length,
                    text,
                    tokens: this.lexer.inline(text)
                };
            }
        }
        hr(src) {
            const cap = this.rules.block.hr.exec(src);
            if (cap) return {
                type: "hr",
                raw: cap[0]
            };
        }
        blockquote(src) {
            const cap = this.rules.block.blockquote.exec(src);
            if (cap) {
                const text = rtrim(cap[0].replace(/^ *>[ \t]?/gm, ""), "\n");
                const top = this.lexer.state.top;
                this.lexer.state.top = true;
                const tokens = this.lexer.blockTokens(text);
                this.lexer.state.top = top;
                return {
                    type: "blockquote",
                    raw: cap[0],
                    tokens,
                    text
                };
            }
        }
        list(src) {
            let cap = this.rules.block.list.exec(src);
            if (cap) {
                let bull = cap[1].trim();
                const isordered = bull.length > 1;
                const list = {
                    type: "list",
                    raw: "",
                    ordered: isordered,
                    start: isordered ? +bull.slice(0, -1) : "",
                    loose: false,
                    items: []
                };
                bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
                if (this.options.pedantic) bull = isordered ? bull : "[*+-]";
                // Get next list item
                const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);
                let raw = "";
                let itemContents = "";
                let endsWithBlankLine = false;
                // Check if current bullet point can start a new List Item
                while(src){
                    let endEarly = false;
                    if (!(cap = itemRegex.exec(src))) break;
                    if (this.rules.block.hr.test(src)) break;
                    raw = cap[0];
                    src = src.substring(raw.length);
                    let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t)=>" ".repeat(3 * t.length));
                    let nextLine = src.split("\n", 1)[0];
                    let indent = 0;
                    if (this.options.pedantic) {
                        indent = 2;
                        itemContents = line.trimStart();
                    } else {
                        indent = cap[2].search(/[^ ]/); // Find first non-space char
                        indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
                        itemContents = line.slice(indent);
                        indent += cap[1].length;
                    }
                    let blankLine = false;
                    if (!line && /^ *$/.test(nextLine)) {
                        raw += nextLine + "\n";
                        src = src.substring(nextLine.length + 1);
                        endEarly = true;
                    }
                    if (!endEarly) {
                        const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`);
                        const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
                        const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
                        const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
                        // Check if following lines should be included in List Item
                        while(src){
                            const rawLine = src.split("\n", 1)[0];
                            nextLine = rawLine;
                            // Re-align to follow commonmark nesting rules
                            if (this.options.pedantic) nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
                            // End list item if found code fences
                            if (fencesBeginRegex.test(nextLine)) break;
                            // End list item if found start of new heading
                            if (headingBeginRegex.test(nextLine)) break;
                            // End list item if found start of new bullet
                            if (nextBulletRegex.test(nextLine)) break;
                            // Horizontal rule found
                            if (hrRegex.test(src)) break;
                            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) itemContents += "\n" + nextLine.slice(indent);
                            else {
                                // not enough indentation
                                if (blankLine) break;
                                // paragraph continuation unless last line was a different block level element
                                if (line.search(/[^ ]/) >= 4) break;
                                if (fencesBeginRegex.test(line)) break;
                                if (headingBeginRegex.test(line)) break;
                                if (hrRegex.test(line)) break;
                                itemContents += "\n" + nextLine;
                            }
                            if (!blankLine && !nextLine.trim()) blankLine = true;
                            raw += rawLine + "\n";
                            src = src.substring(rawLine.length + 1);
                            line = nextLine.slice(indent);
                        }
                    }
                    if (!list.loose) {
                        // If the previous item ended with a blank line, the list is loose
                        if (endsWithBlankLine) list.loose = true;
                        else if (/\n *\n *$/.test(raw)) endsWithBlankLine = true;
                    }
                    let istask = null;
                    let ischecked;
                    // Check for task list items
                    if (this.options.gfm) {
                        istask = /^\[[ xX]\] /.exec(itemContents);
                        if (istask) {
                            ischecked = istask[0] !== "[ ] ";
                            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
                        }
                    }
                    list.items.push({
                        type: "list_item",
                        raw,
                        task: !!istask,
                        checked: ischecked,
                        loose: false,
                        text: itemContents,
                        tokens: []
                    });
                    list.raw += raw;
                }
                // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
                list.items[list.items.length - 1].raw = raw.trimEnd();
                list.items[list.items.length - 1].text = itemContents.trimEnd();
                list.raw = list.raw.trimEnd();
                // Item child tokens handled here at end because we needed to have the final item to trim it first
                for(let i = 0; i < list.items.length; i++){
                    this.lexer.state.top = false;
                    list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
                    if (!list.loose) {
                        // Check if list should be loose
                        const spacers = list.items[i].tokens.filter((t)=>t.type === "space");
                        const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t)=>/\n.*\n/.test(t.raw));
                        list.loose = hasMultipleLineBreaks;
                    }
                }
                // Set all items to loose if list is loose
                if (list.loose) for(let i = 0; i < list.items.length; i++)list.items[i].loose = true;
                return list;
            }
        }
        html(src) {
            const cap = this.rules.block.html.exec(src);
            if (cap) {
                const token = {
                    type: "html",
                    block: true,
                    raw: cap[0],
                    pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
                    text: cap[0]
                };
                return token;
            }
        }
        def(src) {
            const cap = this.rules.block.def.exec(src);
            if (cap) {
                const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
                const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
                const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
                return {
                    type: "def",
                    tag,
                    raw: cap[0],
                    href,
                    title
                };
            }
        }
        table(src) {
            const cap = this.rules.block.table.exec(src);
            if (cap) {
                if (!/[:|]/.test(cap[2])) // delimiter row must have a pipe (|) or colon (:) otherwise it is a setext heading
                return;
                const item = {
                    type: "table",
                    raw: cap[0],
                    header: splitCells(cap[1]).map((c)=>{
                        return {
                            text: c,
                            tokens: []
                        };
                    }),
                    align: cap[2].replace(/^\||\| *$/g, "").split("|"),
                    rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
                };
                if (item.header.length === item.align.length) {
                    let l = item.align.length;
                    let i, j, k, row;
                    for(i = 0; i < l; i++){
                        const align = item.align[i];
                        if (align) {
                            if (/^ *-+: *$/.test(align)) item.align[i] = "right";
                            else if (/^ *:-+: *$/.test(align)) item.align[i] = "center";
                            else if (/^ *:-+ *$/.test(align)) item.align[i] = "left";
                            else item.align[i] = null;
                        }
                    }
                    l = item.rows.length;
                    for(i = 0; i < l; i++)item.rows[i] = splitCells(item.rows[i], item.header.length).map((c)=>{
                        return {
                            text: c,
                            tokens: []
                        };
                    });
                    // parse child tokens inside headers and cells
                    // header child tokens
                    l = item.header.length;
                    for(j = 0; j < l; j++)item.header[j].tokens = this.lexer.inline(item.header[j].text);
                    // cell child tokens
                    l = item.rows.length;
                    for(j = 0; j < l; j++){
                        row = item.rows[j];
                        for(k = 0; k < row.length; k++)row[k].tokens = this.lexer.inline(row[k].text);
                    }
                    return item;
                }
            }
        }
        lheading(src) {
            const cap = this.rules.block.lheading.exec(src);
            if (cap) return {
                type: "heading",
                raw: cap[0],
                depth: cap[2].charAt(0) === "=" ? 1 : 2,
                text: cap[1],
                tokens: this.lexer.inline(cap[1])
            };
        }
        paragraph(src) {
            const cap = this.rules.block.paragraph.exec(src);
            if (cap) {
                const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
                return {
                    type: "paragraph",
                    raw: cap[0],
                    text,
                    tokens: this.lexer.inline(text)
                };
            }
        }
        text(src) {
            const cap = this.rules.block.text.exec(src);
            if (cap) return {
                type: "text",
                raw: cap[0],
                text: cap[0],
                tokens: this.lexer.inline(cap[0])
            };
        }
        escape(src) {
            const cap = this.rules.inline.escape.exec(src);
            if (cap) return {
                type: "escape",
                raw: cap[0],
                text: escape(cap[1])
            };
        }
        tag(src) {
            const cap = this.rules.inline.tag.exec(src);
            if (cap) {
                if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) this.lexer.state.inLink = true;
                else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) this.lexer.state.inLink = false;
                if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = true;
                else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = false;
                return {
                    type: "html",
                    raw: cap[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    block: false,
                    text: cap[0]
                };
            }
        }
        link(src) {
            const cap = this.rules.inline.link.exec(src);
            if (cap) {
                const trimmedUrl = cap[2].trim();
                if (!this.options.pedantic && /^</.test(trimmedUrl)) {
                    // commonmark requires matching angle brackets
                    if (!/>$/.test(trimmedUrl)) return;
                    // ending angle bracket cannot be escaped
                    const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
                    if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) return;
                } else {
                    // find closing parenthesis
                    const lastParenIndex = findClosingBracket(cap[2], "()");
                    if (lastParenIndex > -1) {
                        const start = cap[0].indexOf("!") === 0 ? 5 : 4;
                        const linkLen = start + cap[1].length + lastParenIndex;
                        cap[2] = cap[2].substring(0, lastParenIndex);
                        cap[0] = cap[0].substring(0, linkLen).trim();
                        cap[3] = "";
                    }
                }
                let href = cap[2];
                let title = "";
                if (this.options.pedantic) {
                    // split pedantic href and title
                    const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
                    if (link) {
                        href = link[1];
                        title = link[3];
                    }
                } else title = cap[3] ? cap[3].slice(1, -1) : "";
                href = href.trim();
                if (/^</.test(href)) {
                    if (this.options.pedantic && !/>$/.test(trimmedUrl)) // pedantic allows starting angle bracket without ending angle bracket
                    href = href.slice(1);
                    else href = href.slice(1, -1);
                }
                return outputLink(cap, {
                    href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
                    title: title ? title.replace(this.rules.inline._escapes, "$1") : title
                }, cap[0], this.lexer);
            }
        }
        reflink(src, links) {
            let cap;
            if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
                let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
                link = links[link.toLowerCase()];
                if (!link) {
                    const text = cap[0].charAt(0);
                    return {
                        type: "text",
                        raw: text,
                        text
                    };
                }
                return outputLink(cap, link, cap[0], this.lexer);
            }
        }
        emStrong(src, maskedSrc, prevChar = "") {
            let match = this.rules.inline.emStrong.lDelim.exec(src);
            if (!match) return;
            // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
            if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
            const nextChar = match[1] || match[2] || "";
            if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
                // unicode Regex counts emoji as 1 char; spread into array for proper count (used multiple times below)
                const lLength = [
                    ...match[0]
                ].length - 1;
                let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
                const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                endReg.lastIndex = 0;
                // Clip maskedSrc to same section of string as src (move to lexer?)
                maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
                while((match = endReg.exec(maskedSrc)) != null){
                    rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
                    if (!rDelim) continue; // skip single * in __abc*abc__
                    rLength = [
                        ...rDelim
                    ].length;
                    if (match[3] || match[4]) {
                        delimTotal += rLength;
                        continue;
                    } else if (match[5] || match[6]) {
                        if (lLength % 3 && !((lLength + rLength) % 3)) {
                            midDelimTotal += rLength;
                            continue; // CommonMark Emphasis Rules 9-10
                        }
                    }
                    delimTotal -= rLength;
                    if (delimTotal > 0) continue; // Haven't found enough closing delimiters
                    // Remove extra characters. *a*** -> *a*
                    rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
                    // char length can be >1 for unicode characters;
                    const lastCharLength = [
                        ...match[0]
                    ][0].length;
                    const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
                    // Create `em` if smallest delimiter has odd char count. *a***
                    if (Math.min(lLength, rLength) % 2) {
                        const text = raw.slice(1, -1);
                        return {
                            type: "em",
                            raw,
                            text,
                            tokens: this.lexer.inlineTokens(text)
                        };
                    }
                    // Create 'strong' if smallest delimiter has even char count. **a***
                    const text = raw.slice(2, -2);
                    return {
                        type: "strong",
                        raw,
                        text,
                        tokens: this.lexer.inlineTokens(text)
                    };
                }
            }
        }
        codespan(src) {
            const cap = this.rules.inline.code.exec(src);
            if (cap) {
                let text = cap[2].replace(/\n/g, " ");
                const hasNonSpaceChars = /[^ ]/.test(text);
                const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
                if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) text = text.substring(1, text.length - 1);
                text = escape(text, true);
                return {
                    type: "codespan",
                    raw: cap[0],
                    text
                };
            }
        }
        br(src) {
            const cap = this.rules.inline.br.exec(src);
            if (cap) return {
                type: "br",
                raw: cap[0]
            };
        }
        del(src) {
            const cap = this.rules.inline.del.exec(src);
            if (cap) return {
                type: "del",
                raw: cap[0],
                text: cap[2],
                tokens: this.lexer.inlineTokens(cap[2])
            };
        }
        autolink(src) {
            const cap = this.rules.inline.autolink.exec(src);
            if (cap) {
                let text, href;
                if (cap[2] === "@") {
                    text = escape(cap[1]);
                    href = "mailto:" + text;
                } else {
                    text = escape(cap[1]);
                    href = text;
                }
                return {
                    type: "link",
                    raw: cap[0],
                    text,
                    href,
                    tokens: [
                        {
                            type: "text",
                            raw: text,
                            text
                        }
                    ]
                };
            }
        }
        url(src) {
            let cap;
            if (cap = this.rules.inline.url.exec(src)) {
                let text, href;
                if (cap[2] === "@") {
                    text = escape(cap[0]);
                    href = "mailto:" + text;
                } else {
                    // do extended autolink path validation
                    let prevCapZero;
                    do {
                        prevCapZero = cap[0];
                        cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
                    }while (prevCapZero !== cap[0]);
                    text = escape(cap[0]);
                    if (cap[1] === "www.") href = "http://" + cap[0];
                    else href = cap[0];
                }
                return {
                    type: "link",
                    raw: cap[0],
                    text,
                    href,
                    tokens: [
                        {
                            type: "text",
                            raw: text,
                            text
                        }
                    ]
                };
            }
        }
        inlineText(src) {
            const cap = this.rules.inline.text.exec(src);
            if (cap) {
                let text;
                if (this.lexer.state.inRawBlock) text = cap[0];
                else text = escape(cap[0]);
                return {
                    type: "text",
                    raw: cap[0],
                    text
                };
            }
        }
    }
    /**
     * Block-Level Grammar
     */ // Not all rules are defined in the object literal
    // @ts-expect-error
    const block = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
        html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
        def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: noopTest,
        lheading: /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        // regex template, placeholders will be replaced according to different paragraph
        // interruption rules of commonmark and the original markdown spec:
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/
    };
    block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
    block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
    block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
    block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
    block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
    block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    block.lheading = edit(block.lheading).replace(/bull/g, block.bullet) // lists can interrupt
    .getRegex();
    block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "") // setex headings don't interrupt commonmark paragraphs
    .replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ") // only lists starting from 1 can interrupt
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
    /**
     * Normal Block Grammar
     */ block.normal = {
        ...block
    };
    /**
     * GFM Block Grammar
     */ block.gfm = {
        ...block.normal,
        table: "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" // Cells
    };
    block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ") // only lists starting from 1 can interrupt
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "") // setex headings don't interrupt commonmark paragraphs
    .replace("table", block.gfm.table) // interrupt paragraphs with table
    .replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ") // only lists starting from 1 can interrupt
    .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    /**
     * Pedantic grammar (original John Gruber's loose markdown specification)
     */ block.pedantic = {
        ...block.normal,
        html: edit("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: noopTest,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    };
    /**
     * Inline-Level Grammar
     */ // Not all rules are defined in the object literal
    // @ts-expect-error
    const inline = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: noopTest,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: "reflink|nolink(?!\\()",
        emStrong: {
            lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
            //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
            //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
            rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
            rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/ // ^- Not allowed for _
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: noopTest,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^((?![*_])[\spunctuation])/
    };
    // list of unicode punctuation marks, plus any missing characters from CommonMark spec
    inline._punctuation = "\\p{P}$+<=>`^|~";
    inline.punctuation = edit(inline.punctuation, "u").replace(/punctuation/g, inline._punctuation).getRegex();
    // sequences em should skip over [title](link), `code`, <html>
    inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
    inline.anyPunctuation = /\\[punct]/g;
    inline._escapes = /\\([punct])/g;
    inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
    inline.emStrong.lDelim = edit(inline.emStrong.lDelim, "u").replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "gu").replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "gu").replace(/punct/g, inline._punctuation).getRegex();
    inline.anyPunctuation = edit(inline.anyPunctuation, "gu").replace(/punct/g, inline._punctuation).getRegex();
    inline._escapes = edit(inline._escapes, "gu").replace(/punct/g, inline._punctuation).getRegex();
    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
    inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
    inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
    inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
    inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
    /**
     * Normal Inline Grammar
     */ inline.normal = {
        ...inline
    };
    /**
     * Pedantic Inline Grammar
     */ inline.pedantic = {
        ...inline.normal,
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
        },
        link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
        reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
    };
    /**
     * GFM Inline Grammar
     */ inline.gfm = {
        ...inline.normal,
        escape: edit(inline.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    };
    inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
    /**
     * GFM + Line Breaks Inline Grammar
     */ inline.breaks = {
        ...inline.gfm,
        br: edit(inline.br).replace("{2,}", "*").getRegex(),
        text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    };
    /**
     * Block Lexer
     */ class _Lexer {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(options){
            // TokenList cannot be created in one go
            // @ts-expect-error
            this.tokens = [];
            this.tokens.links = Object.create(null);
            this.options = options || exports1.defaults;
            this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
            this.tokenizer = this.options.tokenizer;
            this.tokenizer.options = this.options;
            this.tokenizer.lexer = this;
            this.inlineQueue = [];
            this.state = {
                inLink: false,
                inRawBlock: false,
                top: true
            };
            const rules = {
                block: block.normal,
                inline: inline.normal
            };
            if (this.options.pedantic) {
                rules.block = block.pedantic;
                rules.inline = inline.pedantic;
            } else if (this.options.gfm) {
                rules.block = block.gfm;
                if (this.options.breaks) rules.inline = inline.breaks;
                else rules.inline = inline.gfm;
            }
            this.tokenizer.rules = rules;
        }
        /**
         * Expose Rules
         */ static get rules() {
            return {
                block,
                inline
            };
        }
        /**
         * Static Lex Method
         */ static lex(src, options) {
            const lexer = new _Lexer(options);
            return lexer.lex(src);
        }
        /**
         * Static Lex Inline Method
         */ static lexInline(src, options) {
            const lexer = new _Lexer(options);
            return lexer.inlineTokens(src);
        }
        /**
         * Preprocessing
         */ lex(src) {
            src = src.replace(/\r\n|\r/g, "\n");
            this.blockTokens(src, this.tokens);
            let next;
            while(next = this.inlineQueue.shift())this.inlineTokens(next.src, next.tokens);
            return this.tokens;
        }
        blockTokens(src, tokens = []) {
            if (this.options.pedantic) src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
            else src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs)=>{
                return leading + "    ".repeat(tabs.length);
            });
            let token;
            let lastToken;
            let cutSrc;
            let lastParagraphClipped;
            while(src){
                if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer)=>{
                    if (token = extTokenizer.call({
                        lexer: this
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) continue;
                // newline
                if (token = this.tokenizer.space(src)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.length === 1 && tokens.length > 0) // if there's a single \n as a spacer, it's terminating the last line,
                    // so move it there so that we don't get unnecessary paragraph tags
                    tokens[tokens.length - 1].raw += "\n";
                    else tokens.push(token);
                    continue;
                }
                // code
                if (token = this.tokenizer.code(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    // An indented code block cannot interrupt a paragraph.
                    if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.text;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    continue;
                }
                // fences
                if (token = this.tokenizer.fences(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // heading
                if (token = this.tokenizer.heading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // hr
                if (token = this.tokenizer.hr(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // blockquote
                if (token = this.tokenizer.blockquote(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // list
                if (token = this.tokenizer.list(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // html
                if (token = this.tokenizer.html(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // def
                if (token = this.tokenizer.def(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.raw;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else if (!this.tokens.links[token.tag]) this.tokens.links[token.tag] = {
                        href: token.href,
                        title: token.title
                    };
                    continue;
                }
                // table (gfm)
                if (token = this.tokenizer.table(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // lheading
                if (token = this.tokenizer.lheading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // top-level paragraph
                // prevent paragraph consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startBlock) {
                    let startIndex = Infinity;
                    const tempSrc = src.slice(1);
                    let tempStart;
                    this.options.extensions.startBlock.forEach((getStartIndex)=>{
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === "number" && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                }
                if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
                    lastToken = tokens[tokens.length - 1];
                    if (lastParagraphClipped && lastToken.type === "paragraph") {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    lastParagraphClipped = cutSrc.length !== src.length;
                    src = src.substring(token.raw.length);
                    continue;
                }
                // text
                if (token = this.tokenizer.text(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === "text") {
                        lastToken.raw += "\n" + token.raw;
                        lastToken.text += "\n" + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    continue;
                }
                if (src) {
                    const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    } else throw new Error(errMsg);
                }
            }
            this.state.top = true;
            return tokens;
        }
        inline(src, tokens = []) {
            this.inlineQueue.push({
                src,
                tokens
            });
            return tokens;
        }
        /**
         * Lexing/Compiling
         */ inlineTokens(src, tokens = []) {
            let token, lastToken, cutSrc;
            // String with links masked to avoid interference with em and strong
            let maskedSrc = src;
            let match;
            let keepPrevChar, prevChar;
            // Mask out reflinks
            if (this.tokens.links) {
                const links = Object.keys(this.tokens.links);
                if (links.length > 0) {
                    while((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null)if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                }
            }
            // Mask out other blocks
            while((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            // Mask out escaped characters
            while((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            while(src){
                if (!keepPrevChar) prevChar = "";
                keepPrevChar = false;
                // extensions
                if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer)=>{
                    if (token = extTokenizer.call({
                        lexer: this
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) continue;
                // escape
                if (token = this.tokenizer.escape(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // tag
                if (token = this.tokenizer.tag(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === "text" && lastToken.type === "text") {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                }
                // link
                if (token = this.tokenizer.link(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // reflink, nolink
                if (token = this.tokenizer.reflink(src, this.tokens.links)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === "text" && lastToken.type === "text") {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                }
                // em & strong
                if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // code
                if (token = this.tokenizer.codespan(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // br
                if (token = this.tokenizer.br(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // del (gfm)
                if (token = this.tokenizer.del(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // autolink
                if (token = this.tokenizer.autolink(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // url (gfm)
                if (!this.state.inLink && (token = this.tokenizer.url(src))) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                }
                // text
                // prevent inlineText consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startInline) {
                    let startIndex = Infinity;
                    const tempSrc = src.slice(1);
                    let tempStart;
                    this.options.extensions.startInline.forEach((getStartIndex)=>{
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === "number" && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                }
                if (token = this.tokenizer.inlineText(cutSrc)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.slice(-1) !== "_") prevChar = token.raw.slice(-1);
                    keepPrevChar = true;
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === "text") {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                }
                if (src) {
                    const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    } else throw new Error(errMsg);
                }
            }
            return tokens;
        }
    }
    /**
     * Renderer
     */ class _Renderer {
        options;
        constructor(options){
            this.options = options || exports1.defaults;
        }
        code(code, infostring, escaped) {
            const lang = (infostring || "").match(/^\S*/)?.[0];
            code = code.replace(/\n$/, "") + "\n";
            if (!lang) return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
            return '<pre><code class="language-' + escape(lang) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
        }
        blockquote(quote) {
            return `<blockquote>\n${quote}</blockquote>\n`;
        }
        html(html, block) {
            return html;
        }
        heading(text, level, raw) {
            // ignore IDs
            return `<h${level}>${text}</h${level}>\n`;
        }
        hr() {
            return "<hr>\n";
        }
        list(body, ordered, start) {
            const type = ordered ? "ol" : "ul";
            const startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
            return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
        }
        listitem(text, task, checked) {
            return `<li>${text}</li>\n`;
        }
        checkbox(checked) {
            return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
        }
        paragraph(text) {
            return `<p>${text}</p>\n`;
        }
        table(header, body) {
            if (body) body = `<tbody>${body}</tbody>`;
            return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
        }
        tablerow(content) {
            return `<tr>\n${content}</tr>\n`;
        }
        tablecell(content, flags) {
            const type = flags.header ? "th" : "td";
            const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
            return tag + content + `</${type}>\n`;
        }
        /**
         * span level renderer
         */ strong(text) {
            return `<strong>${text}</strong>`;
        }
        em(text) {
            return `<em>${text}</em>`;
        }
        codespan(text) {
            return `<code>${text}</code>`;
        }
        br() {
            return "<br>";
        }
        del(text) {
            return `<del>${text}</del>`;
        }
        link(href, title, text) {
            const cleanHref = cleanUrl(href);
            if (cleanHref === null) return text;
            href = cleanHref;
            let out = '<a href="' + href + '"';
            if (title) out += ' title="' + title + '"';
            out += ">" + text + "</a>";
            return out;
        }
        image(href, title, text) {
            const cleanHref = cleanUrl(href);
            if (cleanHref === null) return text;
            href = cleanHref;
            let out = `<img src="${href}" alt="${text}"`;
            if (title) out += ` title="${title}"`;
            out += ">";
            return out;
        }
        text(text) {
            return text;
        }
    }
    /**
     * TextRenderer
     * returns only the textual part of the token
     */ class _TextRenderer {
        // no need for block level renderers
        strong(text) {
            return text;
        }
        em(text) {
            return text;
        }
        codespan(text) {
            return text;
        }
        del(text) {
            return text;
        }
        html(text) {
            return text;
        }
        text(text) {
            return text;
        }
        link(href, title, text) {
            return "" + text;
        }
        image(href, title, text) {
            return "" + text;
        }
        br() {
            return "";
        }
    }
    /**
     * Parsing & Compiling
     */ class _Parser {
        options;
        renderer;
        textRenderer;
        constructor(options){
            this.options = options || exports1.defaults;
            this.options.renderer = this.options.renderer || new _Renderer();
            this.renderer = this.options.renderer;
            this.renderer.options = this.options;
            this.textRenderer = new _TextRenderer();
        }
        /**
         * Static Parse Method
         */ static parse(tokens, options) {
            const parser = new _Parser(options);
            return parser.parse(tokens);
        }
        /**
         * Static Parse Inline Method
         */ static parseInline(tokens, options) {
            const parser = new _Parser(options);
            return parser.parseInline(tokens);
        }
        /**
         * Parse Loop
         */ parse(tokens, top = true) {
            let out = "";
            for(let i = 0; i < tokens.length; i++){
                const token = tokens[i];
                // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    const genericToken = token;
                    const ret = this.options.extensions.renderers[genericToken.type].call({
                        parser: this
                    }, genericToken);
                    if (ret !== false || ![
                        "space",
                        "hr",
                        "heading",
                        "code",
                        "table",
                        "blockquote",
                        "list",
                        "html",
                        "paragraph",
                        "text"
                    ].includes(genericToken.type)) {
                        out += ret || "";
                        continue;
                    }
                }
                switch(token.type){
                    case "space":
                        continue;
                    case "hr":
                        out += this.renderer.hr();
                        continue;
                    case "heading":
                        {
                            const headingToken = token;
                            out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape(this.parseInline(headingToken.tokens, this.textRenderer)));
                            continue;
                        }
                    case "code":
                        {
                            const codeToken = token;
                            out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
                            continue;
                        }
                    case "table":
                        {
                            const tableToken = token;
                            let header = "";
                            // header
                            let cell = "";
                            for(let j = 0; j < tableToken.header.length; j++)cell += this.renderer.tablecell(this.parseInline(tableToken.header[j].tokens), {
                                header: true,
                                align: tableToken.align[j]
                            });
                            header += this.renderer.tablerow(cell);
                            let body = "";
                            for(let j = 0; j < tableToken.rows.length; j++){
                                const row = tableToken.rows[j];
                                cell = "";
                                for(let k = 0; k < row.length; k++)cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                                    header: false,
                                    align: tableToken.align[k]
                                });
                                body += this.renderer.tablerow(cell);
                            }
                            out += this.renderer.table(header, body);
                            continue;
                        }
                    case "blockquote":
                        {
                            const blockquoteToken = token;
                            const body = this.parse(blockquoteToken.tokens);
                            out += this.renderer.blockquote(body);
                            continue;
                        }
                    case "list":
                        {
                            const listToken = token;
                            const ordered = listToken.ordered;
                            const start = listToken.start;
                            const loose = listToken.loose;
                            let body = "";
                            for(let j = 0; j < listToken.items.length; j++){
                                const item = listToken.items[j];
                                const checked = item.checked;
                                const task = item.task;
                                let itemBody = "";
                                if (item.task) {
                                    const checkbox = this.renderer.checkbox(!!checked);
                                    if (loose) {
                                        if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                                            item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                                            if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                                        } else item.tokens.unshift({
                                            type: "text",
                                            text: checkbox + " "
                                        });
                                    } else itemBody += checkbox + " ";
                                }
                                itemBody += this.parse(item.tokens, loose);
                                body += this.renderer.listitem(itemBody, task, !!checked);
                            }
                            out += this.renderer.list(body, ordered, start);
                            continue;
                        }
                    case "html":
                        {
                            const htmlToken = token;
                            out += this.renderer.html(htmlToken.text, htmlToken.block);
                            continue;
                        }
                    case "paragraph":
                        {
                            const paragraphToken = token;
                            out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
                            continue;
                        }
                    case "text":
                        {
                            let textToken = token;
                            let body = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
                            while(i + 1 < tokens.length && tokens[i + 1].type === "text"){
                                textToken = tokens[++i];
                                body += "\n" + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
                            }
                            out += top ? this.renderer.paragraph(body) : body;
                            continue;
                        }
                    default:
                        {
                            const errMsg = 'Token with "' + token.type + '" type was not found.';
                            if (this.options.silent) {
                                console.error(errMsg);
                                return "";
                            } else throw new Error(errMsg);
                        }
                }
            }
            return out;
        }
        /**
         * Parse Inline Tokens
         */ parseInline(tokens, renderer) {
            renderer = renderer || this.renderer;
            let out = "";
            for(let i = 0; i < tokens.length; i++){
                const token = tokens[i];
                // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    const ret = this.options.extensions.renderers[token.type].call({
                        parser: this
                    }, token);
                    if (ret !== false || ![
                        "escape",
                        "html",
                        "link",
                        "image",
                        "strong",
                        "em",
                        "codespan",
                        "br",
                        "del",
                        "text"
                    ].includes(token.type)) {
                        out += ret || "";
                        continue;
                    }
                }
                switch(token.type){
                    case "escape":
                        {
                            const escapeToken = token;
                            out += renderer.text(escapeToken.text);
                            break;
                        }
                    case "html":
                        {
                            const tagToken = token;
                            out += renderer.html(tagToken.text);
                            break;
                        }
                    case "link":
                        {
                            const linkToken = token;
                            out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
                            break;
                        }
                    case "image":
                        {
                            const imageToken = token;
                            out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
                            break;
                        }
                    case "strong":
                        {
                            const strongToken = token;
                            out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
                            break;
                        }
                    case "em":
                        {
                            const emToken = token;
                            out += renderer.em(this.parseInline(emToken.tokens, renderer));
                            break;
                        }
                    case "codespan":
                        {
                            const codespanToken = token;
                            out += renderer.codespan(codespanToken.text);
                            break;
                        }
                    case "br":
                        out += renderer.br();
                        break;
                    case "del":
                        {
                            const delToken = token;
                            out += renderer.del(this.parseInline(delToken.tokens, renderer));
                            break;
                        }
                    case "text":
                        {
                            const textToken = token;
                            out += renderer.text(textToken.text);
                            break;
                        }
                    default:
                        {
                            const errMsg = 'Token with "' + token.type + '" type was not found.';
                            if (this.options.silent) {
                                console.error(errMsg);
                                return "";
                            } else throw new Error(errMsg);
                        }
                }
            }
            return out;
        }
    }
    class _Hooks {
        options;
        constructor(options){
            this.options = options || exports1.defaults;
        }
        static passThroughHooks = new Set([
            "preprocess",
            "postprocess"
        ]);
        /**
         * Process markdown before marked
         */ preprocess(markdown) {
            return markdown;
        }
        /**
         * Process HTML after marked is finished
         */ postprocess(html) {
            return html;
        }
    }
    class Marked {
        defaults = _getDefaults();
        options = this.setOptions;
        parse = this.#parseMarkdown(_Lexer.lex, _Parser.parse);
        parseInline = this.#parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
        Parser = _Parser;
        Renderer = _Renderer;
        TextRenderer = _TextRenderer;
        Lexer = _Lexer;
        Tokenizer = _Tokenizer;
        Hooks = _Hooks;
        constructor(...args){
            this.use(...args);
        }
        /**
         * Run callback for every token
         */ walkTokens(tokens, callback) {
            let values = [];
            for (const token of tokens){
                values = values.concat(callback.call(this, token));
                switch(token.type){
                    case "table":
                        {
                            const tableToken = token;
                            for (const cell of tableToken.header)values = values.concat(this.walkTokens(cell.tokens, callback));
                            for (const row of tableToken.rows)for (const cell of row)values = values.concat(this.walkTokens(cell.tokens, callback));
                            break;
                        }
                    case "list":
                        {
                            const listToken = token;
                            values = values.concat(this.walkTokens(listToken.items, callback));
                            break;
                        }
                    default:
                        {
                            const genericToken = token;
                            if (this.defaults.extensions?.childTokens?.[genericToken.type]) this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens)=>{
                                values = values.concat(this.walkTokens(genericToken[childTokens], callback));
                            });
                            else if (genericToken.tokens) values = values.concat(this.walkTokens(genericToken.tokens, callback));
                        }
                }
            }
            return values;
        }
        use(...args) {
            const extensions = this.defaults.extensions || {
                renderers: {},
                childTokens: {}
            };
            args.forEach((pack)=>{
                // copy options to new object
                const opts = {
                    ...pack
                };
                // set async to true if it was set to true before
                opts.async = this.defaults.async || opts.async || false;
                // ==-- Parse "addon" extensions --== //
                if (pack.extensions) {
                    pack.extensions.forEach((ext)=>{
                        if (!ext.name) throw new Error("extension name required");
                        if ("renderer" in ext) {
                            const prevRenderer = extensions.renderers[ext.name];
                            if (prevRenderer) // Replace extension with func to run new extension but fall back if false
                            extensions.renderers[ext.name] = function(...args) {
                                let ret = ext.renderer.apply(this, args);
                                if (ret === false) ret = prevRenderer.apply(this, args);
                                return ret;
                            };
                            else extensions.renderers[ext.name] = ext.renderer;
                        }
                        if ("tokenizer" in ext) {
                            if (!ext.level || ext.level !== "block" && ext.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                            const extLevel = extensions[ext.level];
                            if (extLevel) extLevel.unshift(ext.tokenizer);
                            else extensions[ext.level] = [
                                ext.tokenizer
                            ];
                            if (ext.start) {
                                if (ext.level === "block") {
                                    if (extensions.startBlock) extensions.startBlock.push(ext.start);
                                    else extensions.startBlock = [
                                        ext.start
                                    ];
                                } else if (ext.level === "inline") {
                                    if (extensions.startInline) extensions.startInline.push(ext.start);
                                    else extensions.startInline = [
                                        ext.start
                                    ];
                                }
                            }
                        }
                        if ("childTokens" in ext && ext.childTokens) extensions.childTokens[ext.name] = ext.childTokens;
                    });
                    opts.extensions = extensions;
                }
                // ==-- Parse "overwrite" extensions --== //
                if (pack.renderer) {
                    const renderer = this.defaults.renderer || new _Renderer(this.defaults);
                    for(const prop in pack.renderer){
                        const rendererFunc = pack.renderer[prop];
                        const rendererKey = prop;
                        const prevRenderer = renderer[rendererKey];
                        // Replace renderer with func to run extension, but fall back if false
                        renderer[rendererKey] = (...args)=>{
                            let ret = rendererFunc.apply(renderer, args);
                            if (ret === false) ret = prevRenderer.apply(renderer, args);
                            return ret || "";
                        };
                    }
                    opts.renderer = renderer;
                }
                if (pack.tokenizer) {
                    const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
                    for(const prop in pack.tokenizer){
                        const tokenizerFunc = pack.tokenizer[prop];
                        const tokenizerKey = prop;
                        const prevTokenizer = tokenizer[tokenizerKey];
                        // Replace tokenizer with func to run extension, but fall back if false
                        tokenizer[tokenizerKey] = (...args)=>{
                            let ret = tokenizerFunc.apply(tokenizer, args);
                            if (ret === false) ret = prevTokenizer.apply(tokenizer, args);
                            return ret;
                        };
                    }
                    opts.tokenizer = tokenizer;
                }
                // ==-- Parse Hooks extensions --== //
                if (pack.hooks) {
                    const hooks = this.defaults.hooks || new _Hooks();
                    for(const prop in pack.hooks){
                        const hooksFunc = pack.hooks[prop];
                        const hooksKey = prop;
                        const prevHook = hooks[hooksKey];
                        if (_Hooks.passThroughHooks.has(prop)) hooks[hooksKey] = (arg)=>{
                            if (this.defaults.async) return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret)=>{
                                return prevHook.call(hooks, ret);
                            });
                            const ret = hooksFunc.call(hooks, arg);
                            return prevHook.call(hooks, ret);
                        };
                        else hooks[hooksKey] = (...args)=>{
                            let ret = hooksFunc.apply(hooks, args);
                            if (ret === false) ret = prevHook.apply(hooks, args);
                            return ret;
                        };
                    }
                    opts.hooks = hooks;
                }
                // ==-- Parse WalkTokens extensions --== //
                if (pack.walkTokens) {
                    const walkTokens = this.defaults.walkTokens;
                    const packWalktokens = pack.walkTokens;
                    opts.walkTokens = function(token) {
                        let values = [];
                        values.push(packWalktokens.call(this, token));
                        if (walkTokens) values = values.concat(walkTokens.call(this, token));
                        return values;
                    };
                }
                this.defaults = {
                    ...this.defaults,
                    ...opts
                };
            });
            return this;
        }
        setOptions(opt) {
            this.defaults = {
                ...this.defaults,
                ...opt
            };
            return this;
        }
        lexer(src, options) {
            return _Lexer.lex(src, options ?? this.defaults);
        }
        parser(tokens, options) {
            return _Parser.parse(tokens, options ?? this.defaults);
        }
        #parseMarkdown(lexer, parser) {
            return (src, options)=>{
                const origOpt = {
                    ...options
                };
                const opt = {
                    ...this.defaults,
                    ...origOpt
                };
                // Show warning if an extension set async to true but the parse was called with async: false
                if (this.defaults.async === true && origOpt.async === false) {
                    if (!opt.silent) console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
                    opt.async = true;
                }
                const throwError = this.#onError(!!opt.silent, !!opt.async);
                // throw error in case of non string input
                if (typeof src === "undefined" || src === null) return throwError(new Error("marked(): input parameter is undefined or null"));
                if (typeof src !== "string") return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
                if (opt.hooks) opt.hooks.options = opt;
                if (opt.async) return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src)=>lexer(src, opt)).then((tokens)=>opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(()=>tokens) : tokens).then((tokens)=>parser(tokens, opt)).then((html)=>opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
                try {
                    if (opt.hooks) src = opt.hooks.preprocess(src);
                    const tokens = lexer(src, opt);
                    if (opt.walkTokens) this.walkTokens(tokens, opt.walkTokens);
                    let html = parser(tokens, opt);
                    if (opt.hooks) html = opt.hooks.postprocess(html);
                    return html;
                } catch (e) {
                    return throwError(e);
                }
            };
        }
        #onError(silent, async) {
            return (e)=>{
                e.message += "\nPlease report this to https://github.com/markedjs/marked.";
                if (silent) {
                    const msg = "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
                    if (async) return Promise.resolve(msg);
                    return msg;
                }
                if (async) return Promise.reject(e);
                throw e;
            };
        }
    }
    const markedInstance = new Marked();
    function marked(src, opt) {
        return markedInstance.parse(src, opt);
    }
    /**
     * Sets the default options.
     *
     * @param options Hash of options
     */ marked.options = marked.setOptions = function(options) {
        markedInstance.setOptions(options);
        marked.defaults = markedInstance.defaults;
        changeDefaults(marked.defaults);
        return marked;
    };
    /**
     * Gets the original marked default options.
     */ marked.getDefaults = _getDefaults;
    marked.defaults = exports1.defaults;
    /**
     * Use Extension
     */ marked.use = function(...args) {
        markedInstance.use(...args);
        marked.defaults = markedInstance.defaults;
        changeDefaults(marked.defaults);
        return marked;
    };
    /**
     * Run callback for every token
     */ marked.walkTokens = function(tokens, callback) {
        return markedInstance.walkTokens(tokens, callback);
    };
    /**
     * Compiles markdown to HTML without enclosing `p` tag.
     *
     * @param src String of markdown source to be compiled
     * @param options Hash of options
     * @return String of compiled HTML
     */ marked.parseInline = markedInstance.parseInline;
    /**
     * Expose
     */ marked.Parser = _Parser;
    marked.parser = _Parser.parse;
    marked.Renderer = _Renderer;
    marked.TextRenderer = _TextRenderer;
    marked.Lexer = _Lexer;
    marked.lexer = _Lexer.lex;
    marked.Tokenizer = _Tokenizer;
    marked.Hooks = _Hooks;
    marked.parse = marked;
    const options = marked.options;
    const setOptions = marked.setOptions;
    const use = marked.use;
    const walkTokens = marked.walkTokens;
    const parseInline = marked.parseInline;
    const parse = marked;
    const parser = _Parser.parse;
    const lexer = _Lexer.lex;
    exports1.Hooks = _Hooks;
    exports1.Lexer = _Lexer;
    exports1.Marked = Marked;
    exports1.Parser = _Parser;
    exports1.Renderer = _Renderer;
    exports1.TextRenderer = _TextRenderer;
    exports1.Tokenizer = _Tokenizer;
    exports1.getDefaults = _getDefaults;
    exports1.lexer = lexer;
    exports1.marked = marked;
    exports1.options = options;
    exports1.parse = parse;
    exports1.parseInline = parseInline;
    exports1.parser = parser;
    exports1.setOptions = setOptions;
    exports1.use = use;
    exports1.walkTokens = walkTokens;
});

},{}],"8DyFf":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function customHeadingId() {
        return {
            renderer: {
                heading (text, level, raw, slugger) {
                    const headingIdRegex = /(?: +|^)\{#([a-z][\w-]*)\}(?: +|$)/i;
                    const hasId = text.match(headingIdRegex);
                    if (!hasId) // fallback to original heading renderer
                    return false;
                    return `<h${level} id="${hasId[1]}">${text.replace(headingIdRegex, "")}</h${level}>\n`;
                }
            }
        };
    }
    return customHeadingId;
});

},{}]},["1UrCN","lamKG"], "lamKG", "parcelRequired6f9")

//# sourceMappingURL=portfolio.a8493703.js.map
