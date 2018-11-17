import increament, { types as IncreamentTypes } from './increament'
import loading, { types as LoadingTypes } from './loading'

export type AppActionType = {
  increament: IncreamentTypes,
  loading: LoadingTypes
}

const actions: AppActionType = {
  increament,
  loading
}

export default actions