import { Application, Container, Sprite, Text, Texture } from 'pixi.js'
import { createRenderer } from 'vue'

export const renderer = createRenderer<Container, Container>({
  createElement(type: string) {
    let element
    switch (type) {
      case 'Container':
        element = new Container()
        break
      case 'Sprite':
        element = new Sprite()
        break
      default:
        throw new Error(`没有实现的类型 ${type}`)
    }
    return element
  },
  insert(el, parent) {
    parent.addChild(el)
  },

  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case 'texture':
        ;(el as Sprite).texture = Texture.from(nextValue)
        break

      default:
        el[key] = nextValue
        break
    }
  },
  remove(el) {
    if (el.parent) {
      el.parent.removeChild(el)
    }
  },
  createText(text) {
    return new Text(text)
  },
  createComment(text) {
    return new Text(text)
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent
  },
  nextSibling(node) {
    return null
  },
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}
