# Naturchem — statický web

Projekt je v tomto adresáři **odděleně** od jiných workspace (např. Parfin). V Cursoru používejte **File → Open Folder** na složku `Naturchem web`.

## Lokální vývoj

```bash
npm install
npm run dev
```

Build náhled:

```bash
npm run build
npm run preview
```

## Nasazení

Složka `dist/` je kompletní statický web (HTML, CSS, `sitemap-index.xml`, `robots.txt`).

- **Netlify**: použije se `public/_redirects` (`/kontakt.php` → `/kontakt`).
- **Vercel**: níže celý návod včetně GitHubu + `vercel.json` (přesměrování `/kontakt.php` → `/kontakt`).
- **Apache**: zkopírujte také `public/.htaccess` do kořene webu.

Volitelný formulář (Formspree): nastavte env před buildem `PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxx`.

---

### GitHub — vytvoření repozitáře a první nahrání kódu

**Potřebujete:** účet na [github.com](https://github.com), nainstalovaný **Git** ([git-scm.com](https://git-scm.com/download/win) — na Windows stačí výchozí volby instalátoru).

#### 1) Nový repozitář na GitHubu (prázdný)

1. Přihlaste se na GitHub → vpravo nahoře **+** → **New repository**.
2. **Repository name:** např. `naturchem-web` (název je na vás).
3. Nechte **Public** (nebo Private, pokud nechcete veřejný kód).
4. **Nezaškrtávejte** „Add a README“, „Add .gitignore“, „Choose a license“ — chceme **úplně prázdný** repozitář, aby se první push neshodoval s již existujícími soubory na GitHubu.
5. Klikněte **Create repository**. Zobrazí se stránka s nápovědou — zkopírujte si **URL repozitáře**:
   - HTTPS: `https://github.com/VAS_UZIVATEL/naturchem-web.git`
   - nebo SSH: `git@github.com:VAS_UZIVATEL/naturchem-web.git` (musíte mít nastavený SSH klíč v GitHubu).

#### 2) Git v projektu na počítači (PowerShell / terminál)

Otevřete terminál ve složce projektu (např. v Cursoru **Terminal → New Terminal**, nebo Explorer → ve složce `Naturchem web` Shift+pravý klik → „Otevřít v terminálu“).

```powershell
cd "C:\Users\novot\Desktop\Naturchem web"
```

Zkontrolujte, jestli už tu není git (když ano, přeskočte `git init`):

```powershell
git status
```

Když hlásí „not a git repository“, pokračujte:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial commit: Naturchem web (Astro)"
```

Nastavte **své jméno a e-mail** (pro záznamy v historii — jednorázově na tomto počítači):

```powershell
git config user.name "Vaše Jméno"
git config user.email "vas@email.cz"
```

Pak znovu commit, pokud předchozí commit bez jména/emailu neprošel:

```powershell
git add .
git commit -m "Initial commit: Naturchem web (Astro)"
```

Propojte lokální projekt s GitHubem (**nahraďte URL svým odkazem z kroku 1**):

```powershell
git remote add origin https://github.com/VAS_UZIVATEL/naturchem-web.git
git push -u origin main
```

- Při **HTTPS** GitHub požádá o přihlášení — na Windows se často otevře prohlížeč nebo použijete **Personal Access Token** místo hesla ([návod GitHub](https://docs.github.com/en/authentication)).
- Při prvním `git push` může systém nabídnout instalaci **Git Credential Manager** — doporučené.

Po úspěchu uvidíte kód na GitHubu v záložce kódu repozitáře.

#### Poznámky

- **`node_modules`** se do Gitu nedostane — je v `.gitignore`.
- Pokud jste na GitHubu omylem vytvořili repozitář **s README**, musíte buď repozitář smazat a znovu prázdný, nebo před prvním pushem udělat `git pull origin main --allow-unrelated-histories`, vyřešit případný konflikt a pak `git push`. Jednodušší je začít s **prázdným** repozitářem.
- Alternativa bez příkazové řádky: aplikace **GitHub Desktop** (Import local repository → Publish).

---

### Vercel — nasazení z GitHubu

1. **Účet na Vercelu**  
   [vercel.com](https://vercel.com) → registrace / přihlášení — ideálně **Continue with GitHub** a povolte Vercelu přístup k repozitářům (aspoň k tomuto projektu).

2. **Nový projekt**  
   **Add New → Project** → v seznamu najděte `naturchem-web` (nebo jak jste repozitář pojmenovali) → **Import**.

3. **Nastavení buildu** (většinou auto):
   - **Framework Preset:** Astro  
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`  
   - **Install Command:** `npm install`

4. **Node.js**  
   **Settings → General → Node.js Version** → **22.x** (odpovídá `engines` v `package.json`).

5. **Proměnné prostředí** (volitelně)  
   **Environment Variables:** `PUBLIC_FORMSPREE_ENDPOINT` = URL z Formspree (např. Production).  
   Bez ní stránka kontaktu stále nabízí e-mail a telefon.

6. **Deploy**  
   **Deploy**. Hotovo — odkaz typu `nazev-projektu.vercel.app`.

7. **Vlastní doména (`naturchem.cz`)**  
   **Project → Settings → Domains → Add** → `naturchem.cz` (případně `www.naturchem.cz`).  
   DNS záznamy podle návodu Vercelu nastavíte u registrátora domény.

8. **Kontrola**  
   `/kontakt`, přesměrování `/kontakt.php` → `/kontakt` (viz `vercel.json`), `https://naturchem.cz/sitemap-index.xml`.

9. **Další změny**  
   Upravíte kód lokálně → `git add` → `git commit` → `git push` → Vercel sám znovu zbuildí.

**CLI (volitelně):** `npm i -g vercel` → v kořeni projektu `vercel` / `vercel --prod`. Pro běžnou práci stačí GitHub + automatické deploye.

## Co řeší náhrada starého webu

Vyřešené problémy oproti předešlé prezentaci: platný meta popis (žádný text „description“), SVG ikony místo rozbitých tokenů (`device_thermostat` apod.), jednoznačný název bez rozpadlé hlavičky, funkční **`/kontakt`** (starý odkaz `/kontakt.php` přesměrován), generovaný **sitemap** bez chyby 500.

Lokální kontrola (preview + Lighthouse na homepage): výkon, přístupnost, SEO a best practices 100/100 v aktuálním prostředí buildu — po nasazení na produkci ověřte znovu na skutečné doméně.
