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

export declare function requireRule(message: string): {
  required: boolean;
  message: string;
  trigger: string[];
};

export declare function regexRule(regex: RegExp, message: string): {
  pattern: RegExp;
  message: string;
  trigger: string[];
};

export declare function typeRule(type: string, message: string): {
  type: string;
  message: string;
  trigger: string[];
};
