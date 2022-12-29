import React, { useEffect, useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { pageContext } from "../pages/HomePage";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

function PageSelect({ handlePage, numberOfPage }) {
  let params = useParams();
  let pages;

  params.id ? (pages = parseInt(params.id)) : (pages = 1);

  const navigate = useNavigate();
  const { handlePageSelect, page } = useContext(pageContext);

  useEffect(() => {
    handlePage(page);
  }, [page, handlePage]);

  const handleChange = (event, value) => {
    handlePageSelect(value);
    navigate(`/${value}`);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Pagination
        count={numberOfPage}
        page={pages}
        onChange={handleChange}
        color="primary"
      />
    </Stack>
  );
}

export default PageSelect;
