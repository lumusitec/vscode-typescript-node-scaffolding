# Visual Studio Code NodeJS Typescript Scaffolding

## Introduction

Setting up a default environment for NodeJS development with Typescript can
be a bit confusing when using Visual Studio Code as your IDE. VS Code is an
extremely powerful tool, and after a proper foundation of project scaffolding,
development can be streamlined utilizing these tools.

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

## Usage

### Build/Compile Source

`⇧+⌘+B`

### Run Test

`⇧+⌘+T`

## Resources

### Dependencies