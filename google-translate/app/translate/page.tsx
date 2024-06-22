import TranslationForm from "@/components/TranslationForm";
import { auth } from "@clerk/nextjs/server";

export type TranslationLanguages = {
  translation: {
    [key: string]: {
      name: string;
      nativeName: string;
      dir: "ltr" | "rtl";
    };
  };
};
const TranslatePage = async () => {
  auth().protect();
  const { userId } = auth();
  const languageEndpoint =
    "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";
  const response = await fetch(languageEndpoint, {
    next: {
      revalidate: 60 * 60 * 24, //cache the res 24h refresh
    },
  });
  
  return (
    <div>
      <TranslationForm />
    </div>
  );
};

export default TranslatePage;
