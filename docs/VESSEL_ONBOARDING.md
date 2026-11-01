# Yeni Gemi Profili ve Belge Yönetimi — Uygulama Rehberi

**Durum:** 1 Kasım 2026, hazırlık altyapısı. **Uygulama sürümü:** 1.4.1. **Planlama politikası:** 1.2. Bu belge bir KEGM kurumsal prosedürü değildir.

## 1. Temel yaklaşım

Tek takvim hesaplama motoru ve ayrı ayrı sürümlenen gemi profilleri kullanılır. Yeni gemi için HTML dosyasını kopyalamayacağız. Her geminin kimliği, donanımı ve kanıta dayalı farklılıkları ayrı JSON profiline kaydedilir.

- `index.html`: halihazırda çalışan, internet gerektirmeyen tek sayfa sürümü.
- `data/vessels/catalog.json`: gemi kimlikleri, dosya yolları ve **uygulamaya entegre olup olmadığı**.
- `data/vessels/<gemi-id>.json`: bir geminin **yayımlanabilir** teknik profil bilgisi.
- `data/vessels/_template.json`: bütün ekipmanların başlangıçta **bilinmiyor** (`null`) olduğu boş profil.
- `scripts/new-vessel.cjs`: gemi adıyla profil taslağını ve katalog kaydını oluşturan, harici kütüphane gerektirmeyen komut.
- `tests/test-vessel-profiles.cjs`: katalog, profil, ekipman belirsizliği ve kaynak bağı kontrolü.

**Kritik mevcut sınırlama:** Yeni bir profilin JSON dosyasının oluşturulması, **v1.4.1 HTML arayüzüne yeni gemi eklemez**. Mevcut HTML'nin gemi listesi/profil mantığı halen gömülüdür. Gemi profili onaylandığında tek kaynak veriden HTML üretimi veya güvenilir profil yükleme mekanizması geliştirilecek, ilgili entegrasyon ayrıca test edilip yayımlanacaktır. `in_app:false` bu ayrımı açıkça işaretler.

## 2. NENE HATUN belgelerini nasıl sağlayacağız?

**A. Kaynak belgeleri ayrı ve kontrollü saklama**

Geminin güncel envanteri, eğitim manueli, ISM/SMS dokümanları, acil durum el kitapları, role cetveli, donanım listeleri ve revizyon kayıtlarının **özgün nüshaları**, kurumun yetkili saklama ve erişim sistemi içinde kalmalıdır. Bu ChatGPT Projesine inceleme için dosya sağlanabilir; ancak sohbet veya kamuya açık repo, kurumun asıl arşivi yerine geçmez. İnceleme verilecek dosyalardaki kişisel/saklı bilgilerin kurum politikasına uygun paylaşılması gerekir.

**B. Belge tesliminde tutulacak asgari üst veriler**

| Alan | Örnek biçim / açıklama |
| --- | --- |
| Belge adı | Tam özgün başlık |
| Belge kodu | Belgede bulunan gerçek kod; yoksa `belirtilmedi` |
| Revizyon ve tarih | Kapağında/geçerlilik bölümünde yazan değer |
| Gemiye uygulanabilirlik | Tek gemi / filonun tamamı / gemi tipi |
| Yürürlük durumu | Yürürlükte / eski revizyon / doğrulanamadı |
| Yetki ve paylaşım | İç inceleme / yayımlanabilir özet / yayımlanamaz |
| Veri öğesi ve dayanağı | İlgili madde, çizelge, sayfa ve kayıt kaynağı |
| Doğrulayan sorumlu | Gemi sorumlusu tarafından teyit edilecek; adın kamuya açıklanması şart değil |

**C. Doğrulanmış, yayımlanmasına izin verilmiş veri özeti**

Kamuya açık JSON profilinde yalnızca paylaşım izni bulunan teknik veriler yer alır. Kamuya açık kaynak atıfları URL ile gösterilebilir. İç dokümanlar için yalnızca **kamusal açıdan güvenli, yetkilendirilmiş kaynak referansları** kullanılabilir; kurum içi dosya konumu, kişi adı, gizli içerik, metin alıntısı veya özgün PDF yayımlanmaz. İhtiyaç hâlinde iç kaynak kimliği ile belgelerin eşleştirilmesi yalnızca yetkili yerel kayıt defterinde tutulur.

## 3. Doğrulama ilkesi

`drill_relevant_equipment` altındaki `available` alanı **üç değer** alır:

- `true`: güncel, gemiye ait yetkili kaynaktan doğrulanmış mevcut donanım.
- `false`: güncel, gemiye ait yetkili kaynaktan doğrulanmış bulunmayan donanım.
- `null`: **doğrulanmadı**; var veya yok şeklinde yorumlanamaz.

`true` ve `false` verilen kaydın `source_refs` alanı dolu olmalı ve `sources` içinde karşılığı bulunmalıdır. Doğrulama kaynağı, revizyonu, kapsamı ve güncelliği değerlendirilmeden donanım bilgisi kesinleştirilmez. Cihaz bulunması, belirli bir talimin her gemi için aynı sıklıkla yasal olarak zorunlu olduğu anlamına gelmez.

NENE HATUN'un üç koşullu donanım alanı **henüz `null` durumundadır**. Bu durum belgelere dayalı teyide kadar korunur.

## 4. Yeni gemi ekleme — en kısa yol

**Geliştirici için:** Repo kökünde Node.js 20+ ile:

```bash
node scripts/new-vessel.cjs "YENİ GEMİ ADI"
node tests/test-vessel-profiles.cjs
node tests/test-calendar.cjs
```

İlk komut gemi adıyla `data/vessels/<gemi-id>.json` taslağını oluşturur ve `data/vessels/catalog.json` içine `in_app:false` kaydı ekler. Gemiye ait teknik donanım **tahmin edilmez**. Profil dosyası varsa üzerine yazılmaz. Yeni geminin tarayıcıda seçilebilmesi için **uygulama entegrasyonu ve ayrıca test** gerekecektir.

**Belgeyi sağlayan gemi personeli için:** Kod veya JSON düzenlemesi gerekmiyor. Güncel belgeleri uygun erişim ortamında paylaşması ve belgenin hangi gemiye/hangi revizyona ait olduğunu bildirmesi yeterli. Belge incelemesinden sonra doğrulanmış, yayımlanabilir profil bilgileri uygulama geliştirme sürecinde hazırlanır.

## 5. Kayıtların saklanması

| Veri grubu | Saklama önerisi | Açık GitHub Pages/GitHub'a aktarım |
| --- | --- | --- |
| Uygulama kaynak kodu, testler | GitHub deposu; sürüm kontrolü | Evet |
| Gemi kimliği ve yayımlanabilir donanım meta verisi | `data/vessels/*.json` | Yalnızca yetki verildiyse |
| Kurumun envanter/manual/role cetveli özgün dosyaları | Kurum yetkili erişim sisteminde, revizyonlu | Hayır (ayrı izin olmadıkça) |
| Kaynak–madde kanıt eşleştirme ve doğrulama notları | Yetkili kontrollü çalışma alanı | Yalnızca yayımlanabilir özet |
| Personel/posta verileri ve fiilî ISM kayıtları | Yetkili gemi/kurum kayıt sisteminde | Hayır |

**İleriki adımlar:** Gemi profili alanlarının çeşitlendirilmesi; tek kaynak profillerden bağımsız offline HTML paketinin otomatik üretilmesi; gemi tipi/göreviyle ilişkili senaryo ve prosedür ekleme; personel verisi için yetki ve erişim denetimi. Bunlar henüz uygulanmış özellikler değildir.

## 6. Lisans ve mevzuat ayrımı

Kamuya açık uygulamanın özgün kodu MIT lisanslıdır. Bu lisans **kurumun el kitaplarını ve kurum kaynaklı belgelerini otomatik olarak kapsamaz**. Gemi verisini uygulamaya uyarlamak, bir dokümanın tam metnini yayımlamak için izin verildiği anlamına gelmez. Özellikle SOLAS hükümleri, kurum prosedürleri ve proje planlama tercihleri ayrı kaynak katmanlarında tutulacaktır.
