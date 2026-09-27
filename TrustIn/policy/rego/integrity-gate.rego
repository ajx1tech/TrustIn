package trustin.integrity

# IN DEVELOPMENT — quarantine gate

deny_reason["asset_integrity_failed"] {
  input.asset.integrity == "QUARANTINED"
}
