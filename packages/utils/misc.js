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

function getType(obj){
  return Object.prototype.toString.call(obj)
    .slice(8, -1)
    .toLowerCase()
}

export function deepClone(obj){
  let target
  if(null === obj){
    return null
  }
  const type = getType(obj)
  if(type === 'regexp'){
    return obj
  }else if(type === 'map'){
    target = new Map()
    for (let [ key, value ] of obj){
      target.set(key, value)
    }
  }else if(type === 'set'){
    target = new Set()
    for (let item of obj){
      target.add(item)
    } 
  }else if(type === 'array'){
    target = obj.map(item => {
      return deepClone(item)
    })
  }else{
    target = {}
    Object.entries(obj)
      .forEach(([ key, value ]) => {
        target[key] = typeof value === 'object' ? deepClone(value) : value
      })
  }
  return target
}

