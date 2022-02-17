<br><p align="center">
<img width="250" src="https://github.com/BMSVieira/lwder.js/blob/main/demo/img/logo.png?raw=true">
</p>

◼️ Features:
-
- 🛠 Easy to Use
- 🌠 Fast & Lightweight (0.5Kb)
- 💪 No dependencies, built with VanillaJS
- 🌎 Tested in all modern browsers

◼️ Demo:
-
https://bmsvieira.github.io/lwder.js/

◼️ Installation:
-

<b>1 - Include JavaScript Source.</b>
```javascript
<script src="path/to/lwder.js"></script>
```
<b>2 - Set HTML Elements.</b>
```html
<div class="lwder" lwder="..." lwderspeed="300"> Page is loading </div>
```
<b>3 - Initilize.</b>
```javascript
document.addEventListener("DOMContentLoaded", function() {
 new Lwder({ selector: ".lwder" });
});
```

◼️ Options
-
 
| Name | Value | Default | Description
| --- | --- | --- | --- |
| `lwder` | `string` | empty | Content to be added |
| `lwderspeed` | `int` | empty | Speed at which letters will appear |
| `lwdertype` | `default` or `onclick`| `default` | Type of event, `default` (on init) or `onclick` |
| `lwdercondition` | `default` or `clear` | `default` | Event condition, `default` (add to existing content) or `clear` (clear all existing content from element) |
| `lwderduration` | `int` | empty | Duration of how long lwder will run if `lwdertype` is `onclick` |
