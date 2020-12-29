import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '../../components/spinner/spinner'
import Context from '@/presentation/contexts/form/form-contexts'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid="errorWrap" className={ Styles.errorWrap }>
      { isLoading && <Spinner className={ Styles.spinner } /> }
      { errorMessage && <span className={ Styles.error }> { errorMessage } </span> }
    </div>
  )
}

export default FormStatus