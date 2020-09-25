# Dashboard

Dashboard panels contain ways for the streamer to interact with or monitor data. They are presented as iframes with access to a global `nodecg` Object for interacting with NodeCG.

Dashboard Panels must reside in a `dashboard` directory, but can be named anything.

Each Dashboard Panel must be identified in the `package.json` using the following `nodecg` schema. The key point to note here is that the `file` specifies a path to the dashboard panel relative to the `dashboard` directory.

For more information, see https://www.nodecg.dev/docs/manifest

```json
"nodecg": {
  "compatibleRange": ">=0.9",
  "dashboardPanels": [
    {
      "name": "hello-world",
      "title": "Hello World",
      "width": 3,
      "file": "hello-world.html",
      "headerColor": "#9f9bbd"
    }
  ]
}
```

Note that `dashboardPanels` is an array, meaning that you can specify multiple panels in the same `package.json` - the same applies to graphics.

## Replicants

https://www.nodecg.dev/docs/classes/replicant/

Replicants allow for the passing of values throughout NodeCG and, in my experience, will be your most commonly used aspect of NodeCG.

Replicants can be used across bundles, which is demonstrated in both the `graphics` and `extensions` samples.

```js
const nameReplicant = nodecg.Replicant('name');

nameReplicant.on('change', (newValue, oldValue) => {
  // The value of the Replicant has changed somewhere in NodeCG,
  // this could be another dashboard panel, a server initiated change,
  // or the doing of another user accessing your dashboard panel.
  nameInput.value = newValue;
});
```
