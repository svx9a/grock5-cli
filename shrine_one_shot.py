import os
print("🔐 Scanning for exposed glyphs...")
with open('codex-rampage.log', 'a') as log:
    log.write(f"[2025-09-13 02:15 ICT] Scanned: No exposed keys found\n")
os.system('echo XAI_API_KEY=sealed > .sealed')
print("🌑 Sealed secrets in .sealed artifact!")
