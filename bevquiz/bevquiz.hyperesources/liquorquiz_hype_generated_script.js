//	HYPE.documents["_liquor_quiz"]
(function () {
	(function k() {
		function l(a, b, d) {
			var c = !1;
			null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(k), c = !0);
			return c
		}
		var h = "_liquor_quiz.hyperesources"
			, c = "_liquor_quiz"
			, e = "liquorquiz_hype_container";
		if (false == !1) try {
			for (var f = document.getElementsByTagName("script")
					, a = 0; a < f.length; a++) {
				var b = f[a].src
					, d = null != b ? b.indexOf("liquorquiz_hype_generated_script.js") : -1;
				if (-1 != d) {
					h = b.substr(0, d - 1);
					break
				}
			}
		}
		catch (n) {}
		if (false == !1 && (a = navigator.userAgent.match(/MSIE (\d+\.\d+)/), a = parseFloat(a && a[1]) || null, a = l("HYPE_576", "HYPE_dtl_576", !0 == (null != a && 10 > a || false == !0) ? "HYPE-576.full.min.js" : "HYPE-576.thin.min.js"), false == !0 && (a = a || l("HYPE_w_576", "HYPE_wdtl_576", "HYPE-576.waypoints.min.js")), a)) return;
		f = window.HYPE.documents;
		if (null != f[c]) {
			b = 1;
			a = c;
			do c = "" + a + "-" + b++; while (null != f[c]);
			d = document.getElementsByTagName("div");
			b = !1;
			for (a = 0; a < d.length; a++)
				if (d[a].id == e && null == d[a].getAttribute("HYP_dn")) {
					var b = 1
						, g = e;
					do e = "" + g + "-" + b++; while (null != document.getElementById(e));
					d[a].id = e;
					b = !0;
					break
				}
			if (!1 == b) return
		}
		b = [];
		b = [{
			name: "sweet_alert"
			, source: "function(hypeDocument, element, event) {\t\n\t_alert();\n}"
			, identifier: "1546"
		}, {
			name: "lert"
			, source: "function(hypeDocument, element, event) {\t\n\talert('wrong');\n}"
			, identifier: "1547"
		}];
		d = {};
		g = {};
		for (a = 0; a < b.length; a++) try {
			g[b[a].identifier] = b[a].name, d[b[a].name] = eval("(function(){return " + b[a].source + "})();")
		}
		catch (m) {
			window.console && window.console.log(m), d[b[a].name] = function () {}
		}
		a = new HYPE_576(c, e, {
			"10": {
				p: 1
				, n: "strawberryMintLemon_2x.png.png"
				, g: "1015"
				, t: "@2x"
			}
			, "2": {
				p: 1
				, n: "catalinaGlass_2x.png.png"
				, g: "18"
				, t: "@2x"
			}
			, "15": {
				p: 1
				, n: "peachSmash.png"
				, g: "1025"
				, t: "@1x"
			}
			, "-2": {
				n: "blank.gif"
			}
			, "3": {
				p: 1
				, n: "fluteGlass_2x.png.png"
				, g: "20"
				, t: "@2x"
			}
			, "11": {
				p: 1
				, n: "strawberryBellini_2x.png.png"
				, g: "1017"
				, t: "@2x"
			}
			, "4": {
				p: 1
				, n: "rocksGlass_2x.png.png"
				, g: "22"
				, t: "@2x"
			}
			, "5": {
				p: 1
				, n: "horiz_line_2x.png.png"
				, g: "100"
				, t: "@2x"
			}
			, "12": {
				p: 1
				, n: "dobelRita_2x.png.png"
				, g: "1019"
				, t: "@2x"
			}
			, "6": {
				p: 1
				, n: "spirits_bg_2x.png.png"
				, g: "930"
				, t: "@2x"
			}
			, "13": {
				p: 1
				, n: "ginAndGinger_2x.png.png"
				, g: "1021"
				, t: "@2x"
			}
			, "7": {
				p: 1
				, n: "bloodyMary_2x.png.png"
				, g: "1005"
				, t: "@2x"
			}
			, "-1": {
				n: "PIE.htc"
			}
			, "0": {
				p: 1
				, n: "spiritsGameBg1-i5_2x%202.jpg"
				, g: "12"
				, o: true
				, t: "@1x"
			}
			, "8": {
				p: 1
				, n: "southboundFlight.png"
				, g: "1013"
				, t: "@1x"
			}
			, "14": {
				p: 1
				, n: "pomegranite_2x.png.png"
				, g: "1023"
				, t: "@2x"
			}
			, "1": {
				p: 1
				, n: "aztecaGlass_2x.png.png"
				, g: "14"
				, t: "@2x"
			}
			, "9": {
				p: 1
				, n: "islandPunch_2x.png.png"
				, g: "1007"
				, t: "@2x"
			}
		}, h, ["<link href='https://fonts.googleapis.com/css?family=Fira+Sans+Condensed&subset=latin' rel='stylesheet' type='text/css'>"], d, [{
			n: "bloody_intro"
			, o: "1073"
			, X: [0]
		}, {
			n: "bloody_1"
			, o: "7"
			, X: [1]
		}, {
			n: "bloody_2"
			, o: "57"
			, X: [2]
		}, {
			n: "bloody_3"
			, o: "786"
			, X: [3]
		}, {
			n: "bloody_4"
			, o: "122"
			, X: [4]
		}, {
			n: "bloody_grats"
			, o: "998"
			, X: [5]
		}, {
			n: "island_intro"
			, o: "1085"
			, X: [6]
		}, {
			n: "island_1"
			, o: "157"
			, X: [7]
		}, {
			n: "island_2"
			, o: "192"
			, X: [8]
		}, {
			n: "island_3"
			, o: "207"
			, X: [9]
		}, {
			n: "island_4"
			, o: "222"
			, X: [10]
		}, {
			n: "island_grats"
			, o: "185"
			, X: [11]
		}, {
			n: "straw_bel_intro"
			, o: "1090"
			, X: [12]
		}, {
			n: "straw_bel_1"
			, o: "237"
			, X: [13]
		}, {
			n: "straw_bel_2"
			, o: "256"
			, X: [14]
		}, {
			n: "straw_bel_3"
			, o: "271"
			, X: [15]
		}, {
			n: "straw_bel_4"
			, o: "286"
			, X: [16]
		}, {
			n: "straw_bel_grats"
			, o: "942"
			, X: [17]
		}, {
			n: "southb_intro"
			, o: "1095"
			, X: [18]
		}, {
			n: "southb_1"
			, o: "308"
			, X: [19]
		}, {
			n: "southb_2"
			, o: "320"
			, X: [20]
		}, {
			n: "southb_3"
			, o: "335"
			, X: [21]
		}, {
			n: "southb_4"
			, o: "350"
			, X: [22]
		}, {
			n: "southb_grats"
			, o: "949"
			, X: [23]
		}, {
			n: "straw_mint_intro"
			, o: "1100"
			, X: [24]
		}, {
			n: "straw_mint_1"
			, o: "372"
			, X: [25]
		}, {
			n: "straw_mint_2"
			, o: "384"
			, X: [26]
		}, {
			n: "straw_mint_3"
			, o: "396"
			, X: [27]
		}, {
			n: "straw_mint_4"
			, o: "411"
			, X: [28]
		}, {
			n: "straw_mint_grats"
			, o: "956"
			, X: [29]
		}, {
			n: "dobel_intro"
			, o: "1105"
			, X: [30]
		}, {
			n: "dobel_1"
			, o: "433"
			, X: [31]
		}, {
			n: "dobel_2"
			, o: "481"
			, X: [32]
		}, {
			n: "dobel_3"
			, o: "493"
			, X: [33]
		}, {
			n: "dobel_4"
			, o: "508"
			, X: [34]
		}, {
			n: "dobel_grats"
			, o: "963"
			, X: [35]
		}, {
			n: "gin_gin_intro"
			, o: "1110"
			, X: [36]
		}, {
			n: "gin_gin_1"
			, o: "445"
			, X: [37]
		}, {
			n: "gin_gin_2"
			, o: "544"
			, X: [38]
		}, {
			n: "gin_gin_3"
			, o: "571"
			, X: [39]
		}, {
			n: "gin_gin_4"
			, o: "586"
			, X: [40]
		}, {
			n: "gin_gin_grats"
			, o: "970"
			, X: [41]
		}, {
			n: "pom_moj_intro"
			, o: "1115"
			, X: [42]
		}, {
			n: "pom_moj_1"
			, o: "457"
			, X: [43]
		}, {
			n: "pom_moj_2"
			, o: "601"
			, X: [44]
		}, {
			n: "pom_moj_3"
			, o: "613"
			, X: [45]
		}, {
			n: "pom_moj_4"
			, o: "628"
			, X: [46]
		}, {
			n: "pom_moj_grats"
			, o: "977"
			, X: [47]
		}, {
			n: "pom_moj_intro Copy"
			, o: "1120"
			, X: [48]
		}, {
			n: "peach_1"
			, o: "469"
			, X: [49]
		}, {
			n: "peach_2"
			, o: "643"
			, X: [50]
		}, {
			n: "peach_3"
			, o: "658"
			, X: [51]
		}, {
			n: "peach_4"
			, o: "673"
			, X: [52]
		}, {
			n: "peach_grats"
			, o: "984"
			, X: [53]
		}], [{
			A: {
				a: [{
					b: "kTimelineDefaultIdentifier"
					, p: 3
					, z: false
					, symbolOid: "1074"
				}]
			}
			, o: "1084"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, c: "#000000"
			, L: [{
				a: [{}]
				, B: "onTimeout"
			}]
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				"1536": {
					i: "1536"
					, n: "nextPage"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
				, kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2.15
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2.15
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 0.80000001192092896
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1901", "1902"]
			, n: "untitled scene"
			, "_": 0
			, v: {
				"1901": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Hangar One Bloody Mary</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 152
					, b: 68
				}
				, "1902": {
					G: "#FFFFFF"
					, aU: 8
					, c: 591
					, aV: 8
					, d: 95
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 28
					, Z: "break-word"
					, w: "Answer the following questions about the above cocktail correctly to earn points.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 16
					, F: "center"
					, b: 181
				}
			}
		}, {
			o: "9"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1913", "1907", "1906", "1911", "1903", "1904", "1905", "1908", "1909", "1914", "1910", "1912", "1915"]
			, n: "glass_question_"
			, "_": 1
			, v: {
				"1903": {
					c: 343
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: -2
					, b: 280
				}
				, "1913": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 651
					, q: "100% 100%"
					, d: 976
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 1
					, E: 0
					, a: -5
					, F: "center"
					, b: -16
				}
				, "1912": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 86
					, q: "100% 100%"
					, b: 636
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "1906": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 56
					, F: "center"
					, b: 104
				}
				, "1909": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 167
					, Z: "break-word"
					, b: 445
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "1911": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, v: "bold"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 140
					, F: "center"
					, b: 212
				}
				, "1905": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 78
					, q: "100% 100%"
					, b: 296
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
				, "1915": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 391
					, q: "100% 100%"
					, b: 636
					, j: "absolute"
					, dB: "img"
					, z: 6
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "1914": {
					c: 343
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 0
					, b: 615
				}
				, "1904": {
					c: 343
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 13
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 313
					, b: 280
				}
				, "1908": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 383
					, q: "100% 100%"
					, b: 303
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 7
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "1910": {
					c: 327
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 10
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 0
					, a: 311
					, b: 615
				}
				, "1907": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Hangar One Bloody Mary</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 14
					, aS: 8
					, aT: 8
					, a: 152
					, b: 52
				}
			}
		}, {
			o: "59"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1916", "1920", "1923", "1917", "1919", "1921", "1922", "1924", "1918"]
			, n: "untitled scene"
			, "_": 2
			, v: {
				"1920": {
					X: 2
					, w: "Is this cocktail shaken or stirred?"
					, aV: 8
					, x: "visible"
					, a: 58
					, Z: "break-word"
					, b: 257
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 33
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "1917": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 438
					, j: "absolute"
					, dB: "img"
					, z: 6
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1924": {
					G: "#FFFFFF"
					, aU: 8
					, c: 113
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 33
					, Z: "break-word"
					, w: "Shaken<br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 259
					, b: 744
				}
				, "1921": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 661
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1918": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: -3
					, q: "100% 100%"
					, b: 884
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1922": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D300"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D300"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 9
					, C: "#E4D300"
					, D: "#E4D300"
					, k: "div"
					, P: 0
					, a: 3
					, b: 669
				}
				, "1919": {
					X: 2
					, w: "Stirred"
					, aV: 8
					, x: "visible"
					, a: 259
					, Z: "break-word"
					, b: 519
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 33
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "1916": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Hangar One Bloody Mary</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 10
					, aS: 8
					, aT: 8
					, a: 152
					, b: 68
				}
				, "1923": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 8
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 3
					, b: 441
				}
			}
		}, {
			o: "800"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1937", "1931", "1932", "1935", "1929", "1925", "1940", "1938", "1934", "1939", "1933", "1926", "1928", "1936", "1930", "1927"]
			, n: "untitled scene"
			, "_": 3
			, v: {
				"1936": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 697
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1932": {
					G: "#FFFFFF"
					, aU: 8
					, c: 542
					, aV: 8
					, d: 42
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 33
					, Z: "break-word"
					, w: "How many ounces of Bloody Mary Mix is in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 51
					, F: "center"
					, b: 165
				}
				, "1926": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 33
					, Z: "break-word"
					, w: "3<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 320
					, b: 601
				}
				, "1939": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 553
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1935": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1931": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1925": {
					G: "#FFFFFF"
					, aU: 8
					, c: 49
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 33
					, Z: "break-word"
					, w: "1"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 315
					, b: 315
				}
				, "1929": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 2
					, b: 278
				}
				, "1938": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 405
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1934": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 33
					, Z: "break-word"
					, w: "2<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 320
					, b: 458
				}
				, "1930": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 33
					, Z: "break-word"
					, w: "4<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 320
					, b: 746
				}
				, "1928": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 13
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "1940": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: -4
					, b: 400
				}
				, "1937": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Hangar One Bloody Mary</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 17
					, aS: 8
					, aT: 8
					, a: 152
					, b: 68
				}
				, "1933": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 2
					, b: 563
				}
				, "1927": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 839
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
			}
		}, {
			o: "136"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1947", "1943", "1944", "1954", "1955", "1956", "1952", "1946", "1948", "1945", "1941", "1942", "1949", "1951", "1953", "1950"]
			, n: "untitled scene"
			, "_": 4
			, v: {
				"1956": {
					X: 2
					, w: "Stuffed Olive"
					, aV: 8
					, x: "visible"
					, a: 220
					, Z: "break-word"
					, b: 309
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 30
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "1946": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 412
				}
				, "1942": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 30
					, Z: "break-word"
					, w: "Lemon Wedge<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 208
					, b: 595
				}
				, "1952": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1949": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1951": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 13
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "1941": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 559
				}
				, "1945": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1955": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1948": {
					G: "#FFFFFF"
					, aU: 8
					, c: 189
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 30
					, Z: "break-word"
					, w: "Celery Stalk<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 220
					, b: 450
				}
				, "1950": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1944": {
					X: 2
					, w: "What garnish is not used in this cocktail?"
					, aV: 8
					, x: "visible"
					, a: 26
					, Z: "break-word"
					, b: 191
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 30
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "1954": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 274
				}
				, "1947": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Hangar One Bloody Mary</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 17
					, aS: 8
					, aT: 8
					, a: 152
					, b: 68
				}
				, "1943": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1953": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 30
					, Z: "break-word"
					, w: "Grape Tomato<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 208
					, b: 743
				}
			}
		}, {
			o: "1004"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1960", "1961", "1959", "1958", "1957"]
			, n: "Untitled Layout"
			, "_": 5
			, v: {
				"1961": {
					aV: 8
					, w: "Congratulations!"
					, x: "visible"
					, a: 44
					, Z: "break-word"
					, b: 6
					, y: "preserve"
					, j: "absolute"
					, z: 6
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 38
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "1959": {
					G: "#FFFFFF"
					, aU: 8
					, c: 582
					, d: 27
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 24
					, Y: 25
					, Z: "break-word"
					, w: "You just earned 14 points by answering 4 questions correctly."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 8
					, aS: 8
					, aT: 8
					, a: 21
					, F: "center"
					, b: 96
				}
				, "1957": {
					h: "1005"
					, p: "no-repeat"
					, x: "visible"
					, a: 132
					, q: "100% 100%"
					, b: 262
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 365
					, d: 544
					, r: "inline"
				}
				, "1960": {
					h: "930"
					, p: "no-repeat"
					, x: "visible"
					, a: -408
					, q: "100% 100%"
					, b: -66
					, j: "absolute"
					, dB: "img"
					, z: 1
					, k: "div"
					, c: 1492
					, d: 1026
					, r: "inline"
				}
				, "1958": {
					b: 180
					, z: 7
					, K: "Solid"
					, c: 207
					, L: "Solid"
					, d: 47
					, aS: 4
					, M: 1
					, bD: "none"
					, N: 1
					, aT: 4
					, dB: "button"
					, O: 1
					, g: "#757576"
					, aU: 4
					, P: 1
					, Q: 0
					, aV: 4
					, R: "#000000"
					, j: "absolute"
					, S: 1
					, aI: 1
					, k: "div"
					, T: 1
					, aJ: 1
					, aK: 1
					, aL: 1
					, A: "#A0A0A0"
					, Y: 50
					, B: "#A0A0A0"
					, Z: "break-word"
					, r: "inline"
					, C: "#A0A0A0"
					, D: "#A0A0A0"
					, t: 24
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, F: "center"
					, G: "#FFFFFF"
					, aP: "pointer"
					, w: "Continue Playing<br>"
					, x: "visible"
					, I: "Solid"
					, a: 211
					, y: "preserve"
					, J: "Solid"
				}
			}
		}, {
			o: "1089"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 0.80000000000000004
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1963", "1962"]
			, n: "untitled scene"
			, "_": 6
			, v: {
				"1963": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">The Islander</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 228
					, b: 68
				}
				, "1962": {
					G: "#FFFFFF"
					, aU: 8
					, c: 591
					, aV: 8
					, d: 95
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 28
					, Z: "break-word"
					, w: "Answer the following questions about the above cocktail correctly to earn points.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 16
					, F: "center"
					, b: 181
				}
			}
		}, {
			o: "168"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1970", "1973", "1972", "1968", "1965", "1974", "1967", "1976", "1964", "1969", "1971", "1975", "1966"]
			, n: "glass_question_"
			, "_": 7
			, v: {
				"1966": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 390
					, q: "100% 100%"
					, b: 636
					, j: "absolute"
					, dB: "img"
					, z: 6
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "1969": {
					c: 311
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: -1
					, b: 615
				}
				, "1971": {
					c: 327
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 10
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 0
					, a: 310
					, b: 615
				}
				, "1965": {
					c: 311
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: -3
					, b: 280
				}
				, "1975": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 85
					, q: "100% 100%"
					, b: 636
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "1974": {
					c: 325
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 13
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 312
					, b: 280
				}
				, "1970": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 651
					, q: "100% 100%"
					, d: 976
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 1
					, E: 0
					, a: -6
					, F: "center"
					, b: -16
				}
				, "1964": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 166
					, Z: "break-word"
					, b: 445
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "1968": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, v: "bold"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 139
					, F: "center"
					, b: 212
				}
				, "1973": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">The Islander</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 14
					, aS: 8
					, aT: 8
					, a: 227
					, b: 52
				}
				, "1967": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 77
					, q: "100% 100%"
					, b: 296
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
				, "1976": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 382
					, q: "100% 100%"
					, b: 303
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 7
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "1972": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 55
					, F: "center"
					, b: 104
				}
			}
		}, {
			o: "206"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1980", "1992", "1984", "1977", "1990", "1978", "1991", "1988", "1986", "1989", "1982", "1987", "1985", "1981", "1983", "1979"]
			, n: "untitled scene"
			, "_": 8
			, v: {
				"1989": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1985": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1979": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1981": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "1991": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1988": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 412
				}
				, "1984": {
					X: 1
					, w: "What two types of juice are used?"
					, aV: 8
					, x: "visible"
					, a: 106
					, Z: "break-word"
					, b: 192
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "1980": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">The Islander</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 228
					, b: 68
				}
				, "1978": {
					X: 1
					, w: "Orange and Pineapple"
					, aV: 8
					, x: "visible"
					, a: 185
					, Z: "break-word"
					, b: 311
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "1990": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1987": {
					G: "#FFFFFF"
					, aU: 8
					, c: 373
					, aV: 8
					, d: 44
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Cranberry and Pineapple<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 169
					, b: 603
				}
				, "1983": {
					G: "#FFFFFF"
					, aU: 8
					, c: 272
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Pineapple and Lime<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 196
					, b: 745
				}
				, "1977": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 268
				}
				, "1986": {
					G: "#FFFFFF"
					, aU: 8
					, c: 336
					, aV: 8
					, d: 44
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Orange and Cranberry<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 177
					, b: 450
				}
				, "1982": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 559
				}
				, "1992": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
			}
		}, {
			o: "221"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["1999", "1996", "2007", "1998", "2001", "2003", "1994", "2008", "2004", "2006", "2002", "1993", "1995", "1997", "2000", "2005"]
			, n: "untitled scene"
			, "_": 9
			, v: {
				"1999": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">The Islander</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 228
					, b: 68
				}
				, "1995": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2002": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 559
				}
				, "2006": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1998": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 271
				}
				, "1994": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2001": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2005": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "1997": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "1993": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "2 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 272
					, b: 602
				}
				, "2000": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "2.5 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 273
					, b: 740
				}
				, "2004": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "1.5 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 265
					, b: 454
				}
				, "2008": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 412
				}
				, "1996": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2003": {
					X: 1
					, w: "1 OZ."
					, aV: 8
					, x: "visible"
					, a: 274
					, Z: "break-word"
					, b: 314
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2007": {
					G: "#FFFFFF"
					, aU: 8
					, c: 651
					, aV: 8
					, d: 54
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "How many ounces of each juice are used?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 26
					, b: 185
				}
			}
		}, {
			o: "236"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2012", "2014", "2022", "2023", "2019", "2013", "2017", "2009", "2018", "2015", "2016", "2020", "2010", "2011", "2021", "2024"]
			, n: "untitled scene"
			, "_": 10
			, v: {
				"2016": {
					c: 638
					, d: 135
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 1
					, b: 545
				}
				, "2012": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">The Islander</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 228
					, b: 68
				}
				, "2022": {
					G: "#FFFFFF"
					, aU: 8
					, c: 605
					, aV: 8
					, d: 51
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "What type of garnish is used in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 9
					, b: 186
				}
				, "2019": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2015": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 17
					, q: "100% 100%"
					, b: 537
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2011": {
					c: 638
					, d: 134
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 3
					, b: 689
				}
				, "2009": {
					c: 638
					, d: 134
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 1
					, b: 411
				}
				, "2021": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Lemon Wedge<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 229
					, b: 728
				}
				, "2018": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Cherry<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 266
					, b: 446
				}
				, "2020": {
					G: "#FFFFFF"
					, aU: 8
					, c: 265
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Orange Wedge<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 220
					, b: 586
				}
				, "2010": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 17
					, q: "100% 100%"
					, b: 681
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2014": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2024": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 35
					, q: "100% 100%"
					, b: 823
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2017": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2013": {
					X: 1
					, w: "Lime Wedge"
					, aV: 8
					, x: "visible"
					, a: 231
					, Z: "break-word"
					, b: 312
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2023": {
					c: 638
					, d: 134
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 1
					, b: 274
				}
			}
		}, {
			o: "191"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2025", "2027", "2026", "2028", "2029"]
			, n: "Untitled Layout"
			, "_": 11
			, v: {
				"2029": {
					b: 180
					, z: 4
					, K: "Solid"
					, c: 207
					, L: "Solid"
					, d: 47
					, aS: 4
					, M: 1
					, bD: "none"
					, N: 1
					, aT: 4
					, dB: "button"
					, O: 1
					, g: "#757576"
					, aU: 4
					, P: 1
					, Q: 0
					, aV: 4
					, R: "#000000"
					, j: "absolute"
					, S: 1
					, aI: 1
					, k: "div"
					, T: 1
					, aJ: 1
					, aK: 1
					, aL: 1
					, A: "#A0A0A0"
					, Y: 50
					, B: "#A0A0A0"
					, Z: "break-word"
					, r: "inline"
					, C: "#A0A0A0"
					, D: "#A0A0A0"
					, t: 24
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, F: "center"
					, G: "#FFFFFF"
					, aP: "pointer"
					, w: "Continue Playing<br>"
					, x: "visible"
					, I: "Solid"
					, a: 211
					, y: "preserve"
					, J: "Solid"
				}
				, "2027": {
					aV: 8
					, w: "Congratulations!"
					, x: "visible"
					, a: 44
					, Z: "break-word"
					, b: 6
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 38
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2025": {
					h: "930"
					, p: "no-repeat"
					, x: "visible"
					, a: -376
					, q: "100% 100%"
					, b: -66
					, j: "absolute"
					, dB: "img"
					, z: 1
					, k: "div"
					, c: 1492
					, d: 1026
					, r: "inline"
				}
				, "2028": {
					h: "1007"
					, p: "no-repeat"
					, x: "visible"
					, a: 104
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 2
					, k: "div"
					, c: 418
					, d: 623
					, r: "inline"
				}
				, "2026": {
					G: "#FFFFFF"
					, aU: 8
					, c: 582
					, d: 27
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 24
					, Y: 25
					, Z: "break-word"
					, w: "You just earned 14 points by answering 4 questions correctly."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 21
					, F: "center"
					, b: 96
				}
			}
		}, {
			o: "1094"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 0.80000000000000004
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2030", "2031"]
			, n: "untitled scene"
			, "_": 12
			, v: {
				"2031": {
					G: "#FFFFFF"
					, aU: 8
					, c: 591
					, aV: 8
					, d: 95
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 28
					, Z: "break-word"
					, w: "Answer the following questions about the above cocktail correctly to earn points.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 16
					, F: "center"
					, b: 181
				}
				, "2030": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Bellini</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 202
					, b: 69
				}
			}
		}, {
			o: "248"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2040", "2037", "2042", "2035", "2036", "2039", "2043", "2033", "2032", "2034", "2044", "2041", "2038"]
			, n: "glass_question_"
			, "_": 13
			, v: {
				"2032": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 170
					, Z: "break-word"
					, b: 451
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "2036": {
					c: 327
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 9
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 0
					, a: -11
					, b: 294
				}
				, "2039": {
					c: 325
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 316
					, b: 286
				}
				, "2041": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 89
					, q: "100% 100%"
					, b: 642
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "2035": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, v: "bold"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 143
					, F: "center"
					, b: 218
				}
				, "2038": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 394
					, q: "100% 100%"
					, b: 642
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "2034": {
					c: 311
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 10
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 3
					, b: 621
				}
				, "2040": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 653
					, q: "100% 100%"
					, d: 980
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 1
					, E: 0
					, a: -3
					, F: "center"
					, b: -10
				}
				, "2044": {
					c: 327
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 316
					, b: 621
				}
				, "2037": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Bellini</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 205
					, b: 59
				}
				, "2033": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 386
					, q: "100% 100%"
					, b: 309
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 6
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "2043": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 81
					, q: "100% 100%"
					, b: 302
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
				, "2042": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 59
					, F: "center"
					, b: 110
				}
			}
		}, {
			o: "270"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2057", "2059", "2058", "2048", "2052", "2053", "2056", "2055", "2047", "2051", "2050", "2049", "2060", "2045", "2054", "2046"]
			, n: "untitled scene"
			, "_": 14
			, v: {
				"2059": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2055": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 412
				}
				, "2051": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2045": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2049": {
					G: "#FFFFFF"
					, aU: 8
					, c: 228
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Orange Wedge<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 216
					, b: 598
				}
				, "2058": {
					G: "#FFFFFF"
					, aU: 8
					, c: 490
					, aV: 8
					, d: 17
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "What type of garnish is used?<br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 118
					, b: 190
				}
				, "2054": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "None<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 272
					, b: 736
				}
				, "2050": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 555
				}
				, "2048": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 271
				}
				, "2060": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: -2
					, b: 693
				}
				, "2057": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Bellini</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 202
					, b: 69
				}
				, "2047": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Cherry<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 260
					, b: 455
				}
				, "2053": {
					X: 1
					, w: "Strawberry"
					, aV: 8
					, x: "visible"
					, a: 244
					, Z: "break-word"
					, b: 314
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2056": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2052": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2046": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
			}
		}, {
			o: "285"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2062", "2065", "2075", "2064", "2066", "2072", "2071", "2076", "2063", "2074", "2070", "2068", "2067", "2069", "2061", "2073"]
			, n: "untitled scene"
			, "_": 15
			, v: {
				"2069": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 2
					, b: 701
				}
				, "2071": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2061": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "197 ml<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 280
					, b: 743
				}
				, "2065": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2075": {
					X: 1
					, w: "What size is the Corbel Brut bottle?"
					, aV: 8
					, x: "visible"
					, a: 75
					, Z: "break-word"
					, b: 188
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2068": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "187 ml<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 280
					, b: 595
				}
				, "2070": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 557
				}
				, "2064": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2074": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2067": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2063": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "177 ml<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 276
					, b: 448
				}
				, "2073": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2076": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 418
				}
				, "2072": {
					X: 1
					, w: "157 ml"
					, aV: 8
					, x: "visible"
					, a: 276
					, Z: "break-word"
					, b: 307
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2062": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Bellini</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 202
					, b: 69
				}
				, "2066": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 277
				}
			}
		}, {
			o: "300"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2091", "2085", "2087", "2090", "2079", "2080", "2088", "2083", "2078", "2081", "2077", "2082", "2092", "2086", "2089", "2084"]
			, n: "untitled scene"
			, "_": 16
			, v: {
				"2085": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2081": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2079": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2091": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 30
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Bellini</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 202
					, b: 69
				}
				, "2088": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2084": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2080": {
					X: 1
					, w: "0.5 OZ."
					, aV: 8
					, x: "visible"
					, a: 258
					, Z: "break-word"
					, b: 313
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2078": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "0.75 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 258
					, b: 454
				}
				, "2090": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 271
				}
				, "2087": {
					G: "#FFFFFF"
					, aU: 8
					, c: 510
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "How many ounces of Strawberry puree are use in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 56
					, F: "center"
					, b: 167
				}
				, "2083": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 412
				}
				, "2077": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 559
				}
				, "2086": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "2082": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "1 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 266
					, b: 599
				}
				, "2092": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2089": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "2 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 266
					, b: 747
				}
			}
		}, {
			o: "948"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2095", "2094", "2093", "2096", "2097"]
			, n: "Untitled Layout"
			, "_": 17
			, v: {
				"2097": {
					h: "1017"
					, p: "no-repeat"
					, x: "visible"
					, a: 177
					, q: "100% 100%"
					, b: 326
					, j: "absolute"
					, dB: "img"
					, z: 6
					, k: "div"
					, c: 297
					, d: 443
					, r: "inline"
				}
				, "2095": {
					h: "930"
					, p: "no-repeat"
					, x: "visible"
					, a: -392
					, q: "100% 100%"
					, b: -66
					, j: "absolute"
					, dB: "img"
					, z: 1
					, k: "div"
					, c: 1492
					, d: 1026
					, r: "inline"
				}
				, "2093": {
					G: "#FFFFFF"
					, aU: 8
					, c: 582
					, d: 27
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 24
					, Y: 25
					, Z: "break-word"
					, w: "You just earned 14 points by answering 4 questions correctly."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 9
					, aS: 8
					, aT: 8
					, a: 21
					, F: "center"
					, b: 96
				}
				, "2096": {
					b: 180
					, z: 8
					, K: "Solid"
					, c: 207
					, L: "Solid"
					, d: 47
					, aS: 4
					, M: 1
					, bD: "none"
					, N: 1
					, aT: 4
					, dB: "button"
					, O: 1
					, g: "#757576"
					, aU: 4
					, P: 1
					, Q: 0
					, aV: 4
					, R: "#000000"
					, j: "absolute"
					, S: 1
					, aI: 1
					, k: "div"
					, T: 1
					, aJ: 1
					, aK: 1
					, aL: 1
					, A: "#A0A0A0"
					, Y: 50
					, B: "#A0A0A0"
					, Z: "break-word"
					, r: "inline"
					, C: "#A0A0A0"
					, D: "#A0A0A0"
					, t: 24
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, F: "center"
					, G: "#FFFFFF"
					, aP: "pointer"
					, w: "Continue Playing<br>"
					, x: "visible"
					, I: "Solid"
					, a: 211
					, y: "preserve"
					, J: "Solid"
				}
				, "2094": {
					aV: 8
					, w: "Congratulations!"
					, x: "visible"
					, a: 44
					, Z: "break-word"
					, b: 6
					, y: "preserve"
					, j: "absolute"
					, z: 7
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 38
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
			}
		}, {
			o: "1099"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 0.80000000000000004
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2098", "2099"]
			, n: "untitled scene"
			, "_": 18
			, v: {
				"2098": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Southbound Flight</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 198
					, b: 70
				}
				, "2099": {
					G: "#FFFFFF"
					, aU: 8
					, c: 591
					, aV: 8
					, d: 95
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 28
					, Z: "break-word"
					, w: "Answer the following questions about the above cocktail correctly to earn points.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 16
					, F: "center"
					, b: 181
				}
			}
		}, {
			o: "319"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2111", "2109", "2108", "2107", "2105", "2110", "2112", "2102", "2100", "2103", "2101", "2106", "2104"]
			, n: "glass_question_"
			, "_": 19
			, v: {
				"2112": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 78
					, q: "100% 100%"
					, b: 300
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
				, "2109": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Southbound Flight</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 198
					, b: 58
				}
				, "2111": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 656
					, q: "100% 100%"
					, d: 984
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 1
					, E: 0
					, a: -8
					, F: "center"
					, b: -12
				}
				, "2101": {
					c: 327
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 10
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 310
					, b: 619
				}
				, "2105": {
					c: 325
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 315
					, b: 283
				}
				, "2108": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 56
					, F: "center"
					, b: 108
				}
				, "2110": {
					c: 311
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 0
					, b: 286
				}
				, "2100": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 167
					, Z: "break-word"
					, b: 449
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "2104": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 391
					, q: "100% 100%"
					, b: 640
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "2107": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, v: "bold"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 140
					, F: "center"
					, b: 216
				}
				, "2103": {
					c: 310
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 9
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 619
				}
				, "2106": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 86
					, q: "100% 100%"
					, b: 640
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "2102": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 383
					, q: "100% 100%"
					, b: 307
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 6
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
			}
		}, {
			o: "334"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2121", "2124", "2113", "2126", "2125", "2115", "2114", "2116", "2118", "2120", "2128", "2127", "2117", "2123", "2122", "2119"]
			, n: "untitled scene"
			, "_": 20
			, v: {
				"2119": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2115": {
					aU: 8
					, G: "#FFFFFF"
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "1800 Reposado"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, E: 0
					, aT: 8
					, a: 221
					, b: 313
				}
				, "2121": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Southbound Flight</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 198
					, b: 70
				}
				, "2125": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2128": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 559
				}
				, "2124": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2120": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2114": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2118": {
					G: "#FFFFFF"
					, aU: 8
					, c: 243
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Absolut Citron<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, E: 0
					, aT: 8
					, a: 215
					, b: 456
				}
				, "2127": {
					G: "#FFFFFF"
					, aU: 8
					, c: 434
					, aV: 8
					, d: 51
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Captain Morgan Spiced Rum<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, E: 0
					, aT: 8
					, a: 123
					, b: 597
				}
				, "2123": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "2113": {
					G: "#FFFFFF"
					, aU: 8
					, c: 525
					, d: 35
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 31
					, Z: "break-word"
					, w: "What brand of liquor is used to make this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, E: 0
					, aT: 8
					, a: 55
					, F: "center"
					, b: 170
				}
				, "2117": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2126": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 4
					, b: 268
				}
				, "2122": {
					G: "#FFFFFF"
					, aU: 8
					, c: 225
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Hendrick\u2019s Gin<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, E: 0
					, aT: 8
					, a: 224
					, b: 746
				}
				, "2116": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 412
				}
			}
		}, {
			o: "349"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2140", "2138", "2142", "2131", "2144", "2137", "2132", "2143", "2130", "2135", "2141", "2134", "2139", "2129", "2133", "2136"]
			, n: "untitled scene"
			, "_": 21
			, v: {
				"2139": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2135": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 552
				}
				, "2129": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "2131": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 271
				}
				, "2141": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2138": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2140": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Southbound Flight</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 198
					, b: 70
				}
				, "2130": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "2<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 313
					, b: 452
				}
				, "2134": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "3<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 313
					, b: 597
				}
				, "2144": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2137": {
					G: "#FFFFFF"
					, aU: 8
					, c: 58
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "1"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 308
					, b: 311
				}
				, "2133": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "4<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 313
					, b: 747
				}
				, "2143": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 2
					, b: 411
				}
				, "2136": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2132": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2142": {
					G: "#FFFFFF"
					, aU: 8
					, c: 498
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "How many lime wedges are used in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 68
					, F: "center"
					, b: 177
				}
			}
		}, {
			o: "364"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2145", "2151", "2155", "2150", "2159", "2160", "2152", "2158", "2147", "2149", "2153", "2148", "2156", "2146", "2157", "2154"]
			, n: "untitled scene"
			, "_": 22
			, v: {
				"2151": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2145": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Southbound Flight</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 198
					, b: 70
				}
				, "2149": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2158": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 412
				}
				, "2154": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2148": {
					G: "#FFFFFF"
					, aU: 8
					, c: 300
					, aV: 8
					, d: 29
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Cucumber Slice<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 215
					, b: 599
				}
				, "2150": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 271
				}
				, "2160": {
					X: 1
					, w: "Lime Wheel"
					, aV: 8
					, x: "visible"
					, a: 242
					, Z: "break-word"
					, b: 317
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2157": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Lemon Wedge<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 235
					, b: 751
				}
				, "2153": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 555
				}
				, "2147": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Mint Leaves<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 237
					, b: 458
				}
				, "2156": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2152": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2146": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 699
				}
				, "2159": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2155": {
					X: 1
					, w: "What garnish is used in this cocktail?"
					, aV: 8
					, x: "visible"
					, a: 71
					, Z: "break-word"
					, b: 194
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
			}
		}, {
			o: "955"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2164", "2161", "2165", "2163", "2162"]
			, n: "Untitled Layout"
			, "_": 23
			, v: {
				"2164": {
					h: "930"
					, p: "no-repeat"
					, x: "visible"
					, a: -426
					, q: "100% 100%"
					, b: -66
					, j: "absolute"
					, dB: "img"
					, z: 1
					, k: "div"
					, c: 1492
					, d: 1026
					, r: "inline"
				}
				, "2162": {
					h: "1013"
					, p: "no-repeat"
					, x: "visible"
					, a: 142
					, q: "100% 100%"
					, b: 269
					, j: "absolute"
					, dB: "img"
					, z: 2
					, k: "div"
					, c: 356
					, d: 531
					, r: "inline"
				}
				, "2165": {
					G: "#FFFFFF"
					, aU: 8
					, c: 582
					, d: 27
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 24
					, Y: 25
					, Z: "break-word"
					, w: "You just earned 14 points by answering 4 questions correctly."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 21
					, F: "center"
					, b: 96
				}
				, "2163": {
					b: 180
					, z: 4
					, K: "Solid"
					, c: 207
					, L: "Solid"
					, d: 47
					, aS: 4
					, M: 1
					, bD: "none"
					, N: 1
					, aT: 4
					, dB: "button"
					, O: 1
					, g: "#757576"
					, aU: 4
					, P: 1
					, Q: 0
					, aV: 4
					, R: "#000000"
					, j: "absolute"
					, S: 1
					, aI: 1
					, k: "div"
					, T: 1
					, aJ: 1
					, aK: 1
					, aL: 1
					, A: "#A0A0A0"
					, Y: 50
					, B: "#A0A0A0"
					, Z: "break-word"
					, r: "inline"
					, C: "#A0A0A0"
					, D: "#A0A0A0"
					, t: 24
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, F: "center"
					, G: "#FFFFFF"
					, aP: "pointer"
					, w: "Continue Playing<br>"
					, x: "visible"
					, I: "Solid"
					, a: 211
					, y: "preserve"
					, J: "Solid"
				}
				, "2161": {
					aV: 8
					, w: "Congratulations!"
					, x: "visible"
					, a: 44
					, Z: "break-word"
					, b: 6
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 38
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
			}
		}, {
			o: "1104"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 0.80000000000000004
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2166", "2167"]
			, n: "untitled scene"
			, "_": 24
			, v: {
				"2167": {
					G: "#FFFFFF"
					, aU: 8
					, c: 591
					, aV: 8
					, d: 95
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 28
					, Z: "break-word"
					, w: "Answer the following questions about the above cocktail correctly to earn points.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 16
					, F: "center"
					, b: 181
				}
				, "2166": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Mint Lemonade</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 139
					, b: 70
				}
			}
		}, {
			o: "383"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2169", "2175", "2172", "2177", "2171", "2176", "2168", "2178", "2174", "2170", "2173", "2179", "2180"]
			, n: "glass_question_"
			, "_": 25
			, v: {
				"2178": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 383
					, q: "100% 100%"
					, b: 313
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 6
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "2174": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 167
					, Z: "break-word"
					, b: 455
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "2168": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 78
					, q: "100% 100%"
					, b: 306
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
				, "2170": {
					c: 327
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: -16
					, b: 627
				}
				, "2180": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 391
					, q: "100% 100%"
					, b: 646
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "2177": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, v: "bold"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 140
					, F: "center"
					, b: 222
				}
				, "2173": {
					c: 327
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 9
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 0
					, a: 311
					, b: 627
				}
				, "2176": {
					c: 325
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 313
					, b: 290
				}
				, "2172": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 56
					, F: "center"
					, b: 114
				}
				, "2179": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 86
					, q: "100% 100%"
					, b: 646
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "2175": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Mint Lemonade</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 139
					, b: 64
				}
				, "2171": {
					c: 311
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 10
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 0
					, b: 293
				}
				, "2169": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 644
					, q: "100% 100%"
					, d: 966
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 1
					, E: 0
					, a: -2
					, F: "center"
					, b: -6
				}
			}
		}, {
			o: "395"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2182", "2188", "2181", "2187", "2183", "2185", "2186", "2189", "2184"]
			, n: "untitled scene"
			, "_": 26
			, v: {
				"2187": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 438
					, j: "absolute"
					, dB: "img"
					, z: 6
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2184": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: -3
					, q: "100% 100%"
					, b: 884
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2181": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 3
					, b: 441
				}
				, "2188": {
					X: 1
					, w: "Is this cocktail shaken or stirred?"
					, aV: 8
					, x: "visible"
					, a: 94
					, Z: "break-word"
					, b: 275
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 32
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2185": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 661
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2182": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Mint Lemonade</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 139
					, b: 70
				}
				, "2189": {
					G: "#FFFFFF"
					, aU: 8
					, c: 103
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 32
					, Z: "break-word"
					, w: "Shaken<br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 281
					, b: 752
				}
				, "2186": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D300"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D300"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#E4D300"
					, D: "#E4D300"
					, k: "div"
					, P: 0
					, a: 1
					, b: 670
				}
				, "2183": {
					X: 1
					, w: "Stirred"
					, aV: 8
					, x: "visible"
					, a: 275
					, Z: "break-word"
					, b: 528
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 32
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
			}
		}, {
			o: "410"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2192", "2190", "2194", "2193", "2200", "2202", "2198", "2204", "2195", "2201", "2197", "2191", "2199", "2205", "2196", "2203"]
			, n: "untitled scene"
			, "_": 27
			, v: {
				"2198": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2194": {
					G: "#FFFFFF"
					, aU: 8
					, c: 488
					, aV: 8
					, d: 30
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "What brand of liquor is used to make this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 78
					, F: "center"
					, b: 177
				}
				, "2190": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2201": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2205": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "2197": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 559
				}
				, "2193": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 271
				}
				, "2200": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2204": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 412
				}
				, "2196": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Stolichnaya<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 257
					, b: 737
				}
				, "2192": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Mint Lemonade</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 139
					, b: 70
				}
				, "2203": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2199": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2195": {
					G: "#FFFFFF"
					, aU: 8
					, c: 243
					, aV: 8
					, d: 63
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Patron Citronge<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 222
					, b: 454
				}
				, "2191": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Smirnoff<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 264
					, b: 593
				}
				, "2202": {
					X: 1
					, w: "Absolut Citron"
					, aV: 8
					, x: "visible"
					, a: 231
					, Z: "break-word"
					, b: 313
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
			}
		}, {
			o: "425"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2215", "2210", "2213", "2211", "2217", "2216", "2212", "2221", "2207", "2219", "2214", "2218", "2206", "2208", "2209", "2220"]
			, n: "untitled scene"
			, "_": 28
			, v: {
				"2211": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 1
					, b: 267
				}
				, "2209": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "4<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 313
					, b: 742
				}
				, "2221": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 1
					, b: 408
				}
				, "2218": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "3<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 313
					, b: 601
				}
				, "2214": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 1
					, b: 555
				}
				, "2210": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2208": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 1
					, b: 699
				}
				, "2220": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2217": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2213": {
					G: "#FFFFFF"
					, aU: 8
					, c: 474
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "How many garnishes are used in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 68
					, F: "center"
					, b: 177
				}
				, "2207": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "2<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 313
					, b: 454
				}
				, "2216": {
					G: "#FFFFFF"
					, aU: 8
					, c: 59
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "1"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 310
					, b: 309
				}
				, "2206": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2212": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2219": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2215": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Strawberry Mint Lemonade</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 139
					, b: 70
				}
			}
		}, {
			o: "962"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 0.80000000000000004
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2223", "2226", "2222", "2225", "2224"]
			, n: "Untitled Layout"
			, "_": 29
			, v: {
				"2226": {
					aV: 8
					, w: "Congratulations!"
					, x: "visible"
					, a: 44
					, Z: "break-word"
					, b: 6
					, y: "preserve"
					, j: "absolute"
					, z: 6
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 38
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2224": {
					b: 180
					, z: 7
					, K: "Solid"
					, c: 207
					, L: "Solid"
					, d: 47
					, aS: 4
					, M: 1
					, bD: "none"
					, N: 1
					, aT: 4
					, dB: "button"
					, O: 1
					, g: "#757576"
					, aU: 4
					, P: 1
					, Q: 0
					, aV: 4
					, R: "#000000"
					, j: "absolute"
					, S: 1
					, aI: 1
					, k: "div"
					, T: 1
					, aJ: 1
					, aK: 1
					, aL: 1
					, A: "#A0A0A0"
					, Y: 50
					, B: "#A0A0A0"
					, Z: "break-word"
					, r: "inline"
					, C: "#A0A0A0"
					, D: "#A0A0A0"
					, t: 24
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, F: "center"
					, G: "#FFFFFF"
					, aP: "pointer"
					, w: "Continue Playing<br>"
					, x: "visible"
					, I: "Solid"
					, a: 211
					, y: "preserve"
					, J: "Solid"
				}
				, "2222": {
					h: "1015"
					, p: "no-repeat"
					, x: "visible"
					, a: 80
					, q: "100% 100%"
					, b: 82
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, k: "div"
					, z: 5
					, d: 714
					, c: 479
					, r: "inline"
					, aP: "pointer"
				}
				, "2225": {
					G: "#FFFFFF"
					, aU: 8
					, c: 582
					, d: 27
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 24
					, Y: 25
					, Z: "break-word"
					, w: "You just earned 14 points by answering 4 questions correctly."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 8
					, aS: 8
					, aT: 8
					, a: 21
					, F: "center"
					, b: 96
				}
				, "2223": {
					h: "930"
					, p: "no-repeat"
					, x: "visible"
					, a: -376
					, q: "100% 100%"
					, b: -66
					, j: "absolute"
					, dB: "img"
					, z: 1
					, k: "div"
					, c: 1492
					, d: 1026
					, r: "inline"
				}
			}
		}, {
			o: "1109"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 0.80000000000000004
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2227", "2228"]
			, n: "untitled scene"
			, "_": 30
			, v: {
				"2228": {
					G: "#FFFFFF"
					, aU: 8
					, c: 591
					, aV: 8
					, d: 95
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 28
					, Z: "break-word"
					, w: "Answer the following questions about the above cocktail correctly to earn points.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 16
					, F: "center"
					, b: 181
				}
				, "2227": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Dobel Rita</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 231
					, b: 69
				}
			}
		}, {
			o: "444"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2240", "2231", "2230", "2236", "2234", "2238", "2233", "2237", "2232", "2241", "2235", "2229", "2239"]
			, n: "glass_question_"
			, "_": 31
			, v: {
				"2241": {
					c: 327
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: -16
					, b: 627
				}
				, "2238": {
					c: 327
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 9
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 0
					, a: 309
					, b: 297
				}
				, "2240": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 644
					, q: "100% 100%"
					, d: 966
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 1
					, E: 0
					, a: -2
					, F: "center"
					, b: -6
				}
				, "2230": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 56
					, F: "center"
					, b: 114
				}
				, "2234": {
					c: 311
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 10
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 0
					, b: 293
				}
				, "2237": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 383
					, q: "100% 100%"
					, b: 313
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 6
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "2233": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 78
					, q: "100% 100%"
					, b: 306
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
				, "2236": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, v: "bold"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 140
					, F: "center"
					, b: 222
				}
				, "2232": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 167
					, Z: "break-word"
					, b: 455
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "2239": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 391
					, q: "100% 100%"
					, b: 646
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "2229": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 86
					, q: "100% 100%"
					, b: 646
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "2231": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Dobel Rita</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 231
					, b: 63
				}
				, "2235": {
					c: 325
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 311
					, b: 627
				}
			}
		}, {
			o: "492"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2246", "2249", "2244", "2243", "2250", "2248", "2242", "2245", "2247"]
			, n: "untitled scene"
			, "_": 32
			, v: {
				"2245": {
					G: "#FFFFFF"
					, aU: 8
					, c: 103
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Yes<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 292
					, b: 748
				}
				, "2242": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D300"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D300"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#E4D300"
					, D: "#E4D300"
					, k: "div"
					, P: 0
					, a: 3
					, b: 669
				}
				, "2249": {
					X: 1
					, w: "Is a lime used in this cocktail?"
					, aV: 8
					, x: "visible"
					, a: 114
					, Z: "break-word"
					, b: 275
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2246": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Dobel Rita</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 249
					, b: 73
				}
				, "2243": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 438
					, j: "absolute"
					, dB: "img"
					, z: 6
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2250": {
					X: 1
					, w: "No"
					, aV: 8
					, x: "visible"
					, a: 293
					, Z: "break-word"
					, b: 528
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2247": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: -3
					, q: "100% 100%"
					, b: 884
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2244": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 3
					, b: 441
				}
				, "2248": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 661
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
			}
		}, {
			o: "507"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2264", "2263", "2265", "2266", "2260", "2255", "2254", "2259", "2252", "2257", "2253", "2251", "2261", "2262", "2258", "2256"]
			, n: "untitled scene"
			, "_": 33
			, v: {
				"2258": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "4<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 320
					, b: 743
				}
				, "2260": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2254": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 403
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2264": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Dobel Rita</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 249
					, b: 73
				}
				, "2257": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2253": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 555
				}
				, "2263": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2266": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 269
				}
				, "2262": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 701
				}
				, "2252": {
					G: "#FFFFFF"
					, aU: 8
					, c: 62
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "2<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 320
					, b: 454
				}
				, "2256": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2259": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 2
					, b: 411
				}
				, "2255": {
					G: "#FFFFFF"
					, aU: 8
					, c: 37
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "1"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 320
					, b: 315
				}
				, "2251": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "3<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 320
					, b: 596
				}
				, "2261": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2265": {
					G: "#FFFFFF"
					, aU: 8
					, c: 432
					, aV: 8
					, d: 49
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "How many ounces of Finest Call Sour is in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 106
					, F: "center"
					, b: 168
				}
			}
		}, {
			o: "522"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2282", "2268", "2274", "2269", "2270", "2277", "2271", "2279", "2281", "2273", "2278", "2275", "2276", "2272", "2280", "2267"]
			, n: "untitled scene"
			, "_": 34
			, v: {
				"2270": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2274": {
					X: 1
					, w: "What garnish is used in this cocktail?"
					, aV: 8
					, x: "visible"
					, a: 64
					, Z: "break-word"
					, b: 192
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2280": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Ming Sprig<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 249
					, b: 742
				}
				, "2277": {
					X: 1
					, w: "Orange Wedge"
					, aV: 8
					, x: "visible"
					, a: 216
					, Z: "break-word"
					, b: 315
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2273": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2267": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2276": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2272": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 2
					, b: 699
				}
				, "2282": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Dobel Rita</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 249
					, b: 73
				}
				, "2279": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 410
				}
				, "2275": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Lemon Wheel<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 221
					, b: 597
				}
				, "2271": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2269": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 269
				}
				, "2281": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Celery Stalk<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 229
					, b: 454
				}
				, "2278": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 2
					, b: 555
				}
				, "2268": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
			}
		}, {
			o: "969"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2287", "2285", "2284", "2283", "2286"]
			, n: "Untitled Layout"
			, "_": 35
			, v: {
				"2286": {
					h: "1019"
					, p: "no-repeat"
					, x: "visible"
					, a: 134
					, q: "100% 100%"
					, b: 203
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 372
					, d: 554
					, r: "inline"
				}
				, "2284": {
					G: "#FFFFFF"
					, aU: 8
					, c: 582
					, d: 27
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 24
					, Y: 25
					, Z: "break-word"
					, w: "You just earned 14 points by answering 4 questions correctly."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 8
					, aS: 8
					, aT: 8
					, a: 21
					, F: "center"
					, b: 96
				}
				, "2287": {
					h: "930"
					, p: "no-repeat"
					, x: "visible"
					, a: -376
					, q: "100% 100%"
					, b: -66
					, j: "absolute"
					, dB: "img"
					, z: 1
					, k: "div"
					, c: 1492
					, d: 1026
					, r: "inline"
				}
				, "2285": {
					aV: 8
					, w: "Congratulations!"
					, x: "visible"
					, a: 44
					, Z: "break-word"
					, b: 6
					, y: "preserve"
					, j: "absolute"
					, z: 6
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 38
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2283": {
					b: 180
					, z: 7
					, K: "Solid"
					, c: 207
					, L: "Solid"
					, d: 47
					, aS: 4
					, M: 1
					, bD: "none"
					, N: 1
					, aT: 4
					, dB: "button"
					, O: 1
					, g: "#757576"
					, aU: 4
					, P: 1
					, Q: 0
					, aV: 4
					, R: "#000000"
					, j: "absolute"
					, S: 1
					, aI: 1
					, k: "div"
					, T: 1
					, aJ: 1
					, aK: 1
					, aL: 1
					, A: "#A0A0A0"
					, Y: 50
					, B: "#A0A0A0"
					, Z: "break-word"
					, r: "inline"
					, C: "#A0A0A0"
					, D: "#A0A0A0"
					, t: 24
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, F: "center"
					, G: "#FFFFFF"
					, aP: "pointer"
					, w: "Continue Playing<br>"
					, x: "visible"
					, I: "Solid"
					, a: 211
					, y: "preserve"
					, J: "Solid"
				}
			}
		}, {
			o: "1114"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 0.80000000000000004
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2288", "2289"]
			, n: "untitled scene"
			, "_": 36
			, v: {
				"2288": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Gin &amp; Ginger</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 228
					, b: 60
				}
				, "2289": {
					G: "#FFFFFF"
					, aU: 8
					, c: 591
					, aV: 8
					, d: 95
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 28
					, Z: "break-word"
					, w: "Answer the following questions about the above cocktail correctly to earn points.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 16
					, F: "center"
					, b: 181
				}
			}
		}, {
			o: "456"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2295", "2300", "2299", "2292", "2298", "2291", "2302", "2293", "2290", "2294", "2301", "2297", "2296"]
			, n: "glass_question_"
			, "_": 37
			, v: {
				"2297": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 86
					, q: "100% 100%"
					, b: 637
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "2293": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 383
					, q: "100% 100%"
					, b: 304
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 6
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "2300": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Gin &amp; Ginger</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 228
					, b: 54
				}
				, "2296": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 391
					, q: "100% 100%"
					, b: 637
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "2292": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, v: "bold"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 140
					, F: "center"
					, b: 213
				}
				, "2299": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 56
					, F: "center"
					, b: 105
				}
				, "2295": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 651
					, q: "100% 100%"
					, d: 976
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 1
					, E: 0
					, a: -5
					, F: "center"
					, b: -15
				}
				, "2291": {
					c: 313
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 308
					, b: 281
				}
				, "2302": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 78
					, q: "100% 100%"
					, b: 297
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
				, "2298": {
					c: 311
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 10
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 0
					, b: 284
				}
				, "2294": {
					c: 327
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 313
					, b: 612
				}
				, "2301": {
					c: 308
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 9
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 621
				}
				, "2290": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 167
					, Z: "break-word"
					, b: 446
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
			}
		}, {
			o: "555"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2308", "2307", "2311", "2305", "2304", "2310", "2309", "2306", "2303"]
			, n: "untitled scene"
			, "_": 38
			, v: {
				"2310": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 661
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2307": {
					G: "#FFFFFF"
					, aU: 8
					, c: 474
					, aV: 8
					, d: 40
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Is this cocktail garnished with a lime wedge?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 94
					, F: "center"
					, b: 275
				}
				, "2304": {
					X: 1
					, w: "Yes"
					, aV: 8
					, x: "visible"
					, a: 290
					, Z: "break-word"
					, b: 528
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2311": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 3
					, b: 441
				}
				, "2308": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Gin &amp; Ginger</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 228
					, b: 69
				}
				, "2305": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 438
					, j: "absolute"
					, dB: "img"
					, z: 6
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2309": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D300"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D300"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#E4D300"
					, D: "#E4D300"
					, k: "div"
					, P: 0
					, a: 3
					, b: 669
				}
				, "2306": {
					G: "#FFFFFF"
					, aU: 8
					, c: 103
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "No<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 296
					, b: 748
				}
				, "2303": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: -3
					, q: "100% 100%"
					, b: 884
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
			}
		}, {
			o: "585"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2322", "2318", "2327", "2323", "2324", "2325", "2315", "2313", "2321", "2326", "2320", "2316", "2319", "2317", "2314", "2312"]
			, n: "untitled scene"
			, "_": 39
			, v: {
				"2318": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2320": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 17
					, q: "100% 100%"
					, b: 555
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2314": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "1 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 275
					, b: 753
				}
				, "2324": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2327": {
					G: "#FFFFFF"
					, aU: 8
					, c: 510
					, aV: 8
					, d: 22
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "How many ounces of Lime Juice is used in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 57
					, F: "center"
					, b: 169
				}
				, "2323": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 271
				}
				, "2317": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 17
					, q: "100% 100%"
					, b: 699
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2313": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 17
					, q: "100% 100%"
					, b: 407
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2326": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 559
				}
				, "2322": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Gin &amp; Ginger</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 228
					, b: 69
				}
				, "2312": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 35
					, q: "100% 100%"
					, b: 841
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2316": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "0.75 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 261
					, b: 609
				}
				, "2319": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "2321": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "0.50 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 261
					, b: 465
				}
				, "2315": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 412
				}
				, "2325": {
					X: 1
					, w: "0.25 OZ."
					, aV: 8
					, x: "visible"
					, a: 261
					, Z: "break-word"
					, b: 317
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
			}
		}, {
			o: "600"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2332", "2338", "2336", "2331", "2339", "2328", "2343", "2341", "2333", "2335", "2342", "2340", "2330", "2329", "2334", "2337"]
			, n: "untitled scene"
			, "_": 40
			, v: {
				"2330": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 703
				}
				, "2328": {
					G: "#FFFFFF"
					, aU: 8
					, c: 106
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "6 OZ."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 274
					, b: 318
				}
				, "2340": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "8 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 273
					, b: 603
				}
				, "2337": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 35
					, q: "100% 100%"
					, b: 843
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2333": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "7 OZ.&nbsp;<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 274
					, b: 459
				}
				, "2343": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 410
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2336": {
					G: "#FFFFFF"
					, aU: 8
					, c: 523
					, aV: 8
					, d: 42
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "How many ounces is the glass used in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 51
					, F: "center"
					, b: 177
				}
				, "2332": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Gin &amp; Ginger</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 228
					, b: 69
				}
				, "2342": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 17
					, q: "100% 100%"
					, b: 557
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2339": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2335": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 559
				}
				, "2331": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 2
					, b: 271
				}
				, "2329": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 17
					, q: "100% 100%"
					, b: 701
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2341": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 1
					, b: 416
				}
				, "2338": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2334": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "9 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 273
					, b: 751
				}
			}
		}, {
			o: "976"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2344", "2346", "2345", "2348", "2347"]
			, n: "Untitled Layout"
			, "_": 41
			, v: {
				"2348": {
					b: 180
					, z: 4
					, K: "Solid"
					, c: 207
					, L: "Solid"
					, d: 47
					, aS: 4
					, M: 1
					, bD: "none"
					, N: 1
					, aT: 4
					, dB: "button"
					, O: 1
					, g: "#757576"
					, aU: 4
					, P: 1
					, Q: 0
					, aV: 4
					, R: "#000000"
					, j: "absolute"
					, S: 1
					, aI: 1
					, k: "div"
					, T: 1
					, aJ: 1
					, aK: 1
					, aL: 1
					, A: "#A0A0A0"
					, Y: 50
					, B: "#A0A0A0"
					, Z: "break-word"
					, r: "inline"
					, C: "#A0A0A0"
					, D: "#A0A0A0"
					, t: 24
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, F: "center"
					, G: "#FFFFFF"
					, aP: "pointer"
					, w: "Continue Playing<br>"
					, x: "visible"
					, I: "Solid"
					, a: 211
					, y: "preserve"
					, J: "Solid"
				}
				, "2346": {
					aV: 8
					, w: "Congratulations!"
					, x: "visible"
					, a: 44
					, Z: "break-word"
					, b: 6
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 38
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2344": {
					h: "930"
					, p: "no-repeat"
					, x: "visible"
					, a: -376
					, q: "100% 100%"
					, b: -66
					, j: "absolute"
					, dB: "img"
					, z: 1
					, k: "div"
					, c: 1492
					, d: 1026
					, r: "inline"
				}
				, "2347": {
					h: "1021"
					, p: "no-repeat"
					, x: "visible"
					, a: 153
					, q: "100% 100%"
					, b: 278
					, j: "absolute"
					, dB: "img"
					, z: 2
					, k: "div"
					, c: 324
					, d: 483
					, r: "inline"
				}
				, "2345": {
					G: "#FFFFFF"
					, aU: 8
					, c: 582
					, d: 27
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 24
					, Y: 25
					, Z: "break-word"
					, w: "You just earned 14 points by answering 4 questions correctly."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 21
					, F: "center"
					, b: 96
				}
			}
		}, {
			o: "1119"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 0.80000000000000004
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2350", "2349"]
			, n: "untitled scene"
			, "_": 42
			, v: {
				"2349": {
					G: "#FFFFFF"
					, aU: 8
					, c: 591
					, aV: 8
					, d: 95
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 28
					, Z: "break-word"
					, w: "Answer the following questions about the above cocktail correctly to earn points.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 16
					, F: "center"
					, b: 181
				}
				, "2350": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Pomegranate Mojito</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 184
					, b: 69
				}
			}
		}, {
			o: "468"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2370", "2360", "2351", "2354", "2362", "2366", "2355", "2357", "2374", "2368", "2375", "2364", "2367", "2358", "2356", "2353", "2365", "2371", "2369", "2359", "2361", "2363", "2352", "2372", "2373", "2376"]
			, n: "glass_question_"
			, "_": 43
			, v: {
				"2356": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 81
					, q: "100% 100%"
					, b: 327
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
				, "2371": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 170
					, Z: "break-word"
					, b: 444
					, y: "preserve"
					, j: "absolute"
					, z: 4
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "2360": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 640
					, q: "100% 100%"
					, d: 960
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 1
					, E: 0
					, a: 3
					, F: "center"
					, b: -17
				}
				, "2376": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 393
					, q: "100% 100%"
					, b: 647
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "2365": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 170
					, Z: "break-word"
					, b: 444
					, y: "preserve"
					, j: "absolute"
					, z: 21
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "2354": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Pomegranate Mojito</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 31
					, aS: 8
					, aT: 8
					, a: 187
					, b: 52
				}
				, "2359": {
					c: 307
					, d: 327
					, I: "Solid"
					, J: "Solid"
					, K: "Solid"
					, L: "Solid"
					, aP: "pointer"
					, M: 1
					, N: 1
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 1
					, dB: "button"
					, z: 12
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 1
					, a: 3
					, b: 612
				}
				, "2374": {
					c: 311
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 28
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 3
					, b: 282
				}
				, "2363": {
					c: 325
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 2
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 314
					, b: 616
				}
				, "2352": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 89
					, q: "100% 100%"
					, b: 635
					, j: "absolute"
					, dB: "img"
					, z: 26
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "2368": {
					c: 311
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 14
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 1
					, b: 279
				}
				, "2357": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 16
					, aS: 8
					, aT: 8
					, a: 168
					, F: "center"
					, b: 218
				}
				, "2372": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 394
					, q: "100% 100%"
					, b: 635
					, j: "absolute"
					, dB: "img"
					, z: 23
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "2361": {
					c: 327
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 29
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 316
					, b: 610
				}
				, "2366": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 17
					, aS: 8
					, aT: 8
					, a: 59
					, F: "center"
					, b: 103
				}
				, "2355": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, v: "bold"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 20
					, aS: 8
					, aT: 8
					, a: 143
					, F: "center"
					, b: 211
				}
				, "2370": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 653
					, q: "100% 100%"
					, d: 979
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 19
					, E: 0
					, a: -3
					, F: "center"
					, b: -17
				}
				, "2375": {
					c: 325
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 15
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 316
					, b: 279
				}
				, "2364": {
					c: 327
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 27
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 0
					, a: 312
					, b: 286
				}
				, "2353": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 386
					, q: "100% 100%"
					, b: 334
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 8
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "2369": {
					c: 313
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 30
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 3
					, b: 613
				}
				, "2358": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 386
					, q: "100% 100%"
					, b: 302
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 24
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "2373": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 88
					, q: "100% 100%"
					, b: 647
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "2362": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 22
					, aS: 8
					, aT: 8
					, a: 59
					, F: "center"
					, b: 103
				}
				, "2351": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 32
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Pomegranate Mojito</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 173
					, b: 51
				}
				, "2367": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 81
					, q: "100% 100%"
					, b: 295
					, j: "absolute"
					, dB: "img"
					, z: 25
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
			}
		}, {
			o: "612"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2382", "2384", "2379", "2380", "2383", "2385", "2381", "2378", "2377"]
			, n: "untitled scene"
			, "_": 44
			, v: {
				"2385": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 661
					, j: "absolute"
					, dB: "img"
					, z: 5
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2382": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Pomegranate Mojito</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 184
					, b: 69
				}
				, "2379": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D300"
					, x: "visible"
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D300"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 12
					, C: "#E4D300"
					, D: "#E4D300"
					, k: "div"
					, P: 0
					, a: 2
					, b: 444
				}
				, "2383": {
					X: 1
					, w: "Stirred"
					, aV: 8
					, x: "visible"
					, a: 267
					, Z: "break-word"
					, b: 529
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2380": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 6
					, q: "100% 100%"
					, b: 438
					, j: "absolute"
					, dB: "img"
					, z: 6
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2377": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: -3
					, q: "100% 100%"
					, b: 884
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2384": {
					X: 1
					, w: "Is this cocktail shaken or stirred?"
					, aV: 8
					, x: "visible"
					, a: 94
					, Z: "break-word"
					, b: 275
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2381": {
					c: 634
					, d: 215
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 11
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 2
					, b: 669
				}
				, "2378": {
					G: "#FFFFFF"
					, aU: 8
					, c: 133
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Shaken<br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 270
					, b: 751
				}
			}
		}, {
			o: "627"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2390", "2387", "2391", "2401", "2394", "2386", "2396", "2393", "2399", "2397", "2395", "2400", "2392", "2388", "2389", "2398"]
			, n: "untitled scene"
			, "_": 45
			, v: {
				"2387": {
					w: ""
					, h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, s: "'Fira Sans Condensed'"
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2400": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "3&nbsp;<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 308
					, b: 596
				}
				, "2396": {
					w: ""
					, h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, s: "'Fira Sans Condensed'"
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2392": {
					w: ""
					, h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, s: "'Fira Sans Condensed'"
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2386": {
					G: "#FFFFFF"
					, aU: 8
					, c: 44
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "1"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 310
					, b: 312
				}
				, "2399": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "2<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 308
					, b: 454
				}
				, "2395": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 2
					, b: 557
				}
				, "2389": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "4<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 308
					, b: 744
				}
				, "2391": {
					G: "#FFFFFF"
					, aU: 8
					, c: 515
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "How many lime wedges are used in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 65
					, F: "center"
					, b: 177
				}
				, "2398": {
					w: ""
					, h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, s: "'Fira Sans Condensed'"
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2388": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 2
					, b: 701
				}
				, "2390": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Pomegranate Mojito</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 184
					, b: 69
				}
				, "2394": {
					w: ""
					, h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, s: "'Fira Sans Condensed'"
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2401": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 2
					, b: 269
				}
				, "2397": {
					w: ""
					, h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, s: "'Fira Sans Condensed'"
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2393": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 2
					, b: 410
				}
			}
		}, {
			o: "642"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2402", "2406", "2408", "2403", "2404", "2414", "2410", "2412", "2409", "2417", "2405", "2415", "2413", "2416", "2411", "2407"]
			, n: "untitled scene"
			, "_": 46
			, v: {
				"2414": {
					X: 1
					, w: "Cranberry Juice"
					, aV: 8
					, x: "visible"
					, a: 209
					, Z: "break-word"
					, b: 312
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2417": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, s: ""
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2413": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, s: ""
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2403": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 269
				}
				, "2407": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, s: ""
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2416": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 701
				}
				, "2412": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 410
				}
				, "2402": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Pomegranate Mojito</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 184
					, b: 69
				}
				, "2406": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, s: ""
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2409": {
					G: "#FFFFFF"
					, aU: 8
					, c: 280
					, aV: 8
					, d: 50
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Pomegranate Juice<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 200
					, b: 451
				}
				, "2411": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Club Soda<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 236
					, b: 749
				}
				, "2405": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 557
				}
				, "2415": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Lime Juice&nbsp;<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 239
					, b: 601
				}
				, "2408": {
					X: 1
					, w: "What is the cocktail topped off with?"
					, aV: 8
					, x: "visible"
					, a: 82
					, Z: "break-word"
					, b: 190
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2410": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, s: ""
					, d: 6
					, c: 628
					, r: "inline"
				}
				, "2404": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, s: ""
					, d: 6
					, c: 628
					, r: "inline"
				}
			}
		}, {
			o: "983"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2419", "2418", "2422", "2421", "2420"]
			, n: "Untitled Layout"
			, "_": 47
			, v: {
				"2420": {
					h: "1023"
					, p: "no-repeat"
					, x: "visible"
					, a: 151
					, q: "100% 100%"
					, b: 261
					, j: "absolute"
					, dB: "img"
					, z: 2
					, k: "div"
					, c: 337
					, d: 502
					, r: "inline"
				}
				, "2418": {
					aV: 8
					, w: "Congratulations!"
					, x: "visible"
					, a: 44
					, Z: "break-word"
					, b: 6
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 38
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2421": {
					b: 180
					, z: 4
					, K: "Solid"
					, c: 207
					, L: "Solid"
					, d: 47
					, aS: 4
					, M: 1
					, bD: "none"
					, N: 1
					, aT: 4
					, dB: "button"
					, O: 1
					, g: "#757576"
					, aU: 4
					, P: 1
					, Q: 0
					, aV: 4
					, R: "#000000"
					, j: "absolute"
					, S: 1
					, aI: 1
					, k: "div"
					, T: 1
					, aJ: 1
					, aK: 1
					, aL: 1
					, A: "#A0A0A0"
					, Y: 50
					, B: "#A0A0A0"
					, Z: "break-word"
					, r: "inline"
					, C: "#A0A0A0"
					, D: "#A0A0A0"
					, t: 24
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, F: "center"
					, G: "#FFFFFF"
					, aP: "pointer"
					, w: "Continue Playing<br>"
					, x: "visible"
					, I: "Solid"
					, a: 211
					, y: "preserve"
					, J: "Solid"
				}
				, "2419": {
					h: "930"
					, p: "no-repeat"
					, x: "visible"
					, a: -376
					, q: "100% 100%"
					, b: -66
					, j: "absolute"
					, dB: "img"
					, z: 1
					, k: "div"
					, c: 1492
					, d: 1026
					, r: "inline"
				}
				, "2422": {
					G: "#FFFFFF"
					, aU: 8
					, c: 582
					, d: 27
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 24
					, Y: 25
					, Z: "break-word"
					, w: "You just earned 14 points by answering 4 questions correctly."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 21
					, F: "center"
					, b: 96
				}
			}
		}, {
			o: "1124"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 2
					, b: []
					, a: [{
						f: "c"
						, p: 2
						, y: 2
						, z: 0
						, i: "ActionHandler"
						, s: {
							a: [{
								d: 1.1000000000000001
								, p: 1
								, g: 5
								, f: 1
							}]
						}
						, o: "kTimelineDefaultIdentifier"
					}]
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2424", "2423"]
			, n: "untitled scene"
			, "_": 48
			, v: {
				"2423": {
					G: "#FFFFFF"
					, aU: 8
					, c: 591
					, aV: 8
					, d: 95
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 28
					, Z: "break-word"
					, w: "Answer the following questions about the above cocktail correctly to earn points.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 16
					, F: "center"
					, b: 181
				}
				, "2424": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Peach Smash</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 2
					, aS: 8
					, aT: 8
					, a: 233
					, b: 69
				}
			}
		}, {
			o: "480"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2434", "2440", "2450", "2444", "2426", "2439", "2445", "2428", "2438", "2432", "2433", "2443", "2431", "2447", "2441", "2430", "2429", "2435", "2448", "2449", "2427", "2425", "2442", "2436", "2437", "2446"]
			, n: "glass_question_"
			, "_": 49
			, v: {
				"2447": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 383
					, q: "100% 100%"
					, b: 303
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 19
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "2436": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 391
					, q: "100% 100%"
					, b: 636
					, j: "absolute"
					, dB: "img"
					, z: 18
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "2425": {
					c: 325
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 2
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 311
					, b: 617
				}
				, "2440": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 640
					, q: "100% 100%"
					, d: 960
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 1
					, E: 0
					, a: 0
					, F: "center"
					, b: -16
				}
				, "2445": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, v: "bold"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 15
					, aS: 8
					, aT: 8
					, a: 140
					, F: "center"
					, b: 212
				}
				, "2434": {
					p: "no-repeat"
					, G: "#FFFFFF"
					, c: 651
					, q: "100% 100%"
					, d: 976
					, r: "inline"
					, s: "'Fira Sans Condensed'"
					, X: 1.41903
					, t: 36
					, Y: 43
					, u: "normal"
					, h: "12"
					, v: "normal"
					, w: "<br><br><br><br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, dB: "img"
					, z: 14
					, E: 0
					, a: -5
					, F: "center"
					, b: -16
				}
				, "2439": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 12
					, aS: 8
					, aT: 8
					, a: 56
					, F: "center"
					, b: 104
				}
				, "2428": {
					G: "#FFFFFF"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 24
					, Z: "break-word"
					, w: "Tap the correct answer"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 11
					, aS: 8
					, aT: 8
					, a: 165
					, F: "center"
					, b: 219
				}
				, "2443": {
					c: 325
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 10
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 313
					, b: 280
				}
				, "2432": {
					c: 311
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 9
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: -2
					, b: 280
				}
				, "2448": {
					c: 307
					, d: 327
					, I: "Solid"
					, J: "Solid"
					, K: "Solid"
					, L: "Solid"
					, aP: "pointer"
					, M: 1
					, N: 1
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 1
					, dB: "button"
					, z: 8
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 1
					, a: 0
					, b: 613
				}
				, "2437": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 85
					, q: "100% 100%"
					, b: 648
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "2426": {
					G: "#000000"
					, aU: 8
					, c: 527
					, aV: 8
					, d: 69
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 34
					, Z: "break-word"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">What kind of glass do you use to make this cocktail?</span><br style=\"color: rgb(255, 255, 255); font-family: 'Fira Sans Condensed'; font-size: 36px; letter-spacing: 1px; text-align: center; white-space: normal;\">"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 17
					, aS: 8
					, aT: 8
					, a: 56
					, F: "center"
					, b: 104
				}
				, "2441": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 78
					, q: "100% 100%"
					, b: 328
					, j: "absolute"
					, dB: "img"
					, z: 6
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
				, "2430": {
					h: "14"
					, p: "no-repeat"
					, x: "visible"
					, a: 383
					, q: "100% 100%"
					, b: 335
					, j: "absolute"
					, dB: "img"
					, aA: {
						a: [{
							p: 0
						}]
					}
					, z: 5
					, k: "div"
					, d: 257
					, c: 164
					, aB: {
						a: [{}]
					}
					, aP: "pointer"
					, r: "inline"
				}
				, "2446": {
					h: "18"
					, p: "no-repeat"
					, x: "visible"
					, a: 390
					, q: "100% 100%"
					, b: 648
					, j: "absolute"
					, dB: "img"
					, z: 4
					, k: "div"
					, c: 149
					, d: 261
					, r: "inline"
				}
				, "2435": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 167
					, Z: "break-word"
					, b: 445
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "2450": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 2
					, t: 32
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Pomegranate Mojito</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 13
					, aS: 8
					, aT: 8
					, a: 170
					, b: 52
				}
				, "2429": {
					aV: 8
					, w: "New Text"
					, x: "visible"
					, a: 167
					, Z: "break-word"
					, b: 445
					, y: "preserve"
					, j: "absolute"
					, z: 16
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 16
					, r: "inline"
					, aU: 8
					, G: "#000000"
				}
				, "2444": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Peach Smash</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 26
					, aS: 8
					, aT: 8
					, a: 233
					, b: 53
				}
				, "2433": {
					c: 323
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 25
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 313
					, b: 280
				}
				, "2449": {
					c: 327
					, d: 333
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 24
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 313
					, b: 611
				}
				, "2438": {
					c: 311
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#D8DDE4"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#D8DDE4"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 23
					, C: "#D8DDE4"
					, D: "#D8DDE4"
					, k: "div"
					, P: 0
					, a: 0
					, b: 283
				}
				, "2427": {
					c: 309
					, d: 327
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E5C400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.79999999999999993
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E5C400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 22
					, C: "#E5C400"
					, D: "#E5C400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 617
				}
				, "2442": {
					w: ""
					, h: "22"
					, p: "no-repeat"
					, x: "visible"
					, a: 86
					, q: "100% 100%"
					, b: 636
					, j: "absolute"
					, dB: "img"
					, z: 21
					, k: "div"
					, c: 164
					, d: 261
					, r: "inline"
				}
				, "2431": {
					w: ""
					, h: "20"
					, p: "no-repeat"
					, x: "visible"
					, a: 78
					, q: "100% 100%"
					, b: 296
					, j: "absolute"
					, dB: "img"
					, z: 20
					, k: "div"
					, c: 157
					, d: 272
					, r: "inline"
				}
			}
		}, {
			o: "657"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2461", "2454", "2465", "2455", "2462", "2466", "2457", "2464", "2451", "2456", "2458", "2460", "2453", "2452", "2463", "2459"]
			, n: "untitled scene"
			, "_": 50
			, v: {
				"2463": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Apple Juice&nbsp;<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 225
					, b: 738
				}
				, "2466": {
					X: 1
					, w: "Cranberry Juice"
					, aV: 8
					, x: "visible"
					, a: 193
					, Z: "break-word"
					, b: 317
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2462": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2452": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 701
				}
				, "2456": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2459": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2461": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Peach Smash</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 233
					, b: 69
				}
				, "2451": {
					G: "#FFFFFF"
					, aU: 8
					, c: 283
					, aV: 8
					, d: 6989
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Pomegranate Juice<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 180
					, b: 454
				}
				, "2455": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 269
				}
				, "2465": {
					X: 1
					, w: "What type of juice is used in this cocktail?"
					, aV: 8
					, x: "visible"
					, a: 17
					, Z: "break-word"
					, b: 188
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2458": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 557
				}
				, "2460": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "Lime Juice&nbsp;<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 232
					, b: 599
				}
				, "2454": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2464": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: 0
					, b: 410
				}
				, "2457": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2453": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
			}
		}, {
			o: "672"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2470", "2482", "2476", "2480", "2478", "2469", "2473", "2474", "2475", "2479", "2467", "2471", "2472", "2477", "2468", "2481"]
			, n: "untitled scene"
			, "_": 51
			, v: {
				"2476": {
					G: "#FFFFFF"
					, aU: 8
					, c: 442
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "How many ounces is the glass is used in this cocktail?"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 1
					, aS: 8
					, aT: 8
					, a: 106
					, F: "center"
					, b: 169
				}
				, "2472": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 9
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2482": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2479": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 543
					, j: "absolute"
					, dB: "img"
					, z: 8
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2475": {
					G: "#FFFFFF"
					, aU: 8
					, c: 172
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "7 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 3
					, aS: 8
					, aT: 8
					, a: 278
					, b: 455
				}
				, "2471": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "8 OZ.<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 278
					, b: 602
				}
				, "2469": {
					X: 1
					, w: "6 OZ."
					, aV: 8
					, x: "visible"
					, a: 280
					, Z: "break-word"
					, b: 316
					, y: "preserve"
					, j: "absolute"
					, z: 2
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 31
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2481": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2478": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2474": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 405
					, j: "absolute"
					, dB: "img"
					, z: 7
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2470": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Peach Smash</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 18
					, aS: 8
					, aT: 8
					, a: 233
					, b: 69
				}
				, "2468": {
					G: "#FFFFFF"
					, aU: 8
					, c: 208
					, aV: 8
					, d: 35
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 31
					, Z: "break-word"
					, w: "9 OZ.&nbsp;<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 278
					, b: 743
				}
				, "2480": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: -6
					, b: 267
				}
				, "2477": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 14
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 0
					, b: 700
				}
				, "2473": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 16
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: -6
					, b: 408
				}
				, "2467": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 15
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: -6
					, b: 555
				}
			}
		}, {
			o: "687"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#000000"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2496", "2483", "2484", "2494", "2495", "2497", "2489", "2488", "2490", "2486", "2498", "2485", "2493", "2491", "2487", "2492"]
			, n: "untitled scene"
			, "_": 52
			, v: {
				"2496": {
					G: "#000000"
					, aU: 8
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 31
					, Z: "break-word"
					, v: "normal"
					, w: "<span style=\"color: rgb(255, 255, 255); font-style: normal; font-variant-caps: normal; text-align: center; text-transform: none; text-indent: 0px; white-space: normal; word-spacing: 0px;\">Peach Smash</span><br>"
					, j: "absolute"
					, x: "visible"
					, yy: "nowrap"
					, k: "div"
					, y: "preserve"
					, z: 21
					, aS: 8
					, aT: 8
					, a: 233
					, b: 69
				}
				, "2492": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 34
					, q: "100% 100%"
					, b: 835
					, j: "absolute"
					, dB: "img"
					, z: 15
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2486": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 549
					, j: "absolute"
					, dB: "img"
					, z: 11
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2489": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 401
					, j: "absolute"
					, dB: "img"
					, z: 10
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2491": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 17
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: 4
					, b: 700
				}
				, "2485": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 32
					, Z: "break-word"
					, w: "Mint Sprig<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 230
					, b: 595
				}
				, "2495": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 26
					, q: "100% 100%"
					, b: 271
					, j: "absolute"
					, dB: "img"
					, z: 14
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2498": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, w: ""
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, j: "absolute"
					, O: 0
					, k: "div"
					, dB: "button"
					, z: 18
					, C: "#E4D400"
					, D: "#E4D400"
					, B: "#E4D400"
					, P: 0
					, a: -2
					, b: 555
				}
				, "2494": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							p: 4
							, h: "1546"
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 20
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: -2
					, b: 271
				}
				, "2490": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 32
					, Z: "break-word"
					, w: "Basil Leaf&nbsp;<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 6
					, aS: 8
					, aT: 8
					, a: 238
					, b: 451
				}
				, "2484": {
					X: 1
					, w: "What garnish is used in this cocktail?"
					, aV: 8
					, x: "visible"
					, a: 45
					, Z: "break-word"
					, b: 190
					, y: "preserve"
					, j: "absolute"
					, z: 1
					, yy: "nowrap"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 32
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2488": {
					c: 638
					, d: 137
					, I: "None"
					, J: "None"
					, K: "None"
					, L: "None"
					, aP: "pointer"
					, M: 0
					, N: 0
					, A: "#E4D400"
					, x: "visible"
					, aA: {
						a: [{
							d: 0.80000000000000004
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, B: "#E4D400"
					, j: "absolute"
					, O: 0
					, dB: "button"
					, z: 19
					, C: "#E4D400"
					, D: "#E4D400"
					, k: "div"
					, P: 0
					, a: -2
					, b: 407
				}
				, "2497": {
					G: "#FFFFFF"
					, aU: 8
					, c: 201
					, aV: 8
					, d: 37
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 32
					, Z: "break-word"
					, w: "Lime Wheel<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 7
					, aS: 8
					, aT: 8
					, a: 224
					, b: 313
				}
				, "2493": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 693
					, j: "absolute"
					, dB: "img"
					, z: 12
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2483": {
					h: "100"
					, p: "no-repeat"
					, x: "visible"
					, a: 16
					, q: "100% 100%"
					, b: 155
					, j: "absolute"
					, dB: "img"
					, z: 13
					, k: "div"
					, c: 628
					, d: 6
					, r: "inline"
				}
				, "2487": {
					G: "#FFFFFF"
					, aU: 8
					, c: 226
					, aV: 8
					, d: 45
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 1
					, t: 32
					, Z: "break-word"
					, w: "Lemon Wedge<br>"
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 4
					, aS: 8
					, aT: 8
					, a: 218
					, b: 738
				}
			}
		}, {
			o: "990"
			, p: "600px"
			, cA: false
			, Y: 640
			, Z: 960
			, L: []
			, c: "#FFFFFF"
			, bY: 1
			, d: 640
			, U: {}
			, T: {
				kTimelineDefaultIdentifier: {
					i: "kTimelineDefaultIdentifier"
					, n: "Main Timeline"
					, z: 0
					, b: []
					, a: []
					, f: 30
				}
			}
			, bZ: 180
			, O: ["2499", "2502", "2503", "2501", "2500"]
			, n: "Untitled Layout"
			, "_": 53
			, v: {
				"2501": {
					b: 180
					, z: 4
					, K: "Solid"
					, c: 207
					, L: "Solid"
					, d: 47
					, aS: 4
					, M: 1
					, bD: "none"
					, N: 1
					, aT: 4
					, dB: "button"
					, O: 1
					, g: "#757576"
					, aU: 4
					, P: 1
					, Q: 0
					, aV: 4
					, R: "#000000"
					, j: "absolute"
					, S: 1
					, aI: 1
					, k: "div"
					, T: 1
					, aJ: 1
					, aK: 1
					, aL: 1
					, A: "#A0A0A0"
					, Y: 50
					, B: "#A0A0A0"
					, Z: "break-word"
					, r: "inline"
					, C: "#A0A0A0"
					, D: "#A0A0A0"
					, t: 24
					, aA: {
						a: [{
							d: 1.1000000000000001
							, p: 1
							, g: 5
							, f: 1
						}]
					}
					, F: "center"
					, G: "#FFFFFF"
					, aP: "pointer"
					, w: "Continue Playing<br>"
					, x: "visible"
					, I: "Solid"
					, a: 211
					, y: "preserve"
					, J: "Solid"
				}
				, "2502": {
					aV: 8
					, w: "Congratulations!"
					, x: "visible"
					, a: 44
					, Z: "break-word"
					, b: 6
					, y: "preserve"
					, j: "absolute"
					, z: 3
					, yy: "nowrap"
					, s: "Helvetica,Arial,Sans-Serif"
					, aT: 8
					, k: "div"
					, aS: 8
					, t: 38
					, r: "inline"
					, aU: 8
					, G: "#FFFFFF"
				}
				, "2500": {
					h: "1025"
					, p: "no-repeat"
					, x: "visible"
					, a: 152
					, q: "100% 100%"
					, b: 263
					, j: "absolute"
					, dB: "img"
					, z: 2
					, k: "div"
					, c: 326
					, d: 486
					, r: "inline"
				}
				, "2503": {
					G: "#FFFFFF"
					, aU: 8
					, c: 582
					, d: 27
					, aV: 8
					, r: "inline"
					, s: "'Gill Sans','Lucida Grande',Helvetica,sans-serif"
					, X: 0
					, t: 24
					, Y: 25
					, Z: "break-word"
					, w: "You just earned 14 points by answering 4 questions correctly."
					, j: "absolute"
					, x: "visible"
					, k: "div"
					, y: "preserve"
					, z: 5
					, aS: 8
					, aT: 8
					, a: 21
					, F: "center"
					, b: 96
				}
				, "2499": {
					h: "930"
					, p: "no-repeat"
					, x: "visible"
					, a: -376
					, q: "100% 100%"
					, b: -66
					, j: "absolute"
					, dB: "img"
					, z: 1
					, k: "div"
					, c: 1492
					, d: 1026
					, r: "inline"
				}
			}
		}], {}, g, {}, null, false, true, -1, true, true, false, true);
		f[c] = a.API;
		document.getElementById(e).setAttribute("HYP_dn", c);
		a.z_o(this.body)
	})();
})();