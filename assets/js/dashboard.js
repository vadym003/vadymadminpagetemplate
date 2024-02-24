$(window).resize(function() {
    window.addEventListener("resize", function(i) {
        adjustLayout()
    })
});
function  adjustLayout() {
    if(window.innerWidth <= 1200){

    	document.getElementsByTagName("html")[0].setAttribute("data-sidebar-size", "full");
    }else{
    	document.getElementsByTagName("html")[0].removeAttribute("data-sidebar-size");
    }
}


Array.from(document.querySelectorAll('.scroll_container'))
  .forEach(
    el => new SimpleBar(el, {
      autoHide: false,
    })
  );
class ThemeLayout {
    initComponents() {

        [ ...document.querySelectorAll('[data-bs-toggle="popover"]') ].map((e => new bootstrap.Popover(e))), 
        [ ...document.querySelectorAll('[data-bs-toggle="tooltip"]') ].map((e => new bootstrap.Tooltip(e))), 
        [ ...document.querySelectorAll(".offcanvas") ].map((e => new bootstrap.Offcanvas(e)));
        var e = document.getElementById("toastPlacement");
        e && document.getElementById("selectToastPlacement").addEventListener("change", (function() {
            e.dataset.originalClass || (e.dataset.originalClass = e.className), e.className = e.dataset.originalClass + " " + this.value;
        }));
        [].slice.call(document.querySelectorAll(".toast")).map((function(e) {
            return new bootstrap.Toast(e);
        }));
        const o = document.getElementById("liveAlertPlaceholder");
        const t = document.getElementById("liveAlertBtn");
        t && t.addEventListener("click", (() => {
            {
                var e = "Nice;var you triggered this alert message!";
                var t = "success";
                const n = document.createElement("div");
                n.innerHTML = [ `<div class="alert alert-${t} alert-dismissible" role="alert">`, `   <div>${e}</div>`, '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', "</div>" ].join(""), 
                o.append(n);
            }
        }));
        var n = document.getElementById("theme-mode");
            var n = (n && n.addEventListener("click",function(e) {
            var t = document.documentElement;
            var n = "light" === t.getAttribute("data-bs-theme") ? "dark" : "light";
            t.setAttribute("data-bs-theme", n), sessionStorage.setItem("themeMode", n);
        }), sessionStorage.getItem("themeMode")), l = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", n = n || l;
        document.documentElement.setAttribute("data-bs-theme", n), sessionStorage.setItem("themeMode", n);
    }
    initMainMenu() {
        var e;
        var t;
        $(".app-menu").length && (e = $(".app-menu .menu-item .collapse"), $(".app-menu li [data-bs-toggle='collapse']").on("click", (function(e) {
            return !1;
        })), e.on({
            "show.bs.collapse": function(e) {
                var t = $(e.target).parents(".collapse.show");
                $(".app-menu .collapse.show").not(e.target).not(t).collapse("hide");
            }
        }), e = document.querySelectorAll(".app-menu .menu-link"), t = window.location.href.split(/[?#]/)[0], 
        e.forEach((function(e) {
            e.href == t && (e.classList.add("active"), e.parentNode.classList.add("active"), 
            e.parentNode.parentNode.parentNode.classList.add("show"), e.parentNode.parentNode.parentNode.parentNode.classList.add("active"), 
            e.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("active"), 
            e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("show"));
        }))), setTimeout((function() {
            var e;
            var o;
            var l;
            var a;
            var c;
            var d;
            var t = document.querySelector("li.active .active");
            function s() {
                e = d += 20, t = a, n = c;
                var e;
				var t;
				var n = (e /= l / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t;
                o.scrollTop = n, d < l && setTimeout(s, 20);
            }
            null != t && (e = document.querySelector(".main-menu .simplebar-content-wrapper"), 
            t = t.offsetTop - 300, e && 100 < t && (l = 600, a = (o = e).scrollTop, c = t - a, 
            d = 0, s()));
        }), 200);
    }
    reverseQuery(e, t) {
        for (;e; ) {
            if (e.parentElement && e.parentElement.querySelector(t) === e) return e;
            e = e.parentElement;
        }
        return null;
    }
    initSwitchListener() {
        var e = this;
		var t = document.querySelector(".button-toggle-menu");
        t && t.addEventListener("click", (function() {
            document.getElementsByTagName("html")[0];
            "full" === document.getElementsByTagName("html")[0].getAttribute("data-sidebar-size") && e.showBackdrop(), document.getElementsByTagName("html")[0].classList.toggle("sidebar-enable");
        }));
    }
    showBackdrop() {
        var e = function() {
            const e = document.createElement("div");
            e.style.width = "100px", e.style.height = "100px", e.style.overflow = "scroll", 
            document.body.appendChild(e);
            var t = e.offsetWidth - e.clientWidth;
            return document.body.removeChild(e), t;
        }();
        const t = document.createElement("div");
		const n = (t.id = "custom-backdrop", t.classList = "offcanvas-backdrop fade show",document.body.appendChild(t),
    		document.body.style.overflow = "hidden",document.body.style.paddingRight = e + "px", this);
        t.addEventListener("click", (function(e) {
            document.getElementsByTagName("html")[0].classList.remove("sidebar-enable"), n.hideBackdrop();
        }));
    }
    initfullScreenListener() {
        var e = document.querySelector('[data-bs-toggle="fullscreen"]');
        e && e.addEventListener("click", (function(e) {
            e.preventDefault(), document.body.classList.toggle("fullscreen-enable"), document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }));
    }
    hideBackdrop() {
        var e = document.getElementById("custom-backdrop");
        e && (document.body.removeChild(e), document.body.style.overflow = null, document.body.style.paddingRight = null);
    }
    init() {
        this.initComponents();
        this.initMainMenu(), this.initSwitchListener(); 
        this.initfullScreenListener();
    }
}

(new ThemeLayout).init();

$(document).ready(function() {
  adjustLayout();
});
