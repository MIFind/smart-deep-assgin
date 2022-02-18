const hasOwnProperty = Object.prototype.hasOwnProperty
const propIsEnumerable = Object.prototype.propertyIsEnumerable

function isObject(val: any): boolean {
  return val != null && typeof val === 'object' && Array.isArray(val) === false
}

function assignKey(to: Record<string, any>, from: Record<string, any>, key: any) {
  const val = from[key]

  if (val === undefined || val === null) {
    return
  }

  if (hasOwnProperty.call(to, key)) {
    if (to[key] === undefined || to[key] === null) {
      throw new TypeError('Cannot convert undefined or null to object (' + key + ')')
    }
  }

  if (!hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val
  } else {
    to[key] = deepAssign(Object(to[key]), from[key])
  }
}

export function deepAssign(
  to: Record<string, any>,
  from: Record<string, any>
): Record<string, any> {
  if (to === from) {
    return to
  }

  from = Object(from)

  for (const key in from) {
    if (hasOwnProperty.call(from, key)) {
      assignKey(to, from, key)
    }
  }

  if (Object.getOwnPropertySymbols) {
    const symbols = Object.getOwnPropertySymbols(from)

    for (let i = 0; i < symbols.length; i++) {
      if (propIsEnumerable.call(from, symbols[i])) {
        assignKey(to, from, symbols[i])
      }
    }
  }

  return to
}
