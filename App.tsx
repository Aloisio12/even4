import Routes from "./routes/index"
import { AuthProvider } from "./context/AuthContext"

export default function App() {
  return(

    <AuthProvider>
      <Routes/>
      </AuthProvider>
  )  

}