import { type LanguagePageParams, LanguagePageParamsSchema } from '@localize/web/features/languages'
import { Form } from '@localize/ui'
import { createClient } from '@localize/web/libs/supabase/server'

type TranslationPageProps = {
  params: LanguagePageParams
}

const TranslationPage = async ({ params }: TranslationPageProps) => {
  const supabase = createClient()

  const { dictionaryId } = LanguagePageParamsSchema.parse(params)

  const keys = await supabase.from('keys').select('*').eq('dictionary_id', dictionaryId)

  return (
    <div className="flex flex-col space-y-4">
      {keys.data?.map(({ key, id }) => (
        <div key={id} className="grid grid-cols-2 gap-4">
          <Form.Input defaultValue={key} placeholder="Translation key" />
          <Form.Input />
        </div>
      ))}
    </div>
  )
}

export default TranslationPage
