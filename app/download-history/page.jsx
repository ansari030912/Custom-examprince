/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import withAuth from "../auth/RouterAuth";
import DownloadHistoryCard from "../components/Cards/DownloadHistoryCard";


export const metadata = {
  title: "Download History",
  description: "A world of css",
  keywords: "A world of css",
  robots: "noIndex",
};
const DownloadHistoryPage = () => {

  return (
    <DownloadHistoryCard />
  );
};

export default withAuth(DownloadHistoryPage);
