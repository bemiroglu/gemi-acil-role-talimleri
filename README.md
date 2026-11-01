# Gemi Acil Role Talimleri / Vessel Emergency Drill Planner

**Türkçe varsayılan · English optional · Tek dosya HTML5 · Çevrimdışı çalışma**

Gemi personelinin yıllık acil durum role talimlerini **planlamasını ve incelemesini** kolaylaştıran, iki dilli bir takvim uygulamasıdır. Kaynak olarak kurum içi EK-VI Rev.015 çizelgesi ile birlikte hazırlanmış **kanonik proje planlama politikası v1.2** kullanılır. **Uygulama sürümü: 1.3.0.**

> **Önemli:** Bağımsız ve kamuya açık bir proje aracıdır; Kıyı Emniyeti Genel Müdürlüğünün resmî uygulaması veya onaylı talimatı değildir. Gemi tipi, sefer, donanım, bayrak devleti mevzuatı ve geminin SMS/ISM prosedürleri ayrıca değerlendirilmelidir. Takvimdeki her etkinlik **planlanmış** durumdadır; fiilen icra edildiği anlamına gelmez.

## Uygulamayı kullanma

**[Ana HTML uygulaması: index.html](./index.html)** · **[Doğrudan kaynak HTML indir](https://raw.githubusercontent.com/bemiroglu/gemi-acil-role-talimleri/main/index.html)**

1. `index.html` dosyasını bilgisayara indirip güncel bir tarayıcıda açın. Kurulum, API, hesap veya internet gerekmez.
2. Tarih seçin: o tarihin ait olduğu **pazartesi–pazar** haftasının pazar talimleri gösterilir.
3. **Ay/Yıl** görünümü arasında geçin; bir pazar gününe tıklayarak ilgili programı açın.
4. **Acil dümen sistemi** (varsayılan var), **kurtarma/hizmet botu** (varsayılan var) ve **can filikası** (varsayılan yok) seçeneklerini **gerçek gemi donanımına göre** ayarlayın.
5. Yıllık planı **CSV**, **ICS** veya **Yazdır/PDF** olarak alın. Kaydedilen bilgiler planlanan faaliyetlerdir.

**English:** Open `index.html` offline and select **English** at the top right. Choose a date, inspect that week's Sunday drills, switch month/year views, adjust vessel equipment, and export CSV/ICS or print.

## Temel özellikler

| İşlev | Açıklama |
| --- | --- |
| Dil | Türkçe / English |
| Takvim | 1900–2100; aylık ve yıllık görünüm; pazar günleri |
| Yangın adları | `*1` Güverte Yangını, `*2` Yaşam Mahalli Yangını, `*3` Makine Dairesi Yangını, `*4` Kuzine Yangını |
| Referanslar | Kullanıcıya açık senaryo adları gösterilir; senaryo kodları detay ve CSV'de kalır |
| Beşinci pazar | Yangın + Gemiyi Terk **ayrı talimler** olarak planlanır; proje kuralıdır |
| Donanım | Acil dümen, kurtarma/hizmet botu ve can filikası seçenekleri |
| Diğer işlemler | Özel talimler, periyodik kontrol hatırlatmaları ve plan tavsiyeleri |
| Çıktılar | CSV, ICS, yazdırma / PDF |
| Mimari | Harici JavaScript kütüphanesi, sunucu ve veri toplama bulunmaz |

### Planlama kurallarından örnekler

Yangın talimi ayın **1. ve 3. pazarlarında**, Gemiyi Terk talimi **2. ve 4. pazarlarında** planlanır. Beşinci pazar bulunduğunda her iki faaliyet ayrıca takvime konur. Yangın senaryo dağılımı için deterministik yıllık dengeleme uygulanır.

**2026:** Yangın 28, Gemiyi Terk 28. Beşinci pazar günleri 29 Mart (`*4`), 31 Mayıs (`*1`), 30 Ağustos (`*3`), 29 Kasım (`*2`).

Bu kuralların tümünün SOLAS veya ulusal mevzuat tarafından aynı biçimde zorunlu tutulduğu iddia edilmez. Operasyonel erteleme ve personel/posta katılımı bu sürümde kaydedilmez.

## Sürüm ve testler

Uygulamanın **1.3.0** sürümünde talim adları açıklayıcı hâle getirildi; kullanıcıya görünen **Algoritma Denetimi** bölümü kaldırıldı. Matematiksel testler korunmuştur:

```bash
node tests/test-calendar.cjs
```

Bağımlılıksız test, 1900–2100 yıllarını ve 2026 regresyon senaryolarını kontrol eder. GitHub Actions iş akışı mevcut olduğunda her `push` ve pull request üzerinde çalışır.

## GitHub Pages

Depo sahibi **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save** adımlarını tamamladıktan sonra sayfayı GitHub Pages üzerinden yayımlayabilir. **GitHub Pages ayarı henüz teyit edilmedikçe çevrimiçi uygulama adresi etkin kabul edilmemelidir.**

## Güvenlik, gizlilik ve paylaşım

Kamuya açık depoya kurumun onay vermediği prosedür PDF'leri, gizli gemi bilgileri, role cetvelindeki personel bilgileri veya doldurulmuş ISM formları eklenmemelidir. Geliştirici işareti kaynak içinde kodlanarak düşük görünürlükte gösterilir; bu yöntem **kriptografik olarak değiştirilemez** bir imza değildir.

**Lisans:** Proje sahibi açık kaynak yeniden kullanım lisansı henüz seçmemiştir. Kamuya açık olmak otomatik olarak herhangi bir lisans vermemektedir.

**İleride:** Doğrulanmış kaynaklara dayalı talim prosedür ekranları, ISM kayıt **taslakları**, gemi role cetveli ve görev dağılımı. Ayrıntılar: [ROADMAP.md](./ROADMAP.md).

**Geliştirici:** Bilal Emiroğlu – TA1BU · **Uygulama v1.3.0** · **Kanonik planlama politikası v1.2**
