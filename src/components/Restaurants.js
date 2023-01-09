import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ data, error, loading, navigation }) => {
    if (loading) return <ActivityIndicator size='large' marginVertical={30} />;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>

            <FlatList
                data={data}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Restaurant', { id: item.id })
                        }
                        activeOpacity={1}
                    >
                        <RestaurantItem restaurant={item} />
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        flex: 1,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
    },
});

export default withNavigation(Restaurants);
