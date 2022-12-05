import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "d55f27bfabc24cf1bcf8d019bfbd1b8b";
const token =
  "007eJxTYOjcF3v69E7fppTPJT/i0n5sqDKdeeQQM7tn2oZXzh5z5MUUGFJMTdOMzJPSEpOSjUyS0wyTktMsUgwMLZPSklIMkyySdCP7khsCGRnyC/cyMzJAIIjPzpCcn5JakJnKwAAARWEiVQ==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "codepie";
