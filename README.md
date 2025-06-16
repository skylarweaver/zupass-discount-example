# Zupass Discount Example: POD Authentication Reference

This repository is a reference implementation for authenticating a **POD** (Provable Object Data) using [Zupass](https://zupass.org), built with Next.js and the Parcnet Zapp SDK. It demonstrates how to request and verify zero-knowledge proofs about user data (such as event tickets), and is designed to be easily customized for your own use case.

---

## What is a POD?

A **POD** (Provable Object Data) is a cryptographically signed, Merkle-tree-based data object that enables users to store, share, and prove facts about their data without revealing everything. PODs are the foundation for privacy-preserving, interoperable apps.

- Learn more: [POD Introduction](https://pod.org/pod/introduction)
- Zupass and the Z-API: [Z-API Introduction](https://pod.org/z-api/introduction)

---

## Quickstart

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/)

### Install & Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Customization Guide

To use this repo for your own event or application, you **must** update several fields to match your use case.

### 1. Zapp Name & Permissions
- **File:** `src/app/home.tsx`
- **What to change:**
  - `name`: Give your Zapp a unique, descriptive name.
  - `permissions`: Set the permissions and collections your app needs. For example, to request proofs from a specific collection:
    ```js
    permissions: {
      REQUEST_PROOF: { collections: ["POD Collection Name"] },
      READ_PUBLIC_IDENTIFIERS: {},
    }
    ```
- **Docs:** [Z-API Getting Started](https://pod.org/z-api/getting-started)

### 2. Collection IDs
- **File:** `src/app/home.tsx` and `src/utils/ticketProof.ts`
- **What to change:**
  - Update all instances of the collection name (e.g., `"Devcon SEA"`) to the collection you want to make proofs on.

### 3. Proof Request Details
- **File:** `src/utils/ticketProof.ts`
- **What to change:**
  - `signerPublicKey`: The public key of the POD issuer you want to verify.
  - `eventId`: The event or product ID for your use case.
  - `fieldsToReveal`: Which fields from the POD/ticket to reveal in the proof (e.g., `attendeeEmail`, `attendeeName`).
  - `externalNullifier`: Optionally set an app-specific string to prevent proof reuse across apps (e.g., to prevent double claiming of discounts).
- **Docs:** [Ticket Proofs](https://pod.org/z-api/ticket-proofs)

### 4. (Optional) Advanced Permissions
- You may request additional permissions such as `SIGN_POD`, `READ_POD`, `INSERT_POD`, or `DELETE_POD` as needed. See [Z-API Getting Started](https://pod.org/z-api/getting-started#defining-your-zapp) for details.

---

## File Reference

- **src/app/home.tsx**: Main client logic. Sets up the Zapp provider, requests proofs, and displays results.
- **src/utils/ticketProof.ts**: Defines the proof request (event, signer, fields to reveal, nullifier). **Customize this for your event/use case.**
- **src/app/api/verify/route.ts**: Backend API route for verifying proofs using the GPC library.
- **src/utils/serialize.ts**: Handles serialization/deserialization of proof data for transmission.
- **next.config.ts**: Ensures cryptographic artifacts are available at runtime (required for proof verification).
- **package.json**: Scripts and dependencies for pnpm.

---

## Troubleshooting & Tips

- **Permissions/Collections:** Make sure your Zapp requests the correct permissions and collection names, or proof requests will fail.
- **Artifacts:** If you see errors about missing artifacts, ensure your dependencies are installed and the `public/artifacts` directory is present (handled by the Next.config.ts build config).
- **Learn More:**
  - [POD Introduction](https://pod.org/pod/introduction)
  - [GPC Introduction](https://pod.org/gpc/introduction)
  - [Z-API Getting Started](https://pod.org/z-api/getting-started)
  - [Ticket Proofs](https://pod.org/z-api/ticket-proofs)

---

## Further Reading
- [PODs: What & Why](https://pod.org/pod/introduction)
- [General Purpose Circuits (GPC)](https://pod.org/gpc/introduction)
- [Z-API: Building Zapps](https://pod.org/z-api/introduction)
- [Ticket Proofs](https://pod.org/z-api/ticket-proofs)
- [Zupass](https://zupass.org)
