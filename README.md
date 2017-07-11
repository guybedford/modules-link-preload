# Link preload test case

In this test case we load a deep module tree (999 modules), with a preload on the last module using:

```html
<link rel="preload" as="script" href="lib/module999.js" />
```

### Running the test

Run a local server and open `test.html`.

### Results

* Safari: The preloaded resource appears to be used, but there is still an unused preload warning.
* Chrome 61.0.3154.0: The preloaded resource is not used, and there is an unused preload warning. Tracking at https://bugs.chromium.org/p/chromium/issues/detail?id=740886.
* Firefox 54.0.1: Stops loading after 100 modules despite there being more to load with no error or warning. Tracking at https://bugzilla.mozilla.org/show_bug.cgi?id=1379942 for the error.
* Edge: Pending testing.
