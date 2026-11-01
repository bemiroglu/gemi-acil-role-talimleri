# Gemi Acil Role Talimleri · Vessel Emergency Drill Planner

**Uygulama v1.4.1** · **Kanonik planlama politikası v1.2** · Türkçe / English · HTML5 · Çevrimdışı

**[Uygulamayı aç — Gemi Acil Role Talimleri](https://bemiroglu.github.io/gemi-acil-role-talimleri/)** · **[Kaynak kodu](./index.html)** · **[Gemi profili ekleme rehberi](docs/VESSEL_ONBOARDING.md)**

> **Yayın durumu:** Proje sahibi, uygulamanın GitHub Pages adresinde açıldığını ve `main` dalından yayımlandığını doğrulamıştır. Uygulama tarayıcıda doğrudan kullanılabilir; çevrimdışı HTML dosyası indirmek isteğe bağlıdır. Kurumsal bilgisayarlarda indirmeler güvenlik politikaları gereği engellenebilir.

Gemi acil durum role talimlerini planlamaya, seçilen haftanın pazar gününü incelemeye ve **ileri dönük 12 aylık listeyi PDF olarak yazdırmaya** yönelik, kurulum ve dış kütüphane gerektirmeyen tek dosya uygulamasıdır. Takvim, kurum içi EK-VI Rev.015 çizelgesi esas alınarak geliştirilen **proje içi planlama politikası v1.2** üzerinden hesaplanır.

> **Kapsam:** Bu açık kaynak proje **KEGM'nin resmî/onaylı uygulaması değildir**. Çizelge gerçekleşen talimleri kanıtlamaz; geminin tipi, seferi, bayrağı, donanımı, role cetveli ve güncel SMS/ISM prosedürleri ayrıca dikkate alınmalıdır.

## Hızlı kullanım

1. GitHub Pages bağlantısını açın; sitenin **HTML indir** seçeneğiyle dosyanızı bilgisayarınıza alıp çevrimdışı da çalıştırabilirsiniz. Kaydedilmiş HTML için internet/sunucu gerekmez.
2. **Gemi profili** seçin: **NENE HATUN (pilot)** veya **Kurum genel planı**.
3. Tarih seçin: seçilen tarihin haftasındaki **pazar günü** ve ait olduğu **ayın** talimleri gösterilir. **Ay / Yıl** görünümü arasında geçebilirsiniz.
4. **12 Aylık PDF**: seçili tarihi başlangıç kabul eden bir yıllık **tarih sıralı liste** açılır. İstenirse **periyodik kontrol/hatırlatmalar** eklenir. **Yazdır / PDF olarak kaydet** seçeneği tarayıcının yazdırma diyaloğunu açar.
5. **CSV (takvim yılı)** veya **.ics**: seçilen tarihin takvim yılına ait kayıtları dışa aktarır. Bunlar PDF'nin kayan 12 aylık dönemiyle aynı aralık değildir.
6. Sağ üstten **English** dilini seçebilirsiniz.

**English:** Offline single-file planner. Select vessel and date, review Sunday exercises and monthly/annual calendars, export the **rolling next 12 months** via Print/Save as PDF, or export the current calendar year as CSV/ICS.

## Kullanım kolaylığı

- **HTML indir / Download HTML:** GitHub Pages üzerinden açılan uygulamadan doğrudan, tarayıcının indirme mekanizmasıyla çevrimdışı kopya alınabilir.

- `Yangın *1` gibi kodlar yerine **Güverte Yangını**, **Yaşam Mahalli Yangını**, **Makine Dairesi Yangını**, **Kuzine Yangını** gösterilir; senaryo kodları ayrıntıda korunur.
- Önceden çok yer kaplayan yıllık sayılar **ⓘ Yıllık plan bilgileri** bölümünde isteğe bağlı açılır.
- Kaynak ve kapsam notları ile ay özeti katlanabilir. Haftalık program öne çıkar.
- **12 aylık PDF**, ana sayfanın görüntüsünü değil, aylara ayrılmış **plan çizelgesini** A4 sayfalara basar.
- Beşinci pazar bulunduğunda Yangın ve Gemiyi Terk ayrı iki talimdir. Bu, yayımlanmış bir SOLAS/KEGM hükmü olarak değil, **proje kararı** olarak ele alınır.

## Gemi profilleri: önemli ayrım

**NENE HATUN**, bu sürümün **pilot çalışma profili** olarak başlangıçta seçilidir. KEGM'nin kamuya açık bilgilerinde geminin bazı özel kabiliyetleri doğrulanabilse de, **acil dümen sistemi, can filikası ve kurtarma/hizmet botunun güncel envanter durumu bu proje için doğrulanmamıştır**. Bu üç donanıma bağlı faaliyetler bu görünümde **olası/şarta bağlı aday** olarak gösterilir ve **ENVANTER TEYİDİ GEREKLİ** işaretini taşır. Bu görünüm, gemide üç sistemin de bulunduğunu ileri sürmez.

**Kurum genel planı** seçildiğinde üç donanım onay kutusu, **örnek/simülasyon varsayımı** olarak katlanır bir panelde sunulur. Bu seçenekler hiçbir geminin envanterini doğrulamaz.

Bu amaçla **[gemi bazlı yazılım mimarisi](docs/ARCHITECTURE.md)** kabul edilmiştir: tek kod tabanı, kurum genel planlama motoru ve sürümlenebilir gemi profilleri. Kaynak etiketli ilk profil: [NENE HATUN profil verisi](data/vessels/nene-hatun.json). `index.html` çevrimdışı çalışabilmek için profil bilgilerini gömülü tutar; JSON dosyası şu an ayrıca otomatik yüklenmemektedir.

## Testler

```bash
node tests/test-calendar.cjs
```

Test paketi, 1900–2100 arasındaki 201 yılın temel talim aralıklarını ve senaryo dengesini; tarih sınırlarını, artık yıl davranışını, NENE HATUN/şablon ayrımını ve kayan 12 aylık raporu denetler. GitHub Actions iş akışı otomatik çalışır.

Çıktılar **planlanmış** durumdadır. Operasyonel erteleme, gerçekleşen talim kayıtları, gemi role cetveli ve personel bilgileri v1.4.1 kapsamında tutulmaz.

## GitHub Pages — aktif yayın

**[https://bemiroglu.github.io/gemi-acil-role-talimleri/](https://bemiroglu.github.io/gemi-acil-role-talimleri/)**

Depo sahibi sitenin `main` dalından yayımlandığını ve tarayıcıda çalıştığını doğrulamıştır. Mevcut `main / (root)` ayarını değiştirmek, özel alan adı eklemek, Jekyll teması seçmek veya ücretli plana geçmek gerekmez. GitHub Free'nin herkese açık depolarındaki Pages hizmeti 30 günlük deneme değildir; normal hizmet şartlarına ve kaynak sınırlarına tabidir.

Uygulama **HTML indir** seçeneğini içerir; ancak korumalı bilgisayarlarda doğrudan web sayfasından kullanım, HTML dosyasını indirmekten daha uygulanabilir olabilir.

**Kaynak:** GitHub. (t.y.). *What is GitHub Pages?* https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Gemi ekleme ve veri düzeni

Gemiye özgü bilgileri **doğrudan HTML içine tek tek yazmak yerine** sürümlü JSON profillerinde hazırlıyoruz. [Gemi profili ekleme ve belge saklama rehberi](docs/VESSEL_ONBOARDING.md) yeni geminin veri yapısını, belge doğrulamasını ve yayımlama sınırlarını açıklar. [Gemi profil kataloğu](data/vessels/catalog.json) yayımlanan profil kimliklerini listeler. **Önemli:** Yeni JSON dosyası oluşturmak, mevcut v1.4.1 HTML arayüzüne otomatik gemi eklemez; uygulamaya entegrasyon ve yeniden test ayrı bir adım gerektirir.

## Geliştirme

- [Değişiklik geçmişi](CHANGELOG.md)
- [Yol haritası](ROADMAP.md)
- [Gemi bazlı mimari ve koşullu talimler](docs/ARCHITECTURE.md)
- [Yeni gemi ekleme ve belge yönetimi](docs/VESSEL_ONBOARDING.md)

**Geliştirici:** Bilal Emiroğlu - TA1BU

**Telif ve açık lisans:** © 2026 Bilal Emiroğlu (TA1BU). Projenin özgün yazılım kodu ve ilgili özgün dokümantasyonu [MIT License](LICENSE) ile yayımlanır (SPDX: `MIT`). Lisans, üçüncü taraflara ait içeriklerin veya kurum belgelerinin telif haklarını devretmez. Uygulamanın düşük görünürlüklü geliştirici işareti korunur.

### Kaynakça (APA 7)

Kıyı Emniyeti Genel Müdürlüğü. (t.y.). *Eğitim manueli: Yıllık role talimleri ve periyodik kontroller, EK-VI* (Rev. 015) [Kurum içi planlama çizelgesi].

Kıyı Emniyeti Genel Müdürlüğü. (t.y.). *Dünya denizlerinde risk nöbeti*. https://kiyiemniyeti.gov.tr/haber/192/%E2%80%9CDUNYA-DENIZLERINDE-RISK-NOBETI%E2%80%9D
