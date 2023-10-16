import DashBoardLayout from "@/layout/dashboardLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/stores/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import EmployeePageProvider from "./context/EmployeeProvider";
import CompanyPageProvider from "./context/CompanyProvider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
  
      <DashBoardLayout>
        <EmployeePageProvider>
          
        </EmployeePageProvider>
        <CompanyPageProvider>

        </CompanyPageProvider>
        <Component {...pageProps} />
      </DashBoardLayout>
    </Provider>
  );
}
