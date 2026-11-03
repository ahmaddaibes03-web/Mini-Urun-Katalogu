import { View, Text, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { products } from '../../data/products';
import StockBadge from '../../components/StockBadge';
import { styles } from '../../styles';
export default function ProductDetail() {
 const { id } = useLocalSearchParams();
 const product = products.find(item => item.id === id);
 if (!product) return <View style={styles.container}><Text style={styles.title}>Ürün bulunamadı</Text><Pressable style={styles.button} onPress={() => router.back()}><Text style={styles.buttonText}>Geri</Text></Pressable></View>;
 return <View style={styles.container}>
  <Text style={styles.title}>{product.name}</Text>
  <Text style={styles.text}>Fiyat: {product.price} TL</Text>
  <Text style={styles.text}>Kategori: {product.category}</Text>
  <Text style={styles.text}>Açıklama: {product.description}</Text>
  <Text style={styles.text}>Stok adedi: {product.stock}</Text>
  <StockBadge stock={product.stock} />
  <Pressable style={styles.button} onPress={() => router.back()}><Text style={styles.buttonText}>Geri</Text></Pressable>
 </View>;
}
