import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/LoginBanner.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock,createElementVNode as __createElementVNode } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import { computed } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded";


const _sfc_main = {
  __name: 'LoginBanner',
  props: {
  imgSrc: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Welcome to Aladia,",
  },
  subtitle: {
    type: String,
    default: "Create or access your account from here",
  },
  borderColor: {
    type: String,
    default: "border-white/20",
  },
  shadow: {
    type:Boolean,
    default: false,
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const resolvedImgSrc = computed(() => {
  return (
    props.imgSrc || new URL("/_nuxt/assets/img/aladia.png", import.meta.url).href
  );
});

const __returned__ = { props, resolvedImgSrc, computed }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { openBlock as _openBlock,  createCommentVNode as _createCommentVNode,  toDisplayString as _toDisplayString, normalizeClass as _normalizeClass } from "/_nuxt/node_modules/.pnpm/vue@3.5.11_typescript@5.6.3/node_modules/vue/dist/vue.runtime.esm-bundler.js?v=1c7e2ded"

const _hoisted_1 = {
  key: 0,
  class: "absolute inset-0 gradient opacity-[0.15]",
  "data-v-inspector": "components/molecules/LoginBanner.vue:8:5"
}
const _hoisted_2 = {
  class: "flex w-32 justify-center",
  "data-v-inspector": "components/molecules/LoginBanner.vue:10:5"
}
const _hoisted_3 = ["src"]
const _hoisted_4 = {
  class: "flex-1",
  "data-v-inspector": "components/molecules/LoginBanner.vue:13:5"
}
const _hoisted_5 = {
  class: "text-base text-gray-200 font-semibold mb-2",
  "data-cy": "banner-title",
  "data-v-inspector": "components/molecules/LoginBanner.vue:14:7"
}
const _hoisted_6 = {
  class: "text-[13px] text-white/70",
  "data-cy": "banner-subtitle",
  "data-v-inspector": "components/molecules/LoginBanner.vue:15:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    class: _normalizeClass([
      'mb-6 flex items-center gap-6 rounded border px-4 py-6',
      $props.borderColor,
    ]),
    "data-v-inspector": "components/molecules/LoginBanner.vue:2:3"
  }, [
    ($props.shadow)
      ? (_openBlock(), _createElementBlock("div", _hoisted_1))
      : _createCommentVNode("v-if", true),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("img", {
        src: $setup.resolvedImgSrc,
        alt: "Logo",
        class: "h-20 w-20 object-cover",
        "data-v-inspector": "components/molecules/LoginBanner.vue:11:7"
      }, null, 8 /* PROPS */, _hoisted_3)
    ]),
    _createElementVNode("div", _hoisted_4, [
      _createElementVNode("p", _hoisted_5, _toDisplayString($props.title), 1 /* TEXT */),
      _createElementVNode("p", _hoisted_6, _toDisplayString($props.subtitle), 1 /* TEXT */)
    ])
  ], 2 /* CLASS */))
}


_sfc_main.__hmrId = "62762e55"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/bereket/Desktop/submission/Aladia-frontend-selection/aladia-nuxt-tasks/components/molecules/LoginBanner.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQXNCQSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGYztBQUdkLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BcUJaLENBQUM7QUFDSDtBQUNBLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUU7QUFDMUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztFQW5ESDtFQU91QixLQUFLLEVBQUMsMENBQTBDO0VBQUMsa0JBQWdCLEVBQUMsMENBQTBDOzs7RUFFMUgsS0FBSyxFQUFDLDBCQUEwQjtFQUFDLGtCQUFnQixFQUFDLDJDQUEyQzs7bUJBVHRHOztFQVlTLEtBQUssRUFBQyxRQUFRO0VBQUMsa0JBQWdCLEVBQUMsMkNBQTJDOzs7RUFDM0UsS0FBSyxFQUFDLDRDQUE0QztFQUFDLFNBQU8sRUFBQyxjQUFjO0VBQUMsa0JBQWdCLEVBQUMsMkNBQTJDOzs7RUFDdEksS0FBSyxFQUFDLDJCQUEyQjtFQUFDLFNBQU8sRUFBQyxpQkFBaUI7RUFBQyxrQkFBZ0IsRUFBQywyQ0FBMkM7Ozs7d0JBYi9ILG9CQWlCTTtJQWhCSCxLQUFLLEVBRlY7O01BRW1GLGtCQUFXOztJQUd2RixrQkFBZ0IsRUFBQywwQ0FBMEM7O0tBRW5ELGFBQU07dUJBQWpCLG9CQUFzSSxPQUF0SSxVQUFzSTtRQVAxSTtJQVNJLG9CQUVNLE9BRk4sVUFFTTtNQURKLG9CQUFvSTtRQUE5SCxHQUFHLEVBQUUscUJBQWM7UUFBRSxHQUFHLEVBQUMsTUFBTTtRQUFDLEtBQUssRUFBQyx3QkFBd0I7UUFBQyxrQkFBZ0IsRUFBQywyQ0FBMkM7OEJBVnZJOztJQVlJLG9CQUtNLE9BTE4sVUFLTTtNQUpKLG9CQUF5SixLQUF6SixVQUF5SixtQkFBWixZQUFLO01BQ2xKLG9CQUVJLEtBRkosVUFFSSxtQkFEQyxlQUFRIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJMb2dpbkJhbm5lci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiW1xuICAgICAgJ21iLTYgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgcm91bmRlZCBib3JkZXIgcHgtNCBweS02JyxcbiAgICAgIGJvcmRlckNvbG9yLFxuICAgIF1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvTG9naW5CYW5uZXIudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2IHYtaWY9XCJzaGFkb3dcIiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgZ3JhZGllbnQgb3BhY2l0eS1bMC4xNV1cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvTG9naW5CYW5uZXIudnVlOjg6NVwiPjwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZsZXggdy0zMiBqdXN0aWZ5LWNlbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9Mb2dpbkJhbm5lci52dWU6MTA6NVwiPlxuICAgICAgPGltZyA6c3JjPVwicmVzb2x2ZWRJbWdTcmNcIiBhbHQ9XCJMb2dvXCIgY2xhc3M9XCJoLTIwIHctMjAgb2JqZWN0LWNvdmVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0xvZ2luQmFubmVyLnZ1ZToxMTo3XCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleC0xXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0xvZ2luQmFubmVyLnZ1ZToxMzo1XCI+XG4gICAgICA8cCBjbGFzcz1cInRleHQtYmFzZSB0ZXh0LWdyYXktMjAwIGZvbnQtc2VtaWJvbGQgbWItMlwiIGRhdGEtY3k9XCJiYW5uZXItdGl0bGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvTG9naW5CYW5uZXIudnVlOjE0OjdcIj57eyB0aXRsZSB9fTwvcD5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1bMTNweF0gdGV4dC13aGl0ZS83MFwiIGRhdGEtY3k9XCJiYW5uZXItc3VidGl0bGVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvTG9naW5CYW5uZXIudnVlOjE1OjdcIj5cbiAgICAgICAge3sgc3VidGl0bGUgfX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tIFwidnVlXCI7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICBpbWdTcmM6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJcIixcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJXZWxjb21lIHRvIEFsYWRpYSxcIixcbiAgfSxcbiAgc3VidGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJDcmVhdGUgb3IgYWNjZXNzIHlvdXIgYWNjb3VudCBmcm9tIGhlcmVcIixcbiAgfSxcbiAgYm9yZGVyQ29sb3I6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJib3JkZXItd2hpdGUvMjBcIixcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgdHlwZTpCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9XG59KTtcblxuY29uc3QgcmVzb2x2ZWRJbWdTcmMgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgcHJvcHMuaW1nU3JjIHx8IG5ldyBVUkwoXCJhc3NldHMvaW1nL2FsYWRpYS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKS5ocmVmXG4gICk7XG59KTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iZXJla2V0L0Rlc2t0b3Avc3VibWlzc2lvbi9BbGFkaWEtZnJvbnRlbmQtc2VsZWN0aW9uL2FsYWRpYS1udXh0LXRhc2tzL2NvbXBvbmVudHMvbW9sZWN1bGVzL0xvZ2luQmFubmVyLnZ1ZSJ9