// TrustIn integrity state model — IN DEVELOPMENT

export type AssetState =
  | "UNVERIFIED"
  | "ACTIVE"
  | "QUARANTINED"
  | "REVERIFIED"
  | "REVOKED"
  | "RETIRED";

export function canTransition(from: AssetState, to: AssetState): boolean {
  const allowed: Record<AssetState, AssetState[]> = {
    UNVERIFIED: ["ACTIVE", "QUARANTINED"],
    ACTIVE: ["QUARANTINED", "REVOKED", "RETIRED"],
    QUARANTINED: ["REVERIFIED"],
    REVERIFIED: ["ACTIVE", "QUARANTINED"],
    REVOKED: [],
    RETIRED: []
  };
  return allowed[from].includes(to);
}
