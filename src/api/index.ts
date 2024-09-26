import { supabase } from '@/api/supabase'
import { supabaseBaseQuery } from '@/api/supabaseBaseQuery'
import { Tables } from '@/types/supabase'
import { createApi } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: supabaseBaseQuery(),
  endpoints: (builder) => ({
    getUsers: builder.query<Tables<'users'>[] | null, void>({
      queryFn: async () => {
        const { data, error } = await supabase.from('users').select()

        if (error) {
          return { error }
        }

        return { data }
      },
    }),
  }),
})

export {}

export const { useGetUsersQuery } = api
