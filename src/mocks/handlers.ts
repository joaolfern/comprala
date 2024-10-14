const BASE_URL = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1`
import { mockGroceryItems, mockGroceryLists } from '@/mocks/mockData'
import { http, HttpResponse as Res } from 'msw'

const GROCERY_LISTS = `${BASE_URL}/grocery_lists`
const GROCERY_ITEMS = `${BASE_URL}/grocery_items`

export const defaultHandlers = [
  http.get(GROCERY_LISTS, () => Res.json(mockGroceryLists)),
  http.get(GROCERY_ITEMS, () => Res.json(mockGroceryItems)),
]
