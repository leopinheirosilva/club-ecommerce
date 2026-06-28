// libs
import { FunctionComponent } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
// styles
import { LoadingContainer } from './loading.styles'

interface LoadingComponentProps {
  message?: string
}

const LoadingComponent: FunctionComponent<LoadingComponentProps> = ({
  message
}) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}

export default LoadingComponent
