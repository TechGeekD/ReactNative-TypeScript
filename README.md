# ReactNativeTS

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

# Description:

- Can Use Script(useful if running app in physical device) for React-Native Commands i.e. run pakcakge, run on platform or reload app

# Usage:

- \$ ./run.sh [param1 [param2 [param3]]]

  - param1 (optional):

    - `'r' or 'p' for silent run [if passed script will run in silent mode]`
    - `'rr' to reload app [for now supported on android device only]`
    - `'rd' to open react-devtools`

  - param2 (optional):

    - `'a' or 'A' for android & 'i' or 'I' for ios [can pass if param1='r']`

  - param3 (optional):
    - `'deviceName' for ios [can pass if param1='r' & param2='i' or 'I']`

# EXAMPLE:

    - "./run.sh rr" or "./run.sh RR" [will reload app (android device only)]
    - "./run.sh rd" or "./run.sh RD" [will open react-devtools]
    - "./run.sh p" [will run packager]
    - "./run.sh r" [will run app on default platform android]
    - "./run.sh r a" or "./run.sh r A" [will run app on android platform]
    - "./run.sh r i" or "./run.sh r I" [will run app on ios platform]
    - "./run.sh r i iPad" or "./run.sh r I iPad" [will run app on ios device named in param3]

# NOTE:

    - make sure ios-deploy is installed for ios build to run on physical device
    - if not please install it using `npm install -g ios-deploy`

<a href="https://gist.github.com/TechGeekD/3c174e52cf720bed9305ede1d085544a"><img src="https://raw.githubusercontent.com/b4b4r07/i/master/gist/logo.png" width="200"></a>
