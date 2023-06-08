---
title: Why using base58 encoding?
description: Explanation why Solana utilizes base58 encoding.
---

The Solana blockchain uses base58 encoding for public keys and addresses primarily because it has some benefits that make it suitable for this use case.

Here are some reasons for using base58:

__Human-Readable__: Base58 is easier to read and write for humans than binary or hexadecimal encodings. This can make it easier to share and verify addresses.

__Error Detection__: Base58, unlike Base64, avoids visually similar characters like 0 (zero) and O (capital o), or l (lowercase L) and I (capital i). This reduces the chance of typing errors when the addresses are manually entered.

__Compatibility__: Base58 doesn't use characters that can be problematic in some contexts, like '+', '/', or '=' which are present in base64. This makes base58 strings safe to include in URLs, filenames, or command-line parameters, without requiring additional escaping or encoding.

__Compact__: It's a more space-efficient way of encoding large numbers than in decimal or hexadecimal. This means that keys can be shorter than if they were represented in those other formats, which can make them easier to manage.

While the Bitcoin blockchain also uses base58 encoding for similar reasons, different blockchain networks use different encoding schemes depending on their specific requirements. For example, Ethereum uses hexadecimal encoding for addresses, while other blockchains may use base32 or base64.
