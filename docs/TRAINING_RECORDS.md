# v1.6.0 — Ayrıntılı Talim Rehberi ve Rapor Yazım Rehberi

Uygulama: **https://bemiroglu.github.io/gemi-acil-role-talimleri/**

Bu sürümün iki yardımcı ekranı **yalnızca bilgi vermek** için tasarlanmıştır. Talimi gerçekleştiren personelin kâğıt/ERP üzerinde yürüttüğü kayıt faaliyetleri ikinci kez tarayıcıda yaptırılmaz.

## 01 · Talim Rehberi

Takvimde talim kartındaki **Talim Rehberi** açılır. İçerik sırasıyla:

1. **Amaç:** Bu talimin hangi bilgi ve becerileri geliştirdiği.
2. **Eğitim ve uygulama akışı:** İlk tespit, haberleşme, alarm, organizasyon, müdahale, emniyet ve kapanış.
3. **Risk hatırlatıcıları:** Geminin yetkili risk değerlendirmesinde incelenecek tehlike konuları. **Puanlama, onay veya elektronik form yoktur.**
4. **Başvurulacak belgeler:** İlgili kurum SMS/ISM prosedürü, gerekiyorsa özel kontrol listesi, risk formu, jurnaller ve üretici talimatı.
5. **Emniyet sınırları:** Gerçek sistem testlerinin onaylı talimat, ekipman koşulu ve risk değerlendirmesiyle yapılması.

**SAR örneği:** IAMSAR Volume III 2025 (bölüm başlıklarına dayalı özgün özet), ilk ihbar, RCC/MRCC/OSC koordinasyonu, arama alanı ve paterni değerlendirme, olay yeri iletişimi, kurtarma, ilk yardım, sonuç değerlendirmesi gibi konular. Bu sayfa IAMSAR'ın tam metni veya operasyonel emir yerine geçmez.

### Ayrıntılı ders notları

Talim Rehberi'ndeki bütün ana eğitim başlıklarının altında okunabilir açıklamalar bulunur. Özellikle Gemiyi Terk için:
- Can yeleğinin doğru beden/bağlama şekli, düdük/ışık/reflektör.
- Dalma giysisinin amacı, tip/beden kontrolü, oturarak giyme, başlık/fermuar/yüz kapakçığı ve gerekliyse can yeleği kombinasyonu.
- Can salı konteyneri, painter, HRU, kapasite/servis bilgisi, çadır, deniz demiri, giriş ve hayatta kalma donanımı.
- Can salına biniş, barınma, ısı kaybı, su/erzak, nöbet ve haberleşme.
- EPIRB, SART/AIS-SART, acil VHF ve gündüz-gece işaretlerinin ayrı amaçları.
- Bot ve kurtarma vasıtaları için farklı envanter kategorileri ve güvenli indirme kararları.

Eğitim akışı açık görünür; gerekirse üstteki kısa içerik dizininden ilgili konuya doğrudan gidilebilir. Bilgiler özgün eğitici anlatımlardır; geminin mevcut üretici kitabındaki tipe özgü işletme usulü yerine geçmez.

**Kaynak listesi:** [EDUCATIONAL_SOURCES.md](EDUCATIONAL_SOURCES.md).

## 02 · Rapor Yazım Rehberi

Talimin kartındaki **Rapor Yazım Rehberi** açılır. İçerik:

- **Geçmiş zamanla yazılmış örnek senaryo:** Alarm verildi, personel toplandı, haberleşme kontrol edildi, riskler değerlendirildi gibi fiillerle oluşturulan örnek anlatım. Gerekli emniyet şartları bulunduğu varsayılan örneklerde botun suya indirildiği gibi işlemler de **örnek metin içinde** yazılabilir.
- **Evrak hatırlatıcısı:** EK-V, ilgili özel ISM kontrol listesi, risk değerlendirme formu ve uygun jurnal/ekipman kayıtları.
- **Rapor yazımı için konu listesi:** Talim kimliği, olay ve icra sırası, fiilen yapılan/simüle edilen işlemler, eksiklik, düzeltici faaliyet.
- **EK-V'deki konuların okuma listesi:** Yangın için sekiz, Gemiyi Terk için on iki konu.

**Tek etkileşim:** Örnek metni kopyalamak. Form/çizelge doldurma, kontrol maddesi işaretleme, risk puanı girme, JSON yükleme, kullanıcı onayı veya rapor PDF üretimi **yoktur**.

Mevcut **12 Aylık PDF** takvim yazdırma işlevi ayrı bir özellik olarak korunur.

## Kaynak ve gizlilik sınırı

- Kamuya açık HTML, kurum içi özgün prosedür veya doldurulmuş EK-V formunun sayfalarını içermez; eğitim ve yazım metinleri özgün/genelleştirilmiş örneklerdir.
- Belge adı veya form kodu görmek, belgenin en son geçerli sürümünün doğrulandığı anlamına gelmez. Gemi üzerinde geçerli belgenin revizyonu kontrol edilir.
- Geçmiş zamanlı **örnek kayıt**, gerçekleşmiş talim için doğrulama değildir. Gerçek evrak yalnızca fiilen yapılan veya açıkça simüle edilen uygulamaları göstermelidir.
- İlk sürümde belirli talim türleri için ayrıntı düzeyleri farklıdır. Belge temelli kapsam, adım adım genişletilecektir.
- Çalışan takvim algoritması kanonik politika 1.2'de tutulmuştur.

## Kabul kontrolü

1. 15.11.2026 tarihini seçin ve o günün Yangın taliminde **Talim Rehberi**ni açın.
2. Eğitim akışını, kaynak ve risk listesini görün. **Hiçbir form alanı, kutucuk veya risk puanı doldurma gerekliliği bulunmamalı**.
3. **Rapor Yazım Rehberi**ne geçin. Geçmiş zamanlı metni ve evrak hatırlatıcılarını okuyun; isterseniz örneği kopyalayın.
4. 22.11.2026 tarihli Gemiyi Terk taliminde ilgili 12 kontrol başlığının **okuma listesi** olarak gösterildiğini doğrulayın.
5. 08.03.2026 tarihli Arama Kurtarma taliminde **IAMSAR** başlıklarını inceleyin.
6. Pencereyi kapatın; aylık/yıllık takvimin, 12 aylık PDF'nin, CSV/ICS'nin ve iki dilin eski işlevleriyle çalıştığını kontrol edin.

**Sınır:** Bu sürüm bir eğitim ve rapor yazım yardımcısıdır; resmî bir prosedür veya işletme eğitimi sertifikasyon sistemi değildir.

### Kaynakça (APA 7)

International Maritime Organization, & International Civil Aviation Organization. (2025). *IAMSAR Manual, Volume III – Mobile Facilities* (2025 ed.). International Maritime Organization. https://doi.org/10.62454/KL962E

Kıyı Emniyeti Genel Müdürlüğü. (t.y.). *Yıllık role talimleri ve periyodik kontroller* (EK-VI, Rev.015) [Kurum içi planlama çizelgesi].
