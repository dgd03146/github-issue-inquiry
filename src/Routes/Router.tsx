import React from "react";
import Layout from "@/components/layouts/Layout";
import { NotFound, Detail, Home } from "@/pages";

import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detail/:issue_number" element={<Detail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
