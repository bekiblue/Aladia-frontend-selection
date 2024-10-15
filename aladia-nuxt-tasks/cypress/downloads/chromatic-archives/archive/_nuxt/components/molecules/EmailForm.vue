import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/EmailForm.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { ref, computed } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded";
import Button from "/_nuxt/components/atoms/Button.vue";
import InputField from "/_nuxt/components/molecules/InputField.vue";
import { useAppState } from "/_nuxt/store/store.ts";


const _sfc_main = {
  __name: 'EmailForm',
  props: {
  onclick: { type: Function, default: () => {} },
  
},
  setup(__props, { expose: __expose }) {
  __expose();

const appState = useAppState();

const props = __props;

const email = ref("");
const emailError = ref("");

const updateEmail = (value) => {
  email.value = value;
  appState.currentEmail = value;
  validateEmail(value);
};

const validateEmail = (value) => {
  if (!value) {
    emailError.value = "Required";
  } else if (!isValidEmail(value)) {
    emailError.value = "Invalid email address";
  } else {
    emailError.value = "";
  }
};

const isValidEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};

const isEmailValid = computed(() => email.value && !emailError.value);

const __returned__ = { appState, props, email, emailError, updateEmail, validateEmail, isValidEmail, isEmailValid, ref, computed, Button, InputField, get useAppState() { return useAppState } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  createCommentVNode as _createCommentVNode,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  class: "space-y-4",
  "data-v-inspector": "components/molecules/EmailForm.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = _createElementVNode("div", {
      class: "mb-6 text-center",
      "data-cy": "email-form-title",
      "data-v-inspector": "components/molecules/EmailForm.vue:3:5"
    }, " Enter your email ", -1 /* HOISTED */)),
    _createCommentVNode(" InputField with data-cy attribute "),
    _createVNode($setup["InputField"], {
      "data-cy": "email-input-field",
      placeholder: "Email Address",
      icon: "fa-envelope",
      error: $setup.emailError,
      inputValue: $setup.email,
      "onUpdate:inputValue": $setup.updateEmail
    }, null, 8 /* PROPS */, ["error", "inputValue"]),
    _createVNode($setup["Button"], {
      "data-cy": "submit-email-button",
      label: "Enter",
      "is-loading": $setup.appState.isLoading,
      "is-disabled": !$setup.isEmailValid,
      onClick: $props.onclick
    }, null, 8 /* PROPS */, ["is-loading", "is-disabled", "onClick"])
  ]))
}


_sfc_main.__hmrId = "c193b1ae"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/molecules/EmailForm.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRDs7Ozs7Ozs7OztBQUxjO0FBTWQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUMvQjtBQUNBLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BR1osQ0FBQztBQUNIO0FBQ0EsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0I7QUFDQSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN0QixDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUM7QUFDRjtBQUNBLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7OztFQTlEL0QsS0FBSyxFQUFDLFdBQVc7RUFBQyxrQkFBZ0IsRUFBQyx3Q0FBd0M7Ozs7d0JBQWhGLG9CQXNCTSxPQXRCTixVQXNCTTs4QkFyQkosb0JBRU07TUFGRCxLQUFLLEVBQUMsa0JBQWtCO01BQUMsU0FBTyxFQUFDLGtCQUFrQjtNQUFDLGtCQUFnQixFQUFDLHdDQUF3QztPQUFDLG9CQUVuSDtJQUVBLDBEQUEwQztJQUMxQyxhQU9FO01BTkEsU0FBTyxFQUFDLG1CQUFtQjtNQUMzQixXQUFXLEVBQUMsZUFBZTtNQUMzQixJQUFJLEVBQUMsYUFBYTtNQUNqQixLQUFLLEVBQUUsaUJBQVU7TUFDakIsVUFBVSxFQUFFLFlBQUs7TUFDakIscUJBQWlCLEVBQUUsa0JBQVc7O0lBR2pDLGFBTUU7TUFMQSxTQUFPLEVBQUMscUJBQXFCO01BQzdCLEtBQUssRUFBQyxPQUFPO01BQ1osWUFBVSxFQUFFLGVBQVEsQ0FBQyxTQUFTO01BQzlCLGFBQVcsR0FBRyxtQkFBWTtNQUMxQixPQUFLLEVBQUUsY0FBTyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRW1haWxGb3JtLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzcGFjZS15LTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvRW1haWxGb3JtLnZ1ZToyOjNcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWItNiB0ZXh0LWNlbnRlclwiIGRhdGEtY3k9XCJlbWFpbC1mb3JtLXRpdGxlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0VtYWlsRm9ybS52dWU6Mzo1XCI+XG4gICAgICBFbnRlciB5b3VyIGVtYWlsXG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIElucHV0RmllbGQgd2l0aCBkYXRhLWN5IGF0dHJpYnV0ZSAtLT5cbiAgICA8SW5wdXRGaWVsZFxuICAgICAgZGF0YS1jeT1cImVtYWlsLWlucHV0LWZpZWxkXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICBpY29uPVwiZmEtZW52ZWxvcGVcIlxuICAgICAgOmVycm9yPVwiZW1haWxFcnJvclwiXG4gICAgICA6aW5wdXRWYWx1ZT1cImVtYWlsXCJcbiAgICAgIEB1cGRhdGU6aW5wdXRWYWx1ZT1cInVwZGF0ZUVtYWlsXCJcbiAgICAvPlxuXG4gICAgPEJ1dHRvblxuICAgICAgZGF0YS1jeT1cInN1Ym1pdC1lbWFpbC1idXR0b25cIlxuICAgICAgbGFiZWw9XCJFbnRlclwiXG4gICAgICA6aXMtbG9hZGluZz1cImFwcFN0YXRlLmlzTG9hZGluZ1wiXG4gICAgICA6aXMtZGlzYWJsZWQ9XCIhaXNFbWFpbFZhbGlkXCJcbiAgICAgIEBjbGljaz1cIm9uY2xpY2tcIlxuICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgY29tcHV0ZWQgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9hdG9tcy9CdXR0b24udnVlXCI7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tIFwiLi9JbnB1dEZpZWxkLnZ1ZVwiO1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcblxuY29uc3QgYXBwU3RhdGUgPSB1c2VBcHBTdGF0ZSgpO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgb25jbGljazogeyB0eXBlOiBGdW5jdGlvbiwgZGVmYXVsdDogKCkgPT4ge30gfSxcbiAgXG59KTtcblxuY29uc3QgZW1haWwgPSByZWYoXCJcIik7XG5jb25zdCBlbWFpbEVycm9yID0gcmVmKFwiXCIpO1xuXG5jb25zdCB1cGRhdGVFbWFpbCA9ICh2YWx1ZSkgPT4ge1xuICBlbWFpbC52YWx1ZSA9IHZhbHVlO1xuICBhcHBTdGF0ZS5jdXJyZW50RW1haWwgPSB2YWx1ZTtcbiAgdmFsaWRhdGVFbWFpbCh2YWx1ZSk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gKHZhbHVlKSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICBlbWFpbEVycm9yLnZhbHVlID0gXCJSZXF1aXJlZFwiO1xuICB9IGVsc2UgaWYgKCFpc1ZhbGlkRW1haWwodmFsdWUpKSB7XG4gICAgZW1haWxFcnJvci52YWx1ZSA9IFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCI7XG4gIH0gZWxzZSB7XG4gICAgZW1haWxFcnJvci52YWx1ZSA9IFwiXCI7XG4gIH1cbn07XG5cbmNvbnN0IGlzVmFsaWRFbWFpbCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XG59O1xuXG5jb25zdCBpc0VtYWlsVmFsaWQgPSBjb21wdXRlZCgoKSA9PiBlbWFpbC52YWx1ZSAmJiAhZW1haWxFcnJvci52YWx1ZSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmVyZWtldC9EZXNrdG9wL3N1Ym1pc3Npb24vQWxhZGlhLWZyb250ZW5kLXNlbGVjdGlvbi9hbGFkaWEtbnV4dC10YXNrcy9jb21wb25lbnRzL21vbGVjdWxlcy9FbWFpbEZvcm0udnVlIn0=