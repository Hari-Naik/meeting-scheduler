import React, { useState } from "react";
import Input from "../Input";
import { companySize, skills } from "../../data/data";
import OptionSelector from "./OptionSelector";
import TextField from "../TextField";
import Button from "../Button";

// {
// 	selectedOption,
// 	selectedSkills,
// 	name,
// 	email,
// 	info,
// 	workspaceName,
// 	handleOptionSelect,
// 	handleSelectSkills,
// 	setName,
// 	setEmail,
// 	setInfo,
// 	setWorkSpaceName,
//   }

const MeetingDetails = ({ handleSubmit, loading }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [info, setInfo] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");

  const handleOnChange = e => {
    console.log(e.target.id);
    if (e.target.id === "Name") {
      setName(e.target.value);
    } else if (e.target.id === "Email") {
      setEmail(e.target.value);
    } else if (e.target.id === "info") {
      setInfo(e.target.value);
    } else {
      setWorkspaceName(e.target.value);
    }
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const handleSelectSkills = option => {
    if (selectedSkills.includes(option)) {
      setSelectedSkills(prev => prev.filter(skill => skill !== option));
    } else {
      setSelectedSkills(prev => [...prev, option]);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = {
      username: name,
      email: email,
      info: info,
      workspaceName: workspaceName,
      selectedOption: selectedOption,
      selectedSkills: selectedSkills,
    };
    handleSubmit(data);
  };

  return (
    <div className="flex-1 p-4 h-[calc(100vh - 370px)] md:h-[70vh] overflow-hidden overflow-y-auto">
      <h2 className="text-lg text-[#242938] font-semibold mb-2">
        Enter Details
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Input
          label={"Name"}
          type={"text"}
          placeholder={"John Doe"}
          value={name}
          onChange={handleOnChange}
        />
        <Input
          label={"Email"}
          type={"email"}
          value={email}
          onChange={handleOnChange}
          placeholder={"account@refero.design"}
        />
        <Button text="Add Guests" type="button" outlined={true} />
        <OptionSelector
          title={"I want Fibery to work for"}
          options={companySize}
          selectedOption={[selectedOption]}
          handleSelect={handleOptionSelect}
        />
        <OptionSelector
          title={"You are more about"}
          selectedOption={selectedSkills}
          options={skills}
          handleSelect={handleSelectSkills}
        />
        <TextField
          label="Please, share anything that will help prepare your meeting"
          id="info"
          value={info}
          onChange={handleOnChange}
        />
        <Input
          type="text"
          label="Please, share with us the name of your Fibery workspace (if any)"
          notRequired
          value={workspaceName}
          onChange={handleOnChange}
        />
        <Button text="Schedule Event" type="submit" disabled={loading} />
      </form>
    </div>
  );
};

export default MeetingDetails;
