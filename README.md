# Sample React app for KaiOS

Simple example of a to-do list, for more information see [KaiOS Developer Portal](https://developer.kaiostech.com/getting-started/build-your-first-app/sample-code#react)

![](./docs/to-do-on-input.png)
![](./docs/to-do.png)

In portrait devices

![](./docs/to-do-portrait.gif)

In landscape devices

![](./docs/to-do-landscape.gif)

## Start

```console
npm start
```

## Build app


firefox 59 -> develloper -> webIDE

```console
npm run build
```

open build folder

adb forward tcp:6000 localfilesystem:/data/local/debugger-socket

webIDE-> remote runtime
webIDE-> remote hosted https://grachet.github.io/kaios-google-task/manifest.webapp

## Send the app to a KaiOS device

follow [os-env-setup](https://developer.kaiostech.com/getting-started/env-setup/os-env-setup) and [test-your-apps](https://developer.kaiostech.com/getting-started/build-your-first-package-app/test-your-apps)
install to your device.
