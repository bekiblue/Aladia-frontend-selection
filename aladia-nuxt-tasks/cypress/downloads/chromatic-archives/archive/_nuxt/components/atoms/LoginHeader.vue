import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/LoginHeader.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  __name: 'LoginHeader',
  props: {
  title: { type: String, default: "Password Recovery" },
  backIcon: { type: String, default: "fa-arrow-left" },
  hoverText: { type: String, default: "Back to Log in" },
  showBackIcon: { type: Boolean, default: true },
  onClickHandler: { type: Function, default: () => {} },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { toDisplayString as _toDisplayString,  normalizeClass as _normalizeClass, openBlock as _openBlock,  createCommentVNode as _createCommentVNode } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  class: "group-hover:hidden",
  "data-cy": "header-title",
  "data-v-inspector": "components/atoms/LoginHeader.vue:7:5"
}
const _hoisted_2 = {
  class: "hidden text-white/50 group-hover:flex",
  "data-cy": "hover-text",
  "data-v-inspector": "components/atoms/LoginHeader.vue:8:5"
}
const _hoisted_3 = {
  class: "absolute left-0",
  "data-v-inspector": "components/atoms/LoginHeader.vue:11:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => ($props.onClickHandler && $props.onClickHandler(...args))),
    class: "group relative mb-6 flex cursor-pointer justify-center font-semibold",
    "data-cy": "login-header",
    "data-v-inspector": "components/atoms/LoginHeader.vue:2:3"
  }, [
    _createElementVNode("div", _hoisted_1, _toDisplayString($props.title), 1 /* TEXT */),
    _createElementVNode("div", _hoisted_2, _toDisplayString($props.hoverText), 1 /* TEXT */),
    _createElementVNode("div", _hoisted_3, [
      ($props.showBackIcon)
        ? (_openBlock(), _createElementBlock("i", {
            key: 0,
            class: _normalizeClass([
          'fas',
          $props.backIcon,
          'text-base text-white/50 transition-all group-hover:text-white',
        ]),
            "data-cy": "back-icon",
            "data-v-inspector": "components/atoms/LoginHeader.vue:13:7"
          }, null, 2 /* CLASS */))
        : _createCommentVNode("v-if", true)
    ])
  ]))
}


_sfc_main.__hmrId = "1eb8de5b"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/atoms/LoginHeader.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCYztBQUNkLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BTVosQ0FBQzs7Ozs7Ozs7Ozs7RUExQk0sS0FBSyxFQUFDLG9CQUFvQjtFQUFDLFNBQU8sRUFBQyxjQUFjO0VBQUMsa0JBQWdCLEVBQUMsc0NBQXNDOzs7RUFDekcsS0FBSyxFQUFDLHVDQUF1QztFQUFDLFNBQU8sRUFBQyxZQUFZO0VBQUMsa0JBQWdCLEVBQUMsc0NBQXNDOzs7RUFHMUgsS0FBSyxFQUFDLGlCQUFpQjtFQUFDLGtCQUFnQixFQUFDLHVDQUF1Qzs7Ozt3QkFUdkYsb0JBcUJNO0lBcEJILE9BQUssMENBQUUsdURBQWM7SUFDdEIsS0FBSyxFQUFDLHNFQUFzRTtJQUM1RSxTQUFPLEVBQUMsY0FBYztJQUFDLGtCQUFnQixFQUFDLHNDQUFzQzs7SUFFOUUsb0JBQWdJLE9BQWhJLFVBQWdJLG1CQUFkLFlBQUs7SUFDdkgsb0JBRU0sT0FGTixVQUVNLG1CQURELGdCQUFTO0lBRWQsb0JBV00sT0FYTixVQVdNO09BSEksbUJBQVk7eUJBTnBCLG9CQVFLO1lBcEJYO1lBYVMsS0FBSyxFQWJkOztVQWE2QyxlQUFROzs7WUFNN0MsU0FBTyxFQUFDLFdBQVc7WUFBQyxrQkFBZ0IsRUFBQyx1Q0FBdUM7O1VBbkJwRiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTG9naW5IZWFkZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIEBjbGljaz1cIm9uQ2xpY2tIYW5kbGVyXCJcbiAgICBjbGFzcz1cImdyb3VwIHJlbGF0aXZlIG1iLTYgZmxleCBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LXNlbWlib2xkXCJcbiAgICBkYXRhLWN5PVwibG9naW4taGVhZGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvTG9naW5IZWFkZXIudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtaG92ZXI6aGlkZGVuXCIgZGF0YS1jeT1cImhlYWRlci10aXRsZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0xvZ2luSGVhZGVyLnZ1ZTo3OjVcIj57eyB0aXRsZSB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gdGV4dC13aGl0ZS81MCBncm91cC1ob3ZlcjpmbGV4XCIgZGF0YS1jeT1cImhvdmVyLXRleHRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9Mb2dpbkhlYWRlci52dWU6ODo1XCI+XG4gICAgICB7eyBob3ZlclRleHQgfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgbGVmdC0wXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvTG9naW5IZWFkZXIudnVlOjExOjVcIj5cblxuICAgICAgPGlcbiAgICAgICAgOmNsYXNzPVwiW1xuICAgICAgICAgICdmYXMnLFxuICAgICAgICAgIGJhY2tJY29uLFxuICAgICAgICAgICd0ZXh0LWJhc2UgdGV4dC13aGl0ZS81MCB0cmFuc2l0aW9uLWFsbCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlJyxcbiAgICAgICAgXVwiXG4gICAgICAgIHYtaWY9XCJzaG93QmFja0ljb25cIlxuICAgICAgICBkYXRhLWN5PVwiYmFjay1pY29uXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvTG9naW5IZWFkZXIudnVlOjEzOjdcIlxuICAgICAgPjwvaT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJQYXNzd29yZCBSZWNvdmVyeVwiIH0sXG4gIGJhY2tJY29uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJmYS1hcnJvdy1sZWZ0XCIgfSxcbiAgaG92ZXJUZXh0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJCYWNrIHRvIExvZyBpblwiIH0sXG4gIHNob3dCYWNrSWNvbjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gIG9uQ2xpY2tIYW5kbGVyOiB7IHR5cGU6IEZ1bmN0aW9uLCBkZWZhdWx0OiAoKSA9PiB7fSB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmVyZWtldC9EZXNrdG9wL3N1Ym1pc3Npb24vQWxhZGlhLWZyb250ZW5kLXNlbGVjdGlvbi9hbGFkaWEtbnV4dC10YXNrcy9jb21wb25lbnRzL2F0b21zL0xvZ2luSGVhZGVyLnZ1ZSJ9