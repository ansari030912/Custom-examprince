import HotExamTable from "./HotExamTable";

const HotExamCard = async () => {
  const response = await fetch(`${process.env.baseURL}/v1/hot_exams`, {
    headers: {
      "x-api-key": "ed79766c-2cc1-4967-8d3c-035387603caf",
    },
  });

  const data = await response.json();

  return <HotExamTable data={data} />;
};

export default HotExamCard;
