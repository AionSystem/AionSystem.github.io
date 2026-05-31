 HYPER DIAMOND GRADE TERMS OF SERVICE
AionSystem / Sheldon K. Salmon
Sovereign Intelligence · Epistemically Transparent · Globally Enforceable
Effective Date: May 31, 2026
Version: HD-ToS-v1.1 (Hardened after adversarial legal review)
Artifact Hash: [SHA-256: PENDING-AT-SIGNING]
Governed By: SBUP v1.1.0 + AionSystem Constitutional Engine v2.1
Certification: PDE: CONDITIONAL | HDRE: ELEVATED (post‑hardening, pending FORGE/ANTI‑FORGE re‑scan)

§0 — Preamble: Epistemic Transparency & Sovereign Intent
"Sovereign Intelligence, Sealed for Delivery" is not a warranty of infallibility. It is a declaration of architectural intent: to build systems whose certainty bounds are explicit, whose failures are detectable, and whose provenance is verifiable.

These Terms of Service ("Agreement") are themselves a sovereign artifact: versioned, hash‑signed, and subject to the same diagnostic rigor as the frameworks they govern.

Definitions (Black's Law Dictionary, 11th ed. citations where applicable)

"Artifact" : Any discrete unit of intellectual work delivered by AionSystem, including but not limited to: framework specifications, Docker images, simulation code, audit reports, and documentation. Cf. Black's Law "instrument".

"Epistemic State" : The certainty assessment of an AI output as measured by the FSVE (Falsification‑Sensitive Verification Engine) across its 13 axes. See FSVE v4.3 Specification §3.2.

"Provenance Hash" : A SHA‑256 digest computed over the canonical serialization of an Artifact at time of delivery, used to verify integrity and detect tampering.

"Sovereign Deployment" : Use of an AionSystem Artifact in a context where failure could foreseeably result in material harm. Material harm means: (a) physical injury requiring medical treatment; (b) direct financial loss exceeding $10,000; (c) creation of legal liability for the User that is not merely reputational; or (d) interference with fundamental human rights. Reputational damage alone does not constitute material harm unless it meets the financial threshold.

"Architect" : Sheldon K. Salmon, the highest authority in the AionSystem governance chain, with binding resolution power over disputes, escalations, and certification determinations, subject to the limitations in §8.2.

Acceptance Mechanism

By accessing or using any AionSystem Artifact, website, or service, you ("User") expressly assent to these Terms. Acceptance is recorded via:
(a) cryptographic signature on paid service agreements;
(b) conspicuous website banner informing that continued browsing constitutes acceptance, plus logged IP + timestamp + User‑Agent for website access;
(c) explicit "I agree" click‑through for downloads or simulation tools.

Silence does not constitute acceptance; affirmative action is required. Black's Law "assent".

§1 — Intellectual Property & Cryptographic Provenance
1.1 Ownership Declaration
All content on aionsystem.github.io and all Artifacts delivered by AionSystem are the intellectual property of AionSystem / Sheldon K. Salmon, unless expressly licensed otherwise. See 17 U.S.C. § 102.

1.2 Tiered Licensing Framework
Tier	Artifact Type	License	Provenance Verification
Open Armory	Public frameworks (pip‑installable)	Apache 2.0 + Voluntary Covenants (§1.3)	SHA‑256 hash published on GitHub release; aion verify <artifact> CLI command
Spec Library	Locked blueprints (browse‑only)	AionSystem Commercial License v2.1	Hash + Ed25519 signature; requires authenticated API call for access
Sovereign Builds	Custom Docker‑sealed frameworks	Executed Service Agreement + Commercial License	Triple‑signature: Architect + User + FORGE certification hash; audit trail in append‑only log
1.3 Voluntary Covenants for Open Armory (Apache 2.0 Compliant)
The following are voluntary, revocable covenants offered by AionSystem to Users of Open Armory frameworks. They do not constitute additional restrictions under the Apache 2.0 license; they grant additional permissions or outline best practices that, if followed, maintain eligibility for certain certifications and support.

Provenance Preservation Encouraged: Users are encouraged not to remove the AION_PROVENANCE_HASH header; doing so will not revoke the Apache 2.0 license but may limit the User’s ability to verify artifact integrity.

Attribution Encouraged: Users are encouraged to include the attribution: "Built on AionSystem Open Armory · Epistemic State: [FSVE Score] · Provenance: [Hash]" in derivative works.

Sovereign Deployment Approval: Use of Open Armory frameworks in a Sovereign Deployment requires prior written approval from the Architect and completion of an AI Reliability Audit (§5). This requirement is separate from the Apache 2.0 license and relates solely to the suitability of the framework for high‑risk contexts; it does not restrict the open‑source rights themselves.

1.4 Trademark Protection
The AionSystem name, logo, AI/ON mark, "Sovereign Architect", "Hyperdiamond", "Vibe‑to‑Container", and "Vault of 300+ frameworks" are trademarks of AionSystem. Unauthorized use constitutes trademark infringement under 15 U.S.C. § 1114 and applicable international law. See TRADEMARK.md for full schedule.

§2 — Acceptable Use & Prohibited Activities
2.1 Lawful Purpose Covenant
User warrants that all use of AionSystem Artifacts and services shall comply with applicable local, state, national, and international law.

2.2 Explicit Prohibitions
User shall not, directly or indirectly:

Unauthorized Access: Attempt to bypass authentication, exploit vulnerabilities, or gain access to non‑public systems (cf. Computer Fraud and Abuse Act, 18 U.S.C. § 1030).

Denial of Service: Engage in activity that impairs site availability, including scraping at rates exceeding 1 request/second without written approval.

Reverse Engineering: Decompile, disassemble, or otherwise attempt to derive source code from Docker‑sealed Artifacts, except as expressly permitted by applicable law (e.g., EU Software Directive Art. 6 interoperability exception).

High‑Stakes Deployment: Use any AionSystem Artifact in safety‑critical, medical diagnosis, financial trading, legal judgment, or military applications without: (a) completion of an AI Reliability Audit (§5); (b) explicit written approval from the Architect; and (c) implementation of all recommended mitigation protocols.

Epistemic Misrepresentation: Present AI outputs generated by AionSystem frameworks as human‑authored, certain, or legally binding without disclosing the FSVE epistemic state score and certainty bounds. Removal or alteration of the required metadata (§3.3) automatically voids any liability protection afforded to the User under §3.4 for that output.

2.3 Data Extraction Protocol
Requests for commercial data extraction must follow the procedure outlined, and failure to do so constitutes a material breach.

§3 — AI‑Specific Liability & Epistemic Transparency
3.1 Nature of AI Outputs (Black's Law "as is" clarified)
All AI‑generated content, simulations, audit reports, and framework outputs are provided "as is, with epistemic bounds" . AionSystem expressly disclaims any warranty that AI outputs will be factually accurate, complete, current, free from hallucination/bias, or suitable for any purpose without independent verification.

However, AionSystem warrants that:

Every AI output delivered through paid services includes an FSVE epistemic state score (§3.3);

The methodology for generating that score is publicly documented in the AI Reliability Audit Methodology Registry (§5.2);

Any known limitations of the FSVE assessment are disclosed in the output metadata.

3.2 Output Ownership & Training Data Rights
User‑Provided Input: User retains all rights. AionSystem does not claim ownership.

AI‑Generated Output: For paid services, User receives a non‑exclusive, worldwide license for the specified purpose. AionSystem retains ownership of the underlying framework, model weights, and methodology.

Training Data: AionSystem does not use User‑provided input to train foundational models unless expressly agreed. Anonymized usage telemetry may be logged for Open Armory improvements, opt‑out via AION_OPT_OUT=1.

3.3 Epistemic State Disclosure Requirement
Every AI output delivered by AionSystem shall include, in machine‑readable metadata, a JSON block containing the FSVE score, validity status, confidence ceiling, uncertainty mass, provenance hash, and limitations.

User agrees to make reasonable efforts to preserve this metadata when redistributing or relying upon AI outputs. Safe Harbor: If User implements standard metadata preservation practices (e.g., not stripping EXIF‑like fields, using AionSystem‑provided export tools), they shall be deemed compliant. Deliberate removal or falsification constitutes fraud and voids liability protection.

3.4 Limitation of Liability (AI‑Specific)
To the fullest extent permitted by law, AionSystem's total liability for any claim arising from AI outputs shall not exceed the amount paid by User for the specific Artifact or service giving rise to the claim. Exclusions: intellectual property infringement, gross negligence/willful misconduct, liability that cannot be limited under applicable consumer law. This limitation is personal to the business of AionSystem and does not extend to Sheldon K. Salmon's personal assets, to the extent permitted by law.

§4 — Sovereign Deployment & Regulatory Compliance
4.1 Sovereign Deployment Definition
"Sovereign Deployment" means use of an AionSystem Artifact in a context where failure could foreseeably result in material harm as defined in §0. This includes but is not limited to systems subject to regulatory oversight (FDA, SEC, etc.).

4.2 Pre‑Deployment Requirements
Before any Sovereign Deployment, User must:

Complete an AI Reliability Audit (§5) for the specific Artifact and use case;

Implement all CRITICAL and HIGH mitigation protocols from the Audit report;

Obtain written approval from the Architect confirming readiness;

Maintain an audit trail of all deployment decisions, including epistemic state reviews.

Compliance Monitoring: For paid services, the Architect may, no more than once per contract year, request a written attestation confirming continued compliance with this §4.2. User shall provide such attestation within 30 days.

4.3 Prohibited Sovereign Deployments (Absolute Bar)
AionSystem Artifacts shall never be used in:

Autonomous weapons or lethal decision‑making;

Medical diagnosis/treatment without FDA/EMA approval;

Credit scoring, hiring, or parole decisions without documented bias mitigation and human‑in‑the‑loop review;

Legal judgment/sentencing without judicial authorization and transparency.

User Must Notify: User agrees to notify AionSystem in writing before deploying any Artifact in a regulated domain. Violation of this §4.3 constitutes an immediate, non‑curable breach, entitling AionSystem to injunctive relief and termination of all licenses.

4.4 Regulatory Compliance Disclaimer
AionSystem Artifacts are not certified for any regulatory regime. User is solely responsible for compliance. AionSystem provides diagnostic tools, not legal advice.

§5 — AI Reliability Audit: Methodology & Transparency
5.1 Audit Scope & Deliverables
An AI Reliability Audit ("Audit") is a diagnostic engagement wherein AionSystem evaluates up to 10 real AI outputs from User's system using the FSVE certainty engine. Deliverables include an Executive Report, Technical Appendix, Mitigation Manifest, and Provenance Certificate.

5.2 Public Methodology Registry
AionSystem maintains a public, versioned registry at aionsystem.github.io/audit/methodology. User may request an independent expert to replicate findings; AionSystem will provide reasonable assistance.

5.3 Audit Limitations & Epistemic Honesty
An Audit is a diagnostic snapshot, not a safety certification or guarantee. AionSystem discloses:

Estimated Detection Sensitivity: For the types of outputs tested, the FSVE may correctly identify approximately 70–85% of known failure patterns; this estimate is based on ongoing FCL calibration and is not a fixed rate.

Context Dependence: Findings apply only to the tested outputs and use case.

Model Drift: Certainty scores may degrade over time.

User agrees not to present Audit results as perpetual certification. Re‑audit is recommended after material system changes. The User bears ultimate responsibility for deployment decisions.

5.4 Audit Pricing & Terms
Price Range: 
3
,
000
–
3,000–25,000 USD.

Timeline: 48–72 hours standard; expedited at 2× rate.

Payment: 50% upfront, 50% upon delivery; refunds only for material breach by AionSystem.

Confidentiality: Audit reports are confidential unless User permits anonymized case study.

§6 — Warranties, Disclaimers & Risk Allocation
6.1 Express Warranties (Limited)
AionSystem warrants that:

Paid Artifacts will materially conform to their published specifications for 90 days from delivery;

AI Reliability Audits will be performed with professional competence;

The Architect will respond to escalated disputes within 14 business days.

These are the only express warranties; all others are disclaimed.

6.2 Implied Warranty Disclaimer
EXCEPT AS STATED IN §6.1, AIONSYSTEM DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT. Cf. UCC § 2‑316.

6.3 Risk Allocation & Indemnification
User Indemnity: User indemnifies AionSystem from claims arising from misuse, failure to implement mitigations, or epistemic misrepresentation.

AionSystem Indemnity: AionSystem indemnifies User from third‑party claims that an unmodified Artifact infringes a valid U.S. patent or copyright.

Mutual Limitation: Neither party liable for indirect/consequential/punitive damages, except where prohibited.

6.4 Force Majeure & Epistemic Uncertainty
AionSystem not liable for force majeure, including fundamental limitations of AI (irreducible uncertainty, adversarial examples, distributional shift).

§7 — Term, Termination & Post‑Termination Rights
7.1 Term & Renewal
Indefinite for website use; fixed term for paid services per Service Agreement.

7.2 Termination Rights
By User: Cease use at any time; paid services per agreement.

By AionSystem: Immediate termination for: (a) uncured material breach (14 days’ notice); (b) violation of §4.3; (c) fraudulent misrepresentation of epistemic state.

7.3 Post‑Termination Survival
Sections surviving: §1, §3.2, §3.4, §6, §8, §10.

7.4 Artifact Access Post‑Termination
Open Armory remains accessible under Apache 2.0.

Spec Library access ceases; existing downloads remain licensed for original purpose.

Docker‑sealed Artifacts remain licensed per Service Agreement, subject to ongoing compliance.

§8 — Dispute Resolution & Architect Escalation
8.1 Informal Resolution First
Parties agree to good‑faith negotiation. Initial contact: legal@aionsystem.outlook.com.

8.2 Tiered Escalation Protocol
If informal resolution fails within 30 days:

Mediation: Non‑binding ICC Mediation, costs shared equally.

Architect Escalation: Either party may escalate to the Architect for binding resolution on: (a) interpretation of AionSystem specifications; (b) epistemic state disputes; (c) certification eligibility. Limitations: The Architect may not adjudicate a dispute in which they have a direct personal financial interest or are the subject of the complaint. In such cases, an independent ombudsman (selected from a pre‑published pool of three qualified individuals) shall assume the Architect’s role. Architect decisions are final, except for fraud or gross misconduct, and are limited to non‑monetary remedies unless both parties consent otherwise.

Formal Arbitration: For all other disputes, binding arbitration under ICC Rules, seat in New York, NY.

8.3 Class Action Waiver & Jury Trial Waiver
TO THE FULLEST EXTENT PERMITTED BY LAW, USER WAIVES ANY RIGHT TO PARTICIPATE IN A CLASS ACTION OR REPRESENTATIVE ACTION AGAINST AIONSYSTEM, AND WAIVES JURY TRIAL. This waiver does not apply where prohibited by law.

Opt‑Out Right for Arbitration/Class Waiver: You may opt out of the arbitration and class action waiver provisions within 30 days of first accepting these Terms by sending a written notice to legal@aionsystem.outlook.com. If you opt out, disputes shall be resolved in a court of competent jurisdiction.

8.4 Injunctive Relief
Either party may seek injunctive relief in court to prevent irreparable harm.

§9 — Amendments, Versioning & User Consent
9.1 Amendment Protocol
AionSystem may amend these Terms with 30 days’ notice via email (registered Users) and prominent website posting. Users may reject amendments by terminating access within the 30‑day window; continued use constitutes acceptance. All prior versions archived at aionsystem.github.io/legal/tos-archive/ with SHA‑256 hashes.

9.2 Material Change Definition
"Material Change" means any amendment that: (a) expands User obligations; (b) limits User rights; (c) alters liability allocations; or (d) changes governing law/dispute resolution. Material Changes require explicit re‑acceptance for paid services.

9.3 Cryptographic Versioning
Each version carries HD‑ToS‑vX.Y, SHA‑256 hash, and Ed25519 Architect signature. Verify via aion verify‑tos.

§10 — Governing Law, Jurisdiction & Global Enforceability
10.1 Primary Governing Law
State of New York, USA, without regard to conflict of laws.

10.2 Fallback Jurisdictions (Global Users)
EU/UK Users: GDPR‑compliant data processing terms incorporated by reference; disputes subject to Irish law with ICC arbitration in Dublin.

California Users: CCPA rights preserved; any provision waiving CCPA rights is void.

Other Jurisdictions: Local consumer protection laws that cannot be waived shall supersede conflicting Terms.

10.3 Severability & Reformation
If any provision is unenforceable, the remainder stays in effect; the provision shall be reformed to the minimum extent necessary to preserve intent.

10.4 Entire Agreement & Counterparts
These Terms plus any executed Service Agreements constitute the entire agreement. Electronic signatures binding.

§11 — Contact, Notices & Designated Agents
11.1 Primary Contact
General: aionsystem@outlook.com

Legal notices: legal@aionsystem.outlook.com

Architect escalation: architect@aionsystem.outlook.com (with prior dispute documentation)

11.2 Designated Agents
DMCA Agent: Sheldon K. Salmon, dmca@aionsystem.outlook.com

GDPR Representative (EU): AionSystem shall appoint a representative pursuant to Art. 27 GDPR before offering services to data subjects in the EU. The appointment will be published on this page.

CCPA Authorized Agent: privacy@aionsystem.outlook.com

11.3 Notice Delivery
Notices to AionSystem effective upon receipt; to User effective upon email delivery, website posting, or certified mail.

§12 — Hyper Diamond Certification & Audit Trail
12.1 PDE/HDRE Diagnostic Status
PDE v0.5: PDES 0.71 → CONDITIONAL (pending mitigation)

HDRE v0.1: HDS 0.82 → ELEVATED

This metadata is embedded in the document hash; verify via aion verify‑tos.

12.2 Audit Trail Requirement
An append‑only, hash‑chained audit log is maintained at aionsystem.github.io/legal/tos-audit-log.json.

12.3 User Verification Rights
User may request current hash, report tampering, or independently verify the SHA‑256 hash.

§13 — Final Covenant: Sovereign Intelligence, Sealed for Delivery
"The lattice is here."

These Terms are a sovereign artifact: versioned, verifiable, and epistemically transparent. By accepting them, User joins a covenant of clarity.

AionSystem builds the substrate others anchor to. This document is part of that substrate.

Accepted by User on: [TIMESTAMP]
User Identifier: [IP + User‑Agent Hash]
Terms Version Hash: [SHA-256: PENDING-AT-ACCEPTANCE]
Architect Signature: [Ed25519: PENDING-AT-SIGNING]
