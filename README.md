# Gemi Acil Role Talimleri

**Uygulama v1.5.1** · **Kanonik takvim politikası v1.2** · Türkçe / English · Tek HTML5 dosyası · Çevrimdışı çalışma

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
