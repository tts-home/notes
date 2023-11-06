"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[3353],{9035:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>_,metadata:()=>l,toc:()=>r});var o=e(5893),a=e(1151);const _={},i="Kitty",l={id:"tool/shell/kitty",title:"Kitty",description:"Config",source:"@site/docs/tool/shell/kitty.md",sourceDirName:"tool/shell",slug:"/tool/shell/kitty",permalink:"/notes/tool/shell/kitty",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DevOps Commands",permalink:"/notes/tool/shell/devops_commands"},next:{title:"PowerShell",permalink:"/notes/tool/shell/poswer_shell"}},s={},r=[{value:"Config",id:"config",level:2}];function m(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"kitty",children:"Kitty"}),"\n",(0,o.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://sw.kovidgoyal.net/kitty/conf/#sample-kitty-conf",children:"https://sw.kovidgoyal.net/kitty/conf/#sample-kitty-conf"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-conf",children:'# Font\nfont_family      Liberation Mono Bold\nbold_font        Liberation Mono\nitalic_font      Liberation Mono\nbold_italic_font Liberation Mono\nsymbol_map U+4E00-U+9FA5,U+9FA6-U+9FFF,U+3400-U+4DBF,U+20000-U+2A6DF,U+2A700-U+2B738 YaoSans\nsymbol_map U+2B740-U+2B81D,U+2B820-U+2CEA1,U+2CEB0-U+2EBE0,U+30000-U+3134A,U+2F00-U+2FD5 YaoSans\nsymbol_map U+2E80-U+2EF3,U+F900-U+FAD9,U+2F800-U+2FA1D,U+E815-U+E86F,U+E400-U+E5E8 YaoSans\nsymbol_map U+E600-U+E6CF,U+31C0-U+31E3,U+2FF0-U+2FFB,U+3105-U+312F,U+31A0-U+31BA,U+3007 YaoSans\nsymbol_map U+E0A0-U+E0A3,U+E0C0-U+E0C7 PowerlineSymbols\nfont_size 13.0\nforce_ltr no\ndisable_ligatures never\nbox_drawing_scale 0.001, 1, 1.5, 2\nadjust_line_height  0\nadjust_column_width 0\nadjust_baseline 0\n\n# Cursor\ncursor #cccccc\ncursor_text_color #111111\ncursor_shape block\ncursor_beam_thickness 1.5\ncursor_underline_thickness 2.0\ncursor_blink_interval -1\ncursor_stop_blinking_after 15.0\n\n# Scrollback\nscrollback_lines 2000\nscrollback_pager less --chop-long-lines --RAW-CONTROL-CHARS +INPUT_LINE_NUMBER\nscrollback_pager_history_size 0\nscrollback_fill_enlarged_window no\nwheel_scroll_multiplier 5.0\nwheel_scroll_min_lines 1\ntouch_scroll_multiplier 1.0\n\n# Mouse\nmouse_hide_wait 3.0\nurl_color #0087bd\nurl_style curly\nopen_url_with default\nurl_prefixes file ftp ftps gemini git gopher http https irc ircs kitty mailto news sftp ssh\ndetect_urls yes\ncopy_on_select no\npaste_actions quote-urls-at-prompt\nstrip_trailing_spaces never\nselect_by_word_characters @-./_~?&=%+#\nclick_interval -1.0\nfocus_follows_mouse no\npointer_shape_when_grabbed arrow\ndefault_pointer_shape beam\npointer_shape_when_dragging beam\nclear_all_mouse_actions no\nmouse_map left click ungrabbed mouse_handle_click selection link prompt\nmouse_map shift+left click grabbed,ungrabbed mouse_handle_click selection link prompt\nmouse_map ctrl+shift+left release grabbed,ungrabbed mouse_handle_click link\nmouse_map ctrl+shift+left press grabbed discard_event\nmouse_map middle release ungrabbed paste_from_selection\nmouse_map left press ungrabbed mouse_selection normal\nmouse_map ctrl+alt+left press ungrabbed mouse_selection rectangle\nmouse_map left doublepress ungrabbed mouse_selection word\nmouse_map left triplepress ungrabbed mouse_selection line\nmouse_map ctrl+alt+left triplepress ungrabbed mouse_selection line_from_point\nmouse_map right press ungrabbed mouse_selection extend\nmouse_map shift+middle release ungrabbed,grabbed paste_selection\nmouse_map shift+middle press grabbed discard_event\nmouse_map shift+left press ungrabbed,grabbed mouse_selection normal\nmouse_map ctrl+shift+alt+left press ungrabbed,grabbed mouse_selection rectangle\nmouse_map shift+left doublepress ungrabbed,grabbed mouse_selection word\nmouse_map shift+left triplepress ungrabbed,grabbed mouse_selection line\nmouse_map ctrl+shift+alt+left triplepress ungrabbed,grabbed mouse_selection line_from_point\nmouse_map shift+right press ungrabbed,grabbed mouse_selection extend\nmouse_map ctrl+shift+right press ungrabbed mouse_show_command_output\n\n# Performance tuning\nrepaint_delay 10\ninput_delay 3\nsync_to_monitor yes\n\n# Terminal bell\nenable_audio_bell yes\nvisual_bell_duration 0.0\nvisual_bell_color none\nwindow_alert_on_bell yes\nbell_on_tab "\ud83d\udd14"\ncommand_on_bell none\nbell_path none\n\n# Window layout\nremember_window_size  yes\ninitial_window_width  640\ninitial_window_height 400\nenabled_layouts *\nwindow_resize_step_cells 2\nwindow_resize_step_lines 2\nwindow_border_width 0.5pt\ndraw_minimal_borders yes\nwindow_margin_width 0\nsingle_window_margin_width -1\nwindow_padding_width 0\nplacement_strategy center\nactive_border_color #00ff00\ninactive_border_color #cccccc\nbell_border_color #ff5a00\ninactive_text_alpha 1.0\nhide_window_decorations no\nwindow_logo_path none\nwindow_logo_position bottom-right\nwindow_logo_alpha 0.5\nresize_debounce_time 0.1\nresize_draw_strategy static\nresize_in_steps no\nvisual_window_select_characters 1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ\nconfirm_os_window_close -1\n\n# Tab bar\ntab_bar_edge top\ntab_bar_margin_width 0.0\ntab_bar_margin_height 0.0 0.0\ntab_bar_style powerline\ntab_bar_align left\ntab_bar_min_tabs 1\ntab_switch_strategy previous\ntab_fade 0.25 0.5 0.75 1\ntab_separator " \u2507 "\ntab_powerline_style slanted\ntab_activity_symbol none\ntab_title_template "{fmt.fg.red}{bell_symbol}{activity_symbol}{fmt.fg.tab}{title}"\nactive_tab_title_template none\nactive_tab_foreground   #000\nactive_tab_background   #eee\nactive_tab_font_style   bold-italic\ninactive_tab_foreground #444\ninactive_tab_background #999\ninactive_tab_font_style normal\ntab_bar_background none\ntab_bar_margin_color none\nforeground #dddddd\nbackground #000000\nbackground_opacity 1.0\nbackground_image none\nbackground_image_layout tiled\nbackground_image_linear no\ndynamic_background_opacity no\nbackground_tint 0.0\ndim_opacity 0.75\nselection_foreground #000000\nselection_background #fffacd\n\n# The color table\n# black\ncolor0 #000000\ncolor8 #767676\n# red\ncolor1 #cc0403\ncolor9 #f2201f\n# green\ncolor2  #19cb00\ncolor10 #23fd00\n# yellow\ncolor3  #cecb00\ncolor11 #fffd00\n# blue\ncolor4  #0d73cc\ncolor12 #1a8fff\n# magenta\ncolor5  #cb1ed1\ncolor13 #fd28ff\n# cyan\ncolor6  #0dcdcd\ncolor14 #14ffff\n# white\ncolor7  #dddddd\ncolor15 #ffffff\n\nmark1_foreground black\nmark1_background #98d3cb\nmark2_foreground black\nmark2_background #f2dcd3\nmark3_foreground black\nmark3_background #f274bc\n\n\n# Advanced\nshell .\neditor .\nclose_on_child_death no\nallow_remote_control no\nlisten_on none\nenv FOO=BAR\nupdate_check_interval 48\nstartup_session none\nclipboard_control write-clipboard write-primary read-clipboard-ask read-primary-ask\nclipboard_max_size 64\nallow_hyperlinks yes\nshell_integration enabled\nallow_cloning ask\nclone_source_strategies venv,conda,env_var,path\nterm xterm-kitty\n\n# OS specific tweaks\nwayland_titlebar_color system\nmacos_titlebar_color system\nmacos_option_as_alt no\nmacos_hide_from_tasks no\nmacos_quit_when_last_window_closed no\nmacos_window_resizable yes\nmacos_thicken_font 0\nmacos_traditional_fullscreen no\nmacos_show_window_title_in none\nmacos_menubar_title_max_length 25\nmacos_custom_beam_cursor no\nmacos_colorspace srgb\nlinux_display_server auto\n\n# Keyboard shortcuts\nkitty_mod ctrl+shift\nclear_all_shortcuts no\nmap kitty_mod+c copy_to_clipboard\nmap cmd+c       copy_to_clipboard\nmap kitty_mod+v paste_from_clipboard\nmap cmd+v       paste_from_clipboard\nmap kitty_mod+s  paste_from_selection\nmap shift+insert paste_from_selection\nmap kitty_mod+o pass_selection_to_program\nmap kitty_mod+up    scroll_line_up\nmap kitty_mod+k     scroll_line_up\nmap opt+cmd+page_up scroll_line_up\nmap cmd+up          scroll_line_up\nmap kitty_mod+down    scroll_line_down\nmap kitty_mod+j       scroll_line_down\nmap opt+cmd+page_down scroll_line_down\nmap cmd+down          scroll_line_down\nmap kitty_mod+page_up scroll_page_up\nmap cmd+page_up       scroll_page_up\nmap kitty_mod+page_down scroll_page_down\nmap cmd+page_down       scroll_page_down\nmap kitty_mod+home scroll_home\nmap cmd+home       scroll_home\nmap kitty_mod+end scroll_end\nmap cmd+end       scroll_end\nmap kitty_mod+z scroll_to_prompt -1\nmap kitty_mod+x scroll_to_prompt 1\nmap kitty_mod+h show_scrollback\nmap kitty_mod+g show_last_command_output\nmap kitty_mod+enter new_window\nmap cmd+enter       new_window\nmap kitty_mod+n new_os_window\nmap cmd+n       new_os_window\nmap kitty_mod+w close_window\nmap shift+cmd+d close_window\nmap kitty_mod+] next_window\nmap kitty_mod+[ previous_window\nmap kitty_mod+f move_window_forward\nmap kitty_mod+b move_window_backward\nmap kitty_mod+` move_window_to_top\nmap kitty_mod+r start_resizing_window\nmap cmd+r       start_resizing_window\nmap kitty_mod+1 first_window\nmap cmd+1       first_window\nmap kitty_mod+2 second_window\nmap cmd+2       second_window\nmap kitty_mod+3 third_window\nmap cmd+3       third_window\nmap kitty_mod+4 fourth_window\nmap cmd+4       fourth_window\nmap kitty_mod+5 fifth_window\nmap cmd+5       fifth_window\nmap kitty_mod+6 sixth_window\nmap cmd+6       sixth_window\nmap kitty_mod+7 seventh_window\nmap cmd+7       seventh_window\nmap kitty_mod+8 eighth_window\nmap cmd+8       eighth_window\nmap kitty_mod+9 ninth_window\nmap cmd+9       ninth_window\nmap kitty_mod+0 tenth_window\nmap kitty_mod+f7 focus_visible_window\nmap kitty_mod+f8 swap_with_window\nmap kitty_mod+right next_tab\nmap shift+cmd+]     next_tab\nmap ctrl+tab        next_tab\nmap kitty_mod+left previous_tab\nmap shift+cmd+[    previous_tab\nmap ctrl+shift+tab previous_tab\nmap kitty_mod+t new_tab\nmap cmd+t       new_tab\nmap kitty_mod+q close_tab\nmap cmd+w       close_tab\nmap shift+cmd+w close_os_window\nmap kitty_mod+. move_tab_forward\nmap kitty_mod+, move_tab_backward\nmap kitty_mod+alt+t set_tab_title\nmap shift+cmd+i     set_tab_title\nmap kitty_mod+l next_layout\nmap kitty_mod+equal  change_font_size all +2.0\nmap kitty_mod+plus   change_font_size all +2.0\nmap kitty_mod+kp_add change_font_size all +2.0\nmap cmd+plus         change_font_size all +2.0\nmap cmd+equal        change_font_size all +2.0\nmap shift+cmd+equal  change_font_size all +2.0\nmap kitty_mod+minus       change_font_size all -2.0\nmap kitty_mod+kp_subtract change_font_size all -2.0\nmap cmd+minus             change_font_size all -2.0\nmap shift+cmd+minus       change_font_size all -2.0\nmap kitty_mod+backspace change_font_size all 0\nmap cmd+0               change_font_size all 0\nmap kitty_mod+e open_url_with_hints\nmap kitty_mod+p>f kitten hints --type path --program -\nmap kitty_mod+p>shift+f kitten hints --type path\nmap kitty_mod+p>l kitten hints --type line --program -\nmap kitty_mod+p>w kitten hints --type word --program -\nmap kitty_mod+p>h kitten hints --type hash --program -\nmap kitty_mod+p>n kitten hints --type linenum\nmap kitty_mod+p>y kitten hints --type hyperlink\nmap kitty_mod+f11 toggle_fullscreen\nmap ctrl+cmd+f    toggle_fullscreen\nmap kitty_mod+f10 toggle_maximized\nmap opt+cmd+s toggle_macos_secure_keyboard_entry\nmap kitty_mod+u    kitten unicode_input\nmap ctrl+cmd+space kitten unicode_input\nmap kitty_mod+f2 edit_config_file\nmap cmd+,        edit_config_file\nmap kitty_mod+escape kitty_shell window\nmap kitty_mod+a>m set_background_opacity +0.1\nmap kitty_mod+a>l set_background_opacity -0.1\nmap kitty_mod+a>1 set_background_opacity 1\nmap kitty_mod+a>d set_background_opacity default\nmap kitty_mod+delete clear_terminal reset active\nmap opt+cmd+r        clear_terminal reset active\nmap cmd+k clear_terminal to_cursor active\nmap kitty_mod+f5 load_config_file\nmap ctrl+cmd+,   load_config_file\nmap kitty_mod+f6 debug_config\nmap opt+cmd+,    debug_config\nmap shift+cmd+/ open_url https://sw.kovidgoyal.net/kitty/\n'})})]})}function d(n={}){const{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>l,a:()=>i});var o=e(7294);const a={},_=o.createContext(a);function i(n){const t=o.useContext(_);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),o.createElement(_.Provider,{value:t},n.children)}}}]);