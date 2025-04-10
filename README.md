# React webapp

> [!WARNING]
> Large files such as `.mp4` are not included in the repository.

## Distribution

A built version can be found under [**Releases**](https://github.com/samme90s/anewlevel/releases)
where the `dist.zip` file contains the production build of the project.

You can also build the project yourself by following the instructions below.

## Get started

Navigate the [`package.json`](./package.json) file to see the available scripts.
Node.js or Bun is required to run some of the scripts.

### Bun

Bun is similar to Node, but it is written in Rust and is much faster.
A few thing it offers are: package management, bundling, and running
the project.

This project uses [Bun](https://bun.sh/), but Node works just as well
without having to modify anything!

### Usage

```shell
# Install project dependencies and run (this is usually done when developing)
bun install && bun dev
# Shortened version but does the same thing as:
# bun run <command>
```

```shell
# Production build
# This is usually done when deploying and generates the `dist` folder
# containing the production build of the project and found in root
# directory.
bun install && bun run build && bun serve build
```
