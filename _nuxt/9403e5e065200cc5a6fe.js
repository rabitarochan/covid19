(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{230:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("42d0e649",content,!1,{sourceMap:!1})},231:function(t,e,n){"use strict";var r=n(230);n.n(r).a},232:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-2e5eccda]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-2e5eccda]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-2e5eccda]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},233:function(t,e,n){"use strict";var r=n(1).default.extend({props:{icon:{type:String}}}),o=(n(231),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this._t("default")],2)])}),[],!1,null,"2e5eccda",null);e.a=component.exports},265:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/30","url":"https://www.pref.iwate.jp/kurashikankyou/iryou/kenkou/jouhou/1028536.html","text":"新型コロナウイルス感染症対策本部 第7回本部員会議 知事メッセージ（令和2年3月30日）"},{"date":"2020/03/27","url":"https://www.pref.iwate.jp/kurashikankyou/iryou/kenkou/jouhou/1028497.html","text":"新型コロナウイルス感染症対策本部 第6回本部員会議 知事メッセージ（令和2年3月27日）"},{"date":"2020/03/23","url":"https://www.pref.iwate.jp/kurashikankyou/iryou/kenkou/jouhou/1028223.html","text":"新型コロナウイルス感染症対策本部 第5回本部員会議 知事コメント（令和2年3月23日）"},{"date":"2020/03/24","url":"/","text":"非公式岩手県コロナウイルス対策サイトを立ち上げました。"}]}')},274:function(t,e,n){var content=n(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("01ea1d6c",content,!1,{sourceMap:!1})},358:function(t,e,n){"use strict";var r=n(274);n.n(r).a},359:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .DataBlock[data-v-52592c90]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:4px 8px}}",""]),t.exports=e},400:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(233),c=n(234),d=n(265),l=n(301),h=r.default.extend({components:{PageHeader:o.a,TokyoCityMapCard:l.a},data:function(){var data={Data:c,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("東京都23区の人口推移（参考値）"),date:c.lastUpdate},newsItems:d.newsItems};return data},head:function(){return{title:this.$t("東京都23区の人口推移（参考値）")}}}),f=(n(358),n(4)),component=Object(f.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MainPage"},[e("page-header",{attrs:{icon:this.headerItem.icon}},[this._v("\n    "+this._s(this.headerItem.title)+"\n  ")]),this._v(" "),e("v-row",{staticClass:"DataBlock"},[e("tokyo-city-map-card")],1)],1)}),[],!1,null,"52592c90",null);e.default=component.exports}}]);