import PageContent from "../../components/PageContent";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleReturnBack = () => {
    navigate(-1);
  };

  return (
    <PageContent title="Page Not Found">
      <Typography>
        There is no such page, do you want to{" "}
        <RouterLink onClick={handleReturnBack}>return back</RouterLink>?
      </Typography>
    </PageContent>
  );
}
