import { execSync } from 'child_process'
import dotenv from 'dotenv'
dotenv.config()

try {
  execSync(
    `npx supabase gen types typescript --project-id ${process.env.EXPO_PUBLIC_SUPABASE_PROJECT_ID} --schema public > src/types/supabase.ts`
  )
  console.log('Supabase types generated successfully!')
} catch (error) {
  console.error('Error generating Supabase types:', error)
}
