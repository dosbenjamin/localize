import { type TranslationPageParams, TranslationPageParamsSchema } from '@localize/web/features/translations'
type TranslationPageProps = {
  params: TranslationPageParams
}

const TranslationPage = ({ params }: TranslationPageProps) => {
  const { dictionaryId, projectId } = TranslationPageParamsSchema.parse(params)

  return (
    <div className="flex flex-col">
      {dictionaryId}
      {projectId}
    </div>
  )
}

export default TranslationPage
