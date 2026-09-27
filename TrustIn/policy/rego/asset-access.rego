package trustin.asset_access

# IN DEVELOPMENT — contextual access policy skeleton

allow {
  input.action != ""
  input.asset.integrity == "ACTIVE"
}
