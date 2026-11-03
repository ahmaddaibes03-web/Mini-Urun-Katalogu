# Mini Ürün Kataloğu

## Proje Hakkında

Bu proje, Mobil Programlama dersi kapsamında React Native ve Expo Router kullanılarak geliştirilmiş bir mobil ürün kataloğu uygulamasıdır.

Uygulamanın amacı, bir teknoloji mağazasındaki ürünleri listelemek, ürün bilgilerini görüntülemek ve seçilen ürünün detaylarına ulaşabilmektir.

## Kullanılan Teknolojiler

- React Native
- Expo SDK 58
- Expo Router
- JavaScript (JSX)

## Uygulama Özellikleri

- En az 5 ürünün listelenmesi
- ProductCard bileşeni ile ürün kartlarının oluşturulması
- Ürün adı, fiyat, kategori ve stok bilgilerinin görüntülenmesi
- Ürün kartına basıldığında detay ekranına geçiş
- Seçilen ürünün ID'sine göre doğru bilgilerin gösterilmesi
- Ürün açıklamasının detay ekranında görüntülenmesi
- Stok durumunun kontrol edilmesi
  - Stok miktarı 0 ise: Stokta yok
  - Stok miktarı 0'dan büyükse: Stokta
- Detay ekranından ürün listesine geri dönüş
- Geçersiz ürün ID'si için hata mesajı

## Kullanılan React Native Bileşenleri

- View
- Text
- Pressable
- FlatList
- StyleSheet

## Navigasyon

Uygulamada Expo Router kullanılmıştır.

- `/` : Ürün Listesi
- `/urun/[id]` : Ürün Detay Sayfası

Ürün kartına basıldığında `router.push` kullanılarak ilgili ürünün detay ekranına geçilir.

Dinamik rota parametresi `useLocalSearchParams` ile alınır.

## Veri Yapısı

Ürün bilgileri `data/products.js` dosyasında tutulmaktadır.

Her ürün aşağıdaki bilgileri içerir:

- id
- name
- price
- category
- stock
- description

Veriler uygulama içerisinde örnek olarak tanımlanmıştır. Harici bir veritabanı kullanılmamıştır.

## Tasarım Tercihleri

Uygulamada sade ve anlaşılır bir tasarım tercih edilmiştir.

Ürün bilgileri kartlar içerisinde gösterilerek kullanıcıların ürünleri kolayca karşılaştırabilmesi amaçlanmıştır.

Stok durumlarının ayrı metinlerle gösterilmesi, ürünün mevcut olup olmadığının kolayca anlaşılmasını sağlar.

## Projenin Çalıştırılması

Öncelikle gerekli paketleri yükleyin:

```bash
npm install
```

Ardından uygulamayı başlatın:

```bash
npx expo start
```

Uygulama, Expo Go üzerinden QR kod okutularak çalıştırılabilir.

## Testler

Uygulama çalıştırıldıktan sonra aşağıdaki işlemler kontrol edilmelidir:

- Ürün listesinin doğru görüntülenmesi
- En az 5 ürünün listelenmesi
- Ürün detay sayfasına geçiş
- Seçilen ürünün doğru bilgilerinin gösterilmesi
- Stok miktarı 0 olan ürün için "Stokta yok" yazısının görüntülenmesi
- Farklı bir ürünün detaylarının açılması
- Geri butonunun çalışması
- Geçersiz ürün ID'si için hata mesajı gösterilmesi

## Ekran Görüntüleri

Uygulama test edildikten sonra ekran görüntüleri bu bölüme eklenecektir.

## Yapay Zekâ Kullanımı

Bu projede yapay zekâdan React Native bileşenlerinin kullanımı, ProductCard yapısı ve Expo Router ile ekranlar arasında geçiş yapılması konularında destek alınmıştır. Ayrıca kodların düzenlenmesi ve karşılaşılan hataların anlaşılması konusunda yardım alınmıştır.

## Geliştirme Önerisi

Gelecekte uygulamaya ürün arama, kategoriye göre filtreleme ve yeni ürün ekleme özellikleri eklenebilir.
