import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import CreateMeetingModal from "./components/Modals/CreateMeetingModal";
import PricingPlans from "./components/PricingPlans/PricingPlans";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 3000);
  }, []);

  return (
    <>
      <main className="h-screen w-screen overflow-hidden overflow-y-auto">
        <Header />
        <PricingPlans />
      </main>
      {isOpen && <CreateMeetingModal />}
    </>
  );
}

export default App;
