import { useSelf, useMutation } from "@liveblocks/react";

export const useDeleteLayers = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useMutation(
    ({ storage, setMyPresence }) => {
      const liveLayers = storage.get("layers");
      const liveLayerIds = storage.get("layerIds");

      selection?.forEach((id) => {
        liveLayers.delete(id);

        const index = liveLayerIds.indexOf(id);

        if (index !== -1) {
          liveLayerIds.delete(index);
        }
      });

      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection]
  );
};
