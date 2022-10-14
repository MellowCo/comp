/**
 * 错误提示
 * @param {string} message - 提示信息
 */
export declare function errorNotify(message: string, duration?: number): void;
/**
* 成功提示
* @param {string} message - 提示信息
*/
export declare function successNotify(message: string): void;
/**
* 弹出提示框
* @param {string} msg - 提示信息
*/
export declare function confirm(msg: string): Promise<void>;
/**
* 错误提示
* @param {string} message - 提示信息
*/
export declare function errorMessage(message: string): void;
/**
* 错误提示
* @param {string} message - 提示信息
*/
export declare function successMessage(message: string): void;

export declare function requireRule(message: string, hasTrigger: boolean): {
  required: boolean;
  message: string;
  trigger: string[];
};

export declare function regexRule(regex: RegExp, message: string, hasTrigger: boolean): {
  pattern: RegExp;
  message: string;
  trigger: string[];
};

export declare function typeRule(type: string, message: string, hasTrigger: boolean): {
  type: string;
  message: string;
  trigger: string[];
};

/**
 * 正整数，不包含0
 */
export declare const REGEX_NO_ZERO_INT: RegExp

/**
 * 正整数，包含0
 */
export declare const REGEX_INT : RegExp

/**
* 0-100
*/
export declare const REGEX_ZERO_TO_HUNDRED : RegExp

/**
* 整数，小数，保留2位小数
*/
export declare const REGEX_NUMBER : RegExp

/**
* 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字
*/
export declare const REGEX_PWD : RegExp
