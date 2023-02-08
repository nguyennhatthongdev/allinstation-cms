import { Form, Field, FieldArray, ErrorMessage, configure, defineRule } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ja from '@vee-validate/i18n/dist/locale/ja.json'
import { required, max, email, min } from '@vee-validate/rules'

defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('required', required)
defineRule('required_custom', required)

configure({
  validateOnInput: true,
  validateOnBlur: true,
  generateMessage: localize({
    en: {
      messages: {
        ...en.messages
      }
    },
    ja: {
      messages: {
        ...ja.messages
      }
    }
  })
})

export function setupVeeValidate (app) {
  app.component('VeeForm', Form)
  app.component('VeeField', Field)
  app.component('VeeFieldArray', FieldArray)
  app.component('VeeErrorMessage', ErrorMessage)
}
