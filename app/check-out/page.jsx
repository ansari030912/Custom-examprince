import CheckOutCard from "../components/Cards/CheckOutCard";

export async function generateMetadata() {
  return {
    title: `Updated Certificates Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/check-out`,
        },
      ],
    },
  };
}

const CheckOut = () => {
  return <CheckOutCard />;
};

export default CheckOut;
