import { Tables } from '@/types/supabase'
import { faker } from '@faker-js/faker'

export const mockGroceryLists = faker.helpers.multiple(
  (): Tables<'grocery_lists'> => ({
    access_hash: faker.number.int().toString(),
    created_at: faker.date.recent().toISOString(),
    id: faker.number.int().toString(),
    name: faker.lorem.words(2),
  }),
  { count: 10 }
)

export const mockGroceryList: Tables<'grocery_lists'> = {
  access_hash: faker.number.int().toString(),
  created_at: faker.date.recent().toISOString(),
  id: faker.number.int().toString(),
  name: faker.lorem.words(2),
}

export const mockGroceryItems = faker.helpers.multiple(
  (): Tables<'grocery_items'> => ({
    id: faker.number.int().toString(),
    name: faker.lorem.words(2),
    quantity: faker.number.int({ min: 1, max: 4 }),
    completed: faker.helpers.arrayElement([true, false]),
    created_at: faker.date.recent().toISOString(),
    list_id: faker.number.int().toString(),
    updated_at: faker.date.recent().toISOString(),
  }),
  { count: 10 }
)
