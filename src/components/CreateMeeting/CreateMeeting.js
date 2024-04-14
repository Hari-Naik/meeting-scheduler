import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MeetingDetails from "./MeetingDetails";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MeetingCalender from "./MeetingCalender";
import MeetingPreview from "./MeetingPreview";
import Layout from "./Layout";
import SuccessView from "./SuccessView";

const CreateMeeting = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  const [showMeetingDetails, setShowMeetingDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSucccess] = useState(false);

  const handleSubmit = data => {
    if (!data.selectedOption || data.selectedSkills.length === 0) {
      alert("Please select Options");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSucccess(true);
    }, 5000);
  };

  const handleNext = () => {
    setShowMeetingDetails(true);
  };

  if (success) {
    return (
      <Layout>
        <SuccessView date={date} time={time} />
      </Layout>
    );
  }

  //   return (
  //     <div className="fixed top-0 z-50 w-full h-full bg-black/60 md:px-4 md:py-6 xl:px-20 overflow-hidden">
  //       <div className="w-full hidden md:flex items-center justify-end">
  //         <CloseIcon />
  //       </div>
  //       <div className="max-w-3xl mx-auto h-full md:h-[70vh] bg-white rounded shadow-md md:mt-10 flex flex-col md:flex-row">
  //         <div className="w-full md:hidden flex items-center justify-end p-2">
  //           <CloseIcon textColor />
  //         </div>
  //         <MeetingPreview
  //           date={date}
  //           time={time}
  //           showMeetingDetails={showMeetingDetails}
  //           setShowMeetingDetails={setShowMeetingDetails}
  //         />
  //         {showMeetingDetails ? (
  //           <MeetingDetails handleSubmit={handleSubmit} loading={loading} />
  //         ) : (
  //           <MeetingCalender
  //             date={date}
  //             setDate={setDate}
  //             time={time}
  //             setTime={setTime}
  //             handleNext={handleNext}
  //           />
  //         )}
  //       </div>
  //     </div>
  //   );

  return (
    <Layout>
      <MeetingPreview
        date={date}
        time={time}
        showMeetingDetails={showMeetingDetails}
        setShowMeetingDetails={setShowMeetingDetails}
      />
      {showMeetingDetails ? (
        <MeetingDetails handleSubmit={handleSubmit} loading={loading} />
      ) : (
        <MeetingCalender
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleNext={handleNext}
        />
      )}
    </Layout>
  );
};

const CloseIcon = ({ textColor }) => {
  return (
    <FontAwesomeIcon
      icon={faXmark}
      className={`h-6 ${textColor ? "" : "text-white"} cursor-pointer`}
    />
  );
};

export default CreateMeeting;
