import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/PasswordStrengthIndicator.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { computed } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded";


const _sfc_main = {
  __name: 'PasswordStrengthIndicator',
  props: {
  strength: { type: Number, required: true },
  message: { type: String, required: true },
  progressWidth: { type: String, required: true },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const bgColor = computed(() => {
  switch (props.strength) {
    case 1:
      return "bg-[#da5152]";
    case 2:
      return "bg-[#dc7c56]";
    case 3:
      return "bg-[#e1c361]";
    case 4:
      return "bg-[#e3e469]";
    case 5:
      return "bg-[#49a02f]";
    default:
      return "bg-[#4e4e4e]";
  }
});

const textColor = computed(() => {
  switch (props.strength) {
    case 1:
      return "text-[#E54E4E]";
    case 2:
      return "text-[#dc7c56]";
    case 3:
      return "text-[#e1c361]";
    case 4:
      return "text-[#e3e469]";
    case 5:
      return "text-[#49a02f]";
    default:
      return "text-[#4e4e4e]";
  }
});

const __returned__ = { props, bgColor, textColor, computed }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { toDisplayString as _toDisplayString, normalizeClass as _normalizeClass,  normalizeStyle as _normalizeStyle, openBlock as _openBlock,  } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  class: "flex h-4 w-full items-center justify-between text-xs mb-2",
  "data-v-inspector": "components/atoms/PasswordStrengthIndicator.vue:2:3"
}
const _hoisted_2 = { "data-v-inspector": "components/atoms/PasswordStrengthIndicator.vue:3:5" }
const _hoisted_3 = {
  class: "h-1.5 w-36 rounded bg-[#4e4e4e]",
  "data-v-inspector": "components/atoms/PasswordStrengthIndicator.vue:7:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", {
        class: _normalizeClass($setup.textColor),
        "data-v-inspector": "components/atoms/PasswordStrengthIndicator.vue:4:7"
      }, _toDisplayString($props.message), 3 /* TEXT, CLASS */)
    ]),
    _createElementVNode("div", _hoisted_3, [
      _createElementVNode("div", {
        class: _normalizeClass(["h-full rounded transition-all duration-300", $setup.bgColor]),
        style: _normalizeStyle({ width: $props.progressWidth }),
        "data-cy": "password-strength-indicator",
        "data-v-inspector": "components/atoms/PasswordStrengthIndicator.vue:8:7"
      }, null, 6 /* CLASS, STYLE */)
    ])
  ]))
}


_sfc_main.__hmrId = "aef6e43e"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/atoms/PasswordStrengthIndicator.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQXdCQSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0I7Ozs7Ozs7Ozs7O0FBUmM7QUFDZCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUlaLENBQUM7QUFDSDtBQUdBLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0VBekRJLEtBQUssRUFBQywyREFBMkQ7RUFBQyxrQkFBZ0IsRUFBQyxvREFBb0Q7O3FCQUNySSxrQkFBZ0IsRUFBQyxvREFBb0Q7O0VBSXJFLEtBQUssRUFBQyxpQ0FBaUM7RUFBQyxrQkFBZ0IsRUFBQyxvREFBb0Q7Ozs7d0JBTHBILG9CQWFNLE9BYk4sVUFhTTtJQVpKLG9CQUVNLE9BRk4sVUFFTTtNQURKLG9CQUFpSDtRQUEzRyxLQUFLLEVBSGpCLGdCQUdtQixnQkFBUztRQUFFLGtCQUFnQixFQUFDLG9EQUFvRDswQkFBSSxjQUFPOztJQUcxRyxvQkFPTSxPQVBOLFVBT007TUFOSixvQkFLTztRQUpMLEtBQUssRUFSYixpQkFRYyw0Q0FBNEMsRUFFMUMsY0FBTztRQURkLEtBQUssRUFUZCx5QkFTeUIsb0JBQWE7UUFFOUIsU0FBTyxFQUFDLDZCQUE2QjtRQUFDLGtCQUFnQixFQUFDLG9EQUFvRCIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFzc3dvcmRTdHJlbmd0aEluZGljYXRvci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBoLTQgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvUGFzc3dvcmRTdHJlbmd0aEluZGljYXRvci52dWU6MjozXCI+XG4gICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9QYXNzd29yZFN0cmVuZ3RoSW5kaWNhdG9yLnZ1ZTozOjVcIj5cbiAgICAgIDxkaXYgOmNsYXNzPVwidGV4dENvbG9yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvUGFzc3dvcmRTdHJlbmd0aEluZGljYXRvci52dWU6NDo3XCI+e3sgbWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImgtMS41IHctMzYgcm91bmRlZCBiZy1bIzRlNGU0ZV1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9QYXNzd29yZFN0cmVuZ3RoSW5kaWNhdG9yLnZ1ZTo3OjVcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJoLWZ1bGwgcm91bmRlZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBwcm9ncmVzc1dpZHRoIH1cIlxuICAgICAgICA6Y2xhc3M9XCJiZ0NvbG9yXCJcbiAgICAgICAgZGF0YS1jeT1cInBhc3N3b3JkLXN0cmVuZ3RoLWluZGljYXRvclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL1Bhc3N3b3JkU3RyZW5ndGhJbmRpY2F0b3IudnVlOjg6N1wiXG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICBzdHJlbmd0aDogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIG1lc3NhZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBwcm9ncmVzc1dpZHRoOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IGJnQ29sb3IgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHN3aXRjaCAocHJvcHMuc3RyZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gXCJiZy1bI2RhNTE1Ml1cIjtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gXCJiZy1bI2RjN2M1Nl1cIjtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gXCJiZy1bI2UxYzM2MV1cIjtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gXCJiZy1bI2UzZTQ2OV1cIjtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gXCJiZy1bIzQ5YTAyZl1cIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiYmctWyM0ZTRlNGVdXCI7XG4gIH1cbn0pO1xuXG5jb25zdCB0ZXh0Q29sb3IgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHN3aXRjaCAocHJvcHMuc3RyZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gXCJ0ZXh0LVsjRTU0RTRFXVwiO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBcInRleHQtWyNkYzdjNTZdXCI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFwidGV4dC1bI2UxYzM2MV1cIjtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gXCJ0ZXh0LVsjZTNlNDY5XVwiO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBcInRleHQtWyM0OWEwMmZdXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcInRleHQtWyM0ZTRlNGVdXCI7XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2JlcmVrZXQvRGVza3RvcC9zdWJtaXNzaW9uL0FsYWRpYS1mcm9udGVuZC1zZWxlY3Rpb24vYWxhZGlhLW51eHQtdGFza3MvY29tcG9uZW50cy9hdG9tcy9QYXNzd29yZFN0cmVuZ3RoSW5kaWNhdG9yLnZ1ZSJ9