import gql from 'graphql-tag'
import { withQueryWrapper, withMutations } from '../../containers/helpers'
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

const M_SEARCH = gql`
  mutation createDelivery($input: CreateDeliveryInput!) {
    createDelivery(input: $input) {
        _id
    }
  }
`

export default compose(

    withQueryWrapper({
        query: Q_DELIVERY
    }),

    withMutations({

        search: {
            mutation: M_SEARCH,
            refetchQueries: (mutationResult) => [
                { query: Q_DELIVERY, args: mutationResult.data.createDelivery }
            ]
        },


    })

)(PanelContainer)