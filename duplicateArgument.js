//Option 1: o(n), o(n) frequency counter

function areThereDuplicates() {
  //check if argument is not null
  if (arguments.length === 0) {
    return false;
  }

  //create agrument object
  let argObj = {};

  //loop through to find duplicate
  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];
    if (argObj[arg]) {
      return true;
    } else {
      argObj[arg] = 1;
    }
  }

  //return
  return false;
}

//Option 2: multiple pointer
function areThereDuplicates(...args) {
  args.sort();
  let i = 0;
  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    }
    i++;
  }
  return false;
}

//Option 3: o(n log n), o(1)
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
