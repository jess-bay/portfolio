import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/educationApi'

export function useEducation() {
  const edQuery = useQuery({
    queryKey: ['education'],
    queryFn: () => api.getEducation(),
  })
  return {
    ...edQuery,
  }
}
