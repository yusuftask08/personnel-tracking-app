/** Dependencies */
import React, { useState } from "react";
import "./EmployeeCard.sass";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/** Components */
import Button from "../Button/Button";

const EmployeeCard = (props) => {
  const { name, id, address, image, email, job, telephone, vote } =
    props.employee;
  const [voteCount, setVoteCount] = useState(vote);
  const [increaseloading, setIncreaseLoading] = useState(false);
  const [decreaseloading, setDecreaseLoading] = useState(false);

  const handleVote = (voteType) => {
    if (increaseloading || decreaseloading) return;

    let newVoteCount;
    if (voteType === "decrease") {
      setDecreaseLoading(true);
      newVoteCount = voteCount - 1;
      setVoteCount(newVoteCount);
    } else {
      setIncreaseLoading(true);
      newVoteCount = voteCount + 1;
      setVoteCount(newVoteCount);
    }

    props
      .voteForEmployee({ ...props.employee, newVoteCount })
      .then(() => {
        voteType === "decrease"
          ? setDecreaseLoading(false)
          : setIncreaseLoading(false);
      })
      .catch((error) => {
        setDecreaseLoading(false);
        setIncreaseLoading(false);
        console.error("Hata:", error);
      });
  };

  return (
    <div className="employee-card">
      <Link to={`/employee/${id}`} key={id}>
        <img className="employee-card-image" src={image} alt="Employee-Image" />
      </Link>
      <div className="employee-card-info">
        <div className="employee-card-name">{name}</div>
        <div className="employee-card-job">{job}</div>
        <div className="employee-card-email"> {email} </div>
        <div className="employee-card-telephone"> {telephone} </div>
        <div className="employee-card-address"> {address} </div>
        <div className="employee-card-vote"> &#9733; {vote} </div>
        <Button
          className={`employee-card-vote-increase-button`}
          disabled={increaseloading}
          onClick={() => handleVote("increase")}
          loading={increaseloading}
          text="+"
        />
        <Button
          className={`employee-card-vote-decrease-button`}
          disabled={decreaseloading}
          onClick={() => handleVote("decrease")}
          loading={decreaseloading}
          text="-"
        />
      </div>
    </div>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  address: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  job: PropTypes.string,
  telephone: PropTypes.string,
  vote: PropTypes.number,
};

export default EmployeeCard;
