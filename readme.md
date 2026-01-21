This is a reproduction repo of [mjml@5.0.0-alpha.9](https://github.com/mjmlio/mjml/pull/3033) `ignoreIncludes` feature.

The repo use `mjml@5.0.0-alpha.10` because it was the latest release when the repo created.

How to check the behaviour of the `ignoreIncludes` feature.

- clone the repo 
- install dependencies
- run `node ./lib/index.js | grep mj-include`

The output is `<!-- mj-include denied -->` it shows the mjml denied include even the program runs in the root folder.

Other way to test is run the `npm t` command in the project root folder and you will see mjml uses the default fonts instead of that defined in the included.
The test fails because the snapshot of alpha.8 and alpha.10 are not matching.

The mjml logic in the `lib/utils/get-html-email-content.js`

Project structure

```
├── lib
│   ├── constants.js
│   ├── index.js <-- main entry point of the project
│   ├── templates <-- This folder contains the templates
│   │   ├── _common <-- this folder contains the include files
│   │   │   └── font-header.mjml
│   │   └── my-campaign <-- a folder that group the related email templates
│   │       └── 01.mjml
│   └── utils
│       └── get-html-email-content.js <-- mjml wrapper function
├── package.json
├── readme.md
└── test
    ├── 01.html <-- node test snapshot file generated with alpha.8
    ├── _helpers
    │   └── snapshot-serializer.js
    └── my-campaign.test.js
```

