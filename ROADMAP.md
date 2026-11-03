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

## Aşama 2 — İki bilgi sayfası (v1.5.1)
- [x] Talim Rehberi: eğitim amacı, uygulama sırası, emniyet ve risk başlıkları, ilgili kaynak hatırlatıcıları.
- [x] Rapor Yazım Rehberi: geçmiş zamanlı örnek senaryo, evrak, rapor içeriği ve EK-V konularının yalnızca **okuma listesi**.
- [x] Örnek metni kopyalama; form/risk puanı/checklist doldurma gerektirmeyen tek dosya.
- [x] IAMSAR Vol. III 2025 için SAR tematik eğitim başlıkları ve kaynak notu.
- [x] Takvim v1.2 algoritması, 12 Aylık PDF, CSV, ICS, TR/EN korunuyor.
- [ ] Her talimde geminin güncel onaylı eğitim/prosedür kaynaklarına dayalı içeriğin kademeli olarak genişletilmesi.
- [ ] Kaynak, revizyon ve uygulanabilirlik belgelerinin yetkili kurumsal veri alanında yönetimi.
- [ ] Gemiye özel onaylanmış ekipman/prosedür verisinin güvenli, ayrı ve isteğe bağlı entegrasyonu.
- [ ] Personel ve role görevlerinin yönetimi (daha sonraki aşama).
- [ ] Elektronik risk/ISM formları ve otomatik kayıt hazırlama (yalnızca ileride ayrıca kararlaştırılırsa).

## Aşama 2 — Kaynaklı talim prosedürleri
- [x] Salt-okunur talim rehberi (v1.5.1); [ ] güncel gemiye özgü onaylı prosedür verisiyle eşleştirme.
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
