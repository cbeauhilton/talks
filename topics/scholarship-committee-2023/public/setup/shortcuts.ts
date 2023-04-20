import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
    {
      key: 'j',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'k',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
    {
      key: 'l',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'h',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
