import HandPhoneDesktop from "@/components/screens/desktop/HandPhone";
import HandPhoneMobile from "@/components/screens/mobile/HandPhone";

export default function HandPhone() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <HandPhoneDesktop />
      <HandPhoneMobile />
    </div>
  );
}
