/** Dependencies */
import React, { useEffect } from "react";
import "./Home.sass";

/** Store */
import { getEmployees } from "../../store/slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { voteForEmployee } from "../../store/slices/voteSlice";

/** Components */
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className="home">
      {data
        ?.slice()
        .sort((a, b) => b.vote - a.vote)
        .map((employee, index) => (
          <EmployeeCard
            voteForEmployee={(employeeId, newVoteCount) =>
              dispatch(voteForEmployee(employeeId, newVoteCount))
            }
            employee={employee}
            key={index}
          />
        ))}
    </div>
  );
};

export default Home;
