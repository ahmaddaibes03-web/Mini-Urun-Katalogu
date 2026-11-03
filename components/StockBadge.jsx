import { View, Text } from 'react-native';
export default function StockBadge({ stock }) {
 return <View style={{ backgroundColor: stock === 0 ? '#dc2626' : '#16a34a', padding: 8, borderRadius: 8, alignSelf: 'flex-start' }}><Text style={{ color: 'white' }}>{stock === 0 ? 'Stokta yok' : 'Stokta'}</Text></View>;
}
