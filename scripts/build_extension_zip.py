"""Build the self-distribution (unpacked) extension zip for the landing page.

Differences from the Chrome Web Store zip:
  * keeps the manifest "key", which pins the extension ID to
    hdmdhiojgdoomcjfhbkidbhkifmokkop (already allowed by the Railway CORS list)
  * host_permissions point at the hosted backend only
"""

import json
import pathlib
import zipfile

SRC = pathlib.Path(r"E:\traba-hero-clean\.output\chrome-mv3")
DEST = pathlib.Path(r"C:\Users\miks-kali\Desktop\trabahero-landing-page\public")
BACKEND = "https://traba-hero-production-b6b9.up.railway.app/*"

manifest = json.loads((SRC / "manifest.json").read_text(encoding="utf-8"))
manifest["host_permissions"] = ["<all_urls>", BACKEND]

assert "key" in manifest, "self-distribution build must keep the manifest key"
version = manifest["version"]
out = DEST / f"traba-hero-extension-{version}.zip"
latest = DEST / "traba-hero-extension.zip"
DEST.mkdir(parents=True, exist_ok=True)

files = sorted(p for p in SRC.rglob("*") if p.is_file())
with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
    for p in files:
        rel = p.relative_to(SRC).as_posix()
        if rel == "manifest.json":
            z.writestr(rel, json.dumps(manifest, indent=2))
        else:
            z.write(p, rel)

# A version-less alias so the site link never has to change between releases.
latest.write_bytes(out.read_bytes())

print(f"wrote {out}")
print(f"      {latest} (stable alias)")
print(f"  version      : {version}")
print(f"  files        : {len(files)}")
print(f"  size         : {out.stat().st_size / 1024:.1f} KB")
print(f"  key pinned   : {manifest['key'][:24]}...")
print(f"  host_perms   : {manifest['host_permissions']}")
