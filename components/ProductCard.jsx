import { Pressable, Text } from 'react-native';
import { router } from 'expo-router';
import StockBadge from './StockBadge';
import { styles } from '../styles';
export default function ProductCard({ product }) {
 return <Pressable style={styles.card} onPress={() => router.push('/urun/' + product.id)}>
  <Text style={styles.name}>{product.name}</Text>
  <Text style={styles.text}>Fiyat: {product.price} TL</Text>
  <Text style={styles.text}>Kategori: {product.category}</Text>
  <StockBadge stock={product.stock} />
  <Text style={styles.text}>Stok adedi: {product.stock}</Text>
 </Pressable>;
}
