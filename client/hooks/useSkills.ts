import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/skillsApi.ts'

export function useSkills() {
  const skillQuery = useQuery({
    queryKey: ['skills'],
    queryFn: () => api.getSkills(),
  })
  return {
    ...skillQuery,
  }
}
