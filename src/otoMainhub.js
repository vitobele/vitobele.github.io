function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("body")[0].appendChild(src);
}
callAll("//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/highlight.min.js");
callAll("//vitobele.github.io/src/hljs.js");
