import { deepAssign } from './deepAssgin'

const reEscapeChar = /\\(\\)?/g
const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  '[^.[\\]]+' +
    '|' +
    // Or match property names within brackets.
    '\\[(?:' +
    // Match a non-string expression.
    '([^"\'][^[]*)' +
    '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' +
    '|' +
    // Or match "" as the space between consecutive dots or empty brackets.
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))',
  'g'
)
const charCodeOfDot = '.'.charCodeAt(0)

/**
 * 智能合并数据，支持路径形式的合并 - Intelligently merge data, support path form merge
 * @param sourceObject - data object
 * @param patchObject - update data fields
 */
export function smartAssign(
  sourceObject: Record<string, any> | void,
  patchObject: Record<string, any>
): Record<string, any> {
  if (!sourceObject) return patchObject
  const targetKeys = Object.keys(patchObject)
  const hasPathKey = targetKeys.some((key) => /[.[\]]+/.test(key))

  __standardSource(sourceObject)

  if (hasPathKey) {
    for (let i = 0; i < targetKeys.length; i++) {
      const field = targetKeys[i]

      const value = patchObject[field]

      // lodash.set a.6 => 会变成[empty*5, 6] 这里需要 a.6 => {6: x}，所以我们使用自定义的修正set函数
      __set(sourceObject, field, value)
    }
  } else {
    deepAssign(sourceObject, patchObject)
  }

  return sourceObject
}

function __standardSource(sourceObject: Record<string, any>): void {
  const sourceObjectTargetKeys = Object.keys(sourceObject)
  const sourceObjectHasPathKey = sourceObjectTargetKeys.some((key) => /[.[\]]+/.test(key))

  const newObject = {}
  if (sourceObjectHasPathKey) {
    for (let i = 0; i < sourceObjectTargetKeys.length; i++) {
      const field = sourceObjectTargetKeys[i]

      const value = sourceObject[field]

      delete sourceObject[field]

      // lodash.set a.6 => Will become[empty*5, 6] There needs to be a.6 => {6: x}, So we use the custom correction set function
      __set(newObject, field, value)
    }
  }

  Object.assign(sourceObject, newObject)
}

/**
 * Set data using path
 * @param {string} [exprPath] prop path
 * @param {*} [value] The value of the changed property
 * @return {Object} Set the overall data set after setting
 */
function __set(sourceObject: Record<string, any>, exprPath: string, value: any) {
  if (!exprPath) {
    return sourceObject
  }
  const keys = stringToPath(exprPath)

  keys.reduce((obj, key, idx) => {
    if (idx === keys.length - 1) {
      obj[key] = value
    } else {
      if (key.endsWith('@array')) {
        key = key.split('@array')[0]
        if (typeof obj[key] === 'undefined') {
          obj[key] = []
        }
      } else {
        if (typeof obj[key] === 'undefined') {
          obj[key] = {}
        }
      }
      return obj[key]
    }
  }, sourceObject)

  return sourceObject
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
function stringToPath(str) {
  const result = []
  if (str.charCodeAt(0) === charCodeOfDot) {
    result.push('')
  }
  str.replace(rePropName, (match, expression, quote, subString) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    } else if (expression) {
      result[result.length - 1] = `${result[result.length - 1]}@array`
      key = expression.trim()
    }
    result.push(key)
  })
  return result
}
