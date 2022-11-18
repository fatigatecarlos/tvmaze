import DetailScreen from "../screens/Detail";
import EpisodeScreen from "../screens/Episode";

const headerOptions = {
    title: '',
    headerTransparent: true,
    headerTintColor: '#000',
}

const SeriesNavigation = (Stack: any) => {
    return (
        <Stack.Group>
            <Stack.Screen
                name="Details"
                component={DetailScreen}
                options={headerOptions}
            />
            <Stack.Screen
                name="Episode"
                component={EpisodeScreen}
                options={headerOptions}
            />
        </Stack.Group>
    )
}

export default SeriesNavigation;