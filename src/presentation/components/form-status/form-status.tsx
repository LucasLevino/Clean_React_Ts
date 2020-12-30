import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '../../components/spinner/spinner'
import Context from '@/presentation/contexts/form/form-contexts'
import { stat } from 'fs'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <div data-testid="errorWrap" className={ Styles.errorWrap }>
      { isLoading && <Spinner className={ Styles.spinner } /> }
      { mainError && <span className={ Styles.error }> { mainError } </span> }
    </div>
  )
}

export default FormStatus
