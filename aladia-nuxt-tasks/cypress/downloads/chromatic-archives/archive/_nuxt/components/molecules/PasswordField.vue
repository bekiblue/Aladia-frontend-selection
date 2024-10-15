import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/PasswordField.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import { ref, watch } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded";
import InputField from "/_nuxt/components/molecules/InputField.vue";
import PasswordStrengthIndicator from "/_nuxt/components/atoms/PasswordStrengthIndicator.vue";
import TextLink from "/_nuxt/components/atoms/TextLink.vue";
import InputIcon from "/_nuxt/components/atoms/InputIcon.vue";

// Define props

const _sfc_main = {
  __name: 'PasswordField',
  props: {
  placeholder: { type: String, default: "Password" },
  validateInput: { type: Boolean, required: false },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

// Reactive data
const password = ref("");
const isPasswordVisible = ref(false);
const passwordStrength = ref(1);
const strengthMessage = ref("");
const progressWidth = ref("0%");

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const checkPasswordStrength = () => {
  const value = password.value;
  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSymbol = /[@$!%*?&]/.test(value);
  const isLongEnough = value.length >= 8;

  if (!isLongEnough) {
    strengthMessage.value = "8 character minimum";
    progressWidth.value = "20%";
    passwordStrength.value = 1;
  } else if (!hasUpperCase) {
    strengthMessage.value = "Upper case letter required";
    progressWidth.value = "40%";
    passwordStrength.value = 2;
  } else if (!hasNumber) {
    strengthMessage.value = "Number required";
    progressWidth.value = "60%";
    passwordStrength.value = 3;
  } else if (!hasSymbol) {
    strengthMessage.value = "Symbol required (@$!%*?&)";
    progressWidth.value = "80%";
    passwordStrength.value = 4;
  } else {
    strengthMessage.value = "Strong password";
    progressWidth.value = "100%";
    passwordStrength.value = 5;
  }
};

// Watch for password input changes
watch(password, checkPasswordStrength);

const __returned__ = { props, password, isPasswordVisible, passwordStrength, strengthMessage, progressWidth, togglePasswordVisibility, checkPasswordStrength, ref, watch, InputField, PasswordStrengthIndicator, TextLink, InputIcon }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  normalizeClass as _normalizeClass,  openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  class: "w-full",
  "data-v-inspector": "components/molecules/PasswordField.vue:2:3"
}
const _hoisted_2 = {
  class: "relative mb-1 flex h-10 w-full items-center",
  "data-v-inspector": "components/molecules/PasswordField.vue:3:5"
}
const _hoisted_3 = {
  key: 1,
  class: "mb-4 flex justify-end text-xs",
  "data-v-inspector": "components/molecules/PasswordField.vue:33:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["InputField"], {
        type: $setup.isPasswordVisible ? 'text' : 'password',
        placeholder: $props.placeholder,
        icon: 'fa-key',
        inputValue: $setup.password,
        "onUpdate:inputValue": _cache[0] || (_cache[0] = $event => ($setup.password = $event)),
        "custom-style": 'mb-0'
      }, null, 8 /* PROPS */, ["type", "placeholder", "inputValue"]),
      _createElementVNode("i", {
        onClick: $setup.togglePasswordVisibility,
        class: "absolute right-3 top-2 cursor-pointer",
        "data-v-inspector": "components/molecules/PasswordField.vue:13:7"
      }, [
        _createVNode($setup["InputIcon"], {
          class: _normalizeClass([
            'cursor-pointer text-base text-black/50 transition-all active:scale-90',
          ]),
          icon: $setup.isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'
        }, null, 8 /* PROPS */, ["icon"])
      ])
    ]),
    ($props.validateInput)
      ? (_openBlock(), _createBlock($setup["PasswordStrengthIndicator"], {
          key: 0,
          strength: $setup.passwordStrength,
          message: $setup.strengthMessage,
          progressWidth: $setup.progressWidth
        }, null, 8 /* PROPS */, ["strength", "message", "progressWidth"]))
      : _createCommentVNode("v-if", true),
    (!$props.validateInput)
      ? (_openBlock(), _createElementBlock("div", _hoisted_3, [
          _createVNode($setup["TextLink"], {
            text: "Forgot password?",
            error: false,
            isUnderlined: true
          })
        ]))
      : _createCommentVNode("v-if", true)
  ]))
}


_sfc_main.__hmrId = "4fa63aa2"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/molecules/PasswordField.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF1Q0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyRCxNQUFNLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9FLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0M7QUFDQSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzs7Ozs7Ozs7OztBQVBEO0FBUWQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FHWixDQUFDO0FBQ0g7QUFDQSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSTtBQUNoQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QixLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEM7QUFDQSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7QUFDckQsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7QUFDL0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekM7QUFDQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPO0FBQ25DLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztFQTVGaEMsS0FBSyxFQUFDLFFBQVE7RUFBQyxrQkFBZ0IsRUFBQyw0Q0FBNEM7OztFQUMxRSxLQUFLLEVBQUMsNkNBQTZDO0VBQUMsa0JBQWdCLEVBQUMsNENBQTRDOzs7RUFGMUg7RUFnQytCLEtBQUssRUFBQywrQkFBK0I7RUFBQyxrQkFBZ0IsRUFBQyw2Q0FBNkM7Ozs7d0JBL0JqSSxvQkFrQ00sT0FsQ04sVUFrQ007SUFqQ0osb0JBcUJNLE9BckJOLFVBcUJNO01BcEJKLGFBT0U7UUFOQyxJQUFJLEVBQUUsd0JBQWlCO1FBQ3ZCLFdBQVcsRUFBRSxrQkFBVztRQUN4QixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSxlQUFRO1FBQ3BCLHFCQUFpQix1Q0FBRSxlQUFRLEdBQUcsTUFBTTtRQUNwQyxjQUFZLEVBQUUsTUFBTTs7TUFHdkIsb0JBVUk7UUFURCxPQUFLLEVBQUUsK0JBQXdCO1FBQ2hDLEtBQUssRUFBQyx1Q0FBdUM7UUFBQyxrQkFBZ0IsRUFBQyw2Q0FBNkM7O1FBRTVHLGFBS0U7VUFKQyxLQUFLLEVBakJoQixnQkFpQmtCOztXQUVQO1VBQ0EsSUFBSSxFQUFFLHdCQUFpQjs7OztLQU10QixvQkFBYTt1QkFEckIsYUFLRTtVQTlCTjtVQTJCTyxRQUFRLEVBQUUsdUJBQWdCO1VBQzFCLE9BQU8sRUFBRSxzQkFBZTtVQUN4QixhQUFhLEVBQUUsb0JBQWE7O1FBN0JuQztNQWdDZ0Isb0JBQWE7dUJBQXpCLG9CQUVNLE9BRk4sVUFFTTtVQURKLGFBQXdFO1lBQTlELElBQUksRUFBQyxrQkFBa0I7WUFBRSxLQUFLLEVBQUUsS0FBSztZQUFHLFlBQVksRUFBRSxJQUFJOzs7UUFqQzFFIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQYXNzd29yZEZpZWxkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvUGFzc3dvcmRGaWVsZC52dWU6MjozXCI+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIG1iLTEgZmxleCBoLTEwIHctZnVsbCBpdGVtcy1jZW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvUGFzc3dvcmRGaWVsZC52dWU6Mzo1XCI+XG4gICAgICA8SW5wdXRGaWVsZFxuICAgICAgICA6dHlwZT1cImlzUGFzc3dvcmRWaXNpYmxlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1wiXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgOmljb249XCInZmEta2V5J1wiXG4gICAgICAgIDppbnB1dFZhbHVlPVwicGFzc3dvcmRcIlxuICAgICAgICBAdXBkYXRlOmlucHV0VmFsdWU9XCJwYXNzd29yZCA9ICRldmVudFwiXG4gICAgICAgIDpjdXN0b20tc3R5bGU9XCInbWItMCdcIlxuICAgICAgLz5cblxuICAgICAgPGlcbiAgICAgICAgQGNsaWNrPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5XCJcbiAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZSByaWdodC0zIHRvcC0yIGN1cnNvci1wb2ludGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL1Bhc3N3b3JkRmllbGQudnVlOjEzOjdcIlxuICAgICAgPlxuICAgICAgICA8SW5wdXRJY29uXG4gICAgICAgICAgOmNsYXNzPVwiW1xuICAgICAgICAgICAgJ2N1cnNvci1wb2ludGVyIHRleHQtYmFzZSB0ZXh0LWJsYWNrLzUwIHRyYW5zaXRpb24tYWxsIGFjdGl2ZTpzY2FsZS05MCcsXG4gICAgICAgICAgXVwiXG4gICAgICAgICAgOmljb249XCJpc1Bhc3N3b3JkVmlzaWJsZSA/ICdmYS1leWUnIDogJ2ZhLWV5ZS1zbGFzaCdcIlxuICAgICAgICAvPlxuICAgICAgPC9pPlxuICAgIDwvZGl2PlxuXG4gICAgPFBhc3N3b3JkU3RyZW5ndGhJbmRpY2F0b3JcbiAgICAgIHYtaWY9XCJ2YWxpZGF0ZUlucHV0XCJcbiAgICAgIDpzdHJlbmd0aD1cInBhc3N3b3JkU3RyZW5ndGhcIlxuICAgICAgOm1lc3NhZ2U9XCJzdHJlbmd0aE1lc3NhZ2VcIlxuICAgICAgOnByb2dyZXNzV2lkdGg9XCJwcm9ncmVzc1dpZHRoXCJcbiAgICAvPlxuXG4gICAgPGRpdiB2LWlmPVwiIXZhbGlkYXRlSW5wdXRcIiBjbGFzcz1cIm1iLTQgZmxleCBqdXN0aWZ5LWVuZCB0ZXh0LXhzXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL1Bhc3N3b3JkRmllbGQudnVlOjMzOjVcIj5cbiAgICAgIDxUZXh0TGluayB0ZXh0PVwiRm9yZ290IHBhc3N3b3JkP1wiIDplcnJvcj1cImZhbHNlXCIgOmlzVW5kZXJsaW5lZD1cInRydWVcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4uL21vbGVjdWxlcy9JbnB1dEZpZWxkLnZ1ZVwiO1xuaW1wb3J0IFBhc3N3b3JkU3RyZW5ndGhJbmRpY2F0b3IgZnJvbSBcIi4uL2F0b21zL1Bhc3N3b3JkU3RyZW5ndGhJbmRpY2F0b3IudnVlXCI7XG5pbXBvcnQgVGV4dExpbmsgZnJvbSBcIi4uL2F0b21zL1RleHRMaW5rLnZ1ZVwiO1xuaW1wb3J0IElucHV0SWNvbiBmcm9tIFwiLi4vYXRvbXMvSW5wdXRJY29uLnZ1ZVwiO1xuXG4vLyBEZWZpbmUgcHJvcHNcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICBwbGFjZWhvbGRlcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiUGFzc3dvcmRcIiB9LFxuICB2YWxpZGF0ZUlucHV0OiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiBmYWxzZSB9LFxufSk7XG5cbi8vIFJlYWN0aXZlIGRhdGFcbmNvbnN0IHBhc3N3b3JkID0gcmVmKFwiXCIpO1xuY29uc3QgaXNQYXNzd29yZFZpc2libGUgPSByZWYoZmFsc2UpO1xuY29uc3QgcGFzc3dvcmRTdHJlbmd0aCA9IHJlZigxKTtcbmNvbnN0IHN0cmVuZ3RoTWVzc2FnZSA9IHJlZihcIlwiKTtcbmNvbnN0IHByb2dyZXNzV2lkdGggPSByZWYoXCIwJVwiKTtcblxuY29uc3QgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICBpc1Bhc3N3b3JkVmlzaWJsZS52YWx1ZSA9ICFpc1Bhc3N3b3JkVmlzaWJsZS52YWx1ZTtcbn07XG5cbmNvbnN0IGNoZWNrUGFzc3dvcmRTdHJlbmd0aCA9ICgpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBwYXNzd29yZC52YWx1ZTtcbiAgY29uc3QgaGFzVXBwZXJDYXNlID0gL1tBLVpdLy50ZXN0KHZhbHVlKTtcbiAgY29uc3QgaGFzTnVtYmVyID0gL1xcZC8udGVzdCh2YWx1ZSk7XG4gIGNvbnN0IGhhc1N5bWJvbCA9IC9bQCQhJSo/Jl0vLnRlc3QodmFsdWUpO1xuICBjb25zdCBpc0xvbmdFbm91Z2ggPSB2YWx1ZS5sZW5ndGggPj0gODtcblxuICBpZiAoIWlzTG9uZ0Vub3VnaCkge1xuICAgIHN0cmVuZ3RoTWVzc2FnZS52YWx1ZSA9IFwiOCBjaGFyYWN0ZXIgbWluaW11bVwiO1xuICAgIHByb2dyZXNzV2lkdGgudmFsdWUgPSBcIjIwJVwiO1xuICAgIHBhc3N3b3JkU3RyZW5ndGgudmFsdWUgPSAxO1xuICB9IGVsc2UgaWYgKCFoYXNVcHBlckNhc2UpIHtcbiAgICBzdHJlbmd0aE1lc3NhZ2UudmFsdWUgPSBcIlVwcGVyIGNhc2UgbGV0dGVyIHJlcXVpcmVkXCI7XG4gICAgcHJvZ3Jlc3NXaWR0aC52YWx1ZSA9IFwiNDAlXCI7XG4gICAgcGFzc3dvcmRTdHJlbmd0aC52YWx1ZSA9IDI7XG4gIH0gZWxzZSBpZiAoIWhhc051bWJlcikge1xuICAgIHN0cmVuZ3RoTWVzc2FnZS52YWx1ZSA9IFwiTnVtYmVyIHJlcXVpcmVkXCI7XG4gICAgcHJvZ3Jlc3NXaWR0aC52YWx1ZSA9IFwiNjAlXCI7XG4gICAgcGFzc3dvcmRTdHJlbmd0aC52YWx1ZSA9IDM7XG4gIH0gZWxzZSBpZiAoIWhhc1N5bWJvbCkge1xuICAgIHN0cmVuZ3RoTWVzc2FnZS52YWx1ZSA9IFwiU3ltYm9sIHJlcXVpcmVkIChAJCElKj8mKVwiO1xuICAgIHByb2dyZXNzV2lkdGgudmFsdWUgPSBcIjgwJVwiO1xuICAgIHBhc3N3b3JkU3RyZW5ndGgudmFsdWUgPSA0O1xuICB9IGVsc2Uge1xuICAgIHN0cmVuZ3RoTWVzc2FnZS52YWx1ZSA9IFwiU3Ryb25nIHBhc3N3b3JkXCI7XG4gICAgcHJvZ3Jlc3NXaWR0aC52YWx1ZSA9IFwiMTAwJVwiO1xuICAgIHBhc3N3b3JkU3RyZW5ndGgudmFsdWUgPSA1O1xuICB9XG59O1xuXG4vLyBXYXRjaCBmb3IgcGFzc3dvcmQgaW5wdXQgY2hhbmdlc1xud2F0Y2gocGFzc3dvcmQsIGNoZWNrUGFzc3dvcmRTdHJlbmd0aCk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmVyZWtldC9EZXNrdG9wL3N1Ym1pc3Npb24vQWxhZGlhLWZyb250ZW5kLXNlbGVjdGlvbi9hbGFkaWEtbnV4dC10YXNrcy9jb21wb25lbnRzL21vbGVjdWxlcy9QYXNzd29yZEZpZWxkLnZ1ZSJ9