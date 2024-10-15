import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/TextLink.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
  __name: 'TextLink',
  props: {
  text: { type: String, default: "You didn't receive any mail?" },
  isUnderlined: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    class: _normalizeClass([
      'cursor-pointer text-white/50 hover:text-white',
      { underline: $props.isUnderlined },
      { 'text-red-500': $props.error },
    ]),
    "data-v-inspector": "components/atoms/TextLink.vue:2:3"
  }, _toDisplayString($props.text), 3 /* TEXT, CLASS */))
}


_sfc_main.__hmrId = "f6e621f7"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/atoms/TextLink.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVljO0FBQ2QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FJWixDQUFDOzs7Ozs7Ozs7Ozt3QkFoQkQsb0JBUU07SUFQSCxLQUFLLEVBRlY7O21CQUV3RixtQkFBWTt3QkFBNEIsWUFBSzs7SUFJOUgsa0JBQWdCLEVBQUMsbUNBQW1DO3NCQUVwRCxXQUFJIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJUZXh0TGluay52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiW1xuICAgICAgJ2N1cnNvci1wb2ludGVyIHRleHQtd2hpdGUvNTAgaG92ZXI6dGV4dC13aGl0ZScsXG4gICAgICB7IHVuZGVybGluZTogaXNVbmRlcmxpbmVkIH0sXG4gICAgICB7ICd0ZXh0LXJlZC01MDAnOiBlcnJvciB9LFxuICAgIF1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9UZXh0TGluay52dWU6MjozXCJcbiAgPlxuICAgIHt7IHRleHQgfX1cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIHRleHQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIllvdSBkaWRuJ3QgcmVjZWl2ZSBhbnkgbWFpbD9cIiB9LFxuICBpc1VuZGVybGluZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgZXJyb3I6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbn0pO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2JlcmVrZXQvRGVza3RvcC9zdWJtaXNzaW9uL0FsYWRpYS1mcm9udGVuZC1zZWxlY3Rpb24vYWxhZGlhLW51eHQtdGFza3MvY29tcG9uZW50cy9hdG9tcy9UZXh0TGluay52dWUifQ==