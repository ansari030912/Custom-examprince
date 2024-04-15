"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ExamLinks = ({ vendorData, vendorTitle }) => {
  const [storedVendorData, setStoredVendorData] = useState([]);
  const [displayedExams, setDisplayedExams] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(vendorTitle));

    if (existingData) {
      setStoredVendorData(existingData);
      setDisplayedExams(shuffleArray(existingData.vendor_exams).slice(0, 5));
    } else {
      const storedData = JSON.parse(localStorage.getItem(vendorTitle));
      if (!storedData) {
        localStorage.setItem(vendorTitle, JSON.stringify(vendorData));
        setStoredVendorData(vendorData);
        setDisplayedExams(shuffleArray(vendorData.vendor_exams).slice(0, 5));
      }
    }
  }, [vendorData, vendorTitle]);

  useEffect(() => {
    if (
      storedVendorData.vendor_exams &&
      storedVendorData.vendor_exams.length === 0
    ) {
      localStorage.removeItem(vendorTitle);
    }
  }, [storedVendorData, vendorTitle]);

  const handleLinkClick = () => {
    const displayedExamIds = displayedExams.map((exam) => exam.exam_id);
    const updatedStoredExams = storedVendorData.vendor_exams.filter(
      (exam) => !displayedExamIds.includes(exam.exam_id)
    );
    const updatedStoredData = {
      ...storedVendorData,
      vendor_exams: updatedStoredExams,
    };
    localStorage.setItem(vendorTitle, JSON.stringify(updatedStoredData));
  };

  return (
    <div>
      {displayedExams?.length > 0 && (
        <div
          style={{ overflowX: "auto" }}
          className="max-w-full mx-auto bg-white shadow-md mt-4"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="text-white bg-gradient-to-l  from-gray-900 via-blue-400 to-gray-900">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-medium text-white uppercase tracking-wider"
                >
                  Other useful related exams by - (
                  {storedVendorData.vendor_title})
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-sm font-medium text-white uppercase tracking-wider"
                >
                  Questions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {displayedExams.map((topic) => (
                <tr
                  key={topic.exam_id}
                  className="hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-gray-800 hover:to-blue-500 "
                >
                  <Link
                    href={`/exam-questions/${storedVendorData.vendor_perma}/${topic.exam_perma}`}
                    onClick={handleLinkClick}
                  >
                    <td className="px-6 py-4 text-base whitespace-nowrap">
                      <span>{topic.exam_title}</span>
                    </td>
                  </Link>

                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {topic.exam_questions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExamLinks;
