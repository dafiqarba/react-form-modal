import { useState } from "react";
import "./FormProfile.css";

import FormHeader from "./../FormHeader/FormHeader";

function FormProfile(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredBirthdate, setEnteredBirthdate] = useState("");
  const [enteredEducation, setEnteredEducation] = useState("");
  const [enteredSkills, setEnteredSkills] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [enteredReligion, setEnteredReligion] = useState("");
  const [enteredGit, setEnteredGit] = useState("");
  const [enteredInsta, setEnteredInsta] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredAvatar, setEnteredAvatar] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const birthdateChangeHandler = (event) => {
    setEnteredBirthdate(event.target.value);
  };

  const educationChangeHandler = (event) => {
    setEnteredEducation(event.target.value);
  };

  const skillsChangeHandler = (event) => {
    setEnteredSkills(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setEnteredGender(event.target.value);
  };

  const religionChangeHandler = (event) => {
    setEnteredReligion(event.target.value);
  };

  const gitChangeHandler = (event) => {
    setEnteredGit(event.target.value);
  };

  const instaChangeHandler = (event) => {
    setEnteredInsta(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };
  
  const avatarChangeHandler = (event) => {
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      setEnteredAvatar(src);
    }
  };

  const submitHandler = (event) => {
    // Prevent from form submission to server
    event.preventDefault();
    // Gather all data from input
    const userData = {
      name: enteredName,
      birthdate: enteredBirthdate,
      education: enteredEducation,
      skills: enteredSkills,
      email: enteredEmail,
      phone: enteredPhone,
      gender: enteredGender,
      religion: enteredReligion,
      git: enteredGit,
      insta: enteredInsta,
      address: enteredAddress,
      avatar: enteredAvatar,
    };

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
              <input type="text" className="form-data__input" onChange={nameChangeHandler} />
            </div>

            <div className="form-group">
              <label className="form-data__label">Tanggal lahir</label>
              <input
                type="date"
                className="form-data__input"
                onChange={birthdateChangeHandler}
              />
            </div>
          </div>
          <div className="form-groups">
            <div className="form-group">
              <label className="form-data__label">Pendidikan</label>
              <input
                type="text"
                className="form-data__input"
                onChange={educationChangeHandler}
              />
            </div>
            <div className="form-group">
              <label className="form-data__label">Keahlian</label>
              <input
                type="text"
                className="form-data__input"
                onChange={skillsChangeHandler}
              />
            </div>
          </div>
          <div className="form-groups">
            <div className="form-group">
              <label className="form-data__label">Email</label>
              <input type="text" className="form-data__input" onChange={emailChangeHandler} />
            </div>
            <div className="form-group">
              <label className="form-data__label">No HP</label>
              <input type="text" className="form-data__input" onChange={phoneChangeHandler} />
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
                  onChange={genderChangeHandler}
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
                  onChange={genderChangeHandler}
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
                <select
                  name="agama"
                  className="form-data__select"
                  onChange={religionChangeHandler}
                >
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
              <input type="text" className="form-data__input" onChange={gitChangeHandler} />
            </div>
            <div className="form-group">
              <label className="form-data__label">Instagram</label>
              <input
                type="text"
                className="form-data__input"
                onChange={instaChangeHandler}
              />
            </div>
          </div>
          <div className="form-groups">
            <div className="form-group">
              <label className="form-data__label">Alamat</label>
              <input
                type="text"
                className="form-data__input"
                onChange={addressChangeHandler}
              />
            </div>
            <div className="form-group">
              <label className="form-data__label">Upload Picture</label>
              <input
                type="file"
                className="form-data__input picture-form"
                onChange={avatarChangeHandler}
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
