export function splitName(fullName) {
  const parts = fullName.split(' ')
  return {
    firstName: parts[0],
    lastName: parts[1],
  }
}
