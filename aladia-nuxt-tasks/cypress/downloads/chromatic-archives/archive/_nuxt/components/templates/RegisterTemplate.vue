import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/RegisterTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import LoginHeader from "/_nuxt/components/atoms/LoginHeader.vue";
import TermsAndCondition from "/_nuxt/components/atoms/TermsAndCondition.vue";
import NameField from "/_nuxt/components/molecules/NameField.vue";
import PasswordField from "/_nuxt/components/molecules/PasswordField.vue";
import { ref } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded";
import Button from "/_nuxt/components/atoms/Button.vue";
import { useAppState } from "/_nuxt/store/store.ts";


const _sfc_main = {
  __name: 'RegisterTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

const appState = useAppState();

const ticked = ref(false);

const updateTicked = (value) => {
  ticked.value = value;
};

const onBack = () => {
  appState.showEmailField();
};

const onclick = () => {
  appState.setLoading(true);

  setTimeout(() => {
    appState.setLoading(false);
    appState.accounts.push(appState.currentEmail);
    appState.showOTPField();
  }, 2000);
};

const __returned__ = { appState, ticked, updateTicked, onBack, onclick, LoginHeader, TermsAndCondition, NameField, PasswordField, ref, Button, get useAppState() { return useAppState } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   createTextVNode as _createTextVNode, createStaticVNode as _createStaticVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
import _imports_0 from "/_nuxt/assets/img/aladia.png?import"


const _hoisted_1 = {
  class: "flex items-center justify-center min-h-screen bg-black",
  "data-cy": "registration",
  "data-v-inspector": "components/templates/RegisterTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "w-[23vw] p-8 flex-col items-center justify-center rounded border border-white/20 bg-black rounded shadow-lg",
  "data-v-inspector": "components/templates/RegisterTemplate.vue:6:5"
}
const _hoisted_3 = {
  class: "flex justify-center p-5",
  "data-v-inspector": "components/templates/RegisterTemplate.vue:33:5"
}
const _hoisted_4 = {
  class: "flex flex-col space-y-2",
  "data-v-inspector": "components/templates/RegisterTemplate.vue:47:5"
}
const _hoisted_5 = {
  class: "mt-2",
  "data-v-inspector": "components/templates/RegisterTemplate.vue:61:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["LoginHeader"], {
        title: "Back to Log in",
        onClickHandler: $setup.onBack
      }),
      _cache[4] || (_cache[4] = _createStaticVNode("<div class=\"mb-4 flex justify-center w-full items-end gap-6 px-4\" data-v-inspector=\"components/templates/RegisterTemplate.vue:8:5\"><div class=\"relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white\" data-v-inspector=\"components/templates/RegisterTemplate.vue:9:7\"><div class=\"gradient absolute inset-0 opacity-20\" data-v-inspector=\"components/templates/RegisterTemplate.vue:12:9\"></div><img class=\"absolute inset-0 h-full w-full rounded object-cover\" src=\"" + _imports_0 + "\" data-v-inspector=\"components/templates/RegisterTemplate.vue:13:9\"><div class=\"absolute inset-0 flex items-end justify-center pb-4\" data-v-inspector=\"components/templates/RegisterTemplate.vue:17:9\"></div><input type=\"file\" accept=\"image/*\" class=\"absolute inset-0 opacity-0\" data-v-inspector=\"components/templates/RegisterTemplate.vue:18:9\"></div><div class=\"flex flex-col items-center mx-6\" data-v-inspector=\"components/templates/RegisterTemplate.vue:24:7\"><div class=\"mb-1 text-sm font-semibold\" data-v-inspector=\"components/templates/RegisterTemplate.vue:25:9\">Nice to meet you,</div><div class=\"text-xs text-white/70\" data-cy=\"upload-profile\" data-v-inspector=\"components/templates/RegisterTemplate.vue:26:9\"> Upload a profile picture <br data-v-inspector=\"components/templates/RegisterTemplate.vue:27:36\"> and complete your <br data-v-inspector=\"components/templates/RegisterTemplate.vue:28:29\"> presentation </div></div></div>", 1)),
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["TermsAndCondition"], {
          ticked: $setup.ticked,
          "onUpdate:ticked": $setup.updateTicked
        }, null, 8 /* PROPS */, ["ticked"])
      ]),
      _cache[5] || (_cache[5] = _createElementVNode("div", {
        class: "mb-4 text-center text-xs",
        "data-v-inspector": "components/templates/RegisterTemplate.vue:36:5"
      }, "Enter your details", -1 /* HOISTED */)),
      _createVNode($setup["NameField"], {
        placeholder: "Name",
        "data-cy": "name-field",
        modelValue: $setup.appState.currentName,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.appState.currentName) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode($setup["NameField"], {
        placeholder: "Surname",
        "data-cy": "surname-field",
        modelValue: $setup.appState.currentSurName,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.appState.currentSurName) = $event))
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createElementVNode("div", _hoisted_4, [
        _createVNode($setup["NameField"], {
          placeholder: "Email",
          icon: "fa-envelope",
          "data-cy": "email-field",
          modelValue: $setup.appState.currentEmail,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.appState.currentEmail) = $event))
        }, null, 8 /* PROPS */, ["modelValue"]),
        _createVNode($setup["PasswordField"], {
          "validate-input": true,
          "data-cy": "password-field"
        }),
        _createVNode($setup["PasswordField"], {
          "validate-input": true,
          "data-cy": "comfirm-password-field",
          placeholder: "Confirm Password"
        })
      ]),
      _createElementVNode("div", _hoisted_5, [
        _createVNode($setup["Button"], {
          "data-cy": "submit-email-button",
          label: "Enter",
          "is-loading": $setup.appState.isLoading,
          "is-disabled": false,
          onClick: $setup.onclick
        }, null, 8 /* PROPS */, ["is-loading"]),
        _cache[3] || (_cache[3] = _createElementVNode("div", {
          class: "cursor-pointer text-center text-white/40",
          "data-cy": "terms-and-conditions",
          "data-v-inspector": "components/templates/RegisterTemplate.vue:69:7"
        }, " Terms & Conditions ", -1 /* HOISTED */))
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "618f9d7d"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/templates/RegisterTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,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QUFDLE9BQU87VUFDWixZQUFVLEVBQUUsZUFBUSxDQUFDLFNBQVM7VUFDOUIsYUFBVyxFQUFFLEtBQUs7VUFDbEIsT0FBSyxFQUFFLGNBQU87O2tDQUVqQixvQkFLTTtVQUpKLEtBQUssRUFBQywwQ0FBMEM7VUFDaEQsU0FBTyxFQUFDLHNCQUFzQjtVQUFDLGtCQUFnQixFQUFDLGdEQUFnRDtXQUNqRyxzQkFFRCIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUmVnaXN0ZXJUZW1wbGF0ZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG5jbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ibGFjayBcIiBcbiAgICBkYXRhLWN5PVwicmVnaXN0cmF0aW9uXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1JlZ2lzdGVyVGVtcGxhdGUudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwidy1bMjN2d10gcC04IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJvcmRlciAgYm9yZGVyLXdoaXRlLzIwIGJnLWJsYWNrIHJvdW5kZWQgc2hhZG93LWxnXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1JlZ2lzdGVyVGVtcGxhdGUudnVlOjY6NVwiPlxuICAgIDxMb2dpbkhlYWRlciB0aXRsZT1cIkJhY2sgdG8gTG9nIGluXCIgOm9uQ2xpY2tIYW5kbGVyPVwib25CYWNrXCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwibWItNCBmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBpdGVtcy1lbmQgZ2FwLTYgcHgtNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9SZWdpc3RlclRlbXBsYXRlLnZ1ZTo4OjVcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJyZWxhdGl2ZSBoLTI0IHctMjQgcm91bmRlZCBib3JkZXIgdHJhbnNpdGlvbi1hbGwgYm9yZGVyLXdoaXRlLzIwIGhvdmVyOmJvcmRlci13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9SZWdpc3RlclRlbXBsYXRlLnZ1ZTo5OjdcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGllbnQgYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTIwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1JlZ2lzdGVyVGVtcGxhdGUudnVlOjEyOjlcIj48L2Rpdj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQgb2JqZWN0LWNvdmVyIFwiXG4gICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvYWxhZGlhLnBuZ1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9SZWdpc3RlclRlbXBsYXRlLnZ1ZToxMzo5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgcGItNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9SZWdpc3RlclRlbXBsYXRlLnZ1ZToxNzo5XCI+PC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgb3BhY2l0eS0wXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1JlZ2lzdGVyVGVtcGxhdGUudnVlOjE4OjlcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXgtNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9SZWdpc3RlclRlbXBsYXRlLnZ1ZToyNDo3XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi0xIHRleHQtc20gZm9udC1zZW1pYm9sZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9SZWdpc3RlclRlbXBsYXRlLnZ1ZToyNTo5XCI+TmljZSB0byBtZWV0IHlvdSw8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQteHMgdGV4dC13aGl0ZS83MCBcIiBkYXRhLWN5PVwidXBsb2FkLXByb2ZpbGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvUmVnaXN0ZXJUZW1wbGF0ZS52dWU6MjY6OVwiPlxuICAgICAgICAgIFVwbG9hZCBhIHByb2ZpbGUgcGljdHVyZSA8YnIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1JlZ2lzdGVyVGVtcGxhdGUudnVlOjI3OjM2XCIgLz5cbiAgICAgICAgICBhbmQgY29tcGxldGUgeW91ciA8YnIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1JlZ2lzdGVyVGVtcGxhdGUudnVlOjI4OjI5XCIgLz5cbiAgICAgICAgICBwcmVzZW50YXRpb25cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBwLTVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvUmVnaXN0ZXJUZW1wbGF0ZS52dWU6MzM6NVwiPlxuICAgICAgPFRlcm1zQW5kQ29uZGl0aW9uIDp0aWNrZWQ9XCJ0aWNrZWRcIiBAdXBkYXRlOnRpY2tlZD1cInVwZGF0ZVRpY2tlZFwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTQgdGV4dC1jZW50ZXIgdGV4dC14c1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9SZWdpc3RlclRlbXBsYXRlLnZ1ZTozNjo1XCI+RW50ZXIgeW91ciBkZXRhaWxzPC9kaXY+XG4gICAgPE5hbWVGaWVsZFxuICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgIGRhdGEtY3k9XCJuYW1lLWZpZWxkXCJcbiAgICAgIHYtbW9kZWw9XCJhcHBTdGF0ZS5jdXJyZW50TmFtZVwiXG4gICAgLz5cbiAgICA8TmFtZUZpZWxkXG4gICAgICBwbGFjZWhvbGRlcj1cIlN1cm5hbWVcIlxuICAgICAgZGF0YS1jeT1cInN1cm5hbWUtZmllbGRcIlxuICAgICAgdi1tb2RlbD1cImFwcFN0YXRlLmN1cnJlbnRTdXJOYW1lXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9SZWdpc3RlclRlbXBsYXRlLnZ1ZTo0Nzo1XCI+XG4gICAgICA8TmFtZUZpZWxkXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICBpY29uPVwiZmEtZW52ZWxvcGVcIlxuICAgICAgICBkYXRhLWN5PVwiZW1haWwtZmllbGRcIlxuICAgICAgICB2LW1vZGVsPVwiYXBwU3RhdGUuY3VycmVudEVtYWlsXCJcbiAgICAgIC8+XG4gICAgICA8UGFzc3dvcmRGaWVsZCA6dmFsaWRhdGUtaW5wdXQ9XCJ0cnVlXCIgZGF0YS1jeT1cInBhc3N3b3JkLWZpZWxkXCIgLz5cbiAgICAgIDxQYXNzd29yZEZpZWxkXG4gICAgICAgIDp2YWxpZGF0ZS1pbnB1dD1cInRydWVcIlxuICAgICAgICBkYXRhLWN5PVwiY29tZmlybS1wYXNzd29yZC1maWVsZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtdC0yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1JlZ2lzdGVyVGVtcGxhdGUudnVlOjYxOjVcIj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgZGF0YS1jeT1cInN1Ym1pdC1lbWFpbC1idXR0b25cIlxuICAgICAgICBsYWJlbD1cIkVudGVyXCJcbiAgICAgICAgOmlzLWxvYWRpbmc9XCJhcHBTdGF0ZS5pc0xvYWRpbmdcIlxuICAgICAgICA6aXMtZGlzYWJsZWQ9XCJmYWxzZVwiXG4gICAgICAgIEBjbGljaz1cIm9uY2xpY2tcIlxuICAgICAgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzQwXCJcbiAgICAgICAgZGF0YS1jeT1cInRlcm1zLWFuZC1jb25kaXRpb25zXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1JlZ2lzdGVyVGVtcGxhdGUudnVlOjY5OjdcIlxuICAgICAgPlxuICAgICAgICBUZXJtcyAmYW1wOyBDb25kaXRpb25zXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IExvZ2luSGVhZGVyIGZyb20gXCIuLi9hdG9tcy9Mb2dpbkhlYWRlci52dWVcIjtcbmltcG9ydCBUZXJtc0FuZENvbmRpdGlvbiBmcm9tIFwiLi4vYXRvbXMvVGVybXNBbmRDb25kaXRpb24udnVlXCI7XG5pbXBvcnQgTmFtZUZpZWxkIGZyb20gXCIuLi9tb2xlY3VsZXMvTmFtZUZpZWxkLnZ1ZVwiO1xuaW1wb3J0IFBhc3N3b3JkRmllbGQgZnJvbSBcIi4uL21vbGVjdWxlcy9QYXNzd29yZEZpZWxkLnZ1ZVwiO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYXRvbXMvQnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcblxuY29uc3QgYXBwU3RhdGUgPSB1c2VBcHBTdGF0ZSgpO1xuXG5jb25zdCB0aWNrZWQgPSByZWYoZmFsc2UpO1xuXG5jb25zdCB1cGRhdGVUaWNrZWQgPSAodmFsdWUpID0+IHtcbiAgdGlja2VkLnZhbHVlID0gdmFsdWU7XG59O1xuXG5jb25zdCBvbkJhY2sgPSAoKSA9PiB7XG4gIGFwcFN0YXRlLnNob3dFbWFpbEZpZWxkKCk7XG59O1xuXG5jb25zdCBvbmNsaWNrID0gKCkgPT4ge1xuICBhcHBTdGF0ZS5zZXRMb2FkaW5nKHRydWUpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGFwcFN0YXRlLnNldExvYWRpbmcoZmFsc2UpO1xuICAgIGFwcFN0YXRlLmFjY291bnRzLnB1c2goYXBwU3RhdGUuY3VycmVudEVtYWlsKTtcbiAgICBhcHBTdGF0ZS5zaG93T1RQRmllbGQoKTtcbiAgfSwgMjAwMCk7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2JlcmVrZXQvRGVza3RvcC9zdWJtaXNzaW9uL0FsYWRpYS1mcm9udGVuZC1zZWxlY3Rpb24vYWxhZGlhLW51eHQtdGFza3MvY29tcG9uZW50cy90ZW1wbGF0ZXMvUmVnaXN0ZXJUZW1wbGF0ZS52dWUifQ==