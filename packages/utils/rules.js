export function requireRule(message, hasTrigger = true){
  const rule = { required: true, message, }
  return hasTrigger ? { ...rule, trigger: [ 'change', 'blur' ] } : rule
}

export function regexRule(regex, message, hasTrigger = true){
  const rule = { pattern: regex, message, }
  return hasTrigger ? { ...rule, trigger: [ 'blur', 'change' ] } : rule
}

export function typeRule(type, message, hasTrigger = true){
  const rule = { type, message }
  return hasTrigger ? { ...rule, trigger: [ 'blur', 'change' ] } : rule
}
