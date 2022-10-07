export function nanoid(defaultSize = 21){
  const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
  let id = ''
  let i = defaultSize
  while (i--){
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}

export function isFunction(val){
  return typeof val === 'function'
} 
