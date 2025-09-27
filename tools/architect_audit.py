
import os, json, datetime
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
report = {
  "generated_at": datetime.datetime.utcnow().isoformat() + "Z",
  "summary": "",
  "findings": [],
  "verdict": "pass",
  "remediation": []
}
# Basic checks
critical = ["package.json","prisma/schema.prisma",".env.example","app/page.tsx"]
for c in critical:
    p = os.path.join(ROOT, c)
    if not os.path.exists(p):
        report["findings"].append({"file": c, "level": "critical", "message": "missing"})
        report["verdict"] = "fail"
# Check for Snyk/Semgrep not present as advisory
if not os.path.exists(os.path.join(ROOT, ".github")):
    report["findings"].append({"level":"warning","message":"Consider adding CI security scans (Semgrep/Snyk)"})
# Add token usage/cost advisory
report["advisory"] = [
    "Add token-usage monitoring and per-model cost caps in lib/ai client",
    "Ensure OpenAI key is rotated and stored in secrets manager rather than env in production"
]
if report["verdict"] == "pass":
    report["summary"] = "No critical missing files found, some advisories present."
else:
    report["summary"] = "Critical issues found; remediation required."
# Save report
outp = os.path.join(ROOT, "ops", "ARCHITECT_REPORT.json")
os.makedirs(os.path.dirname(outp), exist_ok=True)
with open(outp, "w", encoding="utf-8") as f:
    json.dump(report, f, indent=2)
print("ARCHITECT_REPORT.json written at", outp)
