function hasKeys(object, keys) {
  // If object is not an object or keys is not an array, return false
  if (typeof object !== 'object' || !Array.isArray(keys)) {
    return false;
  }

  // Check if all keys exist in the object
  for (const key of keys) {
    if (!(key in object)) {
      return false;
    }
  }

  // Recursively check nested objects
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'object' && object[key] !== null) {
      if (!hasKeys(object[key], keys)) {
        return false;
      }
    }
  }

  return true;
}

export { hasKeys }
