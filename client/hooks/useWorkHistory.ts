import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/workHistoryApi.ts'

export function useWorkHistory() {
  const workQuery = useQuery({
    queryKey: ['workhistory'],
    queryFn: () => api.getWorkHistory(),
  })
  return {
    ...workQuery,
  }
}
