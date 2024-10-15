import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/TermsAndCondition.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  __name: 'TermsAndCondition',
  props: {
    ticked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:ticked'],
  setup(__props, { expose: __expose, emit: __emit }) {
  __expose();

  
  const props = __props;
  
  const emit = __emit;
  
  const toggleTicked = () => {
    emit('update:ticked', !props.ticked);
  };
  
const __returned__ = { props, emit, toggleTicked }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { vShow as _vShow,  withDirectives as _withDirectives, normalizeClass as _normalizeClass, createTextVNode as _createTextVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  class: "mb-4 flex items-center gap-2",
  "data-v-inspector": "components/atoms/TermsAndCondition.vue:2:5"
}
const _hoisted_2 = {
  class: "fa-solid fa-check tex-sm text-white",
  "data-v-inspector": "components/atoms/TermsAndCondition.vue:8:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", {
      class: _normalizeClass(["flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white", { 'border-white': $props.ticked }]),
      onClick: $setup.toggleTicked,
      "data-v-inspector": "components/atoms/TermsAndCondition.vue:3:7"
    }, [
      _withDirectives(_createElementVNode("i", _hoisted_2, null, 512 /* NEED_PATCH */), [
        [_vShow, $props.ticked]
      ])
    ], 2 /* CLASS */),
    _cache[0] || (_cache[0] = _createElementVNode("div", {
      class: "text-xs text-white/70",
      "data-v-inspector": "components/atoms/TermsAndCondition.vue:13:7"
    }, [
      _createTextVNode(" I accept "),
      _createElementVNode("span", {
        class: "text-white",
        "data-v-inspector": "components/atoms/TermsAndCondition.vue:15:9"
      }, " Terms & Conditions "),
      _createTextVNode(" and "),
      _createElementVNode("span", {
        class: "text-white",
        "data-v-inspector": "components/atoms/TermsAndCondition.vue:17:9"
      }, " Privacy Policy ")
    ], -1 /* HOISTED */))
  ]))
}


_sfc_main.__hmrId = "c24e9960"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/atoms/TermsAndCondition.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCZ0I7QUFDaEIsQ0FBQyxDQUFDO0FBQ0YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BS1osQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUE4QixDQUFDO0FBQzlDLENBQUMsQ0FBQztBQUNGLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7RUFsQ1EsS0FBSyxFQUFDLDhCQUE4QjtFQUFDLGtCQUFnQixFQUFDLDRDQUE0Qzs7O0VBT2pHLEtBQUssRUFBQyxxQ0FBcUM7RUFDM0Isa0JBQWdCLEVBQUMsNENBQTRDOzs7O3dCQVJuRixvQkFpQk0sT0FqQk4sVUFpQk07SUFoQkosb0JBU007TUFSSixLQUFLLEVBSGIsaUJBR2MsaUlBQWlJLG9CQUU3RyxhQUFNO01BRC9CLE9BQUssRUFBRSxtQkFBWTtNQUNnQixrQkFBZ0IsRUFBQyw0Q0FBNEM7O3NCQUVqRyxvQkFHSyxLQUhMLFVBR0s7aUJBREssYUFBTTs7OzhCQUdsQixvQkFLTTtNQUxELEtBQUssRUFBQyx1QkFBdUI7TUFBQyxrQkFBZ0IsRUFBQyw2Q0FBNkM7O01BWnZHLGlCQVl3RyxZQUVoRztNQUFBLG9CQUF3SDtRQUFsSCxLQUFLLEVBQUMsWUFBYTtRQUFDLGtCQUFnQixFQUFDLDZDQUE2QztTQUFDLHNCQUF3QjtNQWR6SCxpQkFjZ0ksT0FFeEg7TUFBQSxvQkFBZ0g7UUFBMUcsS0FBSyxFQUFDLFlBQWE7UUFBQyxrQkFBZ0IsRUFBQyw2Q0FBNkM7U0FBQyxrQkFBZ0IiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlRlcm1zQW5kQ29uZGl0aW9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9UZXJtc0FuZENvbmRpdGlvbi52dWU6Mjo1XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZmxleCBoLTQgdy00IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJvcmRlciBwdC0wLjUgdHJhbnNpdGlvbi1hbGwgYm9yZGVyLXdoaXRlLzUwIGhvdmVyOmJvcmRlci13aGl0ZVwiXG4gICAgICAgIEBjbGljaz1cInRvZ2dsZVRpY2tlZFwiXG4gICAgICAgIDpjbGFzcz1cInsgJ2JvcmRlci13aGl0ZSc6IHRpY2tlZCB9XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvVGVybXNBbmRDb25kaXRpb24udnVlOjM6N1wiXG4gICAgICA+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVjayB0ZXgtc20gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgdi1zaG93PVwidGlja2VkXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvVGVybXNBbmRDb25kaXRpb24udnVlOjg6OVwiXG4gICAgICAgID48L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtd2hpdGUvNzBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9UZXJtc0FuZENvbmRpdGlvbi52dWU6MTM6N1wiPlxuICAgICAgICBJIGFjY2VwdFxuICAgICAgICA8c3BhbiBjbGFzcz1cIiB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvVGVybXNBbmRDb25kaXRpb24udnVlOjE1OjlcIj4gVGVybXMgJmFtcDsgQ29uZGl0aW9ucyA8L3NwYW4+XG4gICAgICAgIGFuZFxuICAgICAgICA8c3BhbiBjbGFzcz1cIiB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvVGVybXNBbmRDb25kaXRpb24udnVlOjE3OjlcIj4gUHJpdmFjeSBQb2xpY3kgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG4gIFxuICA8c2NyaXB0IHNldHVwPlxuICBcbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgdGlja2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSk7XG4gIFxuICBjb25zdCBlbWl0ID0gZGVmaW5lRW1pdHMoWyd1cGRhdGU6dGlja2VkJ10pO1xuICBcbiAgY29uc3QgdG9nZ2xlVGlja2VkID0gKCkgPT4ge1xuICAgIGVtaXQoJ3VwZGF0ZTp0aWNrZWQnLCAhcHJvcHMudGlja2VkKTtcbiAgfTtcbiAgPC9zY3JpcHQ+XG4gICJdLCJmaWxlIjoiL2hvbWUvYmVyZWtldC9EZXNrdG9wL3N1Ym1pc3Npb24vQWxhZGlhLWZyb250ZW5kLXNlbGVjdGlvbi9hbGFkaWEtbnV4dC10YXNrcy9jb21wb25lbnRzL2F0b21zL1Rlcm1zQW5kQ29uZGl0aW9uLnZ1ZSJ9