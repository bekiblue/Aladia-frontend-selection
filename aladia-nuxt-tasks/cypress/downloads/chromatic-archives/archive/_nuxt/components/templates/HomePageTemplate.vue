import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/HomePageTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import Button from "/_nuxt/components/atoms/Button.vue";
import { useAppState } from "/_nuxt/store/store.ts";


const _sfc_main = {
  __name: 'HomePageTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

const appState = useAppState();

const handleClick = () => {
  appState.setLoading(true);
  setTimeout(() => {
    appState.setLoading(false);
    appState.logout();
  }, 1000);
};

const __returned__ = { appState, handleClick, Button, get useAppState() { return useAppState } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  class: "flex items-center justify-center min-h-screen bg-black",
  "data-cy": "welcome-page",
  "data-v-inspector": "components/templates/HomePageTemplate.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    _createElementVNode("div", {
      class: "w-[23vw] p-8 flex-col items-center justify-center rounded border border-white/20 bg-black rounded shadow-lg",
      "data-v-inspector": "components/templates/HomePageTemplate.vue:5:5"
    }, [
      _createElementVNode("h1", {
        class: "text-white text-4xl text-center",
        "data-cy": "welcome-message",
        "data-v-inspector": "components/templates/HomePageTemplate.vue:6:7"
      }, " Successfully registered !!! ")
    ], -1 /* HOISTED */)
  ])))
}


_sfc_main.__hmrId = "50fe9798"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/templates/HomePageTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hEOzs7Ozs7QUFIYztBQUlkLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDL0I7QUFDQSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0VBdEJELEtBQUssRUFBQyx3REFBeUQ7RUFBSSxTQUFPLEVBQUMsY0FBYztFQUFDLGtCQUFnQixFQUFDLCtDQUErQzs7Ozt3QkFEekosb0JBUU0sT0FSTixVQVFNO0lBTEosb0JBSU07TUFKRCxLQUFLLEVBQUMsNkdBQThHO01BQUMsa0JBQWdCLEVBQUMsK0NBQStDOztNQUN4TCxvQkFFSztRQUZELEtBQUssRUFBQyxpQ0FBa0M7UUFBQyxTQUFPLEVBQUMsaUJBQWlCO1FBQUMsa0JBQWdCLEVBQUMsK0NBQStDO1NBQUMsK0JBRXhJIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIb21lUGFnZVRlbXBsYXRlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ibGFjayBcIiAgICBkYXRhLWN5PVwid2VsY29tZS1wYWdlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0hvbWVQYWdlVGVtcGxhdGUudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwidy1bMjN2d10gcC04IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJvcmRlciAgYm9yZGVyLXdoaXRlLzIwIGJnLWJsYWNrIHJvdW5kZWQgc2hhZG93LWxnXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0hvbWVQYWdlVGVtcGxhdGUudnVlOjU6NVwiPlxuICAgICAgPGgxIGNsYXNzPVwiIHRleHQtd2hpdGUgdGV4dC00eGwgdGV4dC1jZW50ZXJcIiBkYXRhLWN5PVwid2VsY29tZS1tZXNzYWdlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0hvbWVQYWdlVGVtcGxhdGUudnVlOjY6N1wiPlxuICAgICAgICBTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCAhISFcbiAgICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2F0b21zL0J1dHRvbi52dWVcIjtcbmltcG9ydCB7IHVzZUFwcFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b3JlXCI7XG5cbmNvbnN0IGFwcFN0YXRlID0gdXNlQXBwU3RhdGUoKTtcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gIGFwcFN0YXRlLnNldExvYWRpbmcodHJ1ZSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGFwcFN0YXRlLnNldExvYWRpbmcoZmFsc2UpO1xuICAgIGFwcFN0YXRlLmxvZ291dCgpO1xuICB9LCAxMDAwKTtcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmVyZWtldC9EZXNrdG9wL3N1Ym1pc3Npb24vQWxhZGlhLWZyb250ZW5kLXNlbGVjdGlvbi9hbGFkaWEtbnV4dC10YXNrcy9jb21wb25lbnRzL3RlbXBsYXRlcy9Ib21lUGFnZVRlbXBsYXRlLnZ1ZSJ9