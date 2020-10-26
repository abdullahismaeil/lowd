!function() {
    var a = {
        resource: {
            version: "1",
            macros: [ {
                "function": "__e"
            }, {
                "function": "__cid"
            } ],
            tags: [ {
                "function": "__rep",
                once_per_event: true,
                vtp_containerId: [ "macro", 1 ],
                tag_id: 1
            } ],
            predicates: [ {
                "function": "_eq",
                arg0: [ "macro", 0 ],
                arg1: "gtm.js"
            } ],
            rules: [ [ [ "if", 0 ], [ "add", 0 ] ] ]
        },
        runtime: []
    };
    var b, c = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b();
    }, d;
    if ("function" == typeof Object.setPrototypeOf) d = Object.setPrototypeOf; else {
        var e;
        a: {
            var f = {
                jg: !0
            }, g = {};
            try {
                g.__proto__ = f;
                e = g.jg;
                break a;
            } catch (h) {}
            e = !1;
        }
        d = e ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a;
        } : null;
    }
    var i = d, j = function(a, b) {
        a.prototype = c(b.prototype);
        a.prototype.constructor = a;
        if (i) i(a, b); else for (var d in b) if ("prototype" != d) if (Object.defineProperties) {
            var e = Object.getOwnPropertyDescriptor(b, d);
            e && Object.defineProperty(a, d, e);
        } else a[d] = b[d];
        a.Qh = b.prototype;
    }, k = this || self, l = function(a) {
        if (a && a != k) return o(a.document);
        null === n && (n = o(k.document));
        return n;
    }, m = /^[\w+\/_-]+[=]{0,2}$/, n = null, o = function(a) {
        var b = a.querySelector && a.querySelector("script[nonce]");
        if (b) {
            var c = b.nonce || b.getAttribute("nonce");
            if (c && m.test(c)) return c;
        }
        return "";
    }, p = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    }, q = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Qh = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.gi = function(a, c, d) {
            for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
            return b.prototype[c].apply(a, e);
        };
    }, r = function(a) {
        return a;
    };
    var s = function() {}, t = function(a) {
        return "function" == typeof a;
    }, u = function(a) {
        return "string" == typeof a;
    }, v = function(a) {
        return "number" == typeof a && !isNaN(a);
    }, w = function(a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a));
    }, x = function(a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1;
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return -1;
    }, y = function(a, b) {
        if (a && w(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    }, z = function(a, b) {
        if (!v(a) || !v(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a);
    }, A = function(a, b) {
        for (var c = new H(), d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
        return !1;
    }, B = function(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    }, C = function(a) {
        return Math.round(Number(a)) || 0;
    }, D = function(a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a;
    }, E = function(a) {
        var b = [];
        if (w(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b;
    }, F = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : "";
    }, G = function() {
        return new Date().getTime();
    }, H = function() {
        this.prefix = "gtm.";
        this.values = {};
    };
    H.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b;
    };
    H.prototype.get = function(a) {
        return this.values[this.prefix + a];
    };
    var I = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c;
    }, J = function(a) {
        var b = !1;
        return function() {
            if (!b) try {
                a();
            } catch (c) {}
            b = !0;
        };
    }, K = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    }, L = function(a) {
        for (var b in a) if (a.hasOwnProperty(b)) return !0;
        return !1;
    }, M = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c;
    }, N = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c;
    }, O = function(a) {
        var b = [];
        B(a, function(a, c) {
            10 > a.length && c && b.push(a);
        });
        return b.join(",");
    };
    var P = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Q = function(a) {
        if (null == a) return String(a);
        var b = P.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object";
    }, R = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b);
    }, S = function(a) {
        if (!a || "object" != Q(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !R(a, "constructor") && !R(a.constructor.prototype, "isPrototypeOf")) return !1;
        } catch (b) {
            return !1;
        }
        for (var c in a) ;
        return void 0 === c || R(a, c);
    }, T = function(a, b) {
        var c = b || ("array" == Q(a) ? [] : {}), d;
        for (d in a) if (R(a, d)) {
            var e = a[d];
            "array" == Q(e) ? ("array" != Q(c[d]) && (c[d] = []), c[d] = T(e, c[d])) : S(e) ? (S(c[d]) || (c[d] = {}), 
            c[d] = T(e, c[d])) : c[d] = e;
        }
        return c;
    };
    var U = function(a) {
        if (void 0 === a || w(a) || S(a)) return !0;
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "function":
            return !0;
        }
        return !1;
    };
    var V;
    var W = [], X = [], Y = [], Z = [], $ = [], _ = {}, ab, cb, db, eb = function(a, b) {
        var c = a["function"];
        if (!c) throw Error("Error: No function name given for function call.");
        var d = _[c], e = {}, f;
        for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (d && b && b.Ge && b.Ge(a[f]), 
        e[void 0 !== d ? f : f.substr(4)] = a[f]);
        return void 0 !== d ? d(e) : V(c, e, b);
    }, fb = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = hb(a[e], b, c));
        return d;
    }, gb = function(a) {
        var b = a["function"];
        if (!b) throw "Error: No function name given for function call.";
        var c = _[b];
        return c ? c.priorityOverride || 0 : 0;
    }, hb = function(a, b, c) {
        if (w(a)) {
            var d;
            switch (a[0]) {
              case "function_id":
                return a[1];

              case "list":
                d = [];
                for (var e = 1; e < a.length; e++) d.push(hb(a[e], b, c));
                return d;

              case "macro":
                var f = a[1];
                if (c[f]) return;
                var g = W[f];
                if (!g || b.jd(g)) return;
                c[f] = !0;
                try {
                    var h = fb(g, b, c);
                    h.vtp_gtmEventId = b.id;
                    d = eb(h, b);
                    db && (d = db.Ig(d, h));
                } catch (i) {
                    b.Se && b.Se(i, Number(f)), d = !1;
                }
                c[f] = !1;
                return d;

              case "map":
                d = {};
                for (var j = 1; j < a.length; j += 2) d[hb(a[j], b, c)] = hb(a[j + 1], b, c);
                return d;

              case "template":
                d = [];
                for (var k = !1, l = 1; l < a.length; l++) {
                    var m = hb(a[l], b, c);
                    cb && (k = k || m === cb.Ub);
                    d.push(m);
                }
                return cb && k ? cb.Lg(d) : d.join("");

              case "escape":
                d = hb(a[1], b, c);
                if (cb && w(a[1]) && "macro" === a[1][0] && cb.jh(a)) return cb.Bh(d);
                d = String(d);
                for (var n = 2; n < a.length; n++) bb[a[n]] && (d = bb[a[n]](d));
                return d;

              case "tag":
                var o = a[1];
                if (!Z[o]) throw Error("Unable to resolve tag reference " + o + ".");
                return d = {
                    Le: a[2],
                    index: o
                };

              case "zb":
                var p = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                p["function"] = a[1];
                var q = ib(p, b, c), r = !!a[4];
                return r || 2 !== q ? r !== (1 === q) : null;

              default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a;
    }, ib = function(a, b, c) {
        try {
            return ab(fb(a, b, c));
        } catch (d) {
            JSON.stringify(a);
        }
        return 2;
    };
    var jb = function() {
        var a = function(a) {
            return {
                toString: function() {
                    return a;
                }
            };
        };
        return {
            ff: a("consent"),
            Id: a("convert_case_to"),
            Jd: a("convert_false_to"),
            Kd: a("convert_null_to"),
            Ld: a("convert_true_to"),
            Md: a("convert_undefined_to"),
            Zh: a("debug_mode_metadata"),
            Ea: a("function"),
            ag: a("instance_name"),
            bg: a("live_only"),
            dg: a("malware_disabled"),
            eg: a("metadata"),
            bi: a("original_vendor_template_id"),
            gg: a("once_per_event"),
            we: a("once_per_load"),
            Ae: a("setup_tags"),
            Be: a("tag_id"),
            Ce: a("teardown_tags")
        };
    }();
    var kb = null, lb = function(a) {
        function b(a) {
            for (var b = 0; b < a.length; b++) d[a[b]] = !0;
        }
        var c = [], d = [];
        kb = nb(a);
        for (var e = 0; e < X.length; e++) {
            var f = X[e], g = mb(f);
            if (g) {
                for (var h = f.add || [], i = 0; i < h.length; i++) c[h[i]] = !0;
                b(f.block || []);
            } else null === g && b(f.block || []);
        }
        for (var j = [], k = 0; k < Z.length; k++) c[k] && !d[k] && (j[k] = !0);
        return j;
    }, mb = function(a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = kb(b[c]);
            if (0 === d) return !1;
            if (2 === d) return null;
        }
        for (var e = a.unless || [], f = 0; f < e.length; f++) {
            var g = kb(e[f]);
            if (2 === g) return null;
            if (1 === g) return !1;
        }
        return !0;
    }, nb = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = ib(Y[c], a));
            return b[c];
        };
    };
    var ob = {
        Ig: function(a, b) {
            b[jb.Id] && "string" === typeof a && (a = 1 == b[jb.Id] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(jb.Kd) && null === a && (a = b[jb.Kd]);
            b.hasOwnProperty(jb.Md) && void 0 === a && (a = b[jb.Md]);
            b.hasOwnProperty(jb.Ld) && !0 === a && (a = b[jb.Ld]);
            b.hasOwnProperty(jb.Jd) && !1 === a && (a = b[jb.Jd]);
            return a;
        }
    };
    var pb = {
        rb: "_ee",
        Uc: "_syn",
        ei: "_uei",
        ci: "_pci",
        Fc: "event_callback",
        Qb: "event_timeout",
        ia: "gtag.config"
    };
    pb.Ba = "gtag.get", pb.sa = "value_key", pb.ra = "value_callback";
    pb.ba = "allow_ad_personalization_signals";
    pb.Mc = "restricted_data_processing";
    pb.ab = "allow_google_signals";
    pb.ca = "cookie_expires";
    pb.Pb = "cookie_update";
    pb.nb = "session_duration";
    pb.la = "user_properties";
    pb.Da = "transport_url";
    pb.M = "ads_data_redaction";
    pb.o = "ad_storage";
    pb.J = "analytics_storage";
    pb.hf = "region";
    pb.jf = "wait_for_update";
    pb.Bc = "page_view", pb.Pd = "user_engagement", pb.Aa = "purchase", pb.Mb = "refund", 
    pb.$a = "begin_checkout", pb.Kb = "add_to_cart", pb.Lb = "remove_from_cart", pb.sf = "view_cart", 
    pb.Od = "add_to_wishlist", pb.La = "view_item", pb.vf = "view_promotion", pb.uf = "select_promotion", 
    pb.tf = "select_item", pb.Ac = "view_item_list", pb.Nd = "add_payment_info", pb.rf = "add_shipping_info", 
    pb.kf = "app_remove", pb.lf = "app_store_refund", pb.nf = "app_store_subscription_cancel", 
    pb.pf = "app_store_subscription_convert", pb.qf = "app_store_subscription_renew", 
    pb.wf = "first_open", pb.xf = "first_visit", pb.yf = "in_app_purchase", pb.zf = "session_start", 
    pb.Af = "allow_custom_scripts", pb.Bf = "allow_display_features", pb.Cc = "allow_enhanced_conversions", 
    pb.be = "enhanced_conversions", pb.cb = "client_id", pb.V = "cookie_domain", pb.Ob = "cookie_name", 
    pb.Ma = "cookie_path", pb.ja = "cookie_flags", pb.qa = "currency", pb.Xd = "custom_map", 
    pb.Jc = "groups", pb.Na = "language", pb.Df = "country", pb.$h = "non_interaction", 
    pb.kb = "page_location", pb.lb = "page_referrer", pb.Lc = "page_title", pb.mb = "send_page_view", 
    pb.Ca = "send_to", pb.Nc = "session_engaged", pb.Sb = "session_id", pb.Oc = "session_number", 
    pb.Xf = "tracking_id", pb.ka = "linker", pb.pb = "url_passthrough", pb.hb = "accept_incoming", 
    pb.H = "domains", pb.jb = "url_position", pb.ib = "decorate_forms", pb.fe = "phone_conversion_number", 
    pb.de = "phone_conversion_callback", pb.ee = "phone_conversion_css_class", pb.he = "phone_conversion_options", 
    pb.Sf = "phone_conversion_ids", pb.Rf = "phone_conversion_country_code", pb.Qd = "aw_remarketing", 
    pb.Rd = "aw_remarketing_only", pb.Nb = "gclid", pb.va = "value", pb.Tf = "quantity", 
    pb.Gf = "affiliation", pb.ae = "tax", pb.Jf = "shipping", pb.Ec = "list_name", pb.$d = "checkout_step", 
    pb.Zd = "checkout_option", pb.Hf = "coupon", pb.If = "promotions", pb.ob = "transaction_id", 
    pb.qb = "user_id", pb.Uf = "retoken", pb.fb = "conversion_linker", pb.eb = "conversion_cookie_prefix", 
    pb.da = "cookie_prefix", pb.U = "items", pb.Vd = "aw_merchant_id", pb.Td = "aw_feed_country", 
    pb.Ud = "aw_feed_language", pb.Sd = "discount", pb.Yd = "disable_merchant_reported_purchases", 
    pb.ce = "new_customer", pb.Wd = "customer_lifetime_value", pb.Ff = "dc_natural_search", 
    pb.Ef = "dc_custom_params", pb.Yf = "trip_type", pb.Qf = "passengers", pb.Of = "method", 
    pb.Wf = "search_term", pb.Cf = "content_type", pb.Pf = "optimize_id", pb.Kf = "experiments", 
    pb.gb = "google_signals", pb.Ic = "google_tld", pb.Tb = "update", pb.Hc = "firebase_id", 
    pb.Rb = "ga_restrict_domain", pb.Gc = "event_settings", pb.Dc = "dynamic_event_settings", 
    pb.Vf = "screen_name", pb.Mf = "_x_19", pb.Lf = "_x_20", pb.Kc = "internal_traffic_results", 
    pb.je = "traffic_type", pb.ie = "referral_exclusion_definitions", pb.Nf = "ignore_referrer", 
    pb.Zf = [ pb.ba, pb.Cc, pb.ab, pb.U, pb.Mc, pb.V, pb.ca, pb.ja, pb.Ob, pb.Ma, pb.da, pb.Pb, pb.Xd, pb.Dc, pb.Fc, pb.Gc, pb.Qb, pb.Rb, pb.gb, pb.Ic, pb.Jc, pb.Kc, pb.ka, pb.ie, pb.Ca, pb.mb, pb.nb, pb.Da, pb.Tb, pb.la ], 
    pb.ke = [ pb.kb, pb.lb, pb.Lc, pb.Na, pb.Vf, pb.qb, pb.Hc ], pb.ne = [ pb.Aa, pb.Mb, pb.$a, pb.Kb, pb.Lb, pb.sf, pb.Od, pb.La, pb.vf, pb.uf, pb.Ac, pb.tf, pb.Nd, pb.rf ], 
    pb.$f = [ pb.kf, pb.lf, pb.nf, pb.pf, pb.qf, pb.wf, pb.xf, pb.yf, pb.zf, pb.Pd ], 
    pb.Hd = [ pb.Ca, pb.Qd, pb.Rd, pb.mb, pb.Na, pb.va, pb.qa, pb.ob, pb.qb, pb.fb, pb.eb, pb.da, pb.V, pb.ca, pb.ja, pb.kb, pb.lb, pb.fe, pb.de, pb.ee, pb.he, pb.U, pb.Vd, pb.Td, pb.Ud, pb.Sd, pb.Yd, pb.ce, pb.Wd, pb.ba, pb.Mc, pb.Tb, pb.Hc, pb.be, pb.Da, pb.pb, pb.Cc ];
    pb.me = [ pb.ba, pb.ab, pb.Pb ];
    pb.oe = [ pb.ca, pb.Qb, pb.nb ];
    var qb = {}, rb = function(a, b) {
        qb[a] = qb[a] || [];
        qb[a][b] = !0;
    }, sb = function(a) {
        for (var b = [], c = qb[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("");
    };
    var tb = function(a) {
        rb("GTM", a);
    };
    function ub(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ub); else {
            var b = Error().stack;
            b && (this.stack = b);
        }
        a && (this.message = String(a));
    }
    q(ub, Error);
    ub.prototype.name = "CustomError";
    var vb = function(a, b) {
        for (var c = a.split("%s"), d = "", e = c.length - 1, f = 0; f < e; f++) d += c[f] + (f < b.length ? b[f] : "%s");
        ub.call(this, d + c[e]);
    };
    q(vb, ub);
    vb.prototype.name = "AssertionError";
    var wb = function(a, b) {
        throw new vb("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var xb = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c();
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d;
    }, yb = function(a) {
        var b = a;
        return function() {
            if (b) {
                var a = b;
                b = null;
                a();
            }
        };
    };
    var zb, Ab = function() {
        if (void 0 === zb) {
            var a = null, b = k.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: r,
                        createScript: r,
                        createScriptURL: r
                    });
                } catch (c) {
                    k.console && k.console.error(c.message);
                }
                zb = a;
            } else zb = a;
        }
        return zb;
    };
    var Bb = function(a, b) {
        this.h = b === Cb ? a : "";
    };
    Bb.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.h + "}";
    };
    var Cb = {};
    var Db = /^(?:(?:https?|mailto|ftp):|[^:\/?#]*(?:[\/?#]|$))/i;
    var Eb;
    a: {
        var Fb = k.navigator;
        if (Fb) {
            var Gb = Fb.userAgent;
            if (Gb) {
                Eb = Gb;
                break a;
            }
        }
        Eb = "";
    }
    var Hb = function(a) {
        return -1 != Eb.indexOf(a);
    };
    var Ib = function(a, b, c) {
        this.h = c === Kb ? a : "";
    };
    Ib.prototype.toString = function() {
        return "SafeHtml{" + this.h + "}";
    };
    var Jb = function(a) {
        if (a instanceof Ib && a.constructor === Ib) return a.h;
        wb("expected object of type SafeHtml, got '" + a + "' of type " + p(a));
        return "type_error:SafeHtml";
    }, Kb = {}, Lb = new Ib(k.trustedTypes && k.trustedTypes.emptyHTML || "", 0, Kb);
    var Mb = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    }, Nb = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(), b = !0);
            return c;
        };
    }(function() {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"), b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        var c = a.firstChild.firstChild;
        a.innerHTML = Jb(Lb);
        return !c.parentElement;
    }), Ob = function(a, b) {
        if (a.tagName && Mb[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
        if (Nb()) for (;a.lastChild; ) a.removeChild(a.lastChild);
        a.innerHTML = Jb(b);
    };
    var Pb = function(a) {
        var b = Ab(), c = b ? b.createHTML(a) : a;
        return new Ib(c, null, Kb);
    };
    var Qb = window, Rb = document, Sb = navigator, Tb = Rb.currentScript && Rb.currentScript.src, Ub = function(a, b) {
        var c = Qb[a];
        Qb[a] = void 0 === c ? b : c;
        return Qb[a];
    }, Vb = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null, b());
        });
    }, Wb = function(a, b, c) {
        var d = Rb.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        var e, f = Ab(), g = f ? f.createScriptURL(a) : a;
        e = new Bb(g, Cb);
        var h;
        a: {
            try {
                var i = d && d.ownerDocument, j = i && (i.defaultView || i.parentWindow);
                j = j || k;
                if (j.Element && j.Location) {
                    h = j;
                    break a;
                }
            } catch (m) {}
            h = null;
        }
        if (h && "undefined" != typeof h.HTMLScriptElement && (!d || !(d instanceof h.HTMLScriptElement) && (d instanceof h.Location || d instanceof h.Element))) {
            var n;
            var o = typeof d;
            if ("object" == o && null != d || "function" == o) try {
                n = d.constructor.displayName || d.constructor.name || Object.prototype.toString.call(d);
            } catch (m) {
                n = "<object could not be stringified>";
            } else n = void 0 === d ? "undefined" : null === d ? "null" : typeof d;
            wb("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLScriptElement", n);
        }
        var q;
        e instanceof Bb && e.constructor === Bb ? q = e.h : (wb("expected object of type TrustedResourceUrl, got '" + e + "' of type " + p(e)), 
        q = "type_error:TrustedResourceUrl");
        d.src = q;
        var r = l(d.ownerDocument && d.ownerDocument.defaultView);
        r && d.setAttribute("nonce", r);
        Vb(d, b);
        c && (d.onerror = c);
        var s = l();
        s && d.setAttribute("nonce", s);
        var t = Rb.getElementsByTagName("script")[0] || Rb.body || Rb.head;
        t.parentNode.insertBefore(d, t);
        return d;
    }, Xb = function() {
        if (Tb) {
            var a = Tb.toLowerCase();
            if (0 === a.indexOf("https://")) return 2;
            if (0 === a.indexOf("http://")) return 3;
        }
        return 1;
    }, Yb = function(a, b) {
        var c = Rb.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var d = Rb.body && Rb.body.lastChild || Rb.body || Rb.head;
        d.parentNode.insertBefore(c, d);
        Vb(c, b);
        void 0 !== a && (c.src = a);
        return c;
    }, Zb = function(a, b, c) {
        var d = new Image(1, 1);
        d.onload = function() {
            d.onload = null;
            b && b();
        };
        d.onerror = function() {
            d.onerror = null;
            c && c();
        };
        d.src = a;
        return d;
    }, $b = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, _b = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    }, ac = function(a) {
        Qb.setTimeout(a, 0);
    }, bc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    }, cc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b;
    }, dc = function(a) {
        var b = Rb.createElement("div");
        Ob(b, Pb("A<div>" + a + "</div>"));
        b = b.lastChild;
        for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild));
        return c;
    }, ec = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement;
        }
        return null;
    }, fc = function(a) {
        Sb.sendBeacon && Sb.sendBeacon(a) || Zb(a);
    }, gc = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c;
    };
    var hc = {}, ic = function(a) {
        return void 0 == hc[a] ? !1 : hc[a];
    };
    var jc = [];
    function kc() {
        var a = Ub("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: lc,
            update: mc,
            addListener: nc,
            notifyListeners: pc,
            active: !1
        });
        return a.ics;
    }
    function lc(a, b, c, d, e, f) {
        var g = kc();
        g.active = !0;
        if (void 0 != b) {
            var h = g.entries, i = h[a] || {}, j = i.region, k = c && u(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (k === e || (k === d ? j !== e : !k && !j)) {
                var l = !!(f && 0 < f && void 0 === i.update), m = {
                    region: k,
                    initial: "granted" === b,
                    update: i.update,
                    quiet: l
                };
                h[a] = m;
                l && Qb.setTimeout(function() {
                    h[a] === m && m.quiet && (m.quiet = !1, oc(a), pc(), rb("TAGGING", 2));
                }, f);
            }
        }
    }
    function mc(a, b) {
        var c = kc();
        c.active = !0;
        if (void 0 != b) {
            var d = qc(a), e = c.entries, f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = qc(a);
            f.quiet ? (f.quiet = !1, oc(a)) : g !== d && oc(a);
        }
    }
    function nc(a, b) {
        jc.push({
            Ie: a,
            Ug: b
        });
    }
    function oc(a) {
        for (var b = 0; b < jc.length; ++b) {
            var c = jc[b];
            w(c.Ie) && -1 !== c.Ie.indexOf(a) && (c.We = !0);
        }
    }
    function pc(a) {
        for (var b = 0; b < jc.length; ++b) {
            var c = jc[b];
            if (c.We) {
                c.We = !1;
                try {
                    c.Ug({
                        He: a
                    });
                } catch (d) {}
            }
        }
    }
    var qc = function(a) {
        var b = kc().entries[a] || {};
        return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0;
    }, rc = function(a) {
        return !(kc().entries[a] || {}).quiet;
    }, sc = function() {
        return ic("gtag_cs_api") ? kc().active : !1;
    }, tc = function(a, b) {
        kc().addListener(a, b);
    }, uc = function(a, b) {
        function c() {
            for (var a = 0; a < b.length; a++) if (!rc(b[a])) return !0;
            return !1;
        }
        if (c()) {
            var d = !1;
            tc(b, function(b) {
                d || c() || (d = !0, a(b));
            });
        } else a({});
    }, vc = function(a, b) {
        if (!1 === qc(b)) {
            var c = !1;
            tc([ b ], function(d) {
                !c && qc(b) && (a(d), c = !0);
            });
        }
    };
    var wc = [ pb.o, pb.J ], xc = function(a) {
        var b = a[pb.hf];
        b && tb(40);
        var c = a[pb.jf];
        c && tb(41);
        for (var d = w(b) ? b : [ b ], e = 0; e < d.length; ++e) for (var f = 0; f < wc.length; f++) {
            var g = wc[f], h = a[wc[f]], i = d[e];
            kc().set(g, h, i, "", "", c);
        }
    }, yc = function(a, b) {
        for (var c = 0; c < wc.length; c++) {
            var d = wc[c], e = a[wc[c]];
            kc().update(d, e);
        }
        kc().notifyListeners(b);
    }, zc = function(a) {
        var b = qc(a);
        return void 0 != b ? b : !0;
    }, Ac = function() {
        for (var a = [], b = 0; b < wc.length; b++) {
            var c = qc(wc[b]);
            a[b] = !0 === c ? "1" : !1 === c ? "0" : "-";
        }
        return "G1" + a.join("");
    }, Bc = function(a, b) {
        uc(a, b);
    };
    var Cc = function(a) {
        return Gc ? Rb.querySelectorAll(a) : null;
    }, Dc = function(a, b) {
        if (!Gc) return null;
        if (Element.prototype.closest) try {
            return a.closest(b);
        } catch (c) {
            return null;
        }
        var d = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector, e = a;
        if (!Rb.documentElement.contains(e)) return null;
        do {
            try {
                if (d.call(e, b)) return e;
            } catch (c) {
                break;
            }
            e = e.parentElement || e.parentNode;
        } while (null !== e && 1 === e.nodeType);
        return null;
    }, Ec = !1;
    if (Rb.querySelectorAll) try {
        var Fc = Rb.querySelectorAll(":root");
        Fc && 1 == Fc.length && Fc[0] == Rb.documentElement && (Ec = !0);
    } catch (h) {}
    var Gc = Ec;
    var Hc = {}, Ic = null, Jc = Math.random();
    Hc.B = "UA-93546714-1";
    Hc.Yb = "ae1";
    Hc.ai = "";
    var Kc = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, Lc = {
        __paused: !0,
        __tg: !0
    }, Mc;
    for (Mc in Kc) Kc.hasOwnProperty(Mc) && (Lc[Mc] = !0);
    var Nc = "www.googletagmanager.com/gtm.js";
    Nc = "www.googletagmanager.com/gtag/js";
    var Oc = Nc, Pc = D(""), Qc = null, Rc = null, Sc = "//www.googletagmanager.com/a?id=" + Hc.B + "&cv=1", Tc = {}, Uc = {}, Vc = function() {
        var a = Ic.sequence || 1;
        Ic.sequence = a + 1;
        return a;
    };
    var Wc = {}, Xc = new H(), Yc = {}, Zc = {}, $c = {
        name: "dataLayer",
        set: function(a, b) {
            T(N(a, b), Yc);
            cd();
        },
        get: function(a) {
            return _c(a, 2);
        },
        reset: function() {
            Xc = new H();
            Yc = {};
            cd();
        }
    }, _c = function(a, b) {
        return 2 != b ? Xc.get(a) : ad(a.split("."));
    }, ad = function(a) {
        for (var b = Yc, c = 0; c < a.length; c++) {
            if (null === b) return !1;
            if (void 0 === b) break;
            b = b[a[c]];
        }
        return b;
    }, bd = function(a, b) {
        Zc.hasOwnProperty(a) || (Xc.set(a, b), T(N(a, b), Yc), cd());
    }, cd = function(a) {
        B(Zc, function(b, c) {
            Xc.set(b, c);
            T(N(b, void 0), Yc);
            T(N(b, c), Yc);
            a && delete Zc[b];
        });
    }, dd = function(a, b, c) {
        Wc[a] = Wc[a] || {};
        var d = 1 !== c ? ad(b.split(".")) : Xc.get(b);
        "array" === Q(d) || "object" === Q(d) ? Wc[a][b] = T(d) : Wc[a][b] = d;
    }, ed = function(a, b) {
        if (Wc[a]) return Wc[a][b];
    }, fd = function(a, b) {
        Wc[a] && delete Wc[a][b];
    };
    var gd = {}, hd = function(a, b) {
        if (Qb._gtmexpgrp && Qb._gtmexpgrp.hasOwnProperty(a)) return Qb._gtmexpgrp[a];
        void 0 === gd[a] && (gd[a] = Math.floor(Math.random() * b));
        return gd[a];
    };
    var id = /:[0-9]+$/, jd = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var g = f.slice(1).join("=");
                return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
            }
        }
    }, kd = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b) a.protocol = md(a.protocol) || md(Qb.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : Qb.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || Qb.location.hostname).replace(id, "").toLowerCase());
        return ld(a, b, c, d, e);
    }, ld = function(a, b, c, d, e) {
        var f, g = md(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
          case "url_no_fragment":
            f = nd(a);
            break;

          case "protocol":
            f = g;
            break;

          case "host":
            f = a.hostname.replace(id, "").toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length));
            }
            break;

          case "port":
            f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
            break;

          case "path":
            a.pathname || a.hostname || rb("TAGGING", 1);
            f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var i = f.split("/");
            0 <= x(d || [], i[i.length - 1]) && (i[i.length - 1] = "");
            f = i.join("/");
            break;

          case "query":
            f = a.search.replace("?", "");
            e && (f = jd(f, e, void 0));
            break;

          case "extension":
            var j = a.pathname.split(".");
            f = 1 < j.length ? j[j.length - 1] : "";
            f = f.split("/")[0];
            break;

          case "fragment":
            f = a.hash.replace("#", "");
            break;

          default:
            f = a && a.href;
        }
        return f;
    }, md = function(a) {
        return a ? a.replace(":", "").toLowerCase() : "";
    }, nd = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c);
        }
        return b;
    }, od = function(a) {
        var b = Rb.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || rb("TAGGING", 1), c = "/" + c);
        var d = b.hostname.replace(id, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
    }, pd = function(a) {
        function b(a) {
            var b = a.split("=")[0];
            return 0 > d.indexOf(b) ? a : b + "=0";
        }
        function c(a) {
            return a.split("&").map(b).filter(function(a) {
                return void 0 != a;
            }).join("&");
        }
        var d = "gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "), e = od(a), f = a.split(/[?#]/)[0], g = e.search, h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var i = "" + f + g + h;
        "/" === i[i.length - 1] && (i = i.substring(0, i.length - 1));
        return i;
    };
    function qd(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="), h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var i = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                i && c && (i = decodeURIComponent(i));
                d.push(i);
            }
        }
        return d;
    }
    var rd = function(a, b, c, d) {
        return Dd(d) ? qd(a, String(b || document.cookie), c) : [];
    }, sd = function(a, b, c, d, e) {
        if (Dd(e)) {
            var f = xd(a, d, e);
            if (1 === f.length) return f[0].id;
            if (0 !== f.length) {
                f = wd(f, function(a) {
                    return a.cc;
                }, b);
                if (1 === f.length) return f[0].id;
                f = wd(f, function(a) {
                    return a.Ab;
                }, c);
                return f[0] ? f[0].id : void 0;
            }
        }
    };
    function td(a, b, c, d) {
        var e = document.cookie;
        document.cookie = a;
        var f = document.cookie;
        return e != f || void 0 != c && 0 <= rd(b, f, !1, d).indexOf(c);
    }
    var ud = function(a, b, c) {
        function d(a, b, c) {
            if (null == c) return delete g[b], a;
            g[b] = c;
            return a + "; " + b + "=" + c;
        }
        function e(a, b) {
            if (null == b) return delete g[b], a;
            g[b] = !0;
            return a + "; " + b;
        }
        if (!Dd(c.Ga)) return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), 
        b = yd(b), f = a + "=" + b);
        var g = {};
        f = d(f, "path", c.path);
        var h;
        c.expires instanceof Date ? h = c.expires.toUTCString() : null != c.expires && (h = "" + c.expires);
        f = d(f, "expires", h);
        f = d(f, "max-age", c.oi);
        f = d(f, "samesite", c.vi);
        c.wi && (f = e(f, "secure"));
        var i = c.domain;
        if ("auto" === i) {
            for (var j = Cd(), k = 0; k < j.length; ++k) {
                var l = "none" !== j[k] ? j[k] : void 0, m = d(f, "domain", l);
                m = e(m, c.flags);
                if (!Bd(l, c.path) && td(m, a, b, c.Ga)) return 0;
            }
            return 1;
        }
        i && "none" !== i && (f = d(f, "domain", i));
        f = e(f, c.flags);
        return Bd(i, c.path) ? 1 : td(f, a, b, c.Ga) ? 0 : 1;
    }, vd = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return ud(a, b, c);
    };
    function wd(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g], i = b(h);
            i === c ? d.push(h) : void 0 === f || i < f ? (e = [ h ], f = i) : i === f && e.push(h);
        }
        return 0 < d.length ? d : e;
    }
    function xd(a, b, c) {
        for (var d = [], e = rd(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."), h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var i = g.shift();
                i && (i = i.split("-"), d.push({
                    id: g.join("."),
                    cc: 1 * i[0] || 1,
                    Ab: 1 * i[1] || 1
                }));
            }
        }
        return d;
    }
    var yd = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a;
    }, zd = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Ad = /(^|\.)doubleclick\.net$/i, Bd = function(a, b) {
        return Ad.test(document.location.hostname) || "/" === b && zd.test(a);
    }, Cd = function() {
        var a = [], b = document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return [ "none" ];
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        var e = document.location.hostname;
        Ad.test(e) || zd.test(e) || a.push("none");
        return a;
    }, Dd = function(a) {
        if (!ic("gtag_cs_api") || !a || !sc()) return !0;
        if (!rc(a)) return !1;
        var b = qc(a);
        return null == b ? !0 : !!b;
    };
    var Ed = function() {
        for (var a = Sb.userAgent + (Rb.cookie || "") + (Rb.referrer || ""), b = a.length, c = Qb.history.length; 0 < c; ) a += c-- ^ b++;
        var d = 1, e, f, g;
        if (a) for (d = 0, f = a.length - 1; 0 <= f; f--) g = a.charCodeAt(f), d = (d << 6 & 268435455) + g + (g << 14), 
        e = 266338304 & d, d = 0 != e ? d ^ e >> 21 : d;
        return [ Math.round(2147483647 * Math.random()) ^ 2147483647 & d, Math.round(G() / 1e3) ].join(".");
    }, Fd = function(a, b, c, d, e) {
        var f = Hd(b);
        return sd(a, f, Id(c), d, e);
    }, Gd = function(a, b, c, d) {
        var e = "" + Hd(c), f = Id(d);
        1 < f && (e += "-" + f);
        return [ b, e, a ].join(".");
    }, Hd = function(a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length;
    }, Id = function(a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1;
    };
    function Jd(a, b, c) {
        var d, e = a.zb;
        null == e && (e = 7776e3);
        0 !== e && (d = new Date((b || G()) + 1e3 * e));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        };
    }
    var Kd = [ "1" ], Ld = {}, Md = function(a) {
        var b = Pd(a.prefix);
        Ld[b] || Od(b, a.path, a.domain) || (Nd(b, Ed(), a), Od(b, a.path, a.domain));
    };
    function Nd(a, b, c) {
        var d = Gd(b, "1", c.domain, c.path), e = Jd(c);
        e.Ga = "ad_storage";
        vd(a, d, e);
    }
    function Od(a, b, c) {
        var d = Fd(a, b, c, Kd, "ad_storage");
        d && (Ld[a] = d);
        return d;
    }
    function Pd(a) {
        return (a || "_gcl") + "_au";
    }
    function Qd() {
        for (var a = Sd, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b;
    }
    function Rd() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + ".";
    }
    var Sd, Td;
    function Ud(a) {
        Sd = Sd || Rd();
        Td = Td || Qd();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length, e = c + 2 < a.length, f = a.charCodeAt(c), g = d ? a.charCodeAt(c + 1) : 0, h = e ? a.charCodeAt(c + 2) : 0, i = f >> 2, j = (3 & f) << 4 | g >> 4, k = (15 & g) << 2 | h >> 6, l = 63 & h;
            e || (l = 64, d || (k = 64));
            b.push(Sd[i], Sd[j], Sd[k], Sd[l]);
        }
        return b.join("");
    }
    function Vd(a) {
        function b(b) {
            for (;d < a.length; ) {
                var c = a.charAt(d++), e = Td[c];
                if (null != e) return e;
                if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
            }
            return b;
        }
        Sd = Sd || Rd();
        Td = Td || Qd();
        for (var c = "", d = 0; ;) {
            var e = b(-1), f = b(0), g = b(64), h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)));
        }
    }
    var Wd;
    var Xd = function() {
        var a = ne, b = oe, c = $d(), d = function(b) {
            a(b.target || b.srcElement || {});
        }, e = function(a) {
            b(a.target || a.srcElement || {});
        };
        if (!c.init) {
            $b(Rb, "mousedown", d);
            $b(Rb, "keyup", d);
            $b(Rb, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this);
            };
            c.init = !0;
        }
    }, Yd = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        $d().decorators.push(f);
    }, Zd = function(a, b, c) {
        for (var d = $d().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms) a: {
                var i = g.domains, j = a, k = !!g.sameHost;
                if (i && (k || j !== Rb.location.hostname)) for (var l = 0; l < i.length; l++) if (i[l] instanceof RegExp) {
                    if (i[l].test(j)) {
                        h = !0;
                        break a;
                    }
                } else if (0 <= j.indexOf(i[l]) || k && 0 <= i[l].indexOf(j)) {
                    h = !0;
                    break a;
                }
                h = !1;
            }
            if (h) {
                var m = g.placement;
                void 0 == m && (m = g.fragment ? 2 : 1);
                m === b && K(e, g.callback());
            }
        }
        return e;
    }, $d = function() {
        var a = Ub("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b;
    };
    var _d = /(.*?)\*(.*?)\*(.*)/, ae = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/, be = /^(?:www\.|m\.|amp\.)+/, ce = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function de(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
    }
    var ee = function(a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), 
            b.push(Ud(String(d))));
        }
        var e = b.join("*");
        return [ "1", fe(e), e ].join("*");
    }, fe = function(a, b) {
        var c = [ window.navigator.userAgent, new Date().getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b), a ].join("*"), d;
        if (!(d = Wd)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = 1 & g ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g;
            }
            d = e;
        }
        Wd = d;
        for (var i = 4294967295, j = 0; j < c.length; j++) i = i >>> 8 ^ Wd[255 & (i ^ c.charCodeAt(j))];
        return ((i ^ -1) >>> 0).toString(36);
    }, ge = function() {
        return function(a) {
            var b = od(Qb.location.href), c = b.search.replace("?", ""), d = jd(c, "_gl", !0) || "";
            a.query = ie(d) || {};
            var e = kd(b, "fragment").match(de("_gl"));
            a.fragment = ie(e && e[3] || "") || {};
        };
    }, he = function(a) {
        var b = ge(), c = $d();
        c.data || (c.data = {
            query: {},
            fragment: {}
        }, b(c.data));
        var d = {}, e = c.data;
        e && (K(d, e.query), a && K(d, e.fragment));
        return d;
    }, ie = function(a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c;
                a: {
                    for (var d = a, e = 0; 3 > e; ++e) {
                        var f = _d.exec(d);
                        if (f) {
                            c = f;
                            break a;
                        }
                        d = decodeURIComponent(d);
                    }
                    c = void 0;
                }
                var g = c;
                if (g && "1" === g[1]) {
                    var h = g[3], i;
                    a: {
                        for (var j = g[2], k = 0; k < b; ++k) if (j === fe(h, k)) {
                            i = !0;
                            break a;
                        }
                        i = !1;
                    }
                    if (i) {
                        for (var l = {}, m = h ? h.split("*") : [], n = 0; n < m.length; n += 2) l[m[n]] = Vd(m[n + 1]);
                        return l;
                    }
                }
            }
        } catch (o) {}
    };
    function je(a, b, c, d) {
        function e(b) {
            var c = b, d = de(a).exec(c), e = c;
            if (d) {
                var f = d[2], g = d[4];
                e = d[1];
                g && (e = e + f + g);
            }
            b = e;
            var h = b.charAt(b.length - 1);
            b && "&" !== h && (b += "&");
            return b + j;
        }
        d = void 0 === d ? !1 : d;
        var f = ce.exec(c);
        if (!f) return "";
        var g = f[1], h = f[2] || "", i = f[3] || "", j = a + "=" + b;
        d ? i = "#" + e(i.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + i;
    }
    function ke(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(), d = Zd(b, 1, c), e = Zd(b, 2, c), f = Zd(b, 3, c);
        if (L(d)) {
            var g = ee(d);
            c ? me("_gl", g, a) : le("_gl", g, a, !1);
        }
        if (!c && L(e)) {
            var h = ee(e);
            le("_gl", h, a, !0);
        }
        for (var i in f) if (f.hasOwnProperty(i)) a: {
            var j = i, k = f[i], l = a;
            if (l.tagName) {
                if ("a" === l.tagName.toLowerCase()) {
                    le(j, k, l, void 0);
                    break a;
                }
                if ("form" === l.tagName.toLowerCase()) {
                    me(j, k, l);
                    break a;
                }
            }
            "string" == typeof l && je(j, k, l, void 0);
        }
    }
    function le(a, b, c, d) {
        if (c.href) {
            var e = je(a, b, c.href, void 0 === d ? !1 : d);
            Db.test(e) && (c.href = e);
        }
    }
    function me(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break;
                    }
                }
                if (!f) {
                    var i = Rb.createElement("input");
                    i.setAttribute("type", "hidden");
                    i.setAttribute("name", a);
                    i.setAttribute("value", b);
                    c.appendChild(i);
                }
            } else if ("post" === d) {
                var j = je(a, b, c.action);
                Db.test(j) && (c.action = j);
            }
        }
    }
    var ne = function(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a;
                    }
                    c = c.parentNode;
                    d--;
                }
                b = null;
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || ke(e, e.hostname);
            }
        } catch (g) {}
    }, oe = function(a) {
        try {
            if (a.action) {
                var b = kd(od(a.action), "host");
                ke(a, b);
            }
        } catch (c) {}
    }, pe = function(a, b, c, d) {
        Xd();
        Yd(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    }, qe = function(a, b) {
        Xd();
        Yd(a, [ ld(Qb.location, "host", !0) ], b, !0, !0);
    }, re = function() {
        var a = Rb.location.hostname, b = ae.exec(Rb.referrer);
        if (!b) return !1;
        var c = b[2], d = b[1], e = "";
        if (c) {
            var f = c.split("/"), g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
        } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-");
        }
        var h = a.replace(be, ""), i = e.replace(be, ""), j;
        if (!(j = h === i)) {
            var k = "." + i;
            j = h.substring(h.length - k.length, h.length) === k;
        }
        return j;
    }, se = function(a, b) {
        return !1 === a ? !1 : a || b || re();
    };
    var te = /^\w+$/, ue = /^[\w-]+$/, ve = /^~?[\w-]+$/, we = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp"
    }, xe = function() {
        if (!ic("gtag_cs_api") || !sc()) return !0;
        var a = qc("ad_storage");
        return null == a ? !0 : !!a;
    }, ye = function(a, b) {
        rc("ad_storage") ? xe() ? a() : vc(a, "ad_storage") : b ? rb("TAGGING", 3) : uc(function() {
            ye(a, !0);
        }, [ "ad_storage" ]);
    }, ze = function(a) {
        var b = [];
        if (!Rb.cookie) return b;
        var c = rd(a, Rb.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length) return b;
        for (var d = 0; d < c.length; d++) {
            var e = Ie(c[d]);
            e && -1 === x(b, e) && b.push(e);
        }
        return Ke(b);
    };
    function Ae(a) {
        return a && "string" == typeof a && a.match(te) ? a : "_gcl";
    }
    var Be = function() {
        var a = od(Qb.location.href), b = kd(a, "query", !1, void 0, "gclid"), c = kd(a, "query", !1, void 0, "gclsrc"), d = kd(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || jd(e, "gclid", void 0);
            c = c || jd(e, "gclsrc", void 0);
        }
        return Ce(b, c, d);
    }, Ce = function(a, b, c) {
        var d = {}, e = function(a, b) {
            d[b] || (d[b] = []);
            d[b].push(a);
        };
        d.gclid = a;
        d.gclsrc = b;
        d.dclid = c;
        if (void 0 !== a && a.match(ue)) switch (b) {
          case void 0:
            e(a, "aw");
            break;

          case "aw.ds":
            e(a, "aw");
            e(a, "dc");
            break;

          case "ds":
            e(a, "dc");
            break;

          case "3p.ds":
            ic("gtm_3pds") && e(a, "dc");
            break;

          case "gf":
            e(a, "gf");
            break;

          case "ha":
            e(a, "ha");
            break;

          case "gp":
            e(a, "gp");
        }
        c && e(c, "dc");
        return d;
    }, De = function(a) {
        var b = Be();
        ye(function() {
            Ee(b, a);
        });
    };
    function Ee(a, b, c) {
        function d(a, b) {
            var c = Ge(a, e);
            c && vd(c, b, f);
        }
        b = b || {};
        var e = Ae(b.prefix);
        c = c || G();
        var f = Jd(b, c, !0);
        f.Ga = "ad_storage";
        var g = Math.round(c / 1e3), h = function(a) {
            return [ "GCL", g, a ].join(".");
        };
        a.aw && (!0 === b.Bi ? d("aw", h("~" + a.aw[0])) : d("aw", h(a.aw[0])));
        a.dc && d("dc", h(a.dc[0]));
        a.gf && d("gf", h(a.gf[0]));
        a.ha && d("ha", h(a.ha[0]));
        a.gp && d("gp", h(a.gp[0]));
    }
    var Fe = function(a, b) {
        var c = he(!0);
        ye(function() {
            for (var d = Ae(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== we[f]) {
                    var g = Ge(f, d), h = c[g];
                    if (h) {
                        var i = Math.min(He(h), G()), j;
                        a: {
                            for (var k = i, l = rd(g, Rb.cookie, void 0, "ad_storage"), m = 0; m < l.length; ++m) if (He(l[m]) > k) {
                                j = !0;
                                break a;
                            }
                            j = !1;
                        }
                        if (!j) {
                            var n = Jd(b, i, !0);
                            n.Ga = "ad_storage";
                            vd(g, h, n);
                        }
                    }
                }
            }
            Ee(Ce(c.gclid, c.gclsrc), b);
        });
    }, Ge = function(a, b) {
        var c = we[a];
        if (void 0 !== c) return b + c;
    }, He = function(a) {
        var b = a.split(".");
        return 3 !== b.length || "GCL" !== b[0] ? 0 : 1e3 * (Number(b[1]) || 0);
    };
    function Ie(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2];
    }
    var Je = function(a, b, c, d, e) {
        if (w(b)) {
            var f = Ae(e), g = function() {
                for (var b = {}, c = 0; c < a.length; ++c) {
                    var d = Ge(a[c], f);
                    if (d) {
                        var e = rd(d, Rb.cookie, void 0, "ad_storage");
                        e.length && (b[d] = e.sort()[e.length - 1]);
                    }
                }
                return b;
            };
            ye(function() {
                pe(g, b, c, d);
            });
        }
    }, Ke = function(a) {
        return a.filter(function(a) {
            return ve.test(a);
        });
    }, Le = function(a, b) {
        for (var c = Ae(b.prefix), d = {}, e = 0; e < a.length; e++) we[a[e]] && (d[a[e]] = we[a[e]]);
        ye(function() {
            B(d, function(a, d) {
                var e = rd(c + d, Rb.cookie, void 0, "ad_storage");
                if (e.length) {
                    var f = e[0], g = He(f), h = {};
                    h[a] = [ Ie(f) ];
                    Ee(h, b, g);
                }
            });
        });
    };
    function Me(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1;
    }
    var Ne = function() {
        function a(a, b, c) {
            c && (a[b] = c);
        }
        var b = [ "aw", "dc" ];
        if (sc()) {
            var c = Be();
            if (Me(c, b)) {
                var d = {};
                a(d, "gclid", c.gclid);
                a(d, "dclid", c.dclid);
                a(d, "gclsrc", c.gclsrc);
                qe(function() {
                    return d;
                }, 3);
                qe(function() {
                    var a = {};
                    return a._up = "1", a;
                }, 1);
            }
        }
    }, Oe = function() {
        var a;
        if (xe()) {
            for (var b = [], c = Rb.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
                var f = c[e].match(d);
                f && b.push({
                    Cd: f[1],
                    value: f[2]
                });
            }
            var g = {};
            if (b && b.length) for (var h = 0; h < b.length; h++) {
                var i = b[h].value.split(".");
                "1" == i[0] && 3 == i.length && i[1] && (g[b[h].Cd] || (g[b[h].Cd] = []), g[b[h].Cd].push({
                    timestamp: i[1],
                    Wg: i[2]
                }));
            }
            a = g;
        } else a = {};
        return a;
    };
    var Pe = /^\d+\.fls\.doubleclick\.net$/;
    function Qe(a, b) {
        rc(pb.o) ? zc(pb.o) ? a() : vc(a, pb.o) : b ? tb(42) : Bc(function() {
            Qe(a, !0);
        }, [ pb.o ]);
    }
    function Re(a) {
        var b = od(Qb.location.href), c = kd(b, "host", !1);
        if (c && c.match(Pe)) {
            var d = kd(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0];
        }
    }
    function Se(a, b, c) {
        if ("aw" == a || "dc" == a) {
            var d = Re("gcl" + a);
            if (d) return d.split(".");
        }
        var e = Ae(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !zc(pb.o) && c, g;
            g = Be()[a] || [];
            if (0 < g.length) return f ? [ "0" ] : g;
        }
        var h = Ge(a, e);
        return h ? ze(h) : [];
    }
    var Te = function(a) {
        var b = Re("gac");
        if (b) return !zc(pb.o) && a ? "0" : decodeURIComponent(b);
        var c = Oe(), d = [];
        B(c, function(a, b) {
            for (var c = [], e = 0; e < b.length; e++) c.push(b[e].Wg);
            c = Ke(c);
            c.length && d.push(a + ":" + c.join(","));
        });
        return d.join(";");
    }, Ue = function(a, b) {
        var c = Be().dc || [];
        Qe(function() {
            Md(b);
            var d = Ld[Pd(b.prefix)], e = !1;
            if (d && 0 < c.length) {
                var f = Ic.joined_au = Ic.joined_au || {}, g = b.prefix || "_gcl";
                if (!f[g]) for (var h = 0; h < c.length; h++) {
                    var i = "https://adservice.google.com/ddm/regclk";
                    i = i + "?gclid=" + c[h] + "&auiddc=" + d;
                    fc(i);
                    e = f[g] = !0;
                }
            }
            null == a && (a = e);
            if (a && d) {
                var j = Pd(b.prefix), k = Ld[j];
                k && Nd(j, k, b);
            }
        });
    };
    var Ve = /[A-Z]+/, We = /\s/, Xe = function(a) {
        if (u(a) && (a = F(a), !We.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (Ve.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e]) return;
                    return {
                        id: a,
                        prefix: c,
                        containerId: c + "-" + d[0],
                        C: d
                    };
                }
            }
        }
    }, Ye = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = Xe(a[c]);
            d && (b[d.id] = d);
        }
        Ze(b);
        var e = [];
        B(b, function(a, b) {
            e.push(b);
        });
        return e;
    };
    function Ze(a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.C[1] && b.push(d.containerId);
        }
        for (var e = 0; e < b.length; ++e) delete a[b[e]];
    }
    var $e = function() {
        var a = !1;
        return a;
    };
    var _e = function(a, b, c, d) {
        return (2 === af() || d || "http:" != Qb.location.protocol ? a : b) + c;
    }, af = function() {
        var a = Xb(), b;
        if (1 === a) a: {
            var c = Oc;
            c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, f = 1, g = Rb.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                var i = g[h].src;
                if (i) {
                    i = i.toLowerCase();
                    if (0 === i.indexOf(e)) {
                        b = 3;
                        break a;
                    }
                    1 === f && 0 === i.indexOf(d) && (f = 2);
                }
            }
            b = f;
        } else b = a;
        return b;
    };
    var bf = function(a, b, c) {
        if (Qb[a.functionName]) return b.pd && ac(b.pd), Qb[a.functionName];
        var d = cf();
        Qb[a.functionName] = d;
        if (a.$b) for (var e = 0; e < a.$b.length; e++) Qb[a.$b[e]] = Qb[a.$b[e]] || cf();
        a.jc && void 0 === Qb[a.jc] && (Qb[a.jc] = c);
        Wb(_e("https://", "http://", a.zd), b.pd, b.wh);
        return d;
    }, cf = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments);
        };
        return a;
    }, df = {
        functionName: "_googWcmImpl",
        jc: "_googWcmAk",
        zd: "www.gstatic.com/wcm/loader.js"
    }, ef = {
        functionName: "_gaPhoneImpl",
        jc: "ga_wpid",
        zd: "www.gstatic.com/gaphone/loader.js"
    }, ff = {
        ef: "",
        hg: "5"
    }, gf = {
        functionName: "_googCallTrackingImpl",
        $b: [ ef.functionName, df.functionName ],
        zd: "www.gstatic.com/call-tracking/call-tracking_" + (ff.ef || ff.hg) + ".js"
    }, hf = {}, jf = function(a, b, c, d) {
        tb(22);
        if (c) {
            d = d || {};
            var e = bf(df, d, a), f = {
                ak: a,
                cl: b
            };
            void 0 === d.ma && (f.autoreplace = c);
            e(2, d.ma, f, c, 0, new Date(), d.options);
        }
    }, kf = function(a, b, c, d) {
        tb(21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: new Date()
            }, f = 0; f < a.length; f++) {
                var g = a[f];
                hf[g.id] || (g && "AW" === g.prefix && !e.adData && 2 <= g.C.length ? (e.adData = {
                    ak: g.C[0],
                    cl: g.C[1]
                }, hf[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                    gaWpid: g.containerId
                }, hf[g.id] = !0));
            }
            (e.gaData || e.adData) && bf(gf, d)(d.ma, e, d.options);
        }
    }, lf = function() {
        var a = !1;
        return a;
    }, mf = function(a, b) {
        if (a) if ($e()) ; else {
            if (u(a)) {
                var c = Xe(a);
                if (!c) return;
                a = c;
            }
            var d = void 0, e = !1, f = b.getWithConfig(pb.Sf);
            if (f && w(f)) {
                d = [];
                for (var g = 0; g < f.length; g++) {
                    var h = Xe(f[g]);
                    h && (d.push(h), (a.id === h.id || a.id === a.containerId && a.containerId === h.containerId) && (e = !0));
                }
            }
            if (!d || e) {
                var i = b.getWithConfig(pb.fe), j;
                if (i) {
                    w(i) ? j = i : j = [ i ];
                    var k = b.getWithConfig(pb.de), l = b.getWithConfig(pb.ee), m = b.getWithConfig(pb.he), n = b.getWithConfig(pb.Rf), o = k || l, p = 1;
                    "UA" !== a.prefix || d || (p = 5);
                    for (var q = 0; q < j.length; q++) if (q < p) if (d) kf(d, j[q], n, {
                        ma: o,
                        options: m
                    }); else if ("AW" === a.prefix && a.C[1]) lf() ? kf([ a ], j[q], n || "US", {
                        ma: o,
                        options: m
                    }) : jf(a.C[0], a.C[1], j[q], {
                        ma: o,
                        options: m
                    }); else if ("UA" === a.prefix) if (lf()) kf([ a ], j[q], n || "US", {
                        ma: o
                    }); else {
                        var r = a.containerId, s = j[q], t = {
                            ma: o
                        };
                        tb(23);
                        if (s) {
                            t = t || {};
                            var v = bf(ef, t, r), x = {};
                            void 0 !== t.ma ? x.receiver = t.ma : x.replace = s;
                            x.ga_wpid = r;
                            x.destination = s;
                            v(2, new Date(), x);
                        }
                    }
                }
            }
        }
    };
    var nf = function(a) {
        return zc(pb.o) ? a : a.replace(/&url=([^&#]+)/, function(a, b) {
            var c = pd(decodeURIComponent(b));
            return "&url=" + encodeURIComponent(c);
        });
    }, of = function() {
        var a;
        if (!(a = Pc)) {
            var b;
            if (!0 === Qb._gtmdgs) b = !0; else {
                var c = Sb && Sb.userAgent || "";
                b = 0 > c.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) || 11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "") ? !1 : !0;
            }
            a = !b;
        }
        if (a) return -1;
        var d = C("0");
        return hd(1, 100) < d ? hd(2, 2) : -1;
    };
    var pf = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), qf = {
        cl: [ "ecl" ],
        customPixels: [ "nonGooglePixels" ],
        ecl: [ "cl" ],
        ehl: [ "hl" ],
        hl: [ "ehl" ],
        html: [ "customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes" ],
        customScripts: [ "html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes" ],
        nonGooglePixels: [],
        nonGoogleScripts: [ "nonGooglePixels" ],
        nonGoogleIframes: [ "nonGooglePixels" ]
    }, rf = {
        cl: [ "ecl" ],
        customPixels: [ "customScripts", "html" ],
        ecl: [ "cl" ],
        ehl: [ "hl" ],
        hl: [ "ehl" ],
        html: [ "customScripts" ],
        customScripts: [ "html" ],
        nonGooglePixels: [ "customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes" ],
        nonGoogleScripts: [ "customScripts", "html" ],
        nonGoogleIframes: [ "customScripts", "html", "nonGoogleScripts" ]
    }, sf = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var tf = function(a) {
        var b;
        _c("gtm.allowlist") && tb(52);
        b = _c("gtm.allowlist");
        b || (b = _c("gtm.whitelist"));
        b && tb(9);
        b = "google gtagfl lcl zone oid op".split(" ");
        var c = b && M(E(b), qf), d;
        _c("gtm.blocklist") && tb(51);
        d = _c("gtm.blocklist");
        d || (d = _c("gtm.blacklist"));
        d || (d = _c("tagTypeBlacklist")) && tb(3);
        d ? tb(8) : d = [];
        uf() && (d = E(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= x(E(d), "google") && tb(2);
        var e = d && M(E(d), rf), f = {};
        return function(g) {
            var h = g && g[jb.Ea];
            if (!h || "string" != typeof h) return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h]) return f[h];
            var i = Uc[h] || [], j = a(h, i);
            if (b) {
                var k;
                if (k = j) a: {
                    if (0 > x(c, h)) if (i && 0 < i.length) {
                        for (var l = 0; l < i.length; l++) if (0 > x(c, i[l])) {
                            tb(11);
                            k = !1;
                            break a;
                        }
                    } else {
                        k = !1;
                        break a;
                    }
                    k = !0;
                }
                j = k;
            }
            var m = !1;
            if (d) {
                var n = 0 <= x(e, h);
                if (n) m = n; else {
                    var o = A(e, i || []);
                    o && tb(10);
                    m = o;
                }
            }
            var p = !j || m;
            p || !(0 <= x(i, "sandboxedScripts")) || c && -1 !== x(c, "sandboxedScripts") || (p = A(e, sf));
            return f[h] = p;
        };
    }, uf = function() {
        return pf.test(Qb.location && Qb.location.hostname);
    };
    var vf = {
        active: !0,
        isAllowed: function() {
            return !0;
        }
    }, wf = function(a) {
        var b = Ic.zones;
        return b ? b.checkState(Hc.B, a) : vf;
    }, xf = function(a) {
        var b = Ic.zones;
        !b && a && (b = Ic.zones = a());
        return b;
    };
    var yf = function() {}, zf = function() {};
    var Af = !1, Bf = 0, Cf = [];
    function Df(a) {
        if (!Af) {
            var b = Rb.createEventObject, c = "complete" == Rb.readyState, d = "interactive" == Rb.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Af = !0;
                for (var e = 0; e < Cf.length; e++) ac(Cf[e]);
            }
            Cf.push = function() {
                for (var a = 0; a < arguments.length; a++) ac(arguments[a]);
                return 0;
            };
        }
    }
    function Ef() {
        if (!Af && 140 > Bf) {
            Bf++;
            try {
                Rb.documentElement.doScroll("left"), Df();
            } catch (a) {
                Qb.setTimeout(Ef, 50);
            }
        }
    }
    var Ff = function(a) {
        Af ? a() : Cf.push(a);
    };
    var Gf = {}, Hf = {}, If = function(a, b, c, d) {
        if (!Hf[a] || Lc[b] || "__zone" === b) return -1;
        var e = {};
        S(d) && (e = T(d, e));
        e.id = c;
        e.status = "timeout";
        return Hf[a].tags.push(e) - 1;
    }, Jf = function(a, b, c, d) {
        if (Hf[a]) {
            var e = Hf[a].tags[b];
            e && (e.status = c, e.executionTime = d);
        }
    };
    function Kf(a) {
        for (var b = Gf[a] || [], c = 0; c < b.length; c++) b[c]();
        Gf[a] = {
            push: function(b) {
                b(Hc.B, Hf[a]);
            }
        };
    }
    var Lf = function(a, b, c) {
        Hf[a] = {
            tags: []
        };
        t(b) && Mf(a, b);
        c && Qb.setTimeout(function() {
            return Kf(a);
        }, Number(c));
        return Nf(a);
    }, Mf = function(a, b) {
        Gf[a] = Gf[a] || [];
        Gf[a].push(J(function() {
            return ac(function() {
                b(Hc.B, Hf[a]);
            });
        }));
    };
    function Nf(a) {
        var b = 0, c = 0, d = !1;
        return {
            add: function() {
                c++;
                return J(function() {
                    b++;
                    d && b >= c && Kf(a);
                });
            },
            vg: function() {
                d = !0;
                b >= c && Kf(a);
            }
        };
    }
    var Of = function() {
        function a(a) {
            return !v(a) || 0 > a ? 0 : a;
        }
        if (!Ic._li && Qb.performance && Qb.performance.timing) {
            var b = Qb.performance.timing.navigationStart, c = v($c.get("gtm.start")) ? $c.get("gtm.start") : 0;
            Ic._li = {
                cst: a(c - b),
                cbt: a(Rc - b)
            };
        }
    };
    var Pf = {}, Qf = function() {
        return Qb.GoogleAnalyticsObject && Qb[Qb.GoogleAnalyticsObject];
    }, Rf = !1;
    var Sf = function(a) {
        Qb.GoogleAnalyticsObject || (Qb.GoogleAnalyticsObject = a || "ga");
        var b = Qb.GoogleAnalyticsObject;
        if (Qb[b]) Qb.hasOwnProperty(b) || tb(12); else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments);
            };
            c.l = Number(new Date());
            Qb[b] = c;
        }
        Of();
        return Qb[b];
    }, Tf = function(a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = Qf();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d);
    };
    var Uf = function(a) {}, Vf = function() {
        return Qb.GoogleAnalyticsObject || "ga";
    }, Wf = function(a, b) {
        return function() {
            var c = Qf(), d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(a) {
                    var c = a.get("hitPayload"), d = a.get("hitCallback"), f = 0 > c.indexOf("&tid=" + b);
                    f && (a.set("hitPayload", c.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), 
                    a.set("hitCallback", void 0, !0));
                    e(a);
                    f && (a.set("hitPayload", c, !0), a.set("hitCallback", d, !0), a.set("_x_19", void 0, !0), 
                    e(a));
                });
            }
        };
    };
    var Xf = function() {
        return "&tc=" + Z.filter(function(a) {
            return a;
        }).length;
    }, Yf = function() {
        2022 <= _f().length && $f();
    }, Zf = function() {
        ng || (ng = Qb.setTimeout($f, 500));
    }, $f = function() {
        ng && (Qb.clearTimeout(ng), ng = void 0);
        void 0 === kg || eg[kg] && !fg && !gg || (mg[kg] || og.lh() || 0 >= pg-- ? (tb(1), 
        mg[kg] = !0) : (og.Ih(), Zb(_f()), eg[kg] = !0, hg = ig = jg = gg = fg = ""));
    }, _f = function() {
        var a = kg;
        if (void 0 === a) return "";
        var b = sb("GTM"), c = sb("TAGGING");
        return [ cg, eg[a] ? "" : "&es=1", lg[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Xf(), fg, gg, jg ? jg : "", ig, hg, "&z=0" ].join("");
    }, ag = function() {
        return [ Sc, "&v=3&t=t", "&pid=" + z(), "&rv=" + Hc.Yb ].join("");
    }, bg = "0.005000" > Math.random(), cg = ag(), dg = function() {
        cg = ag();
    }, eg = {}, fg = "", gg = "", hg = "", ig = "", jg = "", kg = void 0, lg = {}, mg = {}, ng = void 0, og = function(a, b) {
        var c = 0, d = 0;
        return {
            lh: function() {
                if (c < a) return !1;
                G() - d >= b && (c = 0);
                return c >= a;
            },
            Ih: function() {
                G() - d >= b && (c = 0);
                c++;
                d = G();
            }
        };
    }(2, 1e3), pg = 1e3, qg = function(a, b, c) {
        if (bg && !mg[a] && b) {
            a !== kg && ($f(), kg = a);
            var d, e = String(b[jb.Ea] || "").replace(/_/g, "");
            0 === e.indexOf("cvt") && (e = "cvt");
            d = e;
            var f = c + d;
            fg = fg ? fg + "." + f : "&tr=" + f;
            var g = b["function"];
            if (!g) throw Error("Error: No function name given for function call.");
            var h = (_[g] ? "1" : "2") + d;
            hg = hg ? hg + "." + h : "&ti=" + h;
            Zf();
            Yf();
        }
    }, rg = function(a, b, c) {
        if (bg && !mg[a]) {
            a !== kg && ($f(), kg = a);
            var d = c + b;
            gg = gg ? gg + "." + d : "&epr=" + d;
            Zf();
            Yf();
        }
    }, sg = function(a, b, c) {};
    function tg(a, b, c, d) {
        var e = Z[a], f = ug(a, b, c, d);
        if (!f) return null;
        var g = hb(e[jb.Ae], c, []);
        if (g && g.length) {
            var h = g[0];
            f = tg(h.index, {
                F: f,
                D: 1 === h.Le ? b.terminate : f,
                terminate: b.terminate
            }, c, d);
        }
        return f;
    }
    function ug(a, b, c, d) {
        function e() {
            if (f[jb.dg]) h(); else {
                var b = fb(f, c, []);
                var d = If(c.id, String(f[jb.Ea]), Number(f[jb.Be]), b[jb.eg]), e = !1;
                b.vtp_gtmOnSuccess = function() {
                    if (!e) {
                        e = !0;
                        var b = G() - j;
                        qg(c.id, Z[a], "5");
                        Jf(c.id, d, "success", b);
                        g();
                    }
                };
                b.vtp_gtmOnFailure = function() {
                    if (!e) {
                        e = !0;
                        var b = G() - j;
                        qg(c.id, Z[a], "6");
                        Jf(c.id, d, "failure", b);
                        h();
                    }
                };
                b.vtp_gtmTagId = f.tag_id;
                b.vtp_gtmEventId = c.id;
                qg(c.id, f, "1");
                var i = function() {
                    var a = G() - j;
                    qg(c.id, f, "7");
                    Jf(c.id, d, "exception", a);
                    e || (e = !0, h());
                };
                var j = G();
                try {
                    eb(b, c);
                } catch (k) {
                    i(k);
                }
            }
        }
        var f = Z[a], g = b.F, h = b.D, i = b.terminate;
        if (c.jd(f)) return null;
        var j = hb(f[jb.Ce], c, []);
        if (j && j.length) {
            var k = j[0], l = tg(k.index, {
                F: g,
                D: h,
                terminate: i
            }, c, d);
            if (!l) return null;
            g = l;
            h = 2 === k.Le ? i : l;
        }
        if (f[jb.we] || f[jb.gg]) {
            var m = f[jb.we] ? $ : c.Rh, n = g, o = h;
            if (!m[a]) {
                e = J(e);
                var p = vg(a, m, e);
                g = p.F;
                h = p.D;
            }
            return function() {
                m[a](n, o);
            };
        }
        return e;
    }
    function vg(a, b, c) {
        var d = [], e = [];
        b[a] = wg(d, e, c);
        return {
            F: function() {
                b[a] = xg;
                for (var c = 0; c < d.length; c++) d[c]();
            },
            D: function() {
                b[a] = yg;
                for (var c = 0; c < e.length; c++) e[c]();
            }
        };
    }
    function wg(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c();
        };
    }
    function xg(a) {
        a();
    }
    function yg(a, b) {
        b();
    }
    var zg = function(a, b, c) {
        for (var d = [], e = 0; e < Z.length; e++) if (a[e]) {
            var f = Z[e];
            var g = c.add();
            try {
                var h = tg(e, {
                    F: g,
                    D: g,
                    terminate: g
                }, b, e);
                h ? d.push({
                    cf: e,
                    Xe: gb(f),
                    Sg: h
                }) : (Bg(e, b), g());
            } catch (i) {
                g();
            }
        }
        c.vg();
        d.sort(Ag);
        for (var j = 0; j < d.length; j++) d[j].Sg();
        return 0 < d.length;
    };
    function Ag(a, b) {
        var c, d = b.Xe, e = a.Xe;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c; else {
            var g = a.cf, h = b.cf;
            f = g > h ? 1 : g < h ? -1 : 0;
        }
        return f;
    }
    function Bg(a, b) {
        if (!bg) return;
        var c = function(a) {
            var d = b.jd(Z[a]) ? "3" : "4", e = hb(Z[a][jb.Ae], b, []);
            e && e.length && c(e[0].index);
            qg(b.id, Z[a], d);
            var f = hb(Z[a][jb.Ce], b, []);
            f && f.length && c(f[0].index);
        };
        c(a);
    }
    var Cg = !1, Dg = function(a) {
        var b = a["gtm.uniqueEventId"], c = a.event;
        if ("gtm.js" === c) {
            if (Cg) return !1;
            Cg = !0;
        }
        var d = wf(b), e = !1;
        if (!d.active) {
            var f = !0;
            if ("gtm.js" === c) f = !1, e = !0, d = wf(Number.MAX_SAFE_INTEGER);
            if (f) return !1;
        }
        bg && !mg[b] && kg !== b && ($f(), kg = b, hg = fg = "", lg[b] = "&e=" + (0 === c.indexOf("gtm.") ? encodeURIComponent(c) : "*") + "&eid=" + b, 
        Zf());
        var g = {
            id: b,
            name: c,
            jd: tf(d.isAllowed),
            Rh: [],
            Se: function() {
                tb(6);
            },
            Ge: Eg(b)
        }, h = Lf(b, a.eventCallback, a.eventTimeout);
        Fg(b);
        var i = lb(g);
        e && (i = Gg(i));
        var j = zg(i, g, h);
        "gtm.js" !== c && "gtm.sync" !== c || Uf(Hc.B);
        switch (c) {
          case "gtm.init":
            tb(19), j && tb(20);
        }
        return Hg(i, j);
    };
    function Eg(a) {
        return function(b) {
            bg && (U(b) || sg(a, "input", b));
        };
    }
    function Fg(a) {
        dd(a, "event", 1);
        dd(a, "ecommerce", 1);
        dd(a, "gtm");
    }
    function Gg(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) a[c] && Kc[String(Z[c][jb.Ea])] && (b[c] = !0);
        return b;
    }
    function Hg(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++) if (a[c] && Z[c] && !Lc[String(Z[c][jb.Ea])]) return !0;
        return !1;
    }
    function Ig(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return od("" + c + b).href;
        }
    }
    function Jg(a, b) {
        return Kg() ? Ig(a, b) : void 0;
    }
    function Kg() {
        var a = !1;
        return a;
    }
    var Lg = function() {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.h = {};
        this.globalConfig = {};
        this.F = function() {};
        this.D = function() {};
        this.eventId = void 0;
    }, Mg = function(a) {
        var b = new Lg();
        b.eventModel = a;
        return b;
    }, Ng = function(a, b) {
        a.targetConfig = b;
        return a;
    }, Og = function(a, b) {
        a.containerConfig = b;
        return a;
    }, Pg = function(a, b) {
        a.h = b;
        return a;
    }, Qg = function(a, b) {
        a.globalConfig = b;
        return a;
    }, Rg = function(a, b) {
        a.F = b;
        return a;
    }, Sg = function(a, b) {
        a.D = b;
        return a;
    };
    Lg.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.h[a]) return this.h[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    };
    var Tg = function(a) {
        function b(a) {
            B(a, function(a) {
                c[a] = null;
            });
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        B(c, function(a) {
            d.push(a);
        });
        return d;
    };
    var Ug;
    if (3 === Hc.Yb.length) Ug = "g"; else {
        var Vg = "G";
        Vg = "g";
        Ug = Vg;
    }
    var Wg = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        HA: "h",
        GTM: Ug,
        OPT: "o"
    }, Xg = function(a) {
        var b = Hc.B.split("-"), c = b[0].toUpperCase(), d = Wg[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === Hc.Yb.length) {
            var g = "w";
            g = $e() ? "s" : "o";
            f = "2" + g;
        } else f = "";
        return f + d + Hc.Yb + e;
    };
    var Yg = function(a, b) {
        a.addEventListener && a.addEventListener("message", b, !1);
    };
    var Zg = function() {
        return Hb("iPhone") && !Hb("iPod") && !Hb("iPad");
    };
    Hb("Opera");
    Hb("Trident") || Hb("MSIE");
    Hb("Edge");
    !Hb("Gecko") || -1 != Eb.toLowerCase().indexOf("webkit") && !Hb("Edge") || Hb("Trident") || Hb("MSIE") || Hb("Edge");
    -1 != Eb.toLowerCase().indexOf("webkit") && !Hb("Edge") && Hb("Mobile");
    Hb("Macintosh");
    Hb("Windows");
    Hb("Linux") || Hb("CrOS");
    var $g = k.navigator || null;
    $g && ($g.appVersion || "").indexOf("X11");
    Hb("Android");
    Zg();
    Hb("iPad");
    Hb("iPod");
    Zg() || Hb("iPad") || Hb("iPod");
    Eb.toLowerCase().indexOf("kaios");
    var _g = function(a, b) {
        for (var c = a, d = 0; 50 > d; ++d) {
            var e;
            try {
                e = !(!c.frames || !c.frames[b]);
            } catch (f) {
                e = !1;
            }
            if (e) return c;
            var g;
            a: {
                try {
                    var h = c.parent;
                    if (h && h != c) {
                        g = h;
                        break a;
                    }
                } catch (f) {}
                g = null;
            }
            if (!(c = g)) break;
        }
        return null;
    };
    var ah = function() {};
    var bh = function(a, b) {
        this.i = a;
        this.h = null;
        this.L = {};
        this.na = 0;
        this.fa = void 0 === b ? 500 : b;
        this.m = null;
    };
    j(bh, ah);
    var ch = function(a) {
        return "function" === typeof a.i.__tcfapi || null != gh(a);
    };
    bh.prototype.addEventListener = function(a) {
        var b = {}, c = yb(function() {
            return a(b);
        }), d = 0;
        -1 !== this.fa && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c();
        }, this.fa));
        var e = function(c, e) {
            clearTimeout(d);
            c ? (b = c, b.internalErrorState = void 0 !== b.tcString && "string" !== typeof b.tcString || void 0 !== b.gdprApplies && "boolean" !== typeof b.gdprApplies || void 0 !== b.listenerId && "number" !== typeof b.listenerId || void 0 !== b.addtlConsent && "string" !== typeof b.addtlConsent ? 2 : b.cmpStatus && "error" !== b.cmpStatus ? 0 : 3, 
            e && 0 === b.internalErrorState || (b.tcString = "tcunavailable", e || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", 
            b.internalErrorState = 3);
            a(b);
        };
        try {
            fh(this, "addEventListener", e);
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), 
            c();
        }
    };
    bh.prototype.removeEventListener = function(a) {
        a && a.listenerId && fh(this, "removeEventListener", null, a.listenerId);
    };
    var dh = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a;
                }
            }
            e = void 0;
        }
        var g = e;
        if (0 === g) return !1;
        var h = c;
        2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
        var i;
        if (0 === h) if (a.purpose && a.vendor) {
            var j = eh(a.vendor.consents, void 0 === d ? "755" : d);
            i = j && "1" === b && a.purposeOneTreatment && "DE" === a.publisherCC ? !0 : j && eh(a.purpose.consents, b);
        } else i = ic("ticdac"); else i = 1 === h ? a.purpose && a.vendor ? eh(a.purpose.legitimateInterests, b) && eh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : ic("ticdac") : !0;
        return i;
    }, eh = function(a, b) {
        return !(!a || !a[b]);
    }, fh = function(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.i.__tcfapi) {
            var e = a.i.__tcfapi;
            e(b, 2, c, d);
        } else if (gh(a)) {
            hh(a);
            var f = ++a.na;
            a.L[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                }, g), "*");
            }
        } else c({}, !1);
    }, gh = function(a) {
        if (a.h) return a.h;
        a.h = _g(a.i, "__tcfapiLocator");
        return a.h;
    }, hh = function(a) {
        a.m || (a.m = function(b) {
            try {
                var c, d;
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                c = d.__tcfapiReturn;
                a.L[c.callId](c.returnValue, c.success);
            } catch (e) {}
        }, Yg(a.i, a.m));
    };
    var ih = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };
    function jh(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c;
    }
    var kh = jh("", 550), lh = jh("", 500);
    function mh() {
        var a = Ic.tcf || {};
        return Ic.tcf = a;
    }
    var nh = function(a, b) {
        this.m = a;
        this.h = b;
        this.i = G();
    }, oh = function(a) {}, ph = function(a) {}, qh = function() {
        var a = mh(), b = new bh(Qb, 3e3), c = new nh(b, a);
        if ((th() ? !0 === Qb.gtag_enable_tcf_support : !1 !== Qb.gtag_enable_tcf_support) && !a.active && ("function" === typeof Qb.__tcfapi || ch(b))) {
            a.active = !0;
            a.Bb = {};
            sh();
            var d = setTimeout(function() {
                rh(a);
                vh(a);
                d = null;
            }, lh);
            try {
                b.addEventListener(function(e) {
                    d && (clearTimeout(d), d = null);
                    if (0 !== e.internalErrorState) rh(a), vh(a), oh(c); else {
                        var f;
                        if (!1 === e.gdprApplies) f = uh(), b.removeEventListener(e); else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                            var g = {}, h;
                            for (h in ih) ih.hasOwnProperty(h) && ("1" === h ? g["1"] = !1 === e.gdprApplies || "error" === e.cmpStatus || 0 !== e.internalErrorState || "loaded" === e.cmpStatus && ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus) ? !1 === e.gdprApplies || "tcunavailable" === e.tcString || ic("tntac") && ("string" !== typeof e.tcString || !e.tcString.length) ? !0 : dh(e, "1", 0) : !1 : g[h] = dh(e, h, ih[h]));
                            f = g;
                        }
                        f && (a.tcString = e.tcString || "tcempty", a.Bb = f, vh(a), oh(c));
                    }
                }), ph(c);
            } catch (e) {
                d && (clearTimeout(d), d = null), rh(a), vh(a);
            }
        }
    };
    function rh(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        a.Bb = uh();
    }
    function sh() {
        var a = {};
        xc((a.ad_storage = "denied", a.wait_for_update = kh, a));
    }
    var th = function() {
        var a = !1;
        a = !0;
        return a;
    };
    function uh() {
        var a = {}, b;
        for (b in ih) ih.hasOwnProperty(b) && (a[b] = !0);
        return a;
    }
    function vh(a) {
        var b = {};
        yc((b.ad_storage = a.Bb["1"] ? "granted" : "denied", b));
    }
    var wh = function() {
        var a = mh();
        if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
    }, xh = function() {
        var a = mh();
        return a.active ? a.tcString || "" : "";
    }, yh = function(a) {
        if (!ih.hasOwnProperty(String(a))) return !0;
        var b = mh();
        return b.active && b.Bb ? !!b.Bb[String(a)] : !0;
    };
    function zh(a, b, c) {
        function d(a) {
            var d;
            Ic.reported_gclid || (Ic.reported_gclid = {});
            d = Ic.reported_gclid;
            var e = f + (a ? "gcu" : "gcs");
            if (!d[e]) {
                d[e] = !0;
                var i = [], j = function(a, b) {
                    b && i.push(a + "=" + encodeURIComponent(b));
                }, l = "https://www.google.com";
                if (sc()) {
                    var m = zc(pb.o);
                    j("gcs", Ac());
                    a && j("gcu", "1");
                    j("rnd", k);
                    if ((!f || g && "aw.ds" !== g) && zc(pb.o)) {
                        var n = ze("_gcl_aw");
                        j("gclaw", n.join("."));
                    }
                    j("url", String(Qb.location).split(/[?#]/)[0]);
                    j("dclid", Ah(b, h));
                    !m && b && (l = "https://pagead2.googlesyndication.com");
                }
                j("gdpr_consent", xh());
                "1" === he(!1)._up && j("gtm_up", "1");
                j("gclid", Ah(b, f));
                j("gclsrc", g);
                j("gtm", Xg(!c));
                var o = l + "/pagead/landing?" + i.join("&");
                fc(o);
            }
        }
        var e = Be(), f = e.gclid || "", g = e.gclsrc, h = e.dclid || "", i = !a && (!f || g && "aw.ds" !== g ? !1 : !0), j = sc();
        if (i || j) {
            var k = "" + Ed();
            j ? Bc(function() {
                d();
                zc(pb.o) || vc(function(a) {
                    return d(!0, a.He);
                }, pb.o);
            }, [ pb.o ]) : d();
        }
    }
    function Ah(a, b) {
        var c = a && !zc(pb.o);
        return b && c ? "0" : b;
    }
    var Bh = function(a) {
        if (Rb.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !Qb.getComputedStyle) return !0;
        var c = Qb.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display) return !0;
            var f = e.opacity, g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), 
                f = Math.min(g, f));
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = Qb.getComputedStyle(d, null));
        }
        return !1;
    };
    var Ch = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i), Dh = [ "SCRIPT", "IMG", "SVG", "PATH" ];
    function Eh(a) {
        var b;
        if (a === Rb.body) b = "body"; else {
            var c;
            if (a.id) c = "#" + a.id; else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++) if (f.children[g] === a) {
                                e = g + 1;
                                break a;
                            }
                            e = -1;
                        } else e = 1;
                    }
                    d = Eh(a.parentElement) + ">:nth-child(" + e + ")";
                } else d = "";
                c = d;
            }
            b = c;
        }
        return b;
    }
    function Fh() {
        var a;
        var b = [], c = Rb.body;
        if (c) {
            for (var d = c.querySelectorAll("*"), e = 0; e < d.length && 1e4 > e; e++) {
                var f = d[e];
                0 <= Dh.indexOf(f.tagName.toUpperCase()) || 0 === f.childElementCount && b.push(f);
            }
            a = {
                elements: b,
                status: 1e4 < d.length ? "2" : "1"
            };
        } else a = {
            elements: b,
            status: "4"
        };
        for (var g = a, h = g.elements, i = [], j = 0; j < h.length; j++) {
            var k = h[j], l = k.textContent;
            k.value && (l = k.value);
            if (l) {
                var m = l.match(Ch);
                if (m) {
                    var n = m[0], o;
                    if (Qb.location) {
                        var p = ld(Qb.location, "host", !0);
                        o = 0 <= n.toLowerCase().indexOf(p);
                    } else o = !1;
                    o || i.push({
                        element: k,
                        Ai: n
                    });
                }
            }
        }
        for (var q = [], r = 10 < i.length ? "3" : g.status, s = 0; s < i.length && 10 > s; s++) {
            var t = i[s].element;
            q.push({
                querySelector: Eh(t),
                tagName: t.tagName,
                isVisible: !Bh(t),
                type: 1
            });
        }
        return {
            elements: q,
            status: r
        };
    }
    var Gh = function(a) {
        var b = Jg(a, "/pagead/conversion_async.js");
        if (b) return b;
        var c = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), d = _e("https://", "http://", "www.googleadservices.com");
        if (c || 1 === of()) d = "https://www.google.com";
        return d + "/pagead/conversion_async.js";
    }, Hh = !1, Ih = [], Jh = [ "aw", "dc" ], Kh = function(a) {
        var b = Qb.google_trackConversion, c = a.gtm_onFailure;
        "function" == typeof b ? b(a) || c() : c();
    }, Lh = function() {
        for (;0 < Ih.length; ) Kh(Ih.shift());
    }, Mh = function(a) {
        if (!Hh) {
            Hh = !0;
            Of();
            var b = function() {
                Lh();
                Ih = {
                    push: Kh
                };
            };
            $e() ? b() : Wb(a, b, function() {
                Lh();
                Hh = !1;
            });
        }
    }, Nh = function(a) {
        if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                });
            }
            return b;
        }
    }, Oh = function(a, b, c, d) {
        function e() {
            H("gdpr_consent", xh());
        }
        function f() {}
        function g(a) {
            var b = !0;
            a && f();
            b && Ih.push(D);
        }
        function h() {
            return function(a) {
                o && (a = nf(a));
                return a;
            };
        }
        var i = Xe(a), j = b == pb.ia, k = i.C[0], l = i.C[1], m = void 0 !== l, n = function(a) {
            return d.getWithConfig(a);
        }, o = void 0 != n(pb.M) && !1 !== n(pb.M), p = !1 !== n(pb.fb), q = n(pb.eb) || n(pb.da), r = n(pb.V), s = n(pb.ca), t = n(pb.ja), u = n(pb.Da), v = Gh(u);
        Mh(v);
        var w = {
            prefix: q,
            domain: r,
            zb: s,
            flags: t
        };
        if (j) {
            var x = n(pb.ka) || {};
            p && (se(x[pb.hb], !!x[pb.H]) && Fe(Jh, w), De(w), Le([ "aw", "dc" ], w));
            n(pb.pb) && Ne();
            x[pb.H] && Je(Jh, x[pb.H], x[pb.jb], !!x[pb.ib], q);
            mf(i, d);
            zh(!1, o, a);
        }
        if (b === pb.Ba) {
            var y = n(pb.sa), z = n(pb.ra), A = n(y);
            if (y === pb.Nb && void 0 === A) {
                var B = Se("aw", w.prefix, o);
                0 === B.length ? z(void 0) : 1 === B.length ? z(B[0]) : z(B);
            } else z(A);
            return;
        }
        var C = !1 === n(pb.Qd) || !1 === n(pb.mb);
        if (!j || !m && !C) if (!0 === n(pb.Rd) && (m = !1), !1 !== n(pb.ba) || m) {
            var D = {
                google_conversion_id: k,
                google_remarketing_only: !m,
                onload_callback: d.F,
                gtm_onFailure: d.D,
                google_conversion_format: "3",
                google_conversion_color: "ffffff",
                google_conversion_domain: "",
                google_conversion_label: l,
                google_conversion_language: n(pb.Na),
                google_conversion_value: n(pb.va),
                google_conversion_currency: n(pb.qa),
                google_conversion_order_id: n(pb.ob),
                google_user_id: n(pb.qb),
                google_conversion_page_url: n(pb.kb),
                google_conversion_referrer_url: n(pb.lb),
                google_gtm: Xg()
            };
            m && (D.google_transport_url = Ig(u, "/"));
            D.google_restricted_data_processing = n(pb.Mc);
            $e() && (D.opt_image_generator = function() {
                return new Image();
            }, D.google_enable_display_cookie_match = !1);
            !1 === n(pb.ba) && (D.google_allow_ad_personalization_signals = !1);
            D.google_read_gcl_cookie_opt_out = !p;
            p && q && (D.google_gcl_cookie_prefix = q);
            var E = function() {
                var a = {
                    event: b
                }, c = d.eventModel;
                if (!c) return null;
                T(c, a);
                for (var e = 0; e < pb.Hd.length; ++e) delete a[pb.Hd[e]];
                return a;
            }();
            E && (D.google_custom_params = E);
            !m && n(pb.U) && (D.google_gtag_event_data = {
                items: n(pb.U)
            });
            if (m && b == pb.Aa) {
                D.google_conversion_merchant_id = n(pb.Vd);
                D.google_basket_feed_country = n(pb.Td);
                D.google_basket_feed_language = n(pb.Ud);
                D.google_basket_discount = n(pb.Sd);
                D.google_basket_transaction_type = b;
                D.google_disable_merchant_reported_conversions = !0 === n(pb.Yd);
                $e() && (D.google_disable_merchant_reported_conversions = !0);
                var F = Nh(n(pb.U));
                F && (D.google_conversion_items = F);
            }
            var G = function(a, b) {
                void 0 != b && "" !== b && (D.google_additional_conversion_params = D.google_additional_conversion_params || {}, 
                D.google_additional_conversion_params[a] = b);
            }, H = function(a, b) {
                void 0 != b && "" !== b && (D.google_additional_params = D.google_additional_params || {}, 
                D.google_additional_params[a] = b);
            };
            "1" === he(!1)._up && G("gtm_up", "1");
            m && (G("vdnc", n(pb.ce)), G("vdltv", n(pb.Wd)));
            e();
            var I = of();
            0 === I ? H("dg", "c") : 1 === I && H("dg", "e");
            D.google_gtm_url_processor = h();
            !function() {
                sc() ? Bc(function() {
                    e();
                    var a = zc(pb.o);
                    if (m) G("gcs", Ac()), a || u || !o || (D.google_transport_url = "https://pagead2.googlesyndication.com/"), 
                    g(a); else if (a) {
                        g(a);
                        return;
                    }
                    a || vc(function(a) {
                        var b = a.He;
                        D = T(D);
                        D.google_gtm_url_processor = h(b);
                        !u && D.google_transport_url && delete D.google_transport_url;
                        e();
                        m && (G("gcs", Ac()), G("gcu", "1"));
                        g(!0);
                    }, pb.o);
                }, [ pb.o ]) : g(!0);
            }();
        }
    };
    var Ph = function(a) {
        return !(void 0 === a || null === a || 0 === (a + "").length);
    }, Qh = function(a, b) {
        var c;
        if (2 === b.Y) return a("ord", z(1e11, 1e13)), !0;
        if (3 === b.Y) return a("ord", "1"), a("num", z(1e11, 1e13)), !0;
        if (4 === b.Y) return Ph(b.sessionId) && a("ord", b.sessionId), !0;
        if (5 === b.Y) c = "1"; else if (6 === b.Y) c = b.xd; else return !1;
        Ph(c) && a("qty", c);
        Ph(b.ac) && a("cost", b.ac);
        Ph(b.transactionId) && a("ord", b.transactionId);
        return !0;
    }, Rh = function(a, b, c) {
        function d(a, b, c) {
            k.hasOwnProperty(a) || (b = String(b), j.push(";" + a + "=" + (c ? b : Sh(b))));
        }
        var e = a.bd, f = a.Ad, g = a.protocol;
        g += f ? "//" + e + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
        var h = ";", i = !zc(pb.o) && a.Cb;
        i && (g = "https://ade.googlesyndication.com/ddm/activity", h = "/", f = !1);
        var j = [ h, "src=" + Sh(e), ";type=" + Sh(a.ed), ";cat=" + Sh(a.ub) ], k = a.Ng || {};
        B(k, function(a, b) {
            j.push(";" + Sh(a) + "=" + Sh(b + ""));
        });
        if (Qh(d, a)) {
            Ph(a.xc) && d("u", a.xc);
            Ph(a.wc) && d("tran", a.wc);
            d("gtm", Xg());
            sc() && (d("gcs", Ac()), c && d("gcu", "1"));
            !function(a, b) {
                b && d(a, b);
            }("gdpr_consent", xh());
            "1" === he(!1)._up && d("gtm_up", "1");
            !1 === a.rg && d("npa", "1");
            if (a.ad) {
                var l = void 0 === a.Cb ? !0 : !!a.Cb, m = Se("dc", a.Pa, l);
                m && m.length && d("gcldc", m.join("."));
                var n = Se("aw", a.Pa, l);
                n && n.length && d("gclaw", n.join("."));
                var o = Te(l);
                o && d("gac", o);
                Md({
                    prefix: a.Pa,
                    zb: a.Kg,
                    domain: a.Jg,
                    flags: a.ii
                });
                var p = Ld[Pd(a.Pa)];
                p && d("auiddc", p);
            }
            Ph(a.td) && d("prd", a.td, !0);
            B(a.Ed, function(a, b) {
                d(a, b);
            });
            j.push(b || "");
            if (Ph(a.kc)) {
                var q = a.kc || "";
                i && (q = pd(q));
                d("~oref", q);
            }
            var r = g + j.join("") + "?";
            f ? Yb(r, a.F) : Zb(r, a.F, a.D);
        } else ac(a.D);
    }, Sh = encodeURIComponent, Th = function(a, b) {
        sc() ? Bc(function() {
            Rh(a, b);
            zc(pb.o) || vc(function() {
                Rh(a, b, !0);
            }, pb.o);
        }, [ pb.o ]) : Rh(a, b);
    };
    var Uh = function(a, b, c, d) {
        function e() {
            var e = {
                config: a,
                gtm: Xg()
            };
            c && (Md(d), e.auiddc = Ld[Pd(d.prefix)]);
            b && (e.loadInsecure = b);
            void 0 === Qb.__dc_ns_processor && (Qb.__dc_ns_processor = []);
            Qb.__dc_ns_processor.push(e);
            Wb((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js");
        }
        zc(pb.o) ? e() : vc(e, pb.o);
    }, Vh = function(a) {
        var b = /^u([1-9]\d?|100)$/, c = a.getWithConfig(pb.Xd) || {}, d = Tg(a), e = {}, f = {};
        if (S(c)) for (var g in c) if (c.hasOwnProperty(g) && b.test(g)) {
            var h = c[g];
            u(h) && (e[g] = h);
        }
        for (var i = 0; i < d.length; i++) {
            var j = d[i];
            b.test(j) && (e[j] = j);
        }
        for (var k in e) e.hasOwnProperty(k) && (f[k] = a.getWithConfig(e[k]));
        return f;
    }, Wh = function(a) {
        function b(a, b, e) {
            void 0 !== e && 0 !== (e + "").length && d.push(a + b + ":" + c(e + ""));
        }
        var c = encodeURIComponent, d = [], e = a(pb.U) || [];
        if (w(e)) for (var f = 0; f < e.length; f++) {
            var g = e[f], h = f + 1;
            b("i", h, g.id);
            b("p", h, g.price);
            b("q", h, g.quantity);
            b("c", h, a(pb.Df));
            b("l", h, a(pb.Na));
        }
        return d.join("|");
    }, Xh = function(a) {
        var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
        if (b) {
            var c = {
                standard: 2,
                unique: 3,
                per_session: 4,
                transactions: 5,
                items_sold: 6,
                "": 1
            }[(b[5] || "").toLowerCase()];
            if (c) return {
                containerId: "DC-" + b[1],
                aa: b[3] ? a : "",
                lg: b[1],
                kg: b[3] || "",
                ub: b[4] || "",
                Y: c
            };
        }
    }, Yh = function(a, b, c, d) {
        var e = Xh(a);
        if (e) {
            var f = function(a) {
                return d.getWithConfig(a);
            }, g = !1 !== f(pb.fb), h = f(pb.eb) || f(pb.da), i = f(pb.V), j = f(pb.ca), k = f(pb.ja), l = f(pb.Ff), m = void 0 != f(pb.M) && !1 !== f(pb.M), n = 3 === af();
            if (b === pb.Ba) {
                var o = f(pb.sa), p = f(pb.ra), q = f(o);
                if (o === pb.Nb && void 0 === q) {
                    var r = Se("dc", h, m);
                    0 === r.length ? p(void 0) : 1 === r.length ? p(r[0]) : p(r);
                } else p(q);
                return;
            }
            if (b === pb.ia) {
                var s = {
                    prefix: h,
                    domain: i,
                    zb: j,
                    flags: k
                }, t = f(pb.ka) || {}, u = f(pb.Pb), v = void 0 === u ? !0 : !!u;
                g && (se(t[pb.hb], !!t[pb.H]) && Fe(Zh, s), De(s), Le(Zh, s), Ue(v, s));
                t[pb.H] && Je(Zh, t[pb.H], t[pb.jb], !!t[pb.ib], h);
                f(pb.pb) && Ne();
                if (l && l.exclusion_parameters && l.engines) if ($e()) ; else Uh(l, n, g, s);
                zh(!0, m, a);
                ac(d.F);
            } else {
                var w = {}, x = f(pb.Ef);
                if (S(x)) for (var y in x) if (x.hasOwnProperty(y)) {
                    var z = x[y];
                    void 0 !== z && null !== z && (w[y] = z);
                }
                var A = "";
                if (5 === e.Y || 6 === e.Y) A = Wh(f);
                var B = Vh(d), C = !0 === f(pb.Af);
                if ($e() && C) C = !1;
                var D = {
                    ub: e.ub,
                    ad: g,
                    Jg: i,
                    Kg: j,
                    Pa: h,
                    ac: f(pb.va),
                    Y: e.Y,
                    Ng: w,
                    bd: e.lg,
                    ed: e.kg,
                    D: d.D,
                    F: d.F,
                    kc: nd(od(Qb.location.href)),
                    td: A,
                    protocol: n ? "http:" : "https:",
                    xd: f(pb.Tf),
                    Ad: C,
                    sessionId: f(pb.Sb),
                    wc: void 0,
                    transactionId: f(pb.ob),
                    xc: void 0,
                    Ed: B,
                    rg: !1 !== f(pb.ba),
                    eventId: d.eventId,
                    Cb: m
                };
                Th(D);
            }
        } else ac(d.D);
    }, Zh = [ "aw", "dc" ];
    var $h = function(a) {
        function b() {
            var b = c, d = _h(JSON.stringify(a[b])), e = "https://www.google.com/travel/flights/click/conversion/" + _h(a.conversion_id) + "/?" + b + "=" + d;
            if (a.conversionLinkerEnabled) {
                var f = Se("gf", a.cookiePrefix, void 0);
                if (f && f.length) for (var g = 0; g < f.length; g++) e += "&gclgf=" + _h(f[g]);
            }
            Zb(e, a.onSuccess, a.onFailure);
        }
        var c;
        if (a.hasOwnProperty("conversion_data")) c = "conversion_data"; else if (a.hasOwnProperty("price")) c = "price"; else return;
        zc(pb.o) ? b() : vc(b, pb.o);
    }, _h = function(a) {
        return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a));
    };
    var ai = /.*\.google\.com(:\d+)?\/booking\/flights.*/, bi = function(a, b, c, d) {
        var e = function(a) {
            return d.getWithConfig(a);
        }, f = Xe(a).C[0], g = !1 !== e(pb.fb), h = e(pb.eb) || e(pb.da), i = e(pb.V), j = e(pb.ca), k = e(pb.ja);
        if (b === pb.Ba) {
            var l = e(pb.sa), m = e(pb.ra), n = e(l);
            if (l === pb.Nb && void 0 === n) {
                var o = void 0 != e(pb.M) && !1 !== e(pb.M), p = Se("gf", h, o);
                0 === p.length ? m(void 0) : 1 === p.length ? m(p[0]) : m(p);
            } else m(n);
            return;
        }
        if (b === pb.ia) {
            if (g) {
                var q = {
                    prefix: h,
                    domain: i,
                    flags: k,
                    zb: j
                };
                De(q);
                Le([ "aw", "dc" ], q);
            }
            ac(d.F);
        } else {
            var r = {
                conversion_id: f,
                onFailure: d.D,
                onSuccess: d.F,
                conversionLinkerEnabled: g,
                cookiePrefix: h
            }, s = ai.test(Qb.location.href);
            if (b === pb.La) {
                var t = {
                    partner_id: f,
                    is_direct_booking: s,
                    total_price: e(pb.va),
                    currency: e(pb.qa)
                };
                r.price = t;
                $h(r);
                return;
            }
            if (b !== pb.Aa) ac(d.D); else {
                var u = {
                    partner_id: f,
                    trip_type: e(pb.Yf),
                    total_price: e(pb.va),
                    currency: e(pb.qa),
                    is_direct_booking: s,
                    flight_segment: ci(e(pb.U))
                }, v = e(pb.Qf);
                v && "object" === typeof v && (u.passengers_total = C(v.total), u.passengers_adult = C(v.adult), 
                u.passengers_child = C(v.child), u.passengers_infant_in_seat = C(v.infant_in_seat), 
                u.passengers_infant_in_lap = C(v.infant_in_lap));
                r.conversion_data = u;
                $h(r);
            }
        }
    }, ci = function(a) {
        if (a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a[d];
                !e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = {
                    cabin: e.travel_class,
                    fare_product: e.fare_product,
                    booking_code: e.booking_code,
                    flight_number: e.flight_number,
                    origin: e.origin,
                    destination: e.destination,
                    departure_date: e.start_date
                }, c++);
            }
            return b;
        }
    };
    var di = function(a, b, c, d) {
        function e() {
            xh() && (u += "&gdpr_consent=" + encodeURIComponent(xh()));
            if (h) {
                var a = b === pb.La ? Se("aw", i, void 0) : Se("ha", i, void 0);
                u += a.map(function(a) {
                    return "&gclha=" + encodeURIComponent(a);
                }).join("");
            }
            Zb(u, d.F, d.D);
        }
        var f = Xe(a), g = function(a) {
            return d.getWithConfig(a);
        }, h = !1 !== g(pb.fb), i = g(pb.eb) || g(pb.da), j = g(pb.V), k = g(pb.ca), l = g(pb.ja);
        if (b === pb.Ba) {
            var m = g(pb.sa), n = g(pb.ra), o = g(m);
            if (m === pb.Nb && void 0 === o) {
                var p = void 0 != g(pb.M) && !1 !== g(pb.M), q = Se("ha", i, p);
                0 === q.length ? n(void 0) : 1 === q.length ? n(q[0]) : n(q);
            } else n(o);
            return;
        }
        if (b === pb.ia) {
            var r = g(pb.ka) || {};
            if (h) {
                var s = {
                    prefix: i,
                    domain: j,
                    flags: l,
                    zb: k
                };
                se(r[pb.hb], !!r[pb.H]) && Fe(ki, s);
                De(s);
                Le([ "aw", "dc" ], s);
            }
            r[pb.H] && Je(ki, r[pb.H], r[pb.jb], !!r[pb.ib], i);
            ac(d.F);
        } else {
            var t = f.C[0];
            if (/^\d+$/.test(t)) {
                var u = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + encodeURIComponent(t) + "/";
                if (b === pb.Aa) {
                    var v = ei(g(pb.ob), g(pb.va), g(pb.qa), g(pb.U));
                    v = encodeURIComponent(gi(v));
                    u += "?data=" + v;
                } else if (b === pb.La) {
                    var w = fi(t, g(pb.va), g(pb.ae), g(pb.qa), g(pb.U));
                    w = encodeURIComponent(gi(w));
                    u += "?label=FH&guid=ON&script=0&ord=" + z(0, 4294967295) + ("&price=" + w);
                } else {
                    ac(d.D);
                    return;
                }
                zc(pb.o) ? e() : vc(e, pb.o);
            } else ac(d.D);
        }
    }, ei = function(a, b, c, d) {
        var e = {};
        hi(a) && (e.hct_booking_xref = a);
        u(c) && (e.hct_currency_code = c);
        hi(b) && (e.hct_total_price = b, e.hct_base_price = b);
        if (!w(d) || 0 === d.length) return e;
        var f = d[0];
        if (!S(f)) return e;
        hi(f[ji.Rc]) && (e.hct_partner_hotel_id = f[ji.Rc]);
        u(f[ji.Tc]) && (e.hct_checkin_date = f[ji.Tc]);
        u(f[ji.zc]) && (e.hct_checkout_date = f[ji.zc]);
        return e;
    }, fi = function(a, b, c, d, e) {
        function f(a) {
            void 0 === a && (a = 0);
            if (hi(a)) return i + a;
        }
        function g(a, b, c) {
            c(b) && (h[a] = b);
        }
        var h = {};
        h.partner_id = a;
        var i = "USD";
        u(d) && (i = h.currency = d);
        hi(b) && (h.base_price_value_string = f(b), h.display_price_value_string = f(b));
        hi(c) && (h.tax_price_value_string = f(c));
        u("LANDING_PAGE") && (h.page_type = "LANDING_PAGE");
        if (!w(e) || 0 == e.length) return h;
        var j = e[0];
        if (!S(j)) return h;
        hi(j[ji.xe]) && (h.total_price_value_string = f(j[ji.xe]));
        g("partner_hotel_id", j[ji.Rc], hi);
        g("check_in_date", j[ji.Tc], u);
        g("check_out_date", j[ji.zc], u);
        g("adults", j[ji.fg], ii);
        g(ji.ze, j[ji.ze], u);
        g(ji.ye, j[ji.ye], u);
        return h;
    }, gi = function(a) {
        var b = [];
        B(a, function(a, c) {
            b.push(a + "=" + c);
        });
        return b.join(";");
    }, hi = function(a) {
        return u(a) || ii(a);
    }, ii = function(a) {
        return "number" === typeof a;
    }, ji = {
        Rc: "id",
        xe: "price",
        Tc: "start_date",
        zc: "end_date",
        fg: "occupancy",
        ze: "room_id",
        ye: "rate_rule_id"
    }, ki = [ "ha" ];
    var li = function() {
        var a = !0;
        yh(7) && yh(9) && yh(10) || (a = !1);
        var b = !0;
        b = !1;
        b && !mi() && (a = !1);
        return a;
    }, mi = function() {
        var a = !0;
        yh(3) && yh(4) || (a = !1);
        return a;
    };
    var ni = function(a, b) {
        var c = b.getWithConfig(pb.sa), d = b.getWithConfig(pb.ra), e = b.getWithConfig(c);
        if (void 0 === e) {
            var f = void 0;
            ti.hasOwnProperty(c) ? f = ti[c] : ui.hasOwnProperty(c) && (f = ui[c]);
            1 === f && (f = zi(c));
            u(f) ? Qf()(function() {
                var b = Qf().getByName(a).get(f);
                d(b);
            }) : d(void 0);
        } else d(e);
    }, oi = function(a, b, c) {
        if (sc()) {
            var d = function() {
                var d = Qf(), e = Di(a, b, "", c);
                Gi(b, e.xa) && (d(function() {
                    d.remove(b);
                }), d("create", a, e.xa));
            };
            vc(d, pb.J);
            vc(d, pb.o);
        }
    }, pi = function(a, b, c) {
        var d = "https://www.google-analytics.com/analytics.js", e = Sf();
        if (t(e)) {
            var f = "gtag_" + a.split("-").join("_"), g = function(a) {
                var b = [].slice.call(arguments, 0);
                b[0] = f + "." + b[0];
                e.apply(window, b);
            }, h = function() {
                var a = function(a, b) {
                    for (var c = 0; b && c < b.length; c++) g(a, b[c]);
                }, d = Ei(b, c);
                if (d) {
                    var e = d.action;
                    if ("impressions" === e) a("ec:addImpression", d.eh); else if ("promo_click" === e || "promo_view" === e) {
                        var f = d.ud;
                        a("ec:addPromo", d.ud);
                        f && 0 < f.length && "promo_click" === e && g("ec:setAction", e);
                    } else a("ec:addProduct", d.Sa), g("ec:setAction", e, d.tb);
                }
            }, i = function() {
                if ($e()) ; else {
                    var a = c.getWithConfig(pb.Pf);
                    a && (g("require", a, {
                        dataLayer: "dataLayer"
                    }), g("require", "render"));
                }
            }, j = Di(a, f, b, c), k = function(a, b, c) {
                c && (b = "" + b);
                j.ya[a] = b;
            };
            Gi(f, j.xa) && (e(function() {
                Qf() && Qf().remove(f);
            }), si[f] = !1);
            e("create", a, j.xa);
            if (j.xa._x_19) {
                var l = Jg(j.xa._x_19, "/analytics.js");
                l && (d = l);
                j.xa._x_20 && !si[f] && (si[f] = !0, e(Wf(f, j.xa._x_20)));
            }
            !function() {
                var a = c.getWithConfig("custom_map");
                e(function() {
                    if (S(a)) {
                        var b = j.ya, c = Qf().getByName(f), d;
                        for (d in a) if (a.hasOwnProperty(d) && /^(dimension|metric)\d+$/.test(d) && void 0 != a[d]) {
                            var e = c.get(zi(a[d]));
                            Bi(b, d, e);
                        }
                    }
                });
            }();
            !function(a) {
                if (a) {
                    var b = {};
                    if (S(a)) for (var c in wi) wi.hasOwnProperty(c) && yi(wi[c], c, a[c], b);
                    g("require", "linkid", b);
                }
            }(j.linkAttribution);
            var m = j[pb.ka];
            if (m && m[pb.H]) {
                var n = m[pb.jb];
                Tf(f + ".", m[pb.H], void 0 === n ? !!m.use_anchor : "fragment" === n, !!m[pb.ib]);
            }
            var o = !1;
            o = b === pb.Ba;
            if (b === pb.Bc) i(), g("send", "pageview", j.ya); else if (b === pb.ia) i(), mf(a, c), 
            c.getWithConfig(pb.pb) && Ne(), 0 != j.sendPageView && g("send", "pageview", j.ya), 
            oi(a, f, c); else if (o) ni(f, c); else "screen_view" === b ? g("send", "screenview", j.ya) : "timing_complete" === b ? (k("timingCategory", j.eventCategory, !0), 
            k("timingVar", j.name, !0), k("timingValue", C(j.value)), void 0 !== j.eventLabel && k("timingLabel", j.eventLabel, !0), 
            g("send", "timing", j.ya)) : "exception" === b ? g("send", "exception", j.ya) : "optimize.callback" !== b && (0 <= x([ pb.Ac, "select_content", pb.La, pb.Kb, pb.Lb, pb.$a, "set_checkout_option", pb.Aa, pb.Mb, "view_promotion", "checkout_progress" ], b) && (g("require", "ec", "ec.js"), 
            h()), k("eventCategory", j.eventCategory, !0), k("eventAction", j.eventAction || b, !0), 
            void 0 !== j.eventLabel && k("eventLabel", j.eventLabel, !0), void 0 !== j.value && k("eventValue", C(j.value)), 
            g("send", "event", j.ya));
            if (!ri) {
                ri = !0;
                Of();
                var p = c.D, q = function() {
                    Qf().loaded || p();
                };
                $e() ? ac(q) : Wb(d, q, p);
            }
        } else ac(c.D);
    }, qi = function(a, b, c, d) {
        Bc(function() {
            pi(a, b, d);
        }, [ pb.J, pb.o ]);
    }, ri, si = {}, ti = {
        client_id: 1,
        client_storage: "storage",
        cookie_name: 1,
        cookie_domain: 1,
        cookie_expires: 1,
        cookie_path: 1,
        cookie_update: 1,
        cookie_flags: 1,
        sample_rate: 1,
        site_speed_sample_rate: 1,
        use_amp_client_id: 1,
        store_gac: 1,
        conversion_linker: "storeGac"
    }, ui = {
        anonymize_ip: 1,
        app_id: 1,
        app_installer_id: 1,
        app_name: 1,
        app_version: 1,
        campaign: {
            name: "campaignName",
            source: "campaignSource",
            medium: "campaignMedium",
            term: "campaignKeyword",
            content: "campaignContent",
            id: "campaignId"
        },
        currency: "currencyCode",
        description: "exDescription",
        fatal: "exFatal",
        language: 1,
        non_interaction: 1,
        page_hostname: "hostname",
        page_referrer: "referrer",
        page_path: "page",
        page_location: "location",
        page_title: "title",
        screen_name: 1,
        transport_type: "transport",
        user_id: 1
    }, vi = {
        content_id: 1,
        event_category: 1,
        event_action: 1,
        event_label: 1,
        link_attribution: 1,
        linker: 1,
        method: 1,
        name: 1,
        send_page_view: 1,
        value: 1
    }, wi = {
        cookie_name: 1,
        cookie_expires: "duration",
        levels: 1
    }, xi = {
        anonymize_ip: 1,
        fatal: 1,
        non_interaction: 1,
        use_amp_client_id: 1,
        send_page_view: 1,
        store_gac: 1,
        conversion_linker: 1
    }, yi = function(a, b, c, d) {
        if (void 0 !== c) if (xi[b] && (c = D(c)), "anonymize_ip" !== b || c || (c = void 0), 
        1 === a) d[zi(b)] = c; else if (u(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    }, zi = function(a) {
        return a && u(a) ? a.replace(/(_[a-z])/g, function(a) {
            return a[1].toUpperCase();
        }) : a;
    }, Ai = function(a) {
        var b = "general";
        0 <= x([ pb.Nd, pb.Kb, pb.Od, pb.$a, "checkout_progress", pb.Aa, pb.Mb, pb.Lb, "set_checkout_option" ], a) ? b = "ecommerce" : 0 <= x("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
        return b;
    }, Bi = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c);
    }, Ci = function(a) {
        if (w(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id, f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
                }
            }
            return 0 < b.length ? b.join("!") : void 0;
        }
    }, Di = function(a, b, c, d) {
        function e(a, b) {
            void 0 !== b && (h[a] = b);
        }
        var f = function(a) {
            return d.getWithConfig(a);
        }, g = {}, h = {}, i = {}, j = Ci(f(pb.Kf));
        j && Bi(h, "exp", j);
        var k = f("custom_map");
        if (S(k)) for (var l in k) if (k.hasOwnProperty(l) && /^(dimension|metric)\d+$/.test(l) && void 0 != k[l]) {
            var m = f(String(k[l]));
            void 0 !== m && Bi(h, l, m);
        }
        for (var n = Tg(d), o = 0; o < n.length; ++o) {
            var p = n[o], q = f(p);
            if (vi.hasOwnProperty(p)) yi(vi[p], p, q, g); else if (ui.hasOwnProperty(p)) yi(ui[p], p, q, h); else if (ti.hasOwnProperty(p)) yi(ti[p], p, q, i); else if (/^(dimension|metric|content_group)\d+$/.test(p)) yi(1, p, q, h); else if ("developer_id" === p) {
                var r = O(q);
                r && (h["&did"] = r);
            } else p === pb.da && 0 > x(n, pb.Ob) && (i.cookieName = q + "_ga");
        }
        Bi(i, "cookieDomain", "auto");
        Bi(h, "forceSSL", !0);
        Bi(g, "eventCategory", Ai(c));
        0 <= x([ "view_item", "view_item_list", "view_promotion", "view_search_results" ], c) && Bi(h, "nonInteraction", !0);
        "login" === c || "sign_up" === c || "share" === c ? Bi(g, "eventLabel", f(pb.Of)) : "search" === c || "view_search_results" === c ? Bi(g, "eventLabel", f(pb.Wf)) : "select_content" === c && Bi(g, "eventLabel", f(pb.Cf));
        var s = g[pb.ka] || {}, t = s[pb.hb];
        t || 0 != t && s[pb.H] ? i.allowLinker = !0 : !1 === t && Bi(i, "useAmpClientId", !1);
        !1 !== f(pb.Bf) && !1 !== f(pb.ab) && li() || (h.allowAdFeatures = !1);
        if (!1 === f(pb.ba) || !mi()) {
            var u = "allowAdFeatures";
            u = "allowAdPersonalizationSignals";
            h[u] = !1;
        }
        i.name = b;
        h["&gtm"] = Xg(!0);
        h.hitCallback = d.F;
        sc() && (h["&gcs"] = Ac(), zc(pb.J) || (i.storage = "none"), zc(pb.o) || (h.allowAdFeatures = !1, 
        i.storeGac = !1));
        var v = f(pb.Da) || f(pb.Mf) || _c("gtag.remote_config." + a + ".url", 2), w = f(pb.Lf) || _c("gtag.remote_config." + a + ".dualId", 2);
        if (v && null != Tb) i._x_19 = v;
        w && (i._x_20 = w);
        g.ya = h;
        g.xa = i;
        return g;
    }, Ei = function(a, b) {
        function c(a) {
            var b = T(a);
            b.list = a.list_name;
            b.listPosition = a.list_position;
            b.position = a.list_position || a.creative_slot;
            b.creative = a.creative_name;
            return b;
        }
        function d(a) {
            for (var b = [], d = 0; a && d < a.length; d++) a[d] && b.push(c(a[d]));
            return b.length ? b : void 0;
        }
        function e(a) {
            return {
                id: f(pb.ob),
                affiliation: f(pb.Gf),
                revenue: f(pb.va),
                tax: f(pb.ae),
                shipping: f(pb.Jf),
                coupon: f(pb.Hf),
                list: f(pb.Ec) || a
            };
        }
        for (var f = function(a) {
            return b.getWithConfig(a);
        }, g = f(pb.U), h, i = 0; g && i < g.length && !(h = g[i][pb.Ec]); i++) ;
        var j = f("custom_map");
        if (S(j)) for (var k = 0; g && k < g.length; ++k) {
            var l = g[k], m;
            for (m in j) j.hasOwnProperty(m) && /^(dimension|metric)\d+$/.test(m) && void 0 != j[m] && Bi(l, m, l[j[m]]);
        }
        var n = null, o = f(pb.If);
        a === pb.Aa || a === pb.Mb ? n = {
            action: a,
            tb: e(),
            Sa: d(g)
        } : a === pb.Kb ? n = {
            action: "add",
            Sa: d(g)
        } : a === pb.Lb ? n = {
            action: "remove",
            Sa: d(g)
        } : a === pb.La ? n = {
            action: "detail",
            tb: e(h),
            Sa: d(g)
        } : a === pb.Ac ? n = {
            action: "impressions",
            eh: d(g)
        } : "view_promotion" === a ? n = {
            action: "promo_view",
            ud: d(o)
        } : "select_content" === a && o && 0 < o.length ? n = {
            action: "promo_click",
            ud: d(o)
        } : "select_content" === a ? n = {
            action: "click",
            tb: {
                list: f(pb.Ec) || h
            },
            Sa: d(g)
        } : a === pb.$a || "checkout_progress" === a ? n = {
            action: "checkout",
            Sa: d(g),
            tb: {
                step: a === pb.$a ? 1 : f(pb.$d),
                option: f(pb.Zd)
            }
        } : "set_checkout_option" === a && (n = {
            action: "checkout_option",
            tb: {
                step: f(pb.$d),
                option: f(pb.Zd)
            }
        });
        n && (n.ji = f(pb.qa));
        return n;
    }, Fi = {}, Gi = function(a, b) {
        var c = Fi[a];
        Fi[a] = T(b);
        if (!c) return !1;
        for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
        for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
        return !1;
    };
    function Hi() {
        var a = Ic;
        return a.gcq = a.gcq || new Pi();
    }
    var Ii = function(a, b, c) {
        Hi().register(a, b, c);
    }, Ji = function(a, b, c, d) {
        Hi().push("event", [ b, a ], c, d);
    }, Ki = function(a, b) {
        Hi().push("config", [ a ], b);
    }, Li = function(a, b, c) {
        Hi().push("get", [ a, b ], c);
    }, Mi = {}, Ni = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.i = {};
        this.m = null;
        this.h = !1;
    }, Oi = function(a, b, c, d, e) {
        this.type = a;
        this.m = b;
        this.aa = c || "";
        this.h = d;
        this.i = e;
    }, Pi = function() {
        this.m = {};
        this.i = {};
        this.h = [];
    }, Qi = function(a, b) {
        var c = Xe(b);
        return a.m[c.containerId] = a.m[c.containerId] || new Ni();
    }, Ri = function(a, b, c) {
        if (b) {
            var d = Xe(b);
            if (d && 1 === Qi(a, b).status) {
                Qi(a, b).status = 2;
                var e = {};
                bg && (e.timeoutId = Qb.setTimeout(function() {
                    tb(38);
                    Zf();
                }, 3e3));
                a.push("require", [ e ], d.containerId);
                Mi[d.containerId] = G();
                if ($e()) ; else {
                    var f = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c", g = ("http:" != Qb.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + f), h = Jg(c, f) || g;
                    Wb(h);
                }
            }
        }
    }, Si = function(a, b, c, d) {
        if (d.aa) {
            var e = Qi(a, d.aa), f = e.m;
            if (f) {
                var g = T(c), h = T(e.targetConfig[d.aa]), i = T(e.containerConfig), j = T(e.i), k = T(a.i), l = _c("gtm.uniqueEventId"), m = Xe(d.aa).prefix, n = Sg(Rg(Qg(Pg(Og(Ng(Mg(g), h), i), j), k), function() {
                    rg(l, m, "2");
                }), function() {
                    rg(l, m, "3");
                });
                try {
                    rg(l, m, "1");
                    f(d.aa, b, d.m, n);
                } catch (o) {
                    rg(l, m, "4");
                }
            }
        }
    };
    Pi.prototype.register = function(a, b, c) {
        if (3 !== Qi(this, a).status) {
            Qi(this, a).m = b;
            Qi(this, a).status = 3;
            c && (Qi(this, a).i = c);
            var d = Xe(a), e = Mi[d.containerId];
            if (void 0 !== e) {
                var f = Ic[d.containerId].bootstrap, g = d.prefix.toUpperCase();
                Ic[d.containerId]._spx && (g = g.toLowerCase());
                var h = _c("gtm.uniqueEventId"), i = g, j = G() - f;
                if (bg && !mg[h]) {
                    h !== kg && ($f(), kg = h);
                    var k = i + "." + Math.floor(f - e) + "." + Math.floor(j);
                    ig = ig ? ig + "," + k : "&cl=" + k;
                }
                delete Mi[d.containerId];
            }
            this.flush();
        }
    };
    Pi.prototype.push = function(a, b, c, d) {
        var e = Math.floor(G() / 1e3);
        Ri(this, c, b[0][pb.Da] || this.i[pb.Da]);
        this.h.push(new Oi(a, e, c, b, d));
        d || this.flush();
    };
    Pi.prototype.flush = function(a) {
        for (var b = this; this.h.length; ) {
            var c = this.h[0];
            if (c.i) c.i = !1, this.h.push(c); else switch (c.type) {
              case "require":
                if (3 !== Qi(this, c.aa).status && !a) return;
                bg && Qb.clearTimeout(c.h[0].timeoutId);
                break;

              case "set":
                B(c.h[0], function(a, c) {
                    T(N(a, c), b.i);
                });
                break;

              case "config":
                var d = c.h[0], e = !!d[pb.Tb];
                delete d[pb.Tb];
                var f = Qi(this, c.aa), g = Xe(c.aa), h = g.containerId === g.id;
                e || (h ? f.containerConfig = {} : f.targetConfig[c.aa] = {});
                f.h && e || Si(this, pb.ia, d, c);
                f.h = !0;
                delete d[pb.rb];
                h ? T(d, f.containerConfig) : T(d, f.targetConfig[c.aa]);
                break;

              case "event":
                Si(this, c.h[1], c.h[0], c);
                break;

              case "get":
                var i = {}, j = (i[pb.sa] = c.h[0], i[pb.ra] = c.h[1], i);
                Si(this, pb.Ba, j, c);
            }
            this.h.shift();
        }
    };
    var Ti = !1, Ui = [];
    function Vi() {
        if (!Ti) {
            Ti = !0;
            for (var a = 0; a < Ui.length; a++) ac(Ui[a]);
        }
    }
    var Wi = function(a) {
        Ti ? ac(a) : Ui.push(a);
    };
    var Xi = "HA GF G UA AW DC".split(" "), Yi = !1, Zi = {}, $i = !1;
    function _i(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = T(b), b[pb.Fc] && (c.eventCallback = b[pb.Fc]), b[pb.Qb] && (c.eventTimeout = b[pb.Qb]));
        return c;
    }
    function aj() {
        Yi = Yi || !Ic.gtagRegistered, Ic.gtagRegistered = !0, Yi && (Ic.addTargetToGroup = function(a) {
            cj(a, "default");
        });
        return Yi;
    }
    var bj = function(a) {
        B(Zi, function(b, c) {
            var d = x(c, a);
            0 <= d && c.splice(d, 1);
        });
    }, cj = function(a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++) Zi[b[c]] = Zi[b[c]] || [], Zi[b[c]].push(a);
    };
    var dj = {
        config: function(a) {
            var b = a[2] || {};
            if (2 > a.length || !u(a[1]) || !S(b)) return;
            var c = Xe(a[1]);
            if (!c) return;
            bj(c.id);
            cj(c.id, b[pb.Jc] || "default");
            delete b[pb.Jc];
            $i || tb(43);
            Vc();
            if (aj() && -1 !== x(Xi, c.prefix)) {
                "G" === c.prefix && (b[pb.rb] = !0);
                Ki(b, c.id);
                return;
            }
            bd("gtag.targets." + c.id, void 0);
            bd("gtag.targets." + c.id, T(b));
            var d = {};
            d[pb.Ca] = c.id;
            return _i(pb.ia, d);
        },
        event: function(a) {
            var b = a[1];
            if (u(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!S(a[2]) && void 0 != a[2]) return;
                    c = a[2];
                }
                var d = _i(b, c);
                var e;
                var f = c && c[pb.Ca];
                void 0 === f && (f = _c(pb.Ca, 2), void 0 === f && (f = "default"));
                if (u(f) || w(f)) {
                    for (var g = f.toString().replace(/\s+/g, "").split(","), h = [], i = 0; i < g.length; i++) 0 <= g[i].indexOf("-") ? h.push(g[i]) : h = h.concat(Zi[g[i]] || []);
                    e = Ye(h);
                } else e = void 0;
                var j = e;
                if (!j) return;
                var k = aj();
                Vc();
                for (var l = [], m = 0; k && m < j.length; m++) {
                    var n = j[m];
                    if (-1 !== x(Xi, n.prefix)) {
                        var o = T(c);
                        "G" === n.prefix && (o[pb.rb] = !0);
                        Ji(b, o, n.id);
                    }
                    l.push(n.id);
                }
                d.eventModel = d.eventModel || {};
                0 < j.length ? d.eventModel[pb.Ca] = l.join() : delete d.eventModel[pb.Ca];
                $i || tb(43);
                return d;
            }
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime) return $i = !0, aj(), {
                event: "gtm.js",
                "gtm.start": a[1].getTime()
            };
        },
        policy: function() {},
        set: function(a) {
            var b;
            2 == a.length && S(a[1]) ? b = T(a[1]) : 3 == a.length && u(a[1]) && (b = {}, S(a[2]) || w(a[2]) ? b[a[1]] = T(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (Vc(), aj()) {
                    T(b);
                    var c = T(b);
                    Hi().push("set", [ c ]);
                }
                b._clear = !0;
                return b;
            }
        },
        consent: function(a) {
            function b() {
                aj() && T(a[2], {
                    subcommand: a[1]
                });
            }
            if (3 === a.length) {
                tb(39);
                var c = Vc(), d = a[1];
                "default" === d ? (b(), xc(a[2])) : "update" === d && (b(), yc(a[2], c));
            }
        }
    };
    dj.get = function(a) {
        tb(53);
        if (4 !== a.length || !u(a[1]) || !u(a[2]) || !t(a[3])) return;
        var b = Xe(a[1]), c = String(a[2]), d = a[3];
        if (!b) return;
        $i || tb(43);
        if (!aj() || -1 === x(Xi, b.prefix)) return;
        Vc();
        var e = {};
        yf(T((e[pb.sa] = c, e[pb.ra] = d, e)));
        Li(c, function(a) {
            ac(function() {
                return d(a);
            });
        }, b.id);
    };
    var ej = {
        policy: !0
    };
    var fj = function(a, b) {
        var c = a.hide;
        if (c && void 0 !== c[b] && c.end) {
            c[b] = !1;
            var d = !0, e;
            for (e in c) if (c.hasOwnProperty(e) && !0 === c[e]) {
                d = !1;
                break;
            }
            d && (c.end(), c.end = null);
        }
    }, gj = function(a) {
        var b = Uk(), c = b && b.hide;
        c && c.end && (c[a] = !0);
    };
    var hj = function(a) {
        if (ij(a)) return a;
        this.h = a;
    };
    hj.prototype.ah = function() {
        return this.h;
    };
    var ij = function(a) {
        return !a || "object" !== Q(a) || S(a) ? !1 : "getUntrustedUpdateValue" in a;
    };
    hj.prototype.getUntrustedUpdateValue = hj.prototype.ah;
    var jj = [], kj = !1, lj = function(a) {
        return Qb["dataLayer"].push(a);
    }, mj = function(a) {
        var b = Ic["dataLayer"], c = b ? b.subscribers : 1, d = 0;
        return function() {
            ++d === c && a();
        };
    };
    function nj(a) {
        var b = a._clear;
        B(a, function(a, c) {
            "_clear" !== a && (b && bd(a, void 0), bd(a, c));
        });
        Qc || (Qc = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Vc(), a["gtm.uniqueEventId"] = c, bd("gtm.uniqueEventId", c));
        return Dg(a);
    }
    function oj() {
        for (var a = !1; !kj && 0 < jj.length; ) {
            kj = !0;
            delete Yc.eventModel;
            cd();
            var b = jj.shift();
            if (null != b) {
                var c = ij(b);
                if (c) {
                    var d = b;
                    b = ij(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = [ "gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist" ], f = 0; f < e.length; f++) {
                        var g = e[f], h = _c(g, 1);
                        if (w(h) || S(h)) h = T(h);
                        Zc[g] = h;
                    }
                }
                try {
                    if (t(b)) try {
                        b.call($c);
                    } catch (i) {} else if (w(b)) {
                        var j = b;
                        if (u(j[0])) {
                            var k = j[0].split("."), l = k.pop(), m = j.slice(1), n = _c(k.join("."), 2);
                            if (void 0 !== n && null !== n) try {
                                n[l].apply(n, m);
                            } catch (i) {}
                        }
                    } else {
                        var o = b;
                        if (o && ("[object Arguments]" == Object.prototype.toString.call(o) || Object.prototype.hasOwnProperty.call(o, "callee"))) {
                            a: {
                                var p = b;
                                if (p.length && u(p[0])) {
                                    var q = dj[p[0]];
                                    if (q && (!c || !ej[p[0]])) {
                                        b = q(p);
                                        break a;
                                    }
                                }
                                b = void 0;
                            }
                            if (!b) {
                                kj = !1;
                                continue;
                            }
                        }
                        a = nj(b) || a;
                    }
                } finally {
                    c && cd(!0);
                }
            }
            kj = !1;
        }
        return !a;
    }
    function pj() {
        var a = oj();
        try {
            fj(Qb["dataLayer"], Hc.B);
        } catch (b) {}
        return a;
    }
    var qj = function() {
        var a = Ub("dataLayer", []), b = Ub("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        Ff(function() {
            b.gtmDom || (b.gtmDom = !0, a.push({
                event: "gtm.dom"
            }));
        });
        Wi(function() {
            b.gtmLoad || (b.gtmLoad = !0, a.push({
                event: "gtm.load"
            }));
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var b;
            if (0 < Ic.SANDBOXED_JS_SEMAPHORE) {
                b = [];
                for (var d = 0; d < arguments.length; d++) b[d] = new hj(arguments[d]);
            } else b = [].slice.call(arguments, 0);
            var e = c.apply(a, b);
            jj.push.apply(jj, b);
            if (300 < this.length) for (tb(4); 300 < this.length; ) this.shift();
            var f = "boolean" !== typeof e || e;
            return oj() && f;
        };
        var d = a.slice(0);
        jj.push.apply(jj, d);
        rj() && ac(pj);
    }, rj = function() {
        var a = !0;
        return a;
    };
    var sj = {};
    sj.Ub = new String("undefined");
    var tj = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === sj.Ub ? b : a[d]);
            return c.join("");
        };
    };
    tj.prototype.toString = function() {
        return this.h("undefined");
    };
    tj.prototype.valueOf = tj.prototype.toString;
    sj.ig = tj;
    sj.Sc = {};
    sj.Lg = function(a) {
        return new tj(a);
    };
    var uj = {};
    sj.Jh = function(a, b) {
        var c = Vc();
        uj[c] = [ a, b ];
        return c;
    };
    sj.Je = function(a) {
        var b = a ? 0 : 1;
        return function(a) {
            var c = uj[a];
            if (c && "function" === typeof c[b]) c[b]();
            uj[a] = void 0;
        };
    };
    sj.jh = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c;
    };
    sj.Bh = function(a) {
        if (a === sj.Ub) return a;
        var b = Vc();
        sj.Sc[b] = a;
        return 'google_tag_manager["' + Hc.B + '"].macro(' + b + ")";
    };
    sj.uh = function(a, b, c) {
        a instanceof sj.ig && (a = a.h(sj.Jh(b, c)), b = s);
        return {
            gd: a,
            F: b
        };
    };
    var vj = function(a, b, c) {
        function d(a, b) {
            var c = a[b];
            return c;
        }
        var e = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": d(a, "className"),
            "gtm.elementId": a["for"] || bc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || d(a, "target") || ""
        };
        c && (e["gtm.triggers"] = c.join(","));
        e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase || "";
        return e;
    }, wj = function(a) {
        Ic.hasOwnProperty("autoEventsSettings") || (Ic.autoEventsSettings = {});
        var b = Ic.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a];
    }, xj = function(a, b, c) {
        wj(a)[b] = c;
    }, yj = function(a, b, c, d) {
        var e = wj(a), f = I(e, b, d);
        e[b] = c(f);
    }, zj = function(a, b, c) {
        var d = wj(a);
        return I(d, b, c);
    };
    var Aj = [ "input", "select", "textarea" ], Bj = [ "button", "hidden", "image", "reset", "submit" ], Cj = function(a) {
        var b = a.tagName.toLowerCase();
        return !y(Aj, function(a) {
            return a === b;
        }) || "input" === b && y(Bj, function(b) {
            return b === a.type.toLowerCase();
        }) ? !1 : !0;
    }, Dj = function(a) {
        return a.form ? a.form.tagName ? a.form : Rb.getElementById(a.form) : ec(a, [ "form" ], 100);
    }, Ej = function(a, b, c) {
        if (!a.elements) return 0;
        for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
            var g = a.elements[e];
            if (Cj(g)) {
                if (g.getAttribute(c) === d) return f;
                f++;
            }
        }
        return 0;
    };
    var Fj = !!Qb.MutationObserver, Gj = void 0, Hj = function(a) {
        if (!Gj) {
            var b = function() {
                var a = Rb.body;
                if (a) if (Fj) new MutationObserver(function() {
                    for (var a = 0; a < Gj.length; a++) ac(Gj[a]);
                }).observe(a, {
                    childList: !0,
                    subtree: !0
                }); else {
                    var b = !1;
                    $b(a, "DOMNodeInserted", function() {
                        b || (b = !0, ac(function() {
                            b = !1;
                            for (var a = 0; a < Gj.length; a++) ac(Gj[a]);
                        }));
                    });
                }
            };
            Gj = [];
            Rb.body ? b() : ac(b);
        }
        Gj.push(a);
    };
    var Ij = Qb.clearTimeout, Jj = Qb.setTimeout, Kj = function(a, b, c) {
        if ($e()) b && ac(b); else return Wb(a, b, c);
    }, Lj = function() {
        return new Date();
    }, Mj = function() {
        return Qb.location.href;
    }, Nj = function(a) {
        return kd(od(a), "fragment");
    }, Oj = function(a) {
        return nd(od(a));
    }, Pj = function(a, b) {
        return _c(a, b || 2);
    }, Qj = function(a, b, c) {
        var d;
        b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = lj(a)) : d = lj(a);
        return d;
    }, Rj = function(a, b) {
        Qb[a] = b;
    }, Sj = function(a, b, c) {
        b && (void 0 === Qb[a] || c && !Qb[a]) && (Qb[a] = b);
        return Qb[a];
    }, Tj = function(a, b, c) {
        return rd(a, b, void 0 === c ? !0 : !!c);
    }, Uj = function(a, b, c) {
        return 0 === vd(a, b, c);
    }, Vj = function(a, b) {
        if ($e()) b && ac(b); else Yb(a, b);
    }, Wj = function(a) {
        return !!zj(a, "init", !1);
    }, Xj = function(a) {
        xj(a, "init", !0);
    }, Yj = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Oc;
        c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        Kj(_e("https://", "http://", c));
    }, Zj = function(a, b) {
        var c = a[b];
        return c;
    }, $j = function(a, b, c) {
        bg && (U(a) || sg(c, b, a));
    };
    var _j = sj.uh;
    function ak(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c;
    }
    var bk = new H();
    function ck(a, b) {
        function c(a) {
            var b = od(a), c = kd(b, "protocol"), d = kd(b, "host", !0), e = kd(b, "port"), f = kd(b, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === c || "http" == c && "80" == e || "https" == c && "443" == e) c = "web", 
            e = "default";
            return [ c, d, e, f ];
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0;
    }
    function dk(a) {
        return ek(a) ? 1 : 0;
    }
    function ek(a) {
        var b = a.arg0, c = a.arg1;
        if (a.any_of && w(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = T(a, {});
                T({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (dk(e)) return !0;
            }
            return !1;
        }
        switch (a["function"]) {
          case "_cn":
            return 0 <= String(b).indexOf(String(c));

          case "_css":
            var f;
            a: {
                if (b) {
                    var g = [ "matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector" ];
                    try {
                        for (var h = 0; h < g.length; h++) if (b[g[h]]) {
                            f = b[g[h]](c);
                            break a;
                        }
                    } catch (i) {}
                }
                f = !1;
            }
            return f;

          case "_ew":
            return ak(b, c);

          case "_eq":
            return String(b) == String(c);

          case "_ge":
            return Number(b) >= Number(c);

          case "_gt":
            return Number(b) > Number(c);

          case "_lc":
            var j;
            j = String(b).split(",");
            return 0 <= x(j, String(c));

          case "_le":
            return Number(b) <= Number(c);

          case "_lt":
            return Number(b) < Number(c);

          case "_re":
            var k;
            var l = a.ignore_case ? "i" : void 0;
            try {
                var m = String(c) + l, n = bk.get(m);
                n || (n = new RegExp(c, l), bk.set(m, n));
                k = n.test(b);
            } catch (i) {
                k = !1;
            }
            return k;

          case "_sw":
            return 0 == String(b).indexOf(String(c));

          case "_um":
            return ck(b, c);
        }
        return !1;
    }
    var fk = {}, gk = encodeURI, hk = encodeURIComponent, ik = Zb;
    var jk = function(a, b) {
        if (!a) return !1;
        var c = kd(od(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0;
            }
        }
        return !1;
    };
    var kk = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], 
        e = !0);
        return e ? d : null;
    };
    fk.kh = function() {
        var a = !1;
        return a;
    };
    function lk() {
        return Qb.gaGlobal = Qb.gaGlobal || {};
    }
    var mk = function() {
        var a = lk();
        a.hid = a.hid || z();
        return a.hid;
    }, nk = function(a, b) {
        var c = lk();
        if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
    var ok = window, pk = document, qk = function(a) {
        var b = ok._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === ok["ga-disable-" + a]) return !0;
        try {
            var c = ok.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
        } catch (d) {}
        for (var e = qd("AMP_TOKEN", String(pk.cookie), !0), f = 0; f < e.length; f++) if ("$OPT_OUT" == e[f]) return !0;
        return pk.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
    function rk(a) {
        delete a.eventModel[pb.rb];
        sk(a.eventModel);
    }
    var sk = function(a) {
        B(a, function(b) {
            "_" === b.charAt(0) && delete a[b];
        });
        var b = a[pb.la] || {};
        B(b, function(a) {
            "_" === a.charAt(0) && delete b[a];
        });
    };
    var tk = function(a, b, c) {
        Ji(b, c, a);
    }, uk = function(a, b, c) {
        Ji(b, c, a, !0);
    }, vk = function(a, b) {};
    function wk(a, b) {}
    var xk = {
        a: {}
    };
    xk.a.gtagha = [ "google" ], function() {
        !function(a) {
            xk.__gtagha = a;
            xk.__gtagha.b = "gtagha";
            xk.__gtagha.g = !0;
            xk.__gtagha.priorityOverride = 0;
        }(function(a) {
            ac(a.vtp_gtmOnSuccess);
        });
    }();
    xk.a.e = [ "google" ], function() {
        !function(a) {
            xk.__e = a;
            xk.__e.b = "e";
            xk.__e.g = !0;
            xk.__e.priorityOverride = 0;
        }(function(a) {
            return String(ed(a.vtp_gtmEventId, "event"));
        });
    }();
    xk.a.v = [ "google" ], function() {
        !function(a) {
            xk.__v = a;
            xk.__v.b = "v";
            xk.__v.g = !0;
            xk.__v.priorityOverride = 0;
        }(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = Pj(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue;
            $j(d, "v", a.vtp_gtmEventId);
            return d;
        });
    }();
    xk.a.rep = [ "google" ], function() {
        !function(a) {
            xk.__rep = a;
            xk.__rep.b = "rep";
            xk.__rep.g = !0;
            xk.__rep.priorityOverride = 0;
        }(function(a) {
            var b;
            switch (Xe(a.vtp_containerId).prefix) {
              case "AW":
                b = Oh;
                break;

              case "DC":
                b = Yh;
                break;

              case "GF":
                b = bi;
                break;

              case "HA":
                b = di;
                break;

              case "UA":
                b = qi;
                break;

              default:
                ac(a.vtp_gtmOnFailure);
                return;
            }
            ac(a.vtp_gtmOnSuccess);
            Ii(a.vtp_containerId, b, a.vtp_remoteConfig || {});
        });
    }();
    xk.a.cid = [ "google" ], function() {
        !function(a) {
            xk.__cid = a;
            xk.__cid.b = "cid";
            xk.__cid.g = !0;
            xk.__cid.priorityOverride = 0;
        }(function() {
            return Hc.B;
        });
    }();
    xk.a.gtagaw = [ "google" ], function() {
        !function(a) {
            xk.__gtagaw = a;
            xk.__gtagaw.b = "gtagaw";
            xk.__gtagaw.g = !0;
            xk.__gtagaw.priorityOverride = 0;
        }(function(a) {
            var b = "AW-" + String(a.vtp_conversionId);
            Ji(String(a.vtp_eventName), a.vtp_eventData || {}, a.vtp_conversionLabel ? b + "/" + String(a.vtp_conversionLabel) : b);
            ac(a.vtp_gtmOnSuccess);
        });
    }();
    xk.a.get = [ "google" ], function() {
        !function(a) {
            xk.__get = a;
            xk.__get.b = "get";
            xk.__get.g = !0;
            xk.__get.priorityOverride = 0;
        }(function(a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? uk : tk)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess();
        });
    }();
    xk.a.gtagfl = [], function() {
        !function(a) {
            xk.__gtagfl = a;
            xk.__gtagfl.b = "gtagfl";
            xk.__gtagfl.g = !0;
            xk.__gtagfl.priorityOverride = 0;
        }(function(a) {
            ac(a.vtp_gtmOnSuccess);
        });
    }();
    xk.a.gtaggf = [ "google" ], function() {
        !function(a) {
            xk.__gtaggf = a;
            xk.__gtaggf.b = "gtaggf";
            xk.__gtaggf.g = !0;
            xk.__gtaggf.priorityOverride = 0;
        }(function(a) {
            ac(a.vtp_gtmOnSuccess);
        });
    }();
    xk.a.gtagua = [ "google" ], function() {
        !function(a) {
            xk.__gtagua = a;
            xk.__gtagua.b = "gtagua";
            xk.__gtagua.g = !0;
            xk.__gtagua.priorityOverride = 0;
        }(function(a) {
            ac(a.vtp_gtmOnSuccess);
        });
    }();
    var yk = {};
    yk.macro = function(a) {
        if (sj.Sc.hasOwnProperty(a)) return sj.Sc[a];
    }, yk.onHtmlSuccess = sj.Je(!0), yk.onHtmlFailure = sj.Je(!1);
    yk.dataLayer = $c;
    yk.callback = function(a) {
        Tc.hasOwnProperty(a) && t(Tc[a]) && Tc[a]();
        delete Tc[a];
    };
    function zk() {
        Ic[Hc.B] = yk;
        K(Uc, xk.a);
        cb = cb || sj;
        db = ob;
    }
    function Ak() {
        hc.gtm_3pds = !0;
        hc.gtag_cs_api = !0;
        Ic = Qb.google_tag_manager = Qb.google_tag_manager || {};
        qh();
        if (Ic[Hc.B]) {
            var b = Ic.zones;
            b && b.unregisterChild(Hc.B);
        } else {
            for (var c = a.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) W.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++) Z.push(f[g]);
            for (var h = c.predicates || [], i = 0; i < h.length; i++) Y.push(h[i]);
            for (var j = c.rules || [], k = 0; k < j.length; k++) {
                for (var l = j[k], m = {}, n = 0; n < l.length; n++) m[l[n][0]] = Array.prototype.slice.call(l[n], 1);
                X.push(m);
            }
            _ = xk;
            ab = dk;
            zk();
            qj();
            Af = !1;
            Bf = 0;
            if ("interactive" == Rb.readyState && !Rb.createEventObject || "complete" == Rb.readyState) Df(); else {
                $b(Rb, "DOMContentLoaded", Df);
                $b(Rb, "readystatechange", Df);
                if (Rb.createEventObject && Rb.documentElement.doScroll) {
                    var o = !0;
                    try {
                        o = !Qb.frameElement;
                    } catch (p) {}
                    o && Ef();
                }
                $b(Qb, "load", Df);
            }
            Ti = !1;
            "complete" === Rb.readyState ? Vi() : $b(Qb, "load", Vi);
            a: {
                if (!bg) break a;
                Qb.setInterval(dg, 864e5);
            }
            Rc = new Date().getTime();
            yk.bootstrap = Rc;
        }
    }
    !function(a) {
        var b = !0;
        b = !1;
        b = !1;
        if (b) {
            a();
            return;
        }
        var c = function() {
            var a = Qb["google.tagmanager.debugui2.queue"];
            a || (a = [], Qb["google.tagmanager.debugui2.queue"] = a, Wb("https://www.googletagmanager.com/debug/bootstrap"));
            return a;
        }, d = "x" === kd(Qb.location, "query", !1, void 0, "gtm_debug");
        if (!d && Rb.referrer) {
            var e = od(Rb.referrer);
            d = "tagassistant.google.com" === ld(e, "host");
        }
        if (!d) {
            var f = rd("__TAG_ASSISTANT");
            d = f.length && f[0].length;
        }
        Qb.__TAG_ASSISTANT_API && (d = !0);
        if (d && Tb) {
            c().push({
                messageType: "CONTAINER_STARTING",
                data: {
                    scriptSource: Tb,
                    resume: function() {
                        a();
                    }
                }
            });
            return;
        }
        a();
    }(Ak);
}();
