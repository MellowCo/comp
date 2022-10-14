/**
 * 正整数，不包含0
 */
export const REGEX_NO_ZERO_INT = /^\+?[1-9]\d*$/

/**
 * 正整数，包含0
 */
export const REGEX_INT = /^\d+$/

/**
 * 0-100
 */
export const REGEX_ZERO_TO_HUNDRED = /^(0|[1-9]{0,1}[0-9]|100)$/

/**
 * 整数，小数，保留2位小数
 */
export const REGEX_NUMBER = /^(0|(0\.|[1-9]\d*\.?)\d?[1-9]|[1-9]\d*)$/

/**
 * 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字
 */
export const REGEX_PWD = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/
