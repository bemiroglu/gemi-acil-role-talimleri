# Gemi Acil Role Talimleri · Vessel Emergency Drill Planner

**Uygulama v1.5.0** · **Kanonik planlama politikası v1.2** · Türkçe / English · HTML5 · Çevrimdışı

**[Uygulamayı aç — Gemi Acil Role Talimleri](https://bemiroglu.github.io/gemi-acil-role-talimleri/)** · **[Kaynak kodu](./index.html)** · **[Gemi profili ekleme rehberi](docs/VESSEL_ONBOARDING.md)**

> **Yayın durumu:** Proje sahibi, uygulamanın GitHub Pages adresinde açıldığını ve `main` dalından yayımlandığını doğrulamıştır. Uygulama tarayıcıda doğrudan kullanılabilir; çevrimdışı HTML dosyası indirmek isteğe bağlıdır. Kurumsal bilgisayarlarda indirmeler güvenlik politikaları gereği engellenebilir.

Gemi acil durum role talimlerini planlamaya, **talime ilişkin eğitici içeriği açmaya**, **geçmiş zamanlı örnek senaryoları incelemeye** ve **EK-V kayıt aktarım taslağı hazırlamaya** yönelik, kurulum ve dış kütüphane gerektirmeyen tek dosya uygulamasıdır. Seçilen tarihten ileriye dönük 12 aylık plan PDF olarak yazdırılabilir. Takvim, kurum içi EK-VI Rev.015 çizelgesi esas alınarak geliştirilen **proje içi planlama politikası v1.2** üzerinden hesaplanır.

> **Kapsam:** Bu açık kaynak proje **KEGM'nin resmî/onaylı uygulaması değildir**. Çizelge gerçekleşen talimleri kanıtlamaz; geminin tipi, seferi, bayrağı, donanımı, role cetveli ve güncel SMS/ISM prosedürleri ayrıca dikkate alınmalıdır.

## Hızlı kullanım

1. GitHub Pages bağlantısını açın; sitenin **HTML indir** seçeneğiyle dosyanızı bilgisayarınıza alıp çevrimdışı da çalıştırabilirsiniz. Kaydedilmiş HTML için internet/sunucu gerekmez.
2. **Gemi profili** seçin: **NENE HATUN (pilot)** veya **Kurum genel planı**.
3. Tarih seçin: seçilen tarihin haftasındaki **pazar günü** ve ait olduğu **ayın** talimleri gösterilir. **Ay / Yıl** görünümü arasında geçebilirsiniz.
4. **12 Aylık PDF**: seçili tarihi başlangıç kabul eden bir yıllık **tarih sıralı liste** açılır. İstenirse **periyodik kontrol/hatırlatmalar** eklenir. **Yazdır / PDF olarak kaydet** seçeneği tarayıcının yazdırma diyaloğunu açar.
5. **CSV (takvim yılı)** veya **.ics**: seçilen tarihin takvim yılına ait kayıtları dışa aktarır. Bunlar PDF'nin kayan 12 aylık dönemiyle aynı aralık değildir.
6. Seçilen pazarın talim kartında **Talim Eğitimi** veya **Örnek & EK-V Taslağı** düğmesini seçin. Eğitim akışını ve risk başlıklarını inceleyin. Geçmiş zamanlı örneği okuyun; fiilen gerçekleşen işlemleri ayrıca işaretleyip kayıt taslağını oluşturun.
7. Kayıt için **TXT** veya **PDF** çıktısı; sonra yeniden düzenlemek için **yerel JSON taslağı** oluşturabilirsiniz. Taslaklar sunucuya gönderilmez. Tarayıcı oturumu kapandığında girilen bilgiler kalıcı olarak tutulmaz.
8. Sağ üstten **English** dilini seçebilirsiniz.

**English:** Offline single-file planner. Select vessel and date, open **Drill Training** or **Sample & Record** from a drill card. Review educational steps and illustrative risks, read a past-tense example, record verified actual/simulated actions, and export a **draft** in TXT/PDF or local JSON. The calendar still offers a rolling 12-month PDF plan and calendar-year CSV/ICS.

## v1.5.0 — Talim Eğitimi ve EK-V kayıt yardımcısı

**İki ayrı tam ekran çalışma görünümü:**

**01 · Talim Eğitimi:** Talimin amacı; olayın tespiti, bildirim, alarm, organizasyon, emniyet, müdahale, kontrol ve kapanış aşamaları; uygun olduğunda gerçek işlem/simülasyon/eğitim ayrımı; risk tehlike başlıkları ve not alanları. MOB ve bot indirme başlıkları, ilgili kurum risk değerlendirme yaklaşımının **genelleştirilmiş** eğitim uyarlamalarıdır; özgün formlar, onaylar veya güncel risk puanları kopyalanmaz.

**02 · Örnek Senaryo / Kayıt:** Gerçek bir doldurulmuş kayıt üslubuna uygun, geçmiş zamanlı **tam örnek senaryo**, fakat açıkça **yalnızca örnek** olarak etiketli. Ayrı kayıt alanlarında planlanan/gerçekleşen tarih, sorumlu zabit, katılım, yer, talim adı, risk referansı ve sonuç notu doldurulur. Yangın için **8**, Gemiyi Terk için **12** kontrol konusu; diğer talim türlerinde genel pilot kontrol listesi bulunur. Kontrollerin hiçbirine otomatik “yapıldı” atanmaz. Fiilen yapıldı / simüle edildi / anlatıldı / yapılmadı / uygulanamaz / henüz değerlendirilmedi ayrımı korunur.

**Taslak denetimi:** Boş kontrol, boş kritik alan, gerekçesiz yapılmayan işlem veya açık risk tedbiri bulunduğunda taslak tamamlanmamış olarak işaretlenir. Kullanıcı onayı alınsa bile bu çıktı **resmî EK-V belgesi veya ISM onayı değildir**. Formun yürürlükteki aslı ve doğrulama adımları yetkili kurum sistemi üzerinden yürütülür.

**Gizlilik:** Bu kamuya açık sürüm tarihsel doldurulmuş EK-V formlarını, kurum içi manuel metinlerini, kişisel verileri veya özgün risk formlarını içermez. Eğitim anlatımları özgün/genelleştirilmiş örneklerdir. Gerçek verileri kayıt ekranına girerseniz bilgiler yalnızca **tarayıcı belleğinde** işlenir; saklamak için yerel JSON veya TXT indirmelisiniz. İndirilen gerçek kayıt dosyalarının korunması sizin kurum politikanıza tabidir.

**[Talim Eğitimi / Kayıt Kullanım ve Test Rehberi](docs/TRAINING_RECORDS.md)**

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
node tests/test-training.cjs
```

Test paketi, 1900–2100 arasındaki 201 yılın temel talim aralıklarını ve senaryo dengesini; tarih sınırlarını, artık yıl davranışını, NENE HATUN/şablon ayrımını ve kayan 12 aylık raporu denetler. GitHub Actions iş akışı otomatik çalışır.

Takvimdeki faaliyetler yalnızca **planlanmıştır**. EK-V modülü ise kullanıcı onayına dayalı **kayıt taslağı** hazırlar; fiilen icra edilmiş talimi bağımsız olarak doğrulamaz ve resmî kayıt sisteminde onay/yayımlama yapmaz. Gemi role cetveli ve posta bazında katılım otomasyonu v1.5.0 kapsamında değildir.

## GitHub Pages — aktif yayın

**[https://bemiroglu.github.io/gemi-acil-role-talimleri/](https://bemiroglu.github.io/gemi-acil-role-talimleri/)**

Depo sahibi sitenin `main` dalından yayımlandığını ve tarayıcıda çalıştığını doğrulamıştır. Mevcut `main / (root)` ayarını değiştirmek, özel alan adı eklemek, Jekyll teması seçmek veya ücretli plana geçmek gerekmez. GitHub Free'nin herkese açık depolarındaki Pages hizmeti 30 günlük deneme değildir; normal hizmet şartlarına ve kaynak sınırlarına tabidir.

Uygulama **HTML indir** seçeneğini içerir; ancak korumalı bilgisayarlarda doğrudan web sayfasından kullanım, HTML dosyasını indirmekten daha uygulanabilir olabilir.

**Kaynak:** GitHub. (t.y.). *What is GitHub Pages?* https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Gemi ekleme ve veri düzeni

Gemiye özgü bilgileri **doğrudan HTML içine tek tek yazmak yerine** sürümlü JSON profillerinde hazırlıyoruz. [Gemi profili ekleme ve belge saklama rehberi](docs/VESSEL_ONBOARDING.md) yeni geminin veri yapısını, belge doğrulamasını ve yayımlama sınırlarını açıklar. [Gemi profil kataloğu](data/vessels/catalog.json) yayımlanan profil kimliklerini listeler. **Önemli:** Yeni JSON dosyası oluşturmak, mevcut v1.5.0 HTML arayüzüne otomatik gemi eklemez; uygulamaya entegrasyon ve yeniden test ayrı bir adım gerektirir.

## Geliştirme

- [Değişiklik geçmişi](CHANGELOG.md)
- [Yol haritası](ROADMAP.md)
- [Gemi bazlı mimari ve koşullu talimler](docs/ARCHITECTURE.md)
- [Yeni gemi ekleme ve belge yönetimi](docs/VESSEL_ONBOARDING.md)
- [Talim eğitimi, örnek senaryo ve EK-V kayıt rehberi](docs/TRAINING_RECORDS.md)

**Geliştirici:** Bilal Emiroğlu - TA1BU

**Telif ve açık lisans:** © 2026 Bilal Emiroğlu (TA1BU). Projenin özgün yazılım kodu ve ilgili özgün dokümantasyonu [MIT License](LICENSE) ile yayımlanır (SPDX: `MIT`). Lisans, üçüncü taraflara ait içeriklerin veya kurum belgelerinin telif haklarını devretmez. Uygulamanın düşük görünürlüklü geliştirici işareti korunur.

### Kaynakça (APA 7)

Kıyı Emniyeti Genel Müdürlüğü. (t.y.). *Eğitim manueli: Yıllık role talimleri ve periyodik kontroller, EK-VI* (Rev. 015) [Kurum içi planlama çizelgesi].

Kıyı Emniyeti Genel Müdürlüğü. (t.y.). *Dünya denizlerinde risk nöbeti*. https://kiyiemniyeti.gov.tr/haber/192/%E2%80%9CDUNYA-DENIZLERINDE-RISK-NOBETI%E2%80%9D
