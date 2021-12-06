import "./ModalWindow.css";

import ModalAvatar from "./ModalAvatar";
import ModalDataId from "./ModalDataId";
import ModalData from "./ModalData";
import ModalSocialMedia from "./ModalSocialMedia";

function ModalWindow(props) {

  let label = {
    label1: "Tanggal Lahir",
    label2: "Pendidikan",
    label3: "Jenis Kelamin",
    label4: "Agama",
    label5: "Email",
    label6: "Nomor HP",
    label7: "Keahlian",
    label8: "Alamat",
  };

  return (
    <div className={(props.modalState) ? "modal-wrapper visible" : "modal-wrapper invisible"} onClick={props.onClose}>
      <div className="card">
        <ModalAvatar avatar={props.userData.avatar} />
        <div className="card-info">
          <ModalDataId name={props.userData.name} />
          <ModalData
            data1={props.userData.birthdate}
            data2={props.userData.education}
            label1={label.label1}
            label2={label.label2}
          />
          <ModalData
            data1={props.userData.gender}
            data2={props.userData.religion}
            label1={label.label3}
            label2={label.label4}
          />
          <ModalData
            data1={props.userData.email}
            data2={props.userData.phone}
            label1={label.label5}
            label2={label.label6}
          />
          <ModalData
            data1={props.userData.skills}
            data2={props.userData.address}
            label1={label.label7}
            label2={label.label8}
          />
          <ModalSocialMedia git={props.userData.git} insta={props.userData.insta} />
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
