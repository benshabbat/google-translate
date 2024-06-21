import TranslationForm from "@/components/TranslationForm";
import { auth } from "@clerk/nextjs/server";

const TranslatePage = () => {
  auth().protect();
  const { userId } = auth();
 
  return (
    <div>
      <TranslationForm />
    </div>
  );
};

export default TranslatePage;
