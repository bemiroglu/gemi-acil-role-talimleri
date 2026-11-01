# Gemi bazlı planlama mimarisi — çalışma kararı (v1.4.0)

## Karar

**Tek kod tabanı + kurum genel planlama politikası + gemi profilleri + gemiye özgü senaryo / prosedür katmanları.** Bir gemi için ayrı HTML kopyaları üretmek önerilmez; bu, sürüm sapmaları, çoğaltılmış hatalar ve revizyon yükü oluşturur. `index.html` çevrimdışı tek dosyalı dağıtım biçimi olarak korunabilir.

## Katmanlar

1. **Kurum genel planı:** EK-VI Rev.015 esas alınarak geliştirilen ve proje içi kanonik politika v1.2 ile belgelenmiş takvim kuralları. Bu politika kurumun yayımladığı yeni bir zorunluluk değildir.
2. **Gemi kimliği ve donanım profili:** Donanımda üç hâl: `true` (kanıtlı mevcut), `false` (kanıtlı mevcut değil), `null` (doğrulanmadı). Özellikle **bilinmiyor ≠ yok** ve **bilinmiyor ≠ var**.
3. **Uygulanabilirlik:** Talimler, gemi türü, sefer, donanım, bayrak, SMS/ISM ve varsa mevzuat kapsamına göre değerlendirilir.
4. **Gemi özelinde ek senaryo:** Ana takvimi kırmadan göreve özgü talim, ekipman ve riskler ayrı veri katmanında tanımlanır; ör. acil müdahale sistemleri, DP, kirlilik müdahalesi, derin su dalış veya helikopter operasyonu. Bunların kendiliğinden belirli sıklıkta yasal talim yükümlülüğü olduğunu varsaymayız.
5. **Prosedür ve görev dağılımı:** Dayanak belge/revizyon/maddeye bağlanan talim yönergesi, gemi role cetveli, personel ve posta görevleri.
6. **Kayıt üretimi:** Plan bilgisi ile fiilî icra bilgisi ayrılır. İcra gerçekleşmeden tamamlanmış ISM kaydı oluşturulmaz.

## v1.4.0 geçici pilot uygulama

- Ana gemi seçicisi: **NENE HATUN** veya **Kurum genel planı**.
- **NENE HATUN:** Açık kaynaklı tanıtımda bazı kabiliyetler doğrulansa bile üç koşullu donanımın güncel varlık durumu doğrulanmamıştır. Bu yüzden acil dümen, can filikası ve kurtarma/hizmet botu için **her üç potansiyel talim adayı** takvimde görünür; tamamı **ENVANTER TEYİDİ GEREKLİ** olarak etiketlenir. **Bu bir donanım tespiti veya kesin görev listesi değildir.**
- **Kurum genel planı:** Eski üç donanım seçim kutusu, yalnızca simülasyon varsayımları olarak açılabilir. Bunlar hiçbir geminin doğrulanmış envanteri değildir.
- `data/vessels/nene-hatun.json` dokümantasyon/veri profili olarak yer alır. `index.html` tamamen çevrimdışı çalışabilmesi için profil verilerini kendi içinde taşır. **İki kaynağı senkron tutan bir derleme adımı henüz yoktur**; bundan sonraki mimari iyileştirmede tek kaynak veri üzerinden otomatik üretim planlanır.
- Yıllık PDF yazdırma seçilen tarihten **dâhil**, bir sonraki takvim yılındaki aynı tarihten **hariç** ilerler; 29 Şubat başlangıcı ertesi yıl 1 Mart'a kadar olan aralığı kapsar. Kontrol/hatırlatmalar varsayılan olarak hariçtir.
- `CSV` ve `ICS` bu sürümde seçili **takvim yılını** dışa aktarır; PDF ile aynı kayan tarih aralığını kullandıkları iddia edilmez.

## Bir profil doğrulandığında

Donanım kaydı `null` → `true/false` olarak ancak kaynak, kaynak tarihi, gemi tipi/kimlik bilgisi ve gözden geçiren sorumlu bilgisiyle değiştirilmelidir. Talim kapsamı böylece otomatik oluşabilir; uygulanabilir uluslararası/ulusal mevzuat ve kurum SMS/ISM hükümleri ayrıca denetlenir. Kamuya açık depoya personel/role cetveli, hassas operasyonel veri veya yayımlama izni bulunmayan prosedür konulmaz.

## Planlama değişikliklerinin yönetimi

- Kurum genel kuralları tek yerde.
- Gemi profilleri dosya bazında.
- Yalnızca doğrulanmış gemiye özgü istisnalar ayrı sürümlü kayıtlarda.
- Her değişiklik için takvim regresyonu, dokümantasyon, kaynak ve sürüm kaydı.
- Kullanıcı arayüzü ile yazdırılan liste aynı veri modelinden üretilir.

Bu dosya proje mimarisi kararıdır; KEGM tarafından onaylanmış kurumsal yazılım mimarisi değildir.
