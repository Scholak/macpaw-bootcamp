import { QueryClient } from 'react-query'

// Exported here to ue single instance. In this project, I don't need to use it but it's necessary for invalidating queries.
export const queryCLient = new QueryClient()