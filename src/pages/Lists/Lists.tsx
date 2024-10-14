import { useGetGroceryListsQuery } from '@/api'
import { List, SearchBar } from 'antd-mobile'
import dayjs from 'dayjs'

export function Lists() {
  const { data } = useGetGroceryListsQuery()

  return (
    <section>
      <SearchBar placeholder='Pesquisar' />

      <List>
        <EmptyWrapper length={data?.length}>
          {data?.map((groceryList) => (
            <List.Item
              key={groceryList.id}
              description={`Atualizado ${dayjs(groceryList.created_at).fromNow()}`}
              onClick={() => console.log('clicked')}
            >
              {groceryList.name}
            </List.Item>
          ))}
        </EmptyWrapper>
      </List>
    </section>
  )
}

function EmptyWrapper({
  length,
  children,
}: {
  length: number | undefined
  children: React.ReactNode
}) {
  if (length) return children

  return <p>Não há</p>
}
