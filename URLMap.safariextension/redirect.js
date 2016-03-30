if (window === window.top) {
    safari.self.addEventListener("message", getSettings, false);
    safari.self.tab.dispatchMessage("requestSettings", null);

    var url = window.location.href;

    function getSettings(event) {
        var redirects = event.message;

        for (var i = 0; i < redirects.length; ++i) {
            var q = new RegExp(redirects[i][0]);
            var a = redirects[i][1];

            var match = q.exec(url);

            if (match != null) {
                for (var i = 1; i < 100; ++i) {
                    a = a.replace("<<" + i + ">>", match[i]);
                    console.log(match[i]);
                }

                window.location.replace(a);
            }
        }
    }
}
