import Modal from "react-modal";

import styles from "./ImageModal.module.css";

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

const ImageModal: React.FC<Props> = ({ modalIsOpen, closeModal, src, alt }) => {
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={closeModal} className={styles.modalBtn}>
        close
      </button>
      <div>
        <img className={styles.modalImg} src={src} alt={alt} />
        <p className={styles.modalText}>{alt}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
