import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>어디GO | {title}</title>
    </Helmet>
  );
};
