"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  setup() {
    const platformInfo = wx.getSystemInfoSync();
    const currentMenu = common_vendor.ref("home");
    const safeHeight = platformInfo.screenHeight - platformInfo.safeArea.bottom;
    getCurrentPages();
    return {
      scrollTop: common_vendor.ref(0),
      trigger: common_vendor.ref(false),
      safeHeight,
      currentMenu,
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  methods: {
    refreshPulling: function(e) {
      if (!e.detail.scrollTop) {
        console.log(e);
        this.trigger = true;
        setTimeout(() => {
          this.trigger = false;
          console.log(this.trigger);
        }, 500);
      }
    },
    redirect() {
      common_vendor.index.navigateTo({
        url: "/pages/index/detail"
      });
      common_vendor.index.showTabBar({});
    },
    switchMenu(value) {
      this.currentMenu = value;
    },
    scan() {
      common_vendor.index.chooseAddress({
        success(res) {
          console.log(res.userName);
          console.log(res.postalCode);
          console.log(res.provinceName);
          console.log(res.cityName);
          console.log(res.countyName);
          console.log(res.detailInfo);
          console.log(res.nationalCode);
          console.log(res.telNumber);
        }
      });
    },
    getPhoneNumber(e) {
      console.log(e);
      common_vendor.index.login({
        provider: "weixin",
        success: (res) => {
          res.code;
          common_vendor.index.getUserInfo({
            success: (res2) => {
              common_vendor.index.request({
                url: `http://10.209.125.175:8080/wechat/user/phoneNumber/${e.detail.code}`,
                method: "GET",
                header: {
                  appId: "wx843c377fdcbab4c7",
                  secret: "139e27897388c5216a1cd0cb5aef7a8a"
                }
              });
              console.log(res2, "user info......");
            }
          });
        }
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.indicatorDots,
    b: _ctx.autoplay,
    c: _ctx.interval,
    d: _ctx.duration
  }, {}, {
    f: _ctx.trigger,
    g: _ctx.scrollTop,
    h: common_vendor.o((...args) => _ctx.refreshPulling && _ctx.refreshPulling(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"]]);
wx.createPage(MiniProgramPage);
