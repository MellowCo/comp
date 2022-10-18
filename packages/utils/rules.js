export function requireRule(message, hasTrigger = true){
  const rule = { required: true, message, }
  return hasTrigger ? Object.assign(rule, { trigger: [ 'change', 'blur' ] }) : rule
}

export function regexRule(regex, message, hasTrigger = true){
  const rule = { pattern: regex, message, }
  return hasTrigger ? Object.assign(rule, { trigger: [ 'change', 'blur' ] }) : rule
}

export function typeRule(type, message, hasTrigger = true){
  const rule = { type, message }
  return hasTrigger ? Object.assign(rule, { trigger: [ 'change', 'blur' ] }) : rule
}
