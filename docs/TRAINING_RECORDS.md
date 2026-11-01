# Talim Eğitimi ve Kayıt Hazırlama — v1.5.0 Kullanım / Test Rehberi

## Çalışan uygulama

**https://bemiroglu.github.io/gemi-acil-role-talimleri/**

Bu ek özellikler `index.html` içine gömülüdür; ikinci bir dosya, sunucu, API, kullanıcı hesabı veya internet bağlantısı gerektirmez. Tek dosyalı çevrimdışı kopya aynı işlevlerle açılabilir.

**Kapsam:** Eğitim ve kayıt hazırlama prototipidir; resmî/kurumca onaylı EK-V, ISM kayıt sistemi veya gemiye özgü yürürlükteki prosedür yerine geçmez. Genel kontrol maddeleri kurumca kullanılacak onaylı formun birebir aktarımı değildir. Yalnızca planlama algoritması **kanonik politika v1.2** esaslarını korur.

## A. Talim Eğitimi

1. Tarih ve gemi seçin.
2. Sağdaki **Seçilen haftanın pazarı** alanında bir talimin **Talim Eğitimi** düğmesine basın. Aynı pazar içindeki her talim ayrı kart olarak açılır.
3. Talimin amacını, kaynak/kapsam uyarılarını, sıralanmış eğitim safhalarını, risk tehlikelerini ve güvenlik sınırlamalarını okuyun.
4. Risk başlıklarına **Değerlendirilmedi / Gözden geçirildi / İlave tedbir gerekli / Uygulanamaz** durumlarını girin. Somut risk puanı veya eski onay otomatik aktarılmaz.
5. Güncel kurum SMS/ISM prosedürünün, ekipmanın üretici talimatının ve somut işin risk değerlendirmesinin ayrıca temin edilip sorumlu personelce uygulanmasını sağlayın.

Önemli: Bu görünümdeki adımlar genel eğitim metinleridir. Gemiye, personele, hava-deniz koşullarına ve geçerli revizyona göre yetkili zabitin değerlendirmesi zorunludur.

## B. Örnek Senaryo / EK-V Kayıt

1. Aynı talim kartından **Örnek & EK-V Taslağı** düğmesini veya açık çalışma alanındaki ikinci sekmeyi seçin.
2. Solda **yalnızca örnek** olarak gösterilen **geçmiş zamanlı** doldurulmuş senaryoyu okuyun. “Alarm verildi”, “toplandı”, “kontrol edildi”, “bot suya indirildi” gibi ifadelerin tamamı, **örnek metin kurgusuna** aittir.
3. Sağda **gerçekleşen tarih**, **sorumlu zabit**, **katılım**, **yer**, **senaryo adı**, **risk değerlendirme referansı** ve **talim sonucu** alanlarını gerçek bilgilerle doldurun.
4. Kontrol listesinin her satırına **fiilen yapıldı / simüle edildi / anlatıldı / yapılmadı / uygulanamaz** durumlarından uygun olanını seçin; yapılmayan/uygulanamayan işlemlere gerekçe girin.
5. Açık risk tedbirleri ve değerlendirilmemiş kalemler için gösterilen uyarıları giderin. Sonra kullanıcı doğrulama kutusunu işaretleyin.
6. **Metin taslağını indir** (.txt), **Taslağı yazdır / PDF**, **Yerel taslak JSON indir** veya **Yerel taslak yükle** araçlarını kullanın.
7. Taslak metni onaylı EK-V formuna **yetkili personel** aktarır; kurum ISM sistemi içindeki kayıt/yayımlama işlemi bağımsız olarak gerçekleştirilir.

### Durum ayrımı

| Durum | Kayıtta gösterim |
| --- | --- |
| Fiilen yapıldı | Fiilen uygulandı |
| Simüle edildi | Senaryo gereği simüle edildi |
| Anlatıldı / gösterildi | Eğitim/gösterim olarak işlendi |
| Yapılmadı | Gerçekleştirilmedi; gerekçesi gerekli |
| Uygulanamaz | Uygulanamaz olarak değerlendirildi; gerekçesi gerekli |
| Henüz değerlendirilmedi | Tamamlanmamış taslak |

**Yapılmadı** veya **Uygulanamaz** gerekçesiz ise ya da **İlave tedbir gerekli** olarak işaretlenmiş açık risk başlığı varsa taslak tamamlanmış gösterilmez. Kullanıcı doğrulaması, talimin başarıyla gerçekleştiğinin bağımsız delili değildir.

### Şu anda desteklenen örnekler

- Yangın: Güverte, Yaşam Mahalli, Makine Dairesi ve Kuzine senaryo başlıkları; **8** genel kontrol konusu.
- Gemiyi Terk: **12** genel kontrol konusu; gerçek/simüle bot indirme ayrımı.
- Kurtarma/Hizmet Botu: indirme, manevra ve geri alma riskleri; **8** kontrol konusu.
- MOB ve SAR: denize adam düşmesi, kazazede kurtarma ve arama-kurtarma koordinasyonu.
- Acil Dümen, Kapalı Mahal, Deniz Kirliliği, Su Alma, Karaya Oturma ve Acil Kalkış: genel, özgün eğitim kartları ve örnek metinler.
- Bütün talimler için varsayılan örnek yapı; **kurumun özel formunun birebir onaylı sürümü değildir**.

**Form kaynakları:** EK-V Rev.016, EK-VI Rev.015, risk değerlendirme yaklaşımı, ilgili acil durum prosedürleri ve örnek senaryo kayıtları incelenmiş; ancak kurum içi belgeler kamuya açık uygulamaya **kopyalanmamıştır**. Eğitim kartları orijinal/genelleştirilmiş metindir. Belge revizyon ve uygulanabilirliği gemide ayrıca kontrol edilmelidir.

## Test senaryosu

1. Tarihi **15.11.2026** yapıp ilgili Yangın talimini açın.
2. **Talim Eğitimi** sekmesinde aşama kartlarını ve risk listelerini inceleyin.
3. **Örnek & EK-V Taslağı** sekmesine geçin. Örnek senaryonun geçmiş zamanlı olduğunu, **8 kontrol maddesinin hiçbirinin seçili olmadığını** görün.
4. Gerçekleşen tarih, zabit ve katılım alanlarını doldurun; 8 kontrolü **Simüle edildi** olarak işaretleyin.
5. Eğitim sekmesindeki risk başlıklarını ayrıca değerlendirin. Onay kutusunu işaretleyin. Açık risk veya eksik madde olduğunda uyarının devam ettiğini görün.
6. TXT ve JSON indirip JSON dosyasını geri yükleyin; girilen verilerin geri geldiğini kontrol edin.
7. **22.11.2026** Gemiyi Terk talimini açın ve **12 kontrol maddesini** kontrol edin.
8. Uygulamanın Türkçe/English geçişini ve mobil görünümünü sınayın.

## Gizlilik ve teknik sınırlar

- Kamuya açık depoda tarihsel doldurulmuş formlar, personel adları veya kurum içi risk belgeleri bulunmaz.
- Uygulama, veri girişlerini yalnızca **tarayıcı belleğinde** tutar ve uzak sunucuya göndermez.
- JSON/TXT/PDF çıktıları **kullanıcının cihazında** oluşur. Cihazda saklanan dosyaların korunması kullanıcı ve kurumun sorumluluğundadır.
- Veri girişleri sayfa yenilendiğinde kaybolabilir; yerel JSON taslak export/import işlevini kullanın. **Otomatik kalıcı kayıt, sürüm çatışma yönetimi, ERP aktarımı ve e-imza bulunmaz.**
- Tamamlanmış gibi hazırlanmış metin **senaryo örneğidir**. Yetkili kişi doğrulamadan gerçek talim icrasının delili değildir.
- HTML'de sınıflandırılan fiilî/simüle işlemler, resmi formdaki EVET/HAYIR seçeneklerine otomatik veya koşulsuz eşitlenmez.
- NENE HATUN donanımının kamuya açık profil alanları halen **pilot** durumundadır; kurum içi doğrulamalar ve tam envanter bu açık sürüme otomatik aktarılmaz.
- Çoklu posta, yeni katılan personel eğitim kontrolü, onaylı risk matrisi hesaplaması, özel prosedürün tam metin gösterimi ve doğrudan ISM formu doldurma **henüz yoktur**.

## Geliştirici testleri

```bash
node tests/test-calendar.cjs
node tests/test-training.cjs
node tests/test-vessel-profiles.cjs
```

Ek olarak sürüm 1.5.0 hazırlığında Chromium üzerinde 201 yıllık takvim hesabı, farklı talim aileleri, 8/12 kontrol maddeleri, risk/eksik işlem uyarıları, TXT/JSON indir-yükle, A4 çıktı, TR/EN ve 390 px mobil görünüm etkileşimli olarak test edilmiştir. Firefox ve Safari için ayrıca test yapılmamıştır.
