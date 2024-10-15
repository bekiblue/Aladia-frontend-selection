import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/PasswordRecoveryTemplate.vue");import { default as __nuxt_component_0 } from "/_nuxt/node_modules/.pnpm/@vesp+nuxt-fontawesome@1.1.0_magicast@0.3.5_rollup@4.24.0_webpack-sources@3.2.3/node_modules/@vesp/nuxt-fontawesome/dist/runtime/components/icon.vue";
/* Injection by vite-plugin-vue-inspector Start */
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
import LoginBanner from "/_nuxt/components/molecules/LoginBanner.vue";
import Button from "/_nuxt/components/atoms/Button.vue";
import { useAppState } from "/_nuxt/store/store.ts";
import PasswordField from "/_nuxt/components/molecules/PasswordField.vue";

const googleImgSrc =
  "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg";

const _sfc_main = {
  __name: 'PasswordRecoveryTemplate',
  props: {
  email: {
    type: String,
    default: "bereket.tsegaye@gmail.com",
  },
  showPasswordRecoverySection: { type: Boolean, default: true },
},
  setup(__props, { expose: __expose }) {
  __expose();

const appState = useAppState();
const props = __props;

const onBack = () => {
  appState.showEmailField();
};

const handleClick = () => {
  
  appState.setLoading(true);

  setTimeout(() => {
    appState.setLoading(false);
    if (props.showPasswordRecoverySection) {
      appState.showPasswordSetField();
    } else {
      appState.login();
    }
  }, 2000);
};


const __returned__ = { appState, props, onBack, handleClick, googleImgSrc, LoginHeader, LoginBanner, Button, get useAppState() { return useAppState }, PasswordField }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   toDisplayString as _toDisplayString, openBlock as _openBlock,  createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
import _imports_0 from "/_nuxt/assets/img/aladia.png?import"


const _hoisted_1 = {
  class: "flex items-center justify-center min-h-screen bg-black",
  "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "w-[23vw] p-8 flex-col items-center justify-center rounded border border-white/20 bg-black rounded shadow-lg",
  "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:4:7"
}
const _hoisted_3 = {
  class: "flex flex-1 flex-col px-6",
  "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:17:5"
}
const _hoisted_4 = {
  key: 0,
  class: "leading-none text-white/70",
  "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:18:7"
}
const _hoisted_5 = {
  class: "text-xs font-light italic",
  "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:22:9"
}
const _hoisted_6 = {
  key: 1,
  class: "flex flex-1 items-center justify-between gap-6",
  "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:25:7"
}
const _hoisted_7 = {
  class: "flex flex-col items-center gap-3",
  "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:30:9"
}
const _hoisted_8 = {
  key: 2,
  class: "flex flex-1 flex-col gap-2 items-center justify-center",
  "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:43:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome = __nuxt_component_0

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["LoginHeader"], {
        onClickHandler: $setup.onBack,
        "show-back-icon": $props.showPasswordRecoverySection
      }, null, 8 /* PROPS */, ["show-back-icon"]),
      _createVNode($setup["LoginBanner"], {
        title: "Add a new password",
        subtitle: "Your account uses\ngoogle Sign-in.\nAdd a new password.",
        imgSrc: $setup.googleImgSrc
      }),
      _createElementVNode("div", _hoisted_3, [
        ($props.showPasswordRecoverySection)
          ? (_openBlock(), _createElementBlock("div", _hoisted_4, [
              _cache[0] || (_cache[0] = _createElementVNode("div", {
                class: "text-sm font-semibold text-white/70",
                "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:19:9"
              }, " Recovery link sent to: ", -1 /* HOISTED */)),
              _createElementVNode("div", _hoisted_5, _toDisplayString($props.email), 1 /* TEXT */)
            ]))
          : _createCommentVNode("v-if", true),
        ($props.showPasswordRecoverySection)
          ? (_openBlock(), _createElementBlock("div", _hoisted_6, [
              _cache[2] || (_cache[2] = _createElementVNode("img", {
                src: _imports_0,
                class: "h-20 w-20 object-cover",
                "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:29:9"
              }, null, -1 /* HOISTED */)),
              _createElementVNode("div", _hoisted_7, [
                _createVNode(_component_font_awesome, {
                  icon: "arrow-right",
                  class: "text-xl"
                }),
                _cache[1] || (_cache[1] = _createElementVNode("img", {
                  src: "data:image/svg+xml,%3csvg%20width='48'%20height='34'%20viewBox='0%200%2048%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2022'%20opacity='0.6'%3e%3cpath%20id='Union'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M37.309%203.885L23.7397%2018.8413L10.1704%203.885H37.309ZM41.3597%203.885C41.3286%203.91929%2041.2971%203.95399%2041.2652%203.98913L25.2209%2021.6734C24.5288%2022.4363%2024.1827%2022.8177%2023.7397%2022.8177C23.2967%2022.8177%2022.9507%2022.4363%2022.2585%2021.6734L6.21421%203.98913L6.21419%203.98911C6.18232%203.95398%206.15083%203.91928%206.11975%203.885H5.36023C4.25566%203.885%203.36023%204.78043%203.36023%205.885V28.6172C3.36023%2029.7218%204.25566%2030.6172%205.36022%2030.6172H42.1206C43.2251%2030.6172%2044.1206%2029.7218%2044.1206%2028.6172V5.885C44.1206%204.78043%2043.2251%203.885%2042.1206%203.885H41.3597ZM42.6518%200.912893C45.1635%201.17815%2047.1206%203.30302%2047.1206%205.885V28.6172C47.1206%2031.3787%2044.882%2033.6172%2042.1206%2033.6172H5.36022C2.5988%2033.6172%200.360229%2031.3787%200.360229%2028.6172V5.885C0.360229%203.3036%202.31645%201.1791%204.82731%200.913068C5.24797%200.671204%206.03628%200.64778%207.27962%200.645511L7.28514%200.645499C7.41677%200.645267%207.55351%200.645266%207.69543%200.645266L39.784%200.645264C39.9259%200.645264%2040.0626%200.645264%2040.1943%200.645496L40.1998%200.645508C41.4428%200.647776%2042.2311%200.67119%2042.6518%200.912893Z'%20fill='url(%23paint0_linear_318_751)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_318_751'%20x1='23.9999'%20y1='0.999878'%20x2='23.9999'%20y2='39.4999'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23373333'/%3e%3cstop%20offset='1'%20stop-color='%237C7C7C'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
                  class: "h-10 object-contain",
                  "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:32:11"
                }, null, -1 /* HOISTED */))
              ]),
              _cache[3] || (_cache[3] = _createElementVNode("img", {
                src: "data:image/svg+xml,%3csvg%20width='55'%20height='75'%20viewBox='0%200%2055%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20opacity='0.6'%20d='M13.2501%2029.0097V29.1097H13.3501H48.2411C49.0523%2029.1097%2049.8557%2029.2719%2050.6053%2029.5869C51.3549%2029.902%2052.0361%2030.3639%2052.6099%2030.9463C53.1838%2031.5286%2053.6391%2032.2201%2053.9497%2032.9812C54.2604%2033.7423%2054.4203%2034.5581%2054.4203%2035.3819V67.7194C54.4203%2069.3834%2053.7689%2070.9789%2052.6099%2072.1551C51.4509%2073.3312%2049.8794%2073.9917%2048.241%2073.9917H6.27918C4.64083%2073.9917%203.06929%2073.3312%201.91035%2072.1551C0.751369%2070.9789%200.1%2069.3834%200.1%2067.7194V35.3822C0.1%2033.7181%200.751399%2032.1226%201.91044%2030.9463C3.06943%2029.7702%204.64104%2029.1097%206.27945%2029.1097H7.40356H7.50356V29.0097V20.5626C7.50356%209.75405%2015.764%200.581119%2026.3963%200.118872L26.3964%200.11887C29.8817%20-0.0347026%2033.345%200.751297%2036.4339%202.39701C39.5229%204.04273%2042.1274%206.48949%2043.9823%209.48854L43.9828%209.48932C44.1975%209.82945%2044.3362%2010.2133%2044.3889%2010.6138C44.4417%2011.0144%2044.4072%2011.4218%2044.2881%2011.8073C44.1689%2012.1928%2043.968%2012.5471%2043.6994%2012.8451C43.431%2013.143%2043.1015%2013.3774%2042.7343%2013.5321C42.7342%2013.5321%2042.7341%2013.5321%2042.734%2013.5322L42.4278%2013.6596C42.4276%2013.6597%2042.4274%2013.6598%2042.4273%2013.6598C41.8271%2013.9016%2041.1622%2013.9208%2040.5496%2013.7139C39.9367%2013.507%2039.4151%2013.0871%2039.077%2012.5277L39.0762%2012.5264C37.7554%2010.4162%2035.9093%208.69673%2033.724%207.54181C31.5388%206.3869%2029.0919%205.83744%2026.6303%205.949C19.0733%206.28687%2013.2501%2012.8729%2013.2501%2020.5387V29.0097ZM33.291%2062.4359H33.4268L33.3865%2062.3062L30.2816%2052.2987C31.4411%2051.6324%2032.3557%2050.6005%2032.8858%2049.3588C33.4267%2048.092%2033.5369%2046.6787%2033.199%2045.3415C32.8611%2044.0043%2032.0943%2042.8189%2031.0191%2041.9722C29.9438%2041.1256%2028.6214%2040.6659%2027.26%2040.6659C25.8987%2040.6659%2024.5762%2041.1256%2023.501%2041.9722C22.4257%2042.8189%2021.659%2044.0043%2021.3211%2045.3415C20.9832%2046.6787%2021.0933%2048.092%2021.6342%2049.3588C22.1643%2050.6005%2023.0789%2051.6324%2024.2385%2052.2987L21.1337%2062.3062L21.0935%2062.4359H21.2292H33.291Z'%20fill='url(%23paint0_linear_318_755)'%20stroke='%23383434'%20stroke-width='0.2'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_318_755'%20x1='27.2601'%20y1='0'%20x2='27.2601'%20y2='74.0917'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%236F6363'/%3e%3cstop%20offset='1'%20stop-color='%238A8A8A'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
                class: "h-20 object-cover",
                "data-v-inspector": "components/templates/PasswordRecoveryTemplate.vue:37:9"
              }, null, -1 /* HOISTED */))
            ]))
          : (_openBlock(), _createElementBlock("div", _hoisted_8, [
              _createVNode($setup["PasswordField"], {
                "validate-input": true,
                "data-cy": "password-field"
              }),
              _createVNode($setup["PasswordField"], {
                placeholder: "Confirm Password",
                "validate-input": true,
                "data-cy": "password-field"
              })
            ])),
        _createVNode($setup["Button"], {
          label: 
          $props.showPasswordRecoverySection ? 'Send Link' : 'Create New Password'
        ,
          "data-cy": "btn",
          "is-loading": $setup.appState.isLoading,
          "on-click": $setup.handleClick
        }, null, 8 /* PROPS */, ["label", "is-loading"])
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "2e7b40ec"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/templates/PasswordRecoveryTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,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RTtnQkFGQSxHQUFHLEVBQUMsd25GQUF3bkY7Z0JBQzVuRixLQUFLLEVBQUMsbUJBQW1CO2dCQUFDLGtCQUFnQixFQUFDLHdEQUF3RDs7OzJCQUl2RyxvQkFPTSxPQVBOLFVBT007Y0FOSixhQUFpRTtnQkFBakQsZ0JBQWMsRUFBRSxJQUFJO2dCQUFFLFNBQU8sRUFBQyxnQkFBZ0I7O2NBQzlELGFBSUU7Z0JBSEEsV0FBVyxFQUFDLGtCQUFrQjtnQkFDN0IsZ0JBQWMsRUFBRSxJQUFJO2dCQUNyQixTQUFPLEVBQUMsZ0JBQWdCOzs7UUFJNUIsYUFPRTtVQU5DLEtBQUs7VUFBYSxrQ0FBMkI7O1VBRzlDLFNBQU8sRUFBQyxLQUFLO1VBQ1osWUFBVSxFQUFFLGVBQVEsQ0FBQyxTQUFTO1VBQzlCLFVBQVEsRUFBRSxrQkFBVyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbmNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWJsYWNrIFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9QYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjI6M1wiICA+XG4gICAgICA8ZGl2IGNsYXNzPVwidy1bMjN2d10gcC04IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJvcmRlciAgYm9yZGVyLXdoaXRlLzIwIGJnLWJsYWNrIHJvdW5kZWQgc2hhZG93LWxnXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6NDo3XCI+XG4gICAgICA8TG9naW5IZWFkZXJcbiAgICAgIDpvbkNsaWNrSGFuZGxlcj1cIm9uQmFja1wiXG4gICAgICA6c2hvdy1iYWNrLWljb249XCJzaG93UGFzc3dvcmRSZWNvdmVyeVNlY3Rpb25cIlxuICAgIC8+XG4gICAgPExvZ2luQmFubmVyXG4gICAgICB0aXRsZT1cIkFkZCBhIG5ldyBwYXNzd29yZFwiXG4gICAgICBzdWJ0aXRsZT1cIllvdXIgYWNjb3VudCB1c2VzXG5nb29nbGUgU2lnbi1pbi5cbkFkZCBhIG5ldyBwYXNzd29yZC5cIlxuICAgICAgOmltZ1NyYz1cImdvb2dsZUltZ1NyY1wiXG4gICAgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbCBweC02XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6MTc6NVwiPlxuICAgICAgPGRpdiB2LWlmPVwic2hvd1Bhc3N3b3JkUmVjb3ZlcnlTZWN0aW9uXCIgY2xhc3M9XCJsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZS83MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9QYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjE4OjdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlLzcwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6MTk6OVwiPlxuICAgICAgICAgIFJlY292ZXJ5IGxpbmsgc2VudCB0bzpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzIGZvbnQtbGlnaHQgaXRhbGljXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6MjI6OVwiPnt7IGVtYWlsIH19PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwic2hvd1Bhc3N3b3JkUmVjb3ZlcnlTZWN0aW9uXCJcbiAgICAgICAgY2xhc3M9XCJmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC02XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6MjU6N1wiXG4gICAgICA+XG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYWxhZGlhLnBuZ1wiIGNsYXNzPVwiaC0yMCB3LTIwIG9iamVjdC1jb3ZlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9QYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjI5OjlcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTNcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlLnZ1ZTozMDo5XCI+XG4gICAgICAgICAgPGZvbnQtYXdlc29tZSBpY29uPVwiYXJyb3ctcmlnaHRcIiBjbGFzcz1cInRleHQteGxcIiAvPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmclMjB3aWR0aD0nNDgnJTIwaGVpZ2h0PSczNCclMjB2aWV3Qm94PScwJTIwMCUyMDQ4JTIwMzQnJTIwZmlsbD0nbm9uZSclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjZyUyMGlkPSdHcm91cCUyMDIyJyUyMG9wYWNpdHk9JzAuNiclM2UlM2NwYXRoJTIwaWQ9J1VuaW9uJyUyMGZpbGwtcnVsZT0nZXZlbm9kZCclMjBjbGlwLXJ1bGU9J2V2ZW5vZGQnJTIwZD0nTTM3LjMwOSUyMDMuODg1TDIzLjczOTclMjAxOC44NDEzTDEwLjE3MDQlMjAzLjg4NUgzNy4zMDlaTTQxLjM1OTclMjAzLjg4NUM0MS4zMjg2JTIwMy45MTkyOSUyMDQxLjI5NzElMjAzLjk1Mzk5JTIwNDEuMjY1MiUyMDMuOTg5MTNMMjUuMjIwOSUyMDIxLjY3MzRDMjQuNTI4OCUyMDIyLjQzNjMlMjAyNC4xODI3JTIwMjIuODE3NyUyMDIzLjczOTclMjAyMi44MTc3QzIzLjI5NjclMjAyMi44MTc3JTIwMjIuOTUwNyUyMDIyLjQzNjMlMjAyMi4yNTg1JTIwMjEuNjczNEw2LjIxNDIxJTIwMy45ODkxM0w2LjIxNDE5JTIwMy45ODkxMUM2LjE4MjMyJTIwMy45NTM5OCUyMDYuMTUwODMlMjAzLjkxOTI4JTIwNi4xMTk3NSUyMDMuODg1SDUuMzYwMjNDNC4yNTU2NiUyMDMuODg1JTIwMy4zNjAyMyUyMDQuNzgwNDMlMjAzLjM2MDIzJTIwNS44ODVWMjguNjE3MkMzLjM2MDIzJTIwMjkuNzIxOCUyMDQuMjU1NjYlMjAzMC42MTcyJTIwNS4zNjAyMiUyMDMwLjYxNzJINDIuMTIwNkM0My4yMjUxJTIwMzAuNjE3MiUyMDQ0LjEyMDYlMjAyOS43MjE4JTIwNDQuMTIwNiUyMDI4LjYxNzJWNS44ODVDNDQuMTIwNiUyMDQuNzgwNDMlMjA0My4yMjUxJTIwMy44ODUlMjA0Mi4xMjA2JTIwMy44ODVINDEuMzU5N1pNNDIuNjUxOCUyMDAuOTEyODkzQzQ1LjE2MzUlMjAxLjE3ODE1JTIwNDcuMTIwNiUyMDMuMzAzMDIlMjA0Ny4xMjA2JTIwNS44ODVWMjguNjE3MkM0Ny4xMjA2JTIwMzEuMzc4NyUyMDQ0Ljg4MiUyMDMzLjYxNzIlMjA0Mi4xMjA2JTIwMzMuNjE3Mkg1LjM2MDIyQzIuNTk4OCUyMDMzLjYxNzIlMjAwLjM2MDIyOSUyMDMxLjM3ODclMjAwLjM2MDIyOSUyMDI4LjYxNzJWNS44ODVDMC4zNjAyMjklMjAzLjMwMzYlMjAyLjMxNjQ1JTIwMS4xNzkxJTIwNC44MjczMSUyMDAuOTEzMDY4QzUuMjQ3OTclMjAwLjY3MTIwNCUyMDYuMDM2MjglMjAwLjY0Nzc4JTIwNy4yNzk2MiUyMDAuNjQ1NTExTDcuMjg1MTQlMjAwLjY0NTQ5OUM3LjQxNjc3JTIwMC42NDUyNjclMjA3LjU1MzUxJTIwMC42NDUyNjYlMjA3LjY5NTQzJTIwMC42NDUyNjZMMzkuNzg0JTIwMC42NDUyNjRDMzkuOTI1OSUyMDAuNjQ1MjY0JTIwNDAuMDYyNiUyMDAuNjQ1MjY0JTIwNDAuMTk0MyUyMDAuNjQ1NDk2TDQwLjE5OTglMjAwLjY0NTUwOEM0MS40NDI4JTIwMC42NDc3NzYlMjA0Mi4yMzExJTIwMC42NzExOSUyMDQyLjY1MTglMjAwLjkxMjg5M1onJTIwZmlsbD0ndXJsKCUyM3BhaW50MF9saW5lYXJfMzE4Xzc1MSknLyUzZSUzYy9nJTNlJTNjZGVmcyUzZSUzY2xpbmVhckdyYWRpZW50JTIwaWQ9J3BhaW50MF9saW5lYXJfMzE4Xzc1MSclMjB4MT0nMjMuOTk5OSclMjB5MT0nMC45OTk4NzgnJTIweDI9JzIzLjk5OTknJTIweTI9JzM5LjQ5OTknJTIwZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnJTNlJTNjc3RvcCUyMHN0b3AtY29sb3I9JyUyMzM3MzMzMycvJTNlJTNjc3RvcCUyMG9mZnNldD0nMSclMjBzdG9wLWNvbG9yPSclMjM3QzdDN0MnJTIwc3RvcC1vcGFjaXR5PScwJy8lM2UlM2MvbGluZWFyR3JhZGllbnQlM2UlM2MvZGVmcyUzZSUzYy9zdmclM2VcIlxuICAgICAgICAgICAgY2xhc3M9XCJoLTEwIG9iamVjdC1jb250YWluXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVjb3ZlcnlUZW1wbGF0ZS52dWU6MzI6MTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyUyMHdpZHRoPSc1NSclMjBoZWlnaHQ9Jzc1JyUyMHZpZXdCb3g9JzAlMjAwJTIwNTUlMjA3NSclMjBmaWxsPSdub25lJyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoJTIwaWQ9J1ZlY3RvciclMjBvcGFjaXR5PScwLjYnJTIwZD0nTTEzLjI1MDElMjAyOS4wMDk3VjI5LjEwOTdIMTMuMzUwMUg0OC4yNDExQzQ5LjA1MjMlMjAyOS4xMDk3JTIwNDkuODU1NyUyMDI5LjI3MTklMjA1MC42MDUzJTIwMjkuNTg2OUM1MS4zNTQ5JTIwMjkuOTAyJTIwNTIuMDM2MSUyMDMwLjM2MzklMjA1Mi42MDk5JTIwMzAuOTQ2M0M1My4xODM4JTIwMzEuNTI4NiUyMDUzLjYzOTElMjAzMi4yMjAxJTIwNTMuOTQ5NyUyMDMyLjk4MTJDNTQuMjYwNCUyMDMzLjc0MjMlMjA1NC40MjAzJTIwMzQuNTU4MSUyMDU0LjQyMDMlMjAzNS4zODE5VjY3LjcxOTRDNTQuNDIwMyUyMDY5LjM4MzQlMjA1My43Njg5JTIwNzAuOTc4OSUyMDUyLjYwOTklMjA3Mi4xNTUxQzUxLjQ1MDklMjA3My4zMzEyJTIwNDkuODc5NCUyMDczLjk5MTclMjA0OC4yNDElMjA3My45OTE3SDYuMjc5MThDNC42NDA4MyUyMDczLjk5MTclMjAzLjA2OTI5JTIwNzMuMzMxMiUyMDEuOTEwMzUlMjA3Mi4xNTUxQzAuNzUxMzY5JTIwNzAuOTc4OSUyMDAuMSUyMDY5LjM4MzQlMjAwLjElMjA2Ny43MTk0VjM1LjM4MjJDMC4xJTIwMzMuNzE4MSUyMDAuNzUxMzk5JTIwMzIuMTIyNiUyMDEuOTEwNDQlMjAzMC45NDYzQzMuMDY5NDMlMjAyOS43NzAyJTIwNC42NDEwNCUyMDI5LjEwOTclMjA2LjI3OTQ1JTIwMjkuMTA5N0g3LjQwMzU2SDcuNTAzNTZWMjkuMDA5N1YyMC41NjI2QzcuNTAzNTYlMjA5Ljc1NDA1JTIwMTUuNzY0JTIwMC41ODExMTklMjAyNi4zOTYzJTIwMC4xMTg4NzJMMjYuMzk2NCUyMDAuMTE4ODdDMjkuODgxNyUyMC0wLjAzNDcwMjYlMjAzMy4zNDUlMjAwLjc1MTI5NyUyMDM2LjQzMzklMjAyLjM5NzAxQzM5LjUyMjklMjA0LjA0MjczJTIwNDIuMTI3NCUyMDYuNDg5NDklMjA0My45ODIzJTIwOS40ODg1NEw0My45ODI4JTIwOS40ODkzMkM0NC4xOTc1JTIwOS44Mjk0NSUyMDQ0LjMzNjIlMjAxMC4yMTMzJTIwNDQuMzg4OSUyMDEwLjYxMzhDNDQuNDQxNyUyMDExLjAxNDQlMjA0NC40MDcyJTIwMTEuNDIxOCUyMDQ0LjI4ODElMjAxMS44MDczQzQ0LjE2ODklMjAxMi4xOTI4JTIwNDMuOTY4JTIwMTIuNTQ3MSUyMDQzLjY5OTQlMjAxMi44NDUxQzQzLjQzMSUyMDEzLjE0MyUyMDQzLjEwMTUlMjAxMy4zNzc0JTIwNDIuNzM0MyUyMDEzLjUzMjFDNDIuNzM0MiUyMDEzLjUzMjElMjA0Mi43MzQxJTIwMTMuNTMyMSUyMDQyLjczNCUyMDEzLjUzMjJMNDIuNDI3OCUyMDEzLjY1OTZDNDIuNDI3NiUyMDEzLjY1OTclMjA0Mi40Mjc0JTIwMTMuNjU5OCUyMDQyLjQyNzMlMjAxMy42NTk4QzQxLjgyNzElMjAxMy45MDE2JTIwNDEuMTYyMiUyMDEzLjkyMDglMjA0MC41NDk2JTIwMTMuNzEzOUMzOS45MzY3JTIwMTMuNTA3JTIwMzkuNDE1MSUyMDEzLjA4NzElMjAzOS4wNzclMjAxMi41Mjc3TDM5LjA3NjIlMjAxMi41MjY0QzM3Ljc1NTQlMjAxMC40MTYyJTIwMzUuOTA5MyUyMDguNjk2NzMlMjAzMy43MjQlMjA3LjU0MTgxQzMxLjUzODglMjA2LjM4NjklMjAyOS4wOTE5JTIwNS44Mzc0NCUyMDI2LjYzMDMlMjA1Ljk0OUMxOS4wNzMzJTIwNi4yODY4NyUyMDEzLjI1MDElMjAxMi44NzI5JTIwMTMuMjUwMSUyMDIwLjUzODdWMjkuMDA5N1pNMzMuMjkxJTIwNjIuNDM1OUgzMy40MjY4TDMzLjM4NjUlMjA2Mi4zMDYyTDMwLjI4MTYlMjA1Mi4yOTg3QzMxLjQ0MTElMjA1MS42MzI0JTIwMzIuMzU1NyUyMDUwLjYwMDUlMjAzMi44ODU4JTIwNDkuMzU4OEMzMy40MjY3JTIwNDguMDkyJTIwMzMuNTM2OSUyMDQ2LjY3ODclMjAzMy4xOTklMjA0NS4zNDE1QzMyLjg2MTElMjA0NC4wMDQzJTIwMzIuMDk0MyUyMDQyLjgxODklMjAzMS4wMTkxJTIwNDEuOTcyMkMyOS45NDM4JTIwNDEuMTI1NiUyMDI4LjYyMTQlMjA0MC42NjU5JTIwMjcuMjYlMjA0MC42NjU5QzI1Ljg5ODclMjA0MC42NjU5JTIwMjQuNTc2MiUyMDQxLjEyNTYlMjAyMy41MDElMjA0MS45NzIyQzIyLjQyNTclMjA0Mi44MTg5JTIwMjEuNjU5JTIwNDQuMDA0MyUyMDIxLjMyMTElMjA0NS4zNDE1QzIwLjk4MzIlMjA0Ni42Nzg3JTIwMjEuMDkzMyUyMDQ4LjA5MiUyMDIxLjYzNDIlMjA0OS4zNTg4QzIyLjE2NDMlMjA1MC42MDA1JTIwMjMuMDc4OSUyMDUxLjYzMjQlMjAyNC4yMzg1JTIwNTIuMjk4N0wyMS4xMzM3JTIwNjIuMzA2MkwyMS4wOTM1JTIwNjIuNDM1OUgyMS4yMjkySDMzLjI5MVonJTIwZmlsbD0ndXJsKCUyM3BhaW50MF9saW5lYXJfMzE4Xzc1NSknJTIwc3Ryb2tlPSclMjMzODM0MzQnJTIwc3Ryb2tlLXdpZHRoPScwLjInLyUzZSUzY2RlZnMlM2UlM2NsaW5lYXJHcmFkaWVudCUyMGlkPSdwYWludDBfbGluZWFyXzMxOF83NTUnJTIweDE9JzI3LjI2MDEnJTIweTE9JzAnJTIweDI9JzI3LjI2MDEnJTIweTI9Jzc0LjA5MTcnJTIwZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnJTNlJTNjc3RvcCUyMHN0b3AtY29sb3I9JyUyMzZGNjM2MycvJTNlJTNjc3RvcCUyMG9mZnNldD0nMSclMjBzdG9wLWNvbG9yPSclMjM4QThBOEEnJTIwc3RvcC1vcGFjaXR5PScwJy8lM2UlM2MvbGluZWFyR3JhZGllbnQlM2UlM2MvZGVmcyUzZSUzYy9zdmclM2VcIlxuICAgICAgICAgIGNsYXNzPVwiaC0yMCBvYmplY3QtY292ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlLnZ1ZTozNzo5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImZsZXggZmxleC0xIGZsZXgtY29sIGdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9QYXNzd29yZFJlY292ZXJ5VGVtcGxhdGUudnVlOjQzOjdcIj5cbiAgICAgICAgPFBhc3N3b3JkRmllbGQgOnZhbGlkYXRlLWlucHV0PVwidHJ1ZVwiIGRhdGEtY3k9XCJwYXNzd29yZC1maWVsZFwiIC8+XG4gICAgICAgIDxQYXNzd29yZEZpZWxkXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICA6dmFsaWRhdGUtaW5wdXQ9XCJ0cnVlXCJcbiAgICAgICAgICBkYXRhLWN5PVwicGFzc3dvcmQtZmllbGRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgOmxhYmVsPVwiXG4gICAgICAgICAgc2hvd1Bhc3N3b3JkUmVjb3ZlcnlTZWN0aW9uID8gJ1NlbmQgTGluaycgOiAnQ3JlYXRlIE5ldyBQYXNzd29yZCdcbiAgICAgICAgXCJcbiAgICAgICAgZGF0YS1jeT1cImJ0blwiXG4gICAgICAgIDppcy1sb2FkaW5nPVwiYXBwU3RhdGUuaXNMb2FkaW5nXCJcbiAgICAgICAgOm9uLWNsaWNrPVwiaGFuZGxlQ2xpY2tcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IExvZ2luSGVhZGVyIGZyb20gXCIuLi9hdG9tcy9Mb2dpbkhlYWRlci52dWVcIjtcbmltcG9ydCBMb2dpbkJhbm5lciBmcm9tIFwiLi4vbW9sZWN1bGVzL0xvZ2luQmFubmVyLnZ1ZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYXRvbXMvQnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcbmltcG9ydCBQYXNzd29yZEZpZWxkIGZyb20gXCIuLi9tb2xlY3VsZXMvUGFzc3dvcmRGaWVsZC52dWVcIjtcblxuY29uc3QgYXBwU3RhdGUgPSB1c2VBcHBTdGF0ZSgpO1xuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IFwiYmVyZWtldC50c2VnYXllQGdtYWlsLmNvbVwiLFxuICB9LFxuICBzaG93UGFzc3dvcmRSZWNvdmVyeVNlY3Rpb246IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxufSk7XG5cbmNvbnN0IG9uQmFjayA9ICgpID0+IHtcbiAgYXBwU3RhdGUuc2hvd0VtYWlsRmllbGQoKTtcbn07XG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICBcbiAgYXBwU3RhdGUuc2V0TG9hZGluZyh0cnVlKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBhcHBTdGF0ZS5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBpZiAocHJvcHMuc2hvd1Bhc3N3b3JkUmVjb3ZlcnlTZWN0aW9uKSB7XG4gICAgICBhcHBTdGF0ZS5zaG93UGFzc3dvcmRTZXRGaWVsZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBTdGF0ZS5sb2dpbigpO1xuICAgIH1cbiAgfSwgMjAwMCk7XG59O1xuXG5jb25zdCBnb29nbGVJbWdTcmMgPVxuICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jMS9Hb29nbGVfJTIyRyUyMl9sb2dvLnN2Z1wiO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2JlcmVrZXQvRGVza3RvcC9zdWJtaXNzaW9uL0FsYWRpYS1mcm9udGVuZC1zZWxlY3Rpb24vYWxhZGlhLW51eHQtdGFza3MvY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFzc3dvcmRSZWNvdmVyeVRlbXBsYXRlLnZ1ZSJ9