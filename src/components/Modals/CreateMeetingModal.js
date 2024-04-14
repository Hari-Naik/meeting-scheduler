import { createPortal } from "react-dom";
import CreateMeeting from "../CreateMeeting/CreateMeeting";

const CreateMeetingModal = () => {
  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;

  return createPortal(<CreateMeeting />, portalElement);
};

export default CreateMeetingModal;
