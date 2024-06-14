import { auth } from "@clerk/nextjs/server";

const TranslatePage = () => {
  auth().protect();
  return <div>Translate</div>;
};

export default TranslatePage;
