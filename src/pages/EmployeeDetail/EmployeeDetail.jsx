/** Dependencies */
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./EmployeeDetail.sass";

/** Store */
import { getEmloyeeDetailData } from "../../store/slices/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { voteForEmployee } from "../../store/slices/voteSlice";

/** Components */
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Button from "../../components/Button/Button";

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.employee.employeeData);

  useEffect(() => {
    dispatch(getEmloyeeDetailData(id));
  }, [dispatch, id]);

  return (
    <div className="employee-detail-page">
      <Button className="back-button" text="<" onClick={() => navigate(-1)} />
      <EmployeeCard
        className="employee-detail-card"
        employee={data}
        key={data?.id}
      />
    </div>
  );
};

export default EmployeeDetail;
