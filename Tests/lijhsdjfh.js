[jan]
bg = "#E6212a4c"
bg-alt = "#708491"
fg = "#27fbfe"
ac = "#4DD0E1"
blue-arch = "#00c9fe"

purple = "#6800d2"
blue = "#19bffe"

color_menu_border = "#ffffff"
color_menu_bg = "#000000FF"
color_norm_bg = "#ffffff"
color_norm_fg = "#a5b6cf"
color_sel_bg = "#1F222B"
color_sel_fg = "#a5b6cf"
color_sep_fg = "#56687E"


type = internal/network
interface = wlan0
interval = 3.0
unknown-as-up = true
accumulate-stats = true
format-connected = <label-connected>
    label-connected = "%netspeed%"
    format-connected-prefix = ""

    format-connected-prefix-padding = 3pt
    format-connected-foreground = ${pamela.green}
    speed-unit = ""

    label-connected-foreground = ${pamela.amber}
    format-disconnected = <label-disconnected>
    label-disconnected = "Offline"
    format-disconnected-prefix = ""

    format-disconnected-prefix-padding = 3pt
    format-disconnected-foreground = ${pamela.red}

    label-disconnected-foreground = ${pamela.red}
    ;;

