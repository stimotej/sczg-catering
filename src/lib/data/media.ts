import fetchApi from "../utils/api";
import { fotogalerijaFolderId, revalidateTime } from "@/lib/utils/constants";
import type { Media } from "@/models/media";

export function getMedia() {
  const params = {
    media_folder: fotogalerijaFolderId.toString(),
    per_page: "100",
  };

  const queryParams = new URLSearchParams(params).toString();

  return fetchApi<Media[]>(`/media?${queryParams}`, {
    next: {
      revalidate: revalidateTime,
      tags: ["media"],
    },
    cache: "force-cache",
  });
}
