import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoasVindas from '../paginas/BoasVindas'
import Login from '../paginas/Login'
import Cadastro from '../paginas/Cadastro';
import Principal from '../paginas/Principal';

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
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />


            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
            />


            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}