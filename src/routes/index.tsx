import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sigin from '../screens/Signin';
import Welcome from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function Routes () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Welcome'
                component={Welcome}
                options={{headerShown: false}}

            />
            <Stack.Screen 
                name='Signin'
                component={Sigin}
                options={{headerShown: false}}
                
            />
        </Stack.Navigator>
    )
}
