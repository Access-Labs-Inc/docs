<div className="md-title">
Deeper explanation
</div>

<div className="md-description">
Understanding how Access Protocol works
</div>

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

## Technical details of Access Protocol

Access Protocol, a groundbreaking innovation in digital content monetization,
is underpinned by advanced technology, namely the Solana blockchain.
Solana's high-speed, high-capacity network makes it an ideal blockchain for Access Protocol's microtransaction-intensive model,
accommodating the large volumes of token transfers that occur between content creators and consumers.

The architecture of Access Protocol involves users staking ACS tokens, the native cryptocurrency of the platform,
into a content publisher's pool.
These tokens are distributed to both stakers and content publishers according to an inflation schedule defined in the
contral state of the protocol.
Additionally, the protocol includes the ability to create and sell bonds through a bond account,
enabling the sale of locked tokens with linear vesting.

Access Protocol utilizes Solana programs (also known as smart contracts) to facilitate these complex interactions.
The main Access Protocol Solana program governs the staking of ACS tokens, the distribution of rewards, and the creation
and sale of bonds. All these operations happen on-chain, ensuring transparency, security and decentralization of the protocol.
The source code of the Access Protocol Solana programs is available on GitHub under the
[core program](https://github.com/Access-Labs-Inc/access-protocol) and
[transferable subscription program](https://github.com/Access-Labs-Inc/access-protocol-nft) repositories.

Publishers can integrate Access Protocol on their websites and web-based applications to provide exclusive,
paywalled content to their Access subscribers.
Access Protocol can be integrated using our JavaScript bindings together with
[Solana wallet connect](https://solana.com/developers/cookbook/wallets/connect-wallet-react).
JavaScript bindings for our core and transferable subscription programs are available on npm in the `@accessprotocol/js`
and `@accessprotocol/nft` packages.
For publishers that do not want to implement wallet connect on their website, there is the Acccess Protocol payment gate
integration.
For more detailed information on the possible integrations, see [the integrations section](/guide#integration-guides).
