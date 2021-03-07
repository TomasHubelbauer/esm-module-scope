# ESM Module Scope

This repository implements an ESM module which can be imported using a file URL
with search part of the URL used to identity the caller and export a different
default (or non-default) content depending on the caller. I initially called it
ESM Module Scope because I thought this idea was going somewhere else, I thought
maybe there might be some options with `globalThis` or something, but I did not
have a concrete idea and it ended up being this.

`node .` or `python3 -m http.server` and open http://localhost:8000

VS Code Intellisense breaks when using `?search` or `#fragment` in the import
like here, but I have since developed a VS Code extension which implements a
TS Server plugin which fixes this: https://github.com/TomasHubelbauer/vscode-esm-url
