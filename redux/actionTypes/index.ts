import app, { types as AppTypes } from './app'
import test, { types as TestTypes } from './test'

type types = AppTypes & TestTypes

const actionTypes: types = {
  ...app,
  ...test,
}

export default actionTypes