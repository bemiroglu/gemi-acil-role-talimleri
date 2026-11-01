# Gemi Acil Role Talimleri · Vessel Emergency Drill Planner

**Uygulama v1.4.0** · **Kanonik planlama politikası v1.2** · Türkçe / English · HTML5 · Çevrimdışı

**[Uygulamayı aç / kaynağı görüntüle](./index.html)** · **[HTML dosyasını indir](https://raw.githubusercontent.com/bemiroglu/gemi-acil-role-talimleri/main/index.html)**

Gemi acil durum role talimlerini planlamaya, seçilen haftanın pazar gününü incelemeye ve **ileri dönük 12 aylık listeyi PDF olarak yazdırmaya** yönelik, kurulum ve dış kütüphane gerektirmeyen tek dosya uygulamasıdır. Takvim, kurum içi EK-VI Rev.015 çizelgesi esas alınarak geliştirilen **proje içi planlama politikası v1.2** üzerinden hesaplanır.

> **Kapsam:** Bu açık kaynak proje **KEGM'nin resmî/onaylı uygulaması değildir**. Çizelge gerçekleşen talimleri kanıtlamaz; geminin tipi, seferi, bayrağı, donanımı, role cetveli ve güncel SMS/ISM prosedürleri ayrıca dikkate alınmalıdır.

## Hızlı kullanım

1. `index.html` dosyasını indirin ve güncel tarayıcıyla açın. İnternet/sunucu gerekmez.
2. **Gemi profili** seçin: **NENE HATUN (pilot)** veya **Kurum genel planı**.
3. Tarih seçin: seçilen tarihin haftasındaki **pazar günü** ve ait olduğu **ayın** talimleri gösterilir. **Ay / Yıl** görünümü arasında geçebilirsiniz.
4. **12 Aylık PDF**: seçili tarihi başlangıç kabul eden bir yıllık **tarih sıralı liste** açılır. İstenirse **periyodik kontrol/hatırlatmalar** eklenir. **Yazdır / PDF olarak kaydet** seçeneği tarayıcının yazdırma diyaloğunu açar.
5. **CSV (takvim yılı)** veya **.ics**: seçilen tarihin takvim yılına ait kayıtları dışa aktarır. Bunlar PDF'nin kayan 12 aylık dönemiyle aynı aralık değildir.
6. Sağ üstten **English** dilini seçebilirsiniz.

**English:** Offline single-file planner. Select vessel and date, review Sunday exercises and monthly/annual calendars, export the **rolling next 12 months** via Print/Save as PDF, or export the current calendar year as CSV/ICS.

## Kullanım kolaylığı

- `Yangın *1` gibi kodlar yerine **Güverte Yangını**, **Yaşam Mahalli Yangını**, **Makine Dairesi Yangını**, **Kuzine Yangını** gösterilir; senaryo kodları ayrıntıda korunur.
- Önceden çok yer kaplayan yıllık sayılar **ⓘ Yıllık plan bilgileri** bölümünde isteğe bağlı açılır.
- Kaynak ve kapsam notları ile ay özeti katlanabilir. Haftalık program öne çıkar.
- **12 aylık PDF**, ana sayfanın görüntüsünü değil, aylara ayrılmış **plan çizelgesini** A4 sayfalara basar.
- Beşinci pazar bulunduğunda Yangın ve Gemiyi Terk ayrı iki talimdir. Bu, yayımlanmış bir SOLAS/KEGM hükmü olarak değil, **proje kararı** olarak ele alınır.

## Gemi profilleri: önemli ayrım

**NENE HATUN**, bu sürümün **pilot çalışma profili** olarak başlangıçta seçilidir. KEGM'nin kamuya açık bilgilerinde geminin bazı özel kabiliyetleri doğrulanabilse de, **acil dümen sistemi, can filikası ve kurtarma/hizmet botunun güncel envanter durumu bu proje için doğrulanmamıştır**. Bu üç donanıma bağlı faaliyetler bu görünümde **olası/şarta bağlı aday** olarak gösterilir ve **ENVANTER TEYİDİ GEREKLİ** işaretini taşır. Bu görünüm, gemide üç sistemin de bulunduğunu ileri sürmez.

**Kurum genel planı** seçildiğinde üç donanım onay kutusu, **örnek/simülasyon varsayımı** olarak katlanır bir panelde sunulur. Bu seçenekler hiçbir geminin envanterini doğrulamaz.

Bu amaçla **[gemi bazlı yazılım mimarisi](docs/ARCHITECTURE.md)** kabul edilmiştir: tek kod tabanı, kurum genel planlama motoru ve sürümlenebilir gemi profilleri. Kaynak etiketli ilk profil: [NENE HATUN profil verisi](data/vessels/nene-hatun.json). `index.html` çevrimdışı çalışabilmek için profil bilgilerini gömülü tutar; JSON dosyası şu an ayrıca otomatik yüklenmemektedir.

## Testler ve güvenlik

```bash
node tests/test-calendar.cjs
```

Test paketi, 1900–2100 arasındaki 201 yılın temel talim aralıklarını ve senaryo dengesini; tarih sınırlarını, artık yıl davranışını, NENE HATUN/şablon ayrımını ve kayan 12 aylık raporu denetler. GitHub Actions iş akışı otomatik çalışır.

Çıktılar **planlanmış** durumdadır. Operasyonel erteleme, gerçekleşen talim kayıtları, gemi role cetveli ve personel bilgileri v1.4.0 kapsamında tutulmaz. Kamuya açık depoya kurumun izin vermediği belgeleri, hassas gemi bilgisini veya personel bilgilerini koymayın.

## GitHub Pages

Depo sahibi **Settings → Pages → Deploy from a branch → main / (root) → Save** üzerinden çevrimiçi sunumu etkinleştirebilir. Pages etkinliği teyit edilene kadar canlı web bağlantısı garanti edilmez. Çevrimdışı `index.html` bundan bağımsızdır.

## Geliştirme

- [Değişiklik geçmişi](CHANGELOG.md)
- [Yol haritası](ROADMAP.md)
- [Gemi bazlı mimari ve koşullu talimler](docs/ARCHITECTURE.md)

**Geliştirici:** Bilal Emiroğlu - TA1BU

**Açık erişim ≠ açık kaynak lisansı:** Proje sahibi yeniden kullanım lisansını henüz seçmemiştir. Kodun kamuya açık olması kendiliğinden kullanım/değiştirme izni anlamına gelmez.

### Kaynakça (APA 7)

Kıyı Emniyeti Genel Müdürlüğü. (t.y.). *Eğitim manueli: Yıllık role talimleri ve periyodik kontroller, EK-VI* (Rev. 015) [Kurum içi planlama çizelgesi].

Kıyı Emniyeti Genel Müdürlüğü. (t.y.). *Dünya denizlerinde risk nöbeti*. https://kiyiemniyeti.gov.tr/haber/192/%E2%80%9CDUNYA-DENIZLERINDE-RISK-NOBETI%E2%80%9D
