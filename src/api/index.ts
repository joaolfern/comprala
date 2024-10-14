import { supabase } from '@/api/supabase'
import { supabaseBaseQuery } from '@/api/supabaseBaseQuery'
import { isProduction } from '@/constants'
import { Tables } from '@/types/supabase'
import { createApi } from '@reduxjs/toolkit/query/react'
import { AuthError, Session } from '@supabase/supabase-js'

const formatAuthError = (error: AuthError) => ({
  error: {
    message: error.message,
    details: '',
    hint: '',
    code: error.status?.toString?.() || '',
  },
})

export const api = createApi({
  reducerPath: 'api',
  baseQuery: supabaseBaseQuery(),
  endpoints: (builder) => ({
    getSession: builder.query<Session | null, undefined>({
      queryFn: async () => {
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          return formatAuthError(error)
        }

        return { data: data.session }
      },
    }),
    createSession: builder.query<Session | null, string>({
      queryFn: async (captchaToken: string) => {
        const { data, error } = await supabase.auth.signInAnonymously({
          options: isProduction ? { captchaToken } : undefined,
        })

        if (error) {
          return formatAuthError(error)
        }

        localStorage.setItem('hasUser', 'true')

        return { data: data?.session }
      },
    }),
    getUsers: builder.query<Tables<'users'>[] | null, void>({
      queryFn: async () => {
        const { data, error } = await supabase.from('users').select()

        if (error) {
          return { error }
        }

        return { data }
      },
    }),
    getGroceryLists: builder.query<Tables<'grocery_lists'>[] | null, void>({
      queryFn: async () => {
        const { data, error } = await supabase.from('grocery_lists').select()

        if (error) {
          return { error }
        }

        return { data }
      },
    }),
    getCroceryListDetails: builder.query<
      Tables<'grocery_lists'> | null,
      string
    >({
      queryFn: async (id: string) => {
        const { data, error } = await supabase
          .from('grocery_lists')
          .select()
          .match({ id })

        if (error) {
          return { error }
        }

        return { data: data?.[0] }
      },
    }),
    getGroceryItems: builder.query<Tables<'grocery_items'>[] | null, void>({
      queryFn: async () => {
        const { data, error } = await supabase.from('grocery_items').select()

        if (error) {
          return { error }
        }

        return { data }
      },
    }),
    getLatestGroceryList: builder.query<Tables<'grocery_lists'> | null, void>({
      queryFn: async () => {
        const { data, error } = await supabase
          .from('grocery_lists')
          .select(
            `
            *,
            grocery_items (
              *
            )
          `
          )
          .order('created_at', { ascending: false })
          .limit(1)

        if (error) {
          return { error }
        }

        return { data: data?.[0] }
      },
    }),
  }),
})

export const {
  useGetSessionQuery,
  useCreateSessionQuery,
  useGetUsersQuery,
  useGetGroceryListsQuery,
  useGetGroceryItemsQuery,
  useGetLatestGroceryListQuery,
  useGetCroceryListDetailsQuery,
} = api
