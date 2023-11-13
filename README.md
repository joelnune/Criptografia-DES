# Criptografia-DES

 $env:NODE_OPTIONS = "--openssl-legacy-provider"

# código da biblioteca
https://github.com/nodejs/node/tree/main/src/crypto

# exemplo pseudo-codigo:

	var key 
	var keys[16]
	var left, right

	// Generate Keys

	// PC1 (64 bits to 56 bits) 
	key := permutation(key, PC1)
	left := (key rightshift 28) and 0xFFFFFFF
	right := key and 0xFFFFFFF

	for i from 0 to 16 do
	right := right leftrotate KEY_shift[i]
	left := left leftrotate  KEY_shift[i]
	var concat := (left leftshift 28) or right
	// PC2 (56bits to 48bits)
	keys[i] := permutation(concat, PC2)
	end for

	// To decrypt a message reverse the order of the keys
	if decrypt do
	reverse keys
	end if

	// Encrypt or Decrypt
	for each 64-bit chunk of padded message do
	var tmp

	// IP
	chunk := permutation(chunk, IP)
	left := chunk rightshift 32
	right := chunk and 0xFFFFFFFF
	for i from 0 to 16 do
		tmp := right
		// E (32bits to 48bits)
		right := expansion(right, E)
		right := right xor keys[i]
		// Substitution (48bits to 32bits)
		right := substitution(right)
		// P
		right := permutation(right, P)
		right := right xor left
		left := tmp
	end for
	// Concat right and left
	var cipher_chunk := (right leftshift 32) or left
	// FP
	cipher_chunk := permutation(cipher_chunk, FP)
	end for
