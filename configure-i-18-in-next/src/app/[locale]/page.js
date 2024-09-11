import ExampleClientComponent from "@/components/ExampleClientComponent";
import Link from "next/link";
import initTranslations from "../i18n";

export default async function Home({ params: {locale} }) {

  const {t} = await initTranslations(locale, ['common'])

  return (
    <main className="container flex justify-center flex-col items-center">
      <h1>{t('Welcome to our website')}</h1>
      <ExampleClientComponent />
      <Link className="text-blue-600 underline" href={'/about-us'}>About-us page</Link>
    </main>
  );
}
