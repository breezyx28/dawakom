export const Local = (type = 'set', name = null, value = null) => {
  const loc = localStorage;
  let str_val = JSON.stringify(value);

  switch (type) {
    case 'set':
      if (name && value) {
        loc.setItem(name, str_val);
        return true;
      } else {
        return false;
      }
      break;
    case 'setMulti':
      if (name && value) {
        let oldValues = loc.getItem(name);
        let array = [];
        oldValues
          ? loc.setItem(name, JSON.parse(oldValues).push(value))
          : loc.setItem(name, array.push(value));
        return true;
      } else {
        return false;
      }
      break;
    case 'get':
      if (name) {
        let get = loc.getItem(name);
        if (get) {
          return JSON.parse(get);
        } else {
          return false;
        }
      } else {
        return 'please set name variable first';
      }
    case 'clear':
      return loc.clear();
      break;
    case 'remove':
      if (name) {
        loc.removeItem(name);
        return `${name} has been removed`;
      } else {
        return 'please set name variable first';
      }
  }
};
