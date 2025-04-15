import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

interface Props {
  params: { id: string }
}

export default async function CompanyDetails({ params: { id } }: Props) {
  const supabase = createClientComponentClient()

  const { data: company, error } = await supabase
    .from('companies')
    .select()
    .eq('id', id)
    .single()

  if (error) {
    console.error(error)
    return <div>Error loading company details</div>
  }

  if (!company) {
    return <div>Company not found</div>
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <p>Location: {company.location}</p>
      <p>Details: {company.details}</p>
    </div>
  )
}
