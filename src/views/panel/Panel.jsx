import gql from 'graphql-tag'
import { withQueryWrapper } from '../../containers/helpers'
import PanelContainer from './PanelContainer'
import { compose } from 'recompose'

const Q_DELIVERY = gql`
  {
    deliveries {
        all {
            _id
            status
            description
        }
    }
  }
`

export default compose(

    withQueryWrapper({
        query: Q_DELIVERY
    }),

)(PanelContainer)