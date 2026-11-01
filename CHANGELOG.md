# Değişiklik Kaydı / Changelog

## 1.4.0 — 2026-11-01
- **Yazdır / PDF** işlevi ana ekranı basmak yerine, seçili tarihten başlayarak **ileri dönük 12 aylık** A4 dikey liste üretir; önizleme açılır ve tarayıcı PDF olarak kaydeder.
- Periyodik kontroller/hatırlatmalar raporda isteğe bağlıdır; varsayılan liste yalnızca talimleri içerir.
- Yıllık KPI kutuları **ⓘ Yıllık plan bilgileri** altında katlanabilir; kaynak/kapsam ve ay özeti de isteğe bağlı açılır.
- **Gemi profili** seçicisi eklendi: NENE HATUN pilot profili ve kurum genel şablonu.
- NENE HATUN için acil dümen, filika ve kurtarma/hizmet botu güncel envanteri doğrulanmadığından bu talimler **ENVANTER TEYİDİ GEREKLİ / koşullu aday** olarak etiketlenir. Bu kayıtlar donanımın mevcut olduğunu ileri sürmez.
- Kurum genel şablonunda önceki seçimlik donanım simülasyonu katlanabilir panelde korunur.
- Türkçe / İngilizce, CSV/ICS ve 1900–2100 regresyonu korundu; veri modeli politika v1.2 ile aynı kaldı.
- `docs/ARCHITECTURE.md` ve `data/vessels/nene-hatun.json` ile tek kod tabanı / gemi profili yaklaşımı belgelendi.
- GitHub Actions testi kayan yıllık rapor ve bilinmeyen envanter koşullarını da kapsar.

## 1.3.0 — 2026-11-01
- HTML arayüzü 1.3.0 olarak sürümlendirildi; **kanonik planlama politikası 1.2 değiştirilmedi**.
- Yangın `*1–*4` kodları takvimde Güverte, Yaşam Mahalli, Makine Dairesi ve Kuzine Yangını olarak gösteriliyor.
- Deniz kirliliği ve kapalı mahal senaryoları da açıklayıcı adlarla gösteriliyor; referans kodları ayrıntılarda ve CSV'de korunuyor.
- Kullanıcıya görünen **Algoritma Denetimi** bölümü kaldırıldı; hesaplama ve regresyon testleri korundu.
- Düşük görünürlüklü, kodlanmış geliştirici işareti eklendi; değiştirilemezlik iddiası yok.
- Ay/yıl görünümleri ve erişilebilir açıklamalar iyileştirildi.
- CSV/ICS çıktılarında açık talim başlıkları kullanıldı.
- Türkçe/İngilizce, donanım seçimi, tek HTML ve çevrimdışı çalışma korundu.

## Önceki prototip — 1.2
- Haftalık pazar talimleri, aylık/yıllık takvim, donanım koşulları, beşinci pazar çift talimi, CSV/ICS/yazdırma.
- 2026: 28 Yangın / 28 Gemiyi Terk.

**Not:** Bu geçmiş uygulama sürümlerini gösterir; mevzuat uyum belgesi değildir.
