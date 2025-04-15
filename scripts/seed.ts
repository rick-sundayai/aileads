import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function seedDatabase() {
  const companies = [
    {
      id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
      name: 'Acme Corp',
      location: 'New York',
      details: 'Details about Acme Corp',
    },
    {
      id: 'b2c3d4e5-f678-9012-3456-7890abcdefa1',
      name: 'Beta Inc',
      location: 'San Francisco',
      details: 'Details about Beta Inc',
    },
    {
      id: 'c3d4e5f6-7890-1234-5678-90abcdefa1b2',
      name: 'Gamma Ltd',
      location: 'London',
      details: 'Details about Gamma Ltd',
    },
  ]

  for (const company of companies) {
    const { error } = await supabase
      .from('companies')
      .insert([company])

    if (error) {
      console.error('Error inserting company:', error)
    }
  }

  console.log('Database seeded successfully!')
}

seedDatabase()
