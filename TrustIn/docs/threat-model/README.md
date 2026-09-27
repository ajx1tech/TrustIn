# TrustIn Threat Model — initial scope

Status: **In Development**

Primary trust boundaries:

1. Holder/device → DID/VC presentation
2. API → policy decision point
3. Policy decision point → asset registry
4. Asset registry → integrity verifier
5. Application → blockchain contract layer
6. Application → encrypted off-chain storage

Priority abuse cases:

- stolen/compromised signing key
- forged or revoked credential
- unauthorized mint/allocation
- unauthorized role or policy change
- asset metadata tampering
- stale off-chain asset
- replayed authorization request
- malicious administrator
- privacy leakage through public policy/attributes
- smart-contract authorization bug

Planned formalisation: STRIDE + abuse-case matrix + contract invariants.
