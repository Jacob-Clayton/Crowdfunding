import { type AppType } from "next/dist/shared/lib/utils";
import { CrowdFundingProvider } from '../../context/CrowdFunding'
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <>
    <CrowdFundingProvider>
      <Component {...pageProps} />
    </CrowdFundingProvider>
  </>
  );
};

export default MyApp;
