import { deserializeProofResult } from "@/utils/serialize";
import { getTicketProofRequest } from "@/utils/ticketProof";
import { gpcVerify } from "@pcd/gpc";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
// @ts-ignore ffjavascript does not have types
import { getCurveFromName } from "ffjavascript";

const GPC_ARTIFACTS_PATH = path.join(process.cwd(), "public/artifacts");

export async function POST(req: NextRequest) {
  const { serializedProofResult } = await req.json();
  const { boundConfig, revealedClaims, proof } = deserializeProofResult(
    serializedProofResult
  );

  const request = getTicketProofRequest().getProofRequest();

  // Multi-threaded verification seems to be broken in NextJS, so we need to
  // initialize the curve in single-threaded mode.

  // @ts-ignore
  if (!globalThis.curve_bn128) {
    // @ts-ignore
    globalThis.curve_bn128 = getCurveFromName("bn128", { singleThread: true });
  }

  const res = await gpcVerify(
    proof,
    {
      ...request.proofConfig,
      circuitIdentifier: boundConfig.circuitIdentifier,
    },
    revealedClaims,
    GPC_ARTIFACTS_PATH
  );

  if (res === true) {
    // do the thing you want to do with the proof
    // maybe you want to issue a discount code to the user, in that case:
    // you need a backend database to store nullifiers and/or ticketIds and a place to store discount codes.
    // See https://github.com/robknight/zupass-discount-codes/blob/main/src/app/api/verify/route.ts for an example.
  }

  return NextResponse.json({ verified: res });
}
