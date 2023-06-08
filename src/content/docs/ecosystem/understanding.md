---
title: Deeper explanation
description: Understanding of how Access Protocol works
---

## How does Access Protocol function?

Access Protocol is designed around a unique model that empowers users to lock ACS tokens to a creator's pool.
Once locked, users gain access to the creator's content until they decide to unlock their tokens,
eliminating the need to deal with recurring credit card charges. To begin, users first acquire ACS tokens,
which they then lock into their chosen creator's pool.

The platform is built around a fungible token (ACS) that can be used with all participating creators.
This offers users a more consistent experience, as they don't need to navigate various credit card payment methods.
Each creator receives ACS tokens in proportion to the amount of ACS tokens locked in their pool,
relative to the total number of locked tokens across the ecosystem.

Creators are given a more effective way to monetize their content and broaden its distribution,
while users are provided with a user-friendly, streamlined experience.
Additionally, creators have the option to distribute ACS tokens or other rewards,
such as NFT drops, exclusive event access, and bonus features, to those who have locked their ACS tokens with them.

This innovative fee-based model enables creators to immediately start earning revenue from their audience and
make their content available to a larger portion of their user base.
By reducing barriers to monetization, the digital content market could potentially increase by a factor of ten.

## The Technical Backbone of Access Protocol

Access Protocol, a groundbreaking innovation in digital content monetization,
is underpinned by advanced technology, namely the Solana blockchain and smart contracts.
Solana's high-speed, high-capacity network makes it an ideal blockchain for Access Protocol's microtransaction-intensive model,
accommodating the large volumes of token transfers that occur between content creators and consumers.

The architecture of Access Protocol involves users staking ACS tokens, the native cryptocurrency of the platform,
into a content publisher's pool, aptly named the [StakePool](https://github.com/Access-Labs-Inc/access-protocol).
These tokens are distributed to both stakers and content publishers according to an inflation schedule defined in the
CentralState of the protocol.
Additionally, the protocol includes the ability to create and sell bonds through a BondAccount,
enabling the sale of locked tokens with linear vesting.

The ACCESS Protocol utilizes smart contracts to facilitate these complex interactions.
The smart contract code is stored in the program folder and can be generated using Rust doc,
a tool included in the Rust programming language. This smart contract governs the staking of
ACS tokens, the distribution of rewards, and the creation and sale of bonds, ensuring that these processes run smoothly and securely.

To accommodate the web3 wallet authentication and authorization requirements, publishers need to adapt their backend infrastructures.
This authentication process relies on signature verifications. As such, the backends folder of the protocol provides an example
implementation of a REST API using a Solana wallet for authentication and JWT authorization, which can be implemented
in Javascript, Rust, Go, and Python. It is recommended to use either Javascript or Rust due to their superior Solana tooling.

Moreover, Javascript bindings of the smart contract are contained in the js folder, which is published on NPM,
a popular package manager for Javascript. These bindings allow developers to interact with the smart
contract from a Javascript environment. This makes it easier for developers to integrate the ACCESS Protocol into web-based platforms, extending its usability.

In conclusion, the implementation of Access Protocol on Solana showcases the power of blockchain and
smart contracts in transforming the digital content monetization landscape.
This revolutionary approach leverages cutting-edge technology to provide a fairer and more effective system for content creators and consumers alike
