import './CategoryComponent.css';
import { AiTwotonePushpin } from 'react-icons/ai';

const CategoryComponent = ({ className, handleClick, categoryName }) => {
  return (
    <div className={className} onClick={handleClick}>
      <p>{categoryName}</p>
      <AiTwotonePushpin />
    </div>
  );
};

export default CategoryComponent;
