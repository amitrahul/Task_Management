import styles from "./ListCard.module.css";
import { FaChevronLeft, FaChevronRight, FaTrash } from "react-icons/fa";
import { arrowClick, deleteItem } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";
const ListCard = ({ items }) => {
  const dispatch = useDispatch();
  const item = items;
  const handleClick = (string) => {
    dispatch(arrowClick(item, string));
  };
  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };
  return (
    <div>
      <ul className={item.status === "done" ? styles.completed : styles.menu}>
        <li>{item._id}</li>
        <li>{item.task}</li>
        <li>{item.status}</li>
        <li>
          <button
            disabled={item.status === "backlog"}
            onClick={() => handleClick("left")}
          >
            <FaChevronLeft />
          </button>
          <button
            disabled={item.status === "done"}
            onClick={() => handleClick("right")}
          >
            <FaChevronRight />
          </button>
          <button onClick={handleDelete}>
            <FaTrash />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListCard;
