var Trie = function () {
  this.nodes = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let nodes = this.nodes;
  for (let ch of word) {
    if(!nodes[ch]) {
      nodes[ch] = {};
    }
    nodes = nodes[ch];
  }
  nodes.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let nodes = this.nodes;
  for (let ch of word) {
    if(!nodes[ch]) {
      return false;
    }
    nodes = nodes[ch];
  }
  return nodes.isEnd === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let nodes = this.nodes;
  for (let ch of prefix) {
    if(!nodes[ch]) {
      return false;
    }
    nodes = nodes[ch];
  }
  return true;
};
