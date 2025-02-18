import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../pages/Dashboard";

export default function ProtectedRoutes() {
    
const {Navigator, Screen} = createNativeStackNavigator()
    return (
        <Navigator>

            <Screen name="dashboard" component={Dashboard} />
      </Navigator>

    )
}