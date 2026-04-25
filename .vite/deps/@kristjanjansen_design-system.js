import { n as __commonJSMin, t as require_react } from "./react-fkwlDGTf.js";
//#region node_modules/.pnpm/react@19.2.5/node_modules/react/cjs/react-jsx-runtime.development.js
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var require_react_jsx_runtime_development = /* @__PURE__ */ __commonJSMin((exports) => {
  (function () {
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
            ),
          type.$$typeof)
        ) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return type.displayName || "Context";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 =
          ("function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag]) ||
          value.constructor.name ||
          "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0,
        );
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE) return "<>";
      if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown ||
          ((specialPropKeyWarningShown = !0),
          console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName,
          ));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0,
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] ||
        ((didWarnAboutElementRef[componentName] = !0),
        console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.",
        ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
      var refProp = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner,
      };
      null !== (void 0 !== refProp ? refProp : null)
        ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning,
          })
        : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null,
          });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0,
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null,
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugStack,
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugTask,
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
      var children = config.children;
      if (void 0 !== children)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
            );
        else validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function (k) {
          return "key" !== k;
        });
        isStaticChildren =
          0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] ||
          ((keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
          console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children,
          ),
          (didWarnAboutKeySpread[children + isStaticChildren] = !0));
      }
      children = null;
      void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
      hasValidKey(config) && (checkKeyStringCoercion(config.key), (children = "" + config.key));
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      children &&
        defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type,
        );
      return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
      isValidElement(node)
        ? node._store && (node._store.validated = 1)
        : "object" === typeof node &&
          null !== node &&
          node.$$typeof === REACT_LAZY_TYPE &&
          ("fulfilled" === node._payload.status
            ? isValidElement(node._payload.value) &&
              node._payload.value._store &&
              (node._payload.value._store.validated = 1)
            : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
      return (
        "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE
      );
    }
    var React = require_react(),
      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
      REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      isArrayImpl = Array.isArray,
      createTask = console.createTask
        ? console.createTask
        : function () {
            return null;
          };
    React = {
      react_stack_bottom_frame: function (callStackForError) {
        return callStackForError();
      },
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function (type, config, maybeKey) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(
        type,
        config,
        maybeKey,
        !1,
        trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask,
      );
    };
    exports.jsxs = function (type, config, maybeKey) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(
        type,
        config,
        maybeKey,
        !0,
        trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask,
      );
    };
  })();
});
//#endregion
//#region node_modules/.pnpm/react@19.2.5/node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin((exports, module) => {
  module.exports = require_react_jsx_runtime_development();
});
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/Accordion/AccordionGroup.mjs
var import_react = require_react();
var import_jsx_runtime = require_jsx_runtime();
var AccordionContext = (0, import_react.createContext)(void 0);
var useAccordionGroup = () => (0, import_react.useContext)(AccordionContext);
function AccordionGroup({ exclusive, className, children }) {
  const groupId = (0, import_react.useId)();
  const name = exclusive ? groupId : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContext.Provider, {
    value: name,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: ["ds-accordion-group", className].filter(Boolean).join(" "),
      children,
    }),
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/icons/IconChevronDownSm.mjs
function IconChevronDownSm() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.29289 6.29289C4.68342 5.90237 5.31658 5.90237 5.70711 6.29289L8 8.58579L10.2929 6.29289C10.6834 5.90237 11.3166 5.90237 11.7071 6.29289C12.0976 6.68342 12.0976 7.31658 11.7071 7.70711L8.70711 10.7071C8.31658 11.0976 7.68342 11.0976 7.29289 10.7071L4.29289 7.70711C3.90237 7.31658 3.90237 6.68342 4.29289 6.29289Z",
      fill: "currentColor",
    }),
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/Accordion/Accordion2.mjs
function Accordion({
  title,
  defaultOpen,
  disabled,
  variant = "ghost",
  children,
  onToggle,
  className,
  name,
  ...rest
}) {
  const groupName = useAccordionGroup();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
    className: [
      "ds-accordion",
      `ds-accordion--${variant}`,
      disabled ? "ds-accordion--disabled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" "),
    open: defaultOpen,
    name: name ?? groupName,
    onToggle: onToggle ? (e) => onToggle(e.target.open) : void 0,
    ...rest,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
        className: "trigger",
        tabIndex: disabled ? -1 : void 0,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "icon",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChevronDownSm, {}),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "title",
            children: title,
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "content",
        children,
      }),
    ],
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/Button/Button2.mjs
var Button = (0, import_react.forwardRef)(function Button(
  { variant = "primary", size = "default", className, children, ...rest },
  ref,
) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    ref,
    className: ["ds-button", `ds-button--${variant}`, `ds-button--${size}`, className]
      .filter(Boolean)
      .join(" "),
    ...rest,
    children,
  });
});
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/icons/IconCheckSm.mjs
function IconCheckSm() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.6272 3.36612C15.1243 3.85427 15.1243 4.64573 14.6272 5.13388L6.99086 12.6339C6.49383 13.122 5.68799 13.122 5.19096 12.6339L1.37277 8.88388C0.875742 8.39573 0.875742 7.60427 1.37277 7.11612C1.8698 6.62796 2.67565 6.62796 3.17268 7.11612L6.09091 9.98223L12.8273 3.36612C13.3243 2.87796 14.1302 2.87796 14.6272 3.36612Z",
      fill: "currentColor",
    }),
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/icons/IconIndeterminateSm.mjs
function IconIndeterminateSm() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M4 8h8",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
    }),
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/internal/RequiredIndicator.mjs
function RequiredIndicator() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    "aria-hidden": "true",
    className: "ds-required",
    children: "✱",
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/internal/FieldLabel2.mjs
function FieldLabel({ children, htmlFor, required, infoHint, suffix, disabled, className }) {
  if (!children) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
    htmlFor,
    className: ["ds-field-label", disabled ? "ds-field-label--disabled" : "", className]
      .filter(Boolean)
      .join(" "),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
        className: "ds-field-label-text",
        children: [
          children,
          required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredIndicator, {}),
          suffix &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "ds-field-label-suffix",
              children: suffix,
            }),
        ],
      }),
      infoHint &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "ds-field-label-hint",
          children: infoHint,
        }),
    ],
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/internal/FieldMessages2.mjs
function FieldMessages({ error, description, errorId, descriptionId }) {
  if (!error && !description) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "ds-field-messages",
    children: [
      error &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          id: errorId,
          "aria-live": "polite",
          className: "ds-field-messages-error",
          children: error,
        }),
      description &&
        !error &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          id: descriptionId,
          className: "ds-field-messages-description",
          children: description,
        }),
    ],
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/Checkbox/Checkbox2.mjs
var Checkbox = (0, import_react.forwardRef)(function Checkbox(
  {
    label,
    description,
    error,
    indeterminate,
    onChange,
    id,
    className,
    checked,
    defaultChecked,
    required,
    disabled,
    ...rest
  },
  ref,
) {
  const autoId = (0, import_react.useId)();
  const inputId = id ?? autoId;
  const errorId = error ? `${inputId}-error` : void 0;
  const descId = description ? `${inputId}-desc` : void 0;
  const describedBy = [errorId, descId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: ["ds-checkbox", className].filter(Boolean).join(" "),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "control",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "indicator",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                ref: (node) => {
                  if (node) node.indeterminate = indeterminate ?? false;
                  if (typeof ref === "function") ref(node);
                  else if (ref) ref.current = node;
                },
                id: inputId,
                type: "checkbox",
                className: "input",
                checked,
                defaultChecked,
                "aria-invalid": error ? true : void 0,
                "aria-required": required || void 0,
                "aria-describedby": describedBy,
                disabled,
                onChange: onChange ? (e) => onChange(e.target.checked, e) : void 0,
                ...rest,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "icon icon--check",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCheckSm, {}),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "icon icon--indeterminate",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconIndeterminateSm, {}),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
            htmlFor: inputId,
            required,
            disabled,
            children: label,
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldMessages, {
        error,
        description,
        errorId,
        descriptionId: descId,
      }),
    ],
  });
});
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/Switch/Switch2.mjs
var Switch = (0, import_react.forwardRef)(function Switch(
  { label, onChange, id, className, checked, defaultChecked, disabled, ...rest },
  ref,
) {
  const autoId = (0, import_react.useId)();
  const inputId = id ?? autoId;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: ["ds-switch", className].filter(Boolean).join(" "),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "track",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            ref,
            id: inputId,
            type: "checkbox",
            role: "switch",
            className: "input",
            checked,
            defaultChecked,
            "aria-checked": checked ?? defaultChecked,
            disabled,
            onChange: onChange ? (e) => onChange(e.target.checked, e) : void 0,
            ...rest,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "thumb" }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
        htmlFor: inputId,
        disabled,
        children: label,
      }),
    ],
  });
});
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/Textarea/Textarea2.mjs
var Textarea = (0, import_react.forwardRef)(function Textarea(
  {
    label,
    description,
    error,
    onChange,
    id,
    className,
    required,
    infoHint,
    suffix,
    disabled,
    ...rest
  },
  ref,
) {
  const autoId = (0, import_react.useId)();
  const inputId = id ?? autoId;
  const errorId = error ? `${inputId}-error` : void 0;
  const descId = description ? `${inputId}-desc` : void 0;
  const describedBy = [errorId, descId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: ["ds-textarea", className].filter(Boolean).join(" "),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
        htmlFor: inputId,
        required,
        infoHint,
        suffix,
        disabled,
        children: label,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
        ref,
        id: inputId,
        className: "input",
        "aria-invalid": error ? true : void 0,
        required,
        "aria-required": required || void 0,
        "aria-describedby": describedBy,
        disabled,
        onChange: onChange ? (e) => onChange(e.target.value, e) : void 0,
        ...rest,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldMessages, {
        error,
        description,
        errorId,
        descriptionId: descId,
      }),
    ],
  });
});
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/Input/Input2.mjs
var Input = (0, import_react.forwardRef)(function Input(
  {
    label,
    description,
    error,
    onChange,
    id,
    className,
    required,
    infoHint,
    suffix,
    disabled,
    inputStart,
    inputEnd,
    ...rest
  },
  ref,
) {
  const autoId = (0, import_react.useId)();
  const inputId = id ?? autoId;
  const errorId = error ? `${inputId}-error` : void 0;
  const descId = description ? `${inputId}-desc` : void 0;
  const describedBy = [errorId, descId].filter(Boolean).join(" ") || void 0;
  const hasSlots = inputStart || inputEnd;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: ["ds-input", className].filter(Boolean).join(" "),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
        htmlFor: inputId,
        required,
        infoHint,
        suffix,
        disabled,
        children: label,
      }),
      hasSlots
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: ["input-wrapper", error ? "input-wrapper--error" : ""]
              .filter(Boolean)
              .join(" "),
            children: [
              inputStart &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "input-start",
                  children: inputStart,
                }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                ref,
                id: inputId,
                className: "input input--slotted",
                "aria-invalid": error ? true : void 0,
                required,
                "aria-required": required || void 0,
                "aria-describedby": describedBy,
                disabled,
                onChange: onChange ? (e) => onChange(e.target.value, e) : void 0,
                ...rest,
              }),
              inputEnd &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "input-end",
                  children: inputEnd,
                }),
            ],
          })
        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            ref,
            id: inputId,
            className: "input",
            "aria-invalid": error ? true : void 0,
            required,
            "aria-required": required || void 0,
            "aria-describedby": describedBy,
            disabled,
            onChange: onChange ? (e) => onChange(e.target.value, e) : void 0,
            ...rest,
          }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldMessages, {
        error,
        description,
        errorId,
        descriptionId: descId,
      }),
    ],
  });
});
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/icons/IconEyeHideSm.mjs
function IconEyeHideSm() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M8.09 17.33L19.71 5.71C20.1 5.32 20.1 4.69 19.71 4.3C19.32 3.91 18.69 3.91 18.3 4.3L16.42 6.18C15.01 5.51 13.54 5.16 12.01 5.16C6.45 5.15 2.91 9.52 2.07 11.63C1.97 11.88 1.98 12.17 2.09 12.42C2.66 13.66 3.95 15.43 5.8 16.78L4.29 18.29C3.9 18.68 3.9 19.31 4.29 19.7C4.49 19.9 4.74 19.99 5 19.99C5.26 19.99 5.51 19.89 5.71 19.7L8.08 17.33H8.09ZM4.11 11.99C4.98 10.38 7.8 7.16 12 7.16C12.99 7.16 13.96 7.35 14.89 7.7L7.23 15.36C5.75 14.35 4.68 13.03 4.11 11.99ZM21.91 12.42C20.88 14.64 17.49 18.85 12 18.85C11.52 18.85 11.04 18.82 10.57 18.75C10.02 18.67 9.64 18.17 9.72 17.62C9.8 17.07 10.29 16.69 10.85 16.77C11.23 16.82 11.62 16.85 12 16.85C16.26 16.85 18.95 13.64 19.89 11.98C19.61 11.45 19.12 10.75 18.42 10.03C18.03 9.63 18.04 9 18.44 8.62C18.84 8.24 19.47 8.24 19.85 8.64C20.8 9.61 21.56 10.71 21.93 11.64C22.03 11.89 22.02 12.18 21.91 12.43V12.42Z",
      fill: "currentColor",
    }),
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/icons/IconEyeSm.mjs
function IconEyeSm() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M21.93 11.48C21.09 9.37 17.55 5 12 5C6.45 5 2.92 9.37 2.07 11.48C1.97 11.73 1.98 12.02 2.09 12.27C3.12 14.49 6.51 18.7 12 18.7C17.49 18.7 20.88 14.49 21.91 12.27C22.03 12.02 22.03 11.73 21.93 11.48ZM12 16.7C7.74 16.7 5.05 13.49 4.11 11.83C4.98 10.22 7.8 7 12 7C16.2 7 19.02 10.22 19.89 11.83C18.96 13.49 16.27 16.7 12 16.7Z",
        fill: "currentColor",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14Z",
        fill: "currentColor",
      }),
    ],
  });
}
//#endregion
//#region node_modules/.pnpm/@kristjanjansen+design-system@file+..+design-system_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/@kristjanjansen/design-system/dist/components/InputPassword/InputPassword2.mjs
var InputPassword = (0, import_react.forwardRef)(function InputPassword(
  {
    label,
    description,
    error,
    onChange,
    id,
    className,
    required,
    infoHint,
    suffix,
    inputStart,
    disabled,
    toggleLabel = "Toggle password visibility",
    ...rest
  },
  ref,
) {
  const autoId = (0, import_react.useId)();
  const inputId = id ?? autoId;
  const errorId = error ? `${inputId}-error` : void 0;
  const descId = description ? `${inputId}-desc` : void 0;
  const describedBy = [errorId, descId].filter(Boolean).join(" ") || void 0;
  const [visible, setVisible] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: ["ds-input-password", className].filter(Boolean).join(" "),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
        htmlFor: inputId,
        required,
        infoHint,
        suffix,
        disabled,
        children: label,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: ["input-wrapper", error ? "input-wrapper--error" : ""].filter(Boolean).join(" "),
        children: [
          inputStart &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "input-start",
              children: inputStart,
            }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            ref,
            id: inputId,
            type: visible ? "text" : "password",
            className: "input",
            "aria-invalid": error ? true : void 0,
            "aria-required": required || void 0,
            "aria-describedby": describedBy,
            required,
            disabled,
            onChange: onChange ? (e) => onChange(e.target.value, e) : void 0,
            ...rest,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "button",
            className: "toggle",
            onClick: () => setVisible(!visible),
            "aria-label": toggleLabel,
            "aria-pressed": visible,
            disabled,
            tabIndex: -1,
            children: visible
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconEyeHideSm, {})
              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconEyeSm, {}),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldMessages, {
        error,
        description,
        errorId,
        descriptionId: descId,
      }),
    ],
  });
});
//#endregion
export { Accordion, AccordionGroup, Button, Checkbox, Input, InputPassword, Switch, Textarea };

//# sourceMappingURL=@kristjanjansen_design-system.js.map
