import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/EmailVerificationTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import VerificationHeader from "/_nuxt/components/organisms/VerificationHeader.vue";
import OTPInputGroup from "/_nuxt/components/molecules/OTPInputGroup.vue";
import TextLink from "/_nuxt/components/atoms/TextLink.vue";
import Button from "/_nuxt/components/atoms/Button.vue";

import { useAppState } from "/_nuxt/store/store.ts";

const _sfc_main = {
  __name: 'EmailVerificationTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

const appState = useAppState();

const handleClick = () => {
  appState.setLoading(true);

  setTimeout(() => {
    appState.setLoading(false);
    appState.login();
  }, 2000);
};  

const userName = appState.currentName + " " + appState.currentSurName;

const __returned__ = { appState, handleClick, userName, VerificationHeader, OTPInputGroup, TextLink, Button, get useAppState() { return useAppState } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  "data-cy": "verification",
  class: "flex items-center justify-center min-h-screen bg-black",
  "data-v-inspector": "components/templates/EmailVerificationTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "w-[23vw] p-8 flex-col items-center justify-center rounded border border-white/20 bg-black rounded shadow-lg",
  "data-v-inspector": "components/templates/EmailVerificationTemplate.vue:3:5"
}
const _hoisted_3 = {
  class: "mb-24 flex w-full justify-center",
  "data-v-inspector": "components/templates/EmailVerificationTemplate.vue:14:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["VerificationHeader"]),
      _cache[0] || (_cache[0] = _createElementVNode("div", {
        class: "text-center text-white/70 mb-4",
        "data-v-inspector": "components/templates/EmailVerificationTemplate.vue:7:7"
      }, " Please enter below the 6-digit code we sent you through your registration e-mail: ", -1 /* HOISTED */)),
      _createVNode($setup["OTPInputGroup"]),
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["TextLink"], { text: "You didn't receive any mail?" })
      ]),
      _createVNode($setup["Button"], {
        "data-cy": "submit-email-button",
        label: "Enter",
        "is-loading": $setup.appState.isLoading,
        "is-disabled": false,
        onClick: $setup.handleClick
      }, null, 8 /* PROPS */, ["is-loading"])
    ])
  ]))
}


_sfc_main.__hmrId = "07a8f726"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/templates/EmailVerificationTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUE2QkEsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyRSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QztBQUNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztBQU5sQztBQU9kLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDL0I7QUFDQSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCO0FBQ0EsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDSjtBQUNBLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7Ozs7Ozs7Ozs7O0VBN0MvRCxTQUFPLEVBQUMsY0FBYztFQUFDLEtBQUssRUFBQyx3REFBeUQ7RUFBQyxrQkFBZ0IsRUFBQyx3REFBd0Q7OztFQUM5SixLQUFLLEVBQUMsNkdBQThHO0VBQUMsa0JBQWdCLEVBQUMsd0RBQXdEOzs7RUFXNUwsS0FBSyxFQUFDLGtDQUFrQztFQUFDLGtCQUFnQixFQUFDLHlEQUF5RDs7Ozt3QkFaNUgsb0JBd0JNLE9BeEJOLFVBd0JNO0lBdkJKLG9CQXNCTSxPQXRCTixVQXNCTTtNQXBCSixhQUFzQjtnQ0FFdEIsb0JBR007UUFIRCxLQUFLLEVBQUMsZ0NBQWdDO1FBQUMsa0JBQWdCLEVBQUMsd0RBQXdEO1NBQUMscUZBR3RIO01BR0EsYUFBaUI7TUFDakIsb0JBRU0sT0FGTixVQUVNO1FBREosYUFBZ0Qsc0JBQXRDLElBQUksRUFBQyw4QkFBOEI7O01BRy9DLGFBTUU7UUFMQSxTQUFPLEVBQUMscUJBQXFCO1FBQzdCLEtBQUssRUFBQyxPQUFPO1FBQ1osWUFBVSxFQUFFLGVBQVEsQ0FBQyxTQUFTO1FBQzlCLGFBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQUssRUFBRSxrQkFBVyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRW1haWxWZXJpZmljYXRpb25UZW1wbGF0ZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGRhdGEtY3k9XCJ2ZXJpZmljYXRpb25cIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ibGFjayBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvRW1haWxWZXJpZmljYXRpb25UZW1wbGF0ZS52dWU6MjozXCIgPlxuICAgIDxkaXYgY2xhc3M9XCJ3LVsyM3Z3XSBwLTggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYm9yZGVyICBib3JkZXItd2hpdGUvMjAgYmctYmxhY2sgcm91bmRlZCBzaGFkb3ctbGdcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvRW1haWxWZXJpZmljYXRpb25UZW1wbGF0ZS52dWU6Mzo1XCI+XG4gICAgICBcbiAgICAgIDxWZXJpZmljYXRpb25IZWFkZXIgLz5cblxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtd2hpdGUvNzAgbWItNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9FbWFpbFZlcmlmaWNhdGlvblRlbXBsYXRlLnZ1ZTo3OjdcIj5cbiAgICAgICAgUGxlYXNlIGVudGVyIGJlbG93IHRoZSA2LWRpZ2l0IGNvZGUgd2Ugc2VudCB5b3UgdGhyb3VnaCB5b3VyXG4gICAgICAgIHJlZ2lzdHJhdGlvbiBlLW1haWw6XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8T1RQSW5wdXRHcm91cCAvPlxuICAgICAgPGRpdiBjbGFzcz1cIm1iLTI0IGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0VtYWlsVmVyaWZpY2F0aW9uVGVtcGxhdGUudnVlOjE0OjdcIj5cbiAgICAgICAgPFRleHRMaW5rIHRleHQ9XCJZb3UgZGlkbid0IHJlY2VpdmUgYW55IG1haWw/XCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGRhdGEtY3k9XCJzdWJtaXQtZW1haWwtYnV0dG9uXCJcbiAgICAgICAgbGFiZWw9XCJFbnRlclwiXG4gICAgICAgIDppcy1sb2FkaW5nPVwiYXBwU3RhdGUuaXNMb2FkaW5nXCJcbiAgICAgICAgOmlzLWRpc2FibGVkPVwiZmFsc2VcIlxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVDbGlja1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgVmVyaWZpY2F0aW9uSGVhZGVyIGZyb20gXCIuLi9vcmdhbmlzbXMvVmVyaWZpY2F0aW9uSGVhZGVyLnZ1ZVwiO1xuaW1wb3J0IE9UUElucHV0R3JvdXAgZnJvbSBcIi4uL21vbGVjdWxlcy9PVFBJbnB1dEdyb3VwLnZ1ZVwiO1xuaW1wb3J0IFRleHRMaW5rIGZyb20gXCIuLi9hdG9tcy9UZXh0TGluay52dWVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2F0b21zL0J1dHRvbi52dWVcIjtcblxuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcbmNvbnN0IGFwcFN0YXRlID0gdXNlQXBwU3RhdGUoKTtcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gIGFwcFN0YXRlLnNldExvYWRpbmcodHJ1ZSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYXBwU3RhdGUuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgYXBwU3RhdGUubG9naW4oKTtcbiAgfSwgMjAwMCk7XG59OyAgXG5cbmNvbnN0IHVzZXJOYW1lID0gYXBwU3RhdGUuY3VycmVudE5hbWUgKyBcIiBcIiArIGFwcFN0YXRlLmN1cnJlbnRTdXJOYW1lO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2JlcmVrZXQvRGVza3RvcC9zdWJtaXNzaW9uL0FsYWRpYS1mcm9udGVuZC1zZWxlY3Rpb24vYWxhZGlhLW51eHQtdGFza3MvY29tcG9uZW50cy90ZW1wbGF0ZXMvRW1haWxWZXJpZmljYXRpb25UZW1wbGF0ZS52dWUifQ==