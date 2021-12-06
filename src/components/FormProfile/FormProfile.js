import { useState } from "react";
import "./FormProfile.css";

import FormHeader from "./../FormHeader/FormHeader";

function FormProfile(props) {
  const [userData, setUserData] = useState({});

  const changeHandler = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const avatarChangeHandler = (event) => {
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      setUserData({
        ...userData,
        [event.target.name]: src,
      });
    }
  };

  const submitHandler = (event) => {
    // Prevent from form submission to server
    event.preventDefault();
    // Gather all data from input
    props.onSubmitData(userData); 
  };

  return (
    <div className="form-wrapper">
      <form className="form" action="#" onSubmit={submitHandler}>
        <FormHeader />
        <div className="form-box">
          <div className="form-groups">
            <div className="form-group">
              <label className="form-data__label">Nama Lengkap</label>
              <input type="text" className="form-data__input" onChange={changeHandler} name="name" />
            </div>

            <div className="form-group">
              <label className="form-data__label">Tanggal lahir</label>
              <input
                type="date"
                className="form-data__input"
                onChange={changeHandler}
                name="birthdate"
              />
            </div>
          </div>
          <div className="form-groups">
            <div className="form-group">
              <label className="form-data__label">Pendidikan</label>
              <input
                type="text"
                className="form-data__input"
                onChange={changeHandler}
                name="education"
              />
            </div>
            <div className="form-group">
              <label className="form-data__label">Keahlian</label>
              <input type="text" className="form-data__input" onChange={changeHandler} name="skills" />
            </div>
          </div>
          <div className="form-groups">
            <div className="form-group">
              <label className="form-data__label">Email</label>
              <input type="text" className="form-data__input" onChange={changeHandler} name="email" />
            </div>
            <div className="form-group">
              <label className="form-data__label">No HP</label>
              <input type="text" className="form-data__input" onChange={changeHandler} name="phone" />
            </div>
          </div>
          <div className="form-groups">
            <div className="form-group">
              <label className="form-data__label">Jenis Kelamin</label>
              <div className="form-group__radio">
                <input
                  type="radio"
                  className="form-data__radio"
                  id="laki-laki"
                  name="gender"
                  value="Laki-laki"
                  onChange={changeHandler}
                />
                <label htmlFor="laki-laki" className="form-data__radio-label">
                  <span className="form-data__radio-button"></span>
                  Laki-laki
                </label>
              </div>
              <div className="form-group__radio">
                <input
                  type="radio"
                  className="form-data__radio"
                  id="perempuan"
                  name="gender"
                  value="Perempuan"
                  onChange={changeHandler}
                />
                <label htmlFor="perempuan" className="form-data__radio-label">
                  <span className="form-data__radio-button"></span>
                  Perempuan
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-data__label">Agama</label>
              <div className="form-group__select">
                <select className="form-data__select" onChange={changeHandler} name="religion">
                  <option value=""></option>
                  <option value="Islam">Islam</option>
                  <option value="Kristen">Kristen</option>
                  <option value="Katolik">Katolik</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Buddha">Buddha</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-groups">
            <div className="form-group">
              <label className="form-data__label">Github</label>
              <input type="text" className="form-data__input" onChange={changeHandler} name="git" />
            </div>
            <div className="form-group">
              <label className="form-data__label">Instagram</label>
              <input type="text" className="form-data__input" onChange={changeHandler} name="insta" />
            </div>
          </div>
          <div className="form-groups">
            <div className="form-group">
              <label className="form-data__label">Alamat</label>
              <input type="text" className="form-data__input" onChange={changeHandler} name="address" />
            </div>
            <div className="form-group">
              <label className="form-data__label">Upload Picture</label>
              <input
                type="file"
                className="form-data__input picture-form"
                onChange={avatarChangeHandler}
                name="avatar"
              />
            </div>
          </div>
        </div>
        <div className="form-button">
          <button className="form-button__submit" id="button">
            Preview Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormProfile;
