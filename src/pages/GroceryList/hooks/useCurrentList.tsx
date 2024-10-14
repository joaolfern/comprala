import {
  useGetCroceryListDetailsQuery,
  useGetLatestGroceryListQuery,
} from '@/api'
import { Tables } from '@/types/supabase'
import { useMemo } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export function useCurrentList() {
  const [searchParams] = useSearchParams()
  const { state } = useLocation()
  const stateList = ((state || {}) as { list?: Tables<'grocery_lists'> })?.list
  const searchListId = useMemo(() => searchParams.get('listId'), [searchParams])
  const { data: latestData, isLoading: isLoadingLatest } =
    useGetLatestGroceryListQuery(undefined, {
      skip: Boolean(stateList || searchListId),
    })
  const { data: idData, isLoading: isLoadingSearch } =
    useGetCroceryListDetailsQuery(searchListId as string, {
      skip: Boolean(searchListId || stateList),
    })

  return {
    currentList: stateList || idData || latestData,
    isLoading: isLoadingLatest || isLoadingSearch,
  }
}
