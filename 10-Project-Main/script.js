#!/usr/bin/node

let splashTitle = document.title;

window.addEventListener('blur', () => document.title = 'Come Back!');
window.addEventListener('focus', () => document.title = splashTitle);

function tabSwitching(evt, tabIDs) {
    var i, tabPanelContents, tabButtons;
    tabPanelContents = document.getElementsByClassName("tabPanelContents");
    for (i = 0; i < tabPanelContents.length; i++) {
        tabPanelContents[i].style.display = "none";
        }
    tabButtons = document.getElementsByClassName("tabButtons");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
        }
    document.getElementById(tabIDs).style.display = "flex";
    evt.currentTarget.className += " active";
    if (tabIDs === 'iFrame-Tab'){
            document.getElementById('closeTabPage').style.display = "none";
        }
    else {
            document.getElementById('closeTabPage').style.display = "flex";
        }
} ; document.getElementById('Archives-and-Bookmarks-Button').click();

document.getElementById('fv_redketchup').onclick = () => window.open('https://redketchup.io/','_blank');
document.getElementById('fv_base64Converter').onclick = () => window.open('https://www.base64encoder.io/image-to-base64-converter/','_blank');
document.getElementById('fv_fontGuru').onclick = () => window.open('https://www.fontgeneratorguru.com/','_blank');
document.getElementById('fv_discord').onclick = () => window.open('https://discord.com/channels/@me','_blank');
document.getElementById('fv_wolframeAlpha').onclick = ( )=> window.open('https://www.wolframalpha.com/','_blank');
document.getElementById('fv_conversio').onclick = () => window.open('https://convertio.co/','_blank');

document.getElementById('ac_homepage').onclick = () => window.open('https://brightspace.algonquincollege.com/d2l/home','_blank');
document.getElementById('ac_library').onclick = () => window.open('https://www.algonquincollege.com/library/','_blank');
document.getElementById('ac_acsis').onclick = () => window.open('https://acsis.algonquincollege.com/students/time.aspx','_blank');
document.getElementById('ac_software').onclick = () => window.open('https://algonquincollege.onthehub.com/WebStore/ShopperResources.aspx?cmi_cs=1&cmi_mnuMain=c1879e3f-112e-e411-9403-b8ca3a5db7a1','_blank');
document.getElementById('ac_eventbrite').onclick = () => window.open('https://www.eventbrite.ca/e/level-up-your-learning-preparing-for-spring-semester-tickets-322788227277','_blank');

document.getElementById("pt_ahkdocumentation").onclick = () => window.open('https://documentation.help/AutoHotKey-Functions/','_blank');
document.getElementById("pt_automator").onclick = () => window.open('https://www.the-automator.com/','_blank');
document.getElementById("pt_javapoint").onclick = () => window.open('https://compiler.javatpoint.com/opr/test.jsp?filename=Simple','_blank');
document.getElementById("pt_github").onclick = () => window.open('https://github.com/','_blank');
document.getElementById("pt_githubcodespace").onclick = () => window.open('https://caninetable-congenial-memory-g9x4wv9rg9g2v97w.github.dev/','_blank');
document.getElementById("pt_w3School").onclick = () => window.open('https://www.w3schools.com/','_blank');
document.getElementById("pt_openjfx").onclick = () => window.open('https://openjfx.io/','_blank');
document.getElementById("pt_overapi").onclick = () => window.open('https://overapi.com/','_blank');
document.getElementById("pt_chatgpt").onclick = () => window.open('https://openai.com/blog/chatgpt/','_blank');
document.getElementById("pt_lucidchart").onclick = () => window.open('https://www.lucidchart.com/pages/','_blank');
document.getElementById("pt_regex").onclick = () => window.open('https://www.regular-expressions.info/lookaround.html','_blank');
document.getElementById("pt_browserling").onclick = () => window.open('https://www.browserling.com/tools/text-from-regex','_blank');
document.getElementById("pt_ahkdocumentation").onclick = () => window.open('https://documentation.help/AutoHotKey-Functions/','_blank');
document.getElementById("pt_automator").onclick = () => window.open('https://www.the-automator.com/','_blank');
document.getElementById("pt_javapoint").onclick = () => window.open('https://compiler.javatpoint.com/opr/test.jsp?filename=Simple','_blank');
document.getElementById("pt_github").onclick = () => window.open('https://github.com/','_blank');
document.getElementById("pt_githubcodespace").onclick = () => window.open('https://caninetable-congenial-memory-g9x4wv9rg9g2v97w.github.dev/','_blank');
document.getElementById("pt_w3School").onclick = () => window.open('https://www.w3schools.com/','_blank');
document.getElementById("pt_openjfx").onclick = () => window.open('https://openjfx.io/','_blank');
document.getElementById("pt_overapi").onclick = () => window.open('https://overapi.com/','_blank');
document.getElementById("pt_chatgpt").onclick = () => window.open('https://openai.com/blog/chatgpt/','_blank');
document.getElementById("pt_lucidchart").onclick = () => window.open('https://www.lucidchart.com/pages/','_blank');s
document.getElementById("pt_regex").onclick = () => window.open('https://www.regular-expressions.info/lookaround.html','_blank');
document.getElementById("pt_browserling").onclick = () => window.open('https://www.browserling.com/tools/text-from-regex','_blank');

document.getElementById("ln_bashguide").onclick = () => window.open('https://tldp.org/LDP/Bash-Beginners-Guide/html/index.html','_blank');
document.getElementById("ln_learningtheshell").onclick = () => window.open('https://linuxcommand.org/lc3_learning_the_shell.php','_blank');
document.getElementById("ln_devhints").onclick = () => window.open('https://devhints.io/bash','_blank');
document.getElementById("ln_linuxjourney").onclick = () => window.open('https://linuxjourney.com/','_blank');
document.getElementById("ln_linux").onclick = () => window.open('https://www.linux.com/','_blank');
document.getElementById("ln_gnu").onclick = () => window.open('https://www.gnu.org/','_blank');
document.getElementById("ln_linfo").onclick = () => window.open('http://www.linfo.org/','_blank');
document.getElementById("ln_tutorialspoint").onclick = () => window.open('https://www.tutorialspoint.com/unix/index.htm','_blank');
document.getElementById("ln_vimadventures").onclick = () => window.open('https://vim-adventures.com/','_blank');

document.getElementById("wd_cmdreference").onclick = () => window.open('https://ss64.com/','_blank');
document.getElementById("wd_windowshelp").onclick = () => window.open('https://support.microsoft.com/en-us/windows','_blank');
document.getElementById("wd_certifications").onclick = () => window.open('https://learn.microsoft.com/en-us/users/caninetable-8133/?section=activity','_blank');
document.getElementById("wd_hwiegmandesktopini").onclick = () => window.open('https://hwiegman.home.xs4all.nl/desktopini.html','_blank');

document.getElementById("nw_computersolutions").onclick = () => window.open('https://www.orbit-computer-solutions.com/','_blank');
document.getElementById("nw_submarinecablemap").onclick = () => window.open('https://www.submarinecablemap.com/','_blank');
document.getElementById("nw_wiresharkOUI").onclick = () => window.open('https://www.wireshark.org/tools/oui-lookup.html','_blank');
document.getElementById("nw_cisco").onclick = () => window.open('https://id.cisco.com/','_blank');

document.getElementById("ascii_fontguru").onclick = () => window.open('https://www.fontgeneratorguru.com/','_blank');
document.getElementById("ascii_fontspace").onclick = () => window.open('https://www.fontspace.com/','_blank');
document.getElementById("ascii_coolsymbols").onclick = () => window.open('https://coolsymbol.com/','_blank');
document.getElementById("ascii_code").onclick = () => window.open('https://www.dcode.fr/ascii-code','_blank');
document.getElementById("ascii_pictureartgenerator").onclick = () => window.open('https://convertcase.net/ascii-art-generator/','_blank');
document.getElementById("ascii_wordartgenerator").onclick = () => window.open('https://www.developmenttools.com/ascii-art-generator/#p=testall&h=3&f=3D-ASCII&t=C%20E%20N%20T%20O%20S%208','_blank');
document.getElementById("ascii_photoartgenerator").onclick = () => window.open('https://ascii-generator.site/','_blank');
document.getElementById("ascii_utf8icons").onclick = () => window.open('https://utf8-icons.com/','_blank');
document.getElementById("ascii_manytools").onclick = () => window.open('https://manytools.org/hacker-tools/convert-images-to-ascii-art/','_blank');
document.getElementById("ascii_thefancy").onclick = () => window.open('https://www.thefancytext.com/','_blank');
document.getElementById("ascii_thecool").onclick = () => window.open('https://www.coolgenerator.com/book-title-generator','_blank');

document.getElementById("en_lorem").onclick = () => window.open('https://lipsum.com/','_blank');
document.getElementById("en_hyperwrite").onclick = () => window.open('https://hyperwriteai.com/','_blank');
document.getElementById("en_ieeecitationgenerator").onclick = () => window.open('https://www.mybib.com/tools/ieee-citation-generator','_blank');
document.getElementById("en_ipl").onclick = () => window.open('https://www.ipl.org/','_blank');
document.getElementById("en_socialself").onclick = () => window.open('https://socialself.com/','_blank');

document.getElementById("ma_rapidtables").onclick = () => window.open('https://www.rapidtables.com/calc/math/base-calculator.html','_blank');
document.getElementById("ma_coderstoolbox").onclick = () => window.open('https://coderstoolbox.net/number/','_blank');
document.getElementById("ma_unitconversions").onclick = () => window.open('http://www.unit-conversion.info/','_blank');
document.getElementById("ma_wolframealpha").onclick = () => window.open('https://www.wolframalpha.com/','_blank');
document.getElementById("ma_precisioncalculator").onclick = () => window.open('https://www.mathsisfun.com/calculator-precision.html','_blank');
document.getElementById("ma_mathcha").onclick = () => window.open('https://www.mathcha.io/editor','_blank');
document.getElementById("ma_boolean_algebra").onclick = () => window.open('https://www.boolean-algebra.com/','_blank');
document.getElementById("ma_emathhelp").onclick = () => window.open('https://www.emathhelp.net/calculators/discrete-mathematics/boolean-algebra-calculator/','_blank');

document.getElementById("ss_youtube").onclick = () => window.open('https://www.youtube.com/','_blank');
document.getElementById("ss_netflix").onclick = () => window.open('https://www.netflix.com/browse','_blank');
document.getElementById("ss_123moviesto").onclick = () => window.open('https://123movies-to.org/','_blank');
document.getElementById("ss_123moviesfree").onclick = () => window.open('https://ww1.123moviesfree.net/','_blank');
document.getElementById("ss_fmoviesfree").onclick = () => window.open('https://ww3.fmoviefree.net/','_blank');
document.getElementById("ss_gmovies").onclick = () => window.open('https://gomovies.sx/','_blank');
document.getElementById("ss_hdtoday").onclick = () => window.open('https://hdtoday.tv/','_blank');
document.getElementById("ss_soaptodayfree").onclick = () => window.open('https://w1.soap2dayfree.com/','_blank');
document.getElementById("ss_9anime").onclick = () => window.open('https://9anime.vc/','_blank');
document.getElementById("ss_kissanime").onclick = () => window.open('https://kissanime.com.ru/','_blank');
document.getElementById("ss_4_anime").onclick = () => window.open('https://4anime.gg/','_blank');
document.getElementById("ss_123moviefree02e").onclick = () => window.open('https://123moviefree.cyou/','_blank');

document.getElementById("cv_conversio").onclick = () => window.open('https://convertio.co/','_blank');
document.getElementById("cv_freeconvert").onclick = () => window.open('https://www.freeconvert.com/','_blank');
document.getElementById("cv_ilovepdfs").onclick = () => window.open('https://www.ilovepdf.com/edit-pdf','_blank');
document.getElementById("cv_redketchup").onclick = () => window.open('https://redketchup.io/','_blank');
document.getElementById("cv_imagetopdfconverter").onclick = () => window.open('https://pngpdf.com/','_blank');
document.getElementById("cv_getmp3").onclick = () => window.open('https://getn.topsandtees.space/1YEogq8rP1','_blank');
document.getElementById("cv_youtubetomp3").onclick = () => window.open('https://ytmusichub.com/','_blank');
document.getElementById("cv_onlymp3").onclick = () => window.open('https://en.onlymp3.to/65/','_blank');
document.getElementById("cv_y2matemp3").onclick = () => window.open('https://y2matemp3.online/','_blank');
document.getElementById("cv_ytmp3hub").onclick = () => window.open('https://ytmp3hub.com/','_blank');
document.getElementById("cv_onlineconvert").onclick = () => window.open('https://www.online-convert.com/','_blank');
document.getElementById("cv_videotogif").onclick = () => window.open('https://imgur.com/vidgif','_blank');
document.getElementById("cv_videotogif").onclick = () => window.open('https://www.y2mate.com/youtube/0YAHK9rDd9c#','_blank');
document.getElementById("cv_yout").onclick = () => window.open('https://yout.com/','_blank');
document.getElementById("cv_cloudconvert").onclick = () => window.open('https://cloudconvert.com/','_blank');

document.getElementById("ed_backgroundremover").onclick = () => window.open('https://www.remove.bg/','_blank');
document.getElementById("ed_pixmiller").onclick = () => window.open('https://pixmiller.com/','_blank');
document.getElementById("ed_whiteremover").onclick = () => window.open('https://remove-white-background.imageonline.co/','_blank');
document.getElementById("ed_veed").onclick = () => window.open('https://www.veed.io/tools/video-editor/gif-editor','_blank');
document.getElementById("ed_filmora").onclick = () => window.open('https://filmora.wondershare.com/meme-maker/','_blank');
document.getElementById("ed_clideo").onclick = () => window.open('https://clideo.com/merge-video','_blank');
document.getElementById("ed_squoosh").onclick = () => window.open('https://squoosh.app/','_blank');
document.getElementById("ed_pdfescape").onclick = () => window.open('https://www.pdfescape.com/','_blank');

document.getElementById("co_devianart").onclick = () => window.open('https://www.deviantart.com/pendragon1966/art/Steampunk-Victorian-JS-Executable-File-Icon-338191225','_blank');
document.getElementById("co_discadia").onclick = () => window.open('https://discadia.com/','_blank');
document.getElementById("co_giphy").onclick = () => window.open('https://giphy.com/','_blank');
document.getElementById("co_tenor").onclick = () => window.open('https://tenor.com/search/-gifs','_blank');
document.getElementById("co_hotsymbol").onclick = () => window.open('https://www.hotsymbol.com/','_blank');
document.getElementById("co_icon_archive").onclick = () => window.open('https://iconarchive.com/','_blank');
document.getElementById("co_icon8").onclick = () => window.open('https://icons8.com/icons/','_blank');
document.getElementById("co_the_noun_project").onclick = () => window.open('https://thenounproject.com/','_blank');
document.getElementById("co_shutter").onclick = () => window.open('https://www.shutterstock.com/','_blank');
document.getElementById("co_pixbay").onclick = () => window.open('https://pixabay.com/','_blank');
document.getElementById("co_cleanpng").onclick = () => window.open('https://www.cleanpng.com/','_blank');
document.getElementById("co_pixlr").onclick = () => window.open('https://pixlr.com/','_blank');

document.getElementById("ad_creativecloud").onclick = () => window.open('https://creativecloud.adobe.com/cc/?locale=en','_blank');
document.getElementById("ad_adobeacrobat").onclick = () => window.open('https://acrobat.adobe.com/link/home/','_blank');
document.getElementById("ad_adobeexpress").onclick = () => window.open('https://express.adobe.com/sp/','_blank');
document.getElementById("ad_adobecolor").onclick = () => window.open('https://color.adobe.com/create/color-wheel','_blank');
document.getElementById("ad_lightroom").onclick = () => window.open('https://lightroom.adobe.com/home','_blank');
document.getElementById("ad_portfolio").onclick = () => window.open('https://portfolio.adobe.com/sites','_blank');
document.getElementById("ad_stock").onclick = () => window.open('https://stock.adobe.com/ca/','_blank');
document.getElementById("ad_fonts").onclick = () => window.open('https://fonts.adobe.com/?referrer=cd932b4812','_blank');
document.getElementById("ad_photoshop").onclick = () => window.open('https://creativecloud.adobe.com/cc/photoshop','_blank');
document.getElementById("ad_experienceleaguecommunity").onclick = () => window.open('https://experienceleague.adobe.com/#home','_blank');

document.getElementById("go_google").onclick = () => window.open('https://www.google.com/','_blank');
document.getElementById("go_letmegooglethatforyou").onclick = () => window.open('https://letmegooglethat.com/','_blank');
document.getElementById("go_docs").onclick = () => window.open('https://docs.google.com/document/u/0/','_blank');
document.getElementById("go_googleforms").onclick = () => window.open('https://docs.google.com/forms/u/0/','_blank');
document.getElementById("go_googlekeep").onclick = () => window.open('https://keep.google.com/','_blank');
document.getElementById("go_googlepresentation").onclick = () => window.open('https://docs.google.com/presentation/u/0/','_blank');
document.getElementById("go_googlespreadsheets").onclick = () => window.open('https://docs.google.com/spreadsheets/u/0/','_blank');
document.getElementById("go_googlemail").onclick = () => window.open('https://mail.google.com/mail/u/0/','_blank');
document.getElementById("go_googletranslate").onclick = () => window.open('https://translate.google.ca/?lfhs=2','_blank');
document.getElementById("go_googledrive").onclick = () => window.open('https://drive.google.com/drive/my-drive','_blank');
document.getElementById("go_blogger").onclick = () => window.open('https://www.blogger.com/blog/posts/3317496192245700785?tab=oj','_blank');
document.getElementById("go_gprivate").onclick = () => window.open('https://gprivate.com/search/index.html?q=#gsc.q=https://gprivate.com/','_blank');
document.getElementById("go_webstore").onclick = () => window.open('https://chrome.google.com/webstore/category/extensions','_blank');

document.getElementById("mo_outlook").onclick = () => window.open('https://outlook.office365.com/mail/','_blank');
document.getElementById("mo_onedrive").onclick = () => window.open('https://algonquinlivecom-my.sharepoint.com/personal/stro0123_algonquinlive_com/_layouts/15/onedrive.aspx','_blank');
document.getElementById("mo_word").onclick = () => window.open('https://www.office.com/launch/word?auth=2','_blank');
document.getElementById("mo_excel").onclick = () => window.open('https://www.office.com/launch/excel?auth=2','_blank');
document.getElementById("mo_powerpoint").onclick = () => window.open('https://www.office.com/launch/powerpoint?auth=2','_blank');
document.getElementById("mo_onenote").onclick = () => window.open('https://www.office.com/launch/onenote?auth=2','_blank');
document.getElementById("mo_sway").onclick = () => window.open('https://www.office.com/launch/sway?auth=2','_blank');
document.getElementById("mo_forms").onclick = () => window.open('https://www.office.com/launch/forms?auth=2','_blank');
document.getElementById("mo_stream").onclick = () => window.open('https://www.office.com/launch/stream?auth=2','_blank');
document.getElementById("mo_visco").onclick = () => window.open('https://www.office.com/launch/visio?auth=2','_blank');
document.getElementById("mo_planner").onclick = () => window.open('https://tasks.office.com/AlgonquinLivecom.onmicrosoft.com/en-US/Home/Planner/','_blank');
document.getElementById("mo_sharepoint").onclick = () => window.open('https://algonquinlivecom-my.sharepoint.com/personal/stro0123_algonquinlive_com/_layouts/15/Lists.aspx?login_hint=stro0123%40algonquinlive%2Ecom','_blank');
document.getElementById("mo_powerbi").onclick = () => window.open('https://app.powerbi.com/?tenant=ec1bd924-0a6a-4aa9-aa89-c980316c0449','_blank');
document.getElementById("mo_powerapps").onclick = () => window.open('https://make.powerapps.com/environments/Default-ec1bd924-0a6a-4aa9-aa89-c980316c0449/home?utm_source=office&utm_medium=app_launcher&utm_campaign=office_referrals','_blank');
document.getElementById("mo_powerautomate").onclick = () => window.open('https://make.powerautomate.com/environments/Default-ec1bd924-0a6a-4aa9-aa89-c980316c0449/home?auth_upn=stro0123%40algonquinlive.com&utm_source=office&utm_medium=app_launcher&utm_campaign=office_referrals&showFeaturedTemplates=true&fromflowportal=true','_blank');
document.getElementById("mo_delve").onclick = () => window.open('https://can.delve.office.com/','_blank');
document.getElementById("mo_projects").onclick = () => window.open('https://project.microsoft.com/AlgonquinLivecom.onmicrosoft.com/en-US?mkt=en-US','_blank');
document.getElementById("mo_sharepoint").onclick = () => window.open('https://algonquinlivecom.sharepoint.com/_layouts/15/sharepoint.aspx','_blank');
document.getElementById("mo_todo").onclick = () => window.open('https://to-do.office.com/tasks/today?utm_source=applauncher','_blank');
document.getElementById("mo_bing").onclick = () => window.open('https://www.bing.com/?FORM=Z9FD1','_blank');
document.getElementById("mo_azureportal").onclick = () => window.open('https://portal.azure.com/#view/Microsoft_Azure_Education/EducationMenuBlade/~/overview','_blank');

document.getElementById("ar_10minutemail").onclick = () => window.open('https://10minutemail.com/','_blank');
document.getElementById("ar_protonmail").onclick = () => window.open('https://account.proton.me/login','_blank');
document.getElementById("ar_fileinfo").onclick = () => window.open('https://fileinfo.com/','_blank');
document.getElementById("ar_hcaptcha").onclick = () => window.open('https://dashboard.hcaptcha.com/login','_blank');
document.getElementById("ar_duckduckgo").onclick = () => window.open('https://start.duckduckgo.com/?t=crhs','_blank');
document.getElementById("ar_yandex_browser").onclick = () => window.open('https://yandex.com/','_blank');
document.getElementById("ar_maxask").onclick = () => window.open('https://i.maxask.com/','_blank');
document.getElementById("ar_ecosia").onclick = () => window.open('https://www.ecosia.org/','_blank');
document.getElementById("ar_yahoo").onclick = () => window.open('https://ca.yahoo.com/?p=us&guccounter=1&guce_referrer=aHR0cHM6Ly9pLm1heGFzay5jb20v&guce_referrer_sig=AQAAADBuClRXEN0iLwtAYvSF49hoWNabiuz60HUEsS2XJJidmZKgXLXCgqGy4PO1J0gShfCjCVQziXsrud_Zr5mbDmYK7-mqnItuLcD_xgw5Dikjb6BE2GSS_z0bdSVK6dGriVF9_Oo6zCDOb_AIyA3Dowtd1_e_JtvuJAtRS1U_4nAp','_blank');
document.getElementById("ar_weather").onclick = () => window.open('https://www.accuweather.com','_blank');
document.getElementById("ar_crazygames").onclick = () => window.open('https://www.crazygames.com/','_blank');
document.getElementById("ar_base64encoder").onclick = () => window.open('https://www.base64encoder.io/','_blank');
document.getElementById("ar_discord").onclick = () => window.open('https://discord.com/channels/@me','_blank');
document.getElementById("ar_reddit").onclick = () => window.open('https://www.reddit.com/','_blank');
document.getElementById("ar_pinterest").onclick = () => window.open('https://www.pinterest.ca/','_blank');
document.getElementById("ar_imagereader").onclick = () => window.open('https://webbrowsertools.com/image-reader/','_blank');
document.getElementById("ar_archives").onclick = () => window.open('https://archive.org/','_blank');
document.getElementById("ar_quackit").onclick = () => window.open('https://www.quackit.com/','_blank');
document.getElementById("ar_shapecatcher").onclick = () => window.open('https://shapecatcher.com/','_blank');
document.getElementById("ar_cobratate").onclick = () => window.open('https://cobratate.com/','_blank');
document.getElementById("ar_gettr").onclick = () => window.open('https://gettr.com/','_blank');
document.getElementById("ar_videoglancer").onclick = () => window.open('https://videoglancer.com/','_blank');
document.getElementById("ar_haveibeenpwned").onclick = () => window.open('https://haveibeenpwned.com/','_blank');
document.getElementById("ar_tutanota").onclick = () => window.open('https://mail.tutanota.com/login?noAutoLogin=false','_blank');
document.getElementById("ar_proton").onclick = () => window.open('https://account.proton.me/switch','_blank');
document.getElementById("ar_anonymsms").onclick = () => window.open('https://anonymsms.com/','_blank');
document.getElementById("ar_isgd").onclick = () => window.open('https://is.gd/','_blank');
document.getElementById("ar_followchain").onclick = () => window.open('https://www.followchain.org','_blank');
document.getElementById("ar_softonic").onclick = () => window.open('https://en.softonic.com/','_blank');
document.getElementById("ar_filehippo").onclick = () => window.open('https://filehippo.com/','_blank');
document.getElementById("ar_ninite").onclick = () => window.open('https://ninite.com/','_blank');
document.getElementById("ar_alternativeto").onclick = () => window.open('https://alternativeto.net/','_blank');
document.getElementById("ar_random").onclick = () => window.open('https://www.random.org/','_blank');
document.getElementById("ar_randomlists").onclick = () => window.open('https://www.randomlists.com/','_blank');
document.getElementById("ar_jit_si").onclick = () => window.open('https://meet.jit.si/','_blank');
document.getElementById("ar_fast").onclick = () => window.open('https://fast.com/','_blank');
document.getElementById("ar_everytimezone").onclick = () => window.open('https://everytimezone.com/','_blank');
document.getElementById("ar_namechk").onclick = () => window.open('https://namechk.com/','_blank');
document.getElementById("ar_downforeveryoneorjustme").onclick = () => window.open('https://downforeveryoneorjustme.com/','_blank');
document.getElementById("ar_privnote").onclick = () => window.open('https://privnote.com/','_blank');
document.getElementById("ar_diffchecker").onclick = () => window.open('https://www.diffchecker.com/','_blank');

function dateDisplay() {
    let setDate = document.getElementById('DateandTime');
    let date = new Date();
    let hours = date.getHours();
    let hour = hours;
    let amPM = hours < 12 ? 'AM' : 'PM';
    let minutes = date.getMinutes();
    let minute = minutes <= 9 ? "0" + minutes : minutes;
    let seconds = date.getSeconds();
    let second = seconds <= 9 ? "0" + seconds : seconds;
    let year = date.getFullYear()
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = date.getMonth()
    let weeks = [,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let week = date.getDay();
    let day = date.getDate();
    setDate.innerText = `${weeks[week]}, ${months[month]} ${day}, ${year}\n${hour}:${minute}:${second} ${amPM}`
}

setInterval(dateDisplay, 1000);