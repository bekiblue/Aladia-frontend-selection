import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/InputField.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock,createVNode as __createVNode,createElementVNode as __createElementVNode } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import InputIcon from "/_nuxt/components/atoms/InputIcon.vue";

// Define props

const _sfc_main = {
  __name: 'InputField',
  props: {
  type: { type: String, default: 'text' }, 
  placeholder: { type: String, default: '' },
  icon: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  maxlength: { type: Number, default: 100 },
  customStyle: { type: String, default: 'bg-white' }, 
  error: { type: String, default: '' },
  inputValue: { type: String, default: '' },  
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props, InputIcon }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { openBlock as _openBlock,  createCommentVNode as _createCommentVNode,   toDisplayString as _toDisplayString, normalizeClass as _normalizeClass } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  key: 0,
  class: "pointer-events-none absolute inset-0 rounded border border-[#E54E4E]",
  "data-cy": "input-error-border",
  "data-v-inspector": "components/molecules/InputField.vue:12:5"
}
const _hoisted_2 = ["maxlength", "type", "placeholder", "disabled", "value"]
const _hoisted_3 = {
  key: 1,
  class: "absolute -bottom-5 left-0 text-xs text-[#E54E4E]",
  "data-cy": "input-error-message",
  "data-v-inspector": "components/molecules/InputField.vue:28:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    class: _normalizeClass([
      'relative mb-3 flex h-10 w-full rounded transition-all bg-white',
      $setup.props.customStyle, 
      { 'bg-[#F5DFDF]': $props.error }, 
      { 'border border-[#E54E4E]': $props.error }, 
      { 'cursor-not-allowed': $props.disabled }
    ]),
    "data-cy": "input-container",
    "data-v-inspector": "components/molecules/InputField.vue:2:3"
  }, [
    ($props.error)
      ? (_openBlock(), _createElementBlock("div", _hoisted_1))
      : _createCommentVNode("v-if", true),
    _createVNode($setup["InputIcon"], {
      icon: $props.icon,
      "data-cy": "input-icon"
    }, null, 8 /* PROPS */, ["icon"]),
    _createElementVNode("input", {
      maxlength: $props.maxlength,
      type: $props.type,
      placeholder: $props.placeholder,
      disabled: $props.disabled,
      class: "h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all",
      autocomplete: "off",
      value: $props.inputValue,
      onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:inputValue', $event.target.value))),
      "data-cy": "input-field",
      "data-v-inspector": "components/molecules/InputField.vue:16:5"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2),
    ($props.error)
      ? (_openBlock(), _createElementBlock("div", _hoisted_3, _toDisplayString($props.error), 1 /* TEXT */))
      : _createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}


_sfc_main.__hmrId = "c82fbe20"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/molecules/InputField.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFrQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9DO0FBQ0EsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIRDtBQUlkLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BU1osQ0FBQzs7Ozs7Ozs7Ozs7RUE5Q0g7RUFXc0IsS0FBSyxFQUFDLHNFQUFzRTtFQUFDLFNBQU8sRUFBQyxvQkFBb0I7RUFBQyxrQkFBZ0IsRUFBQywwQ0FBMEM7O21CQVgzTDs7RUFBQTtFQTJCc0IsS0FBSyxFQUFDLGtEQUFrRDtFQUFDLFNBQU8sRUFBQyxxQkFBcUI7RUFBQyxrQkFBZ0IsRUFBQywwQ0FBMEM7Ozs7d0JBMUJ0SyxvQkE2Qk07SUE1QkgsS0FBSyxFQUZWOztNQUU0RixZQUFLLENBQUMsV0FBVzt3QkFBMkIsWUFBSzttQ0FBd0MsWUFBSzs4QkFBbUMsZUFBUTs7SUFPak8sU0FBTyxFQUFDLGlCQUFpQjtJQUFDLGtCQUFnQixFQUFDLHlDQUF5Qzs7S0FFekUsWUFBSzt1QkFBaEIsb0JBQThMLE9BQTlMLFVBQThMO1FBWGxNO0lBYUksYUFBK0M7TUFBbkMsSUFBSSxFQUFFLFdBQUk7TUFBRSxTQUFPLEVBQUMsWUFBWTs7SUFFNUMsb0JBVUU7TUFUQyxTQUFTLEVBQUUsZ0JBQVM7TUFDcEIsSUFBSSxFQUFFLFdBQUk7TUFDVixXQUFXLEVBQUUsa0JBQVc7TUFDeEIsUUFBUSxFQUFFLGVBQVE7TUFDbkIsS0FBSyxFQUFDLHFGQUFxRjtNQUMzRixZQUFZLEVBQUMsS0FBSztNQUNqQixLQUFLLEVBQUUsaUJBQVU7TUFDakIsT0FBSyx1Q0FBRSxVQUFLLHNCQUFzQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7TUFDdEQsU0FBTyxFQUFDLGFBQWE7TUFBQyxrQkFBZ0IsRUFBQywwQ0FBMEM7NkNBeEJ2RjtLQTJCZSxZQUFLO3VCQUFoQixvQkFFTSxPQUZOLFVBRU0sbUJBREQsWUFBSztRQTVCZCIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSW5wdXRGaWVsZC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiW1xuICAgICAgJ3JlbGF0aXZlIG1iLTMgZmxleCBoLTEwIHctZnVsbCByb3VuZGVkIHRyYW5zaXRpb24tYWxsIGJnLXdoaXRlJyxcbiAgICAgIHByb3BzLmN1c3RvbVN0eWxlLCBcbiAgICAgIHsgJ2JnLVsjRjVERkRGXSc6IGVycm9yIH0sIFxuICAgICAgeyAnYm9yZGVyIGJvcmRlci1bI0U1NEU0RV0nOiBlcnJvciB9LCBcbiAgICAgIHsgJ2N1cnNvci1ub3QtYWxsb3dlZCc6IGRpc2FibGVkIH1cbiAgICBdXCJcbiAgICBkYXRhLWN5PVwiaW5wdXQtY29udGFpbmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0lucHV0RmllbGQudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2IHYtaWY9XCJlcnJvclwiIGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1bI0U1NEU0RV1cIiBkYXRhLWN5PVwiaW5wdXQtZXJyb3ItYm9yZGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0lucHV0RmllbGQudnVlOjEyOjVcIj48L2Rpdj5cblxuICAgIDxJbnB1dEljb24gOmljb249XCJpY29uXCIgZGF0YS1jeT1cImlucHV0LWljb25cIiAvPlxuXG4gICAgPGlucHV0XG4gICAgICA6bWF4bGVuZ3RoPVwibWF4bGVuZ3RoXCJcbiAgICAgIDp0eXBlPVwidHlwZVwiXG4gICAgICA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXG4gICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICBjbGFzcz1cImgtZnVsbCBmbGV4LTEgcm91bmRlZCBiZy10cmFuc3BhcmVudCB0ZXh0LXNtIHRleHQtYmxhY2sgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICA6dmFsdWU9XCJpbnB1dFZhbHVlXCJcbiAgICAgIEBpbnB1dD1cIiRlbWl0KCd1cGRhdGU6aW5wdXRWYWx1ZScsICRldmVudC50YXJnZXQudmFsdWUpXCIgXG4gICAgICBkYXRhLWN5PVwiaW5wdXQtZmllbGRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvSW5wdXRGaWVsZC52dWU6MTY6NVwiXG4gICAgLz5cblxuICAgIDxkaXYgdi1pZj1cImVycm9yXCIgY2xhc3M9XCJhYnNvbHV0ZSAtYm90dG9tLTUgbGVmdC0wIHRleHQteHMgdGV4dC1bI0U1NEU0RV1cIiBkYXRhLWN5PVwiaW5wdXQtZXJyb3ItbWVzc2FnZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9JbnB1dEZpZWxkLnZ1ZToyODo1XCI+XG4gICAgICB7eyBlcnJvciB9fVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgSW5wdXRJY29uIGZyb20gJy4uL2F0b21zL0lucHV0SWNvbi52dWUnO1xuXG4vLyBEZWZpbmUgcHJvcHNcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICB0eXBlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ3RleHQnIH0sIFxuICBwbGFjZWhvbGRlcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gIGljb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBkaXNhYmxlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICBtYXhsZW5ndGg6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxMDAgfSxcbiAgY3VzdG9tU3R5bGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnYmctd2hpdGUnIH0sIFxuICBlcnJvcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gIGlucHV0VmFsdWU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LCAgXG59KTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iZXJla2V0L0Rlc2t0b3Avc3VibWlzc2lvbi9BbGFkaWEtZnJvbnRlbmQtc2VsZWN0aW9uL2FsYWRpYS1udXh0LXRhc2tzL2NvbXBvbmVudHMvbW9sZWN1bGVzL0lucHV0RmllbGQudnVlIn0=