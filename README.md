test repo for https://github.com/redux-saga/redux-saga/issues/1356

1. build nextjs by running `npm run build .`
2. start app by running `node start.js`
3. load test the application using `siege -c 50 -i -f url.txt`

to install `siege` on macosx using homebrew -> `brew install siege`

to install `siege` on windows -> https://github.com/ewwink/siege-windows

to install `siege` on linux, use `apt-get` or `yum` accordingly

change config.js DEBUG property for verbose logging
