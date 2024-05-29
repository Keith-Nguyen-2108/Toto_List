import { defineRule } from 'vee-validate'
import * as rules from '@vee-validate/rules'

Object.keys(rules).forEach((rule) => {
  defineRule(rule as keyof typeof rules, rules[rule as keyof typeof rules])
})

defineRule('required', (value: string, _: any, ctx: Record<string, any>) => {
  if (!value || !value.length) {
    return `${ctx.label} is required`
  }
  return true
})
