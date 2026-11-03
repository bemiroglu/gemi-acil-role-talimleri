# Gemi Acil Role Talimleri

**Uygulama v1.7.0** · **Kanonik takvim politikası v1.2** · Türkçe / English · Tek HTML5 dosyası · Çevrimdışı çalışma

## Uygulamayı açın

**[Gemi Acil Role Talimleri — Çalışan Web Uygulaması](https://bemiroglu.github.io/gemi-acil-role-talimleri/)**

Kaynak: [index.html](index.html) · [MIT lisansı](LICENSE) · [Geliştirme planı](ROADMAP.md)

Bu açık kaynak proje, gemide yapılacak acil durum role talimlerinin **takvimde anlaşılır biçimde görüntülenmesini** ve zabitlerin bu talimlere **bilgi ve evrak yönünden hazırlanmasını** kolaylaştırır. KEGM'nin resmî/onaylı uygulaması veya geminin yürürlükteki SMS/ISM prosedürünün yerine geçmez.

## Nasıl kullanılır?

1. Açılışta **NENE HATUN (pilot)** veya **Kurum genel planı** görünümünü seçin.
2. Takvimden tarih veya ilgili pazar gününü seçin.
3. Talim kartında **Talim Rehberi** düğmesini açın. Amaç, eğitim konuları, olay sırası, ilgili prosedür/kaynak başlıkları, riskler ve emniyet hatırlatmaları görünür.
4. **Rapor Yazım Rehberi** düğmesini açın. Geçmiş zamanla yazılmış **örnek talim anlatımı**, hazırlanacak/başvurulacak evraklar, EK-V kontrol konuları ve raporda unutulmaması gereken bilgiler görünür. Örnek metin tek tıklamayla kopyalanabilir.
5. Gerçek talimi kurumun geçerli usullerine göre icra edin; **EK-V ve diğer resmî formları mevcut kâğıt/KEGM ERP ISM sisteminde doldurmaya devam edin**.
6. İsterseniz takvimde **12 Aylık PDF**, **takvim yılı CSV** ve **ICS** çıktılarını kullanın.

**Yeni sürümde ek web formu yoktur.** Web üzerinde risk değerlendirmesi doldurulmaz, kontrol maddeleri işaretlenmez, personel girilmez, tutanak hazırlanıp onaylanmaz. Bu işler, sonraki ve ayrı bir geliştirme aşamasına bırakılmıştır.

**English:** Select a vessel/date; open **Drill Guide** for training, hazards and precautions, or **Reporting Guide** for a past-tense example and documentation reminders. Neither page asks you to fill in an online form.

## v1.6.0 — Ayrıntılı eğitim içeriği

**01 · Talim Rehberi** artık sadece kısa hatırlatıcı başlıklardan oluşmaz. Kurumun mevcut eğitim ve prosedür dokümanlarında yer alan **eğitim konu başlıkları**, SOLAS III/19 ve III/35, LSA Code, IMO ve erişilebilir eğitim kaynaklarından oluşturulan **özgün ve ayrıntılı açıklamalarla** desteklenmiştir.

- **Gemiyi Terk:** 8 ana safhada 29 ayrıntılı açıklama; can yeleği giyme, dalma giysisi seçimi ve giyilmesi, şişirilebilir can salının yapısı ve biniş, GMDSS/EPIRB/SART, hayatta kalma, hipotermi ve kötü hava üzerine 7 ek teknik eğitim konusu.
- **Yangın:** 8 ana safha, 19 açıklama; yangın türü, söndürücü seçimi, koruyucu donanım, solunum cihazı/EEBD farkı ve sabit söndürme sistemi konuları.
- **Kurtarma/hizmet botu, MOB, SAR, acil dümen, kapalı mahal, kirlilik, karaya oturma, su alma, acil kalkış ve can filikası:** Talim türünün kendi tehlikeleri ve eğitim safhalarıyla genişletilmiş anlatımlar.
- Eğitim başlıkları **ek tıklama gerekmeksizin açık görünür**; üstte kısa içerik dizini, altta ilgili kamuya açık kaynak bağlantıları vardır.
- İkinci sayfada geçmiş zamanlı örnek anlatım ve evrak hatırlatıcıları **değişmeden korunur**. İki ekrandaki gereksiz tekrar uyarıları kaldırılmıştır; yeni elektronik form eklenmemiştir.

**Kaynak ve yayın sınırı:** Özgün kurum el kitapları, doldurulmuş formlar ve lisanslı IAMSAR tam metni kamuya açık HTML içine kopyalanmamıştır. Eğitim bilgileri özgün, yeniden yazılmış ve kaynaklandırılmış açıklamalardır. Üreticiye özgü bot/davit kilit ve işletme sırası, gemide geçerli onaylı teknik talimatla yürütülmelidir.

**[Talim Eğitim Kaynakları (APA 7)](docs/EDUCATIONAL_SOURCES.md)**

## v1.7.0 — Talim türüne göre özelleştirilmiş eğitici içerik

**Talim Rehberi geniş zamanda anlatılır:** “görevler açıklanır”, “duman yayılımı değerlendirilir”, “uygun söndürücü tanıtılır”. **Rapor Yazım Rehberi** geçmiş zamanlı örnek uygulama anlatımını korur: “alarm verildi”, “personel toplandı”, “kontrol edildi”.

Yangın talimi artık dört farklı eğitim içeriği açar:

| Yangın senaryosu | Özel eğitim kapsamı |
| --- | --- |
| **Güverte / boyalık** | Yanıcı solvent/boya stokları, rüzgâr ve duman, komşu bölmeler, köpük/uygun ajan, yangın suyu–kirlilik ilişkisi |
| **Yaşam mahalli** | Kabin/koridor ve çamaşırhane, personel yoklaması, tahliye, yangın kapıları, duman ve kaçış yolları |
| **Makine dairesi** | Sıcak yüzey–yakıt sızıntısı, çabuk kapama, fan ve acil stop kararları, sabit CO₂, güç/seyir sürekliliği |
| **Kuzine** | Kızgın yağ/fritöz, davlumbaz ve yağlı hava kanalları, ısı kaynağı, pişirme yağına uygun söndürücü, suyun kullanılmaması |

Dört yangın senaryosunun her biri **sekiz özgün eğitim giriş metni, sekiz aşamalı özgül açıklama ve özgül teknik bilgi kartları** içerir. Ortak yangın organizasyonu, role ve kayıt konuları ayrıca korunur.

**Deniz kirliliğinde** tank taşması/yakıt sızıntısı; **kapalı mahal kurtarmada** makine alt mahalli/tank/başaltı senaryoları da ayrı odaklarla gösterilir. Arama Kurtarma (IAMSAR 2025), Gemiyi Terk (SOLAS III/35, LSA) ve diğer talimlerin genel eğitim kapsamı devam eder.

Tüm eğitim içeriği **özgün, genelleştirilmiş açıklamalar** şeklindedir. Kurumun özgün belgeleri, geçmiş doldurulmuş ISM formları ve ticari IAMSAR tam metni yayımlanmaz. Kullanıcıya elektronik form doldurtulmaz.

**[Güncellenmiş kaynaklar ve APA 7 bibliyografya](docs/EDUCATIONAL_SOURCES.md)**

## Kapsam ve kaynak yaklaşımı

- Yangın talimleri **Güverte Yangını, Yaşam Mahalli Yangını, Makine Dairesi Yangını, Kuzine Yangını** gibi açıklayıcı adlarla gösterilir.
- Yıllık plan, kurum içi EK-VI Rev.015 çizelgesinden türetilmiş **proje planlama politikası v1.2** ile oluşturulur. Beşinci pazar çift talim kuralı proje içi planlama tercihidir; kendiliğinden mevzuat zorunluluğu olduğu iddia edilmez.
- **Arama Kurtarma** bilgi ekranı, IAMSAR Manual Volume III *Mobile Facilities* (2025) için doğrulanmış **bölüm ve eğitim konu başlıklarına** referans verir. El kitabının ücretli veya kurumca lisanslı tam metni içerilmez.
- Talim rehberi, kurumun güncel prosedürleri ve gemiye özgü ekipman talimatlarının yerine geçmez. Riskler **hatırlatıcı başlıklar** olarak verilir; geçmiş risk puanları onaylı sonuç gibi kullanılmaz.
- Geçmiş zamanlı örnekler, **gerçekleşmiş yeni talim kaydı değildir**. Gerçekte uygulanmayan bir işlem resmî kayda yapılmış gibi yazılmamalıdır.
- Kamuya açık NENE HATUN profili pilot/koşullu modeldir; kurum içi sertifika, kişisel bilgiler ve özgün el kitapları bu depoya kopyalanmamıştır.
- Sürüm 1.5.1'de çoklu gemi profili şablonları vardır; yeni JSON profilinin doğrudan HTML'ye otomatik eklenmesi henüz desteklenmez.

## Denetimler

```bash
node tests/test-calendar.cjs
node tests/test-training.cjs
node tests/test-vessel-profiles.cjs
```

Takvim için 1900–2100 regresyonu; eğitim ve rapor sayfaları için işlev, görünürlük ve **çevrimiçi form bulunmaması** kontrolleri yapılır. Tek HTML, harici kütüphane veya uzak veri aktarımı gerektirmez.

## Belgeler ve geliştirme

- [Değişiklik geçmişi](CHANGELOG.md)
- [Talim Rehberi ve Rapor Yazım Rehberi](docs/TRAINING_RECORDS.md)
- [Gemi bazlı mimari](docs/ARCHITECTURE.md)
- [Yeni gemi ekleme rehberi](docs/VESSEL_ONBOARDING.md)
- [Geliştirme yol haritası](ROADMAP.md)

**Geliştirici:** Bilal Emiroğlu — TA1BU

**Telif:** © 2026 Bilal Emiroğlu. Özgün yazılım ve özgün proje belgeleri [MIT License](LICENSE) ile yayımlanır; üçüncü taraf yayınların ve kurum içi belgelerin lisansları ayrıca geçerlidir.

### Kaynaklar (APA 7)

International Maritime Organization, & International Civil Aviation Organization. (2025). *International Aeronautical and Maritime Search and Rescue Manual, Volume III: Mobile Facilities* (2025 ed.). International Maritime Organization. https://doi.org/10.62454/KL962E

Kıyı Emniyeti Genel Müdürlüğü. (t.y.). *Yıllık role talimleri ve periyodik kontroller* (EK-VI, Rev.015) [Kurum içi planlama çizelgesi; kamuya açık depoya eklenmemiştir].
