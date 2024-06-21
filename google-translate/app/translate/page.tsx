import TranslationForm from "@/components/TranslationForm";
import { auth } from "@clerk/nextjs/server";

const TranslatePage = () => {
  auth().protect();
  const { userId } = auth();
  const languageEndpoint = "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0"
  return (
    <div>
      <TranslationForm />
    </div>
  );
};

export default TranslatePage;
