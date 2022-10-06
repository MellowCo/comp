export function requireRule(message){
  return { required: true, message, trigger: [ 'change', 'blur' ] }
}

export function regexRule(regex, message){
  return { pattern: regex, message, trigger: [ 'blur', 'change' ] }
}

export function typeRule(type, message){
  return { type, message, trigger: [ 'blur', 'change' ] }
}
