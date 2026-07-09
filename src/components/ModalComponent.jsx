function ModalComponent({

  show,

  onConfirm,

  onCancel

}) {

  if (!show) return null;

  return (

    <div className="modal-overlay">

      <div className="glass-modal">

        <h2>

          Delete Feedback?

        </h2>

        <p>

          This action cannot be undone.

        </p>

        <div className="modal-actions">

          <button

            className="cancel-button"

            onClick={onCancel}

          >

            Cancel

          </button>

          <button

            className="confirm-button"

            onClick={onConfirm}

          >

            Delete

          </button>

        </div>

      </div>

    </div>

  );

}

export default ModalComponent;