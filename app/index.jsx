import { View, Text, FlatList } from 'react-native';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { styles } from '../styles';
export default function ProductList() {
 return <View style={styles.container}><Text style={styles.title}>Mini Ürün Kataloğu</Text><FlatList data={products} keyExtractor={item => item.id} renderItem={({ item }) => <ProductCard product={item} />} /></View>;
}
