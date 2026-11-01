# Değişiklik Kaydı / Changelog

## 1.5.0 — 2026-11-02

- Seçilen talimin kartına **Talim Eğitimi** ve **Örnek & EK-V Taslağı** düğmeleri eklendi.
- Tek HTML içerisinde iki tam ekran görünümü: amacı, kaynak/kapsam uyarısı, sıralı emniyetli eğitim aşamaları ve risk başlıkları; geçmiş zamanlı, doldurulmuş gibi yazılmış ama açıkça **örnek** etiketli anlatım.
- Yangın **8**, Gemiyi Terk **12** kontrol konusuyla, diğer talimler genel pilot kontrol listeleriyle açılır.
- Gerçekleşen tarih, sorumlu zabit, katılım, yer, senaryo ve sonuç bilgileri girilerek **resmî olmayan EK-V aktarım taslağı** hazırlanır.
- **Fiilen yapıldı / Simüle edildi / Anlatıldı / Yapılmadı / Uygulanamaz / Henüz değerlendirilmedi** durumları ayrı tutulur. Eksik kontrol, gerekçesiz yapılmayan işlem veya açık risk tedbiri varsa kayıt tamamlanmış gösterilmez.
- Çıktılar: TXT, kopyalama, yazdır/PDF ve yalnızca yerel JSON taslak indir/yükle.
- Tarihsel doldurulmuş kurum formları, kişisel bilgiler ve özgün risk PDF/Excel dosyaları **HTML içine konulmadı**; eğitim içeriği genelleştirilmiş, yeni oluşturulmuş metindir.
- Kanonik takvim politikası **1.2 değişmedi**; 201 yıllık regresyon, 8/12 kontrol, risk/eksiklik durumları, TR/EN ve mobil görünüm Chromium üzerinde test edildi.
- GitHub Actions'a `tests/test-training.cjs` eklendi; eski sürüme sabit indirme kontrolü sürümden bağımsız hâle getirildi.
- Kullanım kılavuzu: `docs/TRAINING_RECORDS.md`.


## Depo ve belge yönetimi güncellemesi — 2026-11-01
- GitHub Pages uygulamasının `main` dalında çalıştığı proje sahibi tarafından doğrulandı; README'deki Pages ayar bağlantısı ve geçici yayımlama talimatları kaldırıldı.
- GitHub Pages'in GitHub Free kapsamında, 30 günlük deneme kısıtı olmadan sunulduğu resmi doküman üzerinden doğrulandı.
- Yeni gemi taslak şablonu (`_template.json`), gemi kataloğu (`catalog.json`), otomatik taslak hazırlayıcı (`scripts/new-vessel.cjs`) ve profil tutarlılık testi oluşturuldu.
- `docs/VESSEL_ONBOARDING.md` ile kurum belgelerinin saklanması, yayımlanabilir verinin seçimi, revizyon ve kaynak doğrulaması belgelendi.
- Yeni profil oluşturma aracının mevcut HTML'nin gemi seçicisine **otomatik gemi eklemediği** açıkça belirtildi.
- Bu çalışma yalnızca depo belgeleri ve geliştirme araçlarını etkiler: `index.html` ve kanonik politika v1.2 değiştirilmedi.

## 1.4.1 — 2026-11-01
- GitHub Pages'te çalışacak ana sayfa bağlantısı README içinde tanımlandı; GitHub Pages'i açma adımları açıklandı.
- Uygulama araç çubuğuna **HTML indir / Download HTML** bağlantısı eklendi; aynı kökendeki `index.html` dosyasının indirilmesi amaçlandı.
- Özgün yazılım ve dokümantasyon için **MIT License** kabul edildi ve `LICENSE` dosyası eklendi; © 2026 Bilal Emiroğlu.
- HTML üst bilgisinde SPDX MIT ve telif bildirimi; alt bilgi satırında © 2026 · MIT göstergesi.
- GitHub Pages için `.nojekyll` boş dosyası eklendi.
- Planlama politikası v1.2 ve gemi bazlı faaliyet hesapları değiştirilmedi.

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
