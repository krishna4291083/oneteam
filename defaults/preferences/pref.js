//pref("toolkit.defaultChromeURI", "chrome://oneteam/content/main.xul");
//pref("toolkit.singletonWindowType", "ot:main");
/* debugging prefs */
pref("browser.dom.window.dump.enabled", true);
pref("javascript.options.showInConsole", true);
//pref("javascript.options.strict", true);
pref("nglayout.debug.disable_xul_cache", true);
pref("nglayout.debug.disable_xul_fastload", true);

/*

pref("browser.preferences.animateFadeIn", true);
pref("browser.preferences.instantApply", false);


pref("xpinstall.dialog.confirm", "chrome://mozapps/content/xpinstall/xpinstallConfirm.xul");
pref("xpinstall.dialog.progress.skin", "chrome://mozapps/content/extensions/extensions.xul?type=themes");
pref("xpinstall.dialog.progress.chrome", "chrome://mozapps/content/extensions/extensions.xul?type=extensions");
pref("xpinstall.dialog.progress.type.skin", "Extension:Manager-themes");
pref("xpinstall.dialog.progress.type.chrome", "Extension:Manager-extensions");

pref("extensions.update.enabled", true);
pref("extensions.update.interval", 86400);
pref("extensions.dss.enabled", false);
pref("extensions.dss.switchPending", false);
pref("extensions.ignoreMTimeChanges", false);
pref("extensions.logging.enabled", false);
pref("extensions.update.url", "chrome://mozapps/locale/extensions/extensions.properties");
pref("extensions.getMoreExtensionsURL", "chrome://mozapps/locale/extensions/extensions.properties");
pref("extensions.getMoreThemesURL", "chrome://mozapps/locale/extensions/extensions.properties");

// make sure http, etc go through the external protocol handler:
pref("network.protocol-handler.expose-all", false);
// suppress external-load warning for standard browser schemes
pref("network.protocol-handler.warn-external.http", false);
pref("network.protocol-handler.warn-external.https", false);
pref("network.protocol-handler.warn-external.ftp", false);
pref("network.protocol-handler.warn-external.mailto", false);
*/
pref ("general.skins.selectedSkin","");

pref("chat.connection.priority", 5);
pref("chat.connection.base", "http-poll");
pref("chat.connection.resource", "OneTeam");
pref("chat.connection.host", "process-one.net");
pref("chat.connection.port", 5222);
pref("chat.connection.type", "native");
pref("chat.connection.ssl", false);
pref("chat.connection.overridehost", false);

pref("chat.roster.showoffline", false);
pref("chat.roster.filtered", false);
pref("chat.roster.showemptygroup", true);
pref("chat.roster.filtergroups", false);
pref("chat.roster.sortbystatus", false);

pref("chat.sounds",true);

pref("chat.muc.nickname", "");

pref("chat.general.showavatars", true);
pref("chat.general.bumppriority", true);
pref("chat.general.showseparatedwindows",false);
pref("chat.general.keepproperties", false);
pref("chat.general.iconset", "oneteam");
pref("chat.general.smilesset", "oneteam");

pref("chat.messages.colors", "#ff0000,#6978a3,#46a,#c4d,#3b3,#fa4,#79c,#a7a,#4ca,#c66,#aaa,#ca0,#770,#5cc");

pref("chat.editor.font", "serif");
pref("chat.editor.size", 5);

pref("chat.status.autoaway", true);
pref("chat.status.autoaway.time",5);
pref("chat.status.autoxa", true);
pref("chat.status.autoxa.time",10);
