(function(e) {
	function t(t) {
		for (var i, n, l = t[0], r = t[1], d = t[2], p = 0, u = []; p < l.length; p++) n = l[p], Object.prototype.hasOwnProperty.call(o, n) && o[n] && u.push(o[n][0]), o[n] = 0;
		for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
		c && c(t);
		while (u.length) u.shift()();
		return s.push.apply(s, d || []), a()
	}

	function a() {
		for (var e, t = 0; t < s.length; t++) {
			for (var a = s[t], i = !0, l = 1; l < a.length; l++) {
				var r = a[l];
				0 !== o[r] && (i = !1)
			}
			i && (s.splice(t--, 1), e = n(n.s = a[0]))
		}
		return e
	}
	var i = {},
		o = {
			app: 0
		},
		s = [];

	function n(t) {
		if (i[t]) return i[t].exports;
		var a = i[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports
	}
	n.m = e, n.c = i, n.d = function(e, t, a) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: a
		})
	}, n.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var a = Object.create(null);
		if (n.r(a), Object.defineProperty(a, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e)
			for (var i in e) n.d(a, i, function(t) {
				return e[t]
			}.bind(null, i));
		return a
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "/";
	var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
		r = l.push.bind(l);
	l.push = t, l = l.slice();
	for (var d = 0; d < l.length; d++) t(l[d]);
	var c = r;
	s.push([0, "chunk-vendors"]), a()
})({
	0: function(e, t, a) {
		e.exports = a("56d7")
	},
	"034f": function(e, t, a) {
		"use strict";
		a("85ec")
	},
	"0cf5": function(e, t, a) {
		e.exports = a.p + "img/wechat.1130535c.svg"
	},
	1: function(e, t) {},
	"1c06": function(e, t, a) {
		"use strict";
		a("ced1")
	},
	2: function(e, t) {},
	3: function(e, t) {},
	"56d7": function(e, t, a) {
		"use strict";
		a.r(t);
		var i = a("2b0e"),
			o = a("5c96"),
			s = a.n(o),
			n = (a("0fae"), function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					attrs: {
						id: "app"
					}
				}, [a("div", {
					staticClass: "box-wrap"
				}, [a("Soft")], 1)])
			}),
			l = [],
			r = function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("el-container", {
					staticClass: "content panel"
				}, [i("el-dialog", {
					attrs: {
						title: "注意",
						visible: e.dialogVisible,
						width: "30%"
					},
					on: {
						"update:visible": function(t) {
							e.dialogVisible = t
						}
					}
				}, [i("span", [e._v("搜索内容不能为空")]), i("span", {
					staticClass: "dialog-footer",
					attrs: {
						slot: "footer"
					},
					slot: "footer"
				}, [i("el-button", {
					attrs: {
						type: "primary"
					},
					on: {
						click: function(t) {
							e.dialogVisible = !1
						}
					}
				}, [e._v("确 定")])], 1)]), i("el-dialog", {
					attrs: {
						title: "感谢您的支持",
						visible: e.qrAlipayDialogVisible,
						width: "30%"
					},
					on: {
						"update:visible": function(t) {
							e.qrAlipayDialogVisible = t
						}
					}
				}, [i("div", {
					staticStyle: {
						overflow: "auto"
					}
				}, [i("span", [i("el-image", {
					staticStyle: {
						width: "100%"
					},
					attrs: {
						src: "https://yaofan.quickso.cn/picture/hb.jpg",
						fit: "contain"
					}
				}, [i("div", {
					staticClass: "image-slot",
					attrs: {
						slot: "placeholder"
					},
					slot: "placeholder"
				}, [i("i", {
					staticClass: "el-icon-loading"
				}), e._v("加载中 ")])])], 1), i("span", [i("el-image", {
					staticStyle: {
						width: "100%"
					},
					attrs: {
						src: "https://yaofan.quickso.cn/img/alipay.webp",
						fit: "contain"
					}
				}, [i("div", {
					staticClass: "image-slot",
					attrs: {
						slot: "placeholder"
					},
					slot: "placeholder"
				}, [i("i", {
					staticClass: "el-icon-loading"
				}), e._v("加载中 ")])])], 1)]), i("span", {
					staticClass: "dialog-footer",
					attrs: {
						slot: "footer"
					},
					slot: "footer"
				}, [i("el-button", {
					attrs: {
						type: "primary"
					},
					on: {
						click: function(t) {
							e.qrAlipayDialogVisible = !1
						}
					}
				}, [e._v("确 定")])], 1)]), i("el-dialog", {
					attrs: {
						title: "感谢您的支持",
						visible: e.qrDialogVisible,
						width: "30%"
					},
					on: {
						"update:visible": function(t) {
							e.qrDialogVisible = t
						}
					}
				}, [i("div", {
					staticStyle: {
						overflow: "auto"
					}
				}, [i("span", [i("el-image", {
					staticStyle: {
						width: "100%"
					},
					attrs: {
						src: "https://yaofan.quickso.cn/img/weipay.webp",
						fit: "contain"
					}
				}, [i("div", {
					staticClass: "image-slot",
					attrs: {
						slot: "placeholder"
					},
					slot: "placeholder"
				}, [i("i", {
					staticClass: "el-icon-loading"
				}), e._v("加载中 ")])])], 1), i("span", [i("el-image", {
					staticStyle: {
						width: "100%"
					},
					attrs: {
						src: "https://yaofan.quickso.cn/img/alipay.webp",
						fit: "contain"
					}
				}, [i("div", {
					staticClass: "image-slot",
					attrs: {
						slot: "placeholder"
					},
					slot: "placeholder"
				}, [i("i", {
					staticClass: "el-icon-loading"
				}), e._v("加载中 ")])])], 1)]), i("span", {
					staticClass: "dialog-footer",
					attrs: {
						slot: "footer"
					},
					slot: "footer"
				}, [i("el-button", {
					attrs: {
						type: "primary"
					},
					on: {
						click: function(t) {
							e.qrDialogVisible = !1
						}
					}
				}, [e._v("确 定")])], 1)]), i("el-main", {
					staticClass: "panel-content"
				}, [i("el-row", {
					attrs: {
						type: "flex",
						justify: "center"
					}
				}, [i("el-col", {
					attrs: {
						xs: 20,
						sm: 20,
						lg: 17,
						xl: 13
					}
				}, [i("div", {
					staticClass: "index-notice"
				}, [i("div", {
					staticClass: "index-notice-item"
				}, [i("div", {
					staticClass: "index-notice-item-left"
				}, [i("div", {
					staticClass: "index-notice-item-icon"
				}, [i("i", {
					staticClass: "el-icon-magic-stick"
				})])]), i("div", {
					staticClass: "index-notice-item-right"
				}, [i("div", {
					staticClass: "index-notice-item-title"
				}, [e._v(" 公告信息 ")]), i("div", {
					staticClass: "index-notice-item-content"
				}, [e._v(" 最近在逐渐对快点PC软件站进行优化的过程中，发现了两个软件源的安装包存在部分差异，源A比源B捆绑了更多软件， 对此将默认软件源调整为默认官方B，目前看来官方B所携带的捆绑软件更少 "), i("br"), i("span", {
					staticStyle: {
						color: "orange",
						"font-weight": "bold"
					}
				}, [e._v(" 如果快点PC软件站帮到了您，您也觉得快点PC软件站不错，您可以考虑打赏，您的打赏会帮助维持服务器继续运行，谢谢 ")])]), i("div", {
					staticClass: "index-notice-item-link"
				}, [i("a", {
					staticStyle: {
						"font-style": "italic",
						color: "darkorange"
					},
					attrs: {
						href: "#",
						target: "_self"
					},
					on: {
						click: function(t) {
							e.qrDialogVisible = !0
						}
					}
				}, [e._v("🤞扫码打赏")]), i("a", {
					staticStyle: {
						"font-style": "italic",
						color: "darkorange",
						"margin-left": "10px"
					},
					attrs: {
						href: "#",
						target: "_self"
					},
					on: {
						click: function(t) {
							e.qrAlipayDialogVisible = !0
						}
					}
				}, [e._v("🖖支付宝红包")])])])])])])], 1), i("el-row", {
					staticClass: "top-target",
					staticStyle: {
						"margin-top": "20px"
					},
					attrs: {
						type: "flex",
						justify: "center"
					}
				}, [i("el-col", {
					attrs: {
						xs: 20,
						sm: 20,
						lg: 17,
						xl: 13
					}
				}, [i("el-autocomplete", {
					staticClass: "search-input",
					attrs: {
						placeholder: e.searchPlaceHolder,
						"fetch-suggestions": e.querySearchAsync,
						clearable: ""
					},
					on: {
						select: e.handleSelectSuggestion
					},
					nativeOn: {
						keyup: function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.handleSearch.apply(null, arguments)
						}
					},
					model: {
						value: e.searchKeyword,
						callback: function(t) {
							e.searchKeyword = t
						},
						expression: "searchKeyword"
					}
				}, [i("el-select", {
					staticStyle: {
						width: "100px"
					},
					attrs: {
						slot: "prepend",
						placeholder: "请选择"
					},
					on: {
						change: e.handleSelect
					},
					slot: "prepend",
					model: {
						value: e.provider,
						callback: function(t) {
							e.provider = t
						},
						expression: "provider"
					}
				}, [i("el-option", {
					attrs: {
						label: "官方A",
						value: "tencent"
					}
				}), i("el-option", {
					attrs: {
						label: "官方B",
						value: "360"
					}
				})], 1), i("el-button", {
					attrs: {
						slot: "append",
						icon: "el-icon-search"
					},
					on: {
						click: e.handleSearch
					},
					slot: "append"
				})], 1)], 1)], 1), i("el-row", {
					staticStyle: {
						"margin-top": "15px"
					},
					attrs: {
						type: "flex",
						justify: "center"
					}
				}, [i("el-col", {
					attrs: {
						xs: 20,
						sm: 20,
						lg: 17,
						xl: 13
					}
				}, [i("el-tabs", {
					attrs: {
						type: "border-card"
					},
					on: {
						"tab-remove": e.removeTab
					},
					model: {
						value: e.editableTabsValue,
						callback: function(t) {
							e.editableTabsValue = t
						},
						expression: "editableTabsValue"
					}
				}, e._l(e.editableTabs, (function(t, o) {
					return i("el-tab-pane", {
						key: o,
						attrs: {
							label: t.title,
							name: t.name,
							closable: t.closable
						}
					}, [i("el-row", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: !t.isList && !t.isSupport,
							expression: "!item.isList && !item.isSupport"
						}],
						staticClass: "index-panel",
						attrs: {
							type: "flex",
							justify: "center"
						}
					}, [i("el-carousel", {
						attrs: {
							height: "150px"
						}
					}, e._l(e.indexData.banner, (function(e, t) {
						return i("el-carousel-item", {
							key: t
						}, [i("a", {
							attrs: {
								href: e.link,
								target: e.target
							}
						}, [i("img", {
							staticStyle: {
								width: "100%",
								height: "auto"
							},
							attrs: {
								src: e.image
							}
						})])])
					})), 1), e._l(e.indexData.recommend, (function(t, a) {
						return i("div", {
							key: a,
							staticClass: "rec-panel"
						}, [i("el-divider", {
							attrs: {
								"content-position": "left"
							}
						}, [i("img", {
							staticStyle: {
								"margin-right": "5px",
								width: "20px"
							},
							attrs: {
								src: t.icon
							}
						}), i("h3", [e._v(e._s(t.title))])]), e._l(e.indexData.recommend[a].recommendList, (function(t, a) {
							return i("el-card", {
								key: a,
								staticClass: "rec-item",
								attrs: {
									shadow: "hover"
								},
								nativeOn: {
									click: function(a) {
										return e.handleIndex(t)
									}
								}
							}, [i("img", {
								attrs: {
									src: t.icon
								}
							}), i("div", {
								staticClass: "item-desc"
							}, [i("span", [e._v(e._s(t.title))]), i("span", {
								directives: [{
									name: "show",
									rawName: "v-show",
									value: 1 === t.type,
									expression: "item.type === 1"
								}]
							}, [e._v("分类")]), i("span", {
								directives: [{
									name: "show",
									rawName: "v-show",
									value: 2 === t.type,
									expression: "item.type === 2"
								}]
							}, [e._v("软件")]), i("span", {
								directives: [{
									name: "show",
									rawName: "v-show",
									value: 3 === t.type,
									expression: "item.type === 3"
								}],
								staticStyle: {
									color: "red"
								}
							}, [e._v("广告")])])])
						}))], 2)
					}))], 2), i("el-row", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: !t.isList && t.isSupport,
							expression: "!item.isList && item.isSupport"
						}],
						staticClass: "index-panel",
						attrs: {
							type: "flex",
							justify: "center"
						}
					}, [i("div", [i("el-dropdown", {
						on: {
							command: e.handleSwitchMonth
						}
					}, [i("span", {
						staticClass: "el-dropdown-link"
					}, [e._v(" " + e._s(e.currentYearMonth) + " "), i("i", {
						staticClass: "el-icon-arrow-down el-icon--right"
					})]), i("el-dropdown-menu", {
						attrs: {
							slot: "dropdown"
						},
						slot: "dropdown"
					}, [i("el-dropdown-item", {
						attrs: {
							command: "2022-7"
						}
					}, [e._v("2022年7月")]), i("el-dropdown-item", {
						attrs: {
							command: "2022-6"
						}
					}, [e._v("2022年6月")])], 1)], 1), i("div", {
						staticStyle: {
							color: "darkorange",
							"font-weight": "bold",
							"font-size": "14px"
						}
					}, [e._v("本月感谢以下各位的帮助，排名不分先后"), i("br")])], 1), i("el-skeleton", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: !e.supportLoaded,
							expression: "!supportLoaded"
						}],
						attrs: {
							rows: 6,
							animated: ""
						}
					}), i("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: e.supportLoaded,
							expression: "supportLoaded"
						}]
					}, [i("el-progress", {
						attrs: {
							percentage: e.supportMoney.receiveMoney / e.supportMoney.needMoney * 100,
							format: e.calcProgress
						}
					}), i("div", {
						staticStyle: {
							display: "flex"
						}
					}, [i("el-table", {
						staticStyle: {
							width: "50%"
						},
						attrs: {
							data: e.oddTable,
							stripe: ""
						}
					}, [i("el-table-column", {
						attrs: {
							prop: "name",
							label: "用户",
							width: "180"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return [i("div", {
									staticStyle: {
										display: "flex",
										"align-items": "center"
									}
								}, ["wechat" === t.row.source ? i("img", {
									attrs: {
										src: a("0cf5"),
										height: "16"
									}
								}) : e._e(), "alipay" === t.row.source ? i("img", {
									attrs: {
										src: a("a3a8"),
										height: "16"
									}
								}) : e._e(), i("div", {
									staticStyle: {
										width: "1rem"
									}
								}), t.row.any ? i("div", {
									staticStyle: {
										color: "gray",
										"font-style": "italic"
									}
								}, [e._v(" 匿名微信用户 ")]) : i("div", [e._v(e._s(t.row.name))])])]
							}
						}], null, !0)
					}), i("el-table-column", {
						attrs: {
							prop: "money",
							label: "金额"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return [e._v(" " + e._s(t.row.money.toFixed(2)) + "元 ")]
							}
						}], null, !0)
					})], 1), i("el-table", {
						staticStyle: {
							width: "50%"
						},
						attrs: {
							data: e.evenTable,
							stripe: ""
						}
					}, [i("el-table-column", {
						attrs: {
							prop: "name",
							label: "用户",
							width: "180"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return [i("div", {
									staticStyle: {
										display: "flex",
										"align-items": "center"
									}
								}, ["wechat" === t.row.source ? i("img", {
									attrs: {
										src: a("0cf5"),
										height: "16"
									}
								}) : e._e(), "alipay" === t.row.source ? i("img", {
									attrs: {
										src: a("a3a8"),
										height: "16"
									}
								}) : e._e(), i("div", {
									staticStyle: {
										width: "1rem"
									}
								}), t.row.any ? i("div", {
									staticStyle: {
										color: "gray",
										"font-style": "italic"
									}
								}, [e._v(" 匿名微信用户 ")]) : i("div", [e._v(e._s(t.row.name))])])]
							}
						}], null, !0)
					}), i("el-table-column", {
						attrs: {
							prop: "money",
							label: "金额"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return [e._v(" " + e._s(t.row.money.toFixed(2)) + "元 ")]
							}
						}], null, !0)
					})], 1)], 1)], 1)], 1), i("el-row", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.isList && e.iAmTopNow && 30 !== t.type && 31 !== t.type,
							expression: "item.isList && iAmTopNow && item.type !== 30 && item.type !== 31"
						}],
						staticClass: "soft-list",
						attrs: {
							type: "flex",
							justify: "center"
						}
					}, [i("el-col", [i("el-table", {
						ref: "softTable",
						refInFor: !0,
						staticStyle: {
							width: "100%"
						},
						attrs: {
							data: t.tableData,
							stripe: ""
						},
						on: {
							"expand-change": e.handleExpanded
						}
					}, [i("el-table-column", {
						attrs: {
							type: "expand"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return [i("el-form", {
									staticClass: "soft-table-expand",
									attrs: {
										"label-position": "left",
										inline: ""
									}
								}, [i("el-form-item", {
									attrs: {
										label: "软件名称"
									}
								}, [i("span", [e._v(e._s(t.row.softName))])]), i("el-form-item", {
									attrs: {
										label: "软件版本"
									}
								}, [i("span", [e._v(e._s(t.row.versionName))])]), i("el-form-item", {
									attrs: {
										label: "更新时间"
									}
								}, [i("span", [e._v(e._s(e.convertUpdateDate(t.row.updateTime)[0]))])]), i("el-form-item", {
									attrs: {
										label: "下载大小"
									}
								}, [i("span", [e._v(e._s(t.row.fileSize))])]), t.row.pluginInfo ? i("el-form-item", {
									staticStyle: {
										color: "red",
										"font-wight": "bold"
									},
									attrs: {
										label: "包含插件"
									}
								}, [i("span", [e._v(e._s(t.row.pluginInfo))])]) : e._e(), i("el-form-item", {
									attrs: {
										label: "软件评分"
									}
								}, [i("el-rate", {
									staticClass: "soft-rate",
									attrs: {
										disabled: "",
										"text-color": "#ff9900"
									},
									model: {
										value: t.row.point,
										callback: function(a) {
											e.$set(t.row, "point", a)
										},
										expression: "props.row.point"
									}
								})], 1), i("el-form-item", {
									attrs: {
										label: "收费机制"
									}
								}, [i("span", [e._v(e._s(t.row.isFree ? "免费" : "付费"))])]), t.row.trial ? i("el-form-item", {
									attrs: {
										label: "试用时长"
									}
								}, [i("span", [e._v(e._s(t.row.trial) + " "), "tencent" === e.provider ? i("span", [e._v("天")]) : e._e()])]) : e._e(), t.row.whatsNew ? i("el-form-item", {
									attrs: {
										label: "本次更新"
									}
								}, [i("span", [e._v(e._s(t.row.whatsNew))])]) : e._e(), t.row.softDesc ? i("el-form-item", {
									attrs: {
										label: "软件介绍"
									}
								}, [i("span", [e._v(e._s(t.row.softDesc))])]) : e._e()], 1)]
							}
						}], null, !0)
					}), i("el-table-column", {
						attrs: {
							width: "100"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return ["tencent" === e.provider ? i("el-image", {
									staticStyle: {
										margin: "5px",
										width: "48px",
										height: "48px"
									},
									attrs: {
										src: t.row.logo.toLowerCase(),
										fit: "cover"
									}
								}) : e._e(), "360" === e.provider ? i("el-image", {
									staticStyle: {
										margin: "5px",
										width: "48px",
										height: "48px"
									},
									attrs: {
										src: t.row.logo,
										fit: "cover"
									}
								}) : e._e()]
							}
						}], null, !0)
					}), i("el-table-column", {
						attrs: {
							prop: "softName",
							label: "名称",
							width: "180"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return [i("div", {
									staticClass: "soft-name"
								}, [e._v(" " + e._s(t.row.softName) + " ")]), i("div", {
									staticClass: "soft-feature"
								}, [e._v(" " + e._s(t.row.feature) + " ")])]
							}
						}], null, !0)
					}), i("el-table-column", {
						attrs: {
							prop: "versionName",
							label: "版本",
							width: "140"
						}
					}), i("el-table-column", {
						attrs: {
							prop: "updateTime",
							label: "更新日期"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return [e._v(" " + e._s(t.row.updateTime)), i("br"), e.convertUpdateDate(t.row.updateTime)[1] < 60 ? i("span", {
									staticStyle: {
										color: "#67C23A"
									}
								}, [e._v(" " + e._s(e.convertUpdateDate(t.row.updateTime)[2]) + " ")]) : e.convertUpdateDate(t.row.updateTime)[1] < 180 ? i("span", {
									staticStyle: {
										color: "#E6A23C"
									}
								}, [e._v(" " + e._s(e.convertUpdateDate(t.row.updateTime)[2]) + " ")]) : e.convertUpdateDate(t.row.updateTime)[1] < 365 ? i("span", {
									staticStyle: {
										color: "#F56C6C"
									}
								}, [e._v(" " + e._s(e.convertUpdateDate(t.row.updateTime)[2]) + " ")]) : i("span", {
									staticStyle: {
										color: "#F56C6C"
									}
								}, [e._v(" !" + e._s(e.convertUpdateDate(t.row.updateTime)[2]) + "! ")])]
							}
						}], null, !0)
					}), i("el-table-column", {
						attrs: {
							fixed: "right",
							width: "100"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return [i("div", [i("el-button", {
									attrs: {
										type: "text",
										target: "_blank"
									},
									on: {
										click: function(a) {
											return e.downloadFile(t.row.downloadLink, t.row.pluginInfo)
										}
									}
								}, [e._v("下载")])], 1)]
							}
						}], null, !0)
					})], 1)], 1)], 1), i("el-row", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.isList && e.iAmTopNow && 30 === t.type,
							expression: "item.isList && iAmTopNow && item.type === 30"
						}],
						staticClass: "soft-list",
						attrs: {
							type: "flex",
							justify: "center"
						}
					}, [i("el-col", [i("el-table", {
						ref: "softTable",
						refInFor: !0,
						staticStyle: {
							width: "100%"
						},
						attrs: {
							data: t.tableData,
							stripe: ""
						}
					}, [i("el-table-column", {
						attrs: {
							prop: "dllName",
							label: "名称",
							width: "240"
						}
					}), i("el-table-column", {
						attrs: {
							prop: "dllDesc",
							label: "说明",
							width: "260"
						}
					}), i("el-table-column", {
						attrs: {
							fixed: "right",
							width: "100"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(t) {
								return [i("div", [i("el-link", {
									attrs: {
										type: "primary",
										rel: "noreferrer",
										target: "_blank"
									},
									on: {
										click: function(a) {
											return e.handleDllInfo(t.row.dllName)
										}
									}
								}, [e._v("查看详细 ")])], 1)]
							}
						}], null, !0)
					})], 1)], 1)], 1), i("el-row", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.isList && e.iAmTopNow && 31 === t.type,
							expression: "item.isList && iAmTopNow && item.type === 31"
						}],
						staticClass: "soft-list",
						attrs: {
							type: "flex",
							justify: "center"
						}
					}, [i("el-col", [i("el-table", {
						ref: "softTable",
						refInFor: !0,
						staticStyle: {
							width: "100%"
						},
						attrs: {
							data: t.tableData,
							stripe: ""
						}
					}, [i("el-table-column", {
						attrs: {
							prop: "dllVersion",
							label: "版本号",
							width: "100"
						}
					}), i("el-table-column", {
						attrs: {
							prop: "dllArch",
							label: "位数支持",
							width: "100"
						}
					}), i("el-table-column", {
						attrs: {
							prop: "dllInfo",
							label: "版本说明"
						}
					}), i("el-table-column", {
						attrs: {
							fixed: "right",
							width: "100"
						},
						scopedSlots: e._u([{
							key: "default",
							fn: function(a) {
								return [i("div", [i("el-link", {
									attrs: {
										type: "primary",
										rel: "noreferrer",
										target: "_blank"
									},
									on: {
										click: function(i) {
											return e.handleDllDownload(t.name, a.row.dllLink)
										}
									}
								}, [e._v("下载 ")])], 1)]
							}
						}], null, !0)
					})], 1)], 1)], 1), i("el-row", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.pageChange.Show,
							expression: "item.pageChange.Show"
						}],
						ref: "pageChange",
						refInFor: !0,
						staticClass: "page-change",
						attrs: {
							type: "flex",
							justify: "center"
						}
					}, [i("el-col", {
						staticStyle: {
							width: "auto"
						}
					}, [i("el-button", {
						attrs: {
							type: "primary",
							icon: "el-icon-arrow-left",
							disabled: t.pageChange.Last.Disable,
							loading: t.pageChange.Last.Loading,
							circle: ""
						},
						on: {
							click: function(a) {
								return e.handlePageChange(t.id, -1)
							}
						}
					}), i("span", {
						staticStyle: {
							"margin-left": "20px",
							"margin-right": "20px"
						}
					}, [e._v(" " + e._s(t.pageNow) + " ")]), i("el-button", {
						attrs: {
							type: "primary",
							icon: "el-icon-arrow-right",
							disabled: t.pageChange.Next.Disable,
							loading: t.pageChange.Next.Loading,
							circle: ""
						},
						on: {
							click: function(a) {
								return e.handlePageChange(t.id, 1)
							}
						}
					})], 1)], 1)], 1)
				})), 1)], 1)], 1), i("el-row", {
					staticStyle: {
						"margin-top": "15px"
					},
					attrs: {
						type: "flex",
						justify: "center"
					}
				}, [i("el-col", {
					attrs: {
						xs: 20,
						sm: 20,
						lg: 17,
						xl: 13
					}
				}, [i("div", {
					staticStyle: {
						display: "flex",
						"justify-content": "center",
						"align-items": "center",
						"font-size": "small",
						color: "darkgrey"
					}
				}, [e._v(" 问题反馈邮箱：muzihuaner@qq.com ")])])], 1), i("el-backtop", {
					attrs: {
						target: ".top-target",
						"visibility-height": 1
					}
				})], 1)], 1)
			},
			d = [],
			c = a("bc3a"),
			p = a.n(c);
		a("4328");
		const u = a("bc3a"),
			h = a("fe84");
		var g = {
			softSearch: async (e, t) => {
				const a = await u.get("https://softapi.tinybad.cn/release/360/" + h(e));
				let i = a.data;
				i = i.replace("getWebSoftListResult", "")
					.substr(2), i = i.substr(0, i.length - 1);
				let o, s, n, l, r, d, c, p, g, m = JSON.parse(i),
					b = m.data,
					w = "",
					v = "",
					y = "",
					_ = [];
				for (let u = 0; u < b.length; u++) {
					w = b[u].name, o = b[u].edition_info.default_edition.version, v = b[u].edition_info.default_edition.pubtime;
					let e = new Date(1e3 * v);
					v = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate(), y = b[u].edition_info.default_edition.down.default.durl.split("|||")[0], s = b[u].logo["48_trans"], n = b[u].brief, n.length > 30 && (n = n.substring(0, 29) + "..."), l = b[u].edition_info.default_edition.down.default.size, r = b[u].desc, d = b[u].edition_info.default_edition.plugin.intro, c = b[u].qrank, p = "2" === b[u].edition_info.default_edition.free.flag, g = b[u].edition_info.default_edition.free.intro, _.push({
						softName: w,
						versionName: o,
						updateTime: v,
						downloadLink: y,
						logo: s,
						feature: n,
						fileSize: f(l),
						softDesc: r,
						pluginInfo: d,
						point: parseInt(c) / 20,
						isFree: p,
						trial: g
					})
				}
				return _ = _.slice(0, t), _
			},
			softList: async (e, t) => {
				const a = await u.get("https://softapi.tinybad.cn/release/cate?goto=" + e + "&page=" + t);
				let i, o, s, n, l, r, d, c, p, h = a.data.data,
					g = "",
					m = "",
					b = "",
					w = [];
				for (let u = 0; u < h.length; u++) {
					g = h[u].name, i = h[u].edition_info.default_edition.version, m = h[u].edition_info.default_edition.pubtime;
					let e = new Date(1e3 * m);
					m = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
					let t = h[u].edition_info.default_edition.down.default.p2p.split("|");
					b = null === h[u].edition_info.default_edition.down.default.durl ? t[t.length - 1] : h[u].edition_info.default_edition.down.default.durl.split("|||")[0], o = h[u].logo["48_trans"], s = h[u].brief, s.length > 30 && (s = s.substring(0, 29) + "..."), n = h[u].edition_info.default_edition.down.default.size, l = h[u].desc, r = h[u].edition_info.default_edition.plugin.intro, d = h[u].qrank, c = "2" === h[u].edition_info.default_edition.free.flag, p = h[u].edition_info.default_edition.free.intro, w.push({
						softName: g,
						versionName: i,
						updateTime: m,
						downloadLink: b,
						logo: o,
						feature: s,
						fileSize: f(n),
						softDesc: l,
						pluginInfo: r,
						point: parseInt(d) / 20,
						isFree: c,
						trial: p
					})
				}
				return w
			}
		};
		const f = e => {
				let t = "";
				t = e < 1024 ? e.toFixed(2) + "B" : e < 1048576 ? (e / 1024)
					.toFixed(2) + "KB" : e < 1073741824 ? (e / 1048576)
					.toFixed(2) + "MB" : (e / 1073741824)
					.toFixed(2) + "GB";
				var a = t + "",
					i = a.indexOf("."),
					o = a.substr(i + 1, 2);
				return "00" === o ? a.substring(0, i) + a.substr(i + 3, 2) : t
			},
			m = a("bc3a"),
			b = "http://pc3.gtimg.com/softmgr/logo/48/";
		var w = {
			softSearch: async (e, t, a) => {
				const i = await m.get("https://softapi.tinybad.cn/release/tencent/" + e + "/" + t + "/" + a);
				let o = i.data;
				o = o.replace("searchCallback", "")
					.substr(1)
					.replace(/\);/, "");
				let s, n, l, r, d, c, p, u, h, g = JSON.parse(o),
					f = g.list,
					w = "",
					_ = "",
					x = "",
					S = [];
				for (let m = 0; m < f.length; m++) {
					let e = f[m].xmlInfo;
					w = f[m].SoftName, s = e.substring(e.indexOf("<versionname>") + 13, e.indexOf("</versionname>")), _ = e.substring(e.indexOf("<publishdate>") + 13, e.indexOf("</publishdate>")), x = e.substring(e.indexOf("<url>") + 5, e.indexOf("</url>"))
						.replace("<![CDATA[", "")
						.replace("]]>", "")
						.trim(), n = b + e.substring(e.indexOf("<logo48>") + 8, e.indexOf("</logo48>")), l = e.substring(e.indexOf("<feature>") + 9, e.indexOf("</feature>"))
						.replace("<![CDATA[", "")
						.replace("]]>", "")
						.trim(), r = e.substring(e.indexOf("<filesize>") + 10, e.indexOf("</filesize>")), d = v(e, "whatsnew"), c = v(e, "plugininfo"), p = v(e, "point"), u = 0 === parseInt(v(e, "free")), h = v(e, "trial"), S.push({
							softName: w,
							versionName: s,
							updateTime: _,
							downloadLink: x,
							logo: n,
							feature: l,
							fileSize: y(r),
							whatsNew: d,
							pluginInfo: c,
							point: parseInt(p) / 20,
							isFree: u,
							trial: h
						})
				}
				return S
			}
		};
		const v = (e, t) => -1 !== e.indexOf("<" + t + ">") ? e.substring(e.indexOf("<" + t + ">") + t.length + 2, e.indexOf("</" + t + ">"))
			.replace("<![CDATA[", "")
			.replace("]]>", "")
			.trim() : null,
			y = e => {
				let t = "";
				t = e < 1024 ? e.toFixed(2) + "B" : e < 1048576 ? (e / 1024)
					.toFixed(2) + "KB" : e < 1073741824 ? (e / 1048576)
					.toFixed(2) + "MB" : (e / 1073741824)
					.toFixed(2) + "GB";
				var a = t + "",
					i = a.indexOf("."),
					o = a.substr(i + 1, 2);
				return "00" === o ? a.substring(0, i) + a.substr(i + 3, 2) : t
			};
		let _ = "https://softapi.tinybad.cn/release";

		function x(e, t) {
			return new Promise((a, i) => {
				p.a.get(e, {
						params: t
					})
					.then(e => {
						a(e.data)
					})
					.catch(e => {
						i(e.data)
					})
			})
		}
		p.a.defaults.baseURL = "https://softapi.tinybad.cn/release", p.a.defaults.timeout = 1e4, p.a.interceptors.response.use(e => 200 === e.status ? Promise.resolve(e) : Promise.reject(e), e => {
			if (e.response.status) {
				switch (e.response.status) {
					default:
						o["Message"].error(e.response.data.message)
				}
				return Promise.reject(e.response)
			}
		});
		const S = e => {
				switch (e._provider) {
					case "tencent":
						return w.softSearch(e.keyword, e.num, e.page);
					case "360":
						return g.softSearch(e.keyword, e.num);
					case "dll":
						return x("dll-files/Search", e)
				}
			},
			T = e => {
				console.log(e)
			},
			k = e => {
				switch (e._provider) {
					case "tencent":
						return x("tencentSoft/softList", e);
					case "360":
						return g.softList(e.goto, e.page)
				}
			},
			D = e => x("dll-files/getInfo", e),
			N = e => x("dll-files/getLink", e),
			C = e => x(_ + "/supportInfo/" + e, null);
		var L = {
				data: function() {
					return {
						provider: "360",
						oldSelect: "360",
						dialogVisible: !1,
						qrDialogVisible: !1,
						qrAlipayDialogVisible: !1,
						currentYearMonth: "",
						progressDialogVisible: !1,
						searchKeyword: "",
						searchPlaceHolder: "请输入软件名开始搜索",
						tableData: [],
						rewardShow: !0,
						iAmTopNow: !0,
						oddTable: [],
						evenTable: [],
						editableTabsValue: "全部推荐",
						supportMoney: {},
						supportLoaded: !1,
						existSearchTab: !1,
						editableTabs: [{
							id: 1,
							closable: !1,
							title: "全部推荐",
							name: "全部推荐",
							content: "这是全部推荐",
							isList: !1,
							isSupport: !1,
							type: 1,
							pageChange: {
								pageNow: 1,
								Show: !1,
								Last: {
									Disable: !0,
									Loading: !1
								},
								Next: {
									Disable: !1,
									Loading: !1
								}
							}
						}, {
							id: 1,
							closable: !1,
							title: "本月进度",
							name: "本月进度",
							content: "这是本月进度",
							isList: !1,
							isSupport: !0,
							type: 1,
							pageChange: {
								pageNow: 1,
								Show: !1,
								Last: {
									Disable: !0,
									Loading: !1
								},
								Next: {
									Disable: !1,
									Loading: !1
								}
							}
						}],
						indexData: {
							notice: [{
								type: "success",
								title: "在线版正在测试",
								description: "但是你依然可以使用桌面版",
								showIcon: !1
							}],
							banner: [{
								key: 1,
								title: "三点下载",
								image: "../images/banner.png",
								link: "#",
								target: "_self"
							}],
							recommend: [{
								title: "热门软件",
								icon: "../images/hot.svg",
								recommendList: [{
									title: "常用软件",
									provider: "360",
									type: 1,
									goto: "baoku/list_1_0/0_1_",
									icon: "http://p19.qhmsg.com/d/_open360/logo48/100101123_48_1.png"
								}, {
									title: "QQ",
									provider: "360",
									type: 2,
									icon: "//pc3.gtimg.com/softmgr/logo/48/2_48_1482283025.png"
								}, {
									title: "微信",
									provider: "360",
									type: 2,
									icon: "//pc3.gtimg.com/softmgr/logo/48/11488_48_1616464914.png"
								}, {
									title: "网易云音乐",
									provider: "360",
									type: 2,
									icon: "//pc3.gtimg.com/softmgr/logo/48/11167_48_1483600915.png"
								}, {
									title: "TIM",
									provider: "360",
									type: 2,
									icon: "//pc3.gtimg.com/softmgr/logo/48/23258_48_1585706547.png"
								}, {
									title: "钉钉",
									provider: "360",
									type: 2,
									icon: "//pc3.gtimg.com/softmgr/logo/48/26980_48_1610695420.png"
								}, {
									title: "Bandizip",
									provider: "360",
									type: 2,
									icon: "//pc3.gtimg.com/softmgr/logo/48/10268_48_1492393207.png"
								}, {
									title: "WeGame",
									provider: "360",
									type: 2,
									icon: "//pc3.gtimg.com/softmgr/logo/48/23761_48_1637209184.png"
								}]
							}]
						},
						actionCount: {
							download: 0,
							use: 0,
							search: 0
						},
						state: ""
					}
				},
				methods: {
					handleSearch() {
						if ("" === this.searchKeyword.trim()) this.dialogVisible = !0;
						else {
							const e = this.$loading({
								lock: !0,
								text: "正在搜索：" + this.searchKeyword,
								spinner: "el-icon-loading",
								background: "rgba(0, 0, 0, 0.7)"
							});
							S({
									_provider: this.provider,
									keyword: this.searchKeyword,
									num: 30,
									page: 1
								})
								.then(t => {
									if (T({
										event: "searchEvent",
										version: this.nowVersionName,
										info: {
											provider: this.provider,
											keyword: this.searchKeyword
										}
									}), e.close(), "dll" === this.provider) {
										this.editableTabs.some(e => "DLL搜索" === e.name) || this.addTab({
											res: t
										}, 30);
										let e = this.arrayGet(this.editableTabs, 30001);
										e.tableData = t, e.pageNow = 1, this.editableTabsValue = "DLL搜索", e.pageChange.Show = !1
									} else {
										this.editableTabs.some(e => "搜索结果" === e.name) || this.addTab({
											res: t
										}, 1);
										let e = this.arrayGet(this.editableTabs, 10001);
										e.tableData = t, e.pageNow = 1, this.editableTabsValue = "搜索结果", e.pageChange.Show = "tencent" === this.provider, 30 === this.tableData.length && "tencent" === this.provider && (this.arrayGet(this.editableTabs, 10001)
											.pageChange.Show = !0)
									}
								})
								.catch(t => {
									e.close(), this.$message.error("糟糕！遇到错误！" + t), T({
										event: "searchError",
										version: this.nowVersionName,
										info: t
									})
								})
						}
					},
					handleDllInfo(e) {
						if (null === e || void 0 === e || "" === e) return;
						const t = this.$loading({
							lock: !0,
							text: "正在获取：" + e,
							spinner: "el-icon-loading",
							background: "rgba(0, 0, 0, 0.7)"
						});
						D({
								name: e
							})
							.then(a => {
								T({
									event: "dllInfoEvent",
									version: this.nowVersionName,
									info: {
										dllName: e
									}
								}), t.close(), this.addTab({
									res: a,
									name: e
								}, 31), this.editableTabsValue = e
							})
					},
					handleExpanded(e, t) {
						t.length > 1 && this.$refs.softTable.toggleRowExpansion(t[0], !1)
					},
					handlePageChange(e, t) {
						let a = this.arrayGet(this.editableTabs, e); - 1 === t && 1 === a.pageNow ? this.$alert("当前已经是第一页了，不能再往上翻了", "错误", {
							confirmButtonText: "确定"
						}) : 2 === a.type ? 1 === t && a.tableData.length < 30 ? this.$alert("没有更多数据了", "错误", {
							confirmButtonText: "确定"
						}) : (this.togglePageButtonLoading(a, !0), S({
								_provider: this.provider,
								keyword: this.searchKeyword,
								num: 30,
								page: a.pageNow + t
							})
							.then(e => {
								a.pageNow += t, a.pageChange.Last.Disable = a.pageNow <= 1, a.pageChange.Next.Disable = e.length < 30, a.tableData = e, this.togglePageButtonLoading(a, !1), this.goTop(), this.iAmTopNow = !1, setTimeout(() => {
									this.iAmTopNow = !0
								}, 1)
							})
							.catch(e => {
								this.togglePageButtonLoading(a, !1), this.$message.error("糟糕！遇到错误！" + e)
							})) : -1 === a.type && (1 === t && a.tableData.length < 50 ? this.$alert("没有更多数据了", "错误", {
							confirmButtonText: "确定"
						}) : (this.togglePageButtonLoading(a, !0), k({
								_provider: "360",
								goto: a.id,
								page: a.pageNow + t
							})
							.then(e => {
								a.pageNow += t, a.pageChange.Last.Disable = a.pageNow <= 1, a.pageChange.Next.Disable = e.length < 50, a.tableData = e, this.togglePageButtonLoading(a, !1), this.goTop(), this.iAmTopNow = !1, setTimeout(() => {
									this.iAmTopNow = !0
								}, 1)
							})
							.catch(e => {
								this.togglePageButtonLoading(a, !1), this.$message.error("糟糕！遇到错误！" + e)
							})))
					},
					togglePageButtonLoading(e, t) {
						e.pageChange.Last.Loading = t, e.pageChange.Next.Loading = t
					},
					goTop() {
						this.timer = window.setInterval(() => {
							let e = document.documentElement.scrollTop || document.body.scrollTop,
								t = Math.floor(-e / 5);
							document.documentElement.scrollTop = document.body.scrollTop = e + t, 0 === e && clearInterval(this.timer)
						}, 20)
					},
					handleSelect() {
						let e = this.arrayGet(this.editableTabs, 10001);
						this.oldSelect !== this.provider && (e.tableData = [], e.pageChange.Show = !1, this.oldSelect = this.provider)
					},
					addTask(e, t) {
						let a = null;
						a = {
								uris: [e],
								outs: "",
								options: {
									dir: this.downloadDir,
									out: t,
									selectFile: "",
									split: 16,
									header: {
										userAgent: "",
										referer: "",
										cookie: ""
									}
								}
							}, this.$store.dispatch("task/addUri", a)
							.then(() => {
								T({
									event: "downloadSoftware",
									version: this.nowVersionName,
									info: a
								})
							})
							.catch(e => {
								T({
									event: "downloadSoftwareError",
									version: this.nowVersionName,
									info: e
								}), this.$msg.error(e.message)
							})
					},
					buildFileName(e) {
						let t = e.softName,
							a = e.versionName,
							i = e.downloadLink;
						return i = /\.[^.]+$/.exec(i), t + "_" + a + i
					},
					removeTab(e) {
						let t = this.editableTabs,
							a = this.editableTabsValue;
						"搜索结果" === e && (this.existSearchTab = !1), a === e && t.forEach((i, o) => {
							if (i.name === e) {
								let e = t[o + 1] || t[o - 1];
								e && (a = e.name)
							}
						}), this.editableTabsValue = a, this.editableTabs = t.filter(t => t.name !== e)
					},
					arrayGet(e, t) {
						for (let a = 0; a < e.length; a++)
							if (e[a].id === t) return e[a];
						return {}
					},
					handleIndex(e) {
						const t = e;
						if (1 === e.type) {
							const a = this.$loading({
								lock: !0,
								text: "正在前往：" + e.title,
								spinner: "el-icon-loading",
								background: "rgba(0, 0, 0, 0.7)"
							});
							k({
									_provider: e.provider,
									goto: e.goto,
									page: 1
								})
								.then(e => {
									a.close(), this.editableTabs.some(e => e.name === t.provider + t.title) || this.editableTabs.push({
										id: t.goto,
										title: t.title,
										name: t.provider + t.title,
										content: "Tab content",
										isList: !0,
										closable: !0,
										tableData: e,
										pageNow: 1,
										type: -1,
										provider: t.provider,
										pageChange: {
											Show: !0,
											Last: {
												Disable: !0,
												Loading: !1
											},
											Next: {
												Disable: !1,
												Loading: !1
											}
										}
									});
									let i = this.arrayGet(this.editableTabs, t.goto);
									i.tableData = e, i.pageNow = 1, this.editableTabsValue = t.provider + t.title, 50 === i.tableData.length && (this.arrayGet(this.editableTabs, t.goto)
										.pageChange.Show = !0), T({
										event: "useIndexCate",
										version: this.nowVersionName,
										info: i
									})
								})
								.catch(e => {
									a.close(), this.$message.error("糟糕！遇到错误！" + e), T({
										event: "useIndexCateError",
										version: this.nowVersionName,
										info: e
									})
								})
						} else 2 === e.type ? (this.searchKeyword = e.title, this.provider = e.provider, this.handleSearch(), T({
							event: "downloadSoftwareByIndex",
							version: this.nowVersionName,
							info: e
						})) : 3 === e.type && (T({
							event: "openIndexLink",
							version: this.nowVersionName,
							info: e
						}), window.open(e.goto, "_blank"))
					},
					addTab(e, t) {
						let a = 10001,
							i = "搜索结果",
							o = "搜索结果",
							s = 2,
							n = e.res;
						2 === t && (a = e.goto, i = e.name, o = e.porvider + e.name), 30 === t && (a = 30001, i = "DLL搜索", s = 30, o = "DLL搜索"), 31 === t && (a = e.name, i = e.name, s = 31, o = e.name), this.editableTabs.push({
							id: a,
							title: i,
							name: o,
							content: "Tab content",
							isList: !0,
							closable: !0,
							tableData: n,
							pageNow: 1,
							type: s,
							pageChange: {
								Show: !1,
								Last: {
									Disable: !0,
									Loading: !1
								},
								Next: {
									Disable: !1,
									Loading: !1
								}
							}
						})
					},
					handleUpdate() {
						T({
							event: "toUpdatePage",
							version: this.nowVersionName,
							info: '{version: "' + this.version + '", to: "' + this.newest.versionName + '"}'
						}), window.open(this.indexData.newest.link, "_blank")
					},
					handleDllDownload(e, t) {
						N({
								link: t
							})
							.then(t => {
								this.addTask(t, e + ".zip")
							})
					},
					calcProgress() {
						return this.supportMoney.receiveMoney + "/" + this.supportMoney.needMoney + " 元"
					},
					handleSwitchMonth(e) {
						this.supportLoaded = !1;
						let t = e.split("-")[0],
							a = e.split("-")[1];
						this.currentYearMonth = t + "年" + a + "月", this.prepareIndexSupport(e)
					},
					prepareIndexSupport(e) {
						C(e)
							.then(e => {
								this.oddTable = [], this.evenTable = [], this.supportMoney = e;
								let t = this.supportMoney.support,
									a = 0;
								for (let i = 0; i < t.length; i++) a += t[i].money;
								this.supportMoney.receiveMoney = parseFloat(a.toFixed(2));
								for (let i = 0; i < t.length; i++) i % 2 === 0 ? this.oddTable.push(t[i]) : this.evenTable.push(t[i]);
								this.supportLoaded = !0
							})
					},
					downloadFile(e, t) {
						if (t) {
							let a = "",
								i = "";
							i = t.indexOf(",") > -1 ? t.split(",") : t.split("|");
							for (let e = 0; e < i.length; e++) a = a + i[e] + "、";
							a = a.substring(0, a.length - 1), this.$confirm('该官方软件包内有可能包含捆绑: <span style="color: red; font-wight: bold">' + a + "</span>，请在安装时注意取消勾选", "注意", {
									confirmButtonText: "下载",
									cancelButtonText: "取消下载",
									type: "warning",
									dangerouslyUseHTMLString: !0
								})
								.then(() => {
									window.open(e, "_blank")
								})
								.catch(() => {
									this.$message({
										type: "info",
										message: "已取消下载，很抱歉，对于官方内置的插件我也没有办法"
									})
								})
						} else window.open(e, "_blank")
					},
					convertUpdateDate(e) {
						let t = e.split("-"),
							a = t[0],
							i = t[1] - 1,
							o = t[2],
							s = new Date(a, i, o),
							n = (new Date - s) / 864e5;
						n = Math.floor(n);
						let l = "天前";
						return l = n <= 0 ? "今天" : n + l, [e + " (" + l + ")", n, l]
					},
					querySearchAsync(e, t) {
						e = this.searchKeyword, "" === e && t(null), S({
								_provider: this.provider,
								keyword: e,
								num: 5,
								page: 1
							})
							.then(e => {
								let a = [];
								for (let t = 0; t < e.length; t++) {
									const i = e[t];
									a.push({
										value: i.softName
									})
								}
								t(a)
							})
					},
					handleSelectSuggestion(e) {
						this.searchKeyword = e.value, this.handleSearch()
					}
				},
				watch: {},
				destroyed() {},
				created() {
					let e = (new Date)
						.getFullYear(),
						t = (new Date)
						.getMonth() + 1;
					this.currentYearMonth = (new Date)
						.getFullYear() + "年" + ((new Date)
							.getMonth() + 1) + "月", this.prepareIndexSupport(e + "-" + t)
				}
			},
			V = L,
			O = (a("1c06"), a("2877")),
			I = Object(O["a"])(V, r, d, !1, null, null, null),
			M = I.exports,
			A = {
				name: "App",
				components: {
					Soft: M
				},
				created() {}
			},
			F = A,
			j = (a("034f"), Object(O["a"])(F, n, l, !1, null, null, null)),
			B = j.exports;
		i["default"].use(s.a), i["default"].use(s.a, {
			size: "small",
			zIndex: 3e3
		}), new i["default"]({
			el: "#app",
			render: e => e(B)
		})
	},
	"85ec": function(e, t, a) {},
	a3a8: function(e, t, a) {
		e.exports = a.p + "img/alipay.5932cd3d.svg"
	},
	ced1: function(e, t, a) {}
});