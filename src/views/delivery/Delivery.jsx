import gql from 'graphql-tag'
import { withQueryWrapper, withMutations } from '../../containers/helpers'
import DeliveryContainer from './DeliveryContainer'
import { compose } from 'recompose'

const Q_DELIVERY = gql`
  {
    deliveries {
        all {
            _id
            address
            carrier {
                _id
                name
            }
            date
            status
            products {
                _id
                description
            }
            description
        }
        total
    }
    products {
        all {
            _id
            description
        }
    }
    carriers {
        _id
        name
    }
  }
`

const M_INSERT = gql`
  mutation createDelivery($input: CreateDeliveryInput!) {
    createDelivery(input: $input) {
        _id
    }
  }
`

const M_EDIT = gql`
  mutation updateDelivery($input: UpdateDeliveryInput!) {
    updateDelivery(input: $input) {
        _id
    }
  }
`

const M_DELETE = gql`
  mutation removeDelivery($input: RemoveDeliveryInput!) {
    removeDelivery(input: $input) {
        _id
    }
  }
`;

export default compose(

    withQueryWrapper({
        query: Q_DELIVERY
    }),

    withMutations({

        insert: {
            mutation: M_INSERT,
            refetchQueries: (mutationResult) => [
                { query: Q_DELIVERY, args: {} }
            ]
        },

        edit: {
            mutation: M_EDIT,
            refetchQueries: (mutationResult) => [
                { query: Q_DELIVERY, args: {} }
            ]
        },

        delete: {
            mutation: M_DELETE,
            refetchQueries: (mutationResult) => [
                { query: Q_DELIVERY, args: {} }
            ]
        },

    })

)(DeliveryContainer)