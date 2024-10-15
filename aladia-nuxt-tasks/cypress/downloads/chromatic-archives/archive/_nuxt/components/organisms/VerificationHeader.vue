import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/VerificationHeader.vue");/* Injection by vite-plugin-vue-inspector Start */
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



const _sfc_main = {
  props :{
  },
}

import {  toDisplayString as _toDisplayString, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
import _imports_0 from "/_nuxt/assets/img/aladia.png?import"


const _hoisted_1 = {
  class: "flex flex-col items-center",
  "data-cy": "verification-header",
  "data-v-inspector": "components/organisms/VerificationHeader.vue:2:3"
}
const _hoisted_2 = {
  class: "mb-4 text-lg font-semibold",
  "data-v-inspector": "components/organisms/VerificationHeader.vue:7:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = _createElementVNode("img", {
      src: _imports_0,
      class: "mb-2 h-24 w-24 rounded object-cover",
      "data-v-inspector": "components/organisms/VerificationHeader.vue:3:5"
    }, null, -1 /* HOISTED */)),
    _createElementVNode("div", _hoisted_2, _toDisplayString(_ctx.userName), 1 /* TEXT */),
    _cache[1] || (_cache[1] = _createElementVNode("div", {
      class: "mb-8 text-white/70",
      "data-v-inspector": "components/organisms/VerificationHeader.vue:8:7"
    }, "Thanks for joining Aladia.", -1 /* HOISTED */))
  ]))
}


_sfc_main.__hmrId = "9f6ee835"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/organisms/VerificationHeader.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLEtBQUssVUFBVTtFQUNiLEtBQUksQ0FBRSxDQUFDO0VBQ1AsQ0FBQztBQUNIOzs7T0FkUSxVQUE0Qjs7OztFQUY1QixLQUFLLEVBQUMsNEJBQThCO0VBQUMsU0FBTyxFQUFDLHFCQUFxQjtFQUFDLGtCQUFnQixFQUFDLGlEQUFpRDs7O0VBS2xJLEtBQUssRUFBQyw0QkFBNEI7RUFBQyxrQkFBZ0IsRUFBQyxpREFBaUQ7Ozs7d0JBTDlHLG9CQU9NLE9BUE4sVUFPTTs4QkFOSixvQkFHSTtNQUZBLEdBQTRCLEVBQTVCLFVBQTRCO01BQzVCLEtBQUssRUFBQyxxQ0FBcUM7TUFBQyxrQkFBZ0IsRUFBQyxpREFBaUQ7O0lBRWhILG9CQUErSCxPQUEvSCxVQUErSCxtQkFBakIsYUFBUTs4QkFDdEgsb0JBQW1JO01BQTlILEtBQUssRUFBQyxvQkFBb0I7TUFBQyxrQkFBZ0IsRUFBQyxpREFBaUQ7T0FBQyw0QkFBMEIiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlZlcmlmaWNhdGlvbkhlYWRlci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2ICBjbGFzcz1cIiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBcIiBkYXRhLWN5PVwidmVyaWZpY2F0aW9uLWhlYWRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9WZXJpZmljYXRpb25IZWFkZXIudnVlOjI6M1wiPlxuICAgIDxpbWdcbiAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvYWxhZGlhLnBuZ1wiXG4gICAgICAgIGNsYXNzPVwibWItMiBoLTI0IHctMjQgcm91bmRlZCBvYmplY3QtY292ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvVmVyaWZpY2F0aW9uSGVhZGVyLnZ1ZTozOjVcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYi00IHRleHQtbGcgZm9udC1zZW1pYm9sZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9WZXJpZmljYXRpb25IZWFkZXIudnVlOjc6N1wiPnt7IHVzZXJOYW1lIH19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWItOCB0ZXh0LXdoaXRlLzcwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL1ZlcmlmaWNhdGlvbkhlYWRlci52dWU6ODo3XCI+VGhhbmtzIGZvciBqb2luaW5nIEFsYWRpYS48L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHMgOntcbiAgfSxcbn1cbjwvc2NyaXB0PiJdLCJmaWxlIjoiL2hvbWUvYmVyZWtldC9EZXNrdG9wL3N1Ym1pc3Npb24vQWxhZGlhLWZyb250ZW5kLXNlbGVjdGlvbi9hbGFkaWEtbnV4dC10YXNrcy9jb21wb25lbnRzL29yZ2FuaXNtcy9WZXJpZmljYXRpb25IZWFkZXIudnVlIn0=