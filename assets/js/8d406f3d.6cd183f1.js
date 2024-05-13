"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[4490],{4930:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>t,metadata:()=>i,toc:()=>u});var n=s(5893),o=s(1151);const t={},a="user.js",i={id:"tool/firefox/user.js",title:"user.js",description:"user.js \u6587\u4ef6\u76ee\u5f55\u4e3a $FIREFOX_PROFILE \u76ee\u5f55\uff0c\u4e0e prefs.js \u6587\u4ef6\u5728\u540c\u4e00\u76ee\u5f55\u4e0b\u3002",source:"@site/docs/tool/firefox/user.js.md",sourceDirName:"tool/firefox",slug:"/tool/firefox/user.js",permalink:"/notes/tool/firefox/user.js",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JD-GUI \u5b89\u88c5\u4f7f\u7528",permalink:"/notes/tool/decompiler/jd_gui"},next:{title:"userChrome.css",permalink:"/notes/tool/firefox/user_chrome.css"}},l={},u=[];function p(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"userjs",children:"user.js"}),"\n",(0,n.jsxs)(r.admonition,{title:"\u6ce8\u610f",type:"info",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"user.js"})," \u6587\u4ef6\u76ee\u5f55\u4e3a ",(0,n.jsx)(r.code,{children:"$FIREFOX_PROFILE"})," \u76ee\u5f55\uff0c\u4e0e ",(0,n.jsx)(r.code,{children:"prefs.js"})," \u6587\u4ef6\u5728\u540c\u4e00\u76ee\u5f55\u4e0b\u3002"]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Windows"}),"\n"]}),(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"C:\\Users\\ADMIN\\AppData\\Mozilla\\Firefox\\Profiles\\XXXXXXXX.your_profile_name\\user.js"}),"\n"]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Linux"}),"\n"]}),(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"~/.mozilla/firefox/XXXXXXXX.your_profile_name/user.js"}),"\n"]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Mac"}),"\n"]}),(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"~/Library/Application Support/Firefox/Profiles/XXXXXXXX.your_profile_name/user.js"}),"\n"]}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"References"}),"\n"]}),(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://kb.mozillazine.org/About:config_entries",children:"https://kb.mozillazine.org/About:config_entries"}),"\n",(0,n.jsx)(r.a,{href:"https://kb.mozillazine.org/Category:Preferences",children:"https://kb.mozillazine.org/Category:Preferences"}),"\nresource:///defaults/preferences/firefox.js\nresource://gre/greprefs.js"]}),"\n"]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'user_pref("accessibility.force_disabled", 1);\nuser_pref("accessibility.typeaheadfind.flashBar", 0);\nuser_pref("app.normandy.api_url", "");\nuser_pref("app.normandy.enabled", false);\nuser_pref("app.shield.optoutstudies.enabled", false);\nuser_pref("app.update.auto", false);\n\nuser_pref("beacon.enabled", false);\nuser_pref("breakpad.reportURL", "");\nuser_pref("browser.aboutConfig.showWarning", false);\nuser_pref("browser.bookmarks.restore_default_bookmarks", false);\nuser_pref("browser.cache.disk.enable", true);\nuser_pref("browser.contentblocking.category", "strict");\nuser_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);\nuser_pref("browser.ctrlTab.sortByRecentlyUsed", true);\nuser_pref("browser.discovery.enabled", false);\nuser_pref("browser.display.document_color_use", 1);\nuser_pref("browser.display.use_document_fonts", 1);\nuser_pref("browser.display.use_system_colors", false);\nuser_pref("browser.download.always_ask_before_handling_new_types", false);\nuser_pref("browser.download.alwaysOpenPanel", false);\nuser_pref("browser.download.autohideButton", false);\nuser_pref("browser.download.manager.addToRecentDocs", false);\nuser_pref("browser.download.useDownloadDir", true);\nuser_pref("browser.eme.ui.enabled", false);\nuser_pref("browser.fixup.alternate.enabled", false);\nuser_pref("browser.formfill.enable", false);\nuser_pref("browser.helperApps.deleteTempFileOnExit", true);\nuser_pref("browser.link.open_newwindow", 3);\nuser_pref("browser.link.open_newwindow.restriction", 0);\nuser_pref("browser.messaging-system.whatsNewPanel.enabled", false);\nuser_pref("browser.newtab.preload", false);\nuser_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);\nuser_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);\nuser_pref("browser.newtabpage.activity-stream.default.sites", "");\nuser_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);\nuser_pref("browser.newtabpage.activity-stream.feeds.snippets", false);\nuser_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);\nuser_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);\nuser_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);\nuser_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);\nuser_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);\nuser_pref("browser.newtabpage.activity-stream.showSearch", false);\nuser_pref("browser.newtabpage.activity-stream.showSponsored", false);\nuser_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);\nuser_pref("browser.newtabpage.activity-stream.telemetry", false);\nuser_pref("browser.newtabpage.enabled", false);\nuser_pref("browser.newtabpage.enhanced", false);\nuser_pref("browser.onboarding.enabled", false);\nuser_pref("browser.ping-centre.telemetry", false);\nuser_pref("browser.places.speculativeConnect.enabled", false);\nuser_pref("browser.preferences.moreFromMozilla", false);\nuser_pref("browser.privatebrowsing.forceMediaMemoryCache", true);\nuser_pref("browser.safebrowsing.blockedURIs.enabled", false);\nuser_pref("browser.safebrowsing.downloads.enabled", false);\nuser_pref("browser.safebrowsing.downloads.remote.enabled", false);\nuser_pref("browser.safebrowsing.malware.enabled", false);\nuser_pref("browser.safebrowsing.phishing.enabled", false);\nuser_pref("browser.search.suggest.enabled", false);\nuser_pref("browser.search.update", false);\nuser_pref("browser.sessionstore.max_tabs_undo", 0);\nuser_pref("browser.sessionstore.max_windows_undo", 0);\nuser_pref("browser.sessionstore.interval", 43200000);\nuser_pref("browser.sessionstore.interval.idle", 86400000);\nuser_pref("browser.sessionstore.privacy_level", 2);\nuser_pref("browser.shell.checkDefaultBrowser", true);\nuser_pref("browser.shell.shortcutFavicons", false);\n/* user_pref("browser.startup.homepage", "https://tts-home.bitbucket.io/"); */\nuser_pref("browser.startup.homepage", "https://tts-home.github.io/");\nuser_pref("browser.startup.homepage_override.mstone", "ignore");\nuser_pref("browser.startup.page", 1);\nuser_pref("browser.tabs.cardPreview.enabled", false);\nuser_pref("browser.tabs.closeTabByDblclick", true);\nuser_pref("browser.tabs.crashReporting.sendReport", false);\nuser_pref("browser.tabs.firefox-view", false);\nuser_pref("browser.tabs.loadInBackground", false);\nuser_pref("browser.tabs.searchclipboardfor.middleclick", false);\nuser_pref("browser.tabs.warnOnCloseOtherTabs", false);\nuser_pref("browser.toolbars.bookmarks.visibility", "never");\nuser_pref("browser.translations.enable", false);\nuser_pref("browser.uiCustomization.state", "{\\"placements\\":{\\"widget-overflow-fixed-list\\":[],\\"unified-extensions-area\\":[\\"ublock0_raymondhill_net-browser-action\\"],\\"nav-bar\\":[\\"back-button\\",\\"forward-button\\",\\"stop-reload-button\\",\\"home-button\\",\\"urlbar-container\\",\\"downloads-button\\",\\"preferences-button\\",\\"unified-extensions-button\\"],\\"TabsToolbar\\":[\\"tabbrowser-tabs\\",\\"new-tab-button\\"],\\"PersonalToolbar\\":[]},\\"seen\\":[\\"ublock0_raymondhill_net-browser-action\\",\\"developer-button\\"],\\"dirtyAreaCache\\":[\\"unified-extensions-area\\",\\"nav-bar\\"],\\"currentVersion\\":19,\\"newElementCount\\":3}");\nuser_pref("browser.uitour.enabled", false);\nuser_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);\nuser_pref("browser.urlbar.showSearchSuggestionsFirst", false);\nuser_pref("browser.urlbar.showSearchTerms.enabled", false);\nuser_pref("browser.urlbar.speculativeConnect.enabled", false);\nuser_pref("browser.urlbar.suggest.bookmark", false);\nuser_pref("browser.urlbar.suggest.clipboard", false);\nuser_pref("browser.urlbar.suggest.engines", false);\nuser_pref("browser.urlbar.suggest.openpage", false);\nuser_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);\nuser_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);\nuser_pref("browser.urlbar.suggest.searches", false);\nuser_pref("browser.urlbar.suggest.topsites", false);\nuser_pref("browser.urlbar.trimURLs", false);\nuser_pref("browser.xul.error_pages.expert_bad_cert", true);\n\nuser_pref("captivedetect.canonicalURL", "");\nuser_pref("content.cors.disable", false);\n\nuser_pref("datareporting.healthreport.uploadEnabled", false);\nuser_pref("datareporting.policy.dataSubmissionEnabled", false);\nuser_pref("datareporting.sessions.current.clean", true);\nuser_pref("device.sensors.enabled", false);\nuser_pref("devtools.accessibility.enabled", false);\nuser_pref("devtools.application.enabled", false);\nuser_pref("devtools.cache.disabled", true);\nuser_pref("devtools.chrome.enabled", true);\nuser_pref("devtools.debugger.breakpoints-visible", false);\nuser_pref("devtools.debugger.expressions-visible", true);\nuser_pref("devtools.debugger.pause-on-caught-exceptions", false);\nuser_pref("devtools.debugger.remote-enabled", true);\nuser_pref("devtools.debugger.skip-pausing", true);\nuser_pref("devtools.debugger.xhr-breakpoints-visible", true);\nuser_pref("devtools.everOpened", true);\nuser_pref("devtools.inspector.activeSidebar", "ruleview");\nuser_pref("devtools.inspector.three-pane-enabled", false);\nuser_pref("devtools.memory.enabled", false);\nuser_pref("devtools.netmonitor.columnsData", "[{\\"name\\":\\"status\\",\\"minWidth\\":30,\\"width\\":4.66},{\\"name\\":\\"method\\",\\"minWidth\\":30,\\"width\\":3.83},{\\"name\\":\\"domain\\",\\"minWidth\\":30,\\"width\\":14.54},{\\"name\\":\\"file\\",\\"minWidth\\":30,\\"width\\":26.67},{\\"name\\":\\"url\\",\\"minWidth\\":30,\\"width\\":43.85},{\\"name\\":\\"initiator\\",\\"minWidth\\":30,\\"width\\":17},{\\"name\\":\\"type\\",\\"minWidth\\":30,\\"width\\":8.5},{\\"name\\":\\"transferred\\",\\"minWidth\\":30,\\"width\\":17},{\\"name\\":\\"contentSize\\",\\"minWidth\\":30,\\"width\\":5.16},{\\"name\\":\\"waterfall\\",\\"minWidth\\":150,\\"width\\":0.76}]");\nuser_pref("devtools.netmonitor.msg.visibleColumns", "[\\"data\\",\\"time\\"]");\nuser_pref("devtools.netmonitor.panes-network-details-height", 50);\nuser_pref("devtools.netmonitor.visibleColumns", "[\\"status\\",\\"method\\",\\"url\\",\\"initiator\\",\\"type\\",\\"transferred\\",\\"contentSize\\",\\"waterfall\\"]");\nuser_pref("devtools.onboarding.telemetry.logged", false);\nuser_pref("devtools.performance.enabled", false);\nuser_pref("devtools.responsive.reloadNotification.enabled", false);\nuser_pref("devtools.responsive.touchSimulation.enabled", true);\nuser_pref("devtools.responsive.viewport.height", 1080);\nuser_pref("devtools.responsive.viewport.pixelRatio", 2);\nuser_pref("devtools.responsive.viewport.width", 810);\nuser_pref("devtools.responsive.userAgent", "Mozilla/5.0 (iPad; CPU OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1");\nuser_pref("devtools.screenshot.audio.enabled", false);\nuser_pref("devtools.screenshot.clipboard.enabled", true);\nuser_pref("devtools.theme", "dark");\nuser_pref("devtools.webconsole.filter.debug", false);\nuser_pref("devtools.webconsole.filter.info", false);\nuser_pref("devtools.webconsole.filter.log", false);\nuser_pref("devtools.webconsole.filter.warn", false);\nuser_pref("devtools.webconsole.input.editorOnboarding", false);\nuser_pref("devtools.webide.autoinstallFxdtAdapters", false);\nuser_pref("dom.battery.enabled", false);\nuser_pref("dom.disable_beforeunload", true);\nuser_pref("dom.disable_window_move_resize", true);\nuser_pref("dom.enable_performance", false);\nuser_pref("dom.event.clipboardevents.enabled", true);\nuser_pref("dom.maxHardwareConcurrency", 16);\nuser_pref("dom.media.autoplay-policy-detection.enabled", false);\nuser_pref("dom.media.autoplay.autoplay-policy-api", false);\nuser_pref("dom.ipc.plugins.reportCrashURL", false);\nuser_pref("dom.security.https_only_mode", true);\nuser_pref("dom.security.https_only_mode_ever_enabled", true);\nuser_pref("dom.security.https_only_mode_send_http_background_request", false);\nuser_pref("dom.serviceWorkers.navigationPreload.enabled", false);\nuser_pref("dom.user_activation.transient.timeout", 10000);\n\nuser_pref("experiments.enabled", false);\nuser_pref("extensions.autoDisableScopes", 15);\nuser_pref("extensions.enabledScopes", 5);\nuser_pref("extensions.formautofill.addresses.enabled", false);\nuser_pref("extensions.formautofill.creditCards.enabled", false);\nuser_pref("extensions.getAddons.cache.enabled", false);\nuser_pref("extensions.getAddons.showPane", false);\nuser_pref("extensions.blocklist.enabled", true);\nuser_pref("extensions.htmlaboutaddons.recommendations.enabled", false);\nuser_pref("extensions.pocket.enabled", false);\nuser_pref("extensions.postDownloadThirdPartyPrompt", false);\nuser_pref("extensions.quarantinedDomains.enabled", true);\nuser_pref("extensions.screenshots.disabled", true);\nuser_pref("extensions.screenshots.system-disabled", true);\nuser_pref("extensions.screenshots.upload-disabled", true);\nuser_pref("extensions.webcompat-reporter.enabled", false);\nuser_pref("extensions.webcompat.enable_shims", true);\n\nuser_pref("findbar.highlightAll", true);\nuser_pref("font.language.group", "zh-CN");\nuser_pref("font.name.monospace.zh-CN", "Liberation Mono");\nuser_pref("font.name.sans-serif.zh-CN", "YaoSans");\nuser_pref("font.name.serif.zh-CN", "YaoSans");\nuser_pref("font.size.monospace.zh-CN", 14);\nuser_pref("font.size.variable.ar", 14);\nuser_pref("font.size.variable.zh-CN", 14);\nuser_pref("font.system.whitelist", \'YaoAscii,YaoSans,YaoIcon,Liberation Mono,STIXGeneral,Apple Color Emoji,Apple Symbols,Segoe UI Emoji,Segoe UI Symbol\');\n\nuser_pref("general.autoScroll", false);\nuser_pref("general.warnOnAboutConfig", false);\nuser_pref("general.useragent.override", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36");\nuser_pref("geo.enabled", false);\nuser_pref("geo.provider.ms-windows-location", false);\nuser_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");\nuser_pref("geo.provider.use_corelocation", false);\nuser_pref("geo.provider.use_geoclue", false);\nuser_pref("geo.provider.use_gpsd", false);\n\nuser_pref("intl.accept_languages", "zh-CN, zh");\n\nuser_pref("javascript.use_us_english_locale", true);\n\nuser_pref("keyword.enabled", false);\n\n/* 1-only base system fonts, 2-also optional language packs, 3-also user-installed fonts [default] */\nuser_pref("layout.css.font-visibility", 3);\nuser_pref("layout.css.light-dark.enabled", true);\n/* Dark (0), light (1), system (2) or browser (3) */\nuser_pref("layout.css.prefers-color-scheme.content-override", 0);\n\n/* https://wiki.mozilla.org/Media/block-autoplay */\n/* https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide */\nuser_pref("media.allowed-to-play.enabled", false);\nuser_pref("media.autoplay.allow-extension-background-pages", false);\nuser_pref("media.autoplay.allow-muted", false);\nuser_pref("media.autoplay.block-event.enabled", false);\nuser_pref("media.autoplay.block-webaudio", true);\n/* see `dom.user_activation.transient.timeout` */\nuser_pref("media.autoplay.blocking_policy", 1);\nuser_pref("media.autoplay.default", 5);\nuser_pref("media.block-autoplay-until-in-foreground", true);\nuser_pref("media.eme.enabled", false);\nuser_pref("media.geckoview.autoplay.request", false);\nuser_pref("media.getusermedia.screensharing.enabled", false);\nuser_pref("media.gmp-gmpopenh264.abi", "aarch64-gcc3");\nuser_pref("media.gmp-gmpopenh264.version", "1.8.1.1");\nuser_pref("media.gmp.storage.version.observed", 1);\nuser_pref("media.hardware-video-decoding.enabled", true);\nuser_pref("media.hardware-video-decoding.force-enabled", true);\nuser_pref("media.hardwaremediakeys.enabled", true);\nuser_pref("media.memory_cache_max_size", 65536);\nuser_pref("media.navigator.enabled", false);\nuser_pref("media.peerconnection.enabled", false);\nuser_pref("media.peerconnection.ice.default_address_only", true);\nuser_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);\nuser_pref("media.video_stats.enabled", false);\nuser_pref("media.videocontrols.picture-in-picture.urlbar-button.enabled", false);\nuser_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);\nuser_pref("media.videocontrols.picture-in-picture.video-toggle.min-video-secs", 30);\nuser_pref("middlemouse.contentLoadURL", false);\n\nuser_pref("network.allow-experiments", false);\nuser_pref("network.auth.subresource-http-auth-allow", 1);\nuser_pref("network.captive-portal-service.enabled", false);\nuser_pref("network.connectivity-service.enabled", false);\nuser_pref("network.cookie.cookieBehavior", 5);\nuser_pref("network.cookie.cookieBehavior.pbmode", 5);\nuser_pref("network.cors_preflight.allow_client_cert", false);\nuser_pref("network.cors_preflight.authorization_covered_by_wildcard", true);\nuser_pref("network.cors_preflight.block_userpass_uri", false);\nuser_pref("network.dns.disableIPv6", false);\nuser_pref("network.dns.disablePrefetch", true);\nuser_pref("network.dns.echconfig.enabled", true);\nuser_pref("network.dns.use_https_rr_as_altsvc", true);\nuser_pref("network.file.disable_unc_paths", true);\nuser_pref("network.gio.supported-protocols", "");\nuser_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);\nuser_pref("network.http.referer.trimmingPolicy", 2);\nuser_pref("network.http.referer.spoofSource", false);\n/* https://forums.mozillazine.org/viewtopic.php?f=38&t=3061261 */\nuser_pref("network.http.referer.XOriginTrimmingPolicy", 0);\nuser_pref("network.http.referer.XOriginPolicy", 0);\nuser_pref("network.http.speculative-parallel-limit", 0);\nuser_pref("network.IDN_show_punycode", true);\nuser_pref("network.predictor.enabled", false);\nuser_pref("network.predictor.enable-prefetch", false);\nuser_pref("network.predictor.cleaned-up", true);\nuser_pref("network.prefetch-next", false);\nuser_pref("network.preload", false);\nuser_pref("network.protocol-handler.external.ms-windows-store", false);\nuser_pref("network.proxy.socks_remote_dns", true);\nuser_pref("network.trr.blocklist_cleanup_done", true);\nuser_pref("network.trr.mode", 5);\n\nuser_pref("pdfjs.disabled", false);\nuser_pref("pdfjs.enabledCache.state", true);\nuser_pref("pdfjs.enableScripting", false);\nuser_pref("pdfjs.migrationVersion", 2);\nuser_pref("permissions.default.camera", 2);\nuser_pref("permissions.default.desktop-notification", 2);\nuser_pref("permissions.default.geo", 2);\nuser_pref("permissions.default.microphone", 2);\nuser_pref("permissions.default.xr", 2);\nuser_pref("permissions.delegation.enabled", false);\nuser_pref("permissions.manager.defaultsUrl", "");\nuser_pref("privacy.annotate_channels.strict_list.enabled", true);\nuser_pref("privacy.clearOnShutdown.cache", false);\nuser_pref("privacy.clearOnShutdown.cookies", false);\nuser_pref("privacy.clearOnShutdown.downloads", true);\nuser_pref("privacy.clearOnShutdown.formdata", true);\nuser_pref("privacy.clearOnShutdown.history", false);\nuser_pref("privacy.clearOnShutdown.offlineApps", false);\nuser_pref("privacy.clearOnShutdown.sessions", true);\nuser_pref("privacy.clearsitedata.cache.enabled", false);\nuser_pref("privacy.cpd.cache", false);\nuser_pref("privacy.cpd.cookies", false);\nuser_pref("privacy.cpd.formdata", true);\nuser_pref("privacy.cpd.history", false);\nuser_pref("privacy.cpd.offlineApps", false);\nuser_pref("privacy.cpd.sessions", true);\nuser_pref("privacy.donottrackheader.enabled", true);\nuser_pref("privacy.firstparty.isolate", false);\nuser_pref("privacy.globalprivacycontrol.enabled", true);\nuser_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);\nuser_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false);\nuser_pref("privacy.partition.network_state.ocsp_cache", true);\nuser_pref("privacy.partition.serviceWorkers", true);\nuser_pref("privacy.query_stripping.enabled.pbmode", true);\n/* RFP may break firefox chrome & web page */\nuser_pref("privacy.resistFingerprinting", false);\nuser_pref("privacy.resistFingerprinting.block_mozAddonManager", false);\nuser_pref("privacy.resistFingerprinting.letterboxing", false);\nuser_pref("privacy.sanitize.sanitizeOnShutdown", true);\nuser_pref("privacy.sanitize.timeSpan", 0);\nuser_pref("privacy.trackingprotection.enabled", true);\nuser_pref("privacy.trackingprotection.socialtracking.enabled", true);\nuser_pref("privacy.trackingprotection.introCount", 20);\nuser_pref("privacy.userContext.enabled", true);\nuser_pref("privacy.userContext.ui.enabled", true);\nuser_pref("privacy.window.maxInnerHeight", 900);\nuser_pref("privacy.window.maxInnerWidth", 1600);\n\nuser_pref("reader.parse-on-load.enabled", false);\n\nuser_pref("security.cert_pinning.enforcement_level", 2);\nuser_pref("security.dialog_enable_delay", 1000);\nuser_pref("security.family_safety.mode", 0);\nuser_pref("security.OCSP.enabled", 1);\nuser_pref("security.OCSP.require", true);\nuser_pref("security.pki.crlite_mode", 2);\nuser_pref("security.remote_settings.crlite_filters.enabled", true);\nuser_pref("security.ssl.require_safe_negotiation", true);\nuser_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);\nuser_pref("security.tls.enable_0rtt_data", false);\nuser_pref("security.tls.version.enable-deprecated", false);\nuser_pref("services.sync.engine.bookmarks", false);\nuser_pref("services.sync.engine.creditcards", false);\nuser_pref("services.sync.engine.history", false);\nuser_pref("services.sync.engine.tabs", false);\nuser_pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);\nuser_pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);\nuser_pref("services.sync.prefs.sync.spellchecker.dictionary", false);\nuser_pref("signon.autofillForms", false);\nuser_pref("signon.formlessCapture.enabled", false);\nuser_pref("signon.generation.enabled", false);\nuser_pref("signon.management.page.breach-alerts.enabled", false);\nuser_pref("signon.rememberSignons", true);\nuser_pref("social.directories", "");\nuser_pref("social.remote-install.enabled", false);\nuser_pref("social.toast-notifications.enabled", false);\nuser_pref("social.whitelist", "");\n\nuser_pref("toolkit.coverage.endpoint.base", "");\nuser_pref("toolkit.coverage.opt-out", true);\nuser_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);\nuser_pref("toolkit.telemetry.archive.enabled", false);\nuser_pref("toolkit.telemetry.coverage.opt-out", true);\nuser_pref("toolkit.telemetry.updatePing.enabled", false);\nuser_pref("toolkit.telemetry.bhrPing.enabled", false);\nuser_pref("toolkit.telemetry.enabled", false);\nuser_pref("toolkit.telemetry.firstShutdownPing.enabled", false);\nuser_pref("toolkit.telemetry.hybridContent.enabled", false);\nuser_pref("toolkit.telemetry.newProfilePing.enabled", false);\nuser_pref("toolkit.telemetry.reportingpolicy.firstRun", false);\nuser_pref("toolkit.telemetry.shutdownPingSender.enabled", false);\nuser_pref("toolkit.telemetry.server", "data:,");\nuser_pref("toolkit.telemetry.unified", false);\nuser_pref("toolkit.winRegisterApplicationRestart", false);\n\nuser_pref("ui.prefersReducedMotion", 0);\nuser_pref("ui.systemUsesDarkTheme", 1);\n\nuser_pref("webchannel.allowObject.urlWhitelist", "");\nuser_pref("webgl.disabled", false);\nuser_pref("webgl.enable-webgl2", true);\nuser_pref("webgl.force-enabled", true);\nuser_pref("widget.non-native-theme.enabled", true);\n/* 0: platform default; 1: macOS; 2: GTK; 3: Android; 4: Windows 10; 5: Windows 11 */\nuser_pref("widget.non-native-theme.scrollbar.style", 3);\nuser_pref("widget.gtk.overlay-scrollbars.enabled", true);\nuser_pref("widget.non-native-theme.win11.scrollbar.force-overlay-style", true);\n'})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>a});var n=s(7294);const o={},t=n.createContext(o);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);