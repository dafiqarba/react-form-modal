import "./ModalWindow.css";

function ModalWindow(props) {
  if (props.modalState === true) {
    //Visible
    document.querySelector(".modal-wrapper").classList.add("visible");
    //Invisible
    document.querySelector(".modal-wrapper").addEventListener("click", () => {
      document.querySelector(".modal-wrapper").classList.remove("visible");
    });
  }

  return (
    <div className="modal-wrapper" id="modal-wrapper">
      <div className="card">
        <div className="card__left">
          <div className="card__left-img-box">
            <img
              alt="avatar"
              className="card__left-img"
              id="previewAvatar"
              src={props.userData.avatar}
            />
          </div>
        </div>
        <div className="card__right">
          <div className="card__right-id-box">
            <h1 className="card__right-id">
              <span className="card__right-id-name" id="previewName">
                {props.userData.name}
              </span>
              <span className="card__right-id-batch">Prodemy #7</span>
            </h1>
          </div>
          <div className="card__right-detail-box">
            <div className="card__right-detail">
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">Tanggal Lahir</p>
                <p className="card__right-detail-data" id="previewBirthdate">
                  {props.userData.birthdate}
                </p>
              </div>
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">Pendidikan</p>
                <p className="card__right-detail-data" id="previewEducation">
                  {props.userData.education}
                </p>
              </div>
            </div>
          </div>
          <div className="card__right-detail-box">
            <div className="card__right-detail">
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">Jenis Kelamin</p>
                <p className="card__right-detail-data" id="previewGender">
                  {props.userData.gender}
                </p>
              </div>
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">Agama</p>
                <p className="card__right-detail-data" id="previewReligion">
                  {props.userData.religion}
                </p>
              </div>
            </div>
          </div>
          <div className="card__right-detail-box">
            <div className="card__right-detail">
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">Email</p>
                <p className="card__right-detail-data" id="previewEmail">
                  {props.userData.email}
                </p>
              </div>
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">No HP</p>
                <p className="card__right-detail-data" id="previewPhone">
                  {props.userData.phone}
                </p>
              </div>
            </div>
          </div>
          <div className="card__right-detail-box">
            <div className="card__right-detail">
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">Keahlian</p>
                <p className="card__right-detail-data" id="previewSkills">
                  {props.userData.skills}
                </p>
              </div>
              <div className="card__right-detail-group">
                <p className="card__right-detail-label">Alamat</p>
                <p className="card__right-detail-data" id="previewAddress">
                  {props.userData.address}
                </p>
              </div>
            </div>
          </div>
          <div className="card__right-social">
            <div className="card__right-social-box">
              <a href={"https://github.com/" + props.userData.git} id="previewGithub">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="card__right-social-box">
              <a href={"https://instagram.com/" + props.userData.insta} id="previewInstagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
