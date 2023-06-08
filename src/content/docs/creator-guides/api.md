---
title: How to use API
description: How to access Access Protocol API endpoints
---

In order to communiate with our private API endpoints you'll have to have JWT token.

## What is JWT token?
You can read about it here: [JWT token introduction](https://jwt.io/introduction/).

## Get JWT token

1. Visit ["HUB"](https://hub.accessprotocol.co/)
2. Login with your creator's wallet
3. Navigate to ["Creator Dashboard"](https://hub.accessprotocol.co/creator):

![Creators Dashboard Screenshot](../../../assets/api/creators_dashboard/navigation.webp)

4. Click "Copy" button on API key field:

![API key Screenshot](../../../assets/api/creators_dashboard/api_key_field.webp)

5. Click copy button that will copy the JWT token into your clipboard

This is JWT token that never expires so be careful where and with whom you share it. It should stay as secure as possible.

## Example of using JWT token

You can test your JWT token with CLI `curl` like this (--KEY-- with actual JWT token):

```bash
export ACS_API_KEY=--KEY--
curl https://go-api.accessprotocol.co/user \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ACS_API_KEY"
```

and as output you should see something like this:
```json
{"EnabledEmailAutoSubs":false,"Pubkey":"7Q34nmDP1srbYSQJH5b43heZpPtsssiRZa17hLnx5Gqx","Role":"admin","OwnedPool":{"Pubkey":"2hQSDVwJLbtwHzi3CKj8pmiQzLyfKZs5ZDhT1QZdHXv3","Name":"Telegram","Benefits":"","Description":"Telegram test pool","Website":"https://accessprotocol.co","Email":"ladi@accessprotocol.co","LogoImageURL":"https://ap-staging.fra1.digitaloceanspaces.com/d8760345-fdf1-11ed-bd11-8e0f9ac77f3d","HeroImageURL":"https://ap-staging.fra1.digitaloceanspaces.com/d87bf5d3-fdf1-11ed-bd11-8e0f9ac77f3d","ProfileImageURL":"https://ap-staging.fra1.digitaloceanspaces.com/d8677cc6-fdf1-11ed-bd11-8e0f9ac77f3d","UserPubkey":"7Q34nmDP1srbYSQJH5b43heZpPtsssiRZa17hLnx5Gqx","CollectEmails":false,"DisplayFE":true,"CreatedAt":"2023-05-29T09:24:27.966677+02:00","UpdatedAt":"2023-05-29T09:24:27.969427+02:00"},"Username":"7Q34...5Gqx","CreatedAt":"2023-05-29T09:22:52.411033+02:00","UpdatedAt":"2023-05-29T09:22:52.411033+02:00"}
```
