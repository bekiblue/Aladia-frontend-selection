import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/IconButton.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { useAppState } from "/_nuxt/store/store.ts";


const _sfc_main = {
  __name: 'IconButton',
  props: {
  imageSrc: { type: String, required: true },
  label: { type: String, required: true },
  loginAction: { type: Function, default: () => {} },
},
  setup(__props, { expose: __expose }) {
  __expose();


const appState = useAppState();
const handleClick = () => {
  console.log("clicked");
  props.loginAction();
};

const props = __props;

const __returned__ = { appState, handleClick, props, get useAppState() { return useAppState } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  class: "flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95",
  "data-v-inspector": "components/atoms/IconButton.vue:2:3"
}
const _hoisted_2 = ["src", "alt"]
const _hoisted_3 = {
  key: 0,
  class: "fas fa-spinner animate-spin text-xs text-white/70",
  "data-cy": "loading-spinner",
  "data-v-inspector": "components/atoms/IconButton.vue:7:5"
}
const _hoisted_4 = {
  key: 1,
  class: "w-45 text-base text-[13px]",
  "data-v-inspector": "components/atoms/IconButton.vue:12:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("button", _hoisted_1, [
    _createElementVNode("img", {
      src: $props.imageSrc,
      alt: `${$props.label} icon`,
      class: "h-6 w-10",
      "data-v-inspector": "components/atoms/IconButton.vue:6:5"
    }, null, 8 /* PROPS */, _hoisted_2),
    ($setup.appState.googleSignInLoading && $props.label === 'Continue with Google')
      ? (_openBlock(), _createElementBlock("i", _hoisted_3))
      : (_openBlock(), _createElementBlock("div", _hoisted_4, _toDisplayString($props.label), 1 /* TEXT */))
  ]))
}


_sfc_main.__hmrId = "2a5f5920"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/atoms/IconButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hEOzs7Ozs7Ozs7OztBQUhjO0FBQ2Q7QUFHQSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQy9CLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFDRjtBQUNBLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BSVosQ0FBQzs7Ozs7Ozs7Ozs7RUExQkMsS0FBSyxFQUFDLGdOQUFnTjtFQUFDLGtCQUFnQixFQUFDLHFDQUFxQzs7bUJBSGpSOztFQUFBO0VBUU0sS0FBSyxFQUFDLG1EQUFtRDtFQUN6RCxTQUFPLEVBQUMsaUJBQWlCO0VBQUMsa0JBQWdCLEVBQUMscUNBQXFDOzs7RUFUdEY7RUFXZ0IsS0FBSyxFQUFDLDRCQUE0QjtFQUFDLGtCQUFnQixFQUFDLHNDQUFzQzs7Ozt3QkFWeEcsb0JBV1MsVUFYVCxVQVdTO0lBUFAsb0JBQXNIO01BQWhILEdBQUcsRUFBRSxlQUFRO01BQUcsR0FBRyxLQUFLLFlBQUs7TUFBUyxLQUFLLEVBQUMsVUFBVTtNQUFDLGtCQUFnQixFQUFDLHFDQUFxQzs0QkFMdkg7S0FPWSxlQUFRLENBQUMsbUJBQW1CLElBQUksWUFBSzt1QkFEN0Msb0JBSUssS0FKTCxVQUlLO3VCQUNMLG9CQUF3SCxPQUF4SCxVQUF3SCxtQkFBZCxZQUFLIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJJY29uQnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxidXR0b25cbiAgICBcbiAgICBjbGFzcz1cImZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHJvdW5kZWQgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBweS0xLjUgc2hhZG93LVswcHhfM3B4XzZweF8jMDAwMDAwMDBdIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLXdoaXRlLzIwIGhvdmVyOnNoYWRvdy1bMHB4XzNweF82cHhfIzAwMDAwMF0gYWN0aXZlOnNjYWxlLTk1XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvSWNvbkJ1dHRvbi52dWU6MjozXCJcbiAgPlxuICAgIDxpbWcgOnNyYz1cImltYWdlU3JjXCIgOmFsdD1cImAke2xhYmVsfSBpY29uYFwiIGNsYXNzPVwiaC02IHctMTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9JY29uQnV0dG9uLnZ1ZTo2OjVcIiAvPlxuICAgIDxpXG4gICAgICB2LWlmPVwiYXBwU3RhdGUuZ29vZ2xlU2lnbkluTG9hZGluZyAmJiBsYWJlbCA9PT0gJ0NvbnRpbnVlIHdpdGggR29vZ2xlJ1wiXG4gICAgICBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGFuaW1hdGUtc3BpbiB0ZXh0LXhzIHRleHQtd2hpdGUvNzBcIlxuICAgICAgZGF0YS1jeT1cImxvYWRpbmctc3Bpbm5lclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0ljb25CdXR0b24udnVlOjc6NVwiXG4gICAgPjwvaT5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInctNDUgdGV4dC1iYXNlIHRleHQtWzEzcHhdXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvSWNvbkJ1dHRvbi52dWU6MTI6NVwiPnt7IGxhYmVsIH19PC9kaXY+XG4gIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cblxuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XG5cbmNvbnN0IGFwcFN0YXRlID0gdXNlQXBwU3RhdGUoKTtcbmNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gIHByb3BzLmxvZ2luQWN0aW9uKCk7XG59O1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgaW1hZ2VTcmM6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBsYWJlbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGxvZ2luQWN0aW9uOiB7IHR5cGU6IEZ1bmN0aW9uLCBkZWZhdWx0OiAoKSA9PiB7fSB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmVyZWtldC9EZXNrdG9wL3N1Ym1pc3Npb24vQWxhZGlhLWZyb250ZW5kLXNlbGVjdGlvbi9hbGFkaWEtbnV4dC10YXNrcy9jb21wb25lbnRzL2F0b21zL0ljb25CdXR0b24udnVlIn0=