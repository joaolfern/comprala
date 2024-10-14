import { useCurrentList } from '@/pages/GroceryList/hooks/useCurrentList'
import { Dropdown } from 'antd-mobile'

export function Details() {
  const { currentList } = useCurrentList()

  return (
    <section>
      <header>
        <Dropdown>{currentList?.name}</Dropdown>
      </header>
    </section>
  )
}
