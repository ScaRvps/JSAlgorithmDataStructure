class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let hashIdx = this._hash(key);
    if (!this.keyMap[hashIdx]) this.keyMap[hashIdx] = [];
    //TODO: If key exist, change the value

    for (let el of this.keyMap[hashIdx]) {
      if (el[0] === key) {
        el[1] = value;
        return this.keyMap;
      }
    }
    this.keyMap[hashIdx].push([key, value]);

    return this.keyMap;
  }

  get(key) {
    let hashIdx = this._hash(key);
    let elements = this.keyMap[hashIdx];
    if (elements) {
      for (let el of elements) {
        if (el[0] === key) return el[1];
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let el of this.keyMap) {
      if (el) {
        for (let each of el) keys.push(each[0]);
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let el of this.keyMap) {
      if (el) {
        for (let each of el) {
          if (!values.includes(each[1])) values.push(each[1]);
        }
      }
    }
    return values;
  }
}
