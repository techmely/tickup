import { customAlphabet } from "nanoid";

/**
 * You just increase the length if necessary to improve performance
 * Attention to the security(id is key)
 *
 * Characters	Length	Total   States
 * UUID	      16	    32	    16^32 = 3.4e+38
 * Base58	    58	    22	    58^22 = 6.2e+38
 * ---------------------------------------------------------
 * Length	    Example	                          Total States
 * nanoid(8)	re6ZkUUV	                        1.3e+14
 * nanoid(12)	pfpPYdZGbZvw	                    1.4e+21
 * nanoid(16)	sFDUZScHfZTfkLwk	                1.6e+28
 * nanoid(24)	u7vzXJL9cGqUeabGPAZ5XUJ6	        2.1e+42
 * nanoid(32)	qkvPDeH6JyAsRhaZ3X4ZLDPSLFP7MnJz	2.7e+56
 *
 *  See @https://unkey.dev/blog/uuid-ux
 */
export const generateId = customAlphabet(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
);

export const DEFAULT_PREFIX_ID_LENGTH = 22;
export const ENTITY_ID_LENGTH = 25;

export function generatePrefixId(prefix = "tu", length = DEFAULT_PREFIX_ID_LENGTH): string {
  return `${prefix}_${generateId(length)}`;
}

export function generateUserId(length = DEFAULT_PREFIX_ID_LENGTH) {
  return generatePrefixId("u", length);
}
