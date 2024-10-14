import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/router'
import { ConfigProvider } from 'antd-mobile'
import { AuthProvider } from '@/providers/AuthProvider/AuthProvider'

function App() {
  return (
    <ConfigProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ConfigProvider>
  )
}

export default App
