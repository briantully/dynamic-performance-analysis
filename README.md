# dynamic-performance-analysis

## Dependencies

* [npm](https://docs.npmjs.com/getting-started/installing-node)

## Installation

```
$ git clone git@github.com:guitarte/dynamic-performance-analysis.git
$ cd ./dynamic-performance-analysis
$ npm install
```

## Usage

Run a crawl on https://example.com

```
$ cd ./dynamic-performance-analysis
$ NODE_PATH=node_modules/ ./scripts/dpa.js https://example.com
```

## Pro Tip

Add an alias for `dpa` in your shell of choice. For example, assuming you've cloned this repo to `$HOME/Sites/dynamic-performance-analysis`, add the following line to your .bashrc or .zshrc file:

```
alias dpa="$HOME/Sites/dynamic-performance-analysis/scripts/dpa.js"
```

With the alias set and in a new terminal window, all you'll need to do to invoke the tool is enter:

```
dpa https://example.com
```
