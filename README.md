# highlightjs-jolie
[Jolie language](https://jolie-lang.org) syntax highlighting plugin for [highlight.js](https://github.com/highlightjs/highlight.js).

## Usage

### Simple usage
Simply include the Highlight.js library in your webpage or Node app, then load this module.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-jolie/dist/jolie.min.js"></script>
<script type="text/javascript">
  hljs.initHighlightingOnLoad();
</script>
```

### With Node
If you're using Node, simply require the language module, then register it with highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsJolie = require('highlightjs-jolie');

hljs.registerLanguage("jolie", hljsJolie);
hljs.initHighlightingOnLoad();
```

## License
The `hightlightjs-jolie` plugin is licensed under MIT. See [LICENSE](https://github.com/xiroV/highlightjs-jolie/blob/master/LICENSE) file for details.

## Links
 - The official site for the Jolie Language: <https://jolie-lang.org/>.
 - The official site for the Highlight.js library: <https://highlightjs.org/>.
