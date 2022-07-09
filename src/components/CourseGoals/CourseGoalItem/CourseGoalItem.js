import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = ({id, onDelete, ...otherProps}) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {otherProps.children}
    </li>
  );
};

export default CourseGoalItem;
