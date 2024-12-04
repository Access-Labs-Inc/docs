<div className="md-title">
Deeper explanation
</div>

<div className="md-description">
Understanding how Access Protocol works
</div>

## How does Access Protocol function?

Access Protocol is designed around a unique model that allows users to subscribe to content by staking ACS to a creator's pool.
Once staked, users gain access to the creator's content until they decide to unstake their tokens,
eliminating the need to deal with recurring credit card charges. To begin, users first acquire ACS tokens,
which they then stake into their chosen creator's pool.

Access Protocol is built around a fungible token (ACS) that can be used with all participating creators.
This offers users a more consistent experience, as they don't need to navigate various credit card payment methods.
Each creator receives ACS tokens in proportion to the amount of ACS tokens staked in their pool,
relative to the total number of staked tokens across the ecosystem.

Creators are given a more effective way to monetize their content and broaden its distribution,
while users are provided with a user-friendly, streamlined experience.
Additionally, creators have the option to distribute ACS tokens or other rewards,
such as NFT drops, exclusive event access, and bonus features, to those who have staked their ACS tokens with them.

This innovative fee-based model enables creators to immediately start earning revenue from their audience and
make their content available to a larger portion of their user base.
By reducing barriers to monetization, the digital content market could potentially increase by a factor of ten.

## Technical details of Access Protocol

Access Protocol, a groundbreaking innovation in digital content monetization,
is underpinned by advanced technology, namely the Solana blockchain.
Solana's high-speed, high-capacity network makes it an ideal blockchain for Access Protocol's microtransaction-intensive model,
accommodating the large volumes of token transfers that occur between content creators and consumers.

To subscribe to content on Access Protocol users stake ACS, the native cryptocurrency of the platform, to a creator's pool.
To unsubscribe, users simply unstake their tokens.
The protocol also supports forever subscriptions, in which case the staked ACS is burned and cannot be withdrawn.

ACS tokens are distributed to both stakers and content creators according to an inflation schedule defined in the
central state of the protocol's Solana program. Inflation reward is split 50/50 between subscribers and the pool owner,
and it is proportional to the amount of ACS staked.

Access Protocol utilizes Solana programs (also known as smart contracts) for the essential functionality of the protocol.
The main Access Protocol Solana program governs the staking of ACS tokens, the distribution of rewards, and the
data of subscriptions. All these operations happen on-chain, ensuring transparency and security of the protocol.
The source code of the Access Protocol Solana programs is available on GitHub under the
[core program](https://github.com/Access-Labs-Inc/access-protocol) and
[transferable subscription program](https://github.com/Access-Labs-Inc/access-protocol-nft) repositories.

Publishers can integrate Access Protocol on their websites and web-based applications to provide exclusive,
paywalled content to their Access subscribers.
The recommended way to integrate Access Protocol is with our payment gate, available in `@accessprotocol/payment-gate` npm package.
It is also possible to interact directly with our Solana programs using our JavaScript bindings together with
[Solana wallet connect](https://solana.com/developers/cookbook/wallets/connect-wallet-react).
JavaScript bindings for our core and transferable subscription programs are available in the `@accessprotocol/js`
and `@accessprotocol/nft` npm packages.
For more detailed information on the possible integrations, see [the integrations section](/guide#integration-guides).

