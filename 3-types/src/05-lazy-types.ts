import { acceptsString } from './03-functions'

/**
 * Her får vi ikke den samme feilen som tidligere, det er fordi vi har eksplisitt sagt at input typen er `any`.
 * Men det fører til problemer når vi skal bruke `input` variabelen.
 */
export const acceptsAny = (input: any) => {
  const stringValue: string = input

  acceptsString(stringValue)
}

acceptsAny(6)

export const acceptsUnknown = (input: unknown) => {
  if (typeof input !== 'string') throw new Error('Input was not string')
  const stringValue: string = input

  // Får du ikke feil her så må du fikse feilen i acceptsString i `03-functions.ts` filen
  acceptsString(stringValue)
}

acceptsUnknown(false)
