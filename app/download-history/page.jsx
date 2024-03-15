/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import withAuth from "../auth/RouterAuth";
import DownloadHistoryCard from "../components/Cards/DownloadHistoryCard";

const DownloadHistoryPage = () => {
  return <DownloadHistoryCard />;
};

export default withAuth(DownloadHistoryPage);
