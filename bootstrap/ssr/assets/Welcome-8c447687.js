import { ref, resolveComponent, resolveDirective, unref, withCtx, createVNode, mergeProps, withDirectives, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import Menubar from "primevue/menubar/menubar.esm.js";
import Button from "primevue/button/button.esm.js";
import ContextMenu from "primevue/contextmenu/contextmenu.esm.js";
const _imports_0 = "/build/assets/logo-645b32d7.png";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        label: "Одежда",
        items: [{ label: "Шляпы" }, { label: "Сумки" }, { label: "Очки" }]
      },
      {
        label: "Обувь",
        items: [{ label: "Шляпы" }, { label: "Сумки" }, { label: "Очки" }]
      },
      {
        label: "Аксессуары",
        items: [{ label: "Шляпы" }, { label: "Сумки" }, { label: "Очки" }]
      },
      {
        label: "Бренды",
        items: [{ label: "Nike" }, { label: "Adidas" }, { label: "Gucci" }]
      },
      { label: "Расчет стоимости" },
      {
        label: "Информация",
        items: [
          { label: "Контакты" },
          { label: "О нас" },
          { label: "Доставка" }
        ]
      }
    ]);
    const contextMenuRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = resolveComponent("Badge");
      const _directive_ripple = resolveDirective("ripple");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Home" }, null, _parent));
      _push(`<header><div class="max-[1280px]:container 2xl:container mx-auto flex sm:justify-between items-center p-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "order-2 sm:order-none",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Логотип"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Логотип"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Menubar), {
        class: "bg-transparent border-0 order-1 sm:order-none",
        id: "header-nav",
        model: items.value,
        breakpoint: "1280px"
      }, {
        item: withCtx(({ item, props, hasSubmenu, root }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttrs(mergeProps({ class: "flex align-items-center" }, props.action, ssrGetDirectiveProps(_ctx, _directive_ripple)))}${_scopeId}><span class="${ssrRenderClass(["", item.icon])}"${_scopeId}></span><span class=""${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            if (item.badge) {
              _push2(ssrRenderComponent(_component_Badge, {
                class: { "ml-auto": !root, "ml-2": root },
                value: item.badge
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (item.shortcut) {
              _push2(`<span class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"${_scopeId}>${ssrInterpolate(item.shortcut)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (hasSubmenu) {
              _push2(`<i class="${ssrRenderClass([
                "pi pi-angle-down text-primary",
                {
                  "pi-angle-down ml-2": root,
                  "pi-angle-right ml-auto": !root
                }
              ])}"${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</a>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("a", mergeProps({ class: "flex align-items-center" }, props.action), [
                createVNode("span", {
                  class: ["", item.icon]
                }, null, 2),
                createVNode("span", { class: "" }, toDisplayString(item.label), 1),
                item.badge ? (openBlock(), createBlock(_component_Badge, {
                  key: 0,
                  class: { "ml-auto": !root, "ml-2": root },
                  value: item.badge
                }, null, 8, ["class", "value"])) : createCommentVNode("", true),
                item.shortcut ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
                }, toDisplayString(item.shortcut), 1)) : createCommentVNode("", true),
                hasSubmenu ? (openBlock(), createBlock("i", {
                  key: 2,
                  class: [
                    "pi pi-angle-down text-primary",
                    {
                      "pi-angle-down ml-2": root,
                      "pi-angle-right ml-auto": !root
                    }
                  ]
                }, null, 2)) : createCommentVNode("", true)
              ], 16)), [
                [_directive_ripple]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="buttons flex items-center ml-auto 2xl:ml-0 order-3 sm:order-none">`);
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-search",
        class: "text-white",
        severity: "secondary",
        text: "",
        rounded: "",
        "aria-label": "Search"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-star",
        class: "text-white",
        severity: "secondary",
        text: "",
        rounded: "",
        "aria-label": "Favourite"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-user",
        class: "text-white",
        severity: "secondary",
        text: "",
        rounded: "",
        "aria-label": "User"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-shopping-bag",
        class: "text-white px-2",
        severity: "secondary",
        text: "",
        rounded: "",
        label: "11 899 ₽",
        "aria-label": "Shopping",
        id: "shopping",
        badge: "8",
        badgeSeverity: "info"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(ContextMenu), {
        model: items.value,
        ref_key: "contextMenuRef",
        ref: contextMenuRef
      }, null, _parent));
      _push(`</header><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
