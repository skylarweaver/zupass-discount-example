import { ticketProofRequest } from "@parcnet-js/ticket-spec";
//"ZeZomy3iAu0A37TrJUAJ+76eYjiB3notl9jiRF3vRJE",
//HZ3Zed6HmpTPJd9uMcEHnfVCG9Gaio3Jj/Ru0Fu3NhA
//"YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs",
export function getTicketProofRequest() {
  return ticketProofRequest({
    classificationTuples: [
    {
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs", // update this to the signer public key of pod you want to verify
      eventId: "5074edf5-f079-4099-b036-22223c0c6995", // update this to the event id of pod you want to verify
      productId: "f124d21c-84fc-42e4-8f38-234f23412bc8",
    },{
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs", // update this to the signer public key of pod you want to verify
      eventId: "5074edf5-f079-4099-b036-22223c0c6995", // update this to the event id of pod you want to verify
      productId: "27bbc1f3-79fe-48a2-b50f-43113ac4ecc5",
    },{
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs", // update this to the signer public key of pod you want to verify
      eventId: "5074edf5-f079-4099-b036-22223c0c6995", // update this to the event id of pod you want to verify
      productId: "d56f0781-401c-4b7b-9f05-9da601518b29",
    },{
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs", // update this to the signer public key of pod you want to verify
      eventId: "5074edf5-f079-4099-b036-22223c0c6995", // update this to the event id of pod you want to verify
      productId: "45b07aad-b4cf-4f0e-861b-683ba3de49bd",
    },{
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs", // update this to the signer public key of pod you want to verify
      eventId: "5074edf5-f079-4099-b036-22223c0c6995", // update this to the event id of pod you want to verify
      productId: "e6df2335-00d5-4ee1-916c-977d326a9049",
    },{
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs", // update this to the signer public key of pod you want to verify
      eventId: "5074edf5-f079-4099-b036-22223c0c6995", // update this to the event id of pod you want to verify
      productId: "2ab74a56-4182-4798-a485-6380f87d6299",
    },{
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs", // update this to the signer public key of pod you want to verify
      eventId: "5074edf5-f079-4099-b036-22223c0c6995", // update this to the event id of pod you want to verify
      productId: "9fb49dd1-edea-4c57-9ff2-6e6c9c3b4a0a",
    },{
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs", // update this to the signer public key of pod you want to verify
      eventId: "5074edf5-f079-4099-b036-22223c0c6995", // update this to the event id of pod you want to verify
      productId: "1ad9e110-8745-4eed-8ca5-ee5b8cd69c0f",
    },{
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs", // update this to the signer public key of pod you want to verify
      eventId: "5074edf5-f079-4099-b036-22223c0c6995", // update this to the event id of pod you want to verify
      productId: "6b0f70f1-c757-40a1-b6ab-a9ddab221615",
    },
    ],
    fieldsToReveal: {
      attendeeEmail: true,
      attendeeName: true,
      eventId: true,
    },
    externalNullifier: {
      type: "string",
      value: "zupass-discount-example-v1" // Set app-specific nullifier here
    }
  });
}
