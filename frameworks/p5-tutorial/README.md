# ncg-p5-tutorial

Basic bundle for people to use [p5.js](https://p5js.org/) and [NodeCG](https://nodecg.dev/).

## Graphics

This bundle contains 2 graphics: a lower third and a counter. When the counter value updates it will flash and the lower third will show and hide.

## p5.js Implementation

For p5.js to work you need both the standard p5.js file and the p5.dom.js library. These will be stored in the `shared` folder so both the dashboard and graphics files can use them.

To modify an element on a replicant change all the nodecg code needed is:

```javascript
const replicantValue = nodecg.Replicant('replicantName');

replicantValue.on('change', newVal => {
    someElement.html(newVal);
});
```

## Author

[Ewan Lyon](https://github.com/EwanLyon)
