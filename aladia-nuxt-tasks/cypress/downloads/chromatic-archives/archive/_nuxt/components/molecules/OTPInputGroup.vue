import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/OTPInputGroup.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock,createVNode as __createVNode } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
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
/* Injection by vite-plugin-vue-inspector End */
import { ref } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded";
import OTPInput from "/_nuxt/components/atoms/OTPInput.vue";


const _sfc_main = {
  __name: 'OTPInputGroup',
  setup(__props, { expose: __expose }) {
  __expose();

const otpRefs = ref([]);

const focusNext = (index) => {
  const nextField = otpRefs.value[index + 1];
  if (nextField) nextField.focusInput();
};

const focusPrev = (index) => {
  const prevField = otpRefs.value[index - 1];
  if (prevField) prevField.focusInput();
};

const __returned__ = { otpRefs, focusNext, focusPrev, ref, OTPInput }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock,   } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  class: "mb-4 flex h-10 w-full justify-between text-xl text-black",
  "data-v-inspector": "components/molecules/OTPInputGroup.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    (_openBlock(), _createElementBlock(_Fragment, null, _renderList(6, (input, index) => {
      return _createVNode($setup["OTPInput"], {
        key: index,
        index: index,
        ref_for: true,
        ref: "otpRefs",
        onFocusNext: $setup.focusNext,
        onFocusPrev: $setup.focusPrev
      }, null, 8 /* PROPS */, ["index"])
    }), 64 /* STABLE_FRAGMENT */))
  ]))
}


_sfc_main.__hmrId = "08925b5e"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/molecules/OTPInputGroup.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0M7Ozs7OztBQUhjO0FBSWQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEI7QUFDQSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztFQTFCSyxLQUFLLEVBQUMsMERBQTBEO0VBQUMsa0JBQWdCLEVBQUMsNENBQTRDOzs7O3dCQUFuSSxvQkFTTSxPQVROLFVBU007bUJBUkosb0JBT0UsaUJBVE4sWUFHK0IsQ0FBQyxFQUhoQyxDQUdjLEtBQUssRUFBRSxLQUFLO2FBRHRCLGFBT0U7UUFMQyxHQUFHLEVBQUUsS0FBSztRQUNWLEtBQUssRUFBRSxLQUFLO1FBTG5CO1FBTU0sR0FBRyxFQUFDLFNBQVM7UUFDWixXQUFVLEVBQUUsZ0JBQVM7UUFDckIsV0FBVSxFQUFFLGdCQUFTIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJPVFBJbnB1dEdyb3VwLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtYi00IGZsZXggaC0xMCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIHRleHQteGwgdGV4dC1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9PVFBJbnB1dEdyb3VwLnZ1ZToyOjNcIj5cbiAgICA8T1RQSW5wdXRcbiAgICAgIHYtZm9yPVwiKGlucHV0LCBpbmRleCkgaW4gNlwiXG4gICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgOmluZGV4PVwiaW5kZXhcIlxuICAgICAgcmVmPVwib3RwUmVmc1wiXG4gICAgICBAZm9jdXMtbmV4dD1cImZvY3VzTmV4dFwiXG4gICAgICBAZm9jdXMtcHJldj1cImZvY3VzUHJldlwiXG4gICAgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBPVFBJbnB1dCBmcm9tICcuLi9hdG9tcy9PVFBJbnB1dC52dWUnO1xuXG5jb25zdCBvdHBSZWZzID0gcmVmKFtdKTtcblxuY29uc3QgZm9jdXNOZXh0ID0gKGluZGV4KSA9PiB7XG4gIGNvbnN0IG5leHRGaWVsZCA9IG90cFJlZnMudmFsdWVbaW5kZXggKyAxXTtcbiAgaWYgKG5leHRGaWVsZCkgbmV4dEZpZWxkLmZvY3VzSW5wdXQoKTtcbn07XG5cbmNvbnN0IGZvY3VzUHJldiA9IChpbmRleCkgPT4ge1xuICBjb25zdCBwcmV2RmllbGQgPSBvdHBSZWZzLnZhbHVlW2luZGV4IC0gMV07XG4gIGlmIChwcmV2RmllbGQpIHByZXZGaWVsZC5mb2N1c0lucHV0KCk7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2JlcmVrZXQvRGVza3RvcC9zdWJtaXNzaW9uL0FsYWRpYS1mcm9udGVuZC1zZWxlY3Rpb24vYWxhZGlhLW51eHQtdGFza3MvY29tcG9uZW50cy9tb2xlY3VsZXMvT1RQSW5wdXRHcm91cC52dWUifQ==