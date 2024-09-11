import initTranslations from "@/app/i18n";
import Link from "next/link";
import React from "react";

export default async function Page({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["about"]);

  return (
    <div className="text-center">
      <h1>About Us</h1>
      <p>
        <b>{t("Our Adress")}</b>
      </p>
      <p>Tashkent, Afrosiyob city</p>
      <Link className="text-blue-600 underline" href={"/"}>
        Back
      </Link>
    </div>
  );
}
