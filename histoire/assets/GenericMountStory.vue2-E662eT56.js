import { S as SvelteComponentDev, P as init, Q as safe_not_equal, R as dispatch_dev, U as validate_slots, V as svg_element, W as attr_dev, X as add_location, Y as insert_dev, Z as append_dev, _ as noop, $ as detach_dev, a0 as element, a1 as group_outros, a2 as transition_out, a3 as check_outros, a4 as transition_in, a5 as create_component, a6 as mount_component, a7 as destroy_component, a8 as onMount, a9 as space, aa as binding_callbacks, ab as bind, ac as add_flush_callback, ad as Logo_square, ae as Logo_dark, af as createRouter, ag as createWebHistory, ah as createWebHashHistory, ai as useDark, aj as useToggle, k as watch, ak as markRaw, E as reactive, d as defineComponent, r as ref, al as watchEffect, o as openBlock, q as createBlock, am as mergeProps, an as resolveDynamicComponent, h as createCommentVNode } from "./vendor-adwhY5ma.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/haut-test-meter/histoire/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const file$5 = "src/lib/Meter/IconMoon.svelte";
function create_fragment$5(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M17.3087 11.1735C17.6859 10.9964 18.0882 11.3677 17.983 11.7711C17.6242 13.1447 16.919 14.4519 15.8334 15.5375C12.6094 18.7611 7.45186 18.8285 4.31137 15.6883C1.17088 12.5482 1.23945 7.38999 4.46337 4.16641C5.54905 3.08084 6.8553 2.37579 8.23012 2.01698C8.63354 1.91186 9.00382 2.31409 8.82782 2.69118C7.68271 5.13543 8.0587 8.06304 9.99808 10.0022C11.9363 11.9425 14.8642 12.3185 17.3087 11.1735Z");
      add_location(path, file$5, 13, 4, 212);
      attr_dev(
        svg,
        "width",
        /*width*/
        ctx[0]
      );
      attr_dev(
        svg,
        "height",
        /*height*/
        ctx[1]
      );
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(
        svg,
        "fill",
        /*fill*/
        ctx[2]
      );
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "class", "s-Gz6xCtVjorkG");
      add_location(svg, file$5, 6, 0, 102);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*width*/
      1) {
        attr_dev(
          svg,
          "width",
          /*width*/
          ctx2[0]
        );
      }
      if (dirty & /*height*/
      2) {
        attr_dev(
          svg,
          "height",
          /*height*/
          ctx2[1]
        );
      }
      if (dirty & /*fill*/
      4) {
        attr_dev(
          svg,
          "fill",
          /*fill*/
          ctx2[2]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("IconMoon", slots, []);
  let { width = 20 } = $$props;
  let { height = 20 } = $$props;
  let { fill = "#fff" } = $$props;
  const writable_props = ["width", "height", "fill"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<IconMoon> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(0, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(1, height = $$props2.height);
    if ("fill" in $$props2)
      $$invalidate(2, fill = $$props2.fill);
  };
  $$self.$capture_state = () => ({ width, height, fill });
  $$self.$inject_state = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(0, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(1, height = $$props2.height);
    if ("fill" in $$props2)
      $$invalidate(2, fill = $$props2.fill);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [width, height, fill];
}
class IconMoon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { width: 0, height: 1, fill: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "IconMoon",
      options,
      id: create_fragment$5.name
    });
  }
  get width() {
    throw new Error("<IconMoon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set width(value) {
    throw new Error("<IconMoon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get height() {
    throw new Error("<IconMoon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set height(value) {
    throw new Error("<IconMoon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get fill() {
    throw new Error("<IconMoon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set fill(value) {
    throw new Error("<IconMoon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$4 = "src/lib/Meter/IconSun.svelte";
function create_fragment$4(ctx) {
  let svg;
  let path;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr_dev(path, "d", "M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4V3ZM6.30711 4.89289C5.91658 4.50237 5.28342 4.50237 4.89289 4.89289C4.50237 5.28342 4.50237 5.91658 4.89289 6.30711L5.59289 7.00711C5.98342 7.39763 6.61658 7.39763 7.00711 7.00711C7.39763 6.61658 7.39763 5.98342 7.00711 5.59289L6.30711 4.89289ZM19.1071 6.30711C19.4976 5.91658 19.4976 5.28342 19.1071 4.89289C18.7166 4.50237 18.0834 4.50237 17.6929 4.89289L16.9929 5.59289C16.6024 5.98342 16.6024 6.61658 16.9929 7.00711C17.3834 7.39763 18.0166 7.39763 18.4071 7.00711L19.1071 6.30711ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11H3ZM20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H20ZM7.00711 18.4071C7.39763 18.0166 7.39763 17.3834 7.00711 16.9929C6.61658 16.6024 5.98342 16.6024 5.59289 16.9929L4.89289 17.6929C4.50237 18.0834 4.50237 18.7166 4.89289 19.1071C5.28342 19.4976 5.91658 19.4976 6.30711 19.1071L7.00711 18.4071ZM18.4071 16.9929C18.0166 16.6024 17.3834 16.6024 16.9929 16.9929C16.6024 17.3834 16.6024 18.0166 16.9929 18.4071L17.6929 19.1071C18.0834 19.4976 18.7166 19.4976 19.1071 19.1071C19.4976 18.7166 19.4976 18.0834 19.1071 17.6929L18.4071 16.9929ZM13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V20ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z");
      add_location(path, file$4, 13, 4, 212);
      attr_dev(
        svg,
        "width",
        /*width*/
        ctx[0]
      );
      attr_dev(
        svg,
        "height",
        /*height*/
        ctx[1]
      );
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(
        svg,
        "fill",
        /*fill*/
        ctx[2]
      );
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "class", "s-gewHTvhp1HWm");
      add_location(svg, file$4, 6, 0, 102);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*width*/
      1) {
        attr_dev(
          svg,
          "width",
          /*width*/
          ctx2[0]
        );
      }
      if (dirty & /*height*/
      2) {
        attr_dev(
          svg,
          "height",
          /*height*/
          ctx2[1]
        );
      }
      if (dirty & /*fill*/
      4) {
        attr_dev(
          svg,
          "fill",
          /*fill*/
          ctx2[2]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("IconSun", slots, []);
  let { width = 24 } = $$props;
  let { height = 24 } = $$props;
  let { fill = "#fff" } = $$props;
  const writable_props = ["width", "height", "fill"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<IconSun> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(0, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(1, height = $$props2.height);
    if ("fill" in $$props2)
      $$invalidate(2, fill = $$props2.fill);
  };
  $$self.$capture_state = () => ({ width, height, fill });
  $$self.$inject_state = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(0, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(1, height = $$props2.height);
    if ("fill" in $$props2)
      $$invalidate(2, fill = $$props2.fill);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [width, height, fill];
}
class IconSun extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { width: 0, height: 1, fill: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "IconSun",
      options,
      id: create_fragment$4.name
    });
  }
  get width() {
    throw new Error("<IconSun>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set width(value) {
    throw new Error("<IconSun>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get height() {
    throw new Error("<IconSun>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set height(value) {
    throw new Error("<IconSun>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get fill() {
    throw new Error("<IconSun>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set fill(value) {
    throw new Error("<IconSun>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$3 = "src/lib/Meter/Icon.svelte";
function create_if_block_1(ctx) {
  let iconsun;
  let current;
  iconsun = new IconSun({
    props: { fill: (
      /*fill*/
      ctx[1]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(iconsun.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(iconsun, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const iconsun_changes = {};
      if (dirty & /*fill*/
      2)
        iconsun_changes.fill = /*fill*/
        ctx2[1];
      iconsun.$set(iconsun_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(iconsun.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconsun.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconsun, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(14:29) ",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let iconmoon;
  let current;
  iconmoon = new IconMoon({
    props: { fill: (
      /*fill*/
      ctx[1]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(iconmoon.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(iconmoon, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const iconmoon_changes = {};
      if (dirty & /*fill*/
      2)
        iconmoon_changes.fill = /*fill*/
        ctx2[1];
      iconmoon.$set(iconmoon_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(iconmoon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconmoon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconmoon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(12:4) {#if name === 'Moon'}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_if_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*name*/
      ctx2[0] === "Moon"
    )
      return 0;
    if (
      /*name*/
      ctx2[0] === "Sun"
    )
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  const block = {
    c: function create() {
      div = element("div");
      if (if_block)
        if_block.c();
      attr_dev(div, "class", "icon s-bgAsj7upK8sS");
      add_location(div, file$3, 11, 0, 260);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div, null);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, null);
        } else {
          if_block = null;
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Icon", slots, []);
  let { name = "Moon" } = $$props;
  let { active = true } = $$props;
  let fill;
  const writable_props = ["name", "active"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Icon> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("active" in $$props2)
      $$invalidate(2, active = $$props2.active);
  };
  $$self.$capture_state = () => ({ IconMoon, IconSun, name, active, fill });
  $$self.$inject_state = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("active" in $$props2)
      $$invalidate(2, active = $$props2.active);
    if ("fill" in $$props2)
      $$invalidate(1, fill = $$props2.fill);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*active*/
    4) {
      $$invalidate(1, fill = active ? "#fff" : "rgb(255 255 255 / 0.4)");
    }
  };
  return [name, fill, active];
}
class Icon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { name: 0, active: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Icon",
      options,
      id: create_fragment$3.name
    });
  }
  get name() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get active() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set active(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
var SegmentState = /* @__PURE__ */ ((SegmentState2) => {
  SegmentState2[SegmentState2["state1"] = 0] = "state1";
  SegmentState2[SegmentState2["state2"] = 1] = "state2";
  SegmentState2[SegmentState2["state3"] = 2] = "state3";
  SegmentState2[SegmentState2["state4"] = 3] = "state4";
  SegmentState2[SegmentState2["state5"] = 4] = "state5";
  SegmentState2[SegmentState2["state6"] = 5] = "state6";
  SegmentState2[SegmentState2["state7"] = 6] = "state7";
  return SegmentState2;
})(SegmentState || {});
const file$2 = "src/lib/Meter/Segment.svelte";
function create_fragment$2(ctx) {
  let div;
  let div_class_value;
  const block = {
    c: function create() {
      div = element("div");
      attr_dev(div, "class", div_class_value = "segment " + /*size*/
      ctx[0] + " " + SegmentState[
        /*state*/
        ctx[1]
      ] + " s-cJFA6yj_wNDT");
      add_location(div, file$2, 28, 0, 810);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*size, state*/
      3 && div_class_value !== (div_class_value = "segment " + /*size*/
      ctx2[0] + " " + SegmentState[
        /*state*/
        ctx2[1]
      ] + " s-cJFA6yj_wNDT")) {
        attr_dev(div, "class", div_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Segment", slots, []);
  let { size = "big" } = $$props;
  let { min: min2 = 0 } = $$props;
  let { max: max2 = 1 } = $$props;
  let { mid = 0.5 } = $$props;
  let { value = 0 } = $$props;
  let cv = (min2 != mid ? mid - min2 : max2 - mid) / 6;
  let state = SegmentState.state1;
  const writable_props = ["size", "min", "max", "mid", "value"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Segment> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("size" in $$props2)
      $$invalidate(0, size = $$props2.size);
    if ("min" in $$props2)
      $$invalidate(2, min2 = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(3, max2 = $$props2.max);
    if ("mid" in $$props2)
      $$invalidate(4, mid = $$props2.mid);
    if ("value" in $$props2)
      $$invalidate(5, value = $$props2.value);
  };
  $$self.$capture_state = () => ({
    SegmentState,
    size,
    min: min2,
    max: max2,
    mid,
    value,
    cv,
    state
  });
  $$self.$inject_state = ($$props2) => {
    if ("size" in $$props2)
      $$invalidate(0, size = $$props2.size);
    if ("min" in $$props2)
      $$invalidate(2, min2 = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(3, max2 = $$props2.max);
    if ("mid" in $$props2)
      $$invalidate(4, mid = $$props2.mid);
    if ("value" in $$props2)
      $$invalidate(5, value = $$props2.value);
    if ("cv" in $$props2)
      $$invalidate(6, cv = $$props2.cv);
    if ("state" in $$props2)
      $$invalidate(1, state = $$props2.state);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value, min*/
    36) {
      if (value < min2 - cv)
        $$invalidate(1, state = SegmentState.state1);
    }
    if ($$self.$$.dirty & /*value, min*/
    36) {
      if (value >= min2 - cv && value <= min2 + cv)
        $$invalidate(1, state = SegmentState.state2);
    }
    if ($$self.$$.dirty & /*value, min, mid*/
    52) {
      if (value > min2 + cv && value < mid - cv)
        $$invalidate(1, state = SegmentState.state3);
    }
    if ($$self.$$.dirty & /*value, mid*/
    48) {
      if (value >= mid - cv && value <= mid + cv)
        $$invalidate(1, state = SegmentState.state4);
    }
    if ($$self.$$.dirty & /*value, mid, max*/
    56) {
      if (value > mid + cv && value < max2 - cv)
        $$invalidate(1, state = SegmentState.state5);
    }
    if ($$self.$$.dirty & /*max, mid, value*/
    56) {
      if (max2 != mid && value >= max2 - cv && value <= max2 + cv)
        $$invalidate(1, state = SegmentState.state6);
    }
    if ($$self.$$.dirty & /*value, max*/
    40) {
      if (value > max2 + cv)
        $$invalidate(1, state = SegmentState.state7);
    }
  };
  return [size, state, min2, max2, mid, value];
}
class Segment extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      size: 0,
      min: 2,
      max: 3,
      mid: 4,
      value: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Segment",
      options,
      id: create_fragment$2.name
    });
  }
  get size() {
    throw new Error("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get min() {
    throw new Error("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set min(value) {
    throw new Error("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max() {
    throw new Error("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get mid() {
    throw new Error("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set mid(value) {
    throw new Error("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$1 = "src/lib/Meter/Meter.svelte";
function create_fragment$1(ctx) {
  let div1;
  let icon0;
  let t0;
  let div0;
  let segment0;
  let t1;
  let segment1;
  let t2;
  let segment2;
  let t3;
  let segment3;
  let t4;
  let segment4;
  let t5;
  let segment5;
  let t6;
  let segment6;
  let t7;
  let icon1;
  let current;
  icon0 = new Icon({
    props: {
      name: "Moon",
      active: (
        /*iconMoonState*/
        ctx[3]
      )
    },
    $$inline: true
  });
  segment0 = new Segment({
    props: {
      size: (
        /*segmentSize*/
        ctx[5]
      ),
      min: (
        /*min*/
        ctx[0]
      ),
      max: (
        /*segmentTick*/
        ctx[7]
      ),
      mid: (
        /*min*/
        ctx[0]
      ),
      value: (
        /*value*/
        ctx[2]
      )
    },
    $$inline: true
  });
  segment1 = new Segment({
    props: {
      size: (
        /*segmentSize*/
        ctx[5]
      ),
      min: (
        /*min*/
        ctx[0]
      ),
      max: (
        /*segmentTick*/
        ctx[7] * 2
      ),
      mid: (
        /*segmentTick*/
        ctx[7]
      ),
      value: (
        /*value*/
        ctx[2]
      )
    },
    $$inline: true
  });
  segment2 = new Segment({
    props: {
      size: (
        /*segmentSize*/
        ctx[5]
      ),
      min: (
        /*segmentTick*/
        ctx[7]
      ),
      max: (
        /*segmentTick*/
        ctx[7] * 3
      ),
      mid: (
        /*segmentTick*/
        ctx[7] * 2
      ),
      value: (
        /*value*/
        ctx[2]
      )
    },
    $$inline: true
  });
  segment3 = new Segment({
    props: {
      size: (
        /*segmentSize*/
        ctx[5]
      ),
      min: (
        /*segmentTick*/
        ctx[7] * 2
      ),
      max: (
        /*segmentTick*/
        ctx[7] * 4
      ),
      mid: (
        /*segmentTick*/
        ctx[7] * 3
      ),
      value: (
        /*value*/
        ctx[2]
      )
    },
    $$inline: true
  });
  segment4 = new Segment({
    props: {
      size: (
        /*segmentSize*/
        ctx[5]
      ),
      min: (
        /*segmentTick*/
        ctx[7] * 3
      ),
      max: (
        /*segmentTick*/
        ctx[7] * 5
      ),
      mid: (
        /*segmentTick*/
        ctx[7] * 4
      ),
      value: (
        /*value*/
        ctx[2]
      )
    },
    $$inline: true
  });
  segment5 = new Segment({
    props: {
      size: (
        /*segmentSize*/
        ctx[5]
      ),
      min: (
        /*segmentTick*/
        ctx[7] * 4
      ),
      max: (
        /*segmentTick*/
        ctx[7] * 6
      ),
      mid: (
        /*segmentTick*/
        ctx[7] * 5
      ),
      value: (
        /*value*/
        ctx[2]
      )
    },
    $$inline: true
  });
  segment6 = new Segment({
    props: {
      size: (
        /*segmentSize*/
        ctx[5]
      ),
      min: (
        /*segmentTick*/
        ctx[7] * 5
      ),
      max: (
        /*max*/
        ctx[1]
      ),
      mid: (
        /*max*/
        ctx[1]
      ),
      value: (
        /*value*/
        ctx[2]
      )
    },
    $$inline: true
  });
  icon1 = new Icon({
    props: {
      name: "Sun",
      active: (
        /*iconSunState*/
        ctx[4]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div1 = element("div");
      create_component(icon0.$$.fragment);
      t0 = space();
      div0 = element("div");
      create_component(segment0.$$.fragment);
      t1 = space();
      create_component(segment1.$$.fragment);
      t2 = space();
      create_component(segment2.$$.fragment);
      t3 = space();
      create_component(segment3.$$.fragment);
      t4 = space();
      create_component(segment4.$$.fragment);
      t5 = space();
      create_component(segment5.$$.fragment);
      t6 = space();
      create_component(segment6.$$.fragment);
      t7 = space();
      create_component(icon1.$$.fragment);
      attr_dev(div0, "class", "bar s-flum80glNey2");
      add_location(div0, file$1, 60, 4, 1337);
      attr_dev(div1, "class", "meter s-flum80glNey2");
      add_location(div1, file$1, 58, 0, 1245);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      mount_component(icon0, div1, null);
      append_dev(div1, t0);
      append_dev(div1, div0);
      mount_component(segment0, div0, null);
      append_dev(div0, t1);
      mount_component(segment1, div0, null);
      append_dev(div0, t2);
      mount_component(segment2, div0, null);
      append_dev(div0, t3);
      mount_component(segment3, div0, null);
      append_dev(div0, t4);
      mount_component(segment4, div0, null);
      append_dev(div0, t5);
      mount_component(segment5, div0, null);
      append_dev(div0, t6);
      mount_component(segment6, div0, null);
      append_dev(div1, t7);
      mount_component(icon1, div1, null);
      ctx[9](div1);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const icon0_changes = {};
      if (dirty & /*iconMoonState*/
      8)
        icon0_changes.active = /*iconMoonState*/
        ctx2[3];
      icon0.$set(icon0_changes);
      const segment0_changes = {};
      if (dirty & /*segmentSize*/
      32)
        segment0_changes.size = /*segmentSize*/
        ctx2[5];
      if (dirty & /*min*/
      1)
        segment0_changes.min = /*min*/
        ctx2[0];
      if (dirty & /*min*/
      1)
        segment0_changes.mid = /*min*/
        ctx2[0];
      if (dirty & /*value*/
      4)
        segment0_changes.value = /*value*/
        ctx2[2];
      segment0.$set(segment0_changes);
      const segment1_changes = {};
      if (dirty & /*segmentSize*/
      32)
        segment1_changes.size = /*segmentSize*/
        ctx2[5];
      if (dirty & /*min*/
      1)
        segment1_changes.min = /*min*/
        ctx2[0];
      if (dirty & /*value*/
      4)
        segment1_changes.value = /*value*/
        ctx2[2];
      segment1.$set(segment1_changes);
      const segment2_changes = {};
      if (dirty & /*segmentSize*/
      32)
        segment2_changes.size = /*segmentSize*/
        ctx2[5];
      if (dirty & /*value*/
      4)
        segment2_changes.value = /*value*/
        ctx2[2];
      segment2.$set(segment2_changes);
      const segment3_changes = {};
      if (dirty & /*segmentSize*/
      32)
        segment3_changes.size = /*segmentSize*/
        ctx2[5];
      if (dirty & /*value*/
      4)
        segment3_changes.value = /*value*/
        ctx2[2];
      segment3.$set(segment3_changes);
      const segment4_changes = {};
      if (dirty & /*segmentSize*/
      32)
        segment4_changes.size = /*segmentSize*/
        ctx2[5];
      if (dirty & /*value*/
      4)
        segment4_changes.value = /*value*/
        ctx2[2];
      segment4.$set(segment4_changes);
      const segment5_changes = {};
      if (dirty & /*segmentSize*/
      32)
        segment5_changes.size = /*segmentSize*/
        ctx2[5];
      if (dirty & /*value*/
      4)
        segment5_changes.value = /*value*/
        ctx2[2];
      segment5.$set(segment5_changes);
      const segment6_changes = {};
      if (dirty & /*segmentSize*/
      32)
        segment6_changes.size = /*segmentSize*/
        ctx2[5];
      if (dirty & /*max*/
      2)
        segment6_changes.max = /*max*/
        ctx2[1];
      if (dirty & /*max*/
      2)
        segment6_changes.mid = /*max*/
        ctx2[1];
      if (dirty & /*value*/
      4)
        segment6_changes.value = /*value*/
        ctx2[2];
      segment6.$set(segment6_changes);
      const icon1_changes = {};
      if (dirty & /*iconSunState*/
      16)
        icon1_changes.active = /*iconSunState*/
        ctx2[4];
      icon1.$set(icon1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon0.$$.fragment, local);
      transition_in(segment0.$$.fragment, local);
      transition_in(segment1.$$.fragment, local);
      transition_in(segment2.$$.fragment, local);
      transition_in(segment3.$$.fragment, local);
      transition_in(segment4.$$.fragment, local);
      transition_in(segment5.$$.fragment, local);
      transition_in(segment6.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(segment0.$$.fragment, local);
      transition_out(segment1.$$.fragment, local);
      transition_out(segment2.$$.fragment, local);
      transition_out(segment3.$$.fragment, local);
      transition_out(segment4.$$.fragment, local);
      transition_out(segment5.$$.fragment, local);
      transition_out(segment6.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div1);
      }
      destroy_component(icon0);
      destroy_component(segment0);
      destroy_component(segment1);
      destroy_component(segment2);
      destroy_component(segment3);
      destroy_component(segment4);
      destroy_component(segment5);
      destroy_component(segment6);
      destroy_component(icon1);
      ctx[9](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Meter", slots, []);
  let { min: min2 = 0 } = $$props;
  let { max: max2 = 1 } = $$props;
  let { optimum = 0.65 } = $$props;
  let { value = 0 } = $$props;
  let segmentTick = max2 / 6;
  let breakpoint = 320;
  let segmentSize = "big";
  let meter;
  let iconMoonState = true;
  let iconSunState = false;
  function checkBreakpointAndSetSegmentSize() {
    var _a;
    const conteiner = meter.parentElement;
    const conteinerWidth = (_a = meter.parentElement) == null ? void 0 : _a.offsetWidth;
    if (conteiner && conteinerWidth && conteinerWidth > breakpoint) {
      segmentSize != "big" && $$invalidate(5, segmentSize = "big");
    } else {
      segmentSize != "small" && $$invalidate(5, segmentSize = "small");
    }
  }
  onMount(() => {
    var _a;
    checkBreakpointAndSetSegmentSize();
    (_a = meter.parentElement) == null ? void 0 : _a.addEventListener("resize", checkBreakpointAndSetSegmentSize);
    return () => {
      var _a2;
      (_a2 = meter.parentElement) == null ? void 0 : _a2.removeEventListener("resize", checkBreakpointAndSetSegmentSize);
    };
  });
  const writable_props = ["min", "max", "optimum", "value"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Meter> was created with unknown prop '${key}'`);
  });
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      meter = $$value;
      $$invalidate(6, meter);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("min" in $$props2)
      $$invalidate(0, min2 = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(1, max2 = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(8, optimum = $$props2.optimum);
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
  };
  $$self.$capture_state = () => ({
    onMount,
    Icon,
    Segment,
    min: min2,
    max: max2,
    optimum,
    value,
    segmentTick,
    breakpoint,
    segmentSize,
    meter,
    iconMoonState,
    iconSunState,
    checkBreakpointAndSetSegmentSize
  });
  $$self.$inject_state = ($$props2) => {
    if ("min" in $$props2)
      $$invalidate(0, min2 = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(1, max2 = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(8, optimum = $$props2.optimum);
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
    if ("segmentTick" in $$props2)
      $$invalidate(7, segmentTick = $$props2.segmentTick);
    if ("breakpoint" in $$props2)
      breakpoint = $$props2.breakpoint;
    if ("segmentSize" in $$props2)
      $$invalidate(5, segmentSize = $$props2.segmentSize);
    if ("meter" in $$props2)
      $$invalidate(6, meter = $$props2.meter);
    if ("iconMoonState" in $$props2)
      $$invalidate(3, iconMoonState = $$props2.iconMoonState);
    if ("iconSunState" in $$props2)
      $$invalidate(4, iconSunState = $$props2.iconSunState);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value, optimum, iconMoonState, iconSunState*/
    284) {
      if (value >= optimum) {
        iconMoonState && $$invalidate(3, iconMoonState = !iconMoonState);
        !iconSunState && $$invalidate(4, iconSunState = !iconSunState);
      } else {
        !iconMoonState && $$invalidate(3, iconMoonState = !iconMoonState);
        iconSunState && $$invalidate(4, iconSunState = !iconSunState);
      }
    }
  };
  return [
    min2,
    max2,
    value,
    iconMoonState,
    iconSunState,
    segmentSize,
    meter,
    segmentTick,
    optimum,
    div1_binding
  ];
}
class Meter extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { min: 0, max: 1, optimum: 8, value: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Meter",
      options,
      id: create_fragment$1.name
    });
  }
  get min() {
    throw new Error("<Meter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set min(value) {
    throw new Error("<Meter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max() {
    throw new Error("<Meter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<Meter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get optimum() {
    throw new Error("<Meter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set optimum(value) {
    throw new Error("<Meter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<Meter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Meter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "src/lib/Meter/Meter.story.svelte";
function create_default_slot_2(ctx) {
  let div;
  let meter;
  let current;
  meter = new Meter({
    props: {
      min,
      max,
      optimum: (
        /*optimum*/
        ctx[1]
      ),
      value: (
        /*value*/
        ctx[2]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(meter.$$.fragment);
      attr_dev(div, "class", "container big s-ufIMy7oW3eSY");
      add_location(div, file, 17, 8, 320);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(meter, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const meter_changes = {};
      if (dirty & /*optimum*/
      2)
        meter_changes.optimum = /*optimum*/
        ctx2[1];
      if (dirty & /*value*/
      4)
        meter_changes.value = /*value*/
        ctx2[2];
      meter.$set(meter_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(meter.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(meter.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(meter);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2.name,
    type: "slot",
    source: '(11:4) <Hst.Variant title=\\"Meter with container width > 320px\\" {source}>',
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let div;
  let meter;
  let current;
  meter = new Meter({
    props: {
      min,
      max,
      optimum: (
        /*optimum*/
        ctx[1]
      ),
      value: (
        /*value*/
        ctx[2]
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(meter.$$.fragment);
      attr_dev(div, "class", "container small s-ufIMy7oW3eSY");
      add_location(div, file, 22, 8, 513);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(meter, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const meter_changes = {};
      if (dirty & /*optimum*/
      2)
        meter_changes.optimum = /*optimum*/
        ctx2[1];
      if (dirty & /*value*/
      4)
        meter_changes.value = /*value*/
        ctx2[2];
      meter.$set(meter_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(meter.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(meter.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(meter);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(16:4) <Hst.Variant title=\\"Meter with container width <= 320px\\" {source}>',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let hst_variant0;
  let t;
  let hst_variant1;
  let current;
  hst_variant0 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Meter with container width > 320px",
      source: (
        /*source*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  hst_variant1 = new /*Hst*/
  ctx[0].Variant({
    props: {
      title: "Meter with container width <= 320px",
      source: (
        /*source*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_variant0.$$.fragment);
      t = space();
      create_component(hst_variant1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_variant0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_variant1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_variant0_changes = {};
      if (dirty & /*$$scope, optimum, value*/
      70) {
        hst_variant0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant0.$set(hst_variant0_changes);
      const hst_variant1_changes = {};
      if (dirty & /*$$scope, optimum, value*/
      70) {
        hst_variant1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_variant1.$set(hst_variant1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_variant0.$$.fragment, local);
      transition_in(hst_variant1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_variant0.$$.fragment, local);
      transition_out(hst_variant1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_variant0, detaching);
      destroy_component(hst_variant1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(10:0) <Hst.Story title=\\"Meter component\\">',
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_slider0;
  let updating_value;
  let t;
  let hst_slider1;
  let updating_value_1;
  let current;
  function hst_slider0_value_binding(value) {
    ctx[4](value);
  }
  let hst_slider0_props = { min, max, step: 0.01, title: "Optimum" };
  if (
    /*optimum*/
    ctx[1] !== void 0
  ) {
    hst_slider0_props.value = /*optimum*/
    ctx[1];
  }
  hst_slider0 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider0, "value", hst_slider0_value_binding));
  function hst_slider1_value_binding(value) {
    ctx[5](value);
  }
  let hst_slider1_props = { min, max, step: 0.01, title: "Value" };
  if (
    /*value*/
    ctx[2] !== void 0
  ) {
    hst_slider1_props.value = /*value*/
    ctx[2];
  }
  hst_slider1 = new /*Hst*/
  ctx[0].Slider({ props: hst_slider1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_slider1, "value", hst_slider1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_slider0.$$.fragment);
      t = space();
      create_component(hst_slider1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(hst_slider0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(hst_slider1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_slider0_changes = {};
      if (!updating_value && dirty & /*optimum*/
      2) {
        updating_value = true;
        hst_slider0_changes.value = /*optimum*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_slider0.$set(hst_slider0_changes);
      const hst_slider1_changes = {};
      if (!updating_value_1 && dirty & /*value*/
      4) {
        updating_value_1 = true;
        hst_slider1_changes.value = /*value*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_slider1.$set(hst_slider1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_slider0.$$.fragment, local);
      transition_in(hst_slider1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_slider0.$$.fragment, local);
      transition_out(hst_slider1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_slider0, detaching);
      destroy_component(hst_slider1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(21:4) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Meter component",
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, value, optimum*/
      70) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const min = 0;
const max = 1;
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Meter_story", slots, []);
  let { Hst } = $$props;
  const source = `<Meter {min} {max} {optimum} {value} />`;
  let optimum = 0.64;
  let value = 0.5;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Meter_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Meter_story> was created with unknown prop '${key}'`);
  });
  function hst_slider0_value_binding(value2) {
    optimum = value2;
    $$invalidate(1, optimum);
  }
  function hst_slider1_value_binding(value$1) {
    value = value$1;
    $$invalidate(2, value);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Meter,
    Hst,
    source,
    min,
    max,
    optimum,
    value
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("optimum" in $$props2)
      $$invalidate(1, optimum = $$props2.optimum);
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    optimum,
    value,
    source,
    hst_slider0_value_binding,
    hst_slider1_value_binding
  ];
}
class Meter_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Meter_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<Meter_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Meter_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [{ "id": "src-lib-meter-meter-story-svelte", "path": ["Meter component"], "filePath": "src/lib/Meter/Meter.story.svelte", "story": { "id": "src-lib-meter-meter-story-svelte", "title": "Meter component", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-lib-meter-meter-story-svelte-0", "title": "Meter with container width > 320px", "icon": null, "iconColor": null }, { "id": "src-lib-meter-meter-story-svelte-1", "title": "Meter with container width <= 320px", "icon": null, "iconColor": null }] }, "supportPluginId": "svelte4", "docsFilePath": "src/lib/Meter/Meter.story.md", "index": 0, component: Meter_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-meter-meter-story-svelte-lDkkJYrs.js"), true ? __vite__mapDeps([]) : void 0) }];
let tree = [{ "title": "Meter component", "index": 0 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/Users/devspace/Developer/DevProjects/haut-test-meter/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte4", "moduleName": "@histoire/plugin-svelte", "setupFn": ["setupSvelte3", "setupSvelte4"] }, "commands": [{ "id": "histoire:plugin-svelte:generate-story", "label": "Generate Svelte 3 story from component", "icon": "https://svelte.dev/favicon.png", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-svelte/dist/commands/generate-story.client.js" }] }], "outDir": "/Users/devspace/Developer/DevProjects/haut-test-meter/dist/histoire", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte4"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "@histoire/plugin-svelte/assets/histoire-svelte.svg", "light": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg", "dark": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": ["vite-plugin-sveltekit-compile"] };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const base = "/haut-test-meter/histoire/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-1sFK3Lzy.js"), true ? __vite__mapDeps([0,1,2]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-AeEZA4Sq.js"), true ? __vite__mapDeps([3,2,1,4,5,6]) : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-adwhY5ma.js").then((n) => n.aR), true ? __vite__mapDeps([]) : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-adwhY5ma.js").then((n) => n.aS), true ? __vite__mapDeps([]) : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomeView.vue-1sFK3Lzy.js","assets/story-zXFdGbEC.js","assets/vendor-adwhY5ma.js","assets/StoryView.vue-AeEZA4Sq.js","assets/MobileOverlay.vue2-HEWuz7Vl.js","assets/BaseEmpty.vue-K1lN9d6v.js","assets/state-dOQRkqpd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}