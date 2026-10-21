import type { ModelCapabilitiesSnapshotEntry } from "./model-capabilities/types"

// LAUNCH-GATED: the ID is provisional. Fill only from the live launch listing, never from 5.1.
// Pricing is owned by the adopted senpi catalog; omo has no price override for this model.
export const FABLE_55_LAUNCH: ModelCapabilitiesSnapshotEntry = {
  id: "claude-fable-5-5",
  family: "claude-fable",
  reasoning: undefined,
  temperature: undefined,
  toolCall: undefined,
  modalities: undefined,
  limit: {
    context: undefined,
    input: undefined,
    output: undefined,
  },
}
