
# Tasksboards : Google Task for KaiOS

Simple reader for google task. You can only read/check/uncheck. You need to edit on another device (computer).

Google task is a to-do list manager.

KaiOS is a mobile operating system based Firefox OS with 100 million devices worldwide (third mobile OS after Android and IOS).

It brings smartphone features to non-touch feature phone with 300*240px screen. 

You can open the app with the website, but it's not done for smartphone/computer screen.

https://grachet.github.io/kaios-google-task/

## Start

https://console.developers.google.com/apis/credentials?project=kaios-task-app

ID clients OAuth 2.0 -> Github page -> download config file

rename config.json and remove web key

put in /src/services

```console
npm start
```

## Deploy app

```console
npm run deploy
```

## Install app on device

link device

Install [adb](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)

```console
adb forward tcp:6000 localfilesystem:/data/local/debugger-socket
```

[firefox 59](https://ftp.mozilla.org/pub/firefox/releases/59.0/win64/en-US/) -> developer menu -> webIDE

open hosted app -> https://grachet.github.io/kaios-google-task/manifest.webapp

webIDE -> remote runtime
