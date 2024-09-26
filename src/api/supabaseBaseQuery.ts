import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import { PostgrestError } from '@supabase/supabase-js'

const _NEVER = /* @__PURE__ */ Symbol()
export type NEVER = typeof _NEVER

export const supabaseBaseQuery = (): BaseQueryFn<
  void,
  NEVER,
  PostgrestError,
  object
> => {
  return function () {
    throw new Error(
      'When using `supabaseBaseQuery`, all queries & mutations must use the `queryFn` definition syntax.'
    )
  }
}
