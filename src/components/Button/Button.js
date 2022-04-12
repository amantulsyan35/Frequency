import './Button.css';

export const FormButton = ({ label, onClick, disabledAttr }) => {
  return (
    <div className='form-button'>
      <button
        className={
          disabledAttr ? 'disabled-button' : 'btn btn-icon btn-primary'
        }
        onClick={onClick}
        disabled={disabledAttr}
      >
        <i className='fa-solid fa-user-plus'></i>
        {label}
      </button>
    </div>
  );
};
