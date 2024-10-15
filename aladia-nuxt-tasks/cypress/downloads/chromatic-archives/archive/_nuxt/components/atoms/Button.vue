import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/Button.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { defineComponent as _defineComponent } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "Button",
  props: {
    label: { type: String, default: "Button" },
    isLoading: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    onClick: { type: Function, default: () => {
    } }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const props = __props;
    const handleClick = () => {
      if (!props.isDisabled && !props.isLoading) {
        props.onClick();
      }
    };
    const __returned__ = { emit, props, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import {  openBlock as _openBlock,  toDisplayString as _toDisplayString, normalizeClass as _normalizeClass } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded";
const _hoisted_1 = {
  key: 0,
  class: "fas fa-spinner animate-spin text-xs text-white/70",
  "data-cy": "loading-spinner",
  "data-v-inspector": "components/atoms/Button.vue:16:5"
};
const _hoisted_2 = {
  key: 1,
  class: "text-white",
  "data-cy": "button-label",
  "data-v-inspector": "components/atoms/Button.vue:22:5"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "div",
    {
      onClick: $setup.handleClick,
      class: _normalizeClass([
        "relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border text-center text-sm transition-all mb-6",
        $props.isDisabled ? "cursor-default bg-black border-white/0" : "bg-black cursor-pointer hover:border-white/40 active:scale-95 border-white/0 text-white"
      ]),
      "data-cy": "button",
      "data-v-inspector": "components/atoms/Button.vue:2:3"
    },
    [
      _cache[0] || (_cache[0] = _createElementVNode(
        "div",
        {
          class: "absolute inset-0 gradient opacity-50",
          "data-cy": "btn",
          "data-v-inspector": "components/atoms/Button.vue:12:5"
        },
        null,
        -1
        /* HOISTED */
      )),
      $props.isLoading ? (_openBlock(), _createElementBlock("i", _hoisted_1)) : (_openBlock(), _createElementBlock(
        "div",
        _hoisted_2,
        _toDisplayString($props.label),
        1
        /* TEXT */
      ))
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__hmrId = "ccb798b3";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.accept((mod) => {
  if (!mod) return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/atoms/Button.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkEsVUFBTSxPQUFPO0FBR2IsVUFBTSxRQUFRO0FBT2QsVUFBTSxjQUFjLE1BQU07QUFDeEIsVUFBSSxDQUFDLE1BQU0sY0FBYyxDQUFDLE1BQU0sV0FBVztBQUN6QyxjQUFNLFFBQVE7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7Ozs7Ozs7O0VBeENBO0FBQUEsRUFpQk0sT0FBTTtBQUFBLEVBQ04sV0FBUTtBQUFBLEVBQWtCLG9CQUFpQjs7O0VBbEJqRDtBQUFBLEVBcUJnQixPQUFNO0FBQUEsRUFBYSxXQUFRO0FBQUEsRUFBZSxvQkFBaUI7Ozt1QkFwQnpFO0FBQUEsSUFxQk07QUFBQTtBQUFBLE1BcEJILFNBQU87QUFBQSxNQUNQLE9BSEw7QUFBQTtRQUc2Sjs7TUFNekosV0FBUTtBQUFBLE1BQVMsb0JBQWlCO0FBQUE7O2dDQUVsQztBQUFBLFFBQTBIO0FBQUE7QUFBQSxVQUFySCxPQUFNO0FBQUEsVUFBdUMsV0FBUTtBQUFBLFVBQU0sb0JBQWlCO0FBQUE7Ozs7O01BS3pFLGtDQURSLG9CQUlLLEtBSkwsVUFJSyxvQkFFTDtBQUFBLFFBQTJIO0FBQUEsUUFBM0g7QUFBQSxRQUEySCxpQkFBZCxZQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkJ1dHRvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIlxuICAgIDpjbGFzcz1cIltcbiAgICAgICdyZWxhdGl2ZSBmbGV4IGgtMTAgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgdGV4dC1jZW50ZXIgdGV4dC1zbSB0cmFuc2l0aW9uLWFsbCBtYi02JyxcbiAgICAgIGlzRGlzYWJsZWRcbiAgICAgICAgPyAnY3Vyc29yLWRlZmF1bHQgYmctYmxhY2sgYm9yZGVyLXdoaXRlLzAnXG4gICAgICAgIDogJ2JnLWJsYWNrIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci13aGl0ZS80MCBhY3RpdmU6c2NhbGUtOTUgYm9yZGVyLXdoaXRlLzAgdGV4dC13aGl0ZScsXG4gICAgXVwiXG4gICAgZGF0YS1jeT1cImJ1dHRvblwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0J1dHRvbi52dWU6MjozXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIGdyYWRpZW50IG9wYWNpdHktNTBcIiBkYXRhLWN5PVwiYnRuXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvQnV0dG9uLnZ1ZToxMjo1XCI+PC9kaXY+XG5cblxuXG4gICAgPGlcbiAgICAgIHYtaWY9XCJpc0xvYWRpbmdcIlxuICAgICAgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBhbmltYXRlLXNwaW4gdGV4dC14cyB0ZXh0LXdoaXRlLzcwXCJcbiAgICAgIGRhdGEtY3k9XCJsb2FkaW5nLXNwaW5uZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9CdXR0b24udnVlOjE2OjVcIlxuICAgID48L2k+XG5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInRleHQtd2hpdGVcIiBkYXRhLWN5PVwiYnV0dG9uLWxhYmVsXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvQnV0dG9uLnZ1ZToyMjo1XCI+e3sgbGFiZWwgfX08L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFtcImNsaWNrXCJdKTtcblxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgbGFiZWw6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIkJ1dHRvblwiIH0sXG4gIGlzTG9hZGluZzogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICBpc0Rpc2FibGVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gIG9uQ2xpY2s6IHsgdHlwZTogRnVuY3Rpb24sIGRlZmF1bHQ6ICgpID0+IHt9IH0sXG59KTtcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gIGlmICghcHJvcHMuaXNEaXNhYmxlZCAmJiAhcHJvcHMuaXNMb2FkaW5nKSB7XG4gICAgcHJvcHMub25DbGljaygpO1xuICB9XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2JlcmVrZXQvRGVza3RvcC9zdWJtaXNzaW9uL0FsYWRpYS1mcm9udGVuZC1zZWxlY3Rpb24vYWxhZGlhLW51eHQtdGFza3MvY29tcG9uZW50cy9hdG9tcy9CdXR0b24udnVlIn0=