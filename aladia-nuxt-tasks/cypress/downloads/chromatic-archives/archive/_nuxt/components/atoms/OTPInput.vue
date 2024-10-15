import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/OTPInput.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { ref, watch } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded";


const _sfc_main = {
  __name: 'OTPInput',
  props: {
  maxlength: {
    type: Number,
    default: 1,
  },
  index: {
    type: Number,
    required: true,
  }
},
  emits: ['focus-next', 'focus-prev'],
  setup(__props, { expose: __expose, emit: __emit }) {

const props = __props;

const emit = __emit;
const otpValue = ref('');

const input = ref(null);

const onInput = () => {
  if (otpValue.value.length >= props.maxlength) {
    emit('focus-next', props.index);
  }
};

const onBackspace = (event) => {
  if (otpValue.value === '') {
    emit('focus-prev', props.index);
  }
};

const focusInput = () => {
  input.value.focus();
};

watch(otpValue, (newValue) => {
  if (newValue.length === props.maxlength) {
    emit('focus-next', props.index);
  }
});

__expose({
  focusInput
});

const __returned__ = { props, emit, otpValue, input, onInput, onBackspace, focusInput, ref, watch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { vModelText as _vModelText, withKeys as _withKeys, withDirectives as _withDirectives, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = ["maxlength"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _withDirectives((_openBlock(), _createElementBlock("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.otpValue) = $event)),
    maxlength: $props.maxlength,
    class: "flex w-10 items-center justify-center rounded bg-white border border-black text-center outline-none transition-transform active:scale-90",
    onInput: $setup.onInput,
    onKeydown: _withKeys($setup.onBackspace, ["backspace"]),
    ref: "input",
    "data-cy": "otp-input",
    "data-v-inspector": "components/atoms/OTPInput.vue:2:3"
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1)), [
    [_vModelText, $setup.otpValue]
  ])
}


_sfc_main.__hmrId = "ae3754be"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/atoms/OTPInput.vue"]])
//# sourceMappingURL=data:application/json;base64,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dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8aW5wdXRcbiAgICB2LW1vZGVsPVwib3RwVmFsdWVcIlxuICAgIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIlxuICAgIGNsYXNzPVwiZmxleCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJnLXdoaXRlIGJvcmRlciBib3JkZXItYmxhY2sgdGV4dC1jZW50ZXIgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tdHJhbnNmb3JtIGFjdGl2ZTpzY2FsZS05MFwiXG4gICAgQGlucHV0PVwib25JbnB1dFwiXG4gICAgQGtleWRvd24uYmFja3NwYWNlPVwib25CYWNrc3BhY2VcIlxuICAgIHJlZj1cImlucHV0XCJcbiAgICBkYXRhLWN5PVwib3RwLWlucHV0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvT1RQSW5wdXQudnVlOjI6M1wiXG4gIC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICBtYXhsZW5ndGg6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgfSxcbiAgaW5kZXg6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH1cbn0pO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHMoWydmb2N1cy1uZXh0JywgJ2ZvY3VzLXByZXYnXSk7XG5jb25zdCBvdHBWYWx1ZSA9IHJlZignJyk7XG5cbmNvbnN0IGlucHV0ID0gcmVmKG51bGwpO1xuXG5jb25zdCBvbklucHV0ID0gKCkgPT4ge1xuICBpZiAob3RwVmFsdWUudmFsdWUubGVuZ3RoID49IHByb3BzLm1heGxlbmd0aCkge1xuICAgIGVtaXQoJ2ZvY3VzLW5leHQnLCBwcm9wcy5pbmRleCk7XG4gIH1cbn07XG5cbmNvbnN0IG9uQmFja3NwYWNlID0gKGV2ZW50KSA9PiB7XG4gIGlmIChvdHBWYWx1ZS52YWx1ZSA9PT0gJycpIHtcbiAgICBlbWl0KCdmb2N1cy1wcmV2JywgcHJvcHMuaW5kZXgpO1xuICB9XG59O1xuXG5jb25zdCBmb2N1c0lucHV0ID0gKCkgPT4ge1xuICBpbnB1dC52YWx1ZS5mb2N1cygpO1xufTtcblxud2F0Y2gob3RwVmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICBpZiAobmV3VmFsdWUubGVuZ3RoID09PSBwcm9wcy5tYXhsZW5ndGgpIHtcbiAgICBlbWl0KCdmb2N1cy1uZXh0JywgcHJvcHMuaW5kZXgpO1xuICB9XG59KTtcblxuZGVmaW5lRXhwb3NlKHtcbiAgZm9jdXNJbnB1dFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmVyZWtldC9EZXNrdG9wL3N1Ym1pc3Npb24vQWxhZGlhLWZyb250ZW5kLXNlbGVjdGlvbi9hbGFkaWEtbnV4dC10YXNrcy9jb21wb25lbnRzL2F0b21zL09UUElucHV0LnZ1ZSJ9