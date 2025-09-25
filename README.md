```
00680065006c006c006f00200077006f0072006c00640021002896fe

for (let i = 0; i < string.length; i++) {
    if (i > 4 && Number.isInteger(i)) {
        let result = string.slice(0, i) + "\\u" + string.slice(i);
        console.log(result);
    }
}
```