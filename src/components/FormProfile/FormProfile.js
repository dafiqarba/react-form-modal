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
      <form className="form-field" action="#" onSubmit={submitHandler}>
        <FormHeader />
        <div className="form-field__box">
          <div className="form-group-box">
            <div className="form-group">
              <label className="form-data-label">Nama Lengkap</label>
              <input type="text" className="form-data-input" id="name" onChange={nameChangeHandler} />
            </div>

            <div className="form-group">
              <label className="form-data-label">Tanggal lahir</label>
              <input
                type="date"
                className="form-data-input"
                id="birthdate"
                onChange={birthdateChangeHandler}
              />
            </div>
          </div>
          <div className="form-group-box">
            <div className="form-group">
              <label className="form-data-label">Pendidikan</label>
              <input
                type="text"
                className="form-data-input"
                id="education"
                onChange={educationChangeHandler}
              />
            </div>
            <div className="form-group">
              <label className="form-data-label">Keahlian</label>
              <input
                type="text"
                className="form-data-input"
                id="skills"
                onChange={skillsChangeHandler}
              />
            </div>
          </div>
          <div className="form-group-box">
            <div className="form-group">
              <label className="form-data-label">Email</label>
              <input type="text" className="form-data-input" id="email" onChange={emailChangeHandler} />
            </div>
            <div className="form-group">
              <label className="form-data-label">No HP</label>
              <input type="text" className="form-data-input" id="phone" onChange={phoneChangeHandler} />
            </div>
          </div>
          <div className="form-group-box">
            <div className="form-group">
              <label className="form-data-label">Jenis Kelamin</label>
              <div className="form-group-radio">
                <input
                  type="radio"
                  className="form-data-radio"
                  id="laki-laki"
                  name="gender"
                  value="laki-laki"
                  onChange={genderChangeHandler}
                />
                <label htmlFor="laki-laki" className="form-data-label__radio">
                  <span className="form-radio-button"></span>
                  Laki-laki
                </label>
              </div>
              <div className="form-group-radio">
                <input
                  type="radio"
                  className="form-data-radio"
                  id="perempuan"
                  name="gender"
                  value="perempuan"
                  onChange={genderChangeHandler}
                />
                <label htmlFor="perempuan" className="form-data-label__radio">
                  <span className="form-radio-button"></span>
                  Perempuan
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-data-label">Agama</label>
              <div className="form-select__group">
                <select
                  name="agama"
                  id="religion"
                  className="form-select"
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
          <div className="form-group-box">
            <div className="form-group">
              <label className="form-data-label">Github</label>
              <input type="text" className="form-data-input" id="github" onChange={gitChangeHandler} />
            </div>
            <div className="form-group">
              <label className="form-data-label">Instagram</label>
              <input
                type="text"
                className="form-data-input"
                id="instagram"
                onChange={instaChangeHandler}
              />
            </div>
          </div>
          <div className="form-group-box">
            <div className="form-group">
              <label className="form-data-label">Alamat</label>
              <input
                type="text"
                className="form-data-input"
                id="address"
                onChange={addressChangeHandler}
              />
            </div>
            <div className="form-group">
              <label className="form-data-label">Upload Picture</label>
              <input
                type="file"
                className="form-data-input picture-form"
                id="avatar"
                onChange={avatarChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="form-field-button">
          <button className="button" id="button">
            Preview Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormProfile;
