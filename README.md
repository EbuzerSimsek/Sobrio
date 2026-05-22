# Sobrio — Landing Page

Statik landing page. GitHub Pages ile ücretsiz yayınlanır; özel alan adı: **sobrio.online**.

## Dosyalar

```
index.html
styles.css
script.js
assets/icon.jpg
CNAME          → sobrio.online (özel domain)
.nojekyll      → Jekyll devre dışı
```

## 1. Yeni GitHub repo

1. GitHub → **New repository**
2. İsim örneği: `sobrio-website` (veya `sobrio.online`)
3. **Public**, README ekleme (bu klasörde zaten var)
4. **Create repository**

## 2. Bu klasörü repoya gönder

Terminalde:

```bash
cd sobrio-website

git init
git add .
git commit -m "Add Sobrio landing page"

git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/sobrio-website.git
git push -u origin main
```

`KULLANICI_ADIN` ve repo adını kendi bilgilerinle değiştir.

## 3. GitHub Pages aç

1. Repo → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` → klasör **`/ (root)`**
4. **Save**

Birkaç dakika sonra: `https://KULLANICI_ADIN.github.io/sobrio-website/`

## 4. sobrio.online bağla (Hostinger DNS)

GitHub repo → **Settings** → **Pages** → **Custom domain** → `sobrio.online` yaz → **Save**.

Hostinger → **Domains** → `sobrio.online` → **DNS / DNS Zone**:

| Tip | Ad | Değer |
|-----|-----|--------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `KULLANICI_ADIN.github.io` |

(Eski A kayıtlarını sil; çakışmasın.)

DNS 5–48 saat sürebilir; genelde 15–30 dk. GitHub Pages’te yeşil tik görününce `https://sobrio.online` çalışır.

**HTTPS:** Pages ayarında **Enforce HTTPS** işaretle.

## 5. App Store linki

`index.html` içinde `href="#"` olan butonları gerçek App Store URL’n ile değiştir:

```html
<a class="button primary" href="https://apps.apple.com/app/idXXXXXXXXX">
```

## Güncelleme

Dosyayı düzenle → commit → push; site birkaç dakika içinde güncellenir.
