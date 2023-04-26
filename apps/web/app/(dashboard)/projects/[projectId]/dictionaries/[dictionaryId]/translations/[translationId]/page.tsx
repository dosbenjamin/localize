import { type TranslationPageParams, TranslationPageParamsSchema } from '@localize/web/features/translations'

type TranslationPageProps = {
  params: TranslationPageParams
}

const TranslationPage = ({ params }: TranslationPageProps) => {
  const { translationId } = TranslationPageParamsSchema.parse(params)

  return translationId
}

export default TranslationPage
