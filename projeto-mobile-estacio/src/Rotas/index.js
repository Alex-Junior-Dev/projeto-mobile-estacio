import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoasVindas from '../paginas/BoasVindas'
import Registro from '../paginas/Registro'

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="BoasVindas"
                component={BoasVindas}
                options={{headerShown: false}}
            />


            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}