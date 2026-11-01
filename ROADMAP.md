# Geliştirme Yol Haritası / Roadmap

Planlanan işler tamamlanmış uygulama işlevleri gibi sunulmaz.

## Aşama 1 — Takvim ve sade arayüz (v1.4.0)
- [x] Kurum genel şablonu ve NENE HATUN pilot profili.
- [x] Tek HTML5, offline, iki dil, ay/yıl ve haftalık pazar talimleri.
- [x] Senaryo kodu yerine açıklayıcı talim adı.
- [x] Yıllık KPI, kaynak/kapsam ve ay özeti katlanabilir.
- [x] Seçili tarihten ileriye dönük **12 aylık PDF listesi**; kontrol/hatırlatmalar seçimlik.
- [x] Takvim yılı CSV/ICS, yazdırma, 201-yıl regresyon testleri.
- [x] Donanımı teyit edilmemiş özel talimlerin ayrı durum etiketi.
- [x] GitHub Pages `main` dalından etkin; depo sahibi canlı uygulamayı tarayıcıda doğruladı.
- [ ] Firefox/Safari ile ayrı tarayıcı testleri.
- [x] Gemi profili şablonu, katalog, yeni gemi taslak oluşturma aracı ve veri doğrulama testi oluşturuldu.
- [ ] Tek kaynak JSON'dan offline `index.html` derleme hattı ve profil/donanım senkronizasyon testi.
- [ ] Yeni geminin katalogdan kullanıcı arayüzünde otomatik seçilmesi; bugün henüz desteklenmiyor.
- [ ] Gerçek NENE HATUN can filikası, kurtarma/hizmet botu, acil dümen envanteri için belge bazlı doğrulama ve gemi sorumlu teyidi.

## Aşama 2 — Talim eğitimi, risk ve kayıt (v1.5.0 pilot)
- [x] Her talim kartından açılan **Talim Eğitimi** ekranı: amaç, sıralı aşamalar, tehlike başlıkları ve genel emniyet sınırları.
- [x] Geçmiş zamanlı tamamlanmış gibi yazılmış **örnek senaryo** ekranı; gerçek icra kaydından açık ayrım.
- [x] Yangın için 8, Gemiyi Terk için 12 genel kontrol başlığı; diğer talimler için pilot kontrol dizileri.
- [x] Yerel TXT/PDF/JSON kayıt taslağı ve eksik işlem/risk denetimi.
- [x] Girilen bilgilerin otomatik sunucu aktarımı olmadan sadece tarayıcı belleğinde tutulması.
- [ ] Tam ve güncel kurum prosedürlerinin onaylı **erişimi kontrollü veri paketi** olarak entegre edilmesi.
- [ ] Güncel kurumsal EK-V formunun birebir çıktısı ve diğer özel ISM formlarının yetkili, kurum içi eşleştirmesi.
- [ ] Gemiye özgü doğrulanmış envanterin yetkili veri paketi olarak HTML ile eşleştirilmesi.
- [ ] Risk matrisinin geçerli kurum kodu/revizyonuyla hesaplama ve onay süreçlerinin tamamlanması.
- [ ] Talim içi **yalnızca simülasyon** işlemleri ile izinli gerçek ekipman testlerinin prosedür bazlı ayrıntılandırılması.

## Aşama 2 — Kaynaklı talim prosedürleri
- [x] Genel eğitici talim ekranı (v1.5.0); [ ] güncel gemiye özgü onaylı prosedür verisiyle eşleştirme.
- [ ] Mevzuat maddesi, kurum SMS/ISM prosedür revizyonu ve iyi uygulamanın ayrı gösterimi.
- [ ] Emniyet/durdurma kriterleri, hazırlık, icra, değerlendirme ve ilgili form.
- [ ] Gemi görevine özgü yeni senaryolar için ayrı veri katmanı (yasal/kural dayanağı kontrol edilerek).

## Aşama 3 — Kayıt taslakları
- [ ] Plan bilgileriyle ISM talim formunun **taslağını** doldurmak.
- [ ] Gerçekleşen faaliyet, süre, katılım, bulgu, düzeltici faaliyetler için insan doğrulaması.
- [ ] Planlanan/gerçekleşen tarihlerin ve ertelemelerin izlenmesi.

## Aşama 4 — Role cetveli ve personel
- [ ] Gemi bazlı role cetveli, görevlendirmeler ve posta bazlı kontrol yükümlülükleri.
- [ ] Kişisel/kurumsal bilgilerin yerel ve yetkili ortamda işlenmesi.
- [ ] Gemiler arası profil çoğaltılması yerine tek motorun sürümlenebilir profillerle işletilmesi.

**Mimari:** [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). **Politika:** v1.2 değişikliği, kullanıcı tarafından ayrı onay gerektirir.
