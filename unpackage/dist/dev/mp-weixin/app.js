"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/book/book.js";
  "./pages/order/index.js";
  "./pages/user/index.js";
  "./pages/index/detail.js";
}
const _sfc_main = common_vendor.defineComponent({
  setup() {
    common_vendor.index.setTabBarStyle({
      color: "#666",
      selectedColor: "#62f52e",
      backgroundImage: "",
      borderStyle: "white"
    });
    common_vendor.index.showTabBarRedDot({
      index: 1,
      text: "1"
    });
    common_vendor.index.setTabBarBadge({
      text: "1",
      index: 3
    });
  }
});
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
