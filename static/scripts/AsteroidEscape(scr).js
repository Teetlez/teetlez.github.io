/* embed code used from khanacademy*/
(function () {
    var Embed = window.ScratchpadEmbed = function (props) {
        this.props = {};

        for (var prop in baseProps) {
            this.props[prop] = baseProps[prop];
        }

        for (var prop in props) {
            this.props[prop] = props[prop];
        }

        this.id = this.id || (new Date).getTime() + "-" + Math.random();
        this.callbacks = [];

        if (props.url) {
            this.url = props.url;
        }

        var self = this;

        this.onrun(function (data) {
            if (data.embedReady) {
                self.onready();
            }
        });

        if (this.props.onrun) {
            this.onrun(this.props.onrun);
        }
    };

    Embed.prototype = {
        url: "https://www.khanacademy.org/computer-programming/asteroid-belt-escape/6368843746902016/embedded?editor=no&buttons=no&author=no&embed=yes",

        setOptions: function (options) {
            for (var prop in options) {
                this.props[prop] = options[prop];
            }

            this.postFrame(this.props);
        },

        clear: function () {
            this.setOptions({ code: "" });
        },

        onrun: function (callback) {
            this.bindListener();
            this.callbacks.push(callback);
        },

        onready: function () {
            var props = this.props;

            if (props.code !== undefined) {
                this.setOptions({
                    code: props.code,
                    autoFocus: props.autoFocus,
                    lines: props.lines,
                    cursor: props.cursor,
                    validate: props.validate
                });
            }

            if (this.onload) {
                this.onload();
            }

            if (props.onload) {
                props.onload();
            }
        },

        restart: function (code) {
            this.postFrame({ restart: true });
        },

        bindListener: function () {
            if (this.bound) {
                return;
            }

            var self = this;

            window.addEventListener("message", function (e) {
                var data;

                try {
                    data = JSON.parse(event.data);

                } catch (err) {
                    // Malformed JSON, we don't care about it
                }

                // Make sure we only listen for reponses that have the right ID
                if (data && data.id === self.id) {
                    // Remember the source and origin so that we can reply later
                    self.frameSource = e.source;
                    self.frameOrigin = e.origin;

                    delete data.id;

                    // Call all the listening callbacks
                    for (var i = 0, l = self.callbacks.length; i < l; i++) {
                        self.callbacks[i](data);
                    }
                }
            }, false);

            this.bound = true;
        },

        getIframe: function () {
            if (this.iframe) {
                return this.iframe;
            }

            var props = this.props;

            // Figure out the correct height and width of the embed
            var toolbarHeight = 40;
            var editorWidth = 540;
            var canvasWidth = 400;
            var defaultHeight = 400;
            var borderWidth = 0;
            var borderHeight = 0;

            if (props.output === false || props.editor === false) {
                borderWidth = 2;
            }

            if (props.buttons === false && props.author === false) {
                toolbarHeight = 0;
                borderHeight = 2;
            }

            if (props.buttons === false && props.editor === false) {
                borderWidth = 0;
                borderHeight = 0;
                toolbarHeight = 0;
            }

            if (props.editor === false) {
                editorWidth = 0;
            }

            if (props.output === false) {
                canvasWidth = 0;
            }

            if (props.width) {
                canvasWidth = parseFloat(props.width);
            }

            if (props.height) {
                defaultHeight = parseFloat(props.height);
            }

            var height = defaultHeight + toolbarHeight + borderHeight;
            var width = editorWidth + canvasWidth + borderWidth;

            height += "px";
            width += "px"

            if (props.frameWidth) {
                width = props.frameWidth;
            }

            if (props.frameHeight) {
                height = props.frameHeight;
            }

            var queryString = {
                id: this.id,
                origin: window.location.origin
            };

            for (var prop in props) {
                var val = rpropMap[props[prop]] || props[prop];

                if (typeof val !== "function") {
                    queryString[prop] = val;
                }
            }

            var iframe = this.iframe = document.createElement("iframe");
            iframe.src = this.url.replace(/\?.*$/, "") +
                "?" + this.param(queryString);
            iframe.style.border = "0px";
            iframe.style.width = width;
            iframe.style.height = height;
            iframe.frameBorder = 0;
            iframe.scrolling = "no";
            return iframe;
        },

        param: function (props) {
            var results = [];
            for (var prop in props) {
                results.push(encodeURIComponent(prop) + "=" +
                    encodeURIComponent(props[prop]));
            }
            return results.join("&").replace(/%20/g, "+");
        },

        postFrame: function (data) {
            // Send the data to the frame using postMessage
            if (this.frameSource) {
                this.frameSource.postMessage(
                    JSON.stringify(data), this.frameOrigin);
            }
        }
    };

    var baseProps = { "buttons": "no", "embed": "yes", "editor": "no", "author": "no" },
        propMap = { "no": false, "yes": true },
        rpropMap = { "false": "no", "true": "yes" };

    for (var prop in baseProps) {
        var val = propMap[baseProps[prop]];
        if (val !== undefined) {
            baseProps[prop] = val;
        }
    }

    if (baseProps.embed === true) {
        var scripts = document.getElementsByClassName("embed_js_script"),
            lastScript = scripts[scripts.length - 1];

        lastScript.parentNode.insertBefore(
            (new Embed(baseProps)).getIframe(), lastScript);
    }
})();