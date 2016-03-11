# Visual Studio Code NodeJS Typescript Scaffolding

## Introduction

Setting up a default environment for NodeJS development with Typescript can
be a bit confusing when using Visual Studio Code as your IDE. VS Code is an
extremely powerful tool, and after a proper foundation of project scaffolding,
development can be streamlined utilizing these tools.

------------------------------------------------------------------------------

## Installation

### 1. Clone this Repo

Use git to clone this repository to a local directory:
`git clone `

### 2. `npm install` Dependencies.

Once cloned, you will need to automatically download and install the local
dependencies required for development using this scaffolding. A description
of the packages needed as dependencies and there uses can be found below
under Resources -> Dependencies.

To insall the necessary/required dependencies, run the following from the root
of your cloned repo directory.

------------------------------------------------------------------------------

## Configuration

### Project Settings

Basic project information, like: _name_, _git repository_, _author_, etc. can be customized
using the `package.json` file used and defined by _NPM_ standard practice.

Documentation on `package.json` configuration can be found here:
[https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)

### VS Code Tasks

The scaffolding comes with pre-built VS Code configurations of _tasks_ and project
settings out of the box to allow _Typescript_ compilation/transpilation of `src`
`.ts` files to `build` `.js` files, as well as a built-in testing _task_ to
run _Mocha_ tests.

To customize the behavior of these tasks, refer to the following file:
`.vscode/tasks.json`

Documentation on _Tasks_ can be found here:
[https://code.visualstudio.com/docs/editor/tasks](https://code.visualstudio.com/docs/editor/tasks)

------------------------------------------------------------------------------

## Usage

### Build/Compile Source

To build the Typescript source files from the `./src` and `./test` directory to the `./build`
directory with the same directory structure.

`⇧+⌘+B`

### Run Test

To run the mocha test runner and output results to the _OUTPUT_ console. This has a `pretest`
script in the `package.json` which runs the normal build command, to compile `.ts` files to
`.js`.

`⇧+⌘+T`

### Task Runners

This scaffolding has been developes for as few dependencies as possible. While it is an accepted
standard to use _Gulp_ or _Grunt_ for defining test runner tasks, we rely on `NPM-scripts` and
`VS Code tasks`.

Tasks are defined in the `./.vscode/tasks.json` file. For information on _VS Code Task Definitions_
refer to the documentation here:

[https://code.visualstudio.com/docs/editor/tasks](https://code.visualstudio.com/docs/editor/tasks)

------------------------------------------------------------------------------

## Resources

### Directory Structure

```
.
├── build/
├── src/
│   └── index.ts
├── test/
│   ├── index.spec.ts
│   └── mocha.opts
├── typings/
│   ├── main/
│   │   └── ambient/
│   │       ├── chai/
│   │       │   └── index.d.ts
│   │       ├── mocha/
│   │       │   └── index.d.ts
│   │       └── node/
│   │           └── index.d.ts
│   └── main.d.ts
├── README.md
├── package.json
├── tsconfig.json
└── typings.json
```

#### build/

Destination compilation target directory for `.js` files. This is where the _Build_ command will save
compiled `.ts`->`.js` files.

#### src/

Source directory containing application Typescript files. Here you will find a sample _Hello World_
Typescript file as an example.

#### test/

Test directory containing Typescript `.ts` files which implement test runners. In this scaffolding,
we are using [_Mocha_](https://mochajs.org/) and optionally [_Chai_](http://chaijs.com/). There is
an included _Hello World_ unit test in place as an example.

#### typings/

In order for Intellisense to work as expected, any external Javascript modules referred to within your
project needs a corresponding _Typescript Definition File_ `*.d.ts`. These files describe the shape
of the dependent module(s). More information on Typescript Definition Files can be found here:

[http://www.typescriptlang.org/Handbook#modules-working-with-other-javascript-libraries](http://www.typescriptlang.org/Handbook#modules-working-with-other-javascript-libraries)

These definition files are managed by a _Typescript Definition File Manager_ called _Typings_. This is
the successor to the previous CLI command `tsd`. For more information on _Typings_ see here:

[https://github.com/typings/typings](https://github.com/typings/typings)

The pre-installed _typings_ are:
- Node Core
- Mocha Testing Framework
- Chai Assertion Library.

These are installed as _ambient_ definitions, and can be referenced from the `main.d.ts` file located
in:

`./typings/main.d.ts`

So when referencing you definition files, you can include at the top of your `src` files:

```
/// <reference path="../typings/main.d.ts" />
```

#### README.md

You are here

#### package.json

_NPM_ package information for the project. Here is where you can customize the project configs to suit
your needs. There are pre-built `scripts` which serve as a base for _VS Code Tasks_ to run `build`,
`test`, and `clean` tasks.

### Dependencies

```
├── chai@3.5.0
├── eslint@2.3.0
├── mocha@2.4.5
├── tslint@3.5.0
├── typescript@1.8.7
└── typings@0.7.7
```

- Chai - Assertion testing library.
- ESLint - Style checking for Javascript files.
- Mocha - Testing framework.
- TSLint - Style checking for Typescript files.
- Typescript - Local copy of Typescript compiler.
- Typings - Typescript definition file `*.d.ts` management tool.

------------------------------------------------------------------------------

## TODOs

- [] More elegant directory structure for the build directory then an additional `src` directory next to `test`.
- [] Decouple the `Build` and `Task` _NPM Scripts_ and `tasks.json`.
