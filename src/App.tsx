import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ActionSheet, Button } from 'antd-mobile'

const actions = [
  { text: '复制', key: 'copy' },
  { text: '修改', key: 'edit' },
  { text: '保存', key: 'save' },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>

      <div className='card'>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>

      <ActionSheet
        visible={count > 0}
        actions={actions}
        onClose={() => setCount(0)}
      />
    </>
  )
}

export default App
