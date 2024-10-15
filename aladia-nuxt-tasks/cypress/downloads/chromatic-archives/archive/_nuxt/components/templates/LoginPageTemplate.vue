import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/LoginPageTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import SocialLoginButtons from "/_nuxt/components/organisms/SocialLoginButtons.vue";
import LoginBanner from "/_nuxt/components/molecules/LoginBanner.vue";
import PasswordField from "/_nuxt/components/molecules/PasswordField.vue";
import Button from "/_nuxt/components/atoms/Button.vue";
import LoginHeader from "/_nuxt/components/atoms/LoginHeader.vue";
import EmailForm from "/_nuxt/components/molecules/EmailForm.vue";

import { useAppState } from "/_nuxt/store/store.ts";


const _sfc_main = {
  __name: 'LoginPageTemplate',
  props: {
  isPasswordField: {
    type: Boolean,
    default: false,
  },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props

const appState = useAppState();

const onBack = () => {
  appState.showEmailField();
};

const onEnter = () => {
  appState.setLoading(true);
  setTimeout(() => {
    appState.setLoading(false);
    console.log(appState.accounts);
    if (appState.accounts.includes(appState.currentEmail)) {
      appState.showPasswordField();
    } else {
      appState.showSignUpField();
      console.log(appState.pageNumber);
      console.log(appState.currentEmail);
    }
  }, 2000);
};

const logginAction = () => {
  appState.setLoading(true);
  setTimeout(() => {
    appState.setLoading(false); 
    appState.login();
  }, 1000);
};

const __returned__ = { props, appState, onBack, onEnter, logginAction, SocialLoginButtons, LoginBanner, PasswordField, Button, LoginHeader, EmailForm, get useAppState() { return useAppState } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode,    normalizeClass as _normalizeClass } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  class: "text-white flex items-center justify-center min-h-screen bg-black",
  "data-cy": "login-form",
  "data-v-inspector": "components/templates/LoginPageTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "w-[23vw] p-8 flex-col items-center justify-center rounded border border-white/20 bg-black rounded shadow-lg",
  "data-v-inspector": "components/templates/LoginPageTemplate.vue:3:5"
}
const _hoisted_3 = {
  key: 1,
  class: "space-y-4",
  "data-v-inspector": "components/templates/LoginPageTemplate.vue:8:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      ($props.isPasswordField)
        ? (_openBlock(), _createBlock($setup["LoginHeader"], {
            key: 0,
            onclick: $setup.onBack,
            "data-cy": "login-header"
          }))
        : _createCommentVNode("v-if", true),
      _createVNode($setup["LoginBanner"], {
        imgSrc: `https://develop.aladia.io/logo/image.png`,
        "data-cy": "login-banner"
      }),
      ($props.isPasswordField)
        ? (_openBlock(), _createElementBlock("div", _hoisted_3, [
            _cache[0] || (_cache[0] = _createElementVNode("div", {
              class: "mb-6 text-center",
              "data-cy": "password-prompt",
              "data-v-inspector": "components/templates/LoginPageTemplate.vue:9:7"
            }, "Enter your password", -1 /* HOISTED */)),
            _createVNode($setup["PasswordField"], {
              "validate-input": false,
              "data-cy": "password-field"
            }),
            _createVNode($setup["Button"], {
              label: "Enter",
              "is-loading": $setup.appState.isLoading,
              onClick: $setup.logginAction,
              "datdataa-cy": "login-button"
            }, null, 8 /* PROPS */, ["is-loading"])
          ]))
        : (_openBlock(), _createBlock($setup["EmailForm"], {
            key: 2,
            onclick: $setup.onEnter,
            "data-cy": "email-form"
          })),
      _createElementVNode("div", {
        class: _normalizeClass(['mt-6 text-center', { 'invisible': $props.isPasswordField }]),
        "data-v-inspector": "components/templates/LoginPageTemplate.vue:22:5"
      }, [
        _cache[1] || (_cache[1] = _createElementVNode("div", {
          class: "mb-6 flex items-center justify-between gap-4",
          "data-v-inspector": "components/templates/LoginPageTemplate.vue:23:7"
        }, [
          _createElementVNode("div", {
            class: "h-[1px] w-40 bg-gradient-to-r from-white/0 to-white",
            "data-v-inspector": "components/templates/LoginPageTemplate.vue:24:9"
          }),
          _createElementVNode("div", { "data-v-inspector": "components/templates/LoginPageTemplate.vue:25:9" }, "Or"),
          _createElementVNode("div", {
            class: "h-[1px] w-40 bg-gradient-to-r from-white to-white/0",
            "data-v-inspector": "components/templates/LoginPageTemplate.vue:26:9"
          })
        ], -1 /* HOISTED */)),
        _createVNode($setup["SocialLoginButtons"], { "data-cy": "social-login-buttons" })
      ], 2 /* CLASS */),
      _cache[2] || (_cache[2] = _createElementVNode("div", {
        class: "cursor-pointer text-center text-white/40",
        "data-cy": "terms-and-conditions",
        "data-v-inspector": "components/templates/LoginPageTemplate.vue:31:5"
      }, " Terms & Conditions ", -1 /* HOISTED */))
    ])
  ]))
}


_sfc_main.__hmrId = "12354b5f"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/templates/LoginPageTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,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QzdJLGFBQWtFO2NBQWxELGdCQUFjLEVBQUUsS0FBSztjQUFFLFNBQU8sRUFBQyxnQkFBZ0I7O1lBRS9ELGFBS0U7Y0FKQSxLQUFLLEVBQUMsT0FBTztjQUNaLFlBQVUsRUFBRSxlQUFRLENBQUMsU0FBUztjQUM5QixPQUFPLEVBQUUsbUJBQVk7Y0FDdEIsYUFBVyxFQUFDLGNBQWM7Ozt5QkFJOUIsYUFBNEQ7WUFuQmhFO1lBbUJ1QixPQUFPLEVBQUUsY0FBTztZQUFFLFNBQU8sRUFBQyxZQUFZOztNQUV6RCxvQkFPTTtRQVBBLEtBQUssRUFyQmYsb0RBcUJxRCxzQkFBZTtRQUFLLGtCQUFnQixFQUFDLGlEQUFpRDs7a0NBQ3JJLG9CQUlNO1VBSkQsS0FBSyxFQUFDLDhDQUE4QztVQUFDLGtCQUFnQixFQUFDLGlEQUFpRDs7VUFDMUgsb0JBQTBJO1lBQXJJLEtBQUssRUFBQyxxREFBcUQ7WUFBQyxrQkFBZ0IsRUFBQyxpREFBaUQ7O1VBQ25JLG9CQUFnRixTQUEzRSxrQkFBZ0IsRUFBQyxpREFBaUQsSUFBQyxJQUFFO1VBQzFFLG9CQUEwSTtZQUFySSxLQUFLLEVBQUMscURBQXFEO1lBQUMsa0JBQWdCLEVBQUMsaURBQWlEOzs7UUFFckksYUFBcUQsZ0NBQWpDLFNBQU8sRUFBQyxzQkFBc0I7O2dDQUdwRCxvQkFFTTtRQUZELEtBQUssRUFBQywwQ0FBMEM7UUFBQyxTQUFPLEVBQUMsc0JBQXNCO1FBQUMsa0JBQWdCLEVBQUMsaURBQWlEO1NBQUMsc0JBRXhKIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJMb2dpblBhZ2VUZW1wbGF0ZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctYmxhY2sgXCIgZGF0YS1jeT1cImxvZ2luLWZvcm1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvTG9naW5QYWdlVGVtcGxhdGUudnVlOjI6M1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ3LVsyM3Z3XSBwLTggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYm9yZGVyICBib3JkZXItd2hpdGUvMjAgYmctYmxhY2sgcm91bmRlZCBzaGFkb3ctbGdcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvTG9naW5QYWdlVGVtcGxhdGUudnVlOjM6NVwiPlxuICAgIDxMb2dpbkhlYWRlciB2LWlmPVwiaXNQYXNzd29yZEZpZWxkXCIgOm9uY2xpY2s9XCJvbkJhY2tcIiBkYXRhLWN5PVwibG9naW4taGVhZGVyXCIgLz5cblxuICAgIDxMb2dpbkJhbm5lciA6aW1nU3JjPVwiYGh0dHBzOi8vZGV2ZWxvcC5hbGFkaWEuaW8vbG9nby9pbWFnZS5wbmdgXCIgZGF0YS1jeT1cImxvZ2luLWJhbm5lclwiIC8+XG5cbiAgICA8ZGl2IHYtaWY9XCJpc1Bhc3N3b3JkRmllbGRcIiBjbGFzcz1cInNwYWNlLXktNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9Mb2dpblBhZ2VUZW1wbGF0ZS52dWU6ODo1XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWItNiB0ZXh0LWNlbnRlclwiIGRhdGEtY3k9XCJwYXNzd29yZC1wcm9tcHRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvTG9naW5QYWdlVGVtcGxhdGUudnVlOjk6N1wiPkVudGVyIHlvdXIgcGFzc3dvcmQ8L2Rpdj5cbiAgICAgIDxQYXNzd29yZEZpZWxkIDp2YWxpZGF0ZS1pbnB1dD1cImZhbHNlXCIgZGF0YS1jeT1cInBhc3N3b3JkLWZpZWxkXCIgLz5cblxuICAgICAgPEJ1dHRvblxuICAgICAgICBsYWJlbD1cIkVudGVyXCJcbiAgICAgICAgOmlzLWxvYWRpbmc9XCJhcHBTdGF0ZS5pc0xvYWRpbmdcIlxuICAgICAgICA6b25DbGljaz1cImxvZ2dpbkFjdGlvblwiXG4gICAgICAgIGRhdGRhdGFhLWN5PVwibG9naW4tYnV0dG9uXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8RW1haWxGb3JtIHYtZWxzZSA6b25jbGljaz1cIm9uRW50ZXJcIiBkYXRhLWN5PVwiZW1haWwtZm9ybVwiIC8+XG5cbiAgICA8ZGl2IDpjbGFzcz1cIlsnbXQtNiB0ZXh0LWNlbnRlcicsIHsgJ2ludmlzaWJsZSc6IGlzUGFzc3dvcmRGaWVsZCB9XVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9Mb2dpblBhZ2VUZW1wbGF0ZS52dWU6MjI6NVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1iLTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0xvZ2luUGFnZVRlbXBsYXRlLnZ1ZToyMzo3XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLVsxcHhdIHctNDAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlLzAgdG8td2hpdGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvTG9naW5QYWdlVGVtcGxhdGUudnVlOjI0OjlcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvTG9naW5QYWdlVGVtcGxhdGUudnVlOjI1OjlcIj5PcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1bMXB4XSB3LTQwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZSB0by13aGl0ZS8wXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0xvZ2luUGFnZVRlbXBsYXRlLnZ1ZToyNjo5XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTb2NpYWxMb2dpbkJ1dHRvbnMgZGF0YS1jeT1cInNvY2lhbC1sb2dpbi1idXR0b25zXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzQwXCIgZGF0YS1jeT1cInRlcm1zLWFuZC1jb25kaXRpb25zXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0xvZ2luUGFnZVRlbXBsYXRlLnZ1ZTozMTo1XCI+XG4gICAgICBUZXJtcyAmYW1wOyBDb25kaXRpb25zXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBTb2NpYWxMb2dpbkJ1dHRvbnMgZnJvbSBcIi4uL29yZ2FuaXNtcy9Tb2NpYWxMb2dpbkJ1dHRvbnMudnVlXCI7XG5pbXBvcnQgTG9naW5CYW5uZXIgZnJvbSBcIi4uL21vbGVjdWxlcy9Mb2dpbkJhbm5lci52dWVcIjtcbmltcG9ydCBQYXNzd29yZEZpZWxkIGZyb20gXCIuLi9tb2xlY3VsZXMvUGFzc3dvcmRGaWVsZC52dWVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2F0b21zL0J1dHRvbi52dWVcIjtcbmltcG9ydCBMb2dpbkhlYWRlciBmcm9tIFwiLi4vYXRvbXMvTG9naW5IZWFkZXIudnVlXCI7XG5pbXBvcnQgRW1haWxGb3JtIGZyb20gXCIuLi9tb2xlY3VsZXMvRW1haWxGb3JtLnZ1ZVwiO1xuXG5pbXBvcnQgeyB1c2VBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdG9yZVwiO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgaXNQYXNzd29yZEZpZWxkOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbn0pXG5cbmNvbnN0IGFwcFN0YXRlID0gdXNlQXBwU3RhdGUoKTtcblxuY29uc3Qgb25CYWNrID0gKCkgPT4ge1xuICBhcHBTdGF0ZS5zaG93RW1haWxGaWVsZCgpO1xufTtcblxuY29uc3Qgb25FbnRlciA9ICgpID0+IHtcbiAgYXBwU3RhdGUuc2V0TG9hZGluZyh0cnVlKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYXBwU3RhdGUuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgY29uc29sZS5sb2coYXBwU3RhdGUuYWNjb3VudHMpO1xuICAgIGlmIChhcHBTdGF0ZS5hY2NvdW50cy5pbmNsdWRlcyhhcHBTdGF0ZS5jdXJyZW50RW1haWwpKSB7XG4gICAgICBhcHBTdGF0ZS5zaG93UGFzc3dvcmRGaWVsZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBTdGF0ZS5zaG93U2lnblVwRmllbGQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGFwcFN0YXRlLnBhZ2VOdW1iZXIpO1xuICAgICAgY29uc29sZS5sb2coYXBwU3RhdGUuY3VycmVudEVtYWlsKTtcbiAgICB9XG4gIH0sIDIwMDApO1xufTtcblxuY29uc3QgbG9nZ2luQWN0aW9uID0gKCkgPT4ge1xuICBhcHBTdGF0ZS5zZXRMb2FkaW5nKHRydWUpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBhcHBTdGF0ZS5zZXRMb2FkaW5nKGZhbHNlKTsgXG4gICAgYXBwU3RhdGUubG9naW4oKTtcbiAgfSwgMTAwMCk7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2JlcmVrZXQvRGVza3RvcC9zdWJtaXNzaW9uL0FsYWRpYS1mcm9udGVuZC1zZWxlY3Rpb24vYWxhZGlhLW51eHQtdGFza3MvY29tcG9uZW50cy90ZW1wbGF0ZXMvTG9naW5QYWdlVGVtcGxhdGUudnVlIn0=