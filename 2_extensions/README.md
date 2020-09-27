# Extensions

_Note: This package has dependencies._

```sh
npm install
```

---

Extensions are run by the NodeCG server. As such they are not tied to any browser and can perform any action that a dedicated Node process can (such as reading/writing from files).

Extensions can be located in one of two places
```sh
your-bundle/extension.js
your-bundle/extension/index.js
```

And must expose the following in order to be loaded by NodeCG and have access to the `nodecg` object.

```js
module.exports = nodecg => {

}
```

For more information, see https://www.nodecg.dev/docs/classes/nodecg#extensions

## Example

In this example we'll be using `nodecg.sendMessage()` to trigger a server function and query the Github API.

Additionally, this example will demonstrate a bundle with both dashboard and extension content.

Using Extensions can be especially useful if you have server configuration you'd like to keep hidden, such as API keys or other environment variables.
